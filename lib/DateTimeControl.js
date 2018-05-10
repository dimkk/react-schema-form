'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _today = require('material-ui/svg-icons/action/today');

var _today2 = _interopRequireDefault(_today);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import DeviceAccesTime from 'material-ui/svg-icons/device/access_time';

var style = {
  margin: 12,
  display: 'inline'
};

var DateTimePicker = function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _this.dateRef = null;
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.getValue(this.props.value);

      this.state = {
        date: value,
        time: value,
        value: value
      };

      this.handleChange = this.handleChange.bind(this);
      this.getDateFromDateTime = this.getDateFromDateTime.bind(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = this.getValue(nextProps.value);

      if (value === undefined) {
        this.setState({
          time: nextProps.value,
          date: nextProps.value,
          value: nextProps.value
        });

        return;
      }

      if (Date.parse(nextProps.value) !== Date.parse(this.props.value)) {
        var date = new Date(nextProps.value);
        var time = new Date(nextProps.value);
        var _value = this.getDateFromDateTime({ date: date, time: time });
        this.setState({ date: date, time: time, value: _value });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue(value) {
      if (isNaN(Date.parse(value))) {
        return;
      }

      return new Date(value);
    }
  }, {
    key: 'getDateFromDateTime',
    value: function getDateFromDateTime(_ref) {
      var _ref$date = _ref.date,
          date = _ref$date === undefined ? this.state.date : _ref$date,
          _ref$time = _ref.time,
          time = _ref$time === undefined ? this.state.time : _ref$time;

      var dateArr = [];

      if (!isNaN(Date.parse(date))) {
        dateArr[0] = date.getFullYear();
        dateArr[1] = date.getMonth();
        dateArr[2] = date.getDate();
      }

      if (!isNaN(Date.parse(time))) {
        dateArr[3] = time.getHours();
        dateArr[4] = time.getMinutes();
      }

      return new (Function.prototype.bind.apply(Date, [null].concat(dateArr)))();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref2) {
      var _ref2$date = _ref2.date,
          date = _ref2$date === undefined ? undefined : _ref2$date,
          _ref2$time = _ref2.time,
          time = _ref2$time === undefined ? undefined : _ref2$time;

      var value = this.getDateFromDateTime({ date: date, time: time });
      this.setState({ value: value });
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(undefined, value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['onChange']); // eslint-disable-line no-unused-vars

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DatePicker2.default, _extends({
          ref: function ref(child) {
            _this2.dateRef = child;
          },
          id: 'datefield'
        }, props, {
          value: this.state.date,
          formatDate: function formatDate(date) {
            return date.toLocaleDateString() + ' ' + (_this2.state.time && _this2.state.time.toLocaleTimeString() || '');
          },
          onChange: function onChange(_, date) {
            _this2.setState({ date: date });
            _this2.handleChange({ date: date });
            _this2.timepicker.openDialog();
          }
        })),
        _react2.default.createElement(
          'div',
          { style: { display: 'inline' } },
          _react2.default.createElement(
            _IconButton2.default,
            { tooltip: 'Choose date' },
            _react2.default.createElement(_today2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { tooltip: 'Choose time' },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'access_time'
            )
          )
        ),
        _react2.default.createElement(_TimePicker2.default, {
          id: 'timefield',
          ref: function ref(elem) {
            return _this2.timepicker = elem;
          },
          style: { display: 'none' },
          onChange: function onChange(_, time) {
            time.setSeconds(0, 0);
            _this2.setState({ time: time });
            _this2.handleChange({ time: time });
          },
          value: this.state.time
        })
      );
    }
  }]);

  return DateTimePicker;
}(_react2.default.Component);

DateTimePicker.propTypes = {
  value: _propTypes2.default.object,
  onChange: _propTypes2.default.func
};

var _default = DateTimePicker;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(style, 'style', 'src/DateTimeControl.js');

  __REACT_HOT_LOADER__.register(DateTimePicker, 'DateTimePicker', 'src/DateTimeControl.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/DateTimeControl.js');
}();

;