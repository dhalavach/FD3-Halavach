"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Search(props) {
  var searchQuery = props.searchQuery,
    handleSearchProducts = props.handleSearchProducts;
  return <div>
      Search{' '}
      <input name='search' id='search-box' type='search' placeholder='search products' value={searchQuery} onChange={handleSearchProducts} />
    </div>;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiU2VhcmNoIiwicHJvcHMiLCJzZWFyY2hRdWVyeSIsImhhbmRsZVNlYXJjaFByb2R1Y3RzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2gocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIGhhbmRsZVNlYXJjaFByb2R1Y3RzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgU2VhcmNoeycgJ31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgIGlkPSdzZWFyY2gtYm94J1xyXG4gICAgICAgIHR5cGU9J3NlYXJjaCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nc2VhcmNoIHByb2R1Y3RzJ1xyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoUHJvZHVjdHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQWlELFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsS0FBQUUsT0FBQSxFQUFBRixHQUFBO0FBRWxDLFNBQVNHLE1BQU1BLENBQUNDLEtBQVUsRUFBRTtFQUN6QyxJQUFRQyxXQUFXLEdBQTJCRCxLQUFLLENBQTNDQyxXQUFXO0lBQUVDLG9CQUFvQixHQUFLRixLQUFLLENBQTlCRSxvQkFBb0I7RUFDekMsT0FDRSxDQUFDLEdBQUcsQ0FBQztBQUNULFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDakIsTUFBTSxDQUFDLEtBQUssQ0FDSixJQUFJLENBQUMsUUFBUSxDQUNiLEVBQUUsQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FDYixXQUFXLENBQUMsaUJBQWlCLENBQzdCLEtBQUssQ0FBQyxDQUFDRCxXQUFXLENBQUMsQ0FDbkIsUUFBUSxDQUFDLENBQUNDLG9CQUFvQixDQUFDLEdBQy9CO0FBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUVWIn0=