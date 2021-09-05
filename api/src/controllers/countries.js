const { Country, Activy } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
const { v4: UUIDV4 } = require('uuid');


const getCountry = async () => {
    const apiUrl = await axios.get('https://restcountries.eu/rest/v2/all')

    const apiInfo = await apiUrl.data.map(elem => {
        return {
            name: elem.name,
            id: elem.alpha3Code,
            flag: elem.flag,
            continent: elem.region,
            subregion: elem.subregion,
            area: elem.area,
            population: elem.population,
            capital: elem.capital,
        }
    })
    let flag = await Country.findAll();
    if (!flag.length) await Country.bulkCreate(apiInfo);
    return getCountry
}

const getDbInfo = async () => {
    try {
        const countryTotal = await getApiInfo();
        console.log(countryTotal)
        let flag = await Country.findAll();
        if (!flag.length) await Country.bulkCreate(countryTotal);
        console.log(Country)
    } catch (err) {
        console.log(err)
    }
}


const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

const getName = async (req, res) => {
    const name = req.query.name;
    let countryTotal = await getApiInfo();
    if (name) {
        let countryName = await countryTotal.filter(elem => elem.name.toLowerCase().includes(name.toLowerCase()))
        countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send('No se ecuentra')
    } else {
        res.status(200).send(countryTotal)
    }
}

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
    getName,
    getCountryById
}