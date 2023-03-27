import React, { useState, useEffect } from 'react';

export default function CheckoutForm(props: any) {
  const { order } =
    props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
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
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label>First and last name</label>
            <input
              name='name'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label>Delievery address</label>
            <input
              name='address'
              type='text'
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </li>
          <li>
            <button
              className='btn primary'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                order({
                  name: name,
                  email: email,
                  address: address,
                });
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
