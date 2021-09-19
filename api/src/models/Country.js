const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Country = sequelize.define('country',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Country;
};
