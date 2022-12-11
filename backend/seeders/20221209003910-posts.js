'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      user_id: 2,
      genre_id: 1,
      title: 'Place Holder',
      post_text: 'This is a place holder post!'
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
