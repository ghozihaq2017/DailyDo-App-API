'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          name: 'Task 1',
          description: 'Description for Task 1',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 1
        },
        {
          name: 'Task 2',
          description: 'Description for Task 2',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 1
        },
        {
          name: 'Task 3',
          description: 'Description for Task 3',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 1
        },
        {
          name: 'Task 4',
          description: 'Description for Task 4',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 2
        },
        {
          name: 'Task 5',
          description: 'Description for Task 5',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 2
        },
        {
          name: 'Task 6',
          description: 'Description for Task 6',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 2
        },
        {
          name: 'Task 7',
          description: 'Description for Task 7',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 3
        },
        {
          name: 'Task 8',
          description: 'Description for Task 8',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 3
        },
        {
          name: 'Task 9',
          description: 'Description for Task 9',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 3
        },
        {
          name: 'Task 10',
          description: 'Description for Task 10',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 4
        },
        {
          name: 'Task 11',
          description: 'Description for Task 11',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 4
        },
        {
          name: 'Task 12',
          description: 'Description for Task 12',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 4
        },
        {
          name: 'Task 13',
          description: 'Description for Task 13',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 5
        },
        {
          name: 'Task 14',
          description: 'Description for Task 14',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 5
        },
        {
          name: 'Task 15',
          description: 'Description for Task 15',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 5
        },
        {
          name: 'Task 16',
          description: 'Description for Task 16',
          status: 'not started',
          priority: 'medium',
          dueDate: '2024-07-01',
          projectId: 6
        },
        {
          name: 'Task 17',
          description: 'Description for Task 17',
          status: 'in progress',
          priority: 'high',
          dueDate: '2024-07-05',
          projectId: 6
        },
        {
          name: 'Task 18',
          description: 'Description for Task 18',
          status: 'completed',
          priority: 'low',
          dueDate: '2024-07-10',
          projectId: 6
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
