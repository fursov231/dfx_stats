import ReactTable from 'react-table-6' // React-table
import {useState, useEffect} from 'react' // State storage for calculations

export default function Transaction(props) {
    // Initialize distribution input state holder
    const [distribution, setDistribution] = useState({
        "supply": {
            'DAI': 0,
            'USDC': 0,
            'ETH': 0,
            'USDT': 0,
            'ZRX': 0,
            'REP': 0,
            'BAT': 0,
            'WBTC': 0,
            'SAI': 0
        },
        "borrow": {
            'DAI': 0,
            'USDC': 0,
            'ETH': 0,
            'USDT': 0,
            'ZRX': 0,
            'REP': 0,
            'BAT': 0,
            'WBTC': 0,
            'SAI': 0
        }});

    // On change in distribution, re-calculate token distribution
    useEffect(() => calculateValues(), [distribution]);

    // Setup hooks to hold input values.
    // This could have been one item but this is easier to manage.
    const [interest_earned, set_interest_earned] = useState(0);
    const [interest_paid, set_interest_paid] = useState(0);
    const [comp_earned, set_comp_earned] = useState(0);
    const [comp_earned_usd, set_comp_earned_usd] = useState(0);
    const [net_earnings, set_net_earnings] = useState(0);
    const [net_apy, set_net_apy] = useState(0);

    // Update distribution function
    function updateDistribution(type, symbol, value) {
        let opposite = {...distribution[type === 'supply' ? 'borrow' : 'supply']};
        let existing = {...distribution[type === 'supply' ? 'supply' : 'borrow']}

        // Mutate object depending on input field
        setDistribution({
            [type === 'supply' ? 'borrow' : 'supply']: {
                ...opposite
            },
            [type === 'supply' ? 'supply' : 'borrow']: {
                ...existing,
                [symbol]: isNaN(value) ? 0 : value
            }
        });
    }



    // React-table setup
    const columns = [
        {Header: 'Хэш транзакции', Accessor: 'image', Cell: row => <MarketItem {...row.original} />},
        {Header: 'Время', Accessor: 'gross_supply', Cell: row => <FormatItem {...row.original} type="supply" />},
        {Header: 'Адрес отправителя', Accessor: 'supply_apy', Cell: row => <FormatItemAPY {...row.original} type="supply" />},
        {Header: 'Адрес получателя', Accessor: 'gross_supply', Cell: row => <CalcCell {...row.original} type="supply" updateDistribution={updateDistribution} distribution={distribution}/>},
        {Header: 'Комиссия', Accessor: 'gross_borrow', Cell: row => <FormatItem {...row.original} />},
    ];
    return (
        <>
            <ReactTable
                data={props.data}
                columns={columns}
                showPagination={false}
                defaultPageSize={props.data.length}
                resizable={false}
                className="comp-table"
            />

            <style global jsx>{`
            .token-distribution {
                width: calc(100% - 80px);
                margin: 20px;
                padding: 20px;
                background-color: rgba(214, 2, 44, 0.1);
                border: 1px solid rgb(214, 2, 44);
                border-radius: 5px;
                text-align: center;
            }
            .token-distribution > span {
                font-weight: bold;
                text-decoration: underline;
            }
            .token-distribution > div {
                display: inline-block;
                padding: 5px;
            }
            .token-distribution > div > label {
                display: block;
            }
            .token-distribution > div > input {
                display: block;
                height: 30px;
                margin-top: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
                text-align: center;
                font-size: 17px;
                width: 160px;
            }
            .-header {
                height: 30px;
                border-bottom: 1px solid #e7eaf3;
                box-shadow: none !important;
            }
            .-header > .rt-tr {
                font-size: 13px;
                font-weight: bold;
                color: #AAB8C1;
                line-height: 30px;
            }
            .rt-tbody, .rt-thead {
                min-width: 1055px !important;
            }
            .-header > .rt-tr > .rt-th:nth-of-type(1) > div {
                padding-left: 25px;
            }
            .-loading {
                display: none;
            }
            .-even {
                background-color: #FDFDFD;
            }
            .rt-th {
                text-align: left;
            }
            .rt-th, .rt-td {
                border-right: none !important;
            }
            .rt-td {
                border-bottom: none;
            }
            .rt-tr > .rt-th:nth-of-type(1), .rt-tr > .rt-td:nth-of-type(1) {
                width: 275px !important;
            }
            .rt-tr > .rt-th:nth-of-type(2), .rt-tr > .rt-td:nth-of-type(2) {
                width: 100px !important;
            }
            .rt-tr > .rt-th:nth-of-type(3), .rt-tr > .rt-td:nth-of-type(3) {
                width: 90px !important;
            }
            .rt-tr > .rt-th:nth-of-type(4), .rt-tr > .rt-td:nth-of-type(4) {
                width: 200px !important;
            }
            .rt-tr > .rt-th:nth-of-type(5), .rt-tr > .rt-td:nth-of-type(5) {
                width: 100px !important;
            }
            .rt-tr > .rt-th:nth-of-type(6), .rt-tr > .rt-td:nth-of-type(6) {
                width: 90px !important;
            }
            .rt-tr > .rt-th:nth-of-type(7), .rt-tr > .rt-td:nth-of-type(7) {
                width: 200px !important;
            }
            .rt-tr > .rt-td {
                padding: 0px;
            }
            .comp-table {
                border: none;
            }
            .ReactTable .rt-tbody .rt-tr-group:last-child {
                border-bottom: 1px solid rgba(0,0,0,.05);
            }
            `}</style>
        </>
    )

}

