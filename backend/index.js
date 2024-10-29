const express = require('express')
const app = express()
const PORT = 3001
const HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANTID = "PGTESTPAYUAT86"
const SALTINDEX = 1;
const SALTKEY = "96434309-7796-489d-8924-ab56988a6076"
const axios = require('axios')
const uniqid = require('uniqid')
const sha256 = require('sha256')


app.get('/', (req, res) => {
    res.send('welcome to phonepe services')
})

app.get('/redirect-url/:merchantTransactionId', (req, res) => {
    const { merchantTransactionId } = req.params;
    if (merchantTransactionId) {
        const Xverify = sha256(`/pg/v1/status/${MERCHANTID}/${merchantTransactionId}` + SALTKEY) + "###" + SALTINDEX
        const options = {
            method: 'get',
            url: `${HOST_URL}/pg/v1/status/${MERCHANTID}/${merchantTransactionId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY' : Xverify,
                'X-MERCHANT-ID': merchantTransactionId,
            },

        };
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                // res.send(response.data)
                if(response.data.code === "PAYMENT_SUCCESS") {
                    res.redirect("/")
                }else if (response.data.code === "PAYMENT_ERROR"){
                      
                }
            })
            .catch(function (error) {
                console.error(error);
            });

        // res.send(`Redirecting to payment gateway for transaction id: ${merchantTransactionId}`)
    } else {
        res.send('Invalid transaction id')
    }
})

app.get('/pay', (req, res) => {
    const payEndpoints = "/pg/v1/pay";
    const merchantTransactionId = uniqid();
    const userId = 123

    const payload = {
        "merchantId": MERCHANTID,
        "merchantTransactionId": merchantTransactionId,
        "merchantUserId": userId,
        "amount": 30000,  // in paise
        "redirectUrl": `http://localhost:3001/redirect-url/${merchantTransactionId}`,
        "redirectMode": "REDIRECT",
        // "callbackUrl": "https://webhook.site/callback-url",
        "mobileNumber": "9999999999",
        "paymentInstrument": {
            "type": "PAY_PAGE"
        }
    }

    const bufferObj = Buffer.from(JSON.stringify(payload), "utf8");
    const base64EncodedPayload = bufferObj.toString("base64");
    const Xverify = sha256(base64EncodedPayload + payEndpoints + SALTKEY) + "###" + SALTINDEX
    const options = {
        method: 'post',
        url: `${HOST_URL}${payEndpoints}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            "X-VERIFY": Xverify
        },
        data: {
            request: base64EncodedPayload
        }
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data.data.instrumentResponse.redirectInfo.url);
            res.redirect(response.data.data.instrumentResponse.redirectInfo.url)
        })
        .catch(function (error) {
            console.error(error);
        });

})
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);

})  