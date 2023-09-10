'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the 'description' column
    await queryInterface.addColumn('Products', 'countryOfOrigin', {
      type: Sequelize.STRING,
      defaultValue: "Bharat"
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
