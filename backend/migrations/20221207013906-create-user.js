'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};