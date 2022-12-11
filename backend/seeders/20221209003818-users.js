'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      user_name: 'John Doe',
      user_password: 'password',
      email: 'example@example.com',
      role: 'admin'
    },
    {
      user_name: 'Jane Doe',
      user_password: 'password',
      email: 'example2@example.com',
      role: 'user'
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
