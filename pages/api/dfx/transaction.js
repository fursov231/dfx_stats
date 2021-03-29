import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        "apikey": "HPYT9BQZIWQ8FW1EVG1IZNP3BKBGE1JNWX"
    },
});

    export default (req, res) => {
        return new Promise(resolve => {

            instance.get("https://api.bscscan.com/api?module=account&action=txlist&address=0x74B3abB94e9e1ECc25Bd77d6872949B4a9B2aACF&startblock=1&endblock=99999999&sort=asc").then(bsc => {

                let response = {"hash": bsc.data.result}

                let txList = Object.assign([], response.hash).reverse().slice(0, 10)

                res.send(txList);
                res.status(200).end();
                resolve();
            })
        })
    }
