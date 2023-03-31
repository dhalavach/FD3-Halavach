import { Product } from '../types/Types';
import { formatMoney } from '../util';
import { Fade, Zoom } from 'react-awesome-reveal';
import Modal from 'react-modal';
import { useState } from 'react';

export default function Table(props: any) {
  const { products, add } = props;

  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setProductInModal(product);
  };

  const closeModal = () => {
    setProductInModal(null);
  };
  return (
    <div>
      <ul className='products'>
        {products?.map((product: Product) => {
          return (
            <Fade direction={'up'} triggerOnce={true} key={product.id}>
              <li>
                <div
                  className='product'
                  data-testid='table__product'
                  onClick={() => {
                    openModal(product);
                  }}
                >
                  <a href={'#' + product.id}>
                    <img
                      src={product.itemImage}
                      alt={product.itemImageAlt}
                    ></img>
                    <p>{product.itemName}</p>
                  </a>
                </div>

                <div className='product-price'>
                  <div>{formatMoney(product.itemPrice)}</div>
                  <button className='btn primary' onClick={() => add(product)}>
                    Add to Cart
                  </button>
                </div>
              </li>
            </Fade>
          );
        })}
      </ul>
      <div>
        {productInModal && (
          <div className='modal__wrapper' data-testid='table__modal'>
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
              <Zoom>
                <div className='modal__close-wrapper'>
                  <button
                    className='close-modal'
                    onClick={closeModal}
                    data-testid='table__modal-close'
                  >
                    x
                  </button>
                </div>
                <div>
                  <div className='product'>
                    <div className='modal__image-description-wrapper'>
                      <div>
                        <img
                          src={productInModal.itemImage}
                          alt={productInModal.itemImageAlt}
                        ></img>{' '}
                      </div>
                      <div className='modal__description'>
                        <span className='modal__description'>
                          {productInModal?.itemDescription}
                        </span>
                      </div>
                    </div>
                    <p>{productInModal.itemName}</p>
                  </div>
                  <div className='product-price'>
                    <div>{formatMoney(productInModal.itemPrice)}</div>
                    <button
                      className='btn primary'
                      onClick={() => add(productInModal)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Zoom>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
