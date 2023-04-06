import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Product } from '../types/Types';
import { useDispatch } from 'react-redux';
import { setProducts } from '../slices/productsSlice';

export function* productsSaga() {
  const fetchConfig = {
    PRODUCTS_URL: 'http://localhost:3000/products',
    ORDERS_URL: 'http://localhost:3000/orders',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  yield takeEvery('PRODUCTS_FETCH_REQUESTED', fetchProducts);

  function* fetchProducts(action: any) {
    try {
      const products: { data: Product[] } = yield axios.get(
        fetchConfig.PRODUCTS_URL
      );
      console.log(products.data);
      yield put({ type: 'PRODUCT_FETCH_SUCCEEDED', data: products.data });
      // dispatch(setProducts(products?.data));
    } catch (e: any) {
      yield put({ type: 'PRODUCT_FETCH_FAILED', message: e.message });
    }
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
