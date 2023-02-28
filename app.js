require("dotenv").config();

const express = require("express");
const path = require("path"); //images directory 
const cors = require("cors"); //Used for connection  with  front-end

const port = process.env.PORT;

const app = express();

//config JSON and form data response

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
const router =  require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});