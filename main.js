// Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 4000;


//set template engine
app.set('view engine','ejs');

//route prefix
app.use("",require("./routes/routes"))



app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);
})


