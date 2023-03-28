"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;
var _util = require("../util");
var _reactAwesomeReveal = require("react-awesome-reveal");
var _reactModal = _interopRequireDefault(require("react-modal"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Table(props) {
  var products = props.products,
    add = props.add;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    productInModal = _useState2[0],
    setProductInModal = _useState2[1];
  var openModal = function openModal(product) {
    setProductInModal(product);
  };
  var closeModal = function closeModal() {
    setProductInModal(null);
  };
  return <div>
      <ul className='products'>
        {products.map(function (product) {
        return <_reactAwesomeReveal.Fade direction={'up'} triggerOnce={true}>
              <li key={product.id}>
                <div className='product' onClick={function () {
              openModal(product);
            }}>
                  <a href={'#' + product.id}>
                    <img src={product.itemImage} alt={product.itemImageAlt}></img>
                    <p>{product.itemName}</p>
                  </a>
                </div>

                <div className='product-price'>
                  <div>{(0, _util.formatMoney)(product.itemPrice)}</div>
                  <button className='btn primary' onClick={function () {
                return add(product);
              }}>
                    Add to Cart
                  </button>
                </div>
              </li>
            </_reactAwesomeReveal.Fade>;
      })}
      </ul>
      <div>
        {productInModal && <div className="modal__wrapper">
            <_reactModal.default isOpen={true} onRequestClose={closeModal}>
              <_reactAwesomeReveal.Zoom>
                <div className='modal__close-wrapper'>
                  <button className='close-modal' onClick={closeModal}>
                    x
                  </button>
                </div>
                <div>
                  <div className='product'>
                    <div className='modal__image-description-wrapper'>
                      <div>
                        <img src={productInModal.itemImage} alt={productInModal.itemImageAlt}></img>{' '}
                      </div>
                      <div className='modal__description'>
                        <span className='modal__description'>
                          {productInModal === null || productInModal === void 0 ? void 0 : productInModal.itemDescription}
                        </span>
                      </div>
                    </div>
                    <p>{productInModal.itemName}</p>
                  </div>
                  <div className='product-price'>
                    <div>{(0, _util.formatMoney)(productInModal.itemPrice)}</div>
                    <button className='btn primary' onClick={function () {
                  return add(productInModal);
                }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </_reactAwesomeReveal.Zoom>
            </_reactModal.default>
          </div>}
      </div>
    </div>;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXRpbCIsInJlcXVpcmUiLCJfcmVhY3RBd2Vzb21lUmV2ZWFsIiwiX3JlYWN0TW9kYWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3JlYWN0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsImkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImxlbmd0aCIsImFycjIiLCJfaSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwiZXJyIiwicmV0dXJuIiwiaXNBcnJheSIsIlRhYmxlIiwicHJvcHMiLCJwcm9kdWN0cyIsImFkZCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInByb2R1Y3RJbk1vZGFsIiwic2V0UHJvZHVjdEluTW9kYWwiLCJvcGVuTW9kYWwiLCJwcm9kdWN0IiwiY2xvc2VNb2RhbCIsIm1hcCIsImlkIiwiaXRlbUltYWdlIiwiaXRlbUltYWdlQWx0IiwiaXRlbU5hbWUiLCJmb3JtYXRNb25leSIsIml0ZW1QcmljZSIsIml0ZW1EZXNjcmlwdGlvbiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvVHlwZXMnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgeyBGYWRlLCBab29tIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHByb3BzOiBhbnkpIHtcclxuICBjb25zdCB7IHByb2R1Y3RzLCBhZGQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtwcm9kdWN0SW5Nb2RhbCwgc2V0UHJvZHVjdEluTW9kYWxdID0gdXNlU3RhdGU8UHJvZHVjdCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEluTW9kYWwocHJvZHVjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFByb2R1Y3RJbk1vZGFsKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J3Byb2R1Y3RzJz5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249eyd1cCd9IHRyaWdnZXJPbmNlPXt0cnVlfT5cclxuICAgICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwcm9kdWN0J1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnIycgKyBwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaXRlbUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lml0ZW1JbWFnZUFsdH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuaXRlbU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdE1vbmV5KHByb2R1Y3QuaXRlbVByaWNlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBwcmltYXJ5JyBvbkNsaWNrPXsoKSA9PiBhZGQocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvZHVjdEluTW9kYWwgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0cnVlfSBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgICAgPFpvb20+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxfX2Nsb3NlLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2xvc2UtbW9kYWwnIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxfX2ltYWdlLWRlc2NyaXB0aW9uLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdEluTW9kYWwuaXRlbUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdEluTW9kYWwuaXRlbUltYWdlQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsX19kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbW9kYWxfX2Rlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdEluTW9kYWw/Lml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3RJbk1vZGFsLml0ZW1OYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRNb25leShwcm9kdWN0SW5Nb2RhbC5pdGVtUHJpY2UpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIHByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGQocHJvZHVjdEluTW9kYWwpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsbUJBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUgsT0FBQTtBQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtBQUFpQyxTQUFBRyx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQUFBLFNBQUFHLGVBQUFDLEdBQUEsRUFBQUMsQ0FBQSxXQUFBQyxlQUFBLENB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