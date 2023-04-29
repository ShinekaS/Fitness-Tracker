'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('physicalActivities',
      [{
        Cycling: 0,
        Jogging: 0,
        Pushups: 0,
        Running: 0,
        Situps: 0,
        Squats: 0,
        Swimming: 0,
        Walking: 0
      }]);
    },

      async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('physicalActivities', {}); 
      }
    };