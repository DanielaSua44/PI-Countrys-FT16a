const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activy', {
    name: {
      type: DataTypes.STRING,
      allowNull:true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    duration: {
      type: DataTypes.STRING,
      allowNull:true
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Winter', 'Fall', 'Spring'),
      allowNull:true
    },
  },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
