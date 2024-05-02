'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', [
      {
        username: 'admin',
        email: 'admin@example.com',
        password: 'hashed_password', // Nahraďte hashom hesla
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};

