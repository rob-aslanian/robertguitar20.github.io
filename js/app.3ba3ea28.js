(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],a[i]&&m.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0156":function(e,t,n){"use strict";var s=n("1df0"),a=n.n(s);a.a},"015c":function(e,t,n){"use strict";var s=n("ba18"),a=n.n(s);a.a},"10e2":function(e,t,n){},"199c":function(e,t){},"1df0":function(e,t,n){},"23be":function(e,t,n){"use strict";var s=n("199c"),a=n.n(s);t["default"]=a.a},2856:function(e,t,n){},3286:function(e,t,n){},"3a8a":function(e,t,n){"use strict";var s=n("6f25"),a=n.n(s);a.a},"3b37":function(e,t,n){},"3dfd":function(e,t,n){"use strict";var s=n("f6c6"),a=n("23be"),r=(n("5c0b"),n("2877")),i=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);i.options.__file="App.vue",t["default"]=i.exports},"489a":function(e,t,n){"use strict";var s=n("cab3"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=n("3dfd"),r=(n("7f7f"),n("28a5"),n("8c4f")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("start-screen")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[void 0!==e.message?n("div",{staticClass:"error time-up"},[e._v("\n    "+e._s(e.message)+"\n  ")]):e._e(),n("keep-alive",[e.register?e._e():n("login",{tag:"component"},[n("input",{staticClass:"btn green darken-1",attrs:{type:"button",value:"sign in"},on:{click:function(t){e.register=!e.register}}})])],1),n("keep-alive",[e.register?n("register",{tag:"component"},[n("input",{staticClass:"btn amber darken-1",attrs:{type:"button",value:"log in"},on:{click:function(t){e.register=!e.register}}})]):e._e()],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"register"}},[n("h4",{staticClass:"center  amber-text text-darken-3"},[e._v("Register")]),n("hr"),n("form",{on:{submit:function(t){t.preventDefault(),e.addNewUser()}}},[n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[e._v("account_circle")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],staticClass:"icon_prefix reg-input",attrs:{type:"text",placeholder:"User name...",name:"name"},domProps:{value:e.user_name},on:{input:[function(t){t.target.composing||(e.user_name=t.target.value)},e.userNameValidate]}})]),n("hr"),n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[e._v("assignment_ind")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login_name,expression:"login_name"}],staticClass:"icon_prefix reg-input",attrs:{type:"text",placeholder:"Login name...",name:"login"},domProps:{value:e.login_name},on:{input:[function(t){t.target.composing||(e.login_name=t.target.value)},e.loginValidate]}})]),n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[e._v("beenhere")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"reg-input",attrs:{type:"password",placeholder:"Password..."},domProps:{value:e.password},on:{input:[function(t){t.target.composing||(e.password=t.target.value)},e.passwordValidate]}})]),n("div",{staticClass:"row"},[n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],staticClass:"with-gap",attrs:{name:"sex",type:"radio",value:"male"},domProps:{checked:e._q(e.sex,"male")},on:{change:function(t){e.sex="male"}}}),n("span",[e._v("Male")])])]),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],staticClass:"with-gap",attrs:{name:"sex",type:"radio",value:"female"},domProps:{checked:e._q(e.sex,"female")},on:{change:function(t){e.sex="female"}}}),n("span",[e._v("Female")])])])]),n("div",{staticClass:"input-group"},[n("input",{staticClass:"btn reg-btn amber darken-3",attrs:{type:"submit",value:"register"}}),e._t("default")],2)])])},d=[],m=n("8aa5"),f=n.n(m),p=(n("e71f"),n("73c3")),h=n.n(p);s["a"].use(h.a);var g={apiKey:"AIzaSyCWwvlnk2RIlWDCh5c0O82Ds9ZytUsO2Pw",authDomain:"vue-chat-97b23.firebaseapp.com",databaseURL:"https://vue-chat-97b23.firebaseio.com",projectId:"vue-chat-97b23",storageBucket:"vue-chat-97b23.appspot.com",messagingSenderId:"1084147621171"};f.a.initializeApp(g);var v=f.a.firestore(),_={timestampsInSnapshots:!0};v.settings(_);var x=f.a.firestore(),b=(n("a481"),n("6762"),n("2fdb"),n("4917"),n("ac4d"),n("8a81"),n("ac6a"),n("c5f6"),{MOUNTS:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"},MOUNTS_DAY:{1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",0:"Sun"}}),C=b,w={_smile1:"&#x1F601;",_smile2:"&#x1F602;",_smile3:"&#x1F603;",_smile4:"&#x1F604;",_smile5:"&#x1F605;",_smile6:"&#x1F606;",_winking:"&#x1F609;",_tongue1:"&#x1F60B;",_tongue2:"&#x1F61D",_relived:"&#x1F60C;",_in_love:"&#x1F60D;",_smirking:"&#x1F60F;",_unamused:"&#x1F612;",_sweat:"&#x1F613;",_kiss:"&#x1F618;",_kissing:"&#x1F61A;",_winking_eye:"&#x1F61C;",_satisfied:"&#x1F60A;",_sad1:"&#x1F61E;",_sad2:"&#x1F614;",_sad3:"&#x1F623;",_sad4:"&#x1F625;",_sad5:"&#x1F630;",_sad6:"&#x1F629;",_scary1:"&#x1F628;",_scary2:"&#x1F631",_angry1:"&#x1F620;",_angry2:"&#x1F621;",_angry3:"&#x1F624;",_cry1:"&#x1F622;",_cry2:"&#x1F62D;",_sleepy:"&#x1F62A;",_tired:"&#x1F62B;",_shock1:"&#x1F632;",_shock2:"&#x1F633;",_shock3:"&#x1F635;",_face_mask:"&#x1F637;",_cat_smile1:"&#x1F638",_cat_smile2:"&#x1F639;",_cat_smile3:"&#x1F63A;",_cat_love:"&#x1F63B;",_cat_wry:"&#x1F63C;",_cat_kiss:"&#x1F63D;",_cat_angry:"&#x1F63E;",_cat_cry:"&#x1F63F;",_cat_shock:"&#x1F640;",_girl_face1:"&#x1F645;",_girl_face2:"&#x1F646;",_girl_face3:"&#x1F64B;",_girl_face4:"&#x1F64D;",_girl_face5:"&#x1F64E",_man1:"&#x1F647;",_mokey1:"&#x1F648;",_monkey2:"&#x1F649;",_monkey_3:"&#x1F64A;",_pray:"&#x1F64F;",_peace:"&#x270C;",_raised1:"&#x1F64C;",_raised2:"&#x270A;",_raised3:"&#x270B;",_clap:"&#x1F44F;",_open_hand:"&#x1F450;",_like:"&#x1F44D;",_unlike:"&#x1F44E;",_ok:"&#x1F44C;",_waving:"&#x1F44B;",_dam:"&#x1F44A;",_to_right_hand:"&#x1F449;",_to_left_hand:"&#x1F448;",_love1:"&#x1F493;",_love2:"&#x1F495;",_love3:"&#x1F496;",_broken_heart:"&#x1F494;",_poop:"&#x1F4A9",_dash:"&#x1F4A8;"},y=w;function F(e,t){var n=document.createElement(e);return t&&(n.className=t),n}function k(e){return document.querySelector(e)}function M(e){return document.querySelectorAll(e)}function U(e){return void 0==e}function A(e,t){for(var n in e)if(Number(n)==t)return e[n]}var j=function(){var e=new Date;return{Handler:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500,s=k(".error")||k(".success")?s:F("div",t?"error":"success");if(!U(s)){s.textContent=e;var a=k(".input-field");return a.insertAdjacentElement("afterend",s),setTimeout(function(){return s.remove()},n)}},scrollBottom:function(e){if(!U(e)&&!U(e.scrollHeight)&&!U(e.clientHeight))return e.scrollTop=e.scrollHeight},setCookie:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name";e.setTime(e.getTime()+864e3),document.cookie="".concat(n,"=").concat(t,";path=/;expires=").concat(e.toGMTString())},validate:function(e){var t=/^([a-z]{4,16})$/i;return!!t.test(e)||(this.Handler("Login name can contain only letters with min 4 and  max 16 length",!0,2e3),!1)},passwordValidate:function(e){var t=/^(\w|\d){4,16}$/i;return!!t.test(e)||(this.Handler("Password  must be  min 4 and  max 16 length",!0,2e3),!1)},nameValidate:function(e){var t=/^(\w|\d){4,20}$/i;return!!t.test(e)||(this.Handler("Name must be  min 4 and  max 20 length ant can`t contain spaces ",!0,2e3),!1)},getFullDate:function(){var t=e.getDate(),n=e.getDay(),s=e.getMonth(),a=e.getFullYear();s=A(C.MOUNTS,s),n=A(C.MOUNTS_DAY,n);var r="".concat(n," ").concat(t," ").concat(s," ").concat(a);return r},getNow:function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),s=e.getSeconds(),a="".concat(t,":").concat(n<10?"0"+n:n,":").concat(s<10?"0"+s:s,"\n                        ").concat(t>12?"PM":"AM");return{time:a,date:this.getFullDate()}},insertTo:function(e,t,n){e.appendChild(t),e.appendChild(n)},emojiParser:function(e){var t=/_\w+/gi,n=!0,s=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var o=r.value,c=o.textContent.trim(),u=c.match(t);if(t.test(c))for(var l in y)for(var d=0;d<u.length;d++)c.includes(u[d])&&l==u[d]&&(c=c.replace(u[d],y[l]),o.setAttribute("data-code",l),o.innerHTML=c)}}catch(e){s=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}},setEmojis:function(e){for(var t in y){var n=F("span","emoji");n.innerHTML=y[t],n.setAttribute("title",t),e.appendChild(n)}},deleteEmojis:function(){var e=M(".emoji");U(e)||e.forEach(function(e){return e.remove()})},getEmojis:function(){var e=M(".emoji"),t=k(".main_input");e.forEach(function(e){e.addEventListener("click",function(){var n=e.textContent;return t.value+=n+" "})})}}},E=j(),$={data:function(){return{login_name:null,user_name:null,password:null,isSet:!1,sex:"male"}},computed:{isValid:function(){if(this.userNameValidate()&&this.loginValidate()&&this.passwordValidate())return!0}},methods:{userNameValidate:function(){return E.nameValidate(this.user_name)&&this.user_name},loginValidate:function(){return E.validate(this.login_name)&&this.login_name},passwordValidate:function(){return E.passwordValidate(this.password)&&this.password},addNewUser:function(){var e=this;if(this.isValid){var t=x.collection("users").doc(this.login_name.toLowerCase());t.get().then(function(n){n.exists?E.Handler("Such user is already exist"):t.set({user_name:e.user_name,password:e.password,sex:e.sex,permission:"guest"}).then(function(){return E.Handler("You successfuly registred!",!1)})})}else E.Handler("All fields must be full")}}},S=$,I=(n("015c"),n("2877")),N=Object(I["a"])(S,l,d,!1,null,null,null);N.options.__file="Register.vue";var D=N.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h4",{staticClass:"center  green-text text-darken-1"},[e._v("Welcome")]),n("hr"),n("form",{on:{submit:function(t){t.preventDefault(),e.startChat()}}},[n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[e._v("assignment_ind")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"icon_prefix",attrs:{type:"text",placeholder:"Login name...",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[e._v("beenhere")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password..."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"input-group"},[n("input",{staticClass:"btn green lighten-1 log-btn",attrs:{type:"submit",value:"Ready"}}),e._t("default")],2)])])},T=[],P={name:"app",data:function(){return{name:null,password:null}},firestore:function(){return{chats:x.collection("chats")}},methods:{startChat:function(){var e=this;if(this.name&&this.password){var t=x.collection("users").doc(this.name.toLowerCase());t.get().then(function(t){var n=t.exists?t.data().password:null;if(t.exists&&e.password===n)return E.setCookie(e.name.toLowerCase()),e.$router.push({name:"chat",params:{name:e.name}});E.Handler("Wrong username or password")})}}}},L=P,H=(n("efce"),Object(I["a"])(L,O,T,!1,null,"4457d817",null));H.options.__file="Login.vue";var V=H.exports,B={name:"app",components:{Register:D,Login:V},data:function(){return{register:!1}},mounted:function(){var e=document.querySelector(".time-up");e&&void 0!==e&&setTimeout(function(){return e.remove()},2e3)},computed:{message:function(){var e=this.$route.params.message;if(void 0!==e)return this.$route.params.message}},beforeCreate:function(){var e=document.cookie;""!==e&&this.$router.push({name:"chat"})}},Y=B,q=(n("7c1b"),Object(I["a"])(Y,c,u,!1,null,"1f4b9742",null));q.options.__file="StartScreen.vue";var J=q.exports,R={name:"home",components:{StartScreen:J}},W=R,z=Object(I["a"])(W,i,o,!1,null,null,null);z.options.__file="Home.vue";var G=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[void 0!==e.message?n("div",{staticClass:"success"},[e._v("\n\t\t\t"+e._s(e.message)+"\n\t\t")]):e._e(),n("div",{staticClass:"card-action"},[n("h4",{staticClass:"center orange-text text-darken-3"},[e._v("Aslanyan`s Chat")]),n("hr"),n("change-name"),n("div",{ref:"content",staticClass:"card-content"},[n("span"),n("ul",{staticClass:"messages"},e._l(e.chats,function(t,s){return n("li",{key:s,class:e.userInfo.userName==t.name?"current delete":"another",on:{click:function(t){return t.target!==t.currentTarget?null:e.deleteData(t)}}},[e.userInfo.userName==t.name?n("input",{attrs:{type:"hidden",name:"hidden_name"},domProps:{value:t.name}}):e._e(),n("span",{staticClass:"name"},[e._v(e._s(e.userInfo.userName==t.name?"You":t.name))]),e.userInfo.userName!==t.name?n("span",{class:"sex "+e.userInfo.gender},[e._v(e._s("male"===e.userInfo.gender?"♂":"♀"))]):e._e(),n("p",{ref:"input",refInFor:!0,staticClass:"message aqua-text"},[e._v(e._s(t.text))]),n("span",{staticClass:"time"},[e._v(e._s(t.date.time))]),n("span",{staticClass:"date"},[e._v(e._s(t.date.date))])])}))]),n("new-message",{attrs:{content:this.$refs["content"]}})],1)])])},Z=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("form",{on:{submit:function(t){t.preventDefault(),e.addMessage()}}},[n("div",{staticClass:"input-field flex-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"main_input",attrs:{type:"text",placeholder:"Your Message..."},domProps:{value:e.text},on:{focus:e.scroll,input:[function(t){t.target.composing||(e.text=t.target.value)},e.textLength]}}),n("emoji")],1),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"submit btn green button",attrs:{type:"submit"}},[e._v("\n              Send Message\n              "),n("i",{staticClass:"material-icons prefix"},[e._v("send")]),n("span",{staticClass:"max-text"},[e._v(e._s(e.length)+"/100")])]),n("button",{staticClass:"delete btn red button",attrs:{type:"button",disabled:0==e.issetMessage},on:{click:function(t){e.deleteAllData()}}},[e._v("Delete message\n              "),n("i",{staticClass:"material-icons prefix"},[e._v("delete")])])])])])},X=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"emoji_main"},[n("i",{staticClass:"material-icons prefix emoji_btn",on:{click:e.emojiParse}},[e._v("sentiment_very_satisfied")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.emojisShow,expression:"emojisShow"}],ref:"emoji_content",staticClass:"emoji_content"})])},te=[],ne={data:function(){return{emojisShow:!1}},methods:{emojiParse:function(){return this.emojisShow=!this.emojisShow,this.emojisShow?(E.setEmojis(this.$refs["emoji_content"]),E.getEmojis()):E.deleteEmojis()}}},se=ne,ae=(n("a3d2"),Object(I["a"])(se,ee,te,!1,null,null,null));ae.options.__file="Emoji.vue";var re=ae.exports,ie={props:["content","issetMessage"],components:{Emoji:re},data:function(){return{text:null,maxTextLenght:100}},computed:{name:function(){return this.$store.getters.getUser.user_name},length:function(){return this.text?this.text.length:0}},methods:{scroll:function(){return E.scrollBottom(this.content)},textLength:function(e){return this.length>=this.maxTextLenght?(E.Handler("Text max length can be ".concat(this.maxTextLenght)),this.text=this.text.slice(0,this.maxTextLenght)):this.text},addMessage:function(){var e=/^[^\s]+/,t=document.querySelector(".main_input");this.text=""===t.value?this.text:t.value;var n={text:this.text,name:this.name,createdAt:Date.now(),date:E.getNow()};this.textLength()&&e.test(this.text)?(x.collection("messages").add(n),this.scroll(),this.text=""):E.Handler("Invalid Value:Field must not be empty , and can`t start and end with space!")},deleteAllData:function(){var e=x.collection("messages").where("name","==",this.name);e.get().then(function(e){e.forEach(function(e){return e.ref.delete(),E.Handler("Your messages was deleted !",!1)})})}}},oe=ie,ce=(n("3a8a"),Object(I["a"])(oe,Q,X,!1,null,null,null));ce.options.__file="NewMessage.vue";var ue=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"btn-group collapse"},[n("div",{staticClass:"collapse-btn",on:{click:e.collapse}},[e._v(" View "+e._s(e.collapsed?"Less":"More"))]),n("div",{staticClass:"collapsed"},[n("button",{staticClass:"btn amber darken-2 button",attrs:{type:"button"},on:{click:e.logOut}},[n("i",{staticClass:"material-icons prefix",attrs:{title:"Change User Name"}},[e._v("subdirectory_arrow_left")]),e._v("\n                  Log out\n              ")]),n("button",{staticClass:"btn indigo lighten-1 button",attrs:{type:"button"},on:{click:function(t){e.show=!e.show}}},[e._v(" \n                      Chat Info\n                      "),n("i",{staticClass:"material-icons prefix",attrs:{title:"More info"}},[e._v("\n                          "+e._s(e.show?"arrow_drop_up":"arrow_drop_down")+"\n                      ")])]),e.isAdmin?n("button",{staticClass:"btn button",attrs:{type:"button"}},[n("router-link",{attrs:{to:{name:"admin",params:{isAdmin:e.isAdmin}}}},[e._v(" Admin Panel")]),n("i",{staticClass:"material-icons prefix"},[e._v("account_box")])],1):e._e()])]),n("transition",{attrs:{name:"bounce"}},[e.show?n("div",{staticClass:"chat-info"},[n("ul",[n("li",[n("span",{staticClass:"name-header"},[e._v("Your User Name: "),n("strong",[e._v(e._s(e.name))])])]),n("li",[n("span",[e._v("Your Gender: "),n("strong",[e._v(e._s(e.gender))])])]),n("li",[n("span",[e._v("Your Message Count: "),n("strong",[e._v(e._s(e.chatInfo.userMessages))])])])]),n("ul",[n("li",[n("span",[e._v("All Messages Count: "),n("strong",[e._v(e._s(e.chatInfo.usersMessages))])])]),n("li",[n("span",[e._v("Users In Chat: "),n("strong",[e._v(e._s(e.chatInfo.usersInChat))])])]),n("li",[n("span",[e._v("Users : "),n("strong",[e._v(e._s(e.chatInfo.users))])])])]),n("span",{staticClass:"version"},[e._v("Version:2.4.1")])]):e._e()])],1)},de=[],me={data:function(){return{isClose:!0,show:!1,newName:null,collapsed:!1}},computed:{isAdmin:function(){var e=this.$store.getters.getUser.permission;if("admin"===e)return!0},name:function(){return this.$store.getters.getUser.user_name},gender:function(){return this.$store.getters.getUser.gender},chatInfo:function(){return{users:this.$store.getters.getUsers,usersInChat:this.$store.getters.getUsersInChat,userMessages:this.$store.getters.getUserMessages,usersMessages:this.$store.getters.getUsersMessages}}},methods:{validate:function(){return E.validate(this.newName)},collapse:function(e){var t=e.target.nextSibling;if(t){var n=window.getComputedStyle(t).display;"none"==n?(t.style.display="flex",this.collapsed=!0):(t.style.display="none",this.collapsed=!1)}},logOut:function(){document.cookie="name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",location.replace("/")},deleteData:function(){return E.deleteAllData(this.counts.allMessage)}}},fe=me,pe=(n("489a"),Object(I["a"])(fe,le,de,!1,null,null,null));pe.options.__file="ChangeName.vue";var he=pe.exports,ge={components:{NewMessage:ue,ChangeName:he},data:function(){return{name:document.cookie.split("=")[1]}},firestore:function(){return{chats:x.collection("messages").orderBy("createdAt")}},computed:{userInfo:function(){return{userName:this.$store.getters.getUser.user_name,gender:this.$store.getters.getUser.gender}},message:function(){var e=this.$route.params.message;if(void 0!==e)return this.$route.params.message}},methods:{deleteData:function(e){var t=this,n=e.target;if("current"==n.classList[0]){var s=n.childNodes[3],a=(n.firstChild.value,s.textContent),r=x.collection("messages");r.get().then(function(e){e.forEach(function(e){var n=e.data().name,s=e.data().text;a===s&&n===t.userInfo.userName&&(E.Handler("Your Message was deleted!",!1,2e3),e.ref.delete())})})}}},updated:function(){this.$store.dispatch("getAllInfo");var e=document.querySelectorAll(".message"),t=/(https?:)?(\/\/)?(w{3}\.)?(\w{2,19}\.)(\w{1,12}(\.\w+)?)\/*\S+/gi;e.forEach(function(e){var n=e.textContent,s=n.match(t);if(n.match(t)){var a=e.textContent;s.forEach(function(t,n,s){var r=t.includes("http","https"),i='<a href="'.concat(r?t:"http://"+t,'" target="_blank">').concat(t,"</a>");s.indexOf(t)===n&&(a=a.replace(t,i),e.innerHTML=a)})}}),E.emojiParser(e)},mounted:function(){var e=document.querySelector(".success");e&&void 0!==e&&setTimeout(function(){return e.remove()},2e3),""===document.cookie&&this.$router.push({name:"main",params:{message:"Time is up"}})},beforeMount:function(){this.$store.dispatch("setUser")}},ve=ge,_e=(n("abcb"),Object(I["a"])(ve,K,Z,!1,null,"b29cba1c",null));_e.options.__file="Chat.vue";var xe=_e.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("admin-panel")},Ce=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-action"},[n("router-link",{attrs:{to:{name:"chat"}}},[n("button",{staticClass:"btn blue darken-2"},[n("i",{staticClass:"material-icons prefix"},[e._v("arrow_back")])])]),n("h2",{staticClass:"center cyan-text text-darken-2"},[e._v("Admin Panel")]),n("hr"),n("table",{staticClass:"striped responsive-table"},[e._m(0),n("tbody",e._l(e.users,function(t){return n("tr",[n("th",[e._v(e._s(t.id))]),n("th",[e._v(e._s(t.name))]),n("th",[e._v(e._s(t.gender))]),n("th",[e._v(e._s(t.permission))]),n("th",[n("button",{staticClass:"btn red",attrs:{disabled:"admin"===t.permission},on:{click:function(n){e.deleteUser(t.id,t.name)}}},[e._v("\n                                Delete\n                            ")])])])}))]),n("button",{staticClass:"btn red darken-4 button delete-msgs",attrs:{disabled:!e.hasMessages},on:{click:e.deleteAllData}},[n("i",{staticClass:"material-icons prefix"},[e._v("delete")]),e._v("\n                 Delete All Messages\n            ")])],1)])])},ye=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("ID")]),n("th",[e._v("User Name")]),n("th",[e._v("Gender")]),n("th",[e._v("Permission")]),n("th",[e._v("Delete User")])])])}],Fe={data:function(){return{users:[],hasMessages:this.$store.getters.getUsersMessages>0}},methods:{deleteUser:function(e,t){var n=this,s=x.collection("messages"),a=x.collection("users");confirm("Delete this user ?")&&(s.get().then(function(e){e.empty||e.forEach(function(e){if(e.data().name===t)return e.ref.delete()})}),a.doc(e).delete().then(function(){n.$router.push({name:"chat",params:{message:"The user with login name ".concat(e," was deleted !")}})}))},deleteAllData:function(){var e=this;confirm("Delete all messages ?")&&x.collection("messages").get().then(function(e){e.forEach(function(e){e.ref.delete()})}).then(function(){return e.$router.push({name:"chat",params:{message:"All messages was deleted"}})})}},mounted:function(){var e=this,t=x.collection("users").orderBy("user_name");t.get().then(function(t){t.forEach(function(t){var n=t.id,s=t.data().user_name,a=t.data().permission,r=t.data().sex;e.users.push({id:n,name:s,permission:a,gender:r})})})},beforeUpdate:function(){console.log(this.$store.getters.getUsers),""===document.cookie&&this.$router.push({name:"main",params:{message:"Time is up"}})}},ke=Fe,Me=(n("6af4"),Object(I["a"])(ke,we,ye,!1,null,null,null));Me.options.__file="AdminPanel.vue";var Ue=Me.exports,Ae={components:{AdminPanel:Ue}},je=Ae,Ee=(n("0156"),Object(I["a"])(je,be,Ce,!1,null,null,null));Ee.options.__file="Admin.vue";var $e=Ee.exports;s["a"].use(r["a"]);var Se=new r["a"]({mode:"history",routes:[{path:"/",name:"main",component:G},{path:"/chat",name:"chat",component:xe,props:!0,beforeEnter:function(e,t,n){var s=document.cookie.split("=")[1],a=e.params.name;return a=s,void 0===a&&n({path:"/"}),a?n():n({path:"/"})}},{path:"/chat/admin",name:"admin",component:$e,beforeEnter:function(e,t,n){var s=e.params.isAdmin;return void 0!==s&&s||n({path:"/"}),n()}}]}),Ie=n("2f62");s["a"].use(Ie["a"]);var Ne=new Ie["a"].Store({state:{userInfo:{},users:0,usersMessagesCount:0,userMessagesCount:0,usersInChat:0},actions:{setUser:function(e){e.commit("setUser")},setAllMessages:function(e){e.commit("getAllUsersMessages")},setUserMessages:function(e){e.commit("getUserMessages")},setUsersInChat:function(e){e.commit("getUsersInChat")},setUsers:function(e){e.commit("getAllUsers")},getAllInfo:function(e){e.commit("getAllUsersMessages"),e.commit("getUserMessages"),e.commit("getUsersInChat"),e.commit("getAllUsers")}},mutations:{setUser:function(e,t){var n=document.cookie.split("=")[1];x.collection("users").doc(n).get().then(function(t){var n={login_name:t.id,user_name:t.data().user_name,permission:t.data().permission,gender:t.data().sex};return e.userInfo=n})},getAllUsersMessages:function(e){x.collection("messages").get().then(function(t){if(!t.empty){var n=[];return t.forEach(function(e){return n.push(e.ref.id)}),e.usersMessagesCount=n.length}})},getUserMessages:function(e){var t=this;x.collection("messages").get().then(function(n){var s=[];return n.forEach(function(n){if(n.data().name==e.userInfo.user_name)return s.push(t.name)}),e.userMessagesCount=s.length})},getUsersInChat:function(e){x.collection("messages").get().then(function(t){var n=[];return t.forEach(function(e){return n.push(e.data().name)}),n=n.filter(function(e,t,n){return n.indexOf(e)==t}),e.usersInChat=n.length})},getAllUsers:function(e){x.collection("users").get().then(function(t){var n=[];return t.empty||t.forEach(function(e){return n.push(e.id)}),e.users=n.length})}},getters:{getUser:function(e){return e.userInfo},getUsersMessages:function(e){return e.usersMessagesCount},getUserMessages:function(e){return e.userMessagesCount},getUsersInChat:function(e){return e.usersInChat},getUsers:function(e){return e.users}}}),De=Ne;s["a"].config.productionTip=!1,new s["a"]({store:De,router:Se,render:function(e){return e(a["default"])}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("2856"),a=n.n(s);a.a},"6af4":function(e,t,n){"use strict";var s=n("3286"),a=n.n(s);a.a},"6f25":function(e,t,n){},"7bd3":function(e,t,n){},"7c1b":function(e,t,n){"use strict";var s=n("10e2"),a=n.n(s);a.a},"9bed":function(e,t,n){},a3d2:function(e,t,n){"use strict";var s=n("3b37"),a=n.n(s);a.a},abcb:function(e,t,n){"use strict";var s=n("7bd3"),a=n.n(s);a.a},ba18:function(e,t,n){},cab3:function(e,t,n){},efce:function(e,t,n){"use strict";var s=n("9bed"),a=n.n(s);a.a},f6c6:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a})}});
//# sourceMappingURL=app.31a47077.js.map
