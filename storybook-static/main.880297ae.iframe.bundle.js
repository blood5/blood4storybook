(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        './.storybook/preview.js-generated-config-entry.js': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            var preview_namespaceObject = {};
            __webpack_require__.r(preview_namespaceObject),
                __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
                    return parameters;
                }),
                __webpack_require__.d(preview_namespaceObject, 'globals', function () {
                    return globals;
                }),
                __webpack_require__.d(preview_namespaceObject, 'loaders', function () {
                    return loaders;
                }),
                __webpack_require__.d(preview_namespaceObject, 'decorators', function () {
                    return decorators;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptors.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
            var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js'),
                esm = __webpack_require__('./node_modules/@storybook/client-logger/dist/esm/index.js'),
                Scene =
                    (__webpack_require__('./node_modules/core-js/modules/es.promise.js'),
                    __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
                    __webpack_require__('./stories/Scene.ts'));
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg),
                        value = info.value;
                } catch (error) {
                    return void reject(error);
                }
                info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
            }
            function _asyncToGenerator(fn) {
                return function () {
                    var self = this,
                        args = arguments;
                    return new Promise(function (resolve, reject) {
                        var gen = fn.apply(self, args);
                        function _next(value) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                        }
                        function _throw(err) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                        }
                        _next(void 0);
                    });
                };
            }
            var parameters = {
                    actions: {argTypesRegex: '^on[A-Z].*'},
                    controls: {matchers: {color: /(background|color)$/i, date: /Date$/}}
                },
                globals = {key: 'My value', forceCanvas: !1},
                loaded = 0,
                loaders = [
                    _asyncToGenerator(
                        regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                for (;;)
                                    switch ((_context.prev = _context.next)) {
                                        case 0:
                                            if (!(loaded++ < 1)) {
                                                _context.next = 6;
                                                break;
                                            }
                                            return (_context.next = 3), Object(Scene.d)();
                                        case 3:
                                            (_context.t0 = _context.sent), (_context.next = 7);
                                            break;
                                        case 6:
                                            _context.t0 = null;
                                        case 7:
                                            return (
                                                (_context.t1 = _context.t0),
                                                _context.abrupt('return', {loader: _context.t1})
                                            );
                                        case 9:
                                        case 'end':
                                            return _context.stop();
                                    }
                            }, _callee);
                        })
                    )
                ],
                decorators = [
                    function (story) {
                        return (
                            Object(Scene.c)({width: window.innerWidth - 32, height: window.innerHeight - 36}), story()
                        );
                    }
                ];
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly &&
                        (symbols = symbols.filter(function (sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })),
                        keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            Object.keys(preview_namespaceObject).forEach(function (key) {
                var value = preview_namespaceObject[key];
                switch (key) {
                    case 'args':
                    case 'argTypes':
                        return esm.a.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
                    case 'decorators':
                        return value.forEach(function (decorator) {
                            return Object(ClientApi.d)(decorator, !1);
                        });
                    case 'loaders':
                        return value.forEach(function (loader) {
                            return Object(ClientApi.e)(loader, !1);
                        });
                    case 'parameters':
                        return Object(ClientApi.f)(
                            (function _objectSpread(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2
                                        ? ownKeys(Object(source), !0).forEach(function (key) {
                                              _defineProperty(target, key, source[key]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                                        : ownKeys(Object(source)).forEach(function (key) {
                                              Object.defineProperty(
                                                  target,
                                                  key,
                                                  Object.getOwnPropertyDescriptor(source, key)
                                              );
                                          });
                                }
                                return target;
                            })({}, value),
                            !1
                        );
                    case 'argTypesEnhancers':
                        return value.forEach(function (enhancer) {
                            return Object(ClientApi.b)(enhancer);
                        });
                    case 'argsEnhancers':
                        return value.forEach(function (enhancer) {
                            return Object(ClientApi.c)(enhancer);
                        });
                    case 'render':
                        return Object(ClientApi.g)(value);
                    case 'globals':
                    case 'globalTypes':
                        var v = {};
                        return (v[key] = value), Object(ClientApi.f)(v, !1);
                    case '__namedExportsOrder':
                    case 'decorateStory':
                    case 'renderToDOM':
                        return null;
                    default:
                        return console.log(key + ' was not supported :( !');
                }
            });
        },
        './generated-stories-entry.js': function (module, exports, __webpack_require__) {
            'use strict';
            (function (module) {
                (0, __webpack_require__('./node_modules/@storybook/html/dist/esm/client/index.js').configure)(
                    [
                        __webpack_require__(
                            './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'
                        ),
                        __webpack_require__(
                            './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$'
                        )
                    ],
                    module,
                    !1
                );
            }.call(
                this,
                __webpack_require__(
                    './node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js'
                )(module)
            ));
        },
        './src/display/Anchor.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'a', function () {
                return Anchor_Anchor;
            });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.set-prototype-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-prototype-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.reflect.construct.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.create.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js'),
                __webpack_require__('./node_modules/core-js/modules/es.reflect.get.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js');
            var pixi = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js');
            function _typeof(obj) {
                return (
                    (_typeof =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (obj) {
                                  return typeof obj;
                              }
                            : function (obj) {
                                  return obj &&
                                      'function' == typeof Symbol &&
                                      obj.constructor === Symbol &&
                                      obj !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof obj;
                              }),
                    _typeof(obj)
                );
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        'value' in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _get() {
                return (
                    (_get =
                        'undefined' != typeof Reflect && Reflect.get
                            ? Reflect.get
                            : function _get(target, property, receiver) {
                                  var base = _superPropBase(target, property);
                                  if (base) {
                                      var desc = Object.getOwnPropertyDescriptor(base, property);
                                      return desc.get
                                          ? desc.get.call(arguments.length < 3 ? target : receiver)
                                          : desc.value;
                                  }
                              }),
                    _get.apply(this, arguments)
                );
            }
            function _superPropBase(object, property) {
                for (
                    ;
                    !Object.prototype.hasOwnProperty.call(object, property) &&
                    null !== (object = _getPrototypeOf(object));

                );
                return object;
            }
            function _setPrototypeOf(o, p) {
                return (
                    (_setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            return (o.__proto__ = p), o;
                        }),
                    _setPrototypeOf(o, p)
                );
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function _createSuperInternal() {
                    var result,
                        Super = _getPrototypeOf(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                if (call && ('object' === _typeof(call) || 'function' == typeof call)) return call;
                if (void 0 !== call) throw new TypeError('Derived constructors may only return object or undefined');
                return (function _assertThisInitialized(self) {
                    if (void 0 === self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                })(self);
            }
            function _getPrototypeOf(o) {
                return (
                    (_getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function _getPrototypeOf(o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          }),
                    _getPrototypeOf(o)
                );
            }
            function Anchor_typeof(obj) {
                return (
                    (Anchor_typeof =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (obj) {
                                  return typeof obj;
                              }
                            : function (obj) {
                                  return obj &&
                                      'function' == typeof Symbol &&
                                      obj.constructor === Symbol &&
                                      obj !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof obj;
                              }),
                    Anchor_typeof(obj)
                );
            }
            function Anchor_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        'value' in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function Anchor_get() {
                return (
                    (Anchor_get =
                        'undefined' != typeof Reflect && Reflect.get
                            ? Reflect.get
                            : function _get(target, property, receiver) {
                                  var base = Anchor_superPropBase(target, property);
                                  if (base) {
                                      var desc = Object.getOwnPropertyDescriptor(base, property);
                                      return desc.get
                                          ? desc.get.call(arguments.length < 3 ? target : receiver)
                                          : desc.value;
                                  }
                              }),
                    Anchor_get.apply(this, arguments)
                );
            }
            function Anchor_superPropBase(object, property) {
                for (
                    ;
                    !Object.prototype.hasOwnProperty.call(object, property) &&
                    null !== (object = Anchor_getPrototypeOf(object));

                );
                return object;
            }
            function Anchor_setPrototypeOf(o, p) {
                return (
                    (Anchor_setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            return (o.__proto__ = p), o;
                        }),
                    Anchor_setPrototypeOf(o, p)
                );
            }
            function Anchor_createSuper(Derived) {
                var hasNativeReflectConstruct = (function Anchor_isNativeReflectConstruct() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function _createSuperInternal() {
                    var result,
                        Super = Anchor_getPrototypeOf(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = Anchor_getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return Anchor_possibleConstructorReturn(this, result);
                };
            }
            function Anchor_possibleConstructorReturn(self, call) {
                if (call && ('object' === Anchor_typeof(call) || 'function' == typeof call)) return call;
                if (void 0 !== call) throw new TypeError('Derived constructors may only return object or undefined');
                return (function Anchor_assertThisInitialized(self) {
                    if (void 0 === self)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                })(self);
            }
            function Anchor_getPrototypeOf(o) {
                return (
                    (Anchor_getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function _getPrototypeOf(o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          }),
                    Anchor_getPrototypeOf(o)
                );
            }
            var Anchor_Anchor = (function (_AbstractControl) {
                !(function Anchor_inherits(subClass, superClass) {
                    if ('function' != typeof superClass && null !== superClass)
                        throw new TypeError('Super expression must either be null or a function');
                    (subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {value: subClass, writable: !0, configurable: !0}
                    })),
                        Object.defineProperty(subClass, 'prototype', {writable: !1}),
                        superClass && Anchor_setPrototypeOf(subClass, superClass);
                })(Anchor, _AbstractControl);
                var _super = Anchor_createSuper(Anchor);
                function Anchor() {
                    var _this;
                    return (
                        (function Anchor_classCallCheck(instance, Constructor) {
                            if (!(instance instanceof Constructor))
                                throw new TypeError('Cannot call a class as a function');
                        })(this, Anchor),
                        ((_this = _super.call(this))._text = void 0),
                        (_this._graphics = void 0),
                        (_this._textField = void 0),
                        (_this._graphics = new pixi.Graphics()),
                        (_this._graphics.interactive = !0),
                        _this._graphics.lineStyle({color: 16776960, width: 1}),
                        _this._graphics.beginFill(16776960, 0.25),
                        _this._graphics.drawCircle(0, 0, 4),
                        _this._graphics.endFill(),
                        (_this._graphics.hitArea = new pixi.Rectangle(-8, -8, 16, 16)),
                        _this.addChild(_this._graphics),
                        (_this._textField = new pixi.Text('', {fontSize: 6, fill: 65331, align: 'center'})),
                        (_this._textField.resolution = 8),
                        _this._textField.anchor.set(0.5),
                        _this._textField.pivot.set(0, 10),
                        _this.addChild(_this._textField),
                        _this
                    );
                }
                return (
                    (function Anchor_createClass(Constructor, protoProps, staticProps) {
                        return (
                            protoProps && Anchor_defineProperties(Constructor.prototype, protoProps),
                            staticProps && Anchor_defineProperties(Constructor, staticProps),
                            Object.defineProperty(Constructor, 'prototype', {writable: !1}),
                            Constructor
                        );
                    })(Anchor, [
                        {
                            key: 'validate',
                            value: function validate() {
                                var _this$_text;
                                Anchor_get(Anchor_getPrototypeOf(Anchor.prototype), 'validate', this).call(this),
                                    this._textField &&
                                        (this._textField.text =
                                            null !== (_this$_text = this._text) && void 0 !== _this$_text
                                                ? _this$_text
                                                : '');
                            }
                        },
                        {
                            key: 'text',
                            get: function get() {
                                return this._text;
                            },
                            set: function set(value) {
                                this._text !== value && ((this._text = value), this.invalidate());
                            }
                        }
                    ]),
                    Anchor
                );
            })(
                (function (_Sprite) {
                    !(function _inherits(subClass, superClass) {
                        if ('function' != typeof superClass && null !== superClass)
                            throw new TypeError('Super expression must either be null or a function');
                        (subClass.prototype = Object.create(superClass && superClass.prototype, {
                            constructor: {value: subClass, writable: !0, configurable: !0}
                        })),
                            Object.defineProperty(subClass, 'prototype', {writable: !1}),
                            superClass && _setPrototypeOf(subClass, superClass);
                    })(AbstractControl, _Sprite);
                    var _super = _createSuper(AbstractControl);
                    function AbstractControl() {
                        var _this;
                        return (
                            (function _classCallCheck(instance, Constructor) {
                                if (!(instance instanceof Constructor))
                                    throw new TypeError('Cannot call a class as a function');
                            })(this, AbstractControl),
                            ((_this = _super.call(this))._invalidated = !1),
                            (_this.interactive = !0),
                            _this
                        );
                    }
                    return (
                        (function _createClass(Constructor, protoProps, staticProps) {
                            return (
                                protoProps && _defineProperties(Constructor.prototype, protoProps),
                                staticProps && _defineProperties(Constructor, staticProps),
                                Object.defineProperty(Constructor, 'prototype', {writable: !1}),
                                Constructor
                            );
                        })(AbstractControl, [
                            {
                                key: 'render',
                                value: function render(renderer) {
                                    _get(_getPrototypeOf(AbstractControl.prototype), 'render', this).call(
                                        this,
                                        renderer
                                    ),
                                        this._invalidated && this.validate();
                                }
                            },
                            {
                                key: 'invalidate',
                                value: function invalidate() {
                                    this._invalidated = !0;
                                }
                            },
                            {
                                key: 'validate',
                                value: function validate() {
                                    this._invalidated = !1;
                                }
                            }
                        ]),
                        AbstractControl
                    );
                })(pixi.Sprite)
            );
        },
        './src/utils/ColorUtils.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'a', function () {
                return parseColor;
            });
            __webpack_require__('./node_modules/core-js/modules/es.number.is-integer.js'),
                __webpack_require__('./node_modules/core-js/modules/es.number.constructor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.parse-int.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.starts-with.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.match.js'),
                __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js');
            function parseColor(value) {
                if (!value) return 0;
                if (Number.isInteger(value)) return value;
                if (value && '#' === value.charAt(0)) return parseInt(value.substring(1), 16);
                if (value.startsWith('rgba')) {
                    var re = /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;
                    if (re.test(value)) {
                        var m = value.match(re);
                        return (
                            ((255 & parseInt(null == m ? void 0 : m[1])) << 16) |
                            ((255 & parseInt(null == m ? void 0 : m[2])) << 8) |
                            (255 & parseInt(null == m ? void 0 : m[3]))
                        );
                    }
                }
                return value.startsWith('hsla') && console.warn('HSLA color not supported (yet)'), 0;
            }
        },
        './src/utils/GeometryUtils.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'a', function () {
                return GeometryUtils;
            });
            __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        'value' in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            var GeometryUtils = (function () {
                function GeometryUtils() {
                    !(function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, GeometryUtils);
                }
                return (
                    (function _createClass(Constructor, protoProps, staticProps) {
                        return (
                            protoProps && _defineProperties(Constructor.prototype, protoProps),
                            staticProps && _defineProperties(Constructor, staticProps),
                            Object.defineProperty(Constructor, 'prototype', {writable: !1}),
                            Constructor
                        );
                    })(GeometryUtils, null, [
                        {
                            key: 'deg2rad',
                            value: function deg2rad(angle) {
                                return ((angle = isNaN(angle) ? 0 : angle) * Math.PI) / 180;
                            }
                        },
                        {
                            key: 'rad2deg',
                            value: function rad2deg(angle) {
                                return (180 * (angle = isNaN(angle) ? 0 : angle)) / Math.PI;
                            }
                        }
                    ]),
                    GeometryUtils
                );
            })();
        },
        './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$':
            function (module, exports, __webpack_require__) {
                var map = {
                    './app/Hello.stories.ts': './stories/app/Hello.stories.ts',
                    './app/HelloRender.stories.ts': './stories/app/HelloRender.stories.ts',
                    './display/NineSlicePlane.stories.js': './stories/display/NineSlicePlane.stories.js',
                    './graphics/Burst.stories.js': './stories/graphics/Burst.stories.js',
                    './graphics/ChamferRect.stories.js': './stories/graphics/ChamferRect.stories.js',
                    './graphics/FilletRect.stories.js': './stories/graphics/FilletRect.stories.js',
                    './graphics/Gear.stories.js': './stories/graphics/Gear.stories.js',
                    './graphics/LineBezierCurve.stories.js': './stories/graphics/LineBezierCurve.stories.js',
                    './graphics/LineJoin.stories.js': './stories/graphics/LineJoin.stories.js',
                    './graphics/LineQuadraticCurve.stories.js': './stories/graphics/LineQuadraticCurve.stories.js',
                    './graphics/RegularPolygon.stories.js': './stories/graphics/RegularPolygon.stories.js',
                    './graphics/RoundedPolygon.stories.js': './stories/graphics/RoundedPolygon.stories.js',
                    './graphics/RoundedRect.stories.js': './stories/graphics/RoundedRect.stories.js',
                    './graphics/Star.stories.js': './stories/graphics/Star.stories.js',
                    './graphics/Torus.stories.js': './stories/graphics/Torus.stories.js',
                    './images/Image.stories.js': './stories/images/Image.stories.js',
                    './interaction/Drag.stories.js': './stories/interaction/Drag.stories.js',
                    './text/BitmapText.stories.js': './stories/text/BitmapText.stories.js',
                    './text/SystemFont.stories.js': './stories/text/SystemFont.stories.js',
                    './text/Text.stories.js': './stories/text/Text.stories.js',
                    './text/TextMetrics.stories.js': './stories/text/TextMetrics.stories.js',
                    './text/TextWordWrap.stories.js': './stories/text/TextWordWrap.stories.js',
                    './texture/ScaleMode.stories.js': './stories/texture/ScaleMode.stories.js'
                };
                function webpackContext(req) {
                    var id = webpackContextResolve(req);
                    return __webpack_require__(id);
                }
                function webpackContextResolve(req) {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    return map[req];
                }
                (webpackContext.keys = function webpackContextKeys() {
                    return Object.keys(map);
                }),
                    (webpackContext.resolve = webpackContextResolve),
                    (module.exports = webpackContext),
                    (webpackContext.id =
                        './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$');
            },
        './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
            function (module, exports, __webpack_require__) {
                var map = {'./Introduction.stories.mdx': './stories/Introduction.stories.mdx'};
                function webpackContext(req) {
                    var id = webpackContextResolve(req);
                    return __webpack_require__(id);
                }
                function webpackContextResolve(req) {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    return map[req];
                }
                (webpackContext.keys = function webpackContextKeys() {
                    return Object.keys(map);
                }),
                    (webpackContext.resolve = webpackContextResolve),
                    (module.exports = webpackContext),
                    (webpackContext.id =
                        './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$');
            },
        './stories/Introduction.stories.mdx': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, '__page', function () {
                    return __page;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/react/index.js');
            var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    './node_modules/@mdx-js/react/dist/esm.js'
                ),
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/@storybook/addon-docs/dist/esm/index.js'
                ),
                _excluded = ['components'];
            function _extends() {
                return (
                    (_extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source)
                                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                            }
                            return target;
                        }),
                    _extends.apply(this, arguments)
                );
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(source, excluded) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                                    (target[key] = source[key]));
                }
                return target;
            }
            var layoutProps = {};
            function MDXContent(_ref) {
                var components = _ref.components,
                    props = _objectWithoutProperties(_ref, _excluded);
                return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'wrapper',
                    _extends({}, layoutProps, props, {components: components, mdxType: 'MDXLayout'}),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
                        {title: 'Experiments/Introduction', mdxType: 'Meta'}
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('style', null, '\n'),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                        'h1',
                        {id: 'blood4-experiments'},
                        'Blood4 Experiments'
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('p', null, 'Blood4 Experimental Prototypes')
                );
            }
            MDXContent.isMDXComponent = !0;
            var __page = function __page() {
                throw new Error('Docs-only story');
            };
            __page.parameters = {docsOnly: !0};
            var componentMeta = {title: 'Experiments/Introduction', includeStories: ['__page']},
                mdxStoryNameToKey = {};
            (componentMeta.parameters = componentMeta.parameters || {}),
                (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
                    page: function page() {
                        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                            {mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentAnnotations: componentMeta},
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent, null)
                        );
                    }
                })),
                (__webpack_exports__.default = componentMeta);
        },
        './stories/Scene.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'b', function () {
                return canvas;
            }),
                __webpack_require__.d(__webpack_exports__, 'a', function () {
                    return app;
                }),
                __webpack_require__.d(__webpack_exports__, 'e', function () {
                    return viewport;
                }),
                __webpack_require__.d(__webpack_exports__, 'c', function () {
                    return createScene;
                }),
                __webpack_require__.d(__webpack_exports__, 'd', function () {
                    return loadTextures;
                });
            __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                pixi_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './node_modules/pixi-viewport/dist/esm/viewport.es.js'
                );
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg),
                        value = info.value;
                } catch (error) {
                    return void reject(error);
                }
                info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
            }
            var canvas = document.createElement('canvas'),
                app = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Application({
                    view: canvas,
                    width: 300,
                    height: 150,
                    antialias: !0,
                    autoDensity: !0,
                    backgroundColor: 1250067,
                    resolution: devicePixelRatio,
                    forceCanvas: !1
                }),
                viewport = new pixi_viewport__WEBPACK_IMPORTED_MODULE_3__.a({
                    worldWidth: 1e3,
                    worldHeight: 1e3,
                    screenWidth: 300,
                    screenHeight: 150,
                    divWheel: app.view,
                    interaction: app.renderer.plugins.interaction
                })
                    .drag()
                    .pinch()
                    .wheel()
                    .decelerate()
                    .clampZoom({minScale: 0.1, maxScale: 25});
            app.stage.addChild(viewport), app.ticker.start();
            var resize = function resize(width, height) {
                app.renderer.resize(width, height), viewport.resize(width, height);
            };
            window.addEventListener('resize', function () {
                resize(window.innerWidth - 32, window.innerHeight - 36);
            });
            var createScene = function createScene(_ref) {
                    for (var width = _ref.width, height = _ref.height; viewport.children.length > 0; ) {
                        var child = viewport.children.shift();
                        null == child || child.destroy(!0);
                    }
                    resize(width, height);
                },
                loadTextures = (function () {
                    var _ref2 = (function _asyncToGenerator(fn) {
                        return function () {
                            var self = this,
                                args = arguments;
                            return new Promise(function (resolve, reject) {
                                var gen = fn.apply(self, args);
                                function _next(value) {
                                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                                }
                                function _throw(err) {
                                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                                }
                                _next(void 0);
                            });
                        };
                    })(
                        regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                for (;;)
                                    switch ((_context.prev = _context.next)) {
                                        case 0:
                                            return _context.abrupt(
                                                'return',
                                                new Promise(function (resolve, reject) {
                                                    var loader = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Loader();
                                                    loader
                                                        .add('images/logo.svg')
                                                        .add({name: 'Eurostile80', url: 'fonts/Eurostile80.fnt'})
                                                        .load(),
                                                        loader.onComplete.add(function () {
                                                            resolve();
                                                        }),
                                                        loader.onError.add(function () {
                                                            reject();
                                                        });
                                                })
                                            );
                                        case 1:
                                        case 'end':
                                            return _context.stop();
                                    }
                            }, _callee);
                        })
                    );
                    return function loadTextures() {
                        return _ref2.apply(this, arguments);
                    };
                })();
        },
        './stories/app/Hello.stories.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Hello', function () {
                    return Hello;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js');
            __webpack_exports__.default = {title: 'App/Application'};
            var Hello = function Hello(_ref) {
                _ref.color;
                _Scene__WEBPACK_IMPORTED_MODULE_2__.a.renderer.backgroundColor = 1250067;
                var logo = pixi_js__WEBPACK_IMPORTED_MODULE_3__.Sprite.from('images/logo.svg');
                return (
                    logo.anchor.set(0.5, 0.5),
                    (logo.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                    (logo.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(logo),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                );
            };
            Hello.parameters = Object.assign(
                {
                    storySource: {
                        source: "({color}: {color: string}) => {\n    app.renderer.backgroundColor = 0x131313;\n    const logo = Sprite.from('images/logo.svg');\n    logo.anchor.set(0.5, 0.5);\n    logo.x = viewport.screenWidth / 2;\n    logo.y = viewport.screenHeight / 2;\n    viewport.addChild(logo);\n    return canvas;\n}"
                    }
                },
                Hello.parameters
            );
        },
        './stories/app/HelloRender.stories.ts': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'HelloRender', function () {
                    return HelloRender;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/utils/ColorUtils.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js');
            __webpack_exports__.default = {
                title: 'App/Application',
                argTypes: {color: {control: 'color'}, spriteColor: {control: 'color'}}
            };
            var HelloRender = function HelloRender(_ref) {
                var color = _ref.color,
                    spriteColor = _ref.spriteColor;
                _Scene__WEBPACK_IMPORTED_MODULE_2__.a.renderer.backgroundColor = Object(
                    _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_3__.a
                )(color);
                var logo = pixi_js__WEBPACK_IMPORTED_MODULE_4__.Sprite.from('images/logo.svg');
                logo.anchor.set(0.5, 0.5),
                    (logo.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                    (logo.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(logo);
                var sprite = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(
                    new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Sprite(pixi_js__WEBPACK_IMPORTED_MODULE_4__.Texture.WHITE)
                );
                return (
                    (sprite.tint = Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_3__.a)(spriteColor)),
                    (sprite.width = sprite.height = 100),
                    sprite.position.set(100, 100),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                );
            };
            (HelloRender.args = {color: '#131313', spriteColor: '#ff0000'}),
                (HelloRender.parameters = Object.assign(
                    {
                        storySource: {
                            source: "({color, spriteColor}: {color: string; spriteColor: string}) => {\n    app.renderer.backgroundColor = parseColor(color);\n    const logo = Sprite.from('images/logo.svg');\n    logo.anchor.set(0.5, 0.5);\n    logo.x = viewport.screenWidth / 2;\n    logo.y = viewport.screenHeight / 2;\n    viewport.addChild(logo);\n\n    // add a red box\n    const sprite = viewport.addChild(new Sprite(Texture.WHITE));\n    sprite.tint = parseColor(spriteColor);\n    sprite.width = sprite.height = 100;\n    sprite.position.set(100, 100);\n\n    return canvas;\n}"
                        }
                    },
                    HelloRender.parameters
                ));
        },
        './stories/display/NineSlicePlane.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Plane', function () {
                    return Plane;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./stories/Scene.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js');
            __webpack_exports__.default = {
                title: 'Display/9-Slice Plane',
                argTypes: {
                    width: {control: {type: 'range', min: 1, max: 1024, step: 1}},
                    height: {control: {type: 'range', min: 1, max: 1024, step: 1}},
                    leftWidth: {control: {type: 'range', min: 1, max: 256, step: 1}},
                    topHeight: {control: {type: 'range', min: 1, max: 256, step: 1}},
                    rightWidth: {control: {type: 'range', min: 1, max: 256, step: 1}},
                    bottomHeight: {control: {type: 'range', min: 1, max: 256, step: 1}}
                }
            };
            var Plane = function Plane(_ref) {
                var width = _ref.width,
                    height = _ref.height,
                    leftWidth = _ref.leftWidth,
                    rightWidth = _ref.rightWidth,
                    topHeight = _ref.topHeight,
                    bottomHeight = _ref.bottomHeight,
                    plane = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.NineSlicePlane(
                        pixi_js__WEBPACK_IMPORTED_MODULE_2__.Texture.from('images/checkerboard.png'),
                        leftWidth,
                        topHeight,
                        rightWidth,
                        bottomHeight
                    );
                return (
                    (plane.width = width),
                    (plane.height = height),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(plane),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.b
                );
            };
            (Plane.args = {
                width: 1024,
                height: 1024,
                leftWidth: 128,
                topHeight: 128,
                rightWidth: 128,
                bottomHeight: 128
            }),
                (Plane.parameters = Object.assign(
                    {
                        storySource: {
                            source: "({width, height, leftWidth, rightWidth, topHeight, bottomHeight}) => {\r\n    const plane = new NineSlicePlane(\r\n        Texture.from('images/checkerboard.png'),\r\n        leftWidth,\r\n        topHeight,\r\n        rightWidth,\r\n        bottomHeight\r\n    );\r\n    plane.width = width;\r\n    plane.height = height;\r\n    viewport.addChild(plane);\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    Plane.parameters
                ));
        },
        './stories/graphics/Burst.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Burst', function () {
                    return Burst_stories_Burst;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                Scene = __webpack_require__('./stories/Scene.ts');
            var ColorUtils = __webpack_require__('./src/utils/ColorUtils.ts'),
                Burst_stories_Burst =
                    ((__webpack_exports__.default = {
                        title: 'Graphics/Shapes',
                        argTypes: {
                            stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                            color: {control: 'color'},
                            fill: {control: 'color'},
                            sides: {control: {type: 'range', min: 3, max: 25, step: 1}},
                            innerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                            outerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                            angle: {control: {type: 'range', min: 0, max: 360, step: 1}}
                        }
                    }),
                    function Burst(_ref) {
                        var stroke = _ref.stroke,
                            color = _ref.color,
                            fill = _ref.fill,
                            sides = _ref.sides,
                            innerRadius = _ref.innerRadius,
                            outerRadius = _ref.outerRadius,
                            angle = _ref.angle,
                            graphics = new pixi.Graphics();
                        return (
                            graphics.lineStyle(stroke, Object(ColorUtils.a)(color)),
                            graphics.beginFill(Object(ColorUtils.a)(fill)),
                            (function drawBurst(target, x, y, sides, innerRadius, outerRadius) {
                                var n,
                                    dx,
                                    dy,
                                    cx,
                                    cy,
                                    angle = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                    step = (2 * Math.PI) / sides,
                                    halfStep = step / 2,
                                    qtrStep = step / 4,
                                    start = (angle / 180) * Math.PI;
                                for (
                                    target.moveTo(x + Math.cos(start) * outerRadius, y - Math.sin(start) * outerRadius),
                                        n = 1;
                                    n <= sides;
                                    ++n
                                )
                                    (cx =
                                        x +
                                        Math.cos(start + step * n - 3 * qtrStep) * (innerRadius / Math.cos(qtrStep))),
                                        (cy =
                                            y -
                                            Math.sin(start + step * n - 3 * qtrStep) *
                                                (innerRadius / Math.cos(qtrStep))),
                                        (dx = x + Math.cos(start + step * n - halfStep) * innerRadius),
                                        (dy = y - Math.sin(start + step * n - halfStep) * innerRadius),
                                        target.quadraticCurveTo(cx, cy, dx, dy),
                                        (cx =
                                            x +
                                            Math.cos(start + step * n - qtrStep) * (innerRadius / Math.cos(qtrStep))),
                                        (cy =
                                            y -
                                            Math.sin(start + step * n - qtrStep) * (innerRadius / Math.cos(qtrStep))),
                                        (dx = x + Math.cos(start + step * n) * outerRadius),
                                        (dy = y - Math.sin(start + step * n) * outerRadius),
                                        target.quadraticCurveTo(cx, cy, dx, dy);
                                target.closePath();
                            })(
                                graphics,
                                Scene.e.screenWidth / 2,
                                Scene.e.screenHeight / 2,
                                sides,
                                innerRadius,
                                outerRadius,
                                angle
                            ),
                            Scene.e.addChild(graphics),
                            Scene.b
                        );
                    });
            (Burst_stories_Burst.args = {
                stroke: 2,
                color: '#cfefff',
                fill: '#036191',
                sides: 5,
                innerRadius: 50,
                outerRadius: 30,
                angle: 0
            }),
                (Burst_stories_Burst.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, sides, innerRadius, outerRadius, angle}) => {\r\n    const graphics = new PIXI.Graphics();\r\n\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    drawBurst(graphics, viewport.screenWidth / 2, viewport.screenHeight / 2, sides, innerRadius, outerRadius, angle);\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    Burst_stories_Burst.parameters
                ));
        },
        './stories/graphics/ChamferRect.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'ChamferRect', function () {
                    return ChamferRect;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    width: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    height: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    chamfer: {control: {type: 'range', min: 0, max: 50, step: 1}}
                }
            };
            var ChamferRect = function ChamferRect(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    width = _ref.width,
                    height = _ref.height,
                    chamfer = _ref.chamfer,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(fill)),
                    graphics.drawChamferRect(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2 - width / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2 - height / 2,
                        width,
                        height,
                        chamfer
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (ChamferRect.args = {stroke: 2, color: '#cfefff', fill: '#036191', width: 100, height: 100, chamfer: 15}),
                (ChamferRect.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, width, height, chamfer}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawChamferRect(\r\n        viewport.screenWidth / 2 - width / 2,\r\n        viewport.screenHeight / 2 - height / 2,\r\n        width,\r\n        height,\r\n        chamfer\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    ChamferRect.parameters
                ));
        },
        './stories/graphics/FilletRect.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'FilletRect', function () {
                    return FilletRect;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    width: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    height: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    fillet: {control: {type: 'range', min: -50, max: 50, step: 1}}
                }
            };
            var FilletRect = function FilletRect(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    width = _ref.width,
                    height = _ref.height,
                    fillet = _ref.fillet,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(fill)),
                    graphics.drawFilletRect(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2 - width / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2 - height / 2,
                        width,
                        height,
                        fillet
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (FilletRect.args = {stroke: 2, color: '#cfefff', fill: '#036191', width: 100, height: 100, fillet: -15}),
                (FilletRect.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, width, height, fillet}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawFilletRect(\r\n        viewport.screenWidth / 2 - width / 2,\r\n        viewport.screenHeight / 2 - height / 2,\r\n        width,\r\n        height,\r\n        fillet\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    FilletRect.parameters
                ));
        },
        './stories/graphics/Gear.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Gear', function () {
                    return Gear_stories_Gear;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                Scene = __webpack_require__('./stories/Scene.ts');
            var ColorUtils = __webpack_require__('./src/utils/ColorUtils.ts'),
                Gear_stories_Gear =
                    ((__webpack_exports__.default = {
                        title: 'Graphics/Shapes',
                        argTypes: {
                            stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                            color: {control: 'color'},
                            fill: {control: 'color'},
                            sides: {control: {type: 'range', min: 3, max: 25, step: 1}},
                            innerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                            outerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                            holeSides: {control: {type: 'range', min: 3, max: 25, step: 1}},
                            holeRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                            angle: {control: {type: 'range', min: 0, max: 360, step: 1}}
                        }
                    }),
                    function Gear(_ref) {
                        var stroke = _ref.stroke,
                            color = _ref.color,
                            fill = _ref.fill,
                            sides = _ref.sides,
                            innerRadius = _ref.innerRadius,
                            outerRadius = _ref.outerRadius,
                            holeSides = _ref.holeSides,
                            holeRadius = _ref.holeRadius,
                            angle = _ref.angle,
                            graphics = new pixi.Graphics();
                        return (
                            graphics.lineStyle(stroke, Object(ColorUtils.a)(color)),
                            graphics.beginFill(Object(ColorUtils.a)(fill)),
                            (function drawGear(target, x, y, sides) {
                                var n,
                                    dx,
                                    dy,
                                    innerRadius = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 80,
                                    outerRadius = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 4,
                                    angle = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                    holeSides = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 2,
                                    holeRadius = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
                                    step = (2 * Math.PI) / sides,
                                    qtrStep = step / 4,
                                    start = (angle / 180) * Math.PI;
                                for (
                                    target.moveTo(x + Math.cos(start) * outerRadius, y - Math.sin(start) * outerRadius),
                                        n = 1;
                                    n <= sides;
                                    ++n
                                )
                                    (dx = x + Math.cos(start + step * n - 3 * qtrStep) * innerRadius),
                                        (dy = y - Math.sin(start + step * n - 3 * qtrStep) * innerRadius),
                                        target.lineTo(dx, dy),
                                        (dx = x + Math.cos(start + step * n - 2 * qtrStep) * innerRadius),
                                        (dy = y - Math.sin(start + step * n - 2 * qtrStep) * innerRadius),
                                        target.lineTo(dx, dy),
                                        (dx = x + Math.cos(start + step * n - qtrStep) * outerRadius),
                                        (dy = y - Math.sin(start + step * n - qtrStep) * outerRadius),
                                        target.lineTo(dx, dy),
                                        (dx = x + Math.cos(start + step * n) * outerRadius),
                                        (dy = y - Math.sin(start + step * n) * outerRadius),
                                        target.lineTo(dx, dy);
                                for (
                                    target.closePath(),
                                        step = (2 * Math.PI) / holeSides,
                                        target.moveTo(
                                            x + Math.cos(start) * holeRadius,
                                            y - Math.sin(start) * holeRadius
                                        ),
                                        n = 1;
                                    n <= holeSides;
                                    ++n
                                )
                                    (dx = x + Math.cos(start + step * n) * holeRadius),
                                        (dy = y - Math.sin(start + step * n) * holeRadius),
                                        target.lineTo(dx, dy);
                                target.closePath();
                            })(
                                graphics,
                                Scene.e.screenWidth / 2,
                                Scene.e.screenHeight / 2,
                                sides,
                                innerRadius,
                                outerRadius,
                                angle,
                                holeSides,
                                holeRadius
                            ),
                            Scene.e.addChild(graphics),
                            Scene.b
                        );
                    });
            (Gear_stories_Gear.args = {
                stroke: 2,
                color: '#cfefff',
                fill: '#036191',
                sides: 8,
                innerRadius: 35,
                outerRadius: 50,
                holeSides: 8,
                holeRadius: 10,
                angle: 0
            }),
                (Gear_stories_Gear.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, sides, innerRadius, outerRadius, holeSides, holeRadius, angle}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    drawGear(\r\n        graphics,\r\n        viewport.screenWidth / 2,\r\n        viewport.screenHeight / 2,\r\n        sides,\r\n        innerRadius,\r\n        outerRadius,\r\n        angle,\r\n        holeSides,\r\n        holeRadius\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    Gear_stories_Gear.parameters
                ));
        },
        './stories/graphics/LineBezierCurve.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'BezierCurve', function () {
                    return BezierCurve;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./stories/Scene.ts'),
                _src_display_Anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/display/Anchor.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            function addAnchor(x, y) {
                var anchor = new _src_display_Anchor__WEBPACK_IMPORTED_MODULE_2__.a();
                anchor.position.set(x, y),
                    (anchor.text = x + ', ' + y),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(anchor);
            }
            __webpack_exports__.default = {
                title: 'Graphics/Lines',
                argTypes: {
                    alignment: {control: {type: 'range', min: 0, max: 1, step: 0.1}},
                    color: {control: 'color'},
                    cx1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    cx2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    cy1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    cy2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    x1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    x2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    y1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    y2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    stroke: {control: {type: 'range', min: 0.1, max: 20, step: 0.1}}
                }
            };
            var BezierCurve = function BezierCurve(_ref) {
                var alignment = _ref.alignment,
                    color = _ref.color,
                    stroke = _ref.stroke,
                    cx1 = _ref.cx1,
                    cy1 = _ref.cy1,
                    cx2 = _ref.cx2,
                    cy2 = _ref.cy2,
                    x1 = _ref.x1,
                    x2 = _ref.x2,
                    y1 = _ref.y1,
                    y2 = _ref.y2,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_3__.Graphics();
                return (
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(graphics),
                    graphics.lineStyle({
                        width: stroke,
                        alignment: alignment,
                        color: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.parseColor)(color)
                    }),
                    graphics.moveTo(x1, y1),
                    graphics.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2),
                    addAnchor(x1, y1),
                    addAnchor(cx1, cy1),
                    addAnchor(cx2, cy2),
                    addAnchor(x2, y2),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.b
                );
            };
            (BezierCurve.args = {
                color: '#ffffff',
                stroke: 5,
                alignment: 0.5,
                x1: 0,
                y1: 0,
                cx1: 100,
                cy1: 0,
                cx2: 200,
                cy2: 100,
                x2: 200,
                y2: 200
            }),
                (BezierCurve.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({alignment, color, stroke, cx1, cy1, cx2, cy2, x1, x2, y1, y2}) => {\r\n    const graphics = new Graphics();\r\n    viewport.addChild(graphics);\r\n\r\n    graphics.lineStyle({\r\n        width: stroke,\r\n        alignment: alignment,\r\n        color: parseColor(color)\r\n    });\r\n\r\n    graphics.moveTo(x1, y1);\r\n    graphics.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);\r\n\r\n    addAnchor(x1, y1);\r\n    addAnchor(cx1, cy1);\r\n    addAnchor(cx2, cy2);\r\n    addAnchor(x2, y2);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    BezierCurve.parameters
                ));
        },
        './stories/graphics/LineJoin.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Join', function () {
                    return Join;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js')),
                _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/utils/GeometryUtils.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Graphics/Lines',
                argTypes: {
                    alignment: {control: {type: 'range', min: 0, max: 1, step: 0.1}},
                    angle: {control: {type: 'range', min: 0, max: 360, step: 1}},
                    color: {control: 'color'},
                    miterLimit: {control: {type: 'range', min: 0, max: 120, step: 0.11}},
                    stroke: {control: {type: 'range', min: 0.1, max: 20, step: 0.1}}
                }
            };
            var drawSymbol = function drawSymbol(graphics, x, y, angle, cap) {
                    var p = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Point(x, y + 135),
                        p1 = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Point(
                            p.x +
                                50 *
                                    Math.cos(
                                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(angle / 2 - 90)
                                    ),
                            p.y +
                                50 *
                                    Math.sin(
                                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(angle / 2 - 90)
                                    )
                        ),
                        p2 = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Point(
                            p.x +
                                50 *
                                    Math.cos(
                                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(-angle / 2 - 90)
                                    ),
                            p.y +
                                50 *
                                    Math.sin(
                                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(-angle / 2 - 90)
                                    )
                        );
                    graphics.moveTo(p1.x, p1.y),
                        graphics.lineTo(p.x, p.y),
                        graphics.lineTo(p2.x, p2.y),
                        graphics.drawRegularPolygon(x, y, 25, 3);
                    var text = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Text(cap, {
                        fontFamily: 'Arial',
                        fontSize: 18,
                        fill: 16777215,
                        align: 'center'
                    });
                    (text.resolution = 8),
                        text.anchor.set(0.5),
                        (text.x = x),
                        (text.y = y + 50),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(text);
                },
                Join = function Join(_ref) {
                    var alignment = _ref.alignment,
                        angle = _ref.angle,
                        color = _ref.color,
                        miterLimit = _ref.miterLimit,
                        stroke = _ref.stroke,
                        graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Graphics();
                    return (
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(graphics),
                        graphics.lineStyle({
                            width: stroke,
                            alignment: alignment,
                            color: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_6__.parseColor)(color),
                            miterLimit: miterLimit,
                            join: pixi_js__WEBPACK_IMPORTED_MODULE_4__.LINE_JOIN.BEVEL
                        }),
                        drawSymbol(graphics, 100, 100, angle, 'Bevel'),
                        graphics.lineStyle({
                            width: stroke,
                            alignment: alignment,
                            color: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_6__.parseColor)(color),
                            miterLimit: miterLimit,
                            join: pixi_js__WEBPACK_IMPORTED_MODULE_4__.LINE_JOIN.MITER
                        }),
                        drawSymbol(graphics, 200, 100, angle, 'Miter'),
                        graphics.lineStyle({
                            width: stroke,
                            alignment: alignment,
                            color: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_6__.parseColor)(color),
                            miterLimit: miterLimit,
                            join: pixi_js__WEBPACK_IMPORTED_MODULE_4__.LINE_JOIN.ROUND
                        }),
                        drawSymbol(graphics, 300, 100, angle, 'Round'),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                    );
                };
            (Join.args = {color: '#ffffff', stroke: 5, alignment: 0.5, angle: 45, miterLimit: 10}),
                (Join.parameters = Object.assign(
                    {
                        storySource: {
                            source: "({alignment, angle, color, miterLimit, stroke}) => {\r\n    const graphics = new Graphics();\r\n    viewport.addChild(graphics);\r\n\r\n    graphics.lineStyle({\r\n        width: stroke,\r\n        alignment: alignment,\r\n        color: parseColor(color),\r\n        miterLimit: miterLimit,\r\n        join: LINE_JOIN.BEVEL\r\n    });\r\n    drawSymbol(graphics, 100, 100, angle, 'Bevel');\r\n\r\n    graphics.lineStyle({\r\n        width: stroke,\r\n        alignment: alignment,\r\n        color: parseColor(color),\r\n        miterLimit: miterLimit,\r\n        join: LINE_JOIN.MITER\r\n    });\r\n    drawSymbol(graphics, 200, 100, angle, 'Miter');\r\n\r\n    graphics.lineStyle({\r\n        width: stroke,\r\n        alignment: alignment,\r\n        color: parseColor(color),\r\n        miterLimit: miterLimit,\r\n        join: LINE_JOIN.ROUND\r\n    });\r\n    drawSymbol(graphics, 300, 100, angle, 'Round');\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    Join.parameters
                ));
        },
        './stories/graphics/LineQuadraticCurve.stories.js': function (
            module,
            __webpack_exports__,
            __webpack_require__
        ) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'QuadraticCurve', function () {
                    return QuadraticCurve;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./stories/Scene.ts'),
                _src_display_Anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/display/Anchor.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            function addAnchor(x, y) {
                var anchor = new _src_display_Anchor__WEBPACK_IMPORTED_MODULE_2__.a();
                anchor.position.set(x, y),
                    (anchor.text = x + ', ' + y),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(anchor);
            }
            __webpack_exports__.default = {
                title: 'Graphics/Lines',
                argTypes: {
                    alignment: {control: {type: 'range', min: 0, max: 1, step: 0.1}},
                    color: {control: 'color'},
                    cx1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    cy1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    x1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    x2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    y1: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    y2: {control: {type: 'range', min: 0, max: 200, step: 1}},
                    stroke: {control: {type: 'range', min: 0.1, max: 20, step: 0.1}}
                }
            };
            var QuadraticCurve = function QuadraticCurve(_ref) {
                var alignment = _ref.alignment,
                    color = _ref.color,
                    stroke = _ref.stroke,
                    cx1 = _ref.cx1,
                    cy1 = _ref.cy1,
                    x1 = _ref.x1,
                    x2 = _ref.x2,
                    y1 = _ref.y1,
                    y2 = _ref.y2,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_3__.Graphics();
                return (
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(graphics),
                    graphics.lineStyle({
                        width: stroke,
                        alignment: alignment,
                        color: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.parseColor)(color)
                    }),
                    graphics.moveTo(x1, y1),
                    graphics.quadraticCurveTo(cx1, cy1, x2, y2),
                    addAnchor(x1, y1),
                    addAnchor(cx1, cy1),
                    addAnchor(x2, y2),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.b
                );
            };
            (QuadraticCurve.args = {
                color: '#ffffff',
                stroke: 5,
                alignment: 0.5,
                x1: 0,
                y1: 0,
                cx1: 200,
                cy1: 0,
                x2: 200,
                y2: 200
            }),
                (QuadraticCurve.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({alignment, color, stroke, cx1, cy1, x1, x2, y1, y2}) => {\r\n    const graphics = new Graphics();\r\n    viewport.addChild(graphics);\r\n\r\n    graphics.lineStyle({\r\n        width: stroke,\r\n        alignment: alignment,\r\n        color: parseColor(color)\r\n    });\r\n\r\n    graphics.moveTo(x1, y1);\r\n    graphics.quadraticCurveTo(cx1, cy1, x2, y2);\r\n\r\n    addAnchor(x1, y1);\r\n    addAnchor(cx1, cy1);\r\n    addAnchor(x2, y2);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    QuadraticCurve.parameters
                ));
        },
        './stories/graphics/RegularPolygon.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'RegularPolygon', function () {
                    return RegularPolygon;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/utils/GeometryUtils.ts'),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    radius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    sides: {control: {type: 'range', min: 3, max: 25, step: 1}},
                    rotation: {control: {type: 'range', min: 0, max: 360, step: 1}}
                }
            };
            var RegularPolygon = function RegularPolygon(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    radius = _ref.radius,
                    sides = _ref.sides,
                    rotation = _ref.rotation,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(fill)),
                    graphics.drawRegularPolygon(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2,
                        radius,
                        sides,
                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(rotation)
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (RegularPolygon.args = {stroke: 2, color: '#cfefff', fill: '#036191', radius: 50, sides: 5, rotation: 0}),
                (RegularPolygon.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, radius, sides, rotation}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawRegularPolygon(\r\n        viewport.screenWidth / 2,\r\n        viewport.screenHeight / 2,\r\n        radius,\r\n        sides,\r\n        GeometryUtils.deg2rad(rotation)\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    RegularPolygon.parameters
                ));
        },
        './stories/graphics/RoundedPolygon.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'RoundedPolygon', function () {
                    return RoundedPolygon;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/utils/GeometryUtils.ts'),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    radius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    sides: {control: {type: 'range', min: 3, max: 25, step: 1}},
                    corner: {control: {type: 'range', min: 1, max: 50, step: 1}},
                    rotation: {control: {type: 'range', min: 0, max: 360, step: 1}}
                }
            };
            var RoundedPolygon = function RoundedPolygon(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    radius = _ref.radius,
                    sides = _ref.sides,
                    corner = _ref.corner,
                    rotation = _ref.rotation,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(fill)),
                    graphics.drawRoundedPolygon(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2,
                        radius,
                        sides,
                        corner,
                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(rotation)
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (RoundedPolygon.args = {
                stroke: 2,
                color: '#cfefff',
                fill: '#036191',
                radius: 50,
                sides: 5,
                corner: 10,
                rotation: 0
            }),
                (RoundedPolygon.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, radius, sides, corner, rotation}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawRoundedPolygon(\r\n        viewport.screenWidth / 2,\r\n        viewport.screenHeight / 2,\r\n        radius,\r\n        sides,\r\n        corner,\r\n        GeometryUtils.deg2rad(rotation)\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    RoundedPolygon.parameters
                ));
        },
        './stories/graphics/RoundedRect.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'RoundedRect', function () {
                    return RoundedRect;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    width: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    height: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    radius: {control: {type: 'range', min: 1, max: 50, step: 1}}
                }
            };
            var RoundedRect = function RoundedRect(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    width = _ref.width,
                    height = _ref.height,
                    radius = _ref.radius,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_5__.a)(fill)),
                    graphics.drawRoundedRect(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2 - width / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2 - height / 2,
                        width,
                        height,
                        radius
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (RoundedRect.args = {stroke: 2, color: '#cfefff', fill: '#036191', width: 100, height: 100, radius: 15}),
                (RoundedRect.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, width, height, radius}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawRoundedRect(\r\n        viewport.screenWidth / 2 - width / 2,\r\n        viewport.screenHeight / 2 - height / 2,\r\n        width,\r\n        height,\r\n        radius\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    RoundedRect.parameters
                ));
        },
        './stories/graphics/Star.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Star', function () {
                    return Star;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/utils/GeometryUtils.ts'),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    points: {control: {type: 'range', min: 3, max: 25, step: 1}},
                    innerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    outerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    angle: {control: {type: 'range', min: 0, max: 360, step: 1}}
                }
            };
            var Star = function Star(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    points = _ref.points,
                    innerRadius = _ref.innerRadius,
                    outerRadius = _ref.outerRadius,
                    angle = _ref.angle,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(fill)),
                    graphics.drawStar(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2,
                        points,
                        outerRadius,
                        innerRadius,
                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(angle)
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (Star.args = {
                stroke: 2,
                color: '#cfefff',
                fill: '#036191',
                points: 5,
                innerRadius: 25,
                outerRadius: 50,
                angle: 0
            }),
                (Star.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, points, innerRadius, outerRadius, angle}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawStar(\r\n        viewport.screenWidth / 2,\r\n        viewport.screenHeight / 2,\r\n        points,\r\n        outerRadius,\r\n        innerRadius,\r\n        GeometryUtils.deg2rad(angle)\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    Star.parameters
                ));
        },
        './stories/graphics/Torus.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Torus', function () {
                    return Torus;
                });
            __webpack_require__('./node_modules/core-js/modules/es.array.fill.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_4__ =
                    (__webpack_require__('./node_modules/@pixi/graphics-extras/dist/esm/graphics-extras.js'),
                    __webpack_require__('./stories/Scene.ts')),
                _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__('./src/utils/GeometryUtils.ts'),
                _src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./src/utils/ColorUtils.ts');
            __webpack_exports__.default = {
                title: 'Graphics/Shapes',
                argTypes: {
                    stroke: {control: {type: 'range', min: 0, max: 5, step: 0.1}},
                    color: {control: 'color'},
                    fill: {control: 'color'},
                    innerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    outerRadius: {control: {type: 'range', min: 1, max: 100, step: 1}},
                    startArc: {control: {type: 'range', min: 0, max: 360, step: 1}},
                    endArc: {control: {type: 'range', min: 0, max: 360, step: 1}}
                }
            };
            var Torus = function Torus(_ref) {
                var stroke = _ref.stroke,
                    color = _ref.color,
                    fill = _ref.fill,
                    innerRadius = _ref.innerRadius,
                    outerRadius = _ref.outerRadius,
                    startArc = _ref.startArc,
                    endArc = _ref.endArc,
                    graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                return (
                    graphics.lineStyle(stroke, Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(color)),
                    graphics.beginFill(Object(_src_utils_ColorUtils__WEBPACK_IMPORTED_MODULE_6__.a)(fill)),
                    graphics.drawTorus(
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenWidth / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_4__.e.screenHeight / 2,
                        innerRadius,
                        outerRadius,
                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(startArc),
                        _src_utils_GeometryUtils__WEBPACK_IMPORTED_MODULE_5__.a.deg2rad(endArc)
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.e.addChild(graphics),
                    _Scene__WEBPACK_IMPORTED_MODULE_4__.b
                );
            };
            (Torus.args = {
                stroke: 2,
                color: '#cfefff',
                fill: '#036191',
                innerRadius: 25,
                outerRadius: 50,
                startArc: 0,
                endArc: 360
            }),
                (Torus.parameters = Object.assign(
                    {
                        storySource: {
                            source: '({stroke, color, fill, innerRadius, outerRadius, startArc, endArc}) => {\r\n    const graphics = new PIXI.Graphics();\r\n    graphics.lineStyle(stroke, parseColor(color));\r\n    graphics.beginFill(parseColor(fill));\r\n\r\n    graphics.drawTorus(\r\n        viewport.screenWidth / 2,\r\n        viewport.screenHeight / 2,\r\n        innerRadius,\r\n        outerRadius,\r\n        GeometryUtils.deg2rad(startArc),\r\n        GeometryUtils.deg2rad(endArc)\r\n    );\r\n\r\n    viewport.addChild(graphics);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    Torus.parameters
                ));
        },
        './stories/images/Image.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'PNG', function () {
                    return PNG;
                }),
                __webpack_require__.d(__webpack_exports__, 'SVG', function () {
                    return SVG;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js');
            __webpack_exports__.default = {title: 'Images/Types'};
            var PNG = function PNG() {
                    var png = pixi_js__WEBPACK_IMPORTED_MODULE_3__.Sprite.from('images/checkerboard.png');
                    return (
                        png.anchor.set(0.5, 0.5),
                        (png.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                        (png.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(png),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                    );
                },
                SVG = function SVG() {
                    var svg = pixi_js__WEBPACK_IMPORTED_MODULE_3__.Sprite.from('images/logo.svg');
                    return (
                        svg.anchor.set(0.5, 0.5),
                        (svg.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                        (svg.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(svg),
                        _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                    );
                };
            (PNG.parameters = Object.assign(
                {
                    storySource: {
                        source: "() => {\r\n    const png = Sprite.from('images/checkerboard.png');\r\n    png.anchor.set(0.5, 0.5);\r\n    png.x = viewport.screenWidth / 2;\r\n    png.y = viewport.screenHeight / 2;\r\n    viewport.addChild(png);\r\n\r\n    return canvas;\r\n}"
                    }
                },
                PNG.parameters
            )),
                (SVG.parameters = Object.assign(
                    {
                        storySource: {
                            source: "() => {\r\n    const svg = Sprite.from('images/logo.svg');\r\n    svg.anchor.set(0.5, 0.5);\r\n    svg.x = viewport.screenWidth / 2;\r\n    svg.y = viewport.screenHeight / 2;\r\n    viewport.addChild(svg);\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    SVG.parameters
                ));
        },
        './stories/interaction/Drag.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'ViewportDrag', function () {
                    return ViewportDrag;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./stories/Scene.ts'),
                pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {title: 'Interaction/Drag'};
            var ViewportDrag = function ViewportDrag(_ref) {
                _ref.color;
                var paper = new pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__.GraphPaper(
                    pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__.GraphStyle.BLUEPRINT
                );
                _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(paper);
                var dragPoint,
                    box = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Graphics();
                (box.interactive = !0),
                    box.beginFill(16775388, 0.85),
                    box.drawCircle(0, 0, 50),
                    box.position.set(
                        _Scene__WEBPACK_IMPORTED_MODULE_1__.e.screenWidth / 2,
                        _Scene__WEBPACK_IMPORTED_MODULE_1__.e.screenHeight / 2
                    ),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.e.addChild(box);
                var onDragMove = function onDragMove(event) {
                        var newPoint = event.data.getLocalPosition(box.parent);
                        (box.x = newPoint.x - dragPoint.x), (box.y = newPoint.y - dragPoint.y);
                    },
                    onDragEnd = function onDragEnd(event) {
                        event.stopPropagation(), box.parent.off('pointermove', onDragMove);
                    };
                return (
                    box.on('pointerdown', function onDragStart(event) {
                        event.stopPropagation(),
                            ((dragPoint = event.data.getLocalPosition(box.parent)).x -= box.x),
                            (dragPoint.y -= box.y),
                            box.parent.on('pointermove', onDragMove);
                    }),
                    box.on('pointerup', onDragEnd),
                    box.on('pointerupoutside', onDragEnd),
                    _Scene__WEBPACK_IMPORTED_MODULE_1__.b
                );
            };
            ViewportDrag.parameters = Object.assign(
                {
                    storySource: {
                        source: "({color}) => {\r\n    // Background grid for reference\r\n    const paper = new GraphPaper(GraphStyle.BLUEPRINT);\r\n    viewport.addChild(paper);\r\n\r\n    // Drag target\r\n    const box = new Graphics();\r\n    box.interactive = true;\r\n    box.beginFill(0xfff8dc, 0.85);\r\n    box.drawCircle(0, 0, 50);\r\n    box.position.set(viewport.screenWidth / 2, viewport.screenHeight / 2);\r\n    viewport.addChild(box);\r\n\r\n    let dragPoint;\r\n\r\n    const onDragStart = (event) => {\r\n        event.stopPropagation();\r\n        dragPoint = event.data.getLocalPosition(box.parent);\r\n        dragPoint.x -= box.x;\r\n        dragPoint.y -= box.y;\r\n        box.parent.on('pointermove', onDragMove);\r\n    };\r\n\r\n    const onDragMove = (event) => {\r\n        const newPoint = event.data.getLocalPosition(box.parent);\r\n        box.x = newPoint.x - dragPoint.x;\r\n        box.y = newPoint.y - dragPoint.y;\r\n    };\r\n\r\n    const onDragEnd = (event) => {\r\n        event.stopPropagation();\r\n        box.parent.off('pointermove', onDragMove);\r\n    };\r\n\r\n    box.on('pointerdown', onDragStart);\r\n    box.on('pointerup', onDragEnd);\r\n    box.on('pointerupoutside', onDragEnd);\r\n\r\n    return canvas;\r\n}"
                    }
                },
                ViewportDrag.parameters
            );
        },
        './stories/text/BitmapText.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'BitmapFont', function () {
                    return BitmapFont;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Text/Bitmap Text',
                argTypes: {
                    text: {control: 'text'},
                    color: {control: 'color'},
                    align: {options: ['left', 'center', 'right'], control: {type: 'radio'}}
                }
            };
            var BitmapFont = function BitmapFont(args) {
                var text = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.BitmapText(args.text, {
                    fontName: 'Eurostile80',
                    align: args.align,
                    strokeThickness: 8
                });
                return (
                    (text.tint = Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__.parseColor)(args.color)),
                    (text.position.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                    (text.position.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(text),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                );
            };
            (BitmapFont.args = {text: 'Hello\nWorld', color: '#ffffff', align: 'left'}),
                (BitmapFont.parameters = Object.assign(
                    {
                        storySource: {
                            source: "(args) => {\r\n    const text = new PIXI.BitmapText(args.text, {\r\n        fontName: 'Eurostile80',\r\n        align: args.align,\r\n        strokeThickness: 8\r\n    });\r\n    text.tint = parseColor(args.color);\r\n    text.position.x = viewport.screenWidth / 2;\r\n    text.position.y = viewport.screenHeight / 2;\r\n    viewport.addChild(text);\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    BitmapFont.parameters
                ));
        },
        './stories/text/SystemFont.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'SystemFont', function () {
                    return SystemFont;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Text/Bitmap Text',
                argTypes: {
                    text: {control: 'text'},
                    font: {control: 'text'},
                    fontSize: {control: {type: 'range', min: 1, max: 128, step: 1}},
                    lineHeight: {control: {type: 'range', min: 1, max: 128, step: 1}},
                    color: {control: 'color'},
                    strokeThickness: {control: {type: 'range', min: 0, max: 24, step: 1}},
                    strokeColor: {control: 'color'},
                    align: {options: ['left', 'center', 'right'], control: {type: 'radio'}},
                    fontStyle: {options: ['normal', 'italic', 'oblique'], control: {type: 'radio'}},
                    fontVariant: {options: ['normal', 'small-caps'], control: {type: 'radio'}}
                }
            };
            var SystemFont = function SystemFont(args) {
                var _args$fontStyle, _args$fontVariant;
                pixi_js__WEBPACK_IMPORTED_MODULE_1__.BitmapFont.from('System-Font', {
                    fontFamily: args.font,
                    fontSize: args.fontSize,
                    fontStyle:
                        null !== (_args$fontStyle = args.fontStyle) && void 0 !== _args$fontStyle
                            ? _args$fontStyle
                            : 'normal',
                    fontVariant:
                        null !== (_args$fontVariant = args.fontVariant) && void 0 !== _args$fontVariant
                            ? _args$fontVariant
                            : 'normal',
                    lineHeight: args.lineHeight,
                    stroke: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__.parseColor)(args.strokeColor),
                    strokeThickness: args.strokeThickness,
                    fill: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_3__.parseColor)(args.color)
                });
                var text = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.BitmapText(args.text, {
                    fontName: 'System-Font',
                    align: args.align
                });
                return (
                    (text.position.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                    (text.position.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(text),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                );
            };
            (SystemFont.args = {
                text: 'Hello\nWorld',
                font: 'Times',
                fontSize: 72,
                lineHeight: 80,
                color: '#efefef',
                strokeThickness: 1,
                strokeColor: '#8c8c8c',
                align: 'center',
                fontStyle: 'normal',
                fontVariant: 'normal'
            }),
                (SystemFont.parameters = Object.assign(
                    {
                        storySource: {
                            source: "(args) => {\r\n    PIXI.BitmapFont.from('System-Font', {\r\n        fontFamily: args.font,\r\n        fontSize: args.fontSize,\r\n        fontStyle: args.fontStyle ?? 'normal',\r\n        fontVariant: args.fontVariant ?? 'normal',\r\n        lineHeight: args.lineHeight,\r\n        stroke: parseColor(args.strokeColor),\r\n        strokeThickness: args.strokeThickness,\r\n        fill: parseColor(args.color)\r\n    });\r\n\r\n    const text = new PIXI.BitmapText(args.text, {\r\n        fontName: 'System-Font',\r\n        align: args.align\r\n    });\r\n\r\n    text.position.x = viewport.screenWidth / 2;\r\n    text.position.y = viewport.screenHeight / 2;\r\n    viewport.addChild(text);\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    SystemFont.parameters
                ));
        },
        './stories/text/Text.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'TextStyle', function () {
                    return TextStyle;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./stories/Scene.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Text/Text',
                argTypes: {
                    text: {control: 'text'},
                    fontFamily: {control: 'text'},
                    fontSize: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    lineHeight: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    letterSpacing: {control: {type: 'range', min: 0, max: 16, step: 1}},
                    resolution: {control: {type: 'range', min: 1, max: 8, step: 1}},
                    color: {control: 'color'},
                    align: {options: ['left', 'center', 'right'], control: {type: 'radio'}}
                }
            };
            var TextStyle = function TextStyle(args) {
                var textStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.TextStyle({
                        fontFamily: args.fontFamily,
                        fontSize: args.fontSize,
                        lineHeight: args.lineHeight,
                        letterSpacing: args.letterSpacing,
                        fill: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.parseColor)(args.color),
                        align: args.align
                    }),
                    text = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Text(args.text, textStyle);
                return (
                    (text.resolution = args.resolution),
                    text.anchor.set(0.5),
                    (text.x = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenWidth / 2),
                    (text.y = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.e.addChild(text),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.b
                );
            };
            (TextStyle.args = {
                text: 'Hello, World\n????',
                fontFamily: 'Arial',
                fontSize: 24,
                lineHeight: 28,
                letterSpacing: 0,
                resolution: 8,
                color: '#ffffff',
                align: 'center'
            }),
                (TextStyle.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => {\r\n    const textStyle = new PIXI.TextStyle({\r\n        fontFamily: args.fontFamily,\r\n        fontSize: args.fontSize,\r\n        lineHeight: args.lineHeight,\r\n        letterSpacing: args.letterSpacing,\r\n        fill: parseColor(args.color),\r\n        align: args.align\r\n    });\r\n\r\n    const text = new PIXI.Text(args.text, textStyle);\r\n    text.resolution = args.resolution;\r\n    text.anchor.set(0.5);\r\n    text.x = viewport.screenWidth / 2;\r\n    text.y = viewport.screenHeight / 2;\r\n\r\n    viewport.addChild(text);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    TextStyle.parameters
                ));
        },
        './stories/text/TextMetrics.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Measure', function () {
                    return Measure;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./stories/Scene.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Text/Metrics',
                argTypes: {
                    text: {control: 'text'},
                    fontFamily: {control: 'text'},
                    fontSize: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    lineHeight: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    resolution: {control: {type: 'range', min: 1, max: 8, step: 1}},
                    color: {control: 'color'},
                    wordWrap: {control: 'boolean'},
                    wordWrapWidth: {control: {type: 'range', min: 1, max: 512, step: 1}},
                    align: {options: ['left', 'center', 'right'], control: {type: 'radio'}}
                }
            };
            var Measure = function Measure(args) {
                var textStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.TextStyle({
                        fontFamily: args.fontFamily,
                        fontSize: args.fontSize,
                        lineHeight: args.lineHeight,
                        fill: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.parseColor)(args.color),
                        wordWrap: args.wordWrap,
                        wordWrapWidth: args.wordWrapWidth,
                        align: args.align
                    }),
                    text = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Text(args.text, textStyle);
                (text.resolution = args.resolution),
                    text.anchor.set(0.5),
                    (text.x = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenWidth / 2),
                    (text.y = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenHeight / 2);
                var metrics = pixi_js__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.measureText(args.text, text.style),
                    paper = new pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.GraphPaper(
                        pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.GraphStyle.BLUEPRINT
                    );
                return (
                    (paper.graphWidth = metrics.width),
                    (paper.graphHeight = metrics.height),
                    (paper.x = (_Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenWidth - metrics.width) / 2),
                    (paper.y = (_Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenHeight - metrics.height) / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.e.addChild(paper),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.e.addChild(text),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.b
                );
            };
            (Measure.args = {
                text: 'ABC',
                fontFamily: 'Arial',
                fontSize: 110,
                lineHeight: 128,
                resolution: 8,
                color: '#ffffff',
                wordWrap: !1,
                wordWrapWidth: 512,
                align: 'center'
            }),
                (Measure.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => {\r\n    const textStyle = new PIXI.TextStyle({\r\n        fontFamily: args.fontFamily,\r\n        fontSize: args.fontSize,\r\n        lineHeight: args.lineHeight,\r\n        fill: parseColor(args.color),\r\n        wordWrap: args.wordWrap,\r\n        wordWrapWidth: args.wordWrapWidth,\r\n        align: args.align\r\n    });\r\n\r\n    const text = new PIXI.Text(args.text, textStyle);\r\n    text.resolution = args.resolution;\r\n    text.anchor.set(0.5);\r\n    text.x = viewport.screenWidth / 2;\r\n    text.y = viewport.screenHeight / 2;\r\n\r\n    const metrics = PIXI.TextMetrics.measureText(args.text, text.style);\r\n    const paper = new GraphPaper(GraphStyle.BLUEPRINT);\r\n    paper.graphWidth = metrics.width;\r\n    paper.graphHeight = metrics.height;\r\n    paper.x = (viewport.screenWidth - metrics.width) / 2;\r\n    paper.y = (viewport.screenHeight - metrics.height) / 2;\r\n\r\n    viewport.addChild(paper);\r\n    viewport.addChild(text);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    Measure.parameters
                ));
        },
        './stories/text/TextWordWrap.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'WordWrap', function () {
                    return WordWrap;
                });
            __webpack_require__('./node_modules/core-js/modules/es.string.anchor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./stories/Scene.ts'),
                pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    './node_modules/pixi-graphpaper/dist/browser/pixi-graphpaper.js'
                );
            __webpack_exports__.default = {
                title: 'Text/Text',
                argTypes: {
                    text: {control: 'text'},
                    fontFamily: {control: 'text'},
                    fontSize: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    lineHeight: {control: {type: 'range', min: 1, max: 124, step: 1}},
                    resolution: {control: {type: 'range', min: 1, max: 8, step: 1}},
                    color: {control: 'color'},
                    wordWrap: {control: 'boolean'},
                    wordWrapWidth: {control: {type: 'range', min: 1, max: 512, step: 1}},
                    align: {options: ['left', 'center', 'right'], control: {type: 'radio'}}
                }
            };
            var WordWrap = function WordWrap(args) {
                var textStyle = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.TextStyle({
                        fontFamily: args.fontFamily,
                        fontSize: args.fontSize,
                        lineHeight: args.lineHeight,
                        fill: Object(pixi_graphpaper__WEBPACK_IMPORTED_MODULE_4__.parseColor)(args.color),
                        wordWrap: args.wordWrap,
                        wordWrapWidth: args.wordWrapWidth,
                        align: args.align
                    }),
                    text = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Text(args.text, textStyle);
                return (
                    (text.resolution = args.resolution),
                    text.anchor.set(0.5),
                    (text.x = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenWidth / 2),
                    (text.y = _Scene__WEBPACK_IMPORTED_MODULE_3__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.e.addChild(text),
                    _Scene__WEBPACK_IMPORTED_MODULE_3__.b
                );
            };
            (WordWrap.args = {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                fontFamily: 'Arial',
                fontSize: 24,
                lineHeight: 28,
                resolution: 8,
                color: '#ffffff',
                wordWrap: !0,
                wordWrapWidth: 256,
                align: 'center'
            }),
                (WordWrap.parameters = Object.assign(
                    {
                        storySource: {
                            source: '(args) => {\r\n    const textStyle = new PIXI.TextStyle({\r\n        fontFamily: args.fontFamily,\r\n        fontSize: args.fontSize,\r\n        lineHeight: args.lineHeight,\r\n        fill: parseColor(args.color),\r\n        wordWrap: args.wordWrap,\r\n        wordWrapWidth: args.wordWrapWidth,\r\n        align: args.align\r\n    });\r\n\r\n    const text = new PIXI.Text(args.text, textStyle);\r\n    text.resolution = args.resolution;\r\n    text.anchor.set(0.5);\r\n    text.x = viewport.screenWidth / 2;\r\n    text.y = viewport.screenHeight / 2;\r\n\r\n    viewport.addChild(text);\r\n\r\n    return canvas;\r\n}'
                        }
                    },
                    WordWrap.parameters
                ));
        },
        './stories/texture/ScaleMode.stories.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'ScaleMode', function () {
                    return ScaleMode;
                });
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
            var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/pixi.js/dist/esm/pixi.js'),
                _Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./stories/Scene.ts');
            __webpack_exports__.default = {
                title: 'Texture/Scale Modes',
                argTypes: {
                    scaleMode: {options: pixi_js__WEBPACK_IMPORTED_MODULE_1__.SCALE_MODES, control: {type: 'radio'}}
                }
            };
            var ScaleMode = function ScaleMode(_ref) {
                var scaleMode = _ref.scaleMode,
                    bunny = pixi_js__WEBPACK_IMPORTED_MODULE_1__.Sprite.from('images/bunny.png');
                return (
                    (bunny.x = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenWidth / 2),
                    (bunny.y = _Scene__WEBPACK_IMPORTED_MODULE_2__.e.screenHeight / 2),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.e.addChild(bunny),
                    (bunny.texture.baseTexture.scaleMode = scaleMode),
                    _Scene__WEBPACK_IMPORTED_MODULE_2__.b
                );
            };
            (ScaleMode.args = {scaleMode: pixi_js__WEBPACK_IMPORTED_MODULE_1__.SCALE_MODES.NEAREST}),
                (ScaleMode.parameters = Object.assign(
                    {
                        storySource: {
                            source: "({scaleMode}) => {\r\n    const bunny = PIXI.Sprite.from('images/bunny.png');\r\n    bunny.x = viewport.screenWidth / 2;\r\n    bunny.y = viewport.screenHeight / 2;\r\n    viewport.addChild(bunny);\r\n\r\n    bunny.texture.baseTexture.scaleMode = scaleMode;\r\n\r\n    return canvas;\r\n}"
                        }
                    },
                    ScaleMode.parameters
                ));
        },
        './storybook-init-framework-entry.js': function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__('./node_modules/@storybook/html/dist/esm/client/index.js');
        },
        0: function (module, exports, __webpack_require__) {
            __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
                __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
                __webpack_require__('./storybook-init-framework-entry.js'),
                __webpack_require__(
                    './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-docs/dist/esm/frameworks/html/config.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
                ),
                __webpack_require__(
                    './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
                ),
                __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
                (module.exports = __webpack_require__('./generated-stories-entry.js'));
        },
        1: function (module, exports) {}
    },
    [[0, 5, 6]]
]);
