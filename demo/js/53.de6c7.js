webpackJsonp([53],{728:function(t,r,e){var s=e(0)(e(805),e(896),null,null);t.exports=s.exports},805:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{percent:0,numerator:0}},methods:{add:function(){if(this.percent>=100)return!1;this.percent+=10},minus:function(){if(this.percent<=0)return!1;this.percent-=10},addnumerator:function(){if(this.numerator>=100)return!1;this.numerator+=10},minusnumerator:function(){if(this.numerator<=0)return!1;this.numerator-=10}}}},896:function(t,r,e){"use strict";t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",[t._v("Progress组件")]),t._v(" "),e("h2",[t._v("基本用法")]),t._v(" "),e("h-progress",{attrs:{percent:25,status:"success","hide-info":""}}),t._v(" "),e("h-progress",{attrs:{percent:25,status:"success"}}),t._v(" "),e("h-progress",{attrs:{percent:45,status:"active"}}),t._v(" "),e("h-progress",{attrs:{percent:65,status:"wrong"}}),t._v(" "),e("h-progress",{attrs:{percent:100}}),t._v(" "),e("h-progress",{attrs:{percent:25,"hide-info":""}}),t._v(" "),e("h3",[t._v("分子分母")]),t._v(" "),e("h-progress",{attrs:{numerator:"25",denominator:"100",showType:"fraction",status:"success","hide-info":""}}),t._v(" "),e("h-progress",{attrs:{numerator:"25",denominator:"100",showType:"fraction",status:"success"}}),t._v(" "),e("h-progress",{attrs:{numerator:"45",denominator:"100",showType:"fraction",status:"active"}}),t._v(" "),e("h-progress",{attrs:{numerator:"65",denominator:"100",showType:"fraction",status:"wrong"}}),t._v(" "),e("h-progress",{attrs:{numerator:"100",denominator:"100",showType:"fraction"}}),t._v(" "),e("h-progress",{attrs:{numerator:"25",denominator:"100",showType:"fraction","hide-info":""}}),t._v(" "),e("h2",[t._v("配合外部组件使用")]),t._v(" "),e("h-progress",{attrs:{percent:t.percent}}),t._v(" "),e("h-button-group",{attrs:{size:"large"}},[e("h-button",{on:{click:t.add}},[t._v("+")]),t._v(" "),e("h-button",{on:{click:t.minus}},[t._v("-")])],1),t._v(" "),e("h2",[t._v("配合外部组件使用-分子分母")]),t._v(" "),e("h-progress",{attrs:{numerator:t.numerator,denominator:100,showType:"fraction"}}),t._v(" "),e("h-button-group",{attrs:{size:"large"}},[e("h-button",{on:{click:t.addnumerator}},[t._v("+")]),t._v(" "),e("h-button",{on:{click:t.minusnumerator}},[t._v("-")])],1),t._v(" "),e("h2",[t._v("自定义样式")]),t._v(" "),e("h-progress",{attrs:{percent:25,"stroke-width":5}}),t._v(" "),e("h-progress",{attrs:{percent:100}},[e("h-icon",{attrs:{name:"right"}}),t._v(" "),e("span",[t._v("成功")])],1),t._v(" "),e("h1",[t._v("垂直")]),t._v(" "),e("div",{staticStyle:{height:"100px"}},[e("h-progress",{attrs:{vertical:"",percent:25}}),t._v(" "),e("h-progress",{attrs:{vertical:"",percent:45,status:"active"}}),t._v(" "),e("h-progress",{attrs:{vertical:"",percent:65,status:"wrong"}}),t._v(" "),e("h-progress",{attrs:{vertical:"",percent:100}}),t._v(" "),e("h-progress",{attrs:{vertical:"",percent:25,"hide-info":""}})],1),t._v(" "),e("h1",[t._v("分子分母")]),t._v(" "),e("h-progress",{attrs:{numerator:"12",denominator:"100",showType:"fraction"}}),t._v(" "),e("h-progress",{attrs:{numerator:"45",denominator:"100",showType:"fraction",status:"active"}}),t._v(" "),e("h-progress",{attrs:{numerator:"65",denominator:"100",showType:"fraction",status:"wrong"}}),t._v(" "),e("h-progress",{attrs:{numerator:"100",denominator:"100",showType:"fraction"}}),t._v(" "),e("h-progress",{attrs:{numerator:"25",denominator:"100",showType:"fraction","hide-info":""}})],1)},staticRenderFns:[]}}});