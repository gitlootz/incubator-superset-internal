(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1029:function(e,t,o){"use strict";var n=o(7),s=o.n(n),a=(o(0),o(2)),l=o.n(a),i=o(9),r=o(559),c=o(87),h=o(72),p=o(1);const u={dataEndpoint:l.a.string.isRequired,multi:l.a.bool,mutator:l.a.func,onAsyncErrorMessage:l.a.string,onChange:l.a.func,placeholder:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number,l.a.arrayOf(l.a.string),l.a.arrayOf(l.a.number)]),addDangerToast:l.a.func.isRequired},d={multi:!0,onAsyncErrorMessage:Object(i.c)("Error while fetching data"),onChange:()=>{},placeholder:Object(i.c)("Select ...")},f=e=>{const{value:t,onChange:o,dataEndpoint:n,multi:a,mutator:l,placeholder:i,onAsyncErrorMessage:h}=e;return Object(p.f)("div",null,Object(p.f)(c.a,e),Object(p.f)(r.a,{dataEndpoint:n,onChange:e=>{let t;var n,l;a?t=null!=(n=null==e?void 0:s()(e).call(e,e=>e.value))?n:null:t=null!=(l=null==e?void 0:e.value)?l:null;o(t)},onAsyncError:t=>e.addDangerToast(h+": "+t),mutator:l,multi:a,value:t,placeholder:i,valueRenderer:e=>Object(p.f)("div",null,e.label)}))};f.propTypes=u,f.defaultProps=d,t.a=Object(h.a)(f)},1030:function(e,t,o){"use strict";o.d(t,"a",(function(){return O}));var n=o(6),s=o.n(n),a=o(287),l=o.n(a),i=o(0),r=o.n(i),c=o(2),h=o.n(c),p=o(674),u=o(652),d=o(9),f=o(29),g=o(177),b=o(175),C=o(87),m=o(1);const v={name:h.a.string,onChange:h.a.func,value:h.a.string,height:h.a.number,minLines:h.a.number,maxLines:h.a.number,offerEditInModal:h.a.bool,language:h.a.oneOf([null,"json","html","sql","markdown","javascript"]),aboveEditorSection:h.a.node,readOnly:h.a.bool};class O extends r.a.Component{constructor(){super(),this.onAceChangeDebounce=l()(e=>{this.onAceChange(e)},300)}onControlChange(e){this.props.onChange(e.target.value)}onAceChange(e){this.props.onChange(e)}renderEditor(e=!1){var t;const o=this.props.value||"",n=e?40:this.props.minLines||12;if(this.props.language){const t={border:"1px solid #CCC"};return this.props.readOnly&&(t.backgroundColor="#f2f2f2"),Object(m.f)(g.g,{mode:this.props.language,style:t,minLines:n,maxLines:e?1e3:this.props.maxLines,onChange:this.onAceChangeDebounce,width:"100%",height:n+"em",editorProps:{$blockScrolling:!0},value:o,readOnly:this.props.readOnly})}return Object(m.f)(p.a,{controlId:"formControlsTextarea"},Object(m.f)(u.a,{componentClass:"textarea",placeholder:Object(d.c)("textarea"),onChange:s()(t=this.onControlChange).call(t,this),value:o,disabled:this.props.readOnly,style:{height:this.props.height}}))}renderModalBody(){return Object(m.f)("div",null,Object(m.f)("div",null,this.props.aboveEditorSection),this.renderEditor(!0))}render(){const e=Object(m.f)(C.a,this.props);return Object(m.f)("div",null,e,this.renderEditor(),this.props.offerEditInModal&&Object(m.f)(b.a,{modalTitle:e,triggerNode:Object(m.f)(f.a,{buttonSize:"small",className:"m-t-5"},Object(d.c)("Edit")," ",Object(m.f)("strong",null,this.props.language)," ",Object(d.c)("in modal")),modalBody:this.renderModalBody(!0),responsive:!0}))}}O.propTypes=v,O.defaultProps={onChange:()=>{},value:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1}},1032:function(e,t,o){"use strict";o.d(t,"a",(function(){return x}));var n=o(6),s=o.n(n),a=o(0),l=o.n(a),i=o(2),r=o.n(i),c=o(1133),h=o(966),p=o(9),u=o(95),d=o(16).k,f=o(314),g=o(558),b=o(87),C=o(359),m=o(1);const v="latlong",O="delimited",j="geohash",y={onChange:r.a.func,value:r.a.object,animation:r.a.bool,choices:r.a.array};class x extends l.a.Component{constructor(e){var t,o,n;super(e);const a=e.value||{};let l;e.choices.length>0&&(l=e.choices[0][0]),this.state={type:a.type||v,delimiter:a.delimiter||",",latCol:a.latCol||l,lonCol:a.lonCol||l,lonlatCol:a.lonlatCol||l,reverseCheckbox:a.reverseCheckbox||!1,geohashCol:a.geohashCol||l,value:null,errors:[]},this.toggleCheckbox=s()(t=this.toggleCheckbox).call(t,this),this.onChange=s()(o=this.onChange).call(o,this),this.renderReverseCheckbox=s()(n=this.renderReverseCheckbox).call(n,this)}componentDidMount(){this.onChange()}onChange(){const{type:e}=this.state,t={type:e},o=[],n=Object(p.c)("Invalid lat/long configuration.");e===v?(t.latCol=this.state.latCol,t.lonCol=this.state.lonCol,t.lonCol&&t.latCol||o.push(n)):e===O?(t.lonlatCol=this.state.lonlatCol,t.delimiter=this.state.delimiter,t.reverseCheckbox=this.state.reverseCheckbox,t.lonlatCol&&t.delimiter||o.push(n)):e===j&&(t.geohashCol=this.state.geohashCol,t.reverseCheckbox=this.state.reverseCheckbox,t.geohashCol||o.push(n)),this.setState({value:t,errors:o}),this.props.onChange(t,o)}setType(e){this.setState({type:e},this.onChange)}toggleCheckbox(){this.setState(e=>({reverseCheckbox:!e.reverseCheckbox}),this.onChange)}renderLabelContent(){return this.state.errors.length>0?"N/A":this.state.type===v?this.state.lonCol+" | "+this.state.latCol:this.state.type===O?""+this.state.lonlatCol:this.state.type===j?""+this.state.geohashCol:null}renderSelect(e,t){return Object(m.f)(C.a,{name:e,choices:this.props.choices,value:this.state[e],clearable:!1,onFocus:()=>{this.setType(t)},onChange:t=>{this.setState({[e]:t},this.onChange)}})}renderReverseCheckbox(){return Object(m.f)("span",null,Object(p.c)("Reverse lat/long "),Object(m.f)(g.a,{checked:this.state.reverseCheckbox,onChange:this.toggleCheckbox}))}renderPopoverContent(){var e,t,o;return Object(m.f)("div",{style:{width:"300px"}},Object(m.f)(f.a,{title:Object(p.c)("Longitude & Latitude columns"),isSelected:this.state.type===v,onSelect:s()(e=this.setType).call(e,this,v)},Object(m.f)(c.a,null,Object(m.f)(h.a,{md:6},"Longitude",this.renderSelect("lonCol",v)),Object(m.f)(h.a,{md:6},"Latitude",this.renderSelect("latCol",v)))),Object(m.f)(f.a,{title:Object(p.c)("Delimited long & lat single column"),info:Object(p.c)("Multiple formats accepted, look the geopy.points Python library for more details"),isSelected:this.state.type===O,onSelect:s()(t=this.setType).call(t,this,O)},Object(m.f)(c.a,null,Object(m.f)(h.a,{md:6},Object(p.c)("Column"),this.renderSelect("lonlatCol",O)),Object(m.f)(h.a,{md:6},this.renderReverseCheckbox()))),Object(m.f)(f.a,{title:Object(p.c)("Geohash"),isSelected:this.state.type===j,onSelect:s()(o=this.setType).call(o,this,j)},Object(m.f)(c.a,null,Object(m.f)(h.a,{md:6},"Column",this.renderSelect("geohashCol",j)),Object(m.f)(h.a,{md:6},this.renderReverseCheckbox()))))}render(){return Object(m.f)("div",null,Object(m.f)(b.a,this.props),Object(m.f)(d,{content:this.renderPopoverContent(),placement:"topLeft",trigger:"click"},Object(m.f)(u.a,{className:"pointer"},this.renderLabelContent())))}}x.propTypes=y,x.defaultProps={onChange:()=>{},animation:!0,choices:[]}},175:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o(6),s=o.n(n),a=o(0),l=o.n(a),i=o(2),r=o.n(i),c=o(89),h=o(29),p=o(1);const u={dialogClassName:r.a.string,triggerNode:r.a.node.isRequired,modalTitle:r.a.node,modalBody:r.a.node,modalFooter:r.a.node,beforeOpen:r.a.func,onExit:r.a.func,isButton:r.a.bool,className:r.a.string,tooltip:r.a.string,width:r.a.string,maxWidth:r.a.string,responsive:r.a.bool};class d extends l.a.Component{constructor(e){var t,o;super(e),this.state={showModal:!1},this.open=s()(t=this.open).call(t,this),this.close=s()(o=this.close).call(o,this)}close(){this.setState(()=>({showModal:!1}))}open(e){e.preventDefault(),this.props.beforeOpen(),this.setState(()=>({showModal:!0}))}renderModal(){return Object(p.f)(c.a,{wrapClassName:this.props.dialogClassName,className:this.props.className,show:this.state.showModal,onHide:this.close,afterClose:this.props.onExit,title:this.props.modalTitle,footer:this.props.modalFooter,hideFooter:!this.props.modalFooter,width:this.props.width,maxWidth:this.props.maxWidth,responsive:this.props.responsive},this.props.modalBody)}render(){return this.props.isButton?Object(p.f)(l.a.Fragment,null,Object(p.f)(h.a,{className:"modal-trigger",tooltip:this.props.tooltip,onClick:this.open},this.props.triggerNode),this.renderModal()):Object(p.f)(l.a.Fragment,null,Object(p.f)("span",{onClick:this.open,role:"button"},this.props.triggerNode),this.renderModal())}}d.propTypes=u,d.defaultProps={beforeOpen:()=>{},onExit:()=>{},isButton:!1,className:"",modalTitle:""}},314:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o(0);var n=o(2),s=o.n(n),a=o(148),l=o(1);const i={title:s.a.string.isRequired,isSelected:s.a.bool.isRequired,onSelect:s.a.func.isRequired,info:s.a.string,children:s.a.node.isRequired};function r({title:e,isSelected:t,children:o,onSelect:n,info:s}){return Object(l.f)("div",{className:"PopoverSection "+(t?"":"dimmed")},Object(l.f)("div",{role:"button",tabIndex:0,onClick:n,className:"pointer"},Object(l.f)("strong",null,e),"  ",s&&Object(l.f)(a.a,{tooltip:s,label:"date-free-tooltip"})," ",Object(l.f)("i",{className:t?"fa fa-check text-primary":""})),Object(l.f)("div",{className:"m-t-5 m-l-5"},o))}r.propTypes=i},358:function(e,t,o){"use strict";o.d(t,"a",(function(){return C}));o(1028),o(173),o(1140);var n=o(156),s=o.n(n),a=o(566),l=o.n(a),i=o(6),r=o.n(i),c=o(0),h=o.n(c),p=o(674),u=o(652),d=o(1099),f=o(785),g=o(87),b=o(1);class C extends h.a.Component{constructor(e){var t,o;super(e),this.onChange=r()(t=this.onChange).call(t,this),this.state={controlId:(o=e.controlId,"formInlineName_"+(null!=o?o:(1e6*Math.random()).toFixed()))}}onChange(e){var t,o;let{value:n}=e.target;const a=[];if(""!==n&&this.props.isFloat){const e=Object(d.a)(n);e?a.push(e):n=n.match(/.*([.0])$/g)?n:l()(n)}if(""!==n&&this.props.isInt){const e=Object(f.a)(n);e?a.push(e):n=s()(n,10)}null===(t=(o=this.props).onChange)||void 0===t||t.call(o,n,a)}render(){const{value:e}=this.props,t=null!=e?e.toString():"";return Object(b.f)("div",null,Object(b.f)(g.a,this.props),Object(b.f)(p.a,{controlId:this.state.controlId,bsSize:"small"},Object(b.f)(u.a,{type:"text",placeholder:this.props.placeholder,onChange:this.onChange,onFocus:this.props.onFocus,value:t,disabled:this.props.disabled})))}}},359:function(e,t,o){"use strict";o.d(t,"a",(function(){return P}));o(42);var n=o(22),s=o.n(n),a=o(364),l=o.n(a),i=o(4),r=o.n(i),c=o(102),h=o.n(c),p=o(1202),u=o.n(p),d=o(53),f=o.n(d),g=o(25),b=o.n(g),C=o(7),m=o.n(C),v=o(19),O=o.n(v),j=o(6),y=o.n(j),x=o(0),w=o.n(x),S=o(2),k=o.n(S),R=o(9),M=o(57),T=o(87),A=o(1);const F={autoFocus:k.a.bool,choices:k.a.array,clearable:k.a.bool,description:k.a.string,disabled:k.a.bool,freeForm:k.a.bool,isLoading:k.a.bool,label:k.a.string,multi:k.a.bool,isMulti:k.a.bool,allowAll:k.a.bool,name:k.a.string.isRequired,onChange:k.a.func,onFocus:k.a.func,value:k.a.oneOfType([k.a.string,k.a.number,k.a.array]),showHeader:k.a.bool,optionRenderer:k.a.func,valueRenderer:k.a.func,valueKey:k.a.string,options:k.a.array,placeholder:k.a.string,noResultsText:k.a.string,selectRef:k.a.func,filterOption:k.a.func,promptTextCreator:k.a.func,commaChoosesOption:k.a.bool,menuPortalTarget:k.a.element,menuPosition:k.a.string,menuPlacement:k.a.string},L={autoFocus:!1,choices:[],clearable:!0,description:null,disabled:!1,freeForm:!1,isLoading:!1,label:null,multi:!1,onChange:()=>{},onFocus:()=>{},showHeader:!0,valueKey:"value",noResultsText:Object(R.c)("No results found"),promptTextCreator:e=>"Create Option "+e,commaChoosesOption:!0,allowAll:!1};class P extends w.a.PureComponent{constructor(e){var t,o,n,s;super(e),this.state={options:this.getOptions(e)},this.onChange=y()(t=this.onChange).call(t,this),this.createMetaSelectAllOption=y()(o=this.createMetaSelectAllOption).call(o,this),this.select=null,this.getSelectRef=y()(n=this.getSelectRef).call(n,this),this.handleKeyDownForCreate=y()(s=this.handleKeyDownForCreate).call(s,this)}UNSAFE_componentWillReceiveProps(e){if(e.choices!==this.props.choices||e.options!==this.props.options){const t=this.getOptions(e);this.setState({options:t})}}onChange(e){let t=null;if(e)if(this.props.multi)t=[],O()(e).call(e,e=>{var o,n;!0!==e.meta?t.push(e[this.props.valueKey]||e):t=m()(o=b()(n=this.getOptions(this.props)).call(n,e=>!e.meta)).call(o,e=>e[this.props.valueKey])});else{if(!0===e.meta)return;t=e[this.props.valueKey]}this.props.onChange(t)}getSelectRef(e){this.select=e,this.props.selectRef&&this.props.selectRef(e)}getOptions(e){let t=[];var o;if(e.options)t=m()(o=e.options).call(o,e=>e);else if(e.choices){var n;t=m()(n=e.choices).call(n,t=>{if(f()(t)){const[o,n]=t.length>1?t:[t[0],t[0]];return{label:n,[e.valueKey]:o}}return u()(t)?t:{label:t,[e.valueKey]:t}})}if(e.freeForm&&e.value){const o=new h.a(m()(t).call(t,t=>t[e.valueKey])),n=f()(e.value)?e.value:[e.value];O()(n).call(n,n=>{o.has(n)||t.unshift({label:n,[e.valueKey]:n})})}return!0===e.allowAll&&!0===e.multi?this.optionsIncludesSelectAll(t)||t.unshift(this.createMetaSelectAllOption()):t=b()(t).call(t,e=>!this.isMetaSelectAllOption(e)),t}handleKeyDownForCreate(e){const{key:t}=e;("Tab"===t||this.props.commaChoosesOption&&","===t)&&this.select&&this.select.onKeyDown(r()({},e,{key:"Enter"}))}isMetaSelectAllOption(e){return e.meta&&!0===e.meta&&"Select All"===e.label}optionsIncludesSelectAll(e){return l()(e).call(e,e=>this.isMetaSelectAllOption(e))>=0}optionsRemaining(){const{options:e}=this.state,{value:t}=this.props;let o=f()(t)?e.length-t.length:e.length;return this.optionsIncludesSelectAll(e)&&(o-=1),o}createPlaceholder(){const e=this.optionsRemaining(),t=this.props.placeholder||Object(R.c)("%s option(s)",e);return e?t:""}createMetaSelectAllOption(){const e={label:"Select All",meta:!0};return e[this.props.valueKey]="Select All",e}render(){const{autoFocus:e,clearable:t,disabled:o,filterOption:n,isLoading:a,menuPlacement:l,menuPortalTarget:i,menuPosition:r,name:c,noResultsText:h,onFocus:p,optionRenderer:u,promptTextCreator:d,value:f,valueKey:g,valueRenderer:b}=this.props,C=this.createPlaceholder(),m=this.props.isMulti||this.props.multi,v={autoFocus:e,clearable:t,disabled:o,filterOption:n,ignoreAccents:!1,isLoading:a,isMulti:m,labelKey:"label",menuPlacement:l,menuPortalTarget:i,menuPosition:r,name:"select-"+c,noResultsText:h,onChange:this.onChange,onFocus:p,optionRenderer:u,options:this.state.options,placeholder:C,promptTextCreator:d,selectRef:this.getSelectRef,value:f,valueKey:g,valueRenderer:b};let O;return this.props.freeForm?(O=M.c,v.onKeyDown=this.handleKeyDownForCreate):O=M.f,Object(A.f)("div",null,this.props.showHeader&&Object(A.f)(T.a,this.props),m?Object(A.f)(M.d,s()({},v,{selectWrap:O})):Object(A.f)(O,v))}}P.propTypes=F,P.defaultProps=L},361:function(e,t,o){"use strict";o.d(t,"a",(function(){return b}));var n=o(22),s=o.n(n),a=o(6),l=o.n(a),i=o(0),r=o.n(i),c=o(2),h=o.n(c),p=o(87),u=o(558),d=o(1);const f={value:h.a.bool,label:h.a.string,onChange:h.a.func},g={paddingRight:"5px"};class b extends r.a.Component{onChange(){this.props.onChange(!this.props.value)}renderCheckbox(){var e;return Object(d.f)(u.a,{onChange:l()(e=this.onChange).call(e,this),style:g,checked:!!this.props.value})}render(){var e;return this.props.label?Object(d.f)(p.a,s()({},this.props,{leftNode:this.renderCheckbox(),onClick:l()(e=this.onChange).call(e,this)})):this.renderCheckbox()}}b.propTypes=f,b.defaultProps={value:!1,onChange:()=>{}}},409:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return l}));o(0);var n=o(1);const s=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:"#20A7C9"}),Object(n.f)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"})),a=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#999999"}),Object(n.f)("path",{d:"M14 10H4V8H14V10Z",fill:"white"})),l=()=>Object(n.f)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.f)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#CCCCCC"}),Object(n.f)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"}))},558:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var n=o(8),s=o.n(n),a=(o(0),o(52)),l=o(409),i=o(1);function r(){const e=s()(["\n  &,\n  & svg {\n    vertical-align: top;\n  }\n"]);return r=function(){return e},e}const c=a.a.span(r());function h({checked:e,onChange:t,style:o}){return Object(i.f)(c,{style:o,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox"},e?Object(i.f)(l.a,null):Object(i.f)(l.c,null))}}}]);