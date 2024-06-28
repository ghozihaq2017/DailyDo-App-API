'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          title: 'Project Alpha',
          description: 'Description for Project Alpha',
          userId: 1
        },
        {
          title: 'Project Beta',
          description: 'Description for Project Beta',
          userId: 1
        },
        {
          title: 'Project Gamma',
          description: 'Description for Project Gamma',
          userId: 2
        },
        {
          title: 'Project Delta',
          description: 'Description for Project Delta',
          userId: 2
        },
        {
          title: 'Project Epsilon',
          description: 'Description for Project Epsilon',
          userId: 3
        },
        {
          title: 'Project Zeta',
          description: 'Description for Project Zeta',
          userId: 3
        }
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
