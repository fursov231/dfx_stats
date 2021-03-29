import ReactTable from 'react-table-6'
import React from "react";

export default function TransactionList(props) {

    function From(props) {

        return(
            <>
                <div>
                    <div>
                        <a href={`https://bscscan.com/address/${props.from}`} activeClassName="active">{props.from}</a>
                    </div>

                </div>
            </>
        )
    }

    function Timesatmp(props) {

        return(
            <>
                <div>
                    <div>
                        {(new Date(+props.timeStamp*1000)).toString()}
                    </div>
                </div>
            </>
        )
    }

    function GasUsed(props) {

        return(
            <>
                <div>
                    <div style={{textAlign: "center"}}>
                        {(props.gasUsed * 0.00000001).toFixed(8)}
                    </div>

                </div>
            </>
        )
    }

    const columns = [
        {Header: 'Покупатель', Accessor: 'From', Cell: row => <From {...row.original}/>},
        {Header: 'Время покупки', Accessor: 'Timestamp', Cell: row => <Timesatmp {...row.original}/>},
        {Header: 'Комиссия', Accessor: 'gasUsed', Cell: row => <GasUsed {...row.original}/>},

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
        </>
    )
}







