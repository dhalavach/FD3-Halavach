import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Root from './routes/root';
import ErrorPage from './components/ErrorPage';
import './styles.css';
import About from './routes/about';
import Cart from './routes/cart';
import store from './components/Store';
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
