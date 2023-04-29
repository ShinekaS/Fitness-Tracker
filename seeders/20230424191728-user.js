'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', 
    [{ 
    id: 2,
    firstName: 'Annie', 
    lastName: 'Easley', 
    email: 'ajeasley@nasa.gov', 
    age: 24, 
    weight: 215, 
    createdAt: new Date(), 
    updatedAt: new Date() },
  
    {
    id: 3,
    firstName: 'Tony', 
    lastName: 'Beasley', 
    email: 'Tbeasley@nasa.gov', 
    age: 38, 
    weight: 285, 
    createdAt: new Date(), 
    updatedAt: new Date() },
  

    {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    age: 30,
    weight: 70,
    createdAt: new Date("2023-04-28T00:00:00"),
    updatedAt: new Date("2023-04-28T00:00:00")
  },
  
  {
    id: 5,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@example.com",
    age: 25,
    weight: 60,
    createdAt: new Date("2023-04-28T00:00:00"),
    updatedAt: new Date("2023-04-28T00:00:00")
  }], 
    {});
  },

  
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', {}); 
  }
};
