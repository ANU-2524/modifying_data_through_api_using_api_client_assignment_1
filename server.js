const mongoose = require("mongoose") ;
const express = require("express") ;
const connection = require("./config/db")
const menuRoutes = require("./route/menuRoutes") ;
require("dotenv").config() ;

const app = express() ;

app.use(express.json()) ;

connection() ;

app.use("/menu" , menuRoutes) ;

const PORT = 9090 ; 

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`) ;
})