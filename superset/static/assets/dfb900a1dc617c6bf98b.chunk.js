(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1194:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.split=void 0;var o=i(n(4282)),r=i(n(4283));function i(t){return t&&t.__esModule?t:{default:t}}e.split=r.default,e.default=o.default},3450:function(t,e,n){(function(t,n){var o="[object Arguments]",r="[object Map]",i="[object Object]",s="[object Set]",a=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[o]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l[r]=l["[object Number]"]=l[i]=l["[object RegExp]"]=l[s]=l["[object String]"]=l["[object WeakMap]"]=!1;var c="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,d=c||h||Function("return this")(),f=e&&!e.nodeType&&e,p=f&&"object"==typeof n&&n&&!n.nodeType&&n,g=p&&p.exports===f,y=g&&c.process,v=function(){try{return y&&y.binding&&y.binding("util")}catch(t){}}(),b=v&&v.isTypedArray;function m(t,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(t[n],n,t))return!0;return!1}function _(t){var e=-1,n=Array(t.size);return t.forEach((function(t,o){n[++e]=[o,t]})),n}function S(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var w,O,k,j=Array.prototype,E=Function.prototype,$=Object.prototype,C=d["__core-js_shared__"],M=E.toString,P=$.hasOwnProperty,z=(w=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",A=$.toString,x=RegExp("^"+M.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=g?d.Buffer:void 0,B=d.Symbol,T=d.Uint8Array,F=$.propertyIsEnumerable,R=j.splice,N=B?B.toStringTag:void 0,U=Object.getOwnPropertySymbols,H=L?L.isBuffer:void 0,I=(O=Object.keys,k=Object,function(t){return O(k(t))}),V=vt(d,"DataView"),W=vt(d,"Map"),D=vt(d,"Promise"),G=vt(d,"Set"),K=vt(d,"WeakMap"),q=vt(Object,"create"),J=St(V),Q=St(W),X=St(D),Y=St(G),Z=St(K),tt=B?B.prototype:void 0,et=tt?tt.valueOf:void 0;function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function it(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new rt;++e<n;)this.add(t[e])}function st(t){var e=this.__data__=new ot(t);this.size=e.size}function at(t,e){var n=kt(t),o=!n&&Ot(t),r=!n&&!o&&jt(t),i=!n&&!o&&!r&&Pt(t),s=n||o||r||i,a=s?function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}(t.length,String):[],u=a.length;for(var l in t)!e&&!P.call(t,l)||s&&("length"==l||r&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||_t(l,u))||a.push(l);return a}function ut(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1}function lt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":N&&N in Object(t)?function(t){var e=P.call(t,N),n=t[N];try{t[N]=void 0;var o=!0}catch(t){}var r=A.call(t);o&&(e?t[N]=n:delete t[N]);return r}(t):function(t){return A.call(t)}(t)}function ct(t){return Mt(t)&&lt(t)==o}function ht(t,e,n,a,u){return t===e||(null==t||null==e||!Mt(t)&&!Mt(e)?t!=t&&e!=e:function(t,e,n,a,u,l){var c=kt(t),h=kt(e),d=c?"[object Array]":mt(t),f=h?"[object Array]":mt(e),p=(d=d==o?i:d)==i,g=(f=f==o?i:f)==i,y=d==f;if(y&&jt(t)){if(!jt(e))return!1;c=!0,p=!1}if(y&&!p)return l||(l=new st),c||Pt(t)?pt(t,e,n,a,u,l):function(t,e,n,o,i,a,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new T(t),new T(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case r:var l=_;case s:var c=1&o;if(l||(l=S),t.size!=e.size&&!c)return!1;var h=u.get(t);if(h)return h==e;o|=2,u.set(t,e);var d=pt(l(t),l(e),o,i,a,u);return u.delete(t),d;case"[object Symbol]":if(et)return et.call(t)==et.call(e)}return!1}(t,e,d,n,a,u,l);if(!(1&n)){var v=p&&P.call(t,"__wrapped__"),b=g&&P.call(e,"__wrapped__");if(v||b){var m=v?t.value():t,w=b?e.value():e;return l||(l=new st),u(m,w,n,a,l)}}if(!y)return!1;return l||(l=new st),function(t,e,n,o,r,i){var s=1&n,a=gt(t),u=a.length,l=gt(e).length;if(u!=l&&!s)return!1;var c=u;for(;c--;){var h=a[c];if(!(s?h in e:P.call(e,h)))return!1}var d=i.get(t);if(d&&i.get(e))return d==e;var f=!0;i.set(t,e),i.set(e,t);var p=s;for(;++c<u;){h=a[c];var g=t[h],y=e[h];if(o)var v=s?o(y,g,h,e,t,i):o(g,y,h,t,e,i);if(!(void 0===v?g===y||r(g,y,n,o,i):v)){f=!1;break}p||(p="constructor"==h)}if(f&&!p){var b=t.constructor,m=e.constructor;b!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m)&&(f=!1)}return i.delete(t),i.delete(e),f}(t,e,n,a,u,l)}(t,e,n,a,ht,u))}function dt(t){return!(!Ct(t)||function(t){return!!z&&z in t}(t))&&(Et(t)?x:a).test(St(t))}function ft(t){if(n=(e=t)&&e.constructor,o="function"==typeof n&&n.prototype||$,e!==o)return I(t);var e,n,o,r=[];for(var i in Object(t))P.call(t,i)&&"constructor"!=i&&r.push(i);return r}function pt(t,e,n,o,r,i){var s=1&n,a=t.length,u=e.length;if(a!=u&&!(s&&u>a))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var c=-1,h=!0,d=2&n?new it:void 0;for(i.set(t,e),i.set(e,t);++c<a;){var f=t[c],p=e[c];if(o)var g=s?o(p,f,c,e,t,i):o(f,p,c,t,e,i);if(void 0!==g){if(g)continue;h=!1;break}if(d){if(!m(e,(function(t,e){if(s=e,!d.has(s)&&(f===t||r(f,t,n,o,i)))return d.push(e);var s}))){h=!1;break}}else if(f!==p&&!r(f,p,n,o,i)){h=!1;break}}return i.delete(t),i.delete(e),h}function gt(t){return function(t,e,n){var o=e(t);return kt(t)?o:function(t,e){for(var n=-1,o=e.length,r=t.length;++n<o;)t[r+n]=e[n];return t}(o,n(t))}(t,zt,bt)}function yt(t,e){var n,o,r=t.__data__;return("string"==(o=typeof(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function vt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(n)?n:void 0}nt.prototype.clear=function(){this.__data__=q?q(null):{},this.size=0},nt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt.prototype.get=function(t){var e=this.__data__;if(q){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:P.call(e,t)},nt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=q&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[],this.size=0},ot.prototype.delete=function(t){var e=this.__data__,n=ut(e,t);return!(n<0)&&(n==e.length-1?e.pop():R.call(e,n,1),--this.size,!0)},ot.prototype.get=function(t){var e=this.__data__,n=ut(e,t);return n<0?void 0:e[n][1]},ot.prototype.has=function(t){return ut(this.__data__,t)>-1},ot.prototype.set=function(t,e){var n=this.__data__,o=ut(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this},rt.prototype.clear=function(){this.size=0,this.__data__={hash:new nt,map:new(W||ot),string:new nt}},rt.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},rt.prototype.get=function(t){return yt(this,t).get(t)},rt.prototype.has=function(t){return yt(this,t).has(t)},rt.prototype.set=function(t,e){var n=yt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},it.prototype.has=function(t){return this.__data__.has(t)},st.prototype.clear=function(){this.__data__=new ot,this.size=0},st.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},st.prototype.get=function(t){return this.__data__.get(t)},st.prototype.has=function(t){return this.__data__.has(t)},st.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ot){var o=n.__data__;if(!W||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new rt(o)}return n.set(t,e),this.size=n.size,this};var bt=U?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,o=null==t?0:t.length,r=0,i=[];++n<o;){var s=t[n];e(s,n,t)&&(i[r++]=s)}return i}(U(t),(function(e){return F.call(t,e)})))}:function(){return[]},mt=lt;function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||u.test(t))&&t>-1&&t%1==0&&t<e}function St(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=mt(new V(new ArrayBuffer(1)))||W&&mt(new W)!=r||D&&"[object Promise]"!=mt(D.resolve())||G&&mt(new G)!=s||K&&"[object WeakMap]"!=mt(new K))&&(mt=function(t){var e=lt(t),n=e==i?t.constructor:void 0,o=n?St(n):"";if(o)switch(o){case J:return"[object DataView]";case Q:return r;case X:return"[object Promise]";case Y:return s;case Z:return"[object WeakMap]"}return e});var Ot=ct(function(){return arguments}())?ct:function(t){return Mt(t)&&P.call(t,"callee")&&!F.call(t,"callee")},kt=Array.isArray;var jt=H||function(){return!1};function Et(t){if(!Ct(t))return!1;var e=lt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function $t(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Ct(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Mt(t){return null!=t&&"object"==typeof t}var Pt=b?function(t){return function(e){return t(e)}}(b):function(t){return Mt(t)&&$t(t.length)&&!!l[lt(t)]};function zt(t){return null!=(e=t)&&$t(e.length)&&!Et(e)?at(t):ft(t);var e}n.exports=function(t,e){return ht(t,e)}}).call(this,n(143),n(515)(t))},3451:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.editorOptions=["minLines","maxLines","readOnly","highlightActiveLine","tabSize","enableBasicAutocompletion","enableLiveAutocompletion","enableSnippets"],e.editorEvents=["onChange","onFocus","onInput","onBlur","onCopy","onPaste","onSelectionChange","onCursorChange","onScroll","handleOptions","updateRef"]},4282:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=h(n(1123)),s=n(0),a=h(s),u=h(n(2)),l=h(n(3450)),c=n(3451);function h(t){return t&&t.__esModule?t:{default:t}}var d=i.default.acequire("ace/range").Range,f=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return c.editorEvents.forEach((function(t){n[t]=n[t].bind(n)})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.className,o=e.onBeforeLoad,r=e.onValidate,s=e.mode,a=e.focus,u=e.theme,l=e.fontSize,h=e.value,d=e.defaultValue,f=e.cursorStart,p=e.showGutter,g=e.wrapEnabled,y=e.showPrintMargin,v=e.scrollMargin,b=void 0===v?[0,0,0,0]:v,m=e.keyboardHandler,_=e.onLoad,S=e.commands,w=e.annotations,O=e.markers;this.editor=i.default.edit(this.refEditor),o&&o(i.default);for(var k=Object.keys(this.props.editorProps),j=0;j<k.length;j++)this.editor[k[j]]=this.props.editorProps[k[j]];this.props.debounceChangePeriod&&(this.onChange=this.debounce(this.onChange,this.props.debounceChangePeriod)),this.editor.renderer.setScrollMargin(b[0],b[1],b[2],b[3]),this.editor.getSession().setMode("ace/mode/"+s),this.editor.setTheme("ace/theme/"+u),this.editor.setFontSize(l),this.editor.getSession().setValue(d||h,f),this.editor.navigateFileEnd(),this.editor.renderer.setShowGutter(p),this.editor.getSession().setUseWrapMode(g),this.editor.setShowPrintMargin(y),this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("copy",this.onCopy),this.editor.on("paste",this.onPaste),this.editor.on("change",this.onChange),this.editor.on("input",this.onInput),this.editor.getSession().selection.on("changeSelection",this.onSelectionChange),this.editor.getSession().selection.on("changeCursor",this.onCursorChange),r&&this.editor.getSession().on("changeAnnotation",(function(){var e=t.editor.getSession().getAnnotations();t.props.onValidate(e)})),this.editor.session.on("changeScrollTop",this.onScroll),this.editor.getSession().setAnnotations(w||[]),O&&O.length>0&&this.handleMarkers(O);for(var E=this.editor.$options,$=0;$<c.editorOptions.length;$++){var C=c.editorOptions[$];E.hasOwnProperty(C)?this.editor.setOption(C,this.props[C]):this.props[C]&&console.warn("ReaceAce: editor option "+C+" was activated but not found. Did you need to import a related tool or did you possibly mispell the option?")}this.handleOptions(this.props),Array.isArray(S)&&S.forEach((function(e){"string"==typeof e.exec?t.editor.commands.bindKey(e.bindKey,e.exec):t.editor.commands.addCommand(e)})),m&&this.editor.setKeyboardHandler("ace/keyboard/"+m),n&&(this.refEditor.className+=" "+n),a&&this.editor.focus(),_&&_(this.editor),this.editor.resize()}},{key:"debounce",value:function(t,e){var n=null;return function(){var o=this,r=arguments;clearTimeout(n),n=setTimeout((function(){t.apply(o,r)}),e)}}},{key:"componentWillReceiveProps",value:function(t){for(var e=this.props,n=0;n<c.editorOptions.length;n++){var o=c.editorOptions[n];t[o]!==e[o]&&this.editor.setOption(o,t[o])}if(t.className!==e.className){var r=this.refEditor.className.trim().split(" ");e.className.trim().split(" ").forEach((function(t){var e=r.indexOf(t);r.splice(e,1)})),this.refEditor.className=" "+t.className+" "+r.join(" ")}if(t.mode!==e.mode&&this.editor.getSession().setMode("ace/mode/"+t.mode),t.theme!==e.theme&&this.editor.setTheme("ace/theme/"+t.theme),t.keyboardHandler!==e.keyboardHandler&&(t.keyboardHandler?this.editor.setKeyboardHandler("ace/keyboard/"+t.keyboardHandler):this.editor.setKeyboardHandler(null)),t.fontSize!==e.fontSize&&this.editor.setFontSize(t.fontSize),t.wrapEnabled!==e.wrapEnabled&&this.editor.getSession().setUseWrapMode(t.wrapEnabled),t.showPrintMargin!==e.showPrintMargin&&this.editor.setShowPrintMargin(t.showPrintMargin),t.showGutter!==e.showGutter&&this.editor.renderer.setShowGutter(t.showGutter),(0,l.default)(t.setOptions,e.setOptions)||this.handleOptions(t),(0,l.default)(t.annotations,e.annotations)||this.editor.getSession().setAnnotations(t.annotations||[]),!(0,l.default)(t.markers,e.markers)&&Array.isArray(t.markers)&&this.handleMarkers(t.markers),(0,l.default)(t.scrollMargin,e.scrollMargin)||this.handleScrollMargins(t.scrollMargin),this.editor&&this.editor.getValue()!==t.value){this.silent=!0;var i=this.editor.session.selection.toJSON();this.editor.setValue(t.value,t.cursorStart),this.editor.session.selection.fromJSON(i),this.silent=!1}t.focus&&!e.focus&&this.editor.focus()}},{key:"componentDidUpdate",value:function(t){t.height===this.props.height&&t.width===this.props.width||this.editor.resize()}},{key:"handleScrollMargins",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0,0];this.editor.renderer.setScrollMargins(t[0],t[1],t[2],t[3])}},{key:"componentWillUnmount",value:function(){this.editor.destroy(),this.editor=null}},{key:"onChange",value:function(t){if(this.props.onChange&&!this.silent){var e=this.editor.getValue();this.props.onChange(e,t)}}},{key:"onSelectionChange",value:function(t){if(this.props.onSelectionChange){var e=this.editor.getSelection();this.props.onSelectionChange(e,t)}}},{key:"onCursorChange",value:function(t){if(this.props.onCursorChange){var e=this.editor.getSelection();this.props.onCursorChange(e,t)}}},{key:"onInput",value:function(t){this.props.onInput&&this.props.onInput(t)}},{key:"onFocus",value:function(t){this.props.onFocus&&this.props.onFocus(t)}},{key:"onBlur",value:function(t){this.props.onBlur&&this.props.onBlur(t,this.editor)}},{key:"onCopy",value:function(t){this.props.onCopy&&this.props.onCopy(t)}},{key:"onPaste",value:function(t){this.props.onPaste&&this.props.onPaste(t)}},{key:"onScroll",value:function(){this.props.onScroll&&this.props.onScroll(this.editor)}},{key:"handleOptions",value:function(t){for(var e=Object.keys(t.setOptions),n=0;n<e.length;n++)this.editor.setOption(e[n],t.setOptions[e[n]])}},{key:"handleMarkers",value:function(t){var e=this,n=this.editor.getSession().getMarkers(!0);for(var o in n)n.hasOwnProperty(o)&&this.editor.getSession().removeMarker(n[o].id);for(var r in n=this.editor.getSession().getMarkers(!1))n.hasOwnProperty(r)&&this.editor.getSession().removeMarker(n[r].id);t.forEach((function(t){var n=t.startRow,o=t.startCol,r=t.endRow,i=t.endCol,s=t.className,a=t.type,u=t.inFront,l=void 0!==u&&u,c=new d(n,o,r,i);e.editor.getSession().addMarker(c,s,a,l)}))}},{key:"updateRef",value:function(t){this.refEditor=t}},{key:"render",value:function(){var t=this.props,e=t.name,n=t.width,r=t.height,i=t.style,s=o({width:n,height:r},i);return a.default.createElement("div",{ref:this.updateRef,id:e,style:s})}}]),e}(s.Component);e.default=f,f.propTypes={mode:u.default.string,focus:u.default.bool,theme:u.default.string,name:u.default.string,className:u.default.string,height:u.default.string,width:u.default.string,fontSize:u.default.oneOfType([u.default.number,u.default.string]),showGutter:u.default.bool,onChange:u.default.func,onCopy:u.default.func,onPaste:u.default.func,onFocus:u.default.func,onInput:u.default.func,onBlur:u.default.func,onScroll:u.default.func,value:u.default.string,defaultValue:u.default.string,onLoad:u.default.func,onSelectionChange:u.default.func,onCursorChange:u.default.func,onBeforeLoad:u.default.func,onValidate:u.default.func,minLines:u.default.number,maxLines:u.default.number,readOnly:u.default.bool,highlightActiveLine:u.default.bool,tabSize:u.default.number,showPrintMargin:u.default.bool,cursorStart:u.default.number,debounceChangePeriod:u.default.number,editorProps:u.default.object,setOptions:u.default.object,style:u.default.object,scrollMargin:u.default.array,annotations:u.default.array,markers:u.default.array,keyboardHandler:u.default.string,wrapEnabled:u.default.bool,enableBasicAutocompletion:u.default.oneOfType([u.default.bool,u.default.array]),enableLiveAutocompletion:u.default.oneOfType([u.default.bool,u.default.array]),commands:u.default.array},f.defaultProps={name:"brace-editor",focus:!1,mode:"",theme:"",height:"500px",width:"500px",value:"",fontSize:12,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1}},4283:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(1123),s=f(i),a=n(0),u=f(a),l=f(n(2)),c=f(n(3450)),h=f(n(2897)),d=n(3451);function f(t){return t&&t.__esModule?t:{default:t}}n(4284);var p=s.default.acequire("ace/range").Range,g=s.default.acequire("ace/split").Split,y=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return d.editorEvents.forEach((function(t){n[t]=n[t].bind(n)})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.className,o=e.onBeforeLoad,r=e.mode,a=e.focus,u=e.theme,l=e.fontSize,c=e.value,f=e.defaultValue,p=e.cursorStart,y=e.showGutter,v=e.wrapEnabled,b=e.showPrintMargin,m=e.scrollMargin,_=void 0===m?[0,0,0,0]:m,S=e.keyboardHandler,w=e.onLoad,O=e.commands,k=e.annotations,j=e.markers,E=e.splits;this.editor=s.default.edit(this.refEditor),o&&o(s.default);var $=Object.keys(this.props.editorProps),C=new g(this.editor.container,"ace/theme/"+u,E);this.editor.env.split=C,this.splitEditor=C.getEditor(0),this.split=C,this.editor.setShowPrintMargin(!1),this.editor.renderer.setShowGutter(!1);var M=this.splitEditor.$options;C.forEach((function(e,n){for(var o=0;o<$.length;o++)e[$[o]]=t.props.editorProps[$[o]];var s=(0,h.default)(f,n),a=(0,h.default)(c,n,"");e.session.setUndoManager(new i.UndoManager),e.setTheme("ace/theme/"+u),e.renderer.setScrollMargin(_[0],_[1],_[2],_[3]),e.getSession().setMode("ace/mode/"+r),e.setFontSize(l),e.renderer.setShowGutter(y),e.getSession().setUseWrapMode(v),e.setShowPrintMargin(b),e.on("focus",t.onFocus),e.on("blur",t.onBlur),e.on("input",t.onInput),e.on("copy",t.onCopy),e.on("paste",t.onPaste),e.on("change",t.onChange),e.getSession().selection.on("changeSelection",t.onSelectionChange),e.getSession().selection.on("changeCursor",t.onCursorChange),e.session.on("changeScrollTop",t.onScroll),e.setValue(void 0===s?a:s,p);var g=(0,h.default)(k,n,[]),m=(0,h.default)(j,n,[]);e.getSession().setAnnotations(g),m&&m.length>0&&t.handleMarkers(m,e);for(var w=0;w<d.editorOptions.length;w++){var E=d.editorOptions[w];M.hasOwnProperty(E)?e.setOption(E,t.props[E]):t.props[E]&&console.warn("ReaceAce: editor option "+E+" was activated but not found. Did you need to import a related tool or did you possibly mispell the option?")}t.handleOptions(t.props,e),Array.isArray(O)&&O.forEach((function(t){"string"==typeof t.exec?e.commands.bindKey(t.bindKey,t.exec):e.commands.addCommand(t)})),S&&e.setKeyboardHandler("ace/keyboard/"+S)})),n&&(this.refEditor.className+=" "+n),a&&this.splitEditor.focus();var P=this.editor.env.split;P.setOrientation("below"===this.props.orientation?P.BELOW:P.BESIDE),P.resize(!0),w&&w(P)}},{key:"componentWillReceiveProps",value:function(t){var e=this,n=this.props,o=this.editor.env.split;if(t.splits!==n.splits&&o.setSplits(t.splits),t.orientation!==n.orientation&&o.setOrientation("below"===t.orientation?o.BELOW:o.BESIDE),o.forEach((function(o,r){t.mode!==n.mode&&o.getSession().setMode("ace/mode/"+t.mode),t.keyboardHandler!==n.keyboardHandler&&(t.keyboardHandler?o.setKeyboardHandler("ace/keyboard/"+t.keyboardHandler):o.setKeyboardHandler(null)),t.fontSize!==n.fontSize&&o.setFontSize(t.fontSize),t.wrapEnabled!==n.wrapEnabled&&o.getSession().setUseWrapMode(t.wrapEnabled),t.showPrintMargin!==n.showPrintMargin&&o.setShowPrintMargin(t.showPrintMargin),t.showGutter!==n.showGutter&&o.renderer.setShowGutter(t.showGutter);for(var i=0;i<d.editorOptions.length;i++){var s=d.editorOptions[i];t[s]!==n[s]&&o.setOption(s,t[s])}(0,c.default)(t.setOptions,n.setOptions)||e.handleOptions(t,o);var a=(0,h.default)(t.value,r,"");if(o.getValue()!==a){e.silent=!0;var u=o.session.selection.toJSON();o.setValue(a,t.cursorStart),o.session.selection.fromJSON(u),e.silent=!1}var l=(0,h.default)(t.annotations,r,[]),f=(0,h.default)(n.annotations,r,[]);(0,c.default)(l,f)||o.getSession().setAnnotations(l);var p=(0,h.default)(t.markers,r,[]),g=(0,h.default)(n.markers,r,[]);!(0,c.default)(p,g)&&Array.isArray(p)&&e.handleMarkers(p,o)})),t.className!==n.className){var r=this.refEditor.className.trim().split(" ");n.className.trim().split(" ").forEach((function(t){var e=r.indexOf(t);r.splice(e,1)})),this.refEditor.className=" "+t.className+" "+r.join(" ")}t.theme!==n.theme&&o.setTheme("ace/theme/"+t.theme),t.focus&&!n.focus&&this.splitEditor.focus(),t.height===this.props.height&&t.width===this.props.width||this.editor.resize()}},{key:"componentWillUnmount",value:function(){this.editor.destroy(),this.editor=null}},{key:"onChange",value:function(t){if(this.props.onChange&&!this.silent){var e=[];this.editor.env.split.forEach((function(t){e.push(t.getValue())})),this.props.onChange(e,t)}}},{key:"onSelectionChange",value:function(t){if(this.props.onSelectionChange){var e=[];this.editor.env.split.forEach((function(t){e.push(t.getSelection())})),this.props.onSelectionChange(e,t)}}},{key:"onCursorChange",value:function(t){if(this.props.onCursorChange){var e=[];this.editor.env.split.forEach((function(t){e.push(t.getSelection())})),this.props.onCursorChange(e,t)}}},{key:"onFocus",value:function(t){this.props.onFocus&&this.props.onFocus(t)}},{key:"onInput",value:function(t){this.props.onInput&&this.props.onInput(t)}},{key:"onBlur",value:function(t){this.props.onBlur&&this.props.onBlur(t)}},{key:"onCopy",value:function(t){this.props.onCopy&&this.props.onCopy(t)}},{key:"onPaste",value:function(t){this.props.onPaste&&this.props.onPaste(t)}},{key:"onScroll",value:function(){this.props.onScroll&&this.props.onScroll(this.editor)}},{key:"handleOptions",value:function(t,e){for(var n=Object.keys(t.setOptions),o=0;o<n.length;o++)e.setOption(n[o],t.setOptions[n[o]])}},{key:"handleMarkers",value:function(t,e){var n=e.getSession().getMarkers(!0);for(var o in n)n.hasOwnProperty(o)&&e.getSession().removeMarker(n[o].id);for(var r in n=e.getSession().getMarkers(!1))n.hasOwnProperty(r)&&e.getSession().removeMarker(n[r].id);t.forEach((function(t){var n=t.startRow,o=t.startCol,r=t.endRow,i=t.endCol,s=t.className,a=t.type,u=t.inFront,l=void 0!==u&&u,c=new p(n,o,r,i);e.getSession().addMarker(c,s,a,l)}))}},{key:"updateRef",value:function(t){this.refEditor=t}},{key:"render",value:function(){var t=this.props,e=t.name,n=t.width,r=t.height,i=t.style,s=o({width:n,height:r},i);return u.default.createElement("div",{ref:this.updateRef,id:e,style:s})}}]),e}(a.Component);e.default=y,y.propTypes={mode:l.default.string,splits:l.default.number,orientation:l.default.string,focus:l.default.bool,theme:l.default.string,name:l.default.string,className:l.default.string,height:l.default.string,width:l.default.string,fontSize:l.default.oneOfType([l.default.number,l.default.string]),showGutter:l.default.bool,onChange:l.default.func,onCopy:l.default.func,onPaste:l.default.func,onFocus:l.default.func,onInput:l.default.func,onBlur:l.default.func,onScroll:l.default.func,value:l.default.arrayOf(l.default.string),defaultValue:l.default.arrayOf(l.default.string),onLoad:l.default.func,onSelectionChange:l.default.func,onCursorChange:l.default.func,onBeforeLoad:l.default.func,minLines:l.default.number,maxLines:l.default.number,readOnly:l.default.bool,highlightActiveLine:l.default.bool,tabSize:l.default.number,showPrintMargin:l.default.bool,cursorStart:l.default.number,editorProps:l.default.object,setOptions:l.default.object,style:l.default.object,scrollMargin:l.default.array,annotations:l.default.array,markers:l.default.array,keyboardHandler:l.default.string,wrapEnabled:l.default.bool,enableBasicAutocompletion:l.default.oneOfType([l.default.bool,l.default.array]),enableLiveAutocompletion:l.default.oneOfType([l.default.bool,l.default.array]),commands:l.default.array},y.defaultProps={name:"brace-editor",focus:!1,orientation:"beside",splits:2,mode:"",theme:"",height:"500px",width:"500px",value:[],fontSize:12,showGutter:!0,onChange:null,onPaste:null,onLoad:null,onScroll:null,minLines:null,maxLines:null,readOnly:!1,highlightActiveLine:!0,showPrintMargin:!0,tabSize:4,cursorStart:1,editorProps:{},style:{},scrollMargin:[0,0,0,0],setOptions:{},wrapEnabled:!1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!1}},4284:function(t,e){ace.define("ace/split",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/editor","ace/virtual_renderer","ace/edit_session"],(function(t,e,n){"use strict";var o=t("./lib/oop"),r=t("./lib/lang"),i=t("./lib/event_emitter").EventEmitter,s=t("./editor").Editor,a=t("./virtual_renderer").VirtualRenderer,u=t("./edit_session").EditSession,l=function(t,e,n){this.BELOW=1,this.BESIDE=0,this.$container=t,this.$theme=e,this.$splits=0,this.$editorCSS="",this.$editors=[],this.$orientation=this.BESIDE,this.setSplits(n||1),this.$cEditor=this.$editors[0],this.on("focus",function(t){this.$cEditor=t}.bind(this))};function c(t,e){this.$u=t,this.$doc=e}(function(){o.implement(this,i),this.$createEditor=function(){var t=document.createElement("div");t.className=this.$editorCSS,t.style.cssText="position: absolute; top:0px; bottom:0px",this.$container.appendChild(t);var e=new s(new a(t,this.$theme));return e.on("focus",function(){this._emit("focus",e)}.bind(this)),this.$editors.push(e),e.setFontSize(this.$fontSize),e},this.setSplits=function(t){var e;if(t<1)throw"The number of splits have to be > 0!";if(t!=this.$splits){if(t>this.$splits){for(;this.$splits<this.$editors.length&&this.$splits<t;)e=this.$editors[this.$splits],this.$container.appendChild(e.container),e.setFontSize(this.$fontSize),this.$splits++;for(;this.$splits<t;)this.$createEditor(),this.$splits++}else for(;this.$splits>t;)e=this.$editors[this.$splits-1],this.$container.removeChild(e.container),this.$splits--;this.resize()}},this.getSplits=function(){return this.$splits},this.getEditor=function(t){return this.$editors[t]},this.getCurrentEditor=function(){return this.$cEditor},this.focus=function(){this.$cEditor.focus()},this.blur=function(){this.$cEditor.blur()},this.setTheme=function(t){this.$editors.forEach((function(e){e.setTheme(t)}))},this.setKeyboardHandler=function(t){this.$editors.forEach((function(e){e.setKeyboardHandler(t)}))},this.forEach=function(t,e){this.$editors.forEach(t,e)},this.$fontSize="",this.setFontSize=function(t){this.$fontSize=t,this.forEach((function(e){e.setFontSize(t)}))},this.$cloneSession=function(t){var e=new u(t.getDocument(),t.getMode()),n=t.getUndoManager();if(n){var o=new c(n,e);e.setUndoManager(o)}return e.$informUndoManager=r.delayedCall((function(){e.$deltas=[]})),e.setTabSize(t.getTabSize()),e.setUseSoftTabs(t.getUseSoftTabs()),e.setOverwrite(t.getOverwrite()),e.setBreakpoints(t.getBreakpoints()),e.setUseWrapMode(t.getUseWrapMode()),e.setUseWorker(t.getUseWorker()),e.setWrapLimitRange(t.$wrapLimitRange.min,t.$wrapLimitRange.max),e.$foldData=t.$cloneFoldData(),e},this.setSession=function(t,e){var n;return n=null==e?this.$cEditor:this.$editors[e],this.$editors.some((function(e){return e.session===t}))&&(t=this.$cloneSession(t)),n.setSession(t),t},this.getOrientation=function(){return this.$orientation},this.setOrientation=function(t){this.$orientation!=t&&(this.$orientation=t,this.resize())},this.resize=function(){var t,e=this.$container.clientWidth,n=this.$container.clientHeight;if(this.$orientation==this.BESIDE)for(var o=e/this.$splits,r=0;r<this.$splits;r++)(t=this.$editors[r]).container.style.width=o+"px",t.container.style.top="0px",t.container.style.left=r*o+"px",t.container.style.height=n+"px",t.resize();else{var i=n/this.$splits;for(r=0;r<this.$splits;r++)(t=this.$editors[r]).container.style.width=e+"px",t.container.style.top=r*i+"px",t.container.style.left="0px",t.container.style.height=i+"px",t.resize()}}}).call(l.prototype),function(){this.execute=function(t){this.$u.execute(t)},this.undo=function(){var t=this.$u.undo(!0);t&&this.$doc.selection.setSelectionRange(t)},this.redo=function(){var t=this.$u.redo(!0);t&&this.$doc.selection.setSelectionRange(t)},this.reset=function(){this.$u.reset()},this.hasUndo=function(){return this.$u.hasUndo()},this.hasRedo=function(){return this.$u.hasRedo()}}.call(c.prototype),e.Split=l})),ace.define("ace/ext/split",["require","exports","module","ace/split"],(function(t,e,n){"use strict";n.exports=t("../split")})),ace.acequire(["ace/ext/split"],(function(){}))}}]);