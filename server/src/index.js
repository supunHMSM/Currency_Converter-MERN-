const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async(req,res)=>{
const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=d311ee5e3438483daf5b3cabb23181fa`;

try {
    const namesResponse = await axios.get(nameURL);
    const nameData = namesResponse.data;

    return res.json({nameData})
} catch (error) {
    console.error(err);
}
})

//listen to port
app.listen(5000 , ()=>{
    console.log("SERVER STARTED")
})


