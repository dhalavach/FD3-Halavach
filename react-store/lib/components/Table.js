"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;
var _util = require("../util");
var _reactAwesomeReveal = require("react-awesome-reveal");
function Table(props) {
  var products = props.products,
    add = props.add;
  return <div>
      <ul className='products'>
        {products.map(function (product) {
        return <_reactAwesomeReveal.Fade direction={'up'} triggerOnce={true}>
              <li key={product.id}>
                <div className='product'>
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
    </div>;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXRpbCIsInJlcXVpcmUiLCJfcmVhY3RBd2Vzb21lUmV2ZWFsIiwiVGFibGUiLCJwcm9wcyIsInByb2R1Y3RzIiwiYWRkIiwibWFwIiwicHJvZHVjdCIsImlkIiwiaXRlbUltYWdlIiwiaXRlbUltYWdlQWx0IiwiaXRlbU5hbWUiLCJmb3JtYXRNb25leSIsIml0ZW1QcmljZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvVHlwZXMnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wczogYW55KSB7XHJcbiAgY29uc3QgeyBwcm9kdWN0cywgYWRkIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0ncHJvZHVjdHMnPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGYWRlIGRpcmVjdGlvbj17J3VwJ30gdHJpZ2dlck9uY2U9e3RydWV9PlxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnIycgKyBwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaXRlbUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lml0ZW1JbWFnZUFsdH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuaXRlbU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdE1vbmV5KHByb2R1Y3QuaXRlbVByaWNlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBwcmltYXJ5JyBvbkNsaWNrPXsoKSA9PiBhZGQocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7QUFDQSxJQUFBQyxtQkFBQSxHQUFBRCxPQUFBO0FBQ2UsU0FBU0UsS0FBS0EsQ0FBQ0MsS0FBVSxFQUFFO0VBQ3hDLElBQVFDLFFBQVEsR0FBVUQsS0FBSyxDQUF2QkMsUUFBUTtJQUFFQyxHQUFHLEdBQUtGLEtBQUssQ0FBYkUsR0FBRztFQUNyQixPQUNFLENBQUMsR0FBRyxDQUFDO0FBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQy9CLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsT0FBZ0IsRUFBSztRQUNsQyxPQUNFLDBCQUFNLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RELGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUNBLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLENBQUM7QUFDbkMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDekMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxFQUFFLENBQUMsQ0FBQztBQUM3QyxvQkFBb0IsQ0FBQyxHQUFHLENBQ0YsR0FBRyxDQUFDLENBQUNELE9BQU8sQ0FBQ0UsU0FBUyxDQUFDLENBQ3ZCLEdBQUcsQ0FBQyxDQUFDRixPQUFPLENBQUNHLFlBQVksQ0FBQyxDQUMzQixFQUFFLEdBQUcsQ0FBQztBQUMzQixvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsT0FBTyxDQUFDSSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0Msa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLGdCQUFnQixFQUFFLEdBQUcsQ0FBQztBQUN0QjtBQUNBLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0FBQy9DLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUFDLGlCQUFXLEVBQUNMLE9BQU8sQ0FBQ00sU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDN0Qsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQUEsT0FBTVIsR0FBRyxDQUFDRSxPQUFPLENBQUM7Y0FBQSxFQUFDLENBQUM7QUFDL0U7QUFDQSxrQkFBa0IsRUFBRSxNQUFNLENBQUM7QUFDM0IsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDO0FBQ3RCLGNBQWMsRUFBRSxFQUFFLENBQUM7QUFDbkIsWUFBWSwyQkFBTztNQUVYLENBQUMsQ0FBQyxDQUFDO0FBQ1gsTUFBTSxFQUFFLEVBQUUsQ0FBQztBQUNYLElBQUksRUFBRSxHQUFHLENBQUM7QUFFViJ9