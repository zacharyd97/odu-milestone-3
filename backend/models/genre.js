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
    static associate(User, Genre_Users, Post) {
      Genre.belongsToMany(User, {
        foreignKey: "user_id",
        as: "users",
        through: Genre_Users
      })

      Genre.hasMany(Post, {
        foreignKey: "genre_id",
        as: "posts"
      })
    }
  }
  Genre.init({
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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