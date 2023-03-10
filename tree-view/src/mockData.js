
 const mockData = {
  name: 'tree',
  type: 'FOLDER',
  children: [
    { name: 'folder1', type: 'FOLDER', children: [] },
    {
      name: 'folder2',
      type: 'FOLDER',
      children: [
        {
          name: 'folder21',
          type: 'FOLDER',
          children: [
            { name: 'file211', type: 'FILE' },
            { name: 'file212', type: 'FILE' },
            { name: 'file213', type: 'FILE' },
          ],
        },
        { name: 'folder22', type: 'FOLDER', children: [] },
      ],
    },
    {
      name: 'folder3',
      type: 'FOLDER',
      children: [{ name: 'file31', type: 'FILE' }],
    },
  ],
};

export default mockData;