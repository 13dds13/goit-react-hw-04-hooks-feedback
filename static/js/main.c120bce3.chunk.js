(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),o=n.n(a),i=(n(14),n(2)),r=n(4),s=n(9),b=n(5),d=n.n(b),u=n(0),j=function(e){var t=e.options,n=e.onBtnClick;return Object(u.jsx)("div",{className:d.a.container,children:t.map((function(e){return Object(u.jsx)("button",{className:d.a.btn,type:"button",name:e,onClick:n,children:e[0].toUpperCase()+e.slice(1)},e)}))})},l=n(6),O=n.n(l),h=function(e){var t=e.children,n=e.title;return Object(u.jsxs)("section",{className:O.a.container,children:[n&&Object(u.jsx)("h2",{className:O.a.title,children:n}),t]})},k=function(e){var t=e.msg;return Object(u.jsx)("p",{children:t})},p=n(8),x=n.n(p),f=function(e){var t=e.countTotalFeedback,n=e.countPositiveFeedbackPercentage,c=e.good,a=e.neutral,o=e.bad,i=t(),r=n();return Object(u.jsxs)("div",{className:x.a.container,children:[Object(u.jsxs)("p",{children:["Good: ",c]}),Object(u.jsxs)("p",{children:["Neutral: ",a]}),Object(u.jsxs)("p",{children:["Bad: ",o]}),Object(u.jsxs)("p",{children:["Total: ",i]}),Object(u.jsxs)("p",{children:["PositiveFeedback: ",r,"%"]})]})},g=function(e){var t=e.countTotalFeedback,n=e.countPositiveFeedbackPercentage,c=e.good,a=e.neutral,o=e.bad,i=e.msg;return t()?Object(u.jsx)(f,{good:c,neutral:a,bad:o,countTotalFeedback:t,countPositiveFeedbackPercentage:n}):Object(u.jsx)(k,{msg:i})},v={good:0,neutral:0,bad:0},m=function(){var e=Object(c.useState)(v),t=Object(s.a)(e,2),n=t[0],a=t[1],o=n.good,b=n.neutral,d=n.bad,l=function(){return o+b+d};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{title:"Please leave Your feedback",children:Object(u.jsx)(j,{options:Object.keys(n),onBtnClick:function(e){var t=e.target.name;a((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},t,n[t]+1))}))}})}),Object(u.jsx)(h,{title:"Statistics",children:Object(u.jsx)(g,{good:o,neutral:b,bad:d,countTotalFeedback:l,countPositiveFeedbackPercentage:function(){return Math.round(100*o/l())},msg:"No feedback given"})})]})};o.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"FeedbackOptions_container__1-o7c",btn:"FeedbackOptions_btn__1jj1V"}},6:function(e,t,n){e.exports={container:"Section_container__3GhcL",title:"Section_title__3LXmr"}},8:function(e,t,n){e.exports={container:"StatisticalData_container__3tY70"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c120bce3.chunk.js.map