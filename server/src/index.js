const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//listen to port
app.listen(5000 , ()=>{
    console.log("SERVER STARTED")
})


