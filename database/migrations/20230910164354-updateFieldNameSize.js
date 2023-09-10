'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // First, create a new column for the updated 'sizes' data
    await queryInterface.addColumn('Products', 'new_sizes', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: []
    });

    // Update the 'new_sizes' column with data from the 'sizes' column
    await queryInterface.sequelize.query(`
      UPDATE "Products"
      SET "new_sizes" = ARRAY["sizes"]
    `);

    // Remove the old 'sizes' column
    await queryInterface.removeColumn('Products', 'sizes');

    // Rename the 'new_sizes' column to 'sizes'
    await queryInterface.renameColumn('Products', 'new_sizes', 'sizes');

    // Add the 'description' column
    await queryInterface.addColumn('Products', 'description', {
      type: Sequelize.STRING
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
