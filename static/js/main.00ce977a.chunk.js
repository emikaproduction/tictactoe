(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/logo.fbcd6f0d.png"},30:function(n,e,t){n.exports=t.p+"static/media/x-icon.1d472015.png"},31:function(n,e,t){n.exports=t.p+"static/media/o-icon.b92631f7.png"},32:function(n,e,t){n.exports=t.p+"static/media/trophy-icon.7f72d795.png"},34:function(n,e,t){n.exports=t(49)},39:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(24),i=t.n(o),c=(t(39),t(9)),l=t(6),u={home:"/",game:"/game"},s=t(1),d=t(2),m="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";function f(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n\n  body {\n    overflow-y: scroll;\n    background: linear-gradient(to bottom, "," 0%,"," 0%,"," 100%,"," 100%);\n    background-repeat: no-repeat;\n    height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return f=function(){return n},n}var p=Object(d.a)(f(),"#2989d8","#2989d8","#e83737","#e83737"),b=t(10),g=t(11),h=t(12),y=t(15),x=t(13),v=t(16),j=t(27),O=t.n(j);function w(){var n=Object(s.a)(["\n  max-height: 300px;\n  background-color: ",";\n  border-radius: 20%;\n  margin-bottom: 20px;\n"]);return w=function(){return n},n}var k=d.b.img(w(),"rgba(255, 255, 255, .1)"),E=function(){return a.a.createElement(k,{src:O.a,alt:"Logo"})};function P(){var n=Object(s.a)(["\n  cursor: pointer;\n  margin: 10px 0;\n  border: none;\n  box-shadow: ",";\n  border-radius: 3px;\n  padding: 10px;\n  background-color: ",";\n  color: white;\n  font-size: 1em;\n"]);return P=function(){return n},n}function z(){var n=Object(s.a)(["\n  display: flex;\n  margin: 10px 0;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: ",";\n"]);return z=function(){return n},n}function C(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: white;\n"]);return C=function(){return n},n}function W(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  background-color: ",";\n  box-sizing: border-box;\n  border-radius: 40px;\n  padding: 2em;\n"]);return W=function(){return n},n}function S(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return S=function(){return n},n}var N=function(n){function e(){var n,t;Object(g.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(y.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(a)))).state={firstPlayer:"",secondPlayer:""},t.handleChange=function(n){var e=n.target,r=e.name,a=e.value;t.setState(Object(b.a)({},r,a))},t.handleSubmit=function(n){var e=t.state,r=e.firstPlayer,a=e.secondPlayer;n.preventDefault(),t.props.history.push({pathname:u.game,state:{firstPlayer:r,secondPlayer:a}})},t}return Object(v.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){return a.a.createElement(I,null,a.a.createElement(E,null),a.a.createElement(B,{onSubmit:this.handleSubmit},a.a.createElement(A,null,"Imi\u0119 pierwszego gracza:",a.a.createElement(q,{type:"text",name:"firstPlayer",onChange:this.handleChange,required:!0})),a.a.createElement(A,null,"Imi\u0119 drugiego gracza:",a.a.createElement(q,{type:"text",name:"secondPlayer",onChange:this.handleChange,required:!0})),a.a.createElement(J,{type:"submit",value:"Submit"},"Zagraj!")))}}]),e}(a.a.Component),I=d.b.div(S()),B=d.b.form(W(),"rgba(255, 255, 255, .1)"),A=d.b.label(C()),q=d.b.input(z(),m),J=d.b.button(P(),m,"#2989d8"),L=Object(l.d)(N),M=function(){return a.a.createElement(L,null)},D=t(14),F=t(20),G=t(30),T=t.n(G),Z=t(31),$=t.n(Z);function H(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  align-items: center;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  font-size: 3em;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  &:focus {\n    outline: none;\n  }\n  &.firstPlayer {\n    background-image: url('","');\n    background-size: 100%;\n    &:hover {\n      background-color: white;\n      cursor: default;\n    }\n  }\n  &.secondPlayer {\n    background-image: url('","');\n    background-size: 100%;\n    &:hover {\n      background-color: white;\n      cursor: default;\n    }\n  }\n"]);return H=function(){return n},n}var K=d.b.button(H(),T.a,$.a),Q=function(n){var e=n.handleOnClick,t=n.value;return a.a.createElement(K,{value:t,onClick:e})},R=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],U=function(n,e){for(var t=0;t<R.length;t++){var r=Object(D.a)(R[t],3),a=r[0],o=r[1],i=r[2];n&&n.length>=3&&n.includes(a)&&n.includes(a)===n.includes(o)&&n.includes(a)===n.includes(i)&&e()}return null};function V(){var n=Object(s.a)(["\n  padding: 10px 15px;\n  font-size: 2em;\n  color: white;\n  margin-bottom: 15px;\n  &.firstPlayer {\n    background-color: ",";\n  }\n  &.secondPlayer {\n    background-color: ",";\n  }\n  &.winner {\n    background-color: green;\n  }\n"]);return V=function(){return n},n}var X=d.b.div(V(),"#e83737","#2989d8"),Y=function(n){var e=n.currentPlayer,t=n.playerName,r=n.isWinner;return a.a.createElement(X,{className:e+(r?" winner":" ")},"Gracz ",t," ",r&&"Wygra\u0142!")},_=t(32),nn=t.n(_);function en(){var n=Object(s.a)(["\n  position: absolute;\n  background: white;\n  padding: 10px 15px;\n  font-size: 2em;\n  box-shadow: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  position: absolute;\n  max-height: 300px;\n  border-radius: 20%;\n  margin-bottom: 20px;\n  -webkit-animation-name: example; \n  -webkit-animation-duration: 2s;\n  animation-name: bounce;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n\n  @keyframes bounce {\n    0%   {\n      transform: rotate(0deg) scale(1, 1);\n    }\n    25%  {\n      transform: rotate(20deg) scale(1.2, 1.2);\n    }\n    50%  {\n      transform: rotate(0deg) scale(1, 1);\n    }\n    75%  {\n      transform: rotate(-20deg) scale(1.2, 1.2);\n    }\n  }\n"]);return tn=function(){return n},n}var rn=d.b.img(tn()),an=d.b.span(en(),m),on=function(n){var e=n.playerName;return a.a.createElement(a.a.Fragment,null,a.a.createElement(rn,{src:nn.a,alt:"Trofeum zwyci\u0119zcy"}),a.a.createElement(an,null,"Wygra\u0142\xa0",a.a.createElement("br",null),e))};function cn(){var n=Object(s.a)(["\n  display: inline-grid;\n  grid-template-rows: 100px 100px 100px;\n  grid-template-columns: 100px 100px 100px;\n  grid-gap: 3px;\n  padding: 15px;\n"]);return cn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return ln=function(){return n},n}var un=function(n){function e(){var n,t;Object(g.a)(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(y.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(o)))).state={firstPlayer:[],secondPlayer:[],isWinner:!1},t.handleOnClick=function(n,e){var r=t.props,a=r.togglePlayer,o=r.currentPlayer,i=t.state.isWinner;if("undefined"!==typeof t.state.firstPlayer.concat(t.state.secondPlayer).find(function(e){return e===n})||i)return!1;e.target.classList.add(o),t.setState(Object(b.a)({},o,[].concat(Object(F.a)(t.state[o]),[n])),function(){return U(t.state[o],t.handleIsWinner)}),a()},t.handleIsWinner=function(){var n=t.props.togglePlayer;t.setState({isWinner:!0}),n()},t.renderBoxes=function(n){return n.map(function(n,e){return a.a.createElement(Q,{key:n,handleOnClick:function(e){return t.handleOnClick(n,e)}})})},t}return Object(v.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=Object(F.a)(Array(9).keys()),e=this.props,t=e.currentPlayer,r=e.playerName,o=this.state.isWinner,i=this.renderBoxes(n);return a.a.createElement(sn,null,a.a.createElement(Y,{currentPlayer:t,playerName:r,isWinner:o}),o&&a.a.createElement(on,{playerName:r}),a.a.createElement(dn,null,i))}}]),e}(a.a.Component),sn=d.b.div(ln()),dn=d.b.div(cn());function mn(){var n=Object(s.a)(["\n  text-align: center;\n"]);return mn=function(){return n},n}var fn=d.b.div(mn()),pn=Object(l.d)(function(n){var e=Object(r.useState)("firstPlayer"),t=Object(D.a)(e,2),o=t[0],i=t[1];return n.location.state?a.a.createElement(fn,null,a.a.createElement(un,{togglePlayer:function(){i("firstPlayer"===o?"secondPlayer":"firstPlayer")},currentPlayer:o,playerName:n.location.state[o]})):(n.history.push(u.home),null)}),bn=function(){return a.a.createElement(c.a,null,a.a.createElement(p,null),a.a.createElement(l.a,{exact:!0,path:u.home,component:M}),a.a.createElement(l.a,{exact:!0,path:u.game,component:pn}))},gn=function(){return a.a.createElement(bn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.00ce977a.chunk.js.map