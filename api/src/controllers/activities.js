const { Country, Activy } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');

const postActibity = async (res,req) => {
    const activy = req.body
    try{
       let [acty , created] = await Activy.findOrCreate({
           where:{
               name:activy.name,
               difficulty:activy.difficulty,
               duration:activy.duration,
               season:activy.season
           }
       });
       console.log(created);
       await acty.setCountries(activy.charId)//id puede ser un arreglo para que me relacione con los paises
       return res.json(acty)
    }catch(err){
        console.log(err)
    }
}

module.exports= postActibity;