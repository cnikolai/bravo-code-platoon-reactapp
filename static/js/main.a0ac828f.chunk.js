(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(8),o=n.n(s),a=(n(14),n(7)),i=n.n(a),u=n(9),p=n(2),l=n(3),b=n(5),h=n(4),j=n(0),g=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Blog"}),Object(j.jsx)("h3",{children:JSON.stringify(this.props.blog)}),Object(j.jsx)("h3",{children:this.props.blog.id}),Object(j.jsx)("h3",{children:this.props.blog.post})]})}}]),n}(c.Component),d=(n(17),function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={blogs:[]},t.componentDidMount=Object(u.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/blogposts/");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),t.setState({blogs:c});case 8:case"end":return e.stop()}}),e)}))),t.createBlogs=function(){return t.state.blogs.map((function(t){return Object(j.jsx)(g,{blog:t})}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"App Blog"}),this.createBlogs()]})}}]),n}(c.Component)),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),s(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.a0ac828f.chunk.js.map