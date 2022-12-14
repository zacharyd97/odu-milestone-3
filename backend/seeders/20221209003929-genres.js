'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genres', [{
      name: 'Rock',
      description: 'Rock music is a broad genre of popular music that originated as "rock and roll".'

    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
