import axios from 'axios';
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Product, RootState } from '../types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../slices/ordersSlice';
import { setCartProducts } from '../slices/cartProductsSlice';
import Modal from 'react-modal';
import { Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm(props: {
  setCheckoutFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCheckoutFormOpen } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [userInputPresent, setUserInputPresent] = useState({
    email: false,
    name: false,
    address: false,
  });
  const [postOrderModalOpen, setPostOrderModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state: RootState) => state.cartProducts);

  const postConfig = {
    URL: 'http://localhost:3000/orders',
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  };

  const validateName = (name: string): void => {
    const message =
      'Name must be longer or equal than 3 and shorter or equal than 100 characters!';
    if (!name) setNameError(message);
    else if (name.length >= 3 && name.length <= 100) {
      setNameError('');
    } else setNameError(message);
  };

  const validateEmail = (email: string): void => {
    const message = 'Enter valid email address!';
    const emailRegex = new RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
    if (!email) setEmailError(message);
    else if (email.match(emailRegex)) setEmailError('');
    else setEmailError(message);
  };

  const validateAddress = (address: string): void => {
    const message = 'Enter valid shipping address!';
    const addressRegex = new RegExp(/[A-Za-z0-9'\.\-\s\,]/);
    if (!address) setAddressError(message);
    else if (address.match(addressRegex) && address.length >= 5)
      setAddressError('');
    else setAddressError(message);
  };

  const validateBeforeSubmit = (): boolean => {
    if (
      Object.values(userInputPresent).every((val) => val === true) &&
      !nameError &&
      !emailError &&
      !addressError
    ) {
      return true;
    } else {
      return false;
    }
  };

  const postOrder = async (data: {
    name: string;
    email: string;
    address: string;
    orderedProducts: Product[];
  }) => {
    dispatch(setOrders(data));

    try {
      await axios.post(postConfig.URL, data).then((response) => {
        console.log(response.status, response.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const postOrderCleanUp = (): void => {
    dispatch(setCartProducts([]));
    localStorage.setItem('cartProducts', '');
    setCheckoutFormOpen(false);
    setPostOrderModalOpen(false);
  };
  return (
    <>
      <div className='cart'>CheckoutForm</div>
      <form>
        <ul className='form-container'>
          <li>
            <label>Email</label>
            <input
              name='email'
              type='email'
              required
              value={email}
              data-testid='checkout__email'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
                setUserInputPresent({ ...userInputPresent, email: true });
              }}
            ></input>
            <span
              className='message-error'
              data-testid='checkout__email-error-message'
            >
              {emailError}
            </span>
          </li>
          <li>
            <label>First and last name</label>
            <input
              name='name'
              type='text'
              required
              value={name}
              data-testid='checkout__name'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
                validateName(e.target.value);
                setUserInputPresent({ ...userInputPresent, name: true });
              }}
            ></input>
            <span
              className='message-error'
              data-testid='checkout__name-error-message'
            >
              {nameError}
            </span>
          </li>
          <li>
            <label>Delivery address</label>
            <input
              name='address'
              type='text'
              required
              value={address}
              data-testid='checkout__address'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAddress(e.target.value);
                validateAddress(e.target.value);
                setUserInputPresent({ ...userInputPresent, address: true });
              }}
            ></input>
            <span
              className='message-error'
              data-testid='checkout__address-error-message'
            >
              {addressError}
            </span>
          </li>
          <li>
            <button
              className={`btn primary btn-submit ${
                validateBeforeSubmit() ? '' : 'grey-out'
              }`}
              type='submit'
              onClick={async (e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
                if (validateBeforeSubmit()) {
                  await postOrder({
                    name: name,
                    email: email,
                    address: address,
                    orderedProducts: cartProducts,
                  });
                }
                setPostOrderModalOpen(true);
                // dispatch(setCartProducts([]));
                // localStorage.setItem('cartProducts', '');
              }}
              data-testid='checkout__submit-button'
            >
              Proceed to checkout
            </button>
          </li>
        </ul>
      </form>
      <div>
        {postOrderModalOpen && (
          <div className='modal__wrapper' data-testid='checkout-form__modal'>
            <Modal
              isOpen={true}
              onRequestClose={postOrderCleanUp}
              ariaHideApp={false}
            >
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
          </div>
        )}
      </div>
    </>
  );
}
