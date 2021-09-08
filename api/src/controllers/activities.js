const { Country, Activy, country_activy } = require('../db');
const { Op } = require("sequelize");

const activities = async (name,difficulty,duration,season,countryId) => {
    try {
        const newActivy = await Activy.create({
            name,
            difficulty,
            duration,
            season
        })
        await newActivity.addCountries(countryId);
        return res.json(newActivy);
    }catch(error){
        console.log(error)
    } 
};

const getActivy = async (req, res, next) => {
    const name = req.query;
    if (name) {
        try {
            let char = await Activy.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                }
            });
            return res.json(char);
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            let char = await Activy.findAll({
                include: { model: Country }
            });
            return res.json(char);
        } catch (err) {
            console.log(err)
        }
    }
};

module.exports = {
    activities,
    getActivy
}