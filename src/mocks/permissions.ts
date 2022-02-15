const permissionsMocks = {
  getPermissions: jest.fn(() => {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: 'Admin',
          description: 'Admin',
          createdAt: '2020-01-01T00:00:00.000Z',
          updatedAt: '2020-01-01T00:00:00.000Z',
          deletedAt: null,
        },
        {
          id: 2,
          name: 'User',
          description: 'User',
          createdAt: '2020-01-01T00:00:00.000Z',
          updatedAt: '2020-01-01T00:00:00.000Z',
          deletedAt: null,
        },
        {
          id: 3,
          name: 'Guest',
          description: 'Guest',
          createdAt: '2020-01-01T00:00:00.000Z',
          updatedAt: '2020-01-01T00:00:00.000Z',
          deletedAt: null,
        },
      ],
    });
  }),
};

export default permissionsMocks;
