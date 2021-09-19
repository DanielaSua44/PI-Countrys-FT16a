const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Activy = sequelize.define('activy',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Winter', 'Fall', 'Spring'),
        allowNull: false
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Activy;
};
