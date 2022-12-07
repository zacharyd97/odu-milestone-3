'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User) {
      // define association here
      Comment.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
    }
  }
  Comment.init({
    comment_id: DataTypes.INTEGER,
    pageId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};