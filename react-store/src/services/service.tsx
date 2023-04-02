import products from '../../db.json';

const service = {
  getData: (from: number, to: number) => {
    return new Promise((resolve, reject) => {
      const data = products.products.slice(from, to);
      resolve({
        count: products.products.length,
        data: data,
      });
    });
  },
};

export default service;
