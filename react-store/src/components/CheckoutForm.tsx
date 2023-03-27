import React, { useState, useEffect } from 'react';

export default function CheckoutForm(props: any) {
  const { order } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressErrror, setAddressError] = useState('');

  const validateName = (name: string) => {
    const message =
      'Name must be longer or equal than 3 and shorter or equal than 100 characters!';

    if (!name) setNameError(message);
    else if (name.length >= 3 && name.length <= 100) {
      setNameError('');
    } else setNameError(message);
  };

  const validateEmail = (email: string) => {
    const message = 'Enter valid email address!';

    const emailRegex = new RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );

    if (!email) setEmailError(message);
    else if (email.match(emailRegex)) setEmailError('');
    else setEmailError(message);
  };

  const validateAddress = (address: string) => {
    const message = 'Enter valid shipping address!';
    const addressRegex = new RegExp(/[A-Za-z0-9'\.\-\s\,]/);

    if (!address) setAddressError(message);
    else if (address.match(addressRegex) && address.length >= 5)
      //fix
      setAddressError('');
    else setAddressError(message);
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
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            ></input>
            <span className='message-error'>{emailError}</span>
          </li>
          <li>
            <label>First and last name</label>
            <input
              name='name'
              type='text'
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            ></input>
            <span className='message-error'>{nameError}</span>
          </li>
          <li>
            <label>Delivery address</label>
            <input
              name='address'
              type='text'
              required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                validateAddress(e.target.value);
              }}
            ></input>
            <span className='message-error'>{addressErrror}</span>
          </li>
          <li>
            <button
              className='btn primary'
              type='submit'
              onClick={(e) => {
                e.preventDefault();

                if (!nameError && !emailError && !addressErrror) {
                  order({
                    name: name,
                    email: email,
                    address: address,
                  });
                }
              }}
            >
              Proceed to checkout
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}
