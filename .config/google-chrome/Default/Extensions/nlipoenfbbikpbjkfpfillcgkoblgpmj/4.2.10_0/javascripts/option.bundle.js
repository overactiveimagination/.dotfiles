!function(e){function _(_){for(var a,o,i=_[0],l=_[1],c=_[2],d=0,E=[];d<i.length;d++)o=i[d],r[o]&&E.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(_);E.length;)E.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,_=0;_<n.length;_++){for(var t=n[_],a=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(a=!1)}a&&(n.splice(_--,1),e=o(o.s=t[0]))}return e}var a={},r={3:0},n=[];function o(_){if(a[_])return a[_].exports;var t=a[_]={i:_,l:!1,exports:{}};return e[_].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,_,t){o.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,_){if(1&_&&(e=o(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var a in e)o.d(t,a,function(_){return e[_]}.bind(null,a));return t},o.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(_,"a",_),_},o.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=_,i=i.slice();for(var c=0;c<i.length;c++)_(i[c]);var s=l;n.push([675,0]),t()}({675:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41),antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__),antd_lib_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__),antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(676),antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2__),antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(68),antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__),antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(63),antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_4__),antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32),antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(36),antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__),antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__),antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(226),antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_8__),antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(56),antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__),antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(64),antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_10__),antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(23),antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11__),antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(31),antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__),antd_lib_select__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(11),antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__),react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__),react_dom__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(12),react_dom__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_15__),_OptionPage_less__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(678),_OptionPage_less__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_OptionPage_less__WEBPACK_IMPORTED_MODULE_16__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var a=_[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(3)).enterModule,enterModule&&enterModule(module);var Option=antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a.Option,RadioGroup=antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a.Group,shortcutOptionArray="0123456789abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),_shortCutOption=JSON.parse(localStorage.msObj),ShortCutOption=function(e){return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"shortcut-section"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"shortcut-title"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default.a,{checked:e.checked,value:e.id,onChange:e.handleCheckBoxChange},e.name)),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"shortcut-option"},"Ctrl + Shift + ",react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a,{size:"small",defaultValue:e.dValue,onChange:e.handleSelectChange.bind(null,e.id)},e.optionArray.map(function(_){return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option,{key:_,value:_,disabled:-1!==e.disableKey.indexOf(_)},_)}))))},Section=function(e){return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"section"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"section-title"},e.title),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"section-content"},e.children))},SectionOptionH=function(e){var _=e.desc?"hasDesc":"";return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"section-option horizontal ".concat(_)},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"label"},e.label,react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"desc"},e.desc)),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"action-area"},e.children),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"more"},e.more))},SectionOptionV=function(e){return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"section-option vertical"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"label"},e.label),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"action-area"},e.children))},OptionPage=function(_React$Component){function OptionPage(e){var _;return _classCallCheck(this,OptionPage),(_=_possibleConstructorReturn(this,_getPrototypeOf(OptionPage).call(this,e))).state={format:localStorage.format,delaySec:localStorage.delay_sec,isGmailBtn:"true"===localStorage["gmail-btn"],isGoogleDriveShare:"true"===localStorage["is-google-drive-share"],isDarkMode:"true"===localStorage["dark-mode"],isSkipAnnotate:"true"===localStorage["skip-annotate"],isResizeForRetina:"true"===localStorage["resize-for-retina"],isSaveAs:"true"===localStorage["save-as"],visible:_shortCutOption.visible.enable,selected:_shortCutOption.selected.enable,entire:_shortCutOption.entire.enable,visibleKey:_shortCutOption.visible.key,selectedKey:_shortCutOption.selected.key,entireKey:_shortCutOption.entire.key,removePrintWatermark:"true"===localStorage["remove-print-watermark"],downloadDirectory:localStorage.download_directory||""},_.handleRadioChange=_.handleRadioChange.bind(_assertThisInitialized(_assertThisInitialized(_))),_.handleCheckBoxChange=_.handleCheckBoxChange.bind(_assertThisInitialized(_assertThisInitialized(_))),_.handleSwitchChange=_.handleSwitchChange.bind(_assertThisInitialized(_assertThisInitialized(_))),_.handleSelectChange=_.handleSelectChange.bind(_assertThisInitialized(_assertThisInitialized(_))),_.handleInputChange=_.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_))),_}return _inherits(OptionPage,_React$Component),_createClass(OptionPage,[{key:"handleSelectChange",value:function(e,_){if("visible"===e||"selected"===e||"entire"===e){_shortCutOption[e].key=_;var t="".concat(e,"Key");this.setState(_defineProperty({},t,_)),localStorage.msObj=JSON.stringify(_shortCutOption)}}},{key:"handleRadioChange",value:function(e){var _=e.target.name;"format"===_?(this.setState({format:e.target.value}),localStorage.format=e.target.value):"delay_sec"===_&&(this.setState({delaySec:e.target.value}),localStorage.delay_sec=e.target.value)}},{key:"handleInputChange",value:function(e,_){var t=_.target.value;this.setState(_defineProperty({},e,t)),localStorage.download_directory=t}},{key:"handleSwitchChange",value:function(e,_){var t=_.target.value;"gmailBtn"===t?(localStorage["gmail-btn"]=e,this.setState({isGmailBtn:e})):"visible"===t||"selected"===t||"entire"===t?(_shortCutOption[t].enable=e,this.setState(_defineProperty({},t,e)),localStorage.msObj=JSON.stringify(_shortCutOption)):"darkMode"===t?(localStorage["dark-mode"]=e,this.setState({isDarkMode:e})):"removePrintWatermark"===t?(localStorage["remove-print-watermark"]=e,this.setState({removePrintWatermark:e})):"googleDriveShare"===t?(localStorage["is-google-drive-share"]=e,this.setState({isGoogleDriveShare:e})):"skipAnnotate"===t?(localStorage["skip-annotate"]=e,this.setState({isSkipAnnotate:e})):"saveAs"===t?(localStorage["save-as"]=e,this.setState({isSaveAs:e})):"resizeForRetina"===t&&(localStorage["resize-for-retina"]=e,this.setState({isResizeForRetina:e}))}},{key:"handleCheckBoxChange",value:function(e){var _=e.target.value,t=e.target.checked;"gmailBtn"===_?(localStorage["gmail-btn"]=t,this.setState({isGmailBtn:t})):"visible"===_||"selected"===_||"entire"===_?(_shortCutOption[_].enable=t,this.setState(_defineProperty({},_,t)),localStorage.msObj=JSON.stringify(_shortCutOption)):"darkMode"===_?(localStorage["dark-mode"]=t,this.setState({isDarkMode:t})):"removePrintWatermark"===_?(localStorage["remove-print-watermark"]=t,this.setState({removePrintWatermark:t})):"googleDriveShare"===_?(localStorage["is-google-drive-share"]=t,this.setState({isGoogleDriveShare:t})):"skipAnnotate"===_&&(localStorage["skip-annotate"]=t,this.setState({isSkipAnnotate:t}))}},{key:"render",value:function(){var e=this,_=this.state,t=_.format,a=_.delaySec,r=_.isGmailBtn,n=_.visible,o=_.selected,i=_.entire,l=_.visibleKey,c=_.selectedKey,s=_.entireKey,d=_.downloadDirectory,E=_.isDarkMode,u=_.isSkipAnnotate,O=_.isGoogleDriveShare,P=_.isSaveAs,D=_.isResizeForRetina,p=[{id:"visible",name:"Capture Visible",checked:n,dValue:l,disableKey:[c,s],optionArray:shortcutOptionArray},{id:"selected",name:"Capture Selected Area",checked:o,dValue:c,disableKey:[l,s],optionArray:shortcutOptionArray},{id:"entire",name:"Capture Entire",checked:i,dValue:s,disableKey:[c,l],optionArray:shortcutOptionArray}];react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment,null,"Default folder for “Save locally” ",react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a,{title:"Specify a folder underneath your Downloads folder to save screenshot to local disk, such as “AwesomeScreenshot”. Defauts to the Downloads folder if you don’t specify a folder."},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a,{type:"question-circle-o"})));return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"main"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"top"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"logo"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a",{href:"https://www.awesomescreenshot.com"}))),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div",{className:"options-container"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Section,{title:"Capture Preferences"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionV,{label:"Customize Shortcuts"},p.map(function(_){return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(ShortCutOption,{name:_.name,key:_.name,id:_.id,checked:_.checked,dValue:_.dValue,disableKey:_.disableKey,optionArray:_.optionArray,handleCheckBoxChange:e.handleCheckBoxChange,handleSelectChange:e.handleSelectChange})})),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Countdown Timer Set to"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(RadioGroup,{name:"delay_sec",value:a,onChange:this.handleRadioChange},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a,{value:"3"},"3s"),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a,{value:"5"},"5s")))),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Section,{title:"Saving Preferences"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Default Image Format"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(RadioGroup,{value:t,name:"format",onChange:this.handleRadioChange},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a,{value:"png"},"PNG"),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_11___default.a,{value:"jpg"},"JPG"))),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Skip editing when capturing entire page"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"skipAnnotate",checked:u,onChange:this.handleSwitchChange})),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Always get shareable links for images uploaded to Google Drive"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"googleDriveShare",checked:O,onChange:this.handleSwitchChange})),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Show Save-As window to choose location for downloads",desc:"Note: to use this feature, you need to Allow Awesome Screenshot to manage Downloads when permission request window pops up. And only when this option is turned on, can you specify default subfolder to save screenshots to your local disk. Defaults to the Downloads folder if you don’t specify a subfolder.",more:react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a,{trigger:["focus"],title:"Only letters, numbers, dashes, underscores, and slashes are allowable.  Invalid characters will be removed.",placement:"top"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a,{defaultValue:d,onChange:this.handleInputChange.bind(null,"downloadDirectory"),placeholder:"e.g., AwesomeScreenshot",addonBefore:"Downloads/"})))},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"saveAs",checked:P,onChange:this.handleSwitchChange}))),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Section,{title:"More Options"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Enable dark mode for extension's popup menu"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"darkMode",checked:E,onChange:this.handleSwitchChange})),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Insert AwesomeScreenshot icon into the compose window of Gmail"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"gmailBtn",checked:r,onChange:this.handleSwitchChange})),react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SectionOptionH,{label:"Resize a screenshot to 50% of its original size for Retina screen"},react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a,{value:"resizeForRetina",checked:D,onChange:this.handleSwitchChange})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),OptionPage}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component),reactHotLoader,leaveModule;react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.render(react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(OptionPage,null),document.getElementById("option-page")),reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(3)).default,reactHotLoader&&(reactHotLoader.register(Option,"Option","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(RadioGroup,"RadioGroup","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(shortcutOptionArray,"shortcutOptionArray","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(_shortCutOption,"_shortCutOption","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(ShortCutOption,"ShortCutOption","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(Section,"Section","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(SectionOptionH,"SectionOptionH","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(SectionOptionV,"SectionOptionV","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js"),reactHotLoader.register(OptionPage,"OptionPage","/Users/luo/Documents/codes/awesomescreenshot-front/src/container/OptionPage.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(3)).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(17)(module))},678:function(e,_,t){}});