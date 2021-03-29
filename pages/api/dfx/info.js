import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        "X-CMC_PRO_API_KEY": "e53a20b7-ddd6-4ad0-8dbc-13787839f1a6"},
});


export default (req, res) => {
    return new Promise(resolve => {

        instance.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=7797").then(cg => {

                    let response = {
                        "current_price": cg.data.data[7797].quote.USD.price.toFixed(2),
                        "total_volume": cg.data.data[7797].quote.USD.volume_24h.toFixed(0),
                        "market_cap": cg.data.data[7797].quote.USD.market_cap,
                    }

                    res.send(response);
                    res.status(200).end();
                    console.log(response.current_price)
                    resolve();


        })
    })
}
