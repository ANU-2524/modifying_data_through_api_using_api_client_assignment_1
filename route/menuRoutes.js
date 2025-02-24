const express = require("express") ;
const ModelMenu = require("../model/menuModel") ;
const router = express.Router() ;

router.post("/" , async(req , res)=>{
    try{
        const {name , description , price} = req.body ; 
        if (!name || !price){
            return res.status(404).json({error : "Name and Price are required."}) ;
        }

        const newMenuModel = new ModelMenu({name , description , price }) ;
        await newMenuModel.save() ;
        res.status(200).json({Message : "Menu Item Added" , data : newMenuModel}) ;
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error"}) ;
    }
})

router.get("/" , async(req , res)=>{
    try{
        const MenuItem = await ModelMenu.find() ;
        res.status(200).json(MenuItem) ;
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error"})
    }
}) 

module.exports = router ; 