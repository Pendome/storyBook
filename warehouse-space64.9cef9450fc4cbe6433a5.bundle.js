(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1569:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1602);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1601:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTitle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1569);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTitle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},1602:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(270),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(684),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(1603);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);exports.push([module.i,"\n.task-title-wrap {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\n}\n.task-title-wrap input {\r\n  background: #fff;\r\n  border:none;\r\n  font-size: 14px;\r\n  padding-left: 10px;\n}\n.title {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  font-size: 12px;\r\n  height: 50px;\r\n  line-height: 50px;\n}\n.task-drag-box {\r\n  cursor: pointer;\r\n  width: 14px;\r\n  height: 14px;\r\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\r\n  background-size: cover;\r\n  margin-right: 10px;\n}\n.task-total {\r\n  font-size: 12px;\r\n  color: rgba(25,24,67,0.40);\n}\r\n",""]),module.exports=exports},1603:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/icno_arrow_drag@2x.8db8d779.png"},687:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(29),__webpack_require__(9),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(23),__webpack_require__(37);var defineProperty=__webpack_require__(12),vuex_esm=__webpack_require__(193);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var task_taskTitlevue_type_script_lang_js_={name:"",props:{itemData:{type:Object,default:function _default(){return{}}}},data:function data(){return{inputTitle:this.itemData.title,isEdit:!1}},computed:{total:function total(){return this.itemData.project_task.length}},methods:_objectSpread(_objectSpread({},Object(vuex_esm.b)("task/task",["editChecklist"])),{},{editTitle:function editTitle(){var _this=this;this.isEdit=!0,this.$nextTick((function(){_this.$refs.inputs.focus()}))},change:function change(){var _this2=this;this.isEdit=!1,this.editChecklist({task_list_id:this.itemData.task_list_id,title:this.inputTitle}).then((function(){_this2.itemData.title=_this2.inputTitle})).catch((function(){_this2.inputTitle=_this2.itemData.title}))},blur:function blur(){this.isEdit=!1}})},componentNormalizer=(__webpack_require__(1601),__webpack_require__(96)),component=Object(componentNormalizer.a)(task_taskTitlevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"task-title-wrap"},[_c("div",{staticClass:"task-drag-box"}),_vm._v(" "),_vm.isEdit?_c("div",{staticClass:"title"},[_c("el-input",{ref:"inputs",attrs:{size:"small"},on:{blur:_vm.blur,change:_vm.change},model:{value:_vm.inputTitle,callback:function($$v){_vm.inputTitle=$$v},expression:"inputTitle"}})],1):_c("div",{staticClass:"title",on:{click:_vm.editTitle}},[_vm._v(_vm._s(_vm.itemData.title))]),_vm._v(" "),_c("div",{staticClass:"task-total"},[_vm._v("任务数 "+_vm._s(_vm.total))])])}),[],!1,null,null,null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=warehouse-space64.9cef9450fc4cbe6433a5.bundle.js.map