'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      logoBackground: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      postedAt: {
        type: Sequelize.STRING
      },
      contract: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      apply: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      hidden: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};