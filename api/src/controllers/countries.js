const { Country, Activy } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');



const getCountry = async (req, res) => {
    const {name,continent} = req.query;
    if(name){
        try{
            let char= await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]:'%'+name+'%'
                    }
                }
            });
            return res.json(char);
        }catch(err){
            console.log(err);
        }
    }else if(continent){
        try{
            let char = await Country.findAll({
                where:{
                    continent:{
                        [Op.iLike]:'%'+continent+'%'
                    }
                },
                include:{model: Activy}
            });
            return res.json(char);
        }catch(err){
            console.log(err)
        }
    }else{
        try{
            let char = await Country.findAll({
                include:{model: Activy}
            });
            return res.json(char);
        }catch(err){
            console.log(err)
        }
    }
};

const getCountryById = async (req, res) => {
    const { id } = req.params
    try {
        let country = await Country.findOne({
            where: {
                id: id
            },
            include :[
                {
                    model: Activy,
                    attributes: ['name', 'id'],
                },
            ]
        });
        return res.send(country);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getCountry,
    getCountryById
}