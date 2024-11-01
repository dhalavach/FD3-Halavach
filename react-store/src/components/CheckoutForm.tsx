import axios from 'axios';
import { ChangeEvent, Dispatch, FormEventHandler, MouseEvent, SetStateAction, useState } from 'react';
import { Product, RootState } from '../types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../slices/ordersSlice';
import { setCartProducts } from '../slices/cartProductsSlice';
import Modal from 'react-modal';
import { Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm({
  setCheckoutFormOpen,
}: {
  setCheckoutFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    address: '',
    emailError: '',
    nameError: '',
    addressError: '',
    userInputPresent: { email: false, name: false, address: false },
    postOrderModalOpen: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state: RootState) => state.cartProducts);

  const postConfig = {
    URL: 'http://localhost:3000/orders',
    method: 'POST',
    headers: { Accept: 'application/json' },
  };

  const validateInput = (field: string, value: string) => {
    const messages = {
      name: 'Name must be between 3 and 100 characters!',
      email: 'Enter a valid email address!',
      address: 'Enter a valid shipping address!',
    };

    let error = '';

    switch (field) {
      case 'name':
        error = value.length < 3 || value.length > 100 ? messages.name : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !value.match(emailRegex) ? messages.email : '';
        break;
      case 'address':
        const addressRegex = /^[A-Za-z0-9'\.\-\s\,]{5,}$/;
        error = !value.match(addressRegex) ? messages.address : '';
        break;
      default:
        break;
    }

    setFormState((prev) => ({
      ...prev,
      [`${field}Error`]: error,
      userInputPresent: { ...prev.userInputPresent, [field]: true },
    }));
  };

  const isFormValid = () => {
    const { emailError, nameError, addressError, userInputPresent } = formState;
    return Object.values(userInputPresent).every(Boolean) && !emailError && !nameError && !addressError;
  };

  const postOrder = async (data: { name: string; email: string; address: string; orderedProducts: Product[] }) => {
    dispatch(setOrders(data));
    try {
      await axios.post(postConfig.URL, data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      await postOrder({ ...formState, orderedProducts: cartProducts });
      setFormState((prev) => ({ ...prev, postOrderModalOpen: true }));
    }
  };

  const postOrderCleanUp = () => {
    dispatch(setCartProducts([]));
    localStorage.setItem('cartProducts', '');
    setCheckoutFormOpen(false);
    setFormState((prev) => ({ ...prev, postOrderModalOpen: false }));
  };

  const handleInputChange = (field: string) => (e: any) => {
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [field]: value }));
    validateInput(field, value);
  };

  return (
    <>
      <div className='cart'>CheckoutForm</div>
      <form onSubmit={handleFormSubmit as any}>
        <ul className='form-container'>
          <li>
            <label>Email</label>
            <input name='email' type='email' required value={formState.email} onChange={handleInputChange('email')} />
            <span className='message-error'>{formState.emailError}</span>
          </li>
          <li>
            <label>First and last name</label>
            <input name='name' type='text' required value={formState.name} onChange={handleInputChange('name')} />
            <span className='message-error'>{formState.nameError}</span>
          </li>
          <li>
            <label>Delivery address</label>
            <input
              name='address'
              type='text'
              required
              value={formState.address}
              onChange={handleInputChange('address')}
            />
            <span className='message-error'>{formState.addressError}</span>
          </li>
          <li>
            <button
              className={`btn primary btn-submit ${isFormValid() ? '' : 'grey-out'}`}
              type='submit'
              data-testid='checkout__submit-button'
            >
              Proceed to checkout
            </button>
          </li>
        </ul>
      </form>
      {formState.postOrderModalOpen && (
        <Modal isOpen={true} onRequestClose={postOrderCleanUp} ariaHideApp={false}>
          <Zoom>
            <div className='modal__close-wrapper'>
              <button
                className='modal__close-modal'
                onClick={postOrderCleanUp}
                data-testid='checkout-form__modal-close'
              >
                x
              </button>
            </div>
            <div className='checkout-form__modal-heading'>
              <h4>Order successfully placed!</h4>
            </div>
            <div className='checkout-form__modal-buttons'>
              <button onClick={postOrderCleanUp}>Continue shopping</button>
              <button
                onClick={() => {
                  navigate('/ordersList');
                  postOrderCleanUp();
                }}
              >
                View orders
              </button>
            </div>
          </Zoom>
        </Modal>
      )}
    </>
  );
}
