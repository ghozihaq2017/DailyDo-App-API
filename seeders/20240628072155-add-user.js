'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'john_doe',
          email: 'john@example.com',
          password: '$2b$10$qhOcBQXOBbHO1m0.m/7jn.cxok0qJYuN7BonY8XQuexyI9ta8aHZe'
        },
        {
          username: 'jane_doe',
          email: 'jane@example.com',
          password: '$2b$10$qhOcBQXOBbHO1m0.m/7jn.cxok0qJYuN7BonY8XQuexyI9ta8aHZe'
        },
        {
          username: 'alice_smith',
          email: 'alice@example.com',
          password: '$2b$10$qhOcBQXOBbHO1m0.m/7jn.cxok0qJYuN7BonY8XQuexyI9ta8aHZe'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
