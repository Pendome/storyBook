(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1548:function(module,exports,__webpack_require__){var dP=__webpack_require__(129).f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/;"name"in FProto||__webpack_require__(97)&&dP(FProto,"name",{configurable:!0,get:function(){try{return(""+this).match(nameRE)[1]}catch(e){return""}}})},1549:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1554);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1553:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basiCcontainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1549);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basiCcontainer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a},1554:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,".basic-container {\n  border-radius: 4px 0px 0px 0px;\n  box-sizing: border-box;\n  height: 100%;\n}\n.basic-container .el-card {\n    background: #f5f9fe;\n    min-width: 100%;\n    height: 100%;\n    border: 0 none;\n    border-radius: 4px;\n}\n.basic-container .el-card__body {\n    overflow: auto;\n}\n.basic-container:first-child {\n    padding-top: 0;\n}\n.basic-container .btn {\n    display: inline-block;\n    margin-left: 20px;\n    float: right;\n}\n.basic-container .box-card-par {\n    display: inline-block;\n    font-size: 16px;\n    height: 20px;\n    line-height: 1;\n    border-left: 5px solid #409eff;\n    padding-left: 5px;\n    padding-top: 5px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-weight: 600;\n}\n",""])},1557:function(module,__webpack_exports__,__webpack_require__){"use strict";var components_basiCcontainervue_type_script_lang_js_={name:"basicContainer",props:{title:{type:String,default:""}}},componentNormalizer=(__webpack_require__(1553),__webpack_require__(96)),component=Object(componentNormalizer.a)(components_basiCcontainervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"basic-container"},[_c("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[this._t("default")],2)],1)}),[],!1,null,null,null);__webpack_exports__.a=component.exports},1558:function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(131),$find=__webpack_require__(1559)(5),forced=!0;"find"in[]&&Array(1).find((function(){forced=!1})),$export($export.P+$export.F*forced,"Array",{find:function find(callbackfn){return $find(this,callbackfn,arguments.length>1?arguments[1]:void 0)}}),__webpack_require__(681)("find")},1559:function(module,exports,__webpack_require__){var ctx=__webpack_require__(273),IObject=__webpack_require__(680),toObject=__webpack_require__(196),toLength=__webpack_require__(195),asc=__webpack_require__(1560);module.exports=function(TYPE,$create){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX,create=$create||asc;return function($this,callbackfn,that){for(var val,res,O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(res=f(val=self[index],index,O),TYPE))if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return!0;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return!1;return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},1560:function(module,exports,__webpack_require__){var speciesConstructor=__webpack_require__(1561);module.exports=function(original,length){return new(speciesConstructor(original))(length)}},1561:function(module,exports,__webpack_require__){var isObject=__webpack_require__(130),isArray=__webpack_require__(1562),SPECIES=__webpack_require__(54)("species");module.exports=function(original){var C;return isArray(original)&&("function"!=typeof(C=original.constructor)||C!==Array&&!isArray(C.prototype)||(C=void 0),isObject(C)&&null===(C=C[SPECIES])&&(C=void 0)),void 0===C?Array:C}},1562:function(module,exports,__webpack_require__){var cof=__webpack_require__(194);module.exports=Array.isArray||function isArray(arg){return"Array"==cof(arg)}},1577:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(17),__webpack_require__(29),__webpack_require__(9),__webpack_require__(103),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(23),__webpack_require__(37);var defineProperty=__webpack_require__(12),vuex_esm=__webpack_require__(193);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var components_toolBtnvue_type_script_lang_js_={props:["modelType"],data:function data(){return{dialogHeadTable:!1,checkListItem:[],dataset:""}},computed:_objectSpread({},Object(vuex_esm.e)("layout/layout",{state:function state(_state){return _state}})),mounted:function mounted(){console.log("mounted",this.dataset,this.accountList)},created:function created(){},methods:_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.d)("layout/layout",["SET_TABLEHEAD"])),Object(vuex_esm.b)("layout/layout",["tableInit"])),{},{showDialog:function showDialog(){this.dialogHeadTable=!0},objToArr:function objToArr(obj){var arr=[];for(var item in obj)obj[item].show&&arr.push(obj[item].key),console.log(item);return arr},checkListInput:function checkListInput(arr){console.log(this.checkListItem);var itemArr=JSON.parse(JSON.stringify(this.dataset));for(var item in itemArr)console.log(itemArr[item].key,arr.indexOf(itemArr[item].key)),0>arr.indexOf(itemArr[item].key)?itemArr[item].show=!1:-1<arr.indexOf(itemArr[item].key)&&(itemArr[item].show=!0,console.log(52324324));console.log("改变字段",{dataList:JSON.parse(JSON.stringify(itemArr)),key:this.modelType}),this.SET_TABLEHEAD({dataList:JSON.parse(JSON.stringify(itemArr)),key:this.modelType})},getTable:function getTable(){this.$emit("getTable")}})},componentNormalizer=__webpack_require__(96),component=Object(componentNormalizer.a)(components_toolBtnvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"toolBtn"},[[_c("el-button",{attrs:{icon:"el-icon-menu",size:"small",circle:""},on:{click:_vm.showDialog}}),_vm._v(" "),_c("el-button",{attrs:{icon:"el-icon-refresh",size:"small",circle:""},on:{click:function($event){return _vm.getTable()}}})],_vm._v(" "),_c("el-dialog",{attrs:{title:"多选表头",visible:_vm.dialogHeadTable,top:"30vh"},on:{"update:visible":function($event){_vm.dialogHeadTable=$event}}},[[_c("el-checkbox-group",{on:{change:_vm.checkListInput},model:{value:_vm.checkListItem,callback:function($$v){_vm.checkListItem=$$v},expression:"checkListItem"}},[_c("el-row",{staticClass:"checkTabl",attrs:{gutter:20}},_vm._l(_vm.dataset,(function(item,index){return _c("el-col",{key:index,attrs:{span:6}},[_c("el-checkbox",{attrs:{label:item.key}},[_vm._v(_vm._s(item.name))])],1)})),1)],1)]],2)],2)}),[],!1,null,null,null);__webpack_exports__.a=component.exports},1625:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1669);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1668:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41c23815_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1625);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41c23815_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},1669:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,".admin-role[data-v-41c23815] {\n  overflow: hidden;\n}\n.admin-role .el-cascader[data-v-41c23815] {\n    width: 100%;\n}\n.admin-role .el-select[data-v-41c23815] {\n    width: 100%;\n}\n.admin-role .block[data-v-41c23815] {\n    margin-top: 30px;\n}\n",""])},280:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(29),__webpack_require__(272),__webpack_require__(9),__webpack_require__(158),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(37),__webpack_require__(1548),__webpack_require__(1558),__webpack_require__(23);var defineProperty=__webpack_require__(12),vuex_esm=__webpack_require__(193),utils=__webpack_require__(1),basiCcontainer=__webpack_require__(1557),tableTip=__webpack_require__(404),toolBtn=__webpack_require__(1577);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var admin_rolevue_type_script_lang_js_={components:{basiCcontainer:basiCcontainer.a,tableTip:tableTip.a,toolBtn:toolBtn.a},data:function data(){return{selectData:"",loading:!1,dialogFormVisibleC:!1,ruleForm:{roleName:""},selectedOptions2:"",dataset:{},userOfAdd:{roleName:"",roleType:"",appId:"",remark:"",arr:[]},rolaTypeList:[{value:1,name:"超级管理员"},{value:2,name:"平台用户"},{value:3,name:"运营人员"}],rules:{roleName:[{required:!0,message:"输入角色名称",trigger:"blur"}],roleType:[{required:!0,message:"请选择类型",trigger:"blur"}],appId:[{required:!0,message:"请选择所属平台",trigger:"blur"}]},switchData:[],homeOpaenPage:[],title:"新增角色",homeEdit:!1,defautlCheck:[],serveLodding:!1}},computed:_objectSpread(_objectSpread({},Object(vuex_esm.e)("layout/layout",{menuAll:function menuAll(state){return state.menu}})),Object(vuex_esm.e)("role/role",{rolaPlateForm:function rolaPlateForm(state){return state.rolaPlateForm}})),created:function created(){this.GetMenuListPage(),this.GetPlatform()},beforeRouteLeave:function beforeRouteLeave(to,from,next){this.SET_ROLELIST([]),next()},mounted:function mounted(){this.getTabelList()},methods:_objectSpread(_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.b)("layout/layout",["GetMenuListPage"])),Object(vuex_esm.b)("role/role",["GetRoleList","AddRole","editRole","EditRole","DeleteRole","GetRoleType","GetPlatform"])),Object(vuex_esm.d)("role/role",["SET_ROLELIST","SET_WATADDDATA"])),{},{getTabelList:function getTabelList(){this.$refs.commonTable.getTableList()},clearData:function clearData(){this.selectData=[],console.log("节点",this.$refs.multipleTable),this.$refs.multipleTable.clearSelection()},getRoleList:function getRoleList(){this.$refs.commonTable.getTableList()},handleChange:function handleChange(data){console.log(data)},addUser:function addUser(){this.SET_WATADDDATA({title:"新增角色",dataset:{}}),this.$router.push("/admin/role-datamanipulation")},exdata:function exdata(data){this.SET_WATADDDATA({title:"编辑角色",dataset:data}),this.$router.push("/admin/role-datamanipulation")},motalClear:function motalClear(){var _this=this;this.$nextTick((function(){_this.userOfAdd={arr:[]},_this.$refs.tree.setCheckedKeys([]),_this.userOfAdd.arr=[],_this.homeEdit=!1,_this.defautlCheck=[]}))},del:function del(data){var _this2=this;this.$confirm("是否删除此用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var params={id:data.id};_this2.DeleteRole(params).then((function(){_this2.$alert("已删除","提示",{type:"success",confirmButtonText:"确定",callback:function callback(action){console.log(action)}}),_this2.getRoleList()})).catch((function(err){console.log(err)}))})).catch((function(err){console.log(err)}))},getCheckedKeys:function getCheckedKeys(){var _this3=this,isSelect=this.$refs.tree.getCheckedNodes();this.userOfAdd.arr=[],isSelect.forEach((function(res){_this3.userOfAdd.arr.push(res.id),0<1*res.parentId&&_this3.getIds(_this3.menuAll,res.parentId)})),console.log("保存的id",this.userOfAdd.arr)},handleGradeCheckChange:function handleGradeCheckChange(){},getIds:function getIds(data,id){this.userOfAdd.arr.push(id);var node=Object(utils.f)(data,id);console.log("node",node,id),node&&this.userOfAdd.arr.push(node.id),node&&0<1*node.parentId&&this.getIds(this.menuAll,node.parentId)},save:function save(formName){var _this4=this;this.$refs[formName].validate((function(valid){if(!valid)return console.log("error submit!!"),!1;_this4.serveLodding=!0,"新增角色"==_this4.title?(_this4.getCheckedKeys(),_this4.AddRole(_this4.userOfAdd).then((function(){_this4.serveLodding=!1,_this4.$alert("添加成功","提示",{type:"success",confirmButtonText:"确定",callback:function callback(action){console.log(action)}}),_this4.dialogFormVisibleC=!1,_this4.getRoleList()})).catch((function(err){_this4.serveLodding=!1,console.log(err)}))):"编辑角色"==_this4.title&&(_this4.getCheckedKeys(),_this4.EditRole(_this4.userOfAdd).then((function(){_this4.serveLodding=!1,_this4.$alert("编辑成功","提示",{type:"success",confirmButtonText:"确定",callback:function callback(action){console.log(action)}}),_this4.dialogFormVisibleC=!1,_this4.getRoleList()})).catch((function(err){_this4.serveLodding=!1,console.log(err)})))}))},findPlateForm:function findPlateForm(id){var data=this.rolaPlateForm.find((function(res){return res.id===id}));return data?data.appName:"全部"},findType:function findType(value){var data=this.rolaTypeList.find((function(res){return res.value===1*value}));return data?data.name:"-"}})},componentNormalizer=(__webpack_require__(1668),__webpack_require__(96)),component=Object(componentNormalizer.a)(admin_rolevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"admin-role"},[_c("basiCcontainer",{attrs:{title:"筛选条件"}},[_c("el-form",{ref:"ruleForm",attrs:{model:_vm.ruleForm,"hide-required-asterisk":!0,"label-width":"70px",size:"mini","label-position":"right"}},[_c("el-row",{attrs:{gutter:20}},[_c("el-col",{attrs:{span:8}},[_c("div",{staticClass:"grid-content bg-purple"},[_c("el-form-item",{attrs:{label:"角色名：",prop:"roleName"}},[_c("el-input",{attrs:{placeholder:"请输入角色名",clearable:""},model:{value:_vm.ruleForm.roleName,callback:function($$v){_vm.$set(_vm.ruleForm,"roleName",$$v)},expression:"ruleForm.roleName"}})],1)],1)])],1)],1),_vm._v(" "),_c("el-row",[_c("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:_vm.getRoleList}},[_vm._v("立即查询")]),_vm._v(" "),_c("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-news"},on:{click:_vm.addUser}},[_vm._v("新增")])],1)],1),_vm._v(" "),_c("basiCcontainer",{attrs:{title:"数据列表"}},[_c("commonTable",{ref:"commonTable",attrs:{tableHead:"role",params:_vm.ruleForm,apiUrl:{url:"role",methods:"getRoleList"}},scopedSlots:_vm._u([{key:"verifyRemark",fn:function(verifyRemark){return[_c("div",{staticClass:"showBtn"},[_c("div",{staticClass:"tableBtns"},[_c("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function($event){return _vm.exdata(verifyRemark.data,verifyRemark.index)}}},[_vm._v("编辑")]),_vm._v(" "),_c("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function($event){return _vm.del(verifyRemark.data)}}},[_vm._v("删除")])],1)])]}},{key:"platformName",fn:function(dataset){return[_vm._v("\n        "+_vm._s(_vm.findPlateForm(dataset.data.appId))+"\n      ")]}},{key:"roleType",fn:function(dataset){return[_vm._v("\n        "+_vm._s(_vm.findType(dataset.data.roleType))+"\n      ")]}}])})],1),_vm._v(" "),_c("el-dialog",{attrs:{title:"添加角色",visible:_vm.dialogFormVisibleC,top:"10px"},on:{"update:visible":function($event){_vm.dialogFormVisibleC=$event},close:function($event){return _vm.$refs.addUser.clearValidate()}}},[_c("el-form",{ref:"addUser",attrs:{model:_vm.userOfAdd,"status-icon":"",rules:_vm.rules,"label-position":"right","label-width":"100px"}},[_c("el-form-item",{attrs:{prop:"roleName",label:"角色名称："}},[_c("el-input",{attrs:{placeholder:"请输入角色名称",autocomplete:"off",clearable:""},model:{value:_vm.userOfAdd.roleName,callback:function($$v){_vm.$set(_vm.userOfAdd,"roleName",$$v)},expression:"userOfAdd.roleName"}})],1),_vm._v(" "),_c("el-form-item",{attrs:{prop:"roleType",label:"类型："}},[_c("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:_vm.userOfAdd.roleType,callback:function($$v){_vm.$set(_vm.userOfAdd,"roleType",$$v)},expression:"userOfAdd.roleType"}},_vm._l(_vm.rolaTypeList,(function(item,index){return _c("el-option",{key:index,attrs:{label:item.name,value:1*item.value}})})),1)],1),_vm._v(" "),_c("el-form-item",{attrs:{prop:"appId",label:"所属平台："}},[_c("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:_vm.userOfAdd.appId,callback:function($$v){_vm.$set(_vm.userOfAdd,"appId",$$v)},expression:"userOfAdd.appId"}},_vm._l(_vm.rolaPlateForm,(function(item,index){return _c("el-option",{key:index,attrs:{label:item.appName,value:item.id}})})),1)],1),_vm._v(" "),_c("el-form-item",{attrs:{prop:"bz",label:"备注："}},[_c("el-input",{attrs:{type:"textarea",placeholder:"请输入描述内容",autosize:{minRows:6,maxRows:10},size:"medium"},model:{value:_vm.userOfAdd.remark,callback:function($$v){_vm.$set(_vm.userOfAdd,"remark",$$v)},expression:"userOfAdd.remark"}})],1),_vm._v(" "),_c("el-form-item",{attrs:{prop:"qx",label:"权限管理："}},[_c("el-tree",{ref:"tree",attrs:{data:_vm.menuAll,"show-checkbox":"","node-key":"id","default-expand-all":!0},on:{check:_vm.handleGradeCheckChange}})],1)],1),_vm._v(" "),_c("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[_c("el-button",{attrs:{type:"primary",loading:_vm.serveLodding},on:{click:function($event){return _vm.save("addUser")}}},[_vm._v("提 交")]),_vm._v(" "),"编辑角色"==_vm.title?_c("el-button",{on:{click:function($event){_vm.dialogFormVisibleC=!1}}},[_vm._v("取 消")]):_vm._e(),_vm._v(" "),"新增角色"==_vm.title?_c("el-button",{on:{click:function($event){return _vm.$refs.addUser.resetFields()}}},[_vm._v("重 置")]):_vm._e()],1)],1)],1)}),[],!1,null,"41c23815",null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=warehouse-space10.9cef9450fc4cbe6433a5.bundle.js.map