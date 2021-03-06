//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force:true}).then(async () => {
  const apiUrl = await axios.get('https://restcountries.eu/rest/v2/all')
  let apiCountry = apiUrl.data
  const apiInfo = await apiCountry.map(elem => {
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
  await Country.bulkCreate(apiInfo)
  console.log('Conectado a la BD')
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
