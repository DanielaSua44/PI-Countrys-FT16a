const { Country, Activy } = require('../db');
const { Op, UUID } = require("sequelize");
const { v4: UUIDV4 } = require('uuid');
const axios = require('axios');

const activities = async (res, req, next) => {
    const { name, countryId, season, difficulty, duration } = req.body;
    try {
        if (name && difficulty && duration && season) {
            const newActivity = await Activy.create({
                id:UUID(),
                name,
                difficulty,
                duration,
                season,
            });
            try {
                let country = await Country.findAll({
                    where: {
                        id: countryId,
                    }
                })

                await newActivity.addCountries(country)
                return res.send('actividad creada')
            }catch(err){
                console.log(err)
            }
        }else{
            return res.send('Falta informacion')
        }
    } catch (error) {
            next(error)
        }
    }


module.exports = activities;