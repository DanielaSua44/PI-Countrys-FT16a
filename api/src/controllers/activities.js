const axios = require('axios');
const { Country, Activy, country_activy } = require('../db');
const { Op } = require("sequelize");


const addActivy = async(req, res)=> {
    let {
        name,
        difficulty,
        duration,
        season,
        country
    } = req.body
    try {
        const newActivity = await Activy.create({
            name,
            difficulty,
            duration,
            season
        })
        await newActivity.addCountry(country);
        return res.json(newActivity);

    } catch (error) {
        return res.send(error)
    }
};

const getActivity = async (_req, res)=> {
    try {
         const activys = await Activy.findAll({
            include: { model: Country}
        });
        return res.json(activys);
    } catch (err) {
        console.log(err)
    }
}
 
module.exports ={
    addActivy,
    getActivity
}