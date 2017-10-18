'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TryCatch = function (_Component) {
    _inherits(TryCatch, _Component);

    function TryCatch(props) {
        _classCallCheck(this, TryCatch);

        var _this = _possibleConstructorReturn(this, (TryCatch.__proto__ || Object.getPrototypeOf(TryCatch)).call(this, props));

        _this.state = { error: null, errorInfo: null };
        return _this;
    }

    _createClass(TryCatch, [{
        key: 'componentDidCatch',
        value: function componentDidCatch(error, errorInfo) {
            this.setState({
                error: error,
                errorInfo: errorInfo
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.error) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        '\uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { whiteSpace: 'pre-wrap' } },
                        this.state.error && this.state.error.toString(),
                        _react2.default.createElement('br', null),
                        this.state.errorInfo.componentStack
                    )
                );
            }
            return this.props.children;
        }
    }]);

    return TryCatch;
}(_react.Component);

TryCatch.PropTypes = {
    debug: _propTypes2.default.Boolean
};
TryCatch.defaultProps = {
    debug: false
};
exports.default = TryCatch;