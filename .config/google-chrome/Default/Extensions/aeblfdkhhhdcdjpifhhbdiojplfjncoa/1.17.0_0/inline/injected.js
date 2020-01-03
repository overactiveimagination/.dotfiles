!function(){"use strict";const e=()=>(function(){if("undefined"!=typeof window)return window;if("undefined"!=typeof globalThis)return globalThis;throw new Error("unable to locate global object")})().crypto.getRandomValues(new Uint32Array(1))[0].toString(36);class t{constructor(){this.request=e=>new Promise(t=>{chrome.runtime.sendMessage(e,e=>{t(e)})}),this.on=(e,t)=>{function n(n,i,o){return!(!n.name||n.name!==e)&&(Promise.resolve(t(n.data)).then(o),!0)}return chrome.runtime.onMessage.addListener(n),n},this.off=(e,t)=>{chrome.runtime.onMessage.removeListener(t)}}}class n{constructor(){this.callbacks={},this.request=e=>new Promise(t=>{const i=n.generateId();this.callbacks[i]=t,this._sendMessage(Object.assign({callbackId:i},e))}),this.on=(e,t)=>this._register(n=>{n.name&&n.name===e&&Promise.resolve(t(n.data)).then(e=>{this._sendMessage(Object.assign(Object.assign({},n),{data:e}))})}),this.off=(e,t)=>{this._deregister(e,t)},this.listenForResponses=()=>{this._register(e=>{"callbackId"in e&&e.callbackId in this.callbacks&&(this.callbacks[e.callbackId](e.data),delete this.callbacks[e.callbackId])})},this.listenForResponses()}}n.generateId=()=>window.crypto.getRandomValues(new Uint32Array(1))[0];class i extends n{constructor(){super()}_sendMessage(e){window.top.postMessage(Object.assign({outgoing:!0},e),"*")}_register(e){function t(t){t.data.outgoing||e(t.data)}return window.top.addEventListener("message",t),t}_deregister(e,t){window.top.removeEventListener("message",t)}}class o extends n{constructor(){super(),this.uuid=e(),this._sendMessage.bind(this),this._register.bind(this),this._deregister.bind(this)}static isSafariAppExtension(){return"undefined"!=typeof safari&&void 0!==safari.extension}_sendMessage(e){const t={callbackId:e.callbackId,uuid:this.uuid,message:{name:e.name,data:e.data}};safari.extension.dispatchMessage("message",t)}_register(e){function t(t){if(!t.message)return;const n=t.message;e({callbackId:n.callbackId,name:n.message.name,data:n.message.data})}return safari.self.addEventListener("message",t),t}_deregister(e,t){safari.self.removeEventListener("message",t)}}function s(e,t={targetParent:!1}){return{name:"relay-message-to-frames",data:e,targetParent:t.targetParent}}const r=new class{constructor(e){this.transport=e}sayHello(){return this.transport.request({name:"hello",data:{}})}getDesignation(e){return this.transport.request({name:"get-designation",data:e})}getFrameManagerConfiguration(){return this.transport.request({name:"get-frame-manager-configuration",data:{}})}filterInlineMenu(e){return this.transport.request(s({name:"filter-inline-menu",data:e}))}focusInlineMenu(){return this.transport.request(s({name:"focus-inline-menu"}))}requestManagedUnlock(){return this.transport.request({name:"request-managed-unlock",data:{}})}addScrollAndResizeEventListeners(){return this.transport.request(s({name:"add-scroll-and-resize-event-listeners",data:{}},{targetParent:!0}))}removeScrollAndResizeEventListeners(){return this.transport.request(s({name:"remove-scroll-and-resize-event-listeners",data:{}}))}onCollectFrameDetails(e){this.transport.on("collect-frame-details",e)}onPerformFill(e){this.transport.on("perform-fill",e)}editedStateChanged(e){return this.transport.request(s({name:"edited-state-changed",data:e}))}onLockStateChanged(e){this.transport.on("lock-state-changed",e)}onFocusPage(e){this.transport.on("focus-page",e)}onPing(e){this.transport.on("ping",e)}onAddScrollAndResizeEventListeners(e){this.transport.on("add-scroll-and-resize-event-listeners",e)}onRemoveScrollAndResizeEventListeners(e){this.transport.on("remove-scroll-and-resize-event-listeners",e)}onForwardInlineMenuPosition(e){this.transport.on("forward-inline-menu-position",e)}sendInlineMenuOpened(){return this.transport.request(s({name:"inline-menu-opened"}))}sendInlineMenuClosed(){return this.transport.request(s({name:"inline-menu-closed"}))}sendVerificationToken(e){return this.transport.request(s({name:"verification-token",data:e}))}onRequestVerificationToken(e){this.transport.on("request-verification-token",e)}onResizeInlineMenu(e){this.transport.on("resize-inline-menu",e)}onRemoveInlineMenu(e){this.transport.on("remove-inline-menu",e)}onFocusInlineMenuFrame(e){this.transport.on("focus-inline-menu-frame",e)}onInlineMenuReady(e){this.transport.on("inline-menu-ready",e)}onKeyDown(e){this.transport.on("key-down",e)}onPageExcluded(e){this.transport.on("page-excluded",e)}onShowSaveDialog(e){this.transport.on("show-save-login-prompt",e)}onHideSaveDialog(e){this.transport.on("close-save-login-prompt",e)}forwardInlineMenuPosition(e,t){return this.transport.request(s({name:"forward-inline-menu-position",data:{configuration:e,matchableFrameWindowProps:t}},{targetParent:!0}))}removeInlineMenu(){return this.transport.request(s({name:"remove-inline-menu",data:void 0}))}focusInlineMenuFrame(){return this.transport.request(s({name:"focus-inline-menu-frame"}))}sendKeyDown(e,t){return this.transport.request(s({name:"key-down",data:{key:e,formEdited:t}}))}onInlineMenuOpened(e){this.transport.on("inline-menu-opened",e)}onInlineMenuClosed(e){this.transport.on("inline-menu-closed",e)}}("undefined"!=typeof chrome&&void 0!==chrome.runtime&&void 0!==chrome.runtime.sendMessage&&void 0!==chrome.runtime.onMessage?new t:o.isSafariAppExtension()?new o:new i);function a(){if("undefined"!=typeof window)return window;if("undefined"!=typeof globalThis)return globalThis;throw new Error("unable to locate global object")}const l=e=>(e.trim().split(/\r?\n/).shift()||"").trim(),d=e=>e.replace(/[\r\n\s]+/gm," ").trim(),c=(e={})=>(m(),M(document,e)),u=e=>q(e,f).filter(e=>"hidden"!==e.type),h=e=>u(document).findIndex(t=>t===e),m=()=>{document.addEventListener("input",y,!0)},p=new Set([HTMLScriptElement,HTMLStyleElement]),f=["button","input","select"],g=new Set([HTMLBodyElement,HTMLButtonElement,HTMLFormElement,HTMLHeadElement,HTMLIFrameElement,HTMLInputElement,HTMLOptionElement,HTMLScriptElement,HTMLSelectElement,HTMLTableElement,HTMLTableRowElement,HTMLTextAreaElement]),v=new Set([HTMLScriptElement,HTMLStyleElement,HTMLButtonElement,HTMLOptionElement,HTMLTextAreaElement]),w=150,b=/[^!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~0-9\s]/,y=e=>{e.isTrusted&&(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)&&(e.target.opUserEdited=!0)},M=(e,t)=>{const n=e.defaultView?e.defaultView:a();n.uuid=A();const i=[...e.forms],o=u(e),s={max:t.maxTime||50,start:Date.now()},r=void 0!==t.activeFieldOpid?t.activeFieldOpid:-1,l=o[r]?o[r]:e.activeElement instanceof HTMLInputElement?e.activeElement:void 0;if(l){const e=o.findIndex(e=>e===l);l.opid=-1!==e?e:void 0}const d=t.activeFormOnly&&l&&l instanceof HTMLInputElement&&l.form||void 0,c=E(t,i,d),h=S(t,o,c,s,l),m=n.origin&&"null"!==n.origin?n.origin:void 0;return{direction:e.dir||void 0,fields:h,forms:c,origin:m,title:e.title||void 0,pathName:n.location.pathname,uuid:n.uuid}},E=(e,t,n)=>t.map((t,i)=>{const o=!!e.activeFormOnly&&t!==n;return F(t,i,o)}),F=(e,t,n)=>{const i=t;if(e.opid=i,n)return{opid:i};let o,s;return B(e)||(o=L(e)||void 0,s=d(C(e))||void 0),{headerText:o,htmlAction:T(e)||void 0,htmlId:e.getAttribute("id")||void 0,htmlMethod:e.getAttribute("method")||void 0,htmlName:e.getAttribute("name")||void 0,opid:i,textContent:s}},S=(e,t,n,i,o)=>{const s=o&&o.opid?o.opid:0;let r,a=new Array(t.length),l=0,d=0,c=s,u=Math.min(t.length,e.maxFields||200);for(l=0;l<u&&z(i);l++){if(r=t[d=R(l,s,t.length)],e.activeFormOnly&&o&&r.form!==o.form){u<t.length&&u++;continue}const i=r===o,h=r.form&&r.form.opid?n[r.form.opid]:void 0;a[d]=I(r,d,i,h),d<c&&(c=d)}for(a=a.filter(Boolean),d=0,l=0;l<a.length&&z(i);l++)d=R(l,Math.ceil(a.length/2),a.length),k(t[c+d],a[d]);return a},I=(e,t,n,i)=>{const o=e instanceof HTMLInputElement,s=e instanceof HTMLSelectElement,r=t;e.opid=r;const a=o||s?e.autocomplete:void 0,l=o&&e.checked,d=o&&e.readOnly,c=(o||s)&&e.opUserEdited,u=o&&e.maxLength&&e.maxLength>0?Math.min(e.maxLength,999):void 0,h=o&&e.minLength&&e.minLength>0?e.minLength:void 0,m=o?e.placeholder:void 0,p=s?x(e,i):void 0,f=n||H(e);return{autocompleteType:a||void 0,formOpid:e.form?e.form.opid:void 0,htmlId:e.id||void 0,htmlName:e.name||void 0,htmlClass:e.className||void 0,isActive:n||void 0,isAriaDisabled:"true"===e.getAttribute("aria-disabled")||void 0,isAriaHasPopup:"true"===e.getAttribute("aria-haspopup")||void 0,isAriaHidden:"true"===e.getAttribute("aria-hidden")||void 0,isChecked:l||void 0,isDisabled:e.disabled||void 0,isHidden:!f||void 0,isReadOnly:d||void 0,isUserEdited:c||void 0,maxLength:u,minLength:h,opid:r,placeholder:m||void 0,selectOptions:p,tabIndex:e.tabIndex||void 0,title:e.title||void 0,type:e.type,value:P(e)||void 0}},k=(e,t)=>{t.label=_(e)||void 0,t.labelAria=j(e)||void 0,t.labelData=e.getAttribute("data-label")||void 0,t.labelBefore=L(e)||void 0,t.labelAfter=D(e)||void 0};class O{constructor(e,t){console.assert(H(e),"element must be visible for correct tree traversal"),this.direction=t,this.pauseNode=this.nextPauseNode(e),this.walker=O.createTreeWalker(e,t)}static createTreeWalker(e,t){const n=document.body,i=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,o={acceptNode:e=>e.nodeType===Node.TEXT_NODE&&v.has(e.parentElement.constructor)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},s=document.createTreeWalker(n,i,o);return s.currentNode=e,1===t&&e.nextSibling&&(s.currentNode=e.nextSibling,s.previousNode()),s}normalizeStrings(e){return e.length?(0===this.direction&&(e=e.reverse()),e.join(" ").trim().replace(/\s+/g," ")):""}advanceWalker(){return 0===this.direction?!!this.walker.previousNode():!!this.walker.nextNode()}nextPauseNode(e){if(0===this.direction)return e.parentElement;for(;e.parentElement;){if(e.parentElement.nextSibling)return e.parentElement.nextSibling;e=e.parentElement}return null}shouldPauseAtNode(e){return e===this.pauseNode&&(this.pauseNode=this.nextPauseNode(this.pauseNode),!0)}shouldStopAtNode(e){if(1===this.direction&&e===this.pauseNode)return!0;if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return t instanceof HTMLInputElement&&("text"===t.type||"password"===t.type)?H(t):N(t,g)}findLabelText(){const e=[];for(;this.advanceWalker();){const t=this.walker.currentNode;if(this.shouldStopAtNode(t))break;if(this.shouldPauseAtNode(t)){if(e.length){const t=this.normalizeStrings(e);return t.length>w?"":t}continue}const n=t instanceof HTMLElement?t:t.parentElement;if(!H(n)){this.skipInvisibleElement();continue}if(t.nodeType!==Node.TEXT_NODE)continue;const i=t.nodeValue;i&&b.test(i)&&e.push(i)}const t=this.normalizeStrings(e);return t.length>w?"":t}skipInvisibleElement(){let e=this.walker.currentNode;if(0===this.direction)for(;e.parentElement&&!H(e.parentElement);)e=e.parentElement;else if(e.firstChild)for(e=e.firstChild;e.nextSibling||e.firstChild;)e=e.nextSibling||e.firstChild;this.walker.currentNode=e}}const A=()=>a().crypto.getRandomValues(new Uint32Array(1))[0].toString(36),T=e=>{const t=e.ownerDocument?e.ownerDocument.defaultView:void 0;if(t){const n=e.getAttribute("action");return n?new URL(n,t.location.href).href:t.location.href}return""},_=e=>e.labels&&e.labels.length>0?[...e.labels].map(e=>l(C(e))).join(" "):"",L=e=>{if(!H(e))return"";return new O(e,0).findLabelText()},D=e=>{if(!H(e))return"";return new O(e,1).findLabelText()},x=(e,t)=>{const{options:n}=e,i=[];return n&&n.length>0&&[...n].forEach(e=>{i.push(d(e.text)),i.push(e.value)}),t&&t.textContent&&(t.textContent=d(t.textContent.replace(d(C(e)),""))),i.length?i:void 0},R=(e,t,n)=>{const i=Math.ceil(e/2),o=t-i,s=t+i;return o>=0&&s<n?e%2?o:s:o<0?e:n-e-1},C=e=>N(e,p)?"":e.innerText||e.textContent||"",P=e=>{const{type:t,value:n}=e;switch(t){case"submit":case"button":case"reset":return""===n?l(C(e)):n;default:return n}},j=e=>{const t=e.getAttribute("aria-label");if(t)return t;const n=e.getAttribute("aria-labelledby");if(!n)return"";let i="";for(const e of n.split(" ")){const t=document.getElementById(e);t&&(i+=C(t)+" ")}return d(i)},N=(e,t)=>!!e&&t.has(e.constructor),H=e=>!!e&&("hidden"!==e.style.visibility&&"none"!==e.style.display&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),B=e=>e.parentElement===document.body,z=e=>Date.now()-e.start<e.max,q=(e,t)=>[...e.querySelectorAll(t.join())],K="data-com-onepassword-filled",W=e=>{const t=[];if("undefined"!=typeof uuid&&""!==uuid)for(const n of e)t.push(V(uuid,n));else console.error("Failed to fillFrame: Frame is missing uuid.");return Promise.all(t).then(()=>void 0)},U=["button","input","select"],V=async(e,t)=>{if(!te(e,t.uuid)||!Z(t.allowedDomains,t.allowAllDomains)||!ee(t.allowUnsafeHttp||!1))return;const n=ne();let i=n.slice();for(const e of await t.operations){const t=$(e,i);i=i.slice(t+1),await le()}t.postFill&&($(t.postFill,n),await le())},$=(e,t)=>{const{action:n,opid:i,querySelector:o,value:s}=e;let r=0;switch(n){case"clickOpid":if(void 0===i)break;r=X(t,i);break;case"fillOpid":if(void 0===i)break;r=Y(t,i,s);break;case"fillQuerySelector":if(!o)break;Q(o,s);break;case"focusOpid":if(void 0===i)break;r=G(t,i)}return r},X=(e,t)=>{const n=e.findIndex(e=>e.opid===t),i=e[n];return i&&i.click(),n},Y=(e,t,n)=>{const i=e.findIndex(e=>e.opid===t),o=e[i];return o&&re(o,n),i},Q=(e,t)=>{const n=document.querySelector(e);n&&re(n,t)},G=(e,t)=>{const n=e.findIndex(e=>e.opid===t),i=e[n];return i&&J(i,!0),n},J=(e,t)=>{const n=e.value;e.click(),e.focus(),t&&e.value!==n&&(e.value=n)},Z=(e,t)=>{if(t)return!0;if(!window.origin||"null"===window.origin)return!1;const{hostname:n}=window.location;return e.some(e=>e===n||n.endsWith(`.${e}`))},ee=e=>!e||"https:"===window.location.protocol||confirm("1Password warning:         This is an unsecured (HTTP) page, and any information you submit can potentially be seen and changed by others.         This Login was originally saved on a secure (HTTPS) page.         \r\n\r\n        Do you still wish to fill this login?"),te=(e,t)=>!!e&&e===t,ne=()=>oe(document,U).filter(e=>"hidden"!==e.type),ie=e=>{e.dispatchEvent(new KeyboardEvent("keydown")),e.dispatchEvent(new KeyboardEvent("keypress")),e.dispatchEvent(new KeyboardEvent("keyup"))},oe=(e,t)=>[...e.querySelectorAll(t.join())],se=e=>{const t=window.getComputedStyle(e).color;let n={red:0,green:0,blue:0};if(t&&t.startsWith("rgb")){const e=t.match(/\d+/g);e&&3===e.length&&(n={red:Number(e[0]),green:Number(e[1]),blue:Number(e[2])})}const i=(.2126*n.red+.7152*n.green+.0722*n.blue)/255<.5?"light":"dark";e.setAttribute(K,i)},re=(e,t)=>{"checkbox"===e.type?e.checked!==!!t&&e.click():(ae(e),e.value=t,(e=>{const t=e.value;ie(e),e.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0})),e.setAttribute(K,"");const n=()=>{e.hasAttribute(K)&&e.removeAttribute(K),e.removeEventListener("input",n)};e.addEventListener("input",n),se(e),""===e.value&&(e.value=t),e.blur()})(e)),e.opUserEdited=!0},ae=e=>{const t=e.value;J(e),ie(e),""===e.value&&(e.value=t)},le=()=>new Promise(e=>{setTimeout(()=>e(),1)});var de=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),ce=function(){return Math.random().toString(36).substring(7).split("").join(".")},ue={INIT:"@@redux/INIT"+ce(),REPLACE:"@@redux/REPLACE"+ce(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ce()}};const he={locked:!0,basePath:"/",configured:!1,activeField:void 0,activeFieldDesignation:void 0,autoshowMenu:!1,inlineMenuOpen:!1,inlineMenuToken:void 0,filling:!1,inlineDisabled:!1,locale:"en",authorizeBeforeFill:!1};const me=function e(t,n,i){var o;if("function"==typeof n&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var s=t,r=n,a=[],l=a,d=!1;function c(){l===a&&(l=a.slice())}function u(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return r}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return c(),l.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,c();var n=l.indexOf(e);l.splice(n,1)}}}function m(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,r=s(r,e)}finally{d=!1}for(var t=a=l,n=0;n<t.length;n++)(0,t[n])();return e}return m({type:ue.INIT}),(o={dispatch:m,subscribe:h,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,m({type:ue.REPLACE})}})[de]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(u())}return n(),{unsubscribe:t(n)}}})[de]=function(){return this},e},o}(function(e,t){if(!e)return he;switch(t.type){case"configure":return Object.assign(Object.assign(Object.assign({},e),t.payload),{configured:!0});case"lock-state-changed":return Object.assign(Object.assign({},e),{locked:t.payload});case"set-active-field":return Object.assign(Object.assign({},e),{activeField:t.payload,activeFieldDesignation:t.payload?e.activeFieldDesignation:void 0});case"set-active-field-designation":return Object.assign(Object.assign({},e),{activeFieldDesignation:t.payload});case"set-autoshow-menu":return Object.assign(Object.assign({},e),{autoshowMenu:t.payload});case"set-inline-menu-open":return Object.assign(Object.assign({},e),{inlineMenuOpen:t.payload});case"set-inline-menu-token":return Object.assign(Object.assign({},e),{inlineMenuToken:t.payload});case"fill-start":return Object.assign(Object.assign({},e),{filling:!0});case"fill-end":return Object.assign(Object.assign({},e),{filling:!1});case"set-page-excluded":return Object.assign(Object.assign({},e),{inlineDisabled:t.payload});default:return e}}),pe=(e,t)=>((e,t)=>(function(e,t,n){let i;function o(){const o=t(e.getState());o!==i&&n(i=o)}const s=e.subscribe(o);return o(),s})(me,e,t))(t=>t[e],t);class fe{constructor(){this.stylesLoaded=!1,this._onMousedown=e=>{e.stopImmediatePropagation(),e.preventDefault()},this._onClick=e=>{e.target&&this.onClick&&this.onClick()},this.draw=(e=me.getState().activeField)=>{if(this.buttonFromDOM&&this.erase(),!e)return;if(!this.shadowRoot.host.parentElement){const t=document.createElement("link");t.rel="stylesheet",t.href=`${me.getState().basePath}/button/injected.css`,t.onload=()=>{this.stylesLoaded=!0,this.draw(e)},this.shadowRoot.appendChild(t),document.body.appendChild(this.shadowRoot.host)}if(!this.stylesLoaded)return;const t=document.createElement("button");t.id="op-button",this.shadowRoot.appendChild(t),this.setButtonStyles(e,t);const n=document.createElement("div");n.id="op-button-status",n.setAttribute("role","status"),n.innerText="1Password menu available. Press the down arrow key to select.",this.shadowRoot.appendChild(n)},this.erase=()=>{this.buttonFromDOM&&this.shadowRoot.removeChild(this.buttonFromDOM),this.buttonStatusFromDOM&&this.shadowRoot.removeChild(this.buttonStatusFromDOM)},this.move=e=>{this.setButtonStyles(e,this.buttonFromDOM)},this.setButtonStyles=(e,t)=>{if(!t)return;const n=e.getBoundingClientRect(),i=n.top,o=n.left,[s,r]=this.calculateSize(n.height),a=(n.height-s)/2,l=i+a,d=o+n.width-s-a,{basePath:c}=me.getState(),u=me.getState().locked?"locked":"unlocked";t.setAttribute("style",`\n\t\t\t\ttop: ${l}px !important;\n\t\t\t\tleft: ${d}px !important;\n\t\t\t\tbackground: url(${c}/images/icons/app_icon-light_bg-color-${u}-${s}.svg) !important;\n      `),t.setAttribute("data-size",r)},this.calculateSize=e=>e>=38?[fe.large,"large"]:e<fe.medium+4?[fe.small,"small"]:[fe.medium,"medium"],this.shadowRoot=document.createElement("com-1password-button").attachShadow({mode:"closed"}),this.shadowRoot.addEventListener("mousedown",this._onMousedown),this.shadowRoot.addEventListener("click",this._onClick),pe("activeField",()=>{this.draw()}),pe("locked",()=>{this.draw()}),pe("inlineDisabled",e=>{e&&this.erase()})}get buttonFromDOM(){return this.shadowRoot.getElementById("op-button")}get buttonStatusFromDOM(){return this.shadowRoot.getElementById("op-button-status")}}fe.small=12,fe.medium=16,fe.large=24;const ge=["username","current-password","new-password","one-time-code","cc-number","cc-given-name","cc-family-name","cc-name","given-name","family-name","name","email","street-address","address-line1"];var ve=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},we="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},be="object"==typeof we&&we&&we.Object===Object&&we,ye="object"==typeof self&&self&&self.Object===Object&&self,Me=be||ye||Function("return this")(),Ee=function(){return Me.Date.now()},Fe=Me.Symbol,Se=Object.prototype,Ie=Se.hasOwnProperty,ke=Se.toString,Oe=Fe?Fe.toStringTag:void 0;var Ae=function(e){var t=Ie.call(e,Oe),n=e[Oe];try{e[Oe]=void 0;var i=!0}catch(e){}var o=ke.call(e);return i&&(t?e[Oe]=n:delete e[Oe]),o},Te=Object.prototype.toString;var _e=function(e){return Te.call(e)},Le="[object Null]",De="[object Undefined]",xe=Fe?Fe.toStringTag:void 0;var Re=function(e){return null==e?void 0===e?De:Le:xe&&xe in Object(e)?Ae(e):_e(e)};var Ce=function(e){return null!=e&&"object"==typeof e},Pe="[object Symbol]";var je=function(e){return"symbol"==typeof e||Ce(e)&&Re(e)==Pe},Ne=NaN,He=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,Ke=parseInt;var We=function(e){if("number"==typeof e)return e;if(je(e))return Ne;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(He,"");var n=ze.test(e);return n||qe.test(e)?Ke(e.slice(2),n?2:8):Be.test(e)?Ne:+e},Ue="Expected a function",Ve=Math.max,$e=Math.min;var Xe=function(e,t,n){var i,o,s,r,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError(Ue);function m(t){var n=i,s=o;return i=o=void 0,d=t,r=e.apply(s,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-d>=s}function f(){var e=Ee();if(p(e))return g(e);a=setTimeout(f,function(e){var n=t-(e-l);return u?$e(n,s-(e-d)):n}(e))}function g(e){return a=void 0,h&&i?m(e):(i=o=void 0,r)}function v(){var e=Ee(),n=p(e);if(i=arguments,o=this,l=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(f,t),c?m(e):r}(l);if(u)return clearTimeout(a),a=setTimeout(f,t),m(l)}return void 0===a&&(a=setTimeout(f,t)),r}return t=We(t)||0,ve(n)&&(c=!!n.leading,s=(u="maxWait"in n)?Ve(We(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==a&&clearTimeout(a),d=0,i=l=o=a=void 0},v.flush=function(){return void 0===a?r:g(Ee())},v},Ye="Expected a function";var Qe=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(Ye);return ve(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Xe(e,t,{leading:i,maxWait:t,trailing:o})};class Ge{constructor(){this._onMouseDown=e=>{const{target:t}=e;this.focusedOwnAssets(t)||(me.getState().activeField||t!==document.activeElement?this.onInputBlur&&this.onInputBlur():this.checkFocus(t))},this._onFocus=e=>{const{target:t}=e,n=me.getState().activeField;this.focusedOwnAssets(t)||(n&&this.onInputBlur&&this.onInputBlur(),this.checkFocus(t))},this._onKeyDown=e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(!["ArrowUp","ArrowDown","Escape"].includes(e.key))return;const{target:t}=e,n=me.getState().activeField;t instanceof HTMLInputElement&&n&&t===n&&(e.preventDefault(),this.onActiveInputKeyDown&&this.onActiveInputKeyDown(e.key))},this._onChange=e=>{const{target:t}=e;t===me.getState().activeField&&this.onActiveInputChange&&this.onActiveInputChange(t)},this.isUsableField=e=>{return["text","email","number","password","url","tel"].includes(e.type.toLowerCase())&&e.offsetWidth>=90&&e.offsetHeight>=5&&!e.readOnly&&!e.disabled},this.activeFieldVisibilityObserver=new IntersectionObserver(e=>{for(const t of e){const{width:e,height:n}=t.boundingClientRect;t.isIntersecting||0!==e||0!==n||this.onInputBlur&&this.onInputBlur()}}),window.addEventListener("focusin",Qe(this._onFocus,10),!0),window.addEventListener("keydown",Qe(this._onKeyDown,10),!0),window.addEventListener("input",this._onChange,!0),window.addEventListener("mousedown",this._onMouseDown,!0),pe("locked",e=>{e||this.checkFocus()}),pe("inlineDisabled",e=>{e||this.checkFocus()}),pe("configured",e=>{e&&this.checkFocus()}),pe("filling",e=>{e||this.checkFocus(document.activeElement)}),pe("activeField",e=>{e?this.activeFieldVisibilityObserver.observe(e):this.activeFieldVisibilityObserver.disconnect()})}focusedOwnAssets(e){return!!e&&(e===me.getState().activeField||(e instanceof HTMLElement&&"COM-1PASSWORD-BUTTON"===e.tagName||e instanceof HTMLElement&&"COM-1PASSWORD-MENU"===e.tagName))}checkFocus(e=document.activeElement){const{inlineDisabled:t,configured:n}=me.getState();n&&!t&&e instanceof HTMLInputElement&&this.isUsableField(e)&&this.onInputFocus&&this.onInputFocus(e)}}class Je{constructor(){this._isFieldOrFormEdited=e=>{return this._getFormState(e).editedFieldCount>0},this._onInputFocus=e=>{me.getState().filling||this._getDesignation(e).then(t=>{(function(e){return e.fieldDesignation&&"none"!==e.fieldDesignation&&ge.includes(e.fieldDesignation)})(t)&&(me.dispatch({type:"set-active-field",payload:e}),me.dispatch({type:"set-active-field-designation",payload:t}),this._ensureFieldIsTracked(e),this.onActiveInputFocus&&this.onActiveInputFocus(this.isEdited))}).catch(()=>{})},this._onInputBlur=()=>{this.onActiveInputBlur&&this.onActiveInputBlur()},this._ensureFormIsTracked=e=>{let t=this.trackedForms.get(e);return t||(t={initialValues:new WeakMap,editedFields:new WeakSet,editedFieldCount:0},this.trackedForms.set(e,t)),t},this._ensureStandaloneFieldIsTracked=e=>{let t=this.trackedStandaloneFields.get(e);return t||(t={initialValues:new WeakMap,editedFields:new WeakSet,editedFieldCount:0},this.trackedStandaloneFields.set(e,t)),t},this._getFormState=e=>e.form?this._ensureFormIsTracked(e.form):this._ensureStandaloneFieldIsTracked(e),this._ensureFieldIsTracked=e=>{const t=this._getFormState(e);t.initialValues.has(e)||t.initialValues.set(e,e.value)},this._onActiveInputKeyDown=e=>{this.onActiveInputKeyDown&&this.onActiveInputKeyDown(e,this.isEdited)},this._onActiveInputChange=e=>{const t=this._getFormState(e);if(me.getState().filling)return void(t.editedFields.has(e)&&(t.editedFields.delete(e),t.editedFieldCount--));const n=this._isFieldOrFormEdited(e);t.initialValues.get(e)===e.value?t.editedFields.has(e)&&(t.editedFields.delete(e),t.editedFieldCount--):t.editedFields.has(e)||(t.editedFields.add(e),t.editedFieldCount++);const i=this._isFieldOrFormEdited(e);n!==i&&r.editedStateChanged(i),this.onActiveInputChange&&this.onActiveInputChange(e)},this._onButtonClick=()=>{this.onButtonClick&&this.onButtonClick(this.isEdited)},this._getDesignation=async e=>{const t=this.designations.get(e);if(t)return t;if(this.designations.has(e))throw new Error("Field is already being designated.");this.designations.set(e,void 0);const n=await r.getDesignation(c({activeFormOnly:!0}));return this.designations.set(e,n),n},this.inputManager=new Ge,this.inputManager.onInputFocus=this._onInputFocus,this.inputManager.onInputBlur=this._onInputBlur,this.inputManager.onActiveInputKeyDown=this._onActiveInputKeyDown,this.inputManager.onActiveInputChange=this._onActiveInputChange,this.buttonManager=new fe,this.buttonManager.onClick=this._onButtonClick,this.trackedForms=new WeakMap,this.trackedStandaloneFields=new WeakMap,this.designations=new Map,r.onHideSaveDialog(this._onInputBlur)}get isEdited(){const{activeField:e}=me.getState();return!!e&&this._isFieldOrFormEdited(e)}}class Ze{constructor(){this._isListeningForScrollAndResizeEvents=!1,this.onActiveInputKeyDown=(e,t)=>{"ArrowDown"===e?me.getState().inlineMenuOpen?this.inlineMenuManager.focus():this.inlineMenuManager.toggle(t,!0):this._handleKeyDown(e,t)},this.onActiveInputChange=e=>{me.getState().inlineMenuOpen&&this.inlineMenuManager.filter(e.value)},this.onButtonClick=e=>{this.inlineMenuManager.toggle(e)},this.onActiveInputFocus=e=>{var t;this._onActiveInputFocus();const{autoshowMenu:n,locked:i}=me.getState();!i&&n&&((null===(t=me.getState().activeField)||void 0===t?void 0:t.hasAttribute(K))||this.inlineMenuManager.attach(e))},this.onActiveInputBlur=()=>{me.dispatch({type:"set-active-field",payload:void 0}),this.inlineMenuManager.detach()},this.collectFrame=()=>{const e=me.getState().activeField;return e?c({activeFieldOpid:h(e),activeFormOnly:!0}):c()},this._onScrollOrResize=()=>{this._removeScrollAndResizeEventListeners()},this._addScrollAndResizeEventListeners=()=>{this._isListeningForScrollAndResizeEvents||(window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize,!0),this._isListeningForScrollAndResizeEvents=!0)},this._removeScrollAndResizeEventListeners=()=>{this._isListeningForScrollAndResizeEvents&&(r.removeScrollAndResizeEventListeners(),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize,!0),this._isListeningForScrollAndResizeEvents=!1,this.onActiveInputBlur())},this.formManager=new Je,this.formManager.onActiveInputFocus=this.onActiveInputFocus,this.formManager.onActiveInputBlur=this.onActiveInputBlur,this.formManager.onActiveInputKeyDown=this.onActiveInputKeyDown,this.formManager.onButtonClick=this.onButtonClick,this.formManager.onActiveInputChange=this.onActiveInputChange,r.getFrameManagerConfiguration().then(e=>{me.dispatch({type:"configure",payload:e})}),r.onInlineMenuOpened(()=>{me.dispatch({type:"set-inline-menu-open",payload:!0})}),r.onInlineMenuClosed(()=>{me.dispatch({type:"set-inline-menu-open",payload:!1})}),r.onAddScrollAndResizeEventListeners(this._addScrollAndResizeEventListeners),r.onRemoveScrollAndResizeEventListeners(this._removeScrollAndResizeEventListeners),r.onLockStateChanged(({locked:e})=>{me.dispatch({type:"lock-state-changed",payload:e})}),r.onPageExcluded(e=>{me.dispatch({type:"set-page-excluded",payload:e})}),r.onCollectFrameDetails(()=>this.collectFrame()),r.onPerformFill(e=>{me.dispatch({type:"fill-start"}),this.inlineMenuManager.detach(),W(e.frames).then(()=>{me.dispatch({type:"fill-end"})})}),r.onPing(()=>{r.sayHello()}),r.onFocusPage(()=>{const e=me.getState().activeField;e&&e.focus()})}}class et{constructor(){this.stylesLoaded=!1,this.draw=({top:e,left:t,fieldDesignation:n,formDesignation:i,context:o,edited:s,locale:a})=>{if(this.erase(),!this.shadowRoot.host.parentElement){const r=document.createElement("link");r.rel="stylesheet",r.href=`${me.getState().basePath}/menu/injected.css`,r.onload=()=>{this.stylesLoaded=!0,this.draw({top:e,left:t,fieldDesignation:n,formDesignation:i,context:o,edited:s,locale:a})},this.shadowRoot.appendChild(r),document.body.appendChild(this.shadowRoot.host)}if(!this.stylesLoaded)return;const l=document.createElement("iframe");l.id="op-menu";const{basePath:d,inlineMenuToken:c,locked:u,authorizeBeforeFill:h}=me.getState();if("string"!=typeof c)throw new Error("No inline menu token exists.");const m=new URL(`${d}/menu/menu.html`),p=new URLSearchParams({token:c,displayHost:window.location.hostname,field:n,form:i,edited:s.toString(),locked:u.toString(),locale:a,authorizeBeforeFill:h.toString()});o&&p.append("context",o),m.search=p.toString(),l.src=m.toString(),this.shadowRoot.appendChild(l),this.positionMenu(l,{top:e,left:t}),r.sendInlineMenuOpened(),this.observeMenuForMutations()},this.erase=()=>{this.menuFromDOM&&(this.shadowRoot.removeChild(this.menuFromDOM),r.sendInlineMenuClosed())},this.show=()=>{this.menuFromDOM&&(this.menuFromDOM.classList.contains("ready")||this.menuFromDOM.classList.add("ready"))},this.resize=(e,t)=>{this.menuFromDOM&&(this.menuFromDOM.setAttribute("data-height",String(e)),t&&(this.menuFromDOM.style.width=`${t}px`))},this.move=e=>{this.positionMenu(this.menuFromDOM,e)},this.positionMenu=(e,{top:t,left:n})=>{e&&(e.style.top=t+"px",e.style.left=n+"px")},this.observeMenuForMutations=()=>{if(!this.menuFromDOM)return;const e=new MutationObserver(t=>{t.forEach(t=>{"id"===t.attributeName&&(this.erase(),e.disconnect())})});e.observe(this.menuFromDOM,{attributes:!0})},this.shadowRoot=document.createElement("com-1password-menu").attachShadow({mode:"closed"})}get menuFromDOM(){return this.shadowRoot.getElementById("op-menu")}}class tt{constructor(){this.attach=(e=!1)=>{const t=this.getInlineMenuConfiguration(e);t&&this._attach(t)},this.detach=()=>{this._detach()},this.toggle=(e,t)=>{const{inlineMenuOpen:n,locked:i}=me.getState(),o=void 0===t?!n:t;me.dispatch({type:"set-autoshow-menu",payload:o}),o?i?r.requestManagedUnlock().then(t=>{t||this.attach(e)}):this.attach(e):this.detach()},this.focus=()=>{this._focus()},this.filter=e=>{r.filterInlineMenu(e)},this.getInlineMenuConfiguration=e=>{const t=this.getMenuPosition();if(!t)return;const{fieldDesignation:n="",formDesignation:i=""}=me.getState().activeFieldDesignation||{},{locale:o}=me.getState(),s=function(){if("accounts.google.com"!==window.location.host)return;const e=c().fields.find(e=>"email"===e.type&&"identifier"===e.htmlName&&"hiddenEmail"===e.htmlId);return e&&e.value}();return Object.assign(Object.assign({},t),{fieldDesignation:n,formDesignation:i,edited:e,context:s,locale:o})},this.getMenuPosition=()=>{const e=me.getState().activeField;if(!e)return;const{top:t,left:n,height:i}=e.getBoundingClientRect();return{top:t+i,left:n}},this.handleInlineMenuPosition=({configuration:e,matchableFrameWindowProps:t})=>{const n=document.getElementsByTagName("iframe");if(0===n.length)return;const i=this.findMostEqualFrame([...n],t);if(0===i.confidence)return;const{top:o,left:s}=i.frame.getBoundingClientRect();this._attach(Object.assign(Object.assign({},e),{top:e.top+o,left:e.left+s}))},this.findMostEqualFrame=(e,t)=>{return e.reduce((e,n)=>{const{width:i,height:o,src:s,name:r}=t,a=n.clientWidth===i&&n.clientHeight===o,l=n.src&&s&&n.src===s,d=n.name&&r&&n.name===r;let c=0;return a&&l&&d?c=3:a&&(l||d)||l&&d?c=2:a&&(c=1),e.push({frame:n,confidence:c}),e},[]).sort((e,t)=>t.confidence-e.confidence)[0]},r.onForwardInlineMenuPosition(this.handleInlineMenuPosition)}}class nt extends tt{constructor(){super(),this._focus=()=>{me.getState().locked||setTimeout(()=>{const e=this.inlineMenuFrame.menuFromDOM;e&&(r.focusInlineMenu(),e.focus())},1)},this._attach=e=>{this.inlineMenuFrame.draw(e)},this._detach=()=>{this.inlineMenuFrame.erase()},this.inlineMenuFrame=new et,me.dispatch({type:"set-inline-menu-token",payload:window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)}),r.onRequestVerificationToken(()=>{r.sendVerificationToken(me.getState().inlineMenuToken)}),r.onResizeInlineMenu(({height:e,width:t})=>{this.inlineMenuFrame.resize(e,t)}),r.onInlineMenuReady(()=>{this.inlineMenuFrame.show()}),r.onRemoveInlineMenu(e=>{this._detach(),e&&me.dispatch({type:"set-autoshow-menu",payload:!1})}),r.onFocusInlineMenuFrame(this._focus),pe("locked",e=>{e&&this._detach()}),pe("inlineDisabled",e=>{e&&this._detach()})}get isOpen(){return!!this.inlineMenuFrame.menuFromDOM}}class it{constructor(){this.stylesLoaded=!1,this.draw=e=>{if(this.erase(),!this.shadowRoot.host.parentElement){const t=document.createElement("link");t.rel="stylesheet",t.href=`${me.getState().basePath}/save-dialog/injected.css`,t.onload=()=>{this.stylesLoaded=!0,this.draw(e)},this.shadowRoot.appendChild(t),document.body.appendChild(this.shadowRoot.host)}if(!this.stylesLoaded)return;const{basePath:t,locale:n}=me.getState(),i=document.createElement("iframe");i.id="op-save-dialog";const o=new URL(`${t}/save-dialog/save-dialog.html`),s=new URLSearchParams({language:n,tabId:e.toString(),sessionId:e.toString()});o.search=s.toString(),i.src=o.toString(),this.shadowRoot.appendChild(i)},this.erase=()=>{this.saveDialogFromDOM&&this.shadowRoot.removeChild(this.saveDialogFromDOM)},this.shadowRoot=document.createElement("com-1password-save-dialog").attachShadow({mode:"closed"})}get saveDialogFromDOM(){return this.shadowRoot.getElementById("op-save-dialog")}}class ot{constructor(){this._add=e=>{this.saveDialogFrame.draw(e)},this._remove=()=>{this.saveDialogFrame.erase()},this.saveDialogFrame=new it,r.onShowSaveDialog(({sessionId:e})=>{this._add(e)}),r.onHideSaveDialog(()=>{this._remove()})}}class st extends Ze{constructor(){super(),this.onFillStart=()=>{this.inlineMenuManager.detach()},this._handleKeyDown=(e,t)=>{switch(e){case"ArrowUp":case"Escape":this.inlineMenuManager.toggle(t,!1)}},this._onActiveInputFocus=()=>{this._addScrollAndResizeEventListeners()},this.inlineMenuManager=new nt,this.saveDialogManager=new ot,r.onKeyDown(({key:e,formEdited:t})=>this._handleKeyDown(e,t))}}class rt extends tt{constructor(){super(...arguments),this._attach=e=>{r.forwardInlineMenuPosition(e,{width:window.innerWidth,height:window.innerHeight,src:window.location.href,name:window.name})},this._detach=()=>{r.removeInlineMenu()},this._focus=()=>{r.focusInlineMenuFrame()}}}class at extends Ze{constructor(){super(),this._handleKeyDown=(e,t)=>{switch(e){case"ArrowUp":case"Escape":r.sendKeyDown(e,t)}},this._onActiveInputFocus=()=>{this._addScrollAndResizeEventListeners(),r.addScrollAndResizeEventListeners()},this.inlineMenuManager=new rt}}window===window.top?new st:new at}();
