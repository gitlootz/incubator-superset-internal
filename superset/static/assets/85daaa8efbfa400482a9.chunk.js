(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{4326:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var i=e(3439);function a(t){const{formData:n,queryData:e,width:a,height:u}=t,{allColumnsX:o,entity:r,minLeafNodeEventCount:s}=n,{data:d}=e;if(d&&d.length>0){const t=r,n=o,e={[i.ENTITY_ID]:n=>String(n[t]),[i.EVENT_NAME]:t=>t[n],[i.TS]:t=>t.__timestamp||0===t.__timestamp?new Date(t.__timestamp):null};return{data:Object(i.cleanEvents)(d,e),height:u,initialMinEventCount:s,width:a}}return{data:null,height:u,width:a}}}}]);