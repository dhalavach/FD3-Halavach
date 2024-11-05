import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Example product data
// const products = [
//   {
//     id: 1,
//     className: 'Item',
//     itemType: 'motherboard',
//     itemName: 'ASUS ROG STRIX B550-I GAMING',
//     itemPrice: 730,
//     itemImage: '/assets/images/asusb550i.jpg',
//     itemImageURL: 'https://uni.by/files/ItemsImages/116378_r300.jpg',
//     itemImageAlt: 'ASUS B550-I',
//     itemQuantity: 2,
//     itemDescription: '',
//   },
//   {
//     id: 2,
//     className: 'Item',
//     itemType: 'motherboard',
//     itemName: 'ASUS PRIME Z790-P D4',
//     itemPrice: 820,
//     itemImage: '/assets/images/asusz790.jpg',
//     itemImageURL: 'https://uni.by/files/ItemsImages/135354_r300.jpg',
//     itemImageAlt: 'Asus Z790 Prime',
//     itemQuantity: 1,
//     itemDescription: '',
//   },
//   {
//     id: 3,
//     className: 'Item',
//     itemType: 'motherboard',
//     itemName: 'MSI MPG B650 Edge WiFi',
//     itemPrice: 1095,
//     itemImage: '/assets/images/msib650.jpg',
//     itemImageURL: 'https://uni.by/files/ItemsImages/137010_r300.jpg',
//     itemImageAlt: 'MSI B650 Edge',
//     itemQuantity: 0,
//     itemDescription: '',
//   },
// ];
// const products = await readFile('./db.json', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   return data;
// });

// Define an endpoint to serve products
app.get('/products', async (req, res) => {
  try {
    // Reading products.json file asynchronously
    const data = await readFile(new URL('./db.json', import.meta.url), 'utf-8');
    const products = JSON.parse(data); // Parse the JSON data
    res.json(products);
  } catch (error) {
    console.error('Error reading db.json file', error);
    res.status(500).json({ message: 'Server error: unable to load products' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
