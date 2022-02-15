export const getTypeOrder = (): any => {
  return Promise.resolve([
    {
      id: 1,
      description: 'Active',
    },
    {
      id: 2,
      description: 'Inactive',
    },
  ]);
};
