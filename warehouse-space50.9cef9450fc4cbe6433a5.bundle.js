(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1548:function(module,exports,__webpack_require__){var dP=__webpack_require__(129).f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/;"name"in FProto||__webpack_require__(97)&&dP(FProto,"name",{configurable:!0,get:function(){try{return(""+this).match(nameRE)[1]}catch(e){return""}}})},1568:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1600);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1599:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1568);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_storybook_core_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},1600:function(module,exports,__webpack_require__){(exports=__webpack_require__(270)(!1)).push([module.i,"\n.project-member {\n  padding-top: 20px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.depart-name {\n  width: 100%;\n  text-align: left;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n",""]),module.exports=exports},411:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(34),__webpack_require__(29),__webpack_require__(9),__webpack_require__(80),__webpack_require__(102),__webpack_require__(158),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(37);var defineProperty=__webpack_require__(12),toConsumableArray=__webpack_require__(58),vuex_esm=(__webpack_require__(23),__webpack_require__(1548),__webpack_require__(193));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var project_membervue_type_script_lang_js_={name:"member",data:function data(){return{projectId:null,projectName:null,memberList:[],visibleAdd:!1,defaultArr:[],options:[],addMemberList:[]}},created:function created(){this.projectName=this.$route.query.projectName,this.projectId=this.$route.query.projectId,this.fetchProjectMember(),this.fetchDepartmentUser(),this.SET_MENUTXT({icon:!0,title:this.projectName,txt:"项目成员"})},beforeRouteLave:function beforeRouteLave(to,from,next){this.SET_MENUTXT(""),next()},methods:_objectSpread(_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.b)("project/project",["getProjectMember","updateProjectMember"])),Object(vuex_esm.b)("department/department",["getDepartmentUser"])),Object(vuex_esm.d)("layout/layout",["SET_MENUTXT"])),{},{fetchDepartmentUser:function fetchDepartmentUser(){var _this=this;this.getDepartmentUser({}).then((function(res){_this.options=function createdCascaderData(sourceData){return sourceData.map((function(item){var temp={value:0,label:item.name};return 0<item.member.length?temp.children=function createdCascaderUserData(sourceData){return sourceData.map((function(item){return{value:item.uid,label:item.realname}}))}(item.member):temp.children=[],temp}))}(res.departmentgroup)}))},fetchProjectMember:function fetchProjectMember(){var _this2=this;this.getProjectMember({project_id:this.projectId}).then((function(res){_this2.memberList=res.ProjectMember,_this2.defaultArr=_this2.memberList.reduce((function(total,item){var arr=item.member.map((function(inner){return inner.uid}));return[].concat(Object(toConsumableArray.a)(total),Object(toConsumableArray.a)(arr))}),[]),_this2.addMemberList=function tileData(dataList){var arr=[];return dataList.forEach((function(item){arr=[].concat(Object(toConsumableArray.a)(arr),Object(toConsumableArray.a)(item.member))})),arr}(res.ProjectMember)}))},add:function add(){this.visibleAdd=!0},selectChange:function selectChange(){var checkedNode=this.$refs.sle.getCheckedNodes(!0);this.addMemberList=checkedNode.map((function(item){return{uid:item.value,realname:item.label}}))},onSubmit:function onSubmit(){var _this3=this;this.updateProjectMember({project_id:this.projectId,member:this.defaultArr}).then((function(){_this3.fetchProjectMember()})).catch((function(){_this3.visibleAdd=!1}))}})},componentNormalizer=(__webpack_require__(1599),__webpack_require__(96)),component=Object(componentNormalizer.a)(project_membervue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"main-content"},[_c("div",{staticClass:"flex-box"},[_c("div",{staticClass:"c-top-nav"},[_vm._v("\n      "+_vm._s(_vm.projectName)+"\n      "),_c("div",{staticClass:"list-type"},[_c("el-link",{attrs:{underline:!1},on:{click:_vm.add}},[_c("i",{staticClass:"el-icon-plus"}),_vm._v("添加成员")])],1)]),_vm._v(" "),_vm._l(_vm.memberList,(function(item){return _c("div",{key:item.project_depart_name,staticClass:"project-member"},[_c("div",{staticClass:"depart-name"},[_vm._v(_vm._s(item.project_depart_name))]),_vm._v(" "),_vm._l(item.member,(function(innerItem){return _c("div",{key:innerItem.name,staticClass:"member-item"},[_c("div",{staticClass:"member-avatar"},[_vm._v("\n          "+_vm._s(innerItem.realname)+"\n        ")])])}))],2)}))],2),_vm._v(" "),_c("el-dialog",{attrs:{visible:_vm.visibleAdd,width:"40%"},on:{"update:visible":function($event){_vm.visibleAdd=$event}}},[_c("el-form",{ref:"form",staticClass:"my-form",attrs:{"label-position":"top","label-width":"80px"}},[_c("el-form-item",{attrs:{label:"选择成员"}},[_c("el-cascader",{ref:"sle",attrs:{placeholder:"请选择成员","show-all-levels":!1,options:_vm.options,"collapse-tags":"",props:{multiple:!0,emitPath:!1},filterable:""},on:{change:_vm.selectChange},model:{value:_vm.defaultArr,callback:function($$v){_vm.defaultArr=$$v},expression:"defaultArr"}})],1),_vm._v(" "),_c("el-form-item",{attrs:{label:"成员列表"}},[_c("div",{staticClass:"team-box"},_vm._l(_vm.addMemberList,(function(item){return _c("div",{key:item.uid,staticClass:"member-item"},[_c("div",{staticClass:"member-avatar"},[_vm._v("\n              "+_vm._s(item.realname)+"\n            ")])])})),0)]),_vm._v(" "),_c("div",{staticClass:"submit-box"},[_c("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:_vm.onSubmit}},[_vm._v("确定")])],1)],1)],1)],1)}),[],!1,null,null,null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=warehouse-space50.9cef9450fc4cbe6433a5.bundle.js.map