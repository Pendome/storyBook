(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1548:function(module,exports,__webpack_require__){var dP=__webpack_require__(129).f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/;"name"in FProto||__webpack_require__(97)&&dP(FProto,"name",{configurable:!0,get:function(){try{return(""+this).match(nameRE)[1]}catch(e){return""}}})},1555:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1580);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1579:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1555);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},1580:function(module,exports,__webpack_require__){(exports=__webpack_require__(270)(!1)).push([module.i,"\n.submit-box {\n  padding: 15px;\n  text-align: center;\n}\n",""]),module.exports=exports},682:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(29),__webpack_require__(9),__webpack_require__(103),__webpack_require__(80),__webpack_require__(403),__webpack_require__(158),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(23),__webpack_require__(37);var defineProperty=__webpack_require__(12),department=(__webpack_require__(1548),__webpack_require__(200)),vuex_esm=__webpack_require__(193);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var project_addvue_type_script_lang_js_={name:"",props:{editData:{type:Object,default:function _default(){return{}}},department:{type:Array,default:function _default(){return[]}}},data:function data(){return{form:{title:"",type:0,content:"",member:[],project_depart_id:""},rules:{title:[{required:!0,trigger:"blur",message:"项目标题不能为空"},{max:140,trigger:"change",message:"项目标题不能超过140个字符"}],project_depart_id:[{required:!0,trigger:"blur",message:"项目团队不能为空"}],member:[{required:!0,trigger:"blur",message:"项目成员不能为空"}]},memberList:[],defaultArr:[],options:[]}},computed:{isEdit:function isEdit(){return!!this.editData.pid},departmentList:function departmentList(){return this.$store.state.userinfo.department_List}},created:function created(){this.fetchDepartmentUser()},mounted:function mounted(){},methods:_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.b)("project/project",["addProject","editProject"])),Object(vuex_esm.d)("layout/layout",["SET_MENUTXT"])),{},{fetchDepartmentUser:function fetchDepartmentUser(){var _this=this;department.default.getDepartmentUser({}).then((function(res){_this.options=function createdCascaderData(sourceData){return sourceData.map((function(item){var temp={value:0,label:item.name};return 0<item.member.length?temp.children=function createdCascaderUserData(sourceData){return sourceData.map((function(item){return{value:item.uid,label:item.realname}}))}(item.member):temp.children=[],temp}))}(res.departmentgroup)}))},resetForm:function resetForm(){this.form.title="",this.form.project_depart_id=null,this.form.member=[]},onSubmit:function onSubmit(){var _this2=this;this.$refs.form.validate((function(valid){valid&&(_this2.isEdit?_this2.editProject(_this2.form).then((function(){_this2.$emit("success"),_this2.resetForm()})):_this2.addProject(_this2.form).then((function(){_this2.$emit("success"),_this2.resetForm()})))}))},removeUser:function removeUser(itemData){var _this3=this,index=this.memberList.indexOf(itemData),defaultIndex=this.form.member.indexOf(itemData.userId);this.memberList.splice(index,1),this.form.member.splice(defaultIndex,1),this.$nextTick((function(){0===_this3.defaultArr.length&&_this3.$refs.sle.clearCheckedNodes()}))},selectChange:function selectChange(){var checkedNode=this.$refs.sle.getCheckedNodes(!0);this.memberList=checkedNode.map((function(item){return{userId:item.value,name:item.label}}))}}),watch:{editData:{handler:function handler(newVal){newVal.project_id&&(this.form.title=newVal.title)},immediate:!0,deep:!0}}},componentNormalizer=(__webpack_require__(1579),__webpack_require__(96)),component=Object(componentNormalizer.a)(project_addvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"wrap-form"},[_c("el-form",{ref:"form",staticClass:"my-form",attrs:{"label-position":"top",model:_vm.form,rules:_vm.rules,"label-width":"80px"}},[_c("el-form-item",{attrs:{label:"项目标题",prop:"title"}},[_c("el-input",{attrs:{type:"text"},model:{value:_vm.form.title,callback:function($$v){_vm.$set(_vm.form,"title",$$v)},expression:"form.title"}})],1),_vm._v(" "),_c("el-row",[_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{label:"项目团队",prop:"project_depart_id"}},[_c("el-select",{attrs:{disabled:_vm.isEdit,placeholder:"请选择团队"},model:{value:_vm.form.project_depart_id,callback:function($$v){_vm.$set(_vm.form,"project_depart_id",$$v)},expression:"form.project_depart_id"}},_vm._l(_vm.department,(function(item){return _c("el-option",{key:item.depart_id,attrs:{label:item.name,value:item.depart_id}})})),1)],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{label:"选择成员",prop:"member"}},[_c("el-cascader",{ref:"sle",attrs:{placeholder:"请选择成员","show-all-levels":!1,options:_vm.options,"collapse-tags":"",props:{multiple:!0,emitPath:!1},filterable:""},on:{change:_vm.selectChange},model:{value:_vm.form.member,callback:function($$v){_vm.$set(_vm.form,"member",$$v)},expression:"form.member"}})],1)],1)],1),_vm._v(" "),_c("el-form-item",{attrs:{align:"center"}}),_vm._v(" "),_c("el-form-item",{attrs:{label:"已添加的成员"}},[_c("div",{staticClass:"team-box"},_vm._l(_vm.memberList,(function(item){return _c("div",{key:item.userId,staticClass:"member-item"},[_c("div",{staticClass:"member-avatar"},[_vm._v("\n            "+_vm._s(item.name)+"\n          ")]),_vm._v(" "),_c("div",{staticClass:"member-icon"},[_c("i",{staticClass:"el-icon-close",on:{click:function($event){return _vm.removeUser(item)}}})])])})),0)])],1),_vm._v(" "),_c("div",{staticClass:"submit-box"},[_c("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:_vm.onSubmit}},[_vm._v("创建项目")])],1)],1)}),[],!1,null,null,null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=warehouse-space44.9cef9450fc4cbe6433a5.bundle.js.map