// Market image + symbol + name cell formatting
function MarketItem(props) {
    return(
        <>
            <div className="marketItem">
                <div>
                    <img src={props.image} alt={`${props.symbol} logo`} />
                </div>
                <div>
                    <span>{props.name}</span>
                    <br />
                    <span>{props.symbol}</span>
                </div>
            </div>
            <style jsx>{`
            .marketItem {
                display: inline-block;
                height: 70px;
                width: 270px;
            }
            .marketItem > div {
                display: inline-block;
                height: 100%;
            }
            .marketItem > div:nth-child(1) {
                width: 80px;
                vertical-align: top;
            }
            .marketItem > div:nth-child(2) {
                width: 190px;
                vertical-align: top;
            }
            .marketItem > div > img {
                height: 43.5px;
                width: 43.5px;
                transform: translate(18.25px, 13.25px);
            }
            .marketItem > div > span {
                display: inline-block;
                transform: translateY(19px);
            }
            .marketItem > div > span:nth-of-type(1) {
                font-weight: bold;
            }
            .marketItem > div > span:nth-of-type(2) {
                color: #ACBBC2;
                font-size: 14px;
            }
            `}</style>
        </>
    )
}

// Borrow/Supply cells formatting
function FormatItem(props) {
    return(
        <>
            <div className="format-item">
                <span>${props.type === 'supply' ? formatNum(props.gross_supply) : formatNum(props.gross_borrow)}</span>
                <br />
                {props.type === 'supply' ? (
                    props.gross_supply_change > 0 ? (
                        <span className="change-up">+{props.gross_supply_change.toFixed(2)}%</span>
                    ) : (
                        <span className="change-down">{props.gross_supply_change.toFixed(2)}%</span>
                    )
                ) : (
                    props.gross_borrow_change > 0 ? (
                        <span className="change-up">+{props.gross_borrow_change.toFixed(2)}%</span>
                    ) : (
                        <span className="change-down">{props.gross_borrow_change.toFixed(2)}%</span>
                    )
                )}
            </div>
            <style jsx>{`
            .format-item {
                height: 70px;
            }
            .format-item > span {
                display: inline-block;
                transform: translateY(18px);
            }
            .format-item > span:nth-of-type(1) {
                font-weight: 500;
            }
            .change-up {
                color: rgb(0, 190, 0);
                font-size: 14px;
            }
            .change-down {
                color: rgb(214, 2, 44);
                font-size: 14px;
            }
            `}</style>
        </>
    )
}

// APY cells formatting
function FormatItemAPY(props) {
    return(
        <>
            <div className="format-item">
                <span>{props.data_transaction.hash}%</span>
                <br />
                {props.type === 'supply' ? (
                    props.supply_apy_change > 0 ? (
                        <span className="change-up">+{props.supply_apy_change.toFixed(2)}</span>
                    ) : (
                        <span className="change-down">{props.supply_apy_change.toFixed(2)}</span>
                    )
                ) : (
                    props.borrow_apy_change > 0 ? (
                        <span className="change-up">+{props.borrow_apy_change.toFixed(2)}</span>
                    ) : (
                        <span className="change-down">{props.borrow_apy_change.toFixed(2)}</span>
                    )
                )}
            </div>
            <style jsx>{`
            .format-item {
                height: 70px;
            }
            .format-item > span {
                display: inline-block;
                transform: translateY(18px);
            }
            .format-item > span:nth-of-type(1) {
                font-weight: 500;
            }
            .change-up {
                color: rgb(0, 190, 0);
                font-size: 14px;
            }
            .change-down {
                color: rgb(214, 2, 44);
                font-size: 14px;
            }
            `}</style>
        </>
    )
}

// Formats numbers similar to Compound dashboard look
function formatNum(value) {
    // If value > a million
    if (value > 1000000) {
        // Cleaned million formatting
        return (value / 1000000).toFixed(2) + 'M';
    } else if (value > 1000) {
        // Else, cleaned thousands formatting
        return (value / 1000).toFixed(0) + 'K';
    }
}

// Input cell
function CalcCell(props) {
    // Updates array structure of parent state via updateDistribution function
    function updateNum(value) {
        props.updateDistribution(props.type === 'supply' ? 'supply' : 'borrow', props.symbol, parseFloat(value));
    }

    return (
        <>
            <div className="calc">
                <input type="number" step="any" value={props.distribution[props.type === 'supply' ? 'supply' : 'borrow'][props.symbol]} placeholder={`${props.symbol} (USD) value`} min="0" onChange={e => updateNum(e.target.value)} />
            </div>
            <style jsx>{`
            .calc > input {
                border: 1px solid #e7eaf3;
                border-radius: 5px;
                height: 30px;
                transform: translateY(20px);
                padding-left: 5px;
            }
            `}</style>
        </>
    )
}