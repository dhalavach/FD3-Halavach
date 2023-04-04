import data from './mockData.json';
const mockAxios = {
  get: jest.fn().mockResolvedValue({ data: data }),

  create: jest.fn(function () {
    return this;
  }),
};

export default mockAxios;
