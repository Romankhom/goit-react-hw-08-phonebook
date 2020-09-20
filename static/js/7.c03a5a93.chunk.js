(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a(18),i=a(7),l=a(190),u=a(60),s=a(61),m=a(62),p=a(63),d=a(180),b=a(217),h=a(218),f=a(219),g=a(64),E=a.n(g),v=a(202),C=a.n(v),j=a(179),O=a(8),y={name:"",number:""},k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)({},y),e.handleInput=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),e.props.list.some((function(t){return t.name.toLowerCase()===e.state.name.toLowerCase()})))return e.props.duplicatedContactError(Error("You already have contact with name ".concat(e.state.name)));e.props.newContact(e.state),e.setState(Object(l.a)({},y))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h3",component:"h3",gutterBottom:!0,align:"center",paragraph:!0},"Create your contacts here:"),r.a.createElement("form",{className:e.form,size:"medium",onSubmit:this.handleSubmit},r.a.createElement(b.a,{id:"name-input",name:"name",type:"string",onInput:this.handleInput,"aria-describedby":"my-helper-text",size:"medium",value:this.state.name,startAdornment:r.a.createElement(h.a,{position:"start"},r.a.createElement(E.a,null))}),r.a.createElement(f.a,{id:"name-helper-text"},"Enter name"),r.a.createElement(b.a,{id:"phone-input",name:"number",type:"number",minLength:7,onInput:this.handleInput,"aria-describedby":"my-helper-text",size:"medium",value:this.state.number,startAdornment:r.a.createElement(h.a,{position:"start"},r.a.createElement(C.a,null))}),r.a.createElement(f.a,{id:"phone-helper-text"},"Enter phone"),r.a.createElement(j.a,{variant:"outlined",color:"primary",disabled:!this.state.name||!this.state.number,type:"submit"},"Add Contact")))}}]),a}(r.a.Component),w=Object(O.a)({form:{display:"block",width:"100%",maxWidth:200,margin:"0 auto",marginBottom:"24px"}})(k),x=Object(o.b)((function(e){return{list:c.c.getAllContacts(e)}}),{newContact:c.b.addContact,duplicatedContactError:c.a.addContactError})(w),I=a(79),F=a.n(I),A=a(175),S=a(220),N=Object(A.a)((function(e){return{link:{display:"flex",justifyContent:"space-between",width:"100%",maxWidth:360,margin:"0 auto",backgroundColor:"#fff"}}})),B=function(e){var t=N();return r.a.createElement(S.a,{divider:!0,className:t.link},r.a.createElement(d.a,{variant:"subtitle1"},e.name," : ",e.number),r.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){return e.deleteContact(e.id)},startIcon:r.a.createElement(F.a,null)},"Delete"))},W=Object(o.b)((function(e,t){var a=c.c.getContactById(e,t.id);return Object(l.a)({},a)}),{deleteContact:c.b.deleteContact})(B),z=a(221),L=a(199),D=a.n(L),J={root:{width:"100%",maxWidth:540,backgroundColor:D.a[50],margin:"0 auto"}},Y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h4",component:"h4",gutterBottom:!0,align:"center",paragraph:!0},"Your contacts"),r.a.createElement(z.a,{component:"ul","aria-label":"main mailbox folders",className:e.root},this.props.filteredContacts.map((function(e){return r.a.createElement(W,{key:e.id,id:e.id})}))))}}]),a}(n.Component),P=Object(O.a)(J)(Y),T=Object(o.b)((function(e){return{filteredContacts:c.c.getVisibleContacts(e)}}))(P),V=a(222),q={field:{backgroundColor:"#fff"},wrapper:{backgroundColor:D.a[50],padding:20,marginBottom:24},container:{margin:"0 auto",maxWidth:200}},G=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){e.props.sendFilter(t.target.value)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",{className:e.container},r.a.createElement(V.a,{name:"filter",onInput:this.handleInput,value:this.props.filterFromState,className:e.field,id:"outlined-helperText",label:"Filter contacts",placeholder:"Input Filter",variant:"outlined"})))}}]),a}(n.Component),H=Object(O.a)(q)(G),K=Object(o.b)((function(e){return{filterFromState:c.c.getPhonebookFilter(e)}}),{sendFilter:c.b.filterContacts})(H);t.default=Object(o.b)((function(e){return{contacts:c.c.getAllContacts(e)}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),e.contacts.length>1&&r.a.createElement(K,null),e.contacts.length>0&&r.a.createElement(T,null))}))}}]);
//# sourceMappingURL=7.c03a5a93.chunk.js.map