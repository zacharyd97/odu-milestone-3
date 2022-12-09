'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User) {
      genre.belongsToMany(User, {
        through: 'Genre_Users'
      })
    }
  }
  Genre.init({
    genre_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
    tableName: 'genre',
    timestamps: false
  });
  return Genre;
};