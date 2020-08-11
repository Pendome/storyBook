(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13,14],{1548:function(module,exports,__webpack_require__){var dP=__webpack_require__(129).f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/;"name"in FProto||__webpack_require__(97)&&dP(FProto,"name",{configurable:!0,get:function(){try{return(""+this).match(nameRE)[1]}catch(e){return""}}})},1550:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return taskLevelMap})),__webpack_require__.d(__webpack_exports__,"a",(function(){return taskLevelKeyValue})),__webpack_require__.d(__webpack_exports__,"d",(function(){return taskStatusMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return taskStatusKeyValue}));__webpack_require__(102),__webpack_require__(158),__webpack_require__(1548);var taskLevelMap=[{key:4,name:"最高",color:"#FF3939",bgColor:"rgba(255,57,57, 0.1)"},{key:3,name:"中等",color:"#FFA85A",bgColor:"rgba(255,168,90,1, 0.1)"},{key:2,name:"普通",color:"#2682FF",bgColor:"rgba(38,130,255,1, 0.1)"},{key:1,name:"低",color:"#00B97E",bgColor:"rgba(0,185,126,1, 0.1)"}],taskLevelKeyValue=taskLevelMap.reduce((function(total,item){return total[item.key]=item.name,total}),{}),taskStatusMap=[{key:2,name:"已完成",color:"#00B97E",bgColor:"rgba(0,185,126,0.10)"},{key:1,name:"未完成",color:"#FFA350",bgColor:"rgba(255,163,80,0.20)"}],taskStatusKeyValue=taskStatusMap.reduce((function(total,item){return total[item.key]=item.name,total}),{})},1556:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1582);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1558:function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(131),$find=__webpack_require__(1559)(5),forced=!0;"find"in[]&&Array(1).find((function(){forced=!1})),$export($export.P+$export.F*forced,"Array",{find:function find(callbackfn){return $find(this,callbackfn,arguments.length>1?arguments[1]:void 0)}}),__webpack_require__(681)("find")},1559:function(module,exports,__webpack_require__){var ctx=__webpack_require__(273),IObject=__webpack_require__(680),toObject=__webpack_require__(196),toLength=__webpack_require__(195),asc=__webpack_require__(1560);module.exports=function(TYPE,$create){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX,create=$create||asc;return function($this,callbackfn,that){for(var val,res,O=toObject($this),self=IObject(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(res=f(val=self[index],index,O),TYPE))if(IS_MAP)result[index]=res;else if(res)switch(TYPE){case 3:return!0;case 5:return val;case 6:return index;case 2:result.push(val)}else if(IS_EVERY)return!1;return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result}}},1560:function(module,exports,__webpack_require__){var speciesConstructor=__webpack_require__(1561);module.exports=function(original,length){return new(speciesConstructor(original))(length)}},1561:function(module,exports,__webpack_require__){var isObject=__webpack_require__(130),isArray=__webpack_require__(1562),SPECIES=__webpack_require__(54)("species");module.exports=function(original){var C;return isArray(original)&&("function"!=typeof(C=original.constructor)||C!==Array&&!isArray(C.prototype)||(C=void 0),isObject(C)&&null===(C=C[SPECIES])&&(C=void 0)),void 0===C?Array:C}},1562:function(module,exports,__webpack_require__){var cof=__webpack_require__(194);module.exports=Array.isArray||function isArray(arg){return"Array"==cof(arg)}},1572:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1613);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1573:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1615);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1581:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1556);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a},1582:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,'.task-box .row-line {\n  display: flex;\n  align-items: center;\n}\n.task-box .file-box {\n  display: flex;\n  font-size: 14px;\n}\n.task-box .file-box-icon {\n  font-size: 16px;\n  margin-right: 17px;\n}\n.task-box .child-task {\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n}\n.task-box .child-task i {\n    font-size: 16px;\n    margin-right: 17px;\n}\n.task-box .child-task-title {\n  margin-top: 15px;\n  padding-left: 35px;\n}\n.task-box .child-task-title-rest {\n  padding-left: 80px;\n}\n.task-box .el-checkbox__inner {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n.task-box .el-checkbox__input.is-checked .el-checkbox__inner {\n  background-color: #00b97e;\n  border-color: #00b97e;\n}\n.task-box .el-icon-circle-plus {\n  color: #509aff;\n}\n.task-box .add-new-task {\n  cursor: pointer;\n  height: 40px;\n  line-height: 40px;\n  width: 150px;\n  text-align: center;\n}\n.task-box .add-new-task:hover {\n    color: #509aff;\n}\n.task-box .add-new-task .el-icon-circle-plus {\n    font-size: 22px;\n}\n.task-box .tip {\n  font-size: 16px;\n  margin-top: 22px;\n  margin-bottom: 28px;\n}\n.task-box .el-checkbox__inner::after {\n  height: 7px;\n  left: 7px;\n  top: 4px;\n}\n.task-box .el-input__inner {\n  height: 40px;\n  font-size: 12px;\n  border: 0 none;\n  background-color: #f5f9fe;\n}\n.task-box .el-form-item--mini .el-form-item__content {\n  line-height: 40px;\n}\n.task-box .el-icon-arrow-up:before {\n  content: "\\E78F";\n}\n.el-drawer__body {\n  height: 100%;\n  overflow: auto;\n}\n',""])},1612:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1572);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a},1613:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,".tag-conten .tag-box {\n  height: 24px;\n  padding: 0 11px;\n  font-size: 12px;\n  border-radius: 4px;\n  line-height: 24px;\n  margin-left: 16px;\n}\n",""])},1614:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1573);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a},1615:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,".plateform .el-card__body {\n  padding-top: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.plateform .tags-tip {\n  display: flex;\n  align-items: center;\n}\n.basic-container {\n  padding: 0;\n}\n",""])},1616:function(module,exports,__webpack_require__){var api=__webpack_require__(128),content=__webpack_require__(1657);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1656:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1616);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a},1657:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(269)(!1)).push([module.i,"",""])},208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(29),__webpack_require__(9),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(23),__webpack_require__(37);var defineProperty=__webpack_require__(12),plateform=__webpack_require__(276),vuex_esm=__webpack_require__(193);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var team_main_corevue_type_script_lang_js_={components:{plateform:plateform.default},data:function data(){return{list:["plateform","channel","business","page"],currentRole:"plateform",loading:!1,treeArrId:[]}},created:function created(){var _this=this;this.loading=!0,this.getuserlist().then((function(){_this.loading=!1})).catch((function(){_this.loading=!1}))},mounted:function mounted(){setTimeout((function(){var height=document.getElementsByClassName("el-main")[0].offsetHeight-80;document.getElementsByClassName("treeLeft")[0].style.height="".concat(height,"px"),document.getElementsByClassName("treeRight")[0].style.height="".concat(height,"px")}),200)},computed:_objectSpread({},Object(vuex_esm.e)("team/team",{moduleTree:function moduleTree(state){return state.moduleTree},depart_id:function depart_id(state){return state.depart_id},defaultTreeArr:function defaultTreeArr(state){return state.defaultTreeArr}})),methods:_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.b)("team/team",["getuserlist"])),Object(vuex_esm.d)("team/team",["SET_AWITDER"])),{},{handleNodeClick:function handleNodeClick(data){var arrId=[],list=function(data){for(var i=0;i<data.length;i++)arrId.push(data[i].id),data[i].children&&list(data[i].children)};list([data]),this.SET_AWITDER(arrId),console.log("获取id数据组",arrId),this.$refs.plateform.init()},tree:function tree(data){for(var i=0;i<data.length;i++)this.treeArrId.push(data.id),data.children&&this.tree(data.children)}})},componentNormalizer=(__webpack_require__(1656),__webpack_require__(96)),component=Object(componentNormalizer.a)(team_main_corevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"mian-core"},[_c("el-row",{attrs:{gutter:15}},[_c("el-col",{attrs:{span:4}},[_c("basiCcontainer",{attrs:{title:"部门结构"}},[_c("div",{directives:[{name:"loading",rawName:"v-loading",value:_vm.loading,expression:"loading"}],staticClass:"treeLeft"},[_vm.depart_id.length>0?_c("el-aside",{attrs:{width:"100%"}},[_c("el-tree",{attrs:{data:_vm.moduleTree.departmentgroup,"node-key":"id","highlight-current":"","default-expanded-keys":_vm.defaultTreeArr,"expand-on-click-node":!1,"check-on-click-node":!0,"current-node-key":_vm.depart_id[0],accordion:!0,"auto-expand-parent":!0},on:{"node-click":_vm.handleNodeClick}})],1):_vm._e()],1)])],1),_vm._v(" "),_vm.moduleTree.userlist?_c("el-col",{attrs:{span:20}},[_c("div",{staticClass:"treeRight"},[_c("transition",{attrs:{mode:"out-in"}},[_c(_vm.currentRole,{ref:"plateform",tag:"component"})],1)],1)]):_vm._e()],1)],1)}),[],!1,null,null,null);__webpack_exports__.default=component.exports},274:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(34),__webpack_require__(29),__webpack_require__(9),__webpack_require__(158),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(37),__webpack_require__(1548);var toConsumableArray=__webpack_require__(58),defineProperty=(__webpack_require__(23),__webpack_require__(12)),vuex_esm=__webpack_require__(193),utils_const=__webpack_require__(1550);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var team_taskBoxvue_type_script_lang_js_={props:{dataset:{type:Object,defalut:function defalut(){}}},data:function data(){var _ruleForm;return{ruleForm:(_ruleForm={checked:!1,title:"",textarea2:"",value2:"",date2:""},Object(defineProperty.a)(_ruleForm,"textarea2",""),Object(defineProperty.a)(_ruleForm,"free",""),_ruleForm),taskLevelMap:utils_const.b,memberList:[],options:[],childTaskJson:[{checked:!1,title:"",time:"",const:""}],fileList:[]}},computed:_objectSpread({},Object(vuex_esm.e)("layout/layout",["shortcuts"])),methods:_objectSpread(_objectSpread({},Object(vuex_esm.b)("project/project",["getProjectMember"])),{},{fetchProjectMember:function fetchProjectMember(){var _this=this;this.getProjectMember({project_id:this.projectId}).then((function(res){_this.memberList=tileData(res.ProjectMember)}))},tileData:function tileData(dataList){var arr=[];return dataList.forEach((function(item){arr=[].concat(Object(toConsumableArray.a)(arr),Object(toConsumableArray.a)(item.member))})),arr},addChildTask:function addChildTask(){this.childTaskJson.push({checked:!1,title:"",time:"",const:""})},handleChange:function handleChange(file,fileList){console.log(file,fileList),this.fileList.push({name:file.name})}})},componentNormalizer=(__webpack_require__(1581),__webpack_require__(96)),component=Object(componentNormalizer.a)(team_taskBoxvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"task-box"},[_c("el-form",{ref:"ruleForm",attrs:{model:_vm.ruleForm,"hide-required-asterisk":!0,"label-width":"80px",size:"mini","label-position":"right"}},[_c("el-row",{attrs:{gutter:20}},[_c("el-col",{staticStyle:{"margin-right":"15px"},attrs:{span:1}},[_c("el-form-item",{attrs:{prop:"titleCheck","label-width":"0px"}},[_c("el-checkbox",{model:{value:_vm.ruleForm.titleCheck,callback:function($$v){_vm.$set(_vm.ruleForm,"titleCheck",$$v)},expression:"ruleForm.titleCheck"}})],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:21}},[_c("el-form-item",{attrs:{prop:"taskTitle","label-width":"0px"}},[_c("el-input",{attrs:{maxlength:"50",placeholder:"请输入任务标题"},model:{value:_vm.ruleForm.taskTitle,callback:function($$v){_vm.$set(_vm.ruleForm,"taskTitle",$$v)},expression:"ruleForm.taskTitle"}})],1)],1)],1),_vm._v(" "),_c("el-row",[_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"value2","label-width":"0px"}},[_c("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"选择执行人"},model:{value:_vm.ruleForm.value2,callback:function($$v){_vm.$set(_vm.ruleForm,"value2",$$v)},expression:"ruleForm.value2"}},_vm._l(_vm.options,(function(item){return _c("el-option",{key:item.value,attrs:{label:item.label,value:item.value}})})),1)],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"value3","label-width":"0px"}},[_c("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"添加参与人"},model:{value:_vm.ruleForm.value3,callback:function($$v){_vm.$set(_vm.ruleForm,"value3",$$v)},expression:"ruleForm.value3"}},_vm._l(_vm.options,(function(item){return _c("el-option",{key:item.value,attrs:{label:item.label,value:item.value}})})),1)],1)],1)],1),_vm._v(" "),_c("el-row",[_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"date2","label-width":"0px"}},[_c("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"添加截至日期","picker-options":_vm.shortcuts},model:{value:_vm.ruleForm.date2,callback:function($$v){_vm.$set(_vm.ruleForm,"date2",$$v)},expression:"ruleForm.date2"}})],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"value3","label-width":"0px"}},[_c("el-select",{attrs:{placeholder:"优先级"},model:{value:_vm.ruleForm.value3,callback:function($$v){_vm.$set(_vm.ruleForm,"value3",$$v)},expression:"ruleForm.value3"}},_vm._l(_vm.taskLevelMap,(function(item){return _c("el-option",{key:item.key,style:{color:item.color},attrs:{label:item.name,value:item.key}})})),1)],1)],1)],1),_vm._v(" "),_c("el-row",[_c("el-form-item",{attrs:{prop:"value3","label-width":"0px"}},[_c("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入任务描述"},model:{value:_vm.ruleForm.textarea2,callback:function($$v){_vm.$set(_vm.ruleForm,"textarea2",$$v)},expression:"ruleForm.textarea2"}})],1)],1),_vm._v(" "),_c("el-row",[_c("div",{staticClass:"file-box"},[_c("div",{staticClass:"file-box-icon"},[_c("i",{staticClass:"el-icon-paperclip"})]),_vm._v(" "),_c("el-upload",{staticClass:"upload-demo",attrs:{action:" string","on-change":_vm.handleChange,"file-list":_vm.fileList}},[_c("el-link",{attrs:{type:"primary"}},[_vm._v("添加附件")])],1)],1)]),_vm._v(" "),_c("el-row",{staticStyle:{"margin-top":"17px"}},[_c("div",{staticClass:"child-task"},[_c("i",{staticClass:"el-icon-share"}),_c("span",[_vm._v("子任务")])])]),_vm._v(" "),_vm._l(_vm.childTaskJson,(function(item,index){return _c("div",{key:index},[_c("el-row",{staticClass:"child-task-title",attrs:{gutter:20}},[_c("el-col",{attrs:{span:2}},[_c("el-form-item",{attrs:{prop:"checked","label-width":"0px"}},[_c("el-checkbox",{model:{value:_vm.childTaskJson[index].checked,callback:function($$v){_vm.$set(_vm.childTaskJson[index],"checked",$$v)},expression:"childTaskJson[index].checked"}})],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:22}},[_c("el-form-item",{attrs:{prop:"title","label-width":"0px"}},[_c("el-input",{attrs:{maxlength:"50",placeholder:"子任务标题"},model:{value:_vm.childTaskJson[index].title,callback:function($$v){_vm.$set(_vm.childTaskJson[index],"title",$$v)},expression:"childTaskJson[index].title"}})],1)],1)],1),_vm._v(" "),_c("el-row",{staticClass:"child-task-title-rest"},[_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"time","label-width":"0px"}},[_c("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"添加截至日期","picker-options":_vm.shortcuts},model:{value:_vm.childTaskJson[index].time,callback:function($$v){_vm.$set(_vm.childTaskJson[index],"time",$$v)},expression:"childTaskJson[index].time"}})],1)],1),_vm._v(" "),_c("el-col",{attrs:{span:12}},[_c("el-form-item",{attrs:{prop:"const","label-width":"0px"}},[_c("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"添加参与人"},model:{value:_vm.childTaskJson[index].const,callback:function($$v){_vm.$set(_vm.childTaskJson[index],"const",$$v)},expression:"childTaskJson[index].const"}},_vm._l(_vm.options,(function(item){return _c("el-option",{key:item.value,attrs:{label:item.label,value:item.value}})})),1)],1)],1)],1)],1)})),_vm._v(" "),_c("el-row",{staticClass:"add-new-task"},[_c("div",{staticClass:"child-task",on:{click:_vm.addChildTask}},[_c("i",{staticClass:"el-icon-circle-plus"}),_c("span",[_vm._v("添加子任务")])])])],2)],1)}),[],!1,null,null,null);__webpack_exports__.default=component.exports},276:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(17),__webpack_require__(29),__webpack_require__(9),__webpack_require__(41),__webpack_require__(42),__webpack_require__(19),__webpack_require__(10),__webpack_require__(43),__webpack_require__(37),__webpack_require__(23);var defineProperty=__webpack_require__(12),vuex_esm=__webpack_require__(193),utils=__webpack_require__(1),components_tableTagvue_type_script_lang_js_=(__webpack_require__(272),__webpack_require__(271),__webpack_require__(1558),__webpack_require__(402),{props:{type:{type:Number,default:function _default(){return 1}}},data:function data(){return{dataset:[{type:1,txt:"主管",textColor:"#509AFF",backColor:"rgba(80,154,255,0.24)"},{type:2,txt:"我",textColor:"#00B97E",backColor:"rgba(0,185,126,0.16)"}],list:[]}},created:function created(){var _this=this;this.list.push(this.dataset.find((function(res){return res.type==_this.type})))},watch:{type:function type(){var _this2=this;this.list.push(this.dataset.find((function(res){return res.type==_this2.type})))}}}),componentNormalizer=(__webpack_require__(1612),__webpack_require__(96));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var team_plateformvue_type_script_lang_js_={components:{tableTag:Object(componentNormalizer.a)(components_tableTagvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.type>0?_c("div",{staticClass:"tag-conten"},_vm._l(_vm.list,(function(item){return _c("div",{key:item.type,staticClass:"tag-box",style:{color:item.textColor,background:item.backColor}},[_vm._v(_vm._s(item.txt))])})),0):_vm._e()}),[],!1,null,null,null).exports,taskBox:__webpack_require__(274).default},data:function data(){return{ruleForm:{},dataset:[],visibleAdd:!1,taskData:{}}},mounted:function mounted(){this.init()},computed:_objectSpread({},Object(vuex_esm.e)("team/team",{moduleTree:function moduleTree(state){return console.log("state.moduleTreestate.moduleTreestate.moduleTree",state.moduleTree),state.moduleTree},depart_id:function depart_id(state){return state.depart_id}})),methods:_objectSpread(_objectSpread({},Object(vuex_esm.d)("team/team",["SET_TASKMEANDATA"])),{},{init:function init(){var _this=this,uid=JSON.parse(utils.a.get("userMsg")).uid;0<this.dataset.length&&(this.dataset=[]),this.moduleTree.userlist.forEach((function(res){_this.depart_id.forEach((function(id){res.depart_id==id&&(uid===res.uid&&(res.mine=!0),_this.dataset.push(res))}))})),this.$refs.commonTable.selfPageSplit(this.dataset)},tree:function tree(id,key){for(var i=0;i<key.length;i++){if(key[i].id==id)return key[i];if(key[i].children){var obj=this.tree(id,key[i].children);if(obj)return obj}}},getDerpar:function getDerpar(id){return(this.tree(id,this.moduleTree.departmentgroup)||{}).label||""},findTask:function findTask(data){this.SET_TASKMEANDATA(data),this.$router.push("/mine?type=1")},addSuccess:function addSuccess(){this.visibleAdd=!1}})},plateform_component=(__webpack_require__(1614),Object(componentNormalizer.a)(team_plateformvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"plateform"},[_c("basiCcontainer",[_c("commonTable",{ref:"commonTable",attrs:{tableHead:"team",dataset:_vm.dataset,params:_vm.ruleForm,isSelfMak:!0,selection:!1,tipShow:!1},scopedSlots:_vm._u([{key:"depart",fn:function(dataset){return[_c("div",[_vm._v(_vm._s(_vm.getDerpar(dataset.data.depart_id)))])]}},{key:"realname",fn:function(dataset){return[_c("div",{staticClass:"tags-tip"},[_c("p",[_vm._v(_vm._s(dataset.data.realname))]),_vm._v(" "),_c("tableTag",{attrs:{type:dataset.data.mine?2:0}})],1)]}},{key:"verifyRemark",fn:function(dataset){return[_c("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function($event){return _vm.findTask(dataset.data)}}},[_vm._v("查看任务")])]}}])})],1),_vm._v(" "),_c("el-drawer",{attrs:{visible:_vm.visibleAdd,"with-header":!1,title:"查看任务"},on:{"update:visible":function($event){_vm.visibleAdd=$event}}},[_c("taskBox",{attrs:{dataset:_vm.taskData},on:{success:_vm.addSuccess}})],1)],1)}),[],!1,null,null,null));__webpack_exports__.default=plateform_component.exports}}]);
//# sourceMappingURL=team.9cef9450fc4cbe6433a5.bundle.js.map