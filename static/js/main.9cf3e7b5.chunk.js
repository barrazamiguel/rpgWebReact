(this.webpackJsonpjuego1=this.webpackJsonpjuego1||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(27),a(4)),o=a(5),u=a(8),s=a(7),m=a(9),h=a(13),p=a(10),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pj:e.pj},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Bienvenido:"),r.a.createElement("br",null),r.a.createElement("p",null,"este es un juego mas.",r.a.createElement("br",null),r.a.createElement(h.b,{to:"/select"},"Iniciar")))}}]),t}(r.a.Component),d=function(){function e(t,a){Object(i.a)(this,e),this.nombre=t,this.vida=a,this.ataques=[]}return Object(o.a)(e,[{key:"addAttack",value:function(e){this.ataques.push(e)}}]),e}(),b=function e(t,a){Object(i.a)(this,e),this.nombre=t,this.poder=a},v=new b("patada",3),f=new b("golpe",2),E=new d("juan",20);E.addAttack(v),E.addAttack(f);var O=new d("sofia",30);O.addAttack(f);var k=new d("jorge",20);k.addAttack(v),k.addAttack(f);var g=[E,O],w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pj:g[0]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.seleccionar.bind(this)},r.a.createElement("p",null,"Seleccione con que personaje desea jugar:"),r.a.createElement("p",null,r.a.createElement("select",{onChange:this.datosPj.bind(this)},g.map((function(e,t){return r.a.createElement("option",{value:t},e.nombre)})))),r.a.createElement("div",{"aria-live":"polite"},r.a.createElement("p",null,r.a.createElement("h1",null,"Datos de ",this.state.pj.nombre,":"),"puntos de vida: ",this.state.pj.vida,".")),r.a.createElement("p",null,r.a.createElement("input",{type:"submit",value:"seleccionar"}))))}},{key:"datosPj",value:function(e){this.setState({pj:g[e.target.value]})}},{key:"seleccionar",value:function(e){e.preventDefault(),this.props.history.push({pathname:"/game",state:{pj:this.state.pj}})}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pj:e.location.state.pj,info:"Realiza tu primer ataque."},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Datos:"),r.a.createElement("p",null,this.state.pj.nombre,", vida: ",this.state.pj.vida),r.a.createElement("br",null),r.a.createElement("h1",null,"Historial:"),r.a.createElement("div",{"aria-live":"polite"},r.a.createElement("p",null,this.state.info)),r.a.createElement("br",null),r.a.createElement("h1",null,"Ataques"),this.state.pj.ataques.map((function(t,a){return r.a.createElement("button",{onClick:function(a){return e.atacar(a,t)}},t.nombre)})))}},{key:"atacar",value:function(e,t){e.preventDefault(),this.setState({info:t.nombre})}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:j,exact:!0}),r.a.createElement(p.a,{path:"/select",component:w,exact:!0}),r.a.createElement(p.a,{path:"/game",component:y,exact:!0})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9cf3e7b5.chunk.js.map