import axios from 'axios';

const service = {
  getData: async (from: number, to: number) => {
    const response = await axios.get('http://localhost:3000/products');
    return new Promise((resolve, reject) => {
      const data = response.data.slice(from, to);

      resolve({
        count: response.data.length,
        data: data,
      });
    });
  },
};

export default service;
