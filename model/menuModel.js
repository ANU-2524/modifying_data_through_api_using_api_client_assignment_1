const mongoose = require("mongoose") ;
const menuSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true 
    } , 
    description : {
        type : String 
    } , 
    price : {
        type : Number , 
        required : true 
    }
})

const ModelMenu = mongoose.model("menuModel" , menuSchema) ;

module.exports = ModelMenu ;

// name (String, required)
// - description (String)
// - price (Number, required)