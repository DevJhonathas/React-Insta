require("dotenv").config();

const express = require("express");
const path = require("path"); //images directory 
const cors = require("cors"); //Used for connection  with  front-end

const port = process.env.PORT;

const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// solve Cors
app.use(cors({ credentials: true, origin: "htpp://localhost:3000" }));

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// db connection
require("./config/db.js");

//routes
const router =  require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});