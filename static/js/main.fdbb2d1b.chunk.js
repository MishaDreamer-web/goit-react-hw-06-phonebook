(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(10),i=n.n(o),u=n(5),b=n(17),l=n(15),s=n(8),d=n.n(s),j=n(3),m={addContact:Object(j.b)("contact-form/Add",(function(e){var t=e.name,n=e.number;return{payload:{id:d.a.generate(),name:t,number:n}}})),removeContact:Object(j.b)("contact-form/Remove"),changeFilter:Object(j.b)("contact-form/changeFilter")},f=n(1),h=Object(u.b)(null,(function(e){return{onAddContact:function(t){return e(m.addContact(t))}}}))((function(e){var t=e.onAddContact,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),b=u[0],s=u[1],j=d.a.generate(),m=d.a.generate(),h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":s(r);break;default:return}},O=function(){o(""),s("")};return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&""!==a.trim()||b&&""!==b.trim()?a&&""!==a.trim()?b&&""!==b.trim()?(t({name:a,number:b}),O()):alert('Field "Number" is empty'):alert('Field "Name" is empty'):alert('Fill in the fields "Name" and "Number"')},children:[Object(f.jsx)("input",{id:j,type:"text",name:"name",placeholder:"Enter name",value:a,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),Object(f.jsx)("input",{id:m,type:"tel",name:"number",placeholder:"Enter phone number",value:b,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})),O=function(e){var t=e.id,n=e.name,r=e.number,c=e.onRemove;return Object(f.jsxs)("li",{children:[n,": ",r," ",Object(f.jsx)("button",{onClick:function(){return c(t)},children:"delete"})]})},p=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?Object(f.jsx)("p",{children:"There are no contacts in the list"}):Object(f.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(f.jsx)(O,{name:r,number:c,onRemove:function(){return n(t)}},t)}))})},v=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},g=Object(u.b)((function(e){var t=e.contacts,n=t.items,r=t.filter;return{contacts:v(n,r)}}),(function(e){return{onRemove:function(t){return e(m.removeContact(t))}}}))(p),x=Object(u.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(m.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(f.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"Enter name for Search"})})),C=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(h,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{}),Object(f.jsx)(g,{})]})},y=n(12),k=n(6),A=n(2),w=Object(j.c)([],(r={},Object(k.a)(r,m.addContact,(function(e,t){var n=t.payload;return[].concat(Object(y.a)(e),[n])})),Object(k.a)(r,m.removeContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),F=Object(j.c)("",Object(k.a)({},m.changeFilter,(function(e,t){return t.payload}))),z=Object(A.b)({items:w,filter:F}),R=n(4),S=n(18),E={key:"contacts",storage:n.n(S).a,blacklist:["filter"]},N=Object(j.a)({reducer:{contacts:Object(R.g)(E,z)},middleware:function(e){return Object(y.a)(e({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}}))},devTools:!1}),J={store:N,persistor:Object(R.h)(N)};n(40);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(u.a,{store:J.store,children:Object(f.jsx)(b.a,{loading:null,persistor:J.persistor,children:Object(f.jsx)(C,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.fdbb2d1b.chunk.js.map