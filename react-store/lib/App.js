"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles.css");
var _mockData = _interopRequireDefault(require("./mockData.json"));
var _react = require("react");
var _Table = _interopRequireDefault(require("./components/Table"));
var _Filter = _interopRequireDefault(require("./components/Filter"));
var _Search = _interopRequireDefault(require("./components/Search"));
var _Cart = _interopRequireDefault(require("./components/Cart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App() {
  var _useState = (0, _react.useState)(_mockData.default.products),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    sort = _useState4[0],
    setSort = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0, _react.useState)(localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : []),
    _useState8 = _slicedToArray(_useState7, 2),
    cartProducts = _useState8[0],
    setCartProducts = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchQuery = _useState10[0],
    setSearchQuery = _useState10[1];
  var handleFilterProducts = function handleFilterProducts(e) {
    setType(e.target.value);
  };
  var filterProducts = function filterProducts(type, arr) {
    if (type !== 'all') arr = arr.filter(function (product) {
      return product.itemType === type;
    });
    return arr;
  };
  var handleSortProducts = function handleSortProducts(e) {
    setSort(e.target.value);
  };
  var sortProducts = function sortProducts(sort, arr) {
    if (sort === 'ascending') {
      arr = arr.sort(function (a, b) {
        return a.itemPrice - b.itemPrice;
      });
    } else if (sort === 'descending') {
      arr = arr.sort(function (a, b) {
        return b.itemPrice - a.itemPrice;
      });
    } else if (sort === 'az') {
      arr = arr.sort(function (a, b) {
        return a.itemName.localeCompare(b.itemName);
      });
    } else if (sort === 'za') {
      arr = arr.sort(function (a, b) {
        return -a.itemName.localeCompare(b.itemName);
      });
    }
    return arr;
  };
  var handleSearchProducts = function handleSearchProducts(e) {
    setSearchQuery(e.target.value);
  };
  var searchProducts = function searchProducts(searchQuery, arr) {
    arr = arr.filter(function (product) {
      return product.itemName.toString().toLowerCase().includes(searchQuery.toString().toLowerCase());
    });
    return arr;
  };
  var add = function add(product) {
    var newCartProducts = _toConsumableArray(cartProducts);
    var inCart = false;
    var _iterator = _createForOfIteratorHelper(newCartProducts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cartItem = _step.value;
        if (cartItem.id === product.id) {
          if (cartItem.count) cartItem.count += 1;
          inCart = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!inCart) {
      newCartProducts.push(_objectSpread(_objectSpread({}, product), {}, {
        count: 1
      }));
    }
    setCartProducts(newCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  };
  var remove = function remove(product) {
    var newCartProducts = _toConsumableArray(cartProducts).filter(function (item) {
      return item.id !== product.id;
    });
    setCartProducts(newCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  };
  var createOrder = function createOrder(order) {
    alert("saving order for ".concat(order.name.toString(), " - to be implemented later..."));
    console.log(order);
  };
  (0, _react.useEffect)(function () {
    var arr = _toConsumableArray(_mockData.default.products);
    if (type) arr = filterProducts(type, arr);
    if (sort) arr = sortProducts(sort, arr);
    if (searchQuery) arr = searchProducts(searchQuery, arr);
    setProducts(arr);
  }, [sort, type, searchQuery]);
  return <div className='wrapper'>
      <div className='grid-container'>
        <header>
          <a href='/'>Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <div className='controls'>
                <div className='filter-order'>
                  <_Filter.default count={products.length} type={type} sort={sort} handleFilterProducts={handleFilterProducts} handleSortProducts={handleSortProducts} />
                </div>
                <div className='search'>
                  <_Search.default searchQuery={searchQuery} handleSearchProducts={handleSearchProducts} />
                </div>
              </div>
              <_Table.default products={products} add={add} />
            </div>

            <div className='sidebar'>
              <_Cart.default cartProducts={cartProducts} remove={remove} createOrder={createOrder} setCartProducts={setCartProducts} />
            </div>
          </div>
        </main>
        <footer>2023</footer>
      </div>
    </div>;
}
var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiX21vY2tEYXRhIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yZWFjdCIsIl9UYWJsZSIsIl9GaWx0ZXIiLCJfU2VhcmNoIiwiX0NhcnQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhcmciLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIlR5cGVFcnJvciIsIk51bWJlciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJpdGVyYXRvciIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIkYiLCJzIiwibiIsImRvbmUiLCJlIiwiX2UyIiwiZiIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJlcnIiLCJzdGVwIiwibmV4dCIsIl9lMyIsInJldHVybiIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJpdGVyIiwiZnJvbSIsIl9hcnJheUxpa2VUb0FycmF5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiQXBwIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJkYXRhIiwicHJvZHVjdHMiLCJfdXNlU3RhdGUyIiwic2V0UHJvZHVjdHMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNvcnQiLCJzZXRTb3J0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ0eXBlIiwic2V0VHlwZSIsIl91c2VTdGF0ZTciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiX3VzZVN0YXRlOCIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJoYW5kbGVGaWx0ZXJQcm9kdWN0cyIsImZpbHRlclByb2R1Y3RzIiwicHJvZHVjdCIsIml0ZW1UeXBlIiwiaGFuZGxlU29ydFByb2R1Y3RzIiwic29ydFByb2R1Y3RzIiwiYSIsImIiLCJpdGVtUHJpY2UiLCJpdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJoYW5kbGVTZWFyY2hQcm9kdWN0cyIsInNlYXJjaFByb2R1Y3RzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImFkZCIsIm5ld0NhcnRQcm9kdWN0cyIsImluQ2FydCIsIl9pdGVyYXRvciIsIl9zdGVwIiwiY2FydEl0ZW0iLCJpZCIsImNvdW50Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbW92ZSIsIml0ZW0iLCJjcmVhdGVPcmRlciIsIm9yZGVyIiwiYWxlcnQiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL21vY2tEYXRhLmpzb24nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyJztcclxuaW1wb3J0IHsgb3JkZXJPYmplY3QsIFByb2R1Y3QgfSBmcm9tICcuL3R5cGVzL1R5cGVzJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9jb21wb25lbnRzL0NhcnQnO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihkYXRhLnByb2R1Y3RzKTtcclxuICBjb25zdCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0UHJvZHVjdHMnKVxyXG4gICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRQcm9kdWN0cycpIGFzIHN0cmluZylcclxuICAgICAgOiBbXVxyXG4gICk7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyUHJvZHVjdHMgPSAoXHJcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJQcm9kdWN0cyA9ICh0eXBlOiBzdHJpbmcsIGFycjogUHJvZHVjdFtdKTogUHJvZHVjdFtdID0+IHtcclxuICAgIGlmICh0eXBlICE9PSAnYWxsJylcclxuICAgICAgYXJyID0gYXJyLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5pdGVtVHlwZSA9PT0gdHlwZSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnRQcm9kdWN0cyA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgc2V0U29ydChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBzb3J0UHJvZHVjdHMgPSAoc29ydDogc3RyaW5nLCBhcnI6IFByb2R1Y3RbXSk6IFByb2R1Y3RbXSA9PiB7XHJcbiAgICBpZiAoc29ydCA9PT0gJ2FzY2VuZGluZycpIHtcclxuICAgICAgYXJyID0gYXJyLnNvcnQoKGEsIGIpID0+IGEuaXRlbVByaWNlIC0gYi5pdGVtUHJpY2UpO1xyXG4gICAgfSBlbHNlIGlmIChzb3J0ID09PSAnZGVzY2VuZGluZycpIHtcclxuICAgICAgYXJyID0gYXJyLnNvcnQoKGEsIGIpID0+IGIuaXRlbVByaWNlIC0gYS5pdGVtUHJpY2UpO1xyXG4gICAgfSBlbHNlIGlmIChzb3J0ID09PSAnYXonKSB7XHJcbiAgICAgIGFyciA9IGFyci5zb3J0KChhOiBQcm9kdWN0LCBiOiBQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEuaXRlbU5hbWUubG9jYWxlQ29tcGFyZShiLml0ZW1OYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHNvcnQgPT09ICd6YScpIHtcclxuICAgICAgYXJyID0gYXJyLnNvcnQoKGE6IFByb2R1Y3QsIGI6IFByb2R1Y3QpID0+IHtcclxuICAgICAgICByZXR1cm4gLWEuaXRlbU5hbWUubG9jYWxlQ29tcGFyZShiLml0ZW1OYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hQcm9kdWN0cyA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgKTogdm9pZCA9PiB7XHJcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoUHJvZHVjdHMgPSAoc2VhcmNoUXVlcnk6IHN0cmluZywgYXJyOiBQcm9kdWN0W10pOiBQcm9kdWN0W10gPT4ge1xyXG4gICAgYXJyID0gYXJyLmZpbHRlcigocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJvZHVjdC5pdGVtTmFtZVxyXG4gICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycjtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGQgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IG5ld0NhcnRQcm9kdWN0cyA9IFsuLi5jYXJ0UHJvZHVjdHNdO1xyXG4gICAgbGV0IGluQ2FydCA9IGZhbHNlO1xyXG4gICAgZm9yIChjb25zdCBjYXJ0SXRlbSBvZiBuZXdDYXJ0UHJvZHVjdHMpIHtcclxuICAgICAgaWYgKGNhcnRJdGVtLmlkID09PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgaWYgKGNhcnRJdGVtLmNvdW50KSBjYXJ0SXRlbS5jb3VudCArPSAxO1xyXG4gICAgICAgIGluQ2FydCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaW5DYXJ0KSB7XHJcbiAgICAgIG5ld0NhcnRQcm9kdWN0cy5wdXNoKHsgLi4ucHJvZHVjdCwgY291bnQ6IDEgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMobmV3Q2FydFByb2R1Y3RzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0UHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0UHJvZHVjdHMpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmUgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgbmV3Q2FydFByb2R1Y3RzID0gWy4uLmNhcnRQcm9kdWN0c10uZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvZHVjdC5pZFxyXG4gICAgKTtcclxuICAgIHNldENhcnRQcm9kdWN0cyhuZXdDYXJ0UHJvZHVjdHMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRQcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnRQcm9kdWN0cykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZU9yZGVyID0gKG9yZGVyOiBvcmRlck9iamVjdCkgPT4ge1xyXG4gICAgYWxlcnQoXHJcbiAgICAgIGBzYXZpbmcgb3JkZXIgZm9yICR7b3JkZXIubmFtZS50b1N0cmluZygpfSAtIHRvIGJlIGltcGxlbWVudGVkIGxhdGVyLi4uYFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGFyciA9IFsuLi5kYXRhLnByb2R1Y3RzXSBhcyBQcm9kdWN0W107XHJcbiAgICBpZiAodHlwZSkgYXJyID0gZmlsdGVyUHJvZHVjdHModHlwZSwgYXJyKTtcclxuICAgIGlmIChzb3J0KSBhcnIgPSBzb3J0UHJvZHVjdHMoc29ydCwgYXJyKTtcclxuICAgIGlmIChzZWFyY2hRdWVyeSkgYXJyID0gc2VhcmNoUHJvZHVjdHMoc2VhcmNoUXVlcnksIGFycik7XHJcbiAgICBzZXRQcm9kdWN0cyhhcnIpO1xyXG4gIH0sIFtzb3J0LCB0eXBlLCBzZWFyY2hRdWVyeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8YSBocmVmPScvJz5DYXJ0PC9hPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xzJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItb3JkZXInPlxyXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e3Byb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyUHJvZHVjdHM9e2hhbmRsZUZpbHRlclByb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVNvcnRQcm9kdWN0cz17aGFuZGxlU29ydFByb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cclxuICAgICAgICAgICAgICAgICAgPFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2hQcm9kdWN0cz17aGFuZGxlU2VhcmNoUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8VGFibGUgcHJvZHVjdHM9e3Byb2R1Y3RzfSBhZGQ9e2FkZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcic+XHJcbiAgICAgICAgICAgICAgPENhcnRcclxuICAgICAgICAgICAgICAgIGNhcnRQcm9kdWN0cz17Y2FydFByb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlPXtyZW1vdmV9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVPcmRlcj17Y3JlYXRlT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJ0UHJvZHVjdHM9e3NldENhcnRQcm9kdWN0c31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyPjIwMjM8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBQSxPQUFBO0FBQ0EsSUFBQUMsU0FBQSxHQUFBQyxzQkFB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