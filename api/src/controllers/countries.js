const { Country, Activy } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
const { v4: UUIDV4 } = require('uuid');


const getApiInfo = async () => {
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
    return apiInfo;
}

const getDbInfo = async () => {
    try{
        const countryTotal= await getApiInfo();
        let flag = await Country.findAll();
        if(!flag.length) await Country.bulkCreate(countryTotal);
        console.log(Country)
    }catch(err){
        console.log(err)
    }
}


const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

const getCountry = async (req, res) => {
    const name = req.query.name;
    let countryTotal = await getAllCountries();
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
    const countriesTotal = await getAllCountries();
    if (id) {
        const countryId = await countriesTotal.filter(elem => elem.id.toLowerCase().includes(id.toLowerCase()));
        countryId.length ?
            res.status(200).send(countryId) :
            res.status(404).send('No se encontro el id');
    }
}

module.exports = {
    getCountry,
    getCountryById
}