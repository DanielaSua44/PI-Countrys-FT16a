const { Country, Activy, country_activy } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');



const getCountry = async (req, res) => {
    const { name, continent } = req.query;
    if (name) {
        try {
            let char = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    },
                    include: {
                        model: Activy,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }
                }
            });
            return res.json(char);
        } catch (err) {
            console.log(err);
        }
    } else if (continent) {
        try {
            let char = await Country.findAll({
                where: {
                    continent: {
                        [Op.iLike]: '%' + continent + '%'
                    }
                },
                include: { model: Activy }
            });
            return res.json(char);
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            let char = await Country.findAll({
                include: { model: Activy }
            });
            return res.json(char);
        } catch (err) {
            console.log(err)
        }
    }
};


const getCountryById = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        let country = await Country.findOne({
            where: {
                id: id
            },
            include: {
                    model: Activy,
                    attributes: ['name','duration','season','difficulty'],
                    through:{
                        attributes:[]
                    }
            }
        });
        return res.json(country);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'No se pudo cumplir con la solicitud' })
    }
}

module.exports = {
    getCountry,
    getCountryById
}