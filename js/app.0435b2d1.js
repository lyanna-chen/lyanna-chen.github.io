(function(t){function s(s){for(var a,c,o=s[0],l=s[1],r=s[2],v=0,h=[];v<o.length;v++)c=o[v],i[c]&&h.push(i[c][0]),i[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(h.length)h.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},n=[];function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var r=0;r<o.length;r++)s(o[r]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"00a0":function(t,s,e){},"0175":function(t,s,e){},"0891":function(t,s,e){},1630:function(t,s,e){"use strict";var a=e("e73c"),i=e.n(a);i.a},"1c07":function(t,s,e){"use strict";var a=e("63b8"),i=e.n(a);i.a},3659:function(t,s,e){"use strict";var a=e("39e5"),i=e.n(a);i.a},"39e5":function(t,s,e){},"3eaf":function(t,s,e){"use strict";var a=e("75b4"),i=e.n(a);i.a},"4c8a":function(t,s,e){"use strict";var a=e("0891"),i=e.n(a);i.a},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),i=e("cadd");a["a"].use(i["a"]);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},c=[],o=(e("3659"),e("2877")),l={},r=Object(o["a"])(l,n,c,!1,null,"326a94d0",null);r.options.__file="App.vue";var u=r.exports,v=e("8c4f"),h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("main-header",{attrs:{activeChange:t.activeChange,active:t.active},on:{loginOut:t.loginOut,refresh:t.getExamData}}),e("main-home",{staticClass:"content",attrs:{examList:t.examList,classList:t.classList,active:t.active},on:{change:t.indexChange}}),e("login",{attrs:{active:t.active},on:{loginInfo:t.loginInfo,teacherLoginInfo:t.teacherLoginInfo}}),e("message",{attrs:{active:t.active,Status:t.Status},on:{reset:t.reset}})],1)},d=[],m=(e("ac6a"),e("bc3a")),f=e.n(m),b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mainheader"},[e("div",{staticClass:"content"},[e("div",{staticClass:"menu",on:{click:t.menuBar}},[e("div",{staticClass:"iconfont home-icon"},[t._v("")])]),e("div",{staticClass:"title"},[t._v("\n      "+t._s(this.title)+"\n      "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.more,expression:"this.more"}],staticClass:"iconfont titleMore"},[t._v("")])]),e("div",{staticClass:"search",on:{click:t.showLoginOut}},[e("div",{staticClass:"iconfont search-icon"},[t._v("")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"loginOutMsg"},[e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("注销请点击确定")]),e("div",{staticClass:"choose"},[e("div",{staticClass:"yes",on:{click:t.loginOutBtn}},[t._v("确定")]),e("div",{staticClass:"no",on:{click:t.showLoginOut}},[t._v("取消")])])])])])},p=[],g=(e("c5f6"),{name:"mainheader",props:{activeChange:Number,active:Number},data:function(){return{title:"",more:!1,show:!1,count:0}},watch:{activeChange:function(){this.changeNav(this.activeChange)},active:function(){this.homeTitle()}},methods:{changeNav:function(t){switch(t){case 0:this.homeTitle(),this.more=!1;break;case 1:this.title="单科成绩",this.more=!1;break;case 2:this.title="成绩上传",this.more=!1;break}},menuBar:function(){console.log("点击了刷新键"),this.$emit("refresh")},loginOutBtn:function(){console.log("点击了退出登录键"),this.count<10?this.count++:(localStorage.setItem("loginActive",0),this.$emit("loginOut",0),this.showLoginOut())},homeTitle:function(){if(1==this.active||2==this.active){var t=localStorage.getItem("userName");this.title=t}else 0==this.active&&(this.title="请登录")},showLoginOut:function(){this.show=!this.show,this.count=0}},mounted:function(){this.changeNav(this.activeChange)}}),_=g,C=(e("deff"),Object(o["a"])(_,b,p,!1,null,"1d74f980",null));C.options.__file="MainHeader.vue";var x=C.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mainhome"},[e("div",{staticClass:"content"},[e("div",{staticClass:"tab-slide-container"},[e("cube-slide",{ref:"slide",attrs:{loop:!1,"initial-index":t.initialIndex,"auto-play":!1,"show-dots":!1,options:t.slideOptions},on:{change:t.changePage}},[e("cube-slide-item",[e("exam-list",{attrs:{examList:t.examList,classList:t.classList,selectList:t.selectList,examNumber:t.examNumber,active:t.active},on:{openIndex:t.openIndex,selectClass:t.selectClass,selectExam:t.selectExam}})],1),e("cube-slide-item",[e("message-list",{on:{selectSubject:t.selectSubject}})],1),e("cube-slide-item",[e("up-load-list")],1)],1)],1),e("cube-tab-bar",{on:{click:t.clickHandler,change:t.changeHandler},model:{value:t.selectedLabelSlotsOnly,callback:function(s){t.selectedLabelSlotsOnly=s},expression:"selectedLabelSlotsOnly"}},[e("cube-tab",{attrs:{label:"考试列表"}},[e("div",{staticClass:"iconfont"},[t._v("")]),e("span")]),e("cube-tab",{attrs:{label:"单科成绩"}},[e("div",{staticClass:"iconfont"},[t._v("")]),e("span")]),e("cube-tab",{attrs:{label:"成绩上传"}},[e("div",{staticClass:"iconfont"},[t._v("")]),e("span")])],1),e("exam-info",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{openInfo:t.openInfo},on:{hidden:t.hidden}}),t.subjectShow?e("subject-info",{attrs:{subjectInfo:t.subjectInfo,active:t.active,classList:t.classList,examNumber:t.examNumber},on:{subjectHidden:t.subjectHidden}}):t._e(),t.studentListShow?e("student-list",{attrs:{selectExamList:t.selectExamList},on:{studentListHidden:t.studentListHidden,openIndex:t.openIndex}}):t._e()],1)])},I=[],L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"exam-list"},[e("div",{staticClass:"exam-info"},[t.titleShow?e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"name"},[t._v("考试列表")]),e("div",{staticClass:"sum"},[t._v("总分")]),e("div",{staticClass:"number"},[t._v("级排")]),e("div",{staticClass:"date"},[t._v("班排")])]):t._e(),t.titleShow?t._e():e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"name"},[t._v("考试列表")]),e("cube-select",{staticClass:"name",attrs:{options:t.classList,"auto-pop":t.autoPop,title:t.title},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)]),t.titleShow?e("div",{staticClass:"exam-content"},[e("cube-scroll",{attrs:{options:t.scrollOptions}},[e("div",{staticClass:"list-wrapper"},t._l(t.examList,function(s,a){return e("div",{key:a,staticClass:"content border-bottom",on:{click:function(s){t.examInfo(a)}}},[e("div",{staticClass:"name"},[t._v(t._s(s.examName))]),e("div",{staticClass:"sum"},[t._v(t._s(s.sum))]),e("div",{staticClass:"number"},[t._v(t._s(s.schoolRank))]),e("div",{staticClass:"date"},[t._v(t._s(s.classRank))])])}))])],1):t._e(),t.titleShow?t._e():e("div",{staticClass:"exam-content"},[e("cube-scroll",{attrs:{options:t.scrollOptions}},[e("div",{staticClass:"list-wrapper"},t._l(t.examNumber,function(s,a){return e("div",{key:a,staticClass:"content border-bottom",on:{click:function(e){t.selectExam(s)}}},[e("div",{staticClass:"name"},[t._v(t._s(s))])])}))])],1)])},N=[],S={name:"exam-list",props:{examList:Array,classList:Array,selectList:Array,examNumber:Array,active:Number},data:function(){return{value:"所有班级",autoPop:!1,title:"选择班级",titleShow:!0,scrollOptions:{directionLockThreshold:0},options:{}}},watch:{active:function(){1==this.active?this.titleShow=!0:2==this.active&&(this.titleShow=!1)}},methods:{change:function(t,s,e){this.$emit("selectClass",t)},examInfo:function(t){this.$emit("openIndex",t)},selectExam:function(t){this.$emit("selectExam",t)}},mounted:function(){var t=document.getElementsByClassName("exam-content")[0],s=window.innerWidth;t.style.width=s+"px"}},j=S,k=(e("80ac"),Object(o["a"])(j,L,N,!1,null,"b1e22d6a",null));k.options.__file="ExamList.vue";var y=k.exports,E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"MessageList"},[e("div",{staticClass:"about"},[e("div",{staticClass:"row"},[e("div",{staticClass:"title",on:{click:function(s){t.subject("chinese")}}},[t._v("语文")]),e("div",{staticClass:"title",on:{click:function(s){t.subject("math")}}},[t._v("数学")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"title",on:{click:function(s){t.subject("english")}}},[t._v("英语")]),e("div",{staticClass:"title",on:{click:function(s){t.subject("politics")}}},[t._v("政治")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"title",on:{click:function(s){t.subject("biology")}}},[t._v("生物")]),e("div",{staticClass:"title",on:{click:function(s){t.subject("geography")}}},[t._v("地理")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"title",on:{click:function(s){t.subject("history")}}},[t._v("历史")]),e("div",{staticClass:"title",on:{click:function(s){t.subject("physics")}}},[t._v("物理")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"title",on:{click:function(s){t.subject("chemistry")}}},[t._v("化学")])])])])},O=[],$={name:"MessageList",methods:{subject:function(t){this.$emit("selectSubject",t)}}},P=$,A=(e("3eaf"),Object(o["a"])(P,E,O,!1,null,"02226178",null));A.options.__file="MessageList.vue";var M=A.exports,B=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"UpLoadList"},[e("div",{staticClass:"about"},[e("div",{staticClass:"title"},[t._v("\n      您没有权限使用上传功能或该功能未上线\n    ")]),e("div",{staticClass:"remember"},[t._v("\n      如需上传成绩请联系开发人员\n    ")]),e("div",{staticClass:"footer"},[e("p",[t._v("仅限白云区同和启明中学使用")]),e("p",[t._v("该APP为公益性开发，不收集个人信息")])])])])}],T={name:"UpLoadList"},D=T,R=(e("1630"),Object(o["a"])(D,B,H,!1,null,"3aa48e7b",null));R.options.__file="UpLoadList.vue";var U=R.exports,J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ExamInfo",on:{click:t.hidden}},[e("div",{staticClass:"bg",on:{click:t.hidden}},[e("div",{staticClass:"txt"},[t._v(t._s(t.openInfo.examName))]),e("cube-scroll",[e("div",{staticClass:"list-wrapper"},[e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("姓名")]),e("div",{staticClass:"right-txt"},[t._v(t._s(t.openInfo.name))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("语文")]),e("div",{class:t.openInfo.chinese>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.chinese))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("数学")]),e("div",{class:t.openInfo.math>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.math))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("英语")]),e("div",{class:t.openInfo.english>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.english))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("政治")]),e("div",{class:t.openInfo.politics>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.politics))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("生物")]),e("div",{class:t.openInfo.biology>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.biology))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("地理")]),e("div",{class:t.openInfo.geography>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.geography))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("历史")]),e("div",{class:t.openInfo.geography>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.geography))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("物理")]),e("div",{class:t.openInfo.physics>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.physics))])]),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"left-txt"},[t._v("化学")]),e("div",{class:t.openInfo.chemistry>=60?"right-txt":"right-red"},[t._v(t._s(t.openInfo.chemistry))])]),e("div",{staticClass:"sum"},[e("div",{staticClass:"one"},[t._v("总分")]),e("div",{staticClass:"two"},[t._v("年级排名")]),e("div",{staticClass:"three"},[t._v("班级排名")])]),e("div",{staticClass:"sum border-bottom"},[e("div",{staticClass:"one"},[t._v(t._s(t.openInfo.sum))]),e("div",{staticClass:"two"},[t._v(t._s(t.openInfo.schoolRank))]),e("div",{staticClass:"three"},[t._v(t._s(t.openInfo.classRank))])]),e("div",{staticClass:"line"})])])],1)])},F=[],W={name:"ExamInfo",props:{openInfo:Object},methods:{hidden:function(){this.$emit("hidden")}}},q=W,z=(e("4c8a"),Object(o["a"])(q,J,F,!1,null,"b6b163c0",null));z.options.__file="ExamInfo.vue";var G=z.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subject-info"},[e("div",{staticClass:"close iconfont",on:{click:t.hidden}},[t._v("")]),e("div",{staticClass:"bg"},[e("div",{staticClass:"title border-bottom"},[t._v(t._s(t.subjectInfo[0].name)+"单科详情")]),t.activeShow?t._e():e("div",{staticClass:"sels"},[e("cube-select",{staticClass:"sel",attrs:{options:t.classList,"auto-pop":t.autoPop,title:t.title},on:{change:t.changeClass},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),e("cube-select",{staticClass:"sel",attrs:{options:t.examNumber,"auto-pop":t.autoPop,title:t.title2},on:{change:t.changeExam},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}})],1),e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"details"},[t._v("平均分")]),e("div",{class:this.flat>=60?"details":"details-red"},[t._v(t._s(this.flat))])]),t.activeShow?t._e():e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"details"},[t._v("排名")]),e("div",{staticClass:"details"},[t._v("姓名")]),e("div",{staticClass:"details"},[t._v("成绩")])]),e("cube-scroll",[e("div",{staticClass:"list-wrapper"},[t.activeShow?e("div",{staticClass:"list"},[t._l(t.subjectInfo,function(s,a){return e("div",{key:a,staticClass:"content border-bottom"},[e("div",{staticClass:"details"},[t._v(t._s(s.subject))]),e("div",{class:s.value>=60?"details":"details-red"},[t._v(t._s(s.value))])])}),e("div",{staticClass:"line"})],2):t._e(),t.activeShow?t._e():e("div",{staticClass:"list"},[t._l(t.subjectInfo4,function(s,a){return e("div",{key:a,staticClass:"content border-bottom"},[e("div",{staticClass:"details"},[t._v(t._s(a+1))]),e("div",{staticClass:"details"},[t._v(t._s(s.studentName))]),e("div",{class:s.value>=60?"details":"details-red"},[t._v(t._s(s.value))])])}),e("div",{staticClass:"line"})],2)])])],1)])},Q=[],V=(e("55dd"),{name:"SubjectInfo",props:{subjectInfo:Array,active:Number,classList:Array,examNumber:Array},data:function(){return{subjectInfo2:[],subjectInfo3:[],subjectInfo4:[],activeShow:!0,value:"所有班级",flat:"",value2:"",autoPop:!1,title:"选择班级",title2:"选择考试"}},methods:{hidden:function(){this.$emit("subjectHidden")},change:function(t,s,e){this.$emit("selectClass",t)},changeClass:function(t,s,e){var a=this,i=this.subjectInfo;"所有班级"==t?this.subjectInfo2=i:(this.subjectInfo2=[],i.forEach(function(s,e){s.className==t&&a.subjectInfo2.push(s)})),this.changeExam(this.value2)},changeExam:function(t,s,e){var a=this;this.subjectInfo3=[],this.subjectInfo4=[];var i=this.subjectInfo2;i.forEach(function(s,e){s.subject==t&&a.subjectInfo3.push(s)});var n=this.subjectInfo3;n.sort(function(t,s){return s.value-t.value}),this.subjectInfo4=n;var c=0;n.forEach(function(t,s){c+=t.value}),this.flat=c/n.length,this.flat=this.flat.toFixed(2)}},mounted:function(){1==this.active?this.activeShow=!0:2==this.active&&(this.activeShow=!1),this.value2=this.examNumber[0],this.subjectInfo2=this.subjectInfo,this.changeExam(this.value2)}}),X=V,Y=(e("d5a6"),Object(o["a"])(X,K,Q,!1,null,"d86e7ab4",null));Y.options.__file="SubjectInfo.vue";var Z=Y.exports,tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"StudentList"},[e("div",{staticClass:"close iconfont",on:{click:t.hidden}},[t._v("")]),e("div",{staticClass:"bg"},[t._m(0),e("cube-scroll",[e("div",{staticClass:"list-wrapper"},[t._l(t.selectExamList,function(s,a){return e("div",{key:a,staticClass:"content border-bottom",on:{click:function(s){t.examInfo(a)}}},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"sum"},[t._v(t._s(s.sum))]),e("div",{staticClass:"number"},[t._v(t._s(s.schoolRank))]),e("div",{staticClass:"date"},[t._v(t._s(s.classRank))])])}),e("div",{staticClass:"line"})],2)])],1)])},st=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content border-bottom"},[e("div",{staticClass:"name"},[t._v("姓名")]),e("div",{staticClass:"sum"},[t._v("总分")]),e("div",{staticClass:"number"},[t._v("级排")]),e("div",{staticClass:"date"},[t._v("班排")])])}],et={name:"StudentList",props:{selectExamList:Array},methods:{hidden:function(){this.$emit("studentListHidden")},examInfo:function(t){console.log("激活了"),this.$emit("openIndex",t)}}},at=et,it=(e("edd2"),Object(o["a"])(at,tt,st,!1,null,"57a8c294",null));it.options.__file="StudentList.vue";var nt=it.exports,ct={name:"mainhome",props:{examList:Array,classList:Array,active:Number},components:{ExamList:y,MessageList:M,UpLoadList:U,ExamInfo:G,SubjectInfo:Z,StudentList:nt},data:function(){return{openInfo:{},subjectInfo:[],selectList:[],selectExamList:[],examNumber:[],show:!1,subjectShow:!1,studentListShow:!1,initialIndex:0,selectedLabelSlotsOnly:"考试列表",tabs:[{label:"考试列表",icon:"cubeic-home"},{label:"单科成绩",icon:"cubeic-message"},{label:"成绩上传",icon:"cubeic-hot"}],slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},watch:{initialIndex:function(){sessionStorage.setItem("index",this.initialIndex),this.$emit("change",this.initialIndex)},examList:function(){var t=this,s=this.examList;this.examNumber=[],this.selectList=[],s.forEach(function(s,e){-1==t.examNumber.indexOf(s.examName)&&t.examNumber.push(s.examName)}),this.selectList=this.examList}},methods:{clickHandler:function(t){},changeHandler:function(t){switch(t){case"考试列表":this.initialIndex=0;break;case"单科成绩":this.initialIndex=1;break;case"成绩上传":this.initialIndex=2;break}},changePage:function(t){this.initialIndex=1*t,this.selectedLabelSlotsOnly=this.tabs[t].label},openIndex:function(t){this.show=!0,1==this.active?this.openInfo=this.examList[t]:2==this.active&&(this.openInfo=this.selectExamList[t])},selectSubject:function(t){var s=this;this.subjectInfo=[];var e=this.examList,a="";switch(t){case"chinese":a="语文";break;case"math":a="数学";break;case"english":a="英语";break;case"politics":a="政治";break;case"biology":a="生物";break;case"geography":a="地理";break;case"physics":a="物理";break;case"chemistry":a="化学";break}e.forEach(function(e,i){var n={};n.name=a,n.subject=e.examName,n.className=e.className,n.studentName=e.name,n.value=e[t],s.subjectInfo.push(n)}),this.subjectShow=!0},hidden:function(){this.show=!1},subjectHidden:function(){this.subjectShow=!1},studentListHidden:function(){this.studentListShow=!1},selectClass:function(t){var s=this,e=this.examList;"所有班级"==t?this.selectList=e:(this.selectList=[],e.forEach(function(e,a){e.className==t&&s.selectList.push(e)}))},selectExam:function(t){var s=this;this.selectExamList=[];var e=this.selectList;e.forEach(function(e,a){e.examName==t&&s.selectExamList.push(e)}),this.studentListShow=!0}},created:function(){var t=sessionStorage.getItem("index");this.initialIndex=1*t,this.changePage(t)}},ot=ct,lt=(e("a726"),Object(o["a"])(ot,w,I,!1,null,"03f264d1",null));lt.options.__file="MainHome.vue";var rt=lt.exports,ut=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Login"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ifShow"},[e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("学生成绩查询")]),e("div",{staticClass:"all"},[t.selectShow?t._e():e("div",{staticClass:"teacher"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"txt",attrs:{type:"text",name:"教师姓名",value:"",placeholder:"请输入教师姓名"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}}),e("div",{staticClass:"userinfo"},[t._v(t._s(t.userName))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.className,expression:"className"}],staticClass:"txt",attrs:{type:"text",name:"id",value:"",placeholder:"请输入密码"},domProps:{value:t.className},on:{input:function(s){s.target.composing||(t.className=s.target.value)}}}),e("div",{staticClass:"userinfo"},[t._v(t._s(t.className))]),e("div",{staticClass:"login-in",on:{click:t.handleTeacherLogin}},[t._v(t._s(t.loginBtn))]),e("div",{staticClass:"login-change",on:{click:t.change}},[t._v("切换账号")]),e("div",{staticClass:"info"},[e("div",{staticClass:"info1"},[t._v("如无法登录请联系")]),e("div",{staticClass:"info1"},[t._v(t._s(t.appInfo))])])]),t.selectShow?e("div",{staticClass:"parents"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"txt",attrs:{type:"text",name:"学生姓名",value:"",placeholder:"请输入学生姓名"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}}),e("div",{staticClass:"userinfo"},[t._v(t._s(t.userName))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.className,expression:"className"}],staticClass:"txt",attrs:{type:"text",name:"班级",value:"",placeholder:"请输入密码"},domProps:{value:t.className},on:{input:function(s){s.target.composing||(t.className=s.target.value)}}}),e("div",{staticClass:"userinfo"},[t._v(t._s(t.className))]),e("div",{staticClass:"login-in",on:{click:t.handleClickLogin}},[t._v(t._s(t.loginBtn))]),e("div",{staticClass:"login-change",on:{click:t.change}},[t._v("切换账号")]),e("div",{staticClass:"info"},[e("div",{staticClass:"info1"},[t._v("如无法登录请联系")]),e("div",{staticClass:"info1"},[t._v(t._s(t.appInfo))])])]):t._e()])])])])},vt=[],ht={name:"Login",props:{active:Number},data:function(){return{userName:"",className:"",loginBtn:"家长登录",appInfo:"初一四班班主任陈老师",show:!0,selectShow:!0}},watch:{active:function(){1==this.active||2==this.active?this.show=!1:0==this.active&&(this.show=!0)},selectShow:function(){this.selectShow?this.loginBtn="家长登录":this.selectShow||(this.loginBtn="教师登录")}},methods:{handleClickLogin:function(){localStorage.setItem("userName",this.userName),localStorage.setItem("idName",this.className),this.$emit("loginInfo",{userName:this.userName,className:this.className})},handleTeacherLogin:function(){localStorage.setItem("userName",this.userName),localStorage.setItem("idName",this.className),this.$emit("teacherLoginInfo",{userName:this.userName,className:this.className})},change:function(){this.selectShow=!this.selectShow,this.className=""}}},dt=ht,mt=(e("1c07"),Object(o["a"])(dt,ut,vt,!1,null,"4b38a860",null));mt.options.__file="Login.vue";var ft=mt.exports,bt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Message"},[t.show?e("div",{staticClass:"info"},[t._v(t._s(t.msg))]):t._e()])},pt=[],gt={name:"Message",props:{active:Number,Status:Number},data:function(){return{msg:"",show:!1}},watch:{msg:function(){var t=this;this.msg?(this.show=!0,setTimeout(function(){t.show=!1},3e3)):this.show=!1},active:function(){switch(this.msg="",this.active){case 1:this.msg="登录成功";break;case 0:this.msg="已注销",this.resetStatus();break}},Status:function(){switch(this.Status){case 0:this.msg="";break;case 1:this.resetStatus(),this.msg="加载数据库";break;case 2:this.msg="填写有误",this.resetStatus();break;case 3:this.resetStatus(),this.msg="网络异常";break}}},methods:{resetStatus:function(){this.$emit("reset")}}},_t=gt,Ct=(e("5944"),Object(o["a"])(_t,bt,pt,!1,null,"fa63c58a",null));Ct.options.__file="Message.vue";var xt=Ct.exports,wt={name:"home",components:{MainHeader:x,MainHome:rt,Login:ft,Message:xt},data:function(){return{activeChange:0,examList:[],classList:[],dataBase:[],teacherDataBase:[],active:0,Status:0}},methods:{getExamData:function(){var t=this;this.Status=1;var s=(new Date).getTime(),e="https://solace-lee.github.io/json/exam.json?time="+s;f.a.get(e).then(this.examData).then(this.getTeacherData).catch(function(){t.Status=3})},getTeacherData:function(){var t=this,s=(new Date).getTime(),e="https://solace-lee.github.io/json/teacher.json?time="+s;f.a.get(e).then(this.teacherData).catch(function(){t.Status=3})},examData:function(t){t=t.data,t&&(this.dataBase=t);var s=localStorage.getItem("loginActive");if(1==s){var e=localStorage.getItem("userName"),a=localStorage.getItem("idName");this.loginInfo({userName:e,className:a})}},teacherData:function(t){t=t.data,t&&(this.teacherDataBase=t);var s=localStorage.getItem("loginActive");if(2==s){var e=localStorage.getItem("userName"),a=localStorage.getItem("idName");this.teacherLoginInfo({userName:e,className:a})}},indexChange:function(t){this.activeChange=t},loginInfo:function(t){var s=this;this.examList=[];var e=this.dataBase;e.forEach(function(a,i){a.name==t.userName&&a.studentID==t.className?(s.examList.push(a),s.examList.length>0&&(s.active=1,localStorage.setItem("loginActive",s.active))):i==e.length-1&&1!=s.active&&(s.Status=2)})},teacherLoginInfo:function(t){var s=this;this.classList=[];var e="所有班级";this.classList.push(e);var a=this.teacherDataBase;a.forEach(function(e,i){e.name==t.userName&&e.teacherid==t.className?(e.class8?(s.classList.push(e.class1,e.class2,e.class3,e.class4,e.class5,e.class6,e.class7,e.class8),s.filter()):e.class7?(s.classList.push(e.class1,e.class2,e.class3,e.class4,e.class5,e.class6,e.class7),s.filter()):e.class6?(s.classList.push(e.class1,e.class2,e.class3,e.class4,e.class5,e.class6),s.filter()):e.class5?(s.classList.push(e.class1,e.class2,e.class3,e.class4,e.class5),s.filter()):e.class4?(s.classList.push(e.class1,e.class2,e.class3,e.class4),s.filter()):e.class3?(s.classList.push(e.class1,e.class2,e.class3),s.filter()):e.class2?(s.classList.push(e.class1,e.class2),s.filter()):e.class1&&(s.classList.push(e.class1),s.filter()),s.active=2,localStorage.setItem("loginActive",s.active)):i==a.length-1&&2!=s.active&&(s.Status=2)})},filter:function(){var t=this;this.examList=[];var s=this.classList,e=this.dataBase;e.forEach(function(e,a){for(var i=0;i<s.length;i++)s[i]==e.className&&t.examList.push(e)})},loginOut:function(t){this.active=t},reset:function(){var t=this;setTimeout(function(){t.Status=0},3e3)}},mounted:function(){this.getExamData();var t=localStorage.getItem("loginActive");1!=t&&2!=t||(this.active=1*t)}},It=wt,Lt=(e("c73f"),Object(o["a"])(It,h,d,!1,null,"d875ee94",null));Lt.options.__file="Home.vue";var Nt=Lt.exports;a["a"].use(v["a"]);var St=new v["a"]({routes:[{path:"/",name:"home",component:Nt}]}),jt=e("2f62"),kt=0;try{localStorage.active&&(kt=localStorage.activ)}catch(t){}var yt={active:kt},Et={changeActive:function(t,s){t.active=s;try{localStorage.active=s}catch(t){console.log(t)}}};a["a"].use(jt["a"]);var Ot=new jt["a"].Store({state:yt,mutations:Et,actions:{}}),$t=e("fe3c"),Pt=e.n($t);e("7371"),e("aa47"),e("b068");a["a"].config.productionTip=!1,Pt.a.attach(document.body),new a["a"]({router:St,store:Ot,render:function(t){return t(u)}}).$mount("#app")},5944:function(t,s,e){"use strict";var a=e("acbf"),i=e.n(a);i.a},"63b8":function(t,s,e){},7371:function(t,s,e){},"75b4":function(t,s,e){},"80ac":function(t,s,e){"use strict";var a=e("cd2c"),i=e.n(a);i.a},a05e:function(t,s,e){},a726:function(t,s,e){"use strict";var a=e("0175"),i=e.n(a);i.a},aa47:function(t,s,e){},aa6e:function(t,s,e){},acbf:function(t,s,e){},b068:function(t,s,e){},b1b2:function(t,s,e){},c73f:function(t,s,e){"use strict";var a=e("b1b2"),i=e.n(a);i.a},cd2c:function(t,s,e){},d5a6:function(t,s,e){"use strict";var a=e("00a0"),i=e.n(a);i.a},deff:function(t,s,e){"use strict";var a=e("aa6e"),i=e.n(a);i.a},e73c:function(t,s,e){},edd2:function(t,s,e){"use strict";var a=e("a05e"),i=e.n(a);i.a}});
//# sourceMappingURL=app.0435b2d1.js.map