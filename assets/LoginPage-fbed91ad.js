import{r as o,u as p,j as e,L as u,s as c}from"./index-9f2d37a1.js";const h=()=>{const[t,a]=o.useState(""),[n,r]=o.useState(""),i=p(),l=s=>{s.preventDefault(),i(c({email:t,password:n})),a(""),r("")};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"LoginPage"}),e.jsxs("form",{onSubmit:l,children:[e.jsx("input",{type:"text",name:"email",placeholder:"email",value:t,onChange:s=>a(s.target.value)}),e.jsx("input",{type:"password",name:"password",placeholder:"password",value:n,onChange:s=>r(s.target.value)}),e.jsx("button",{type:"submit",children:"Sign In"}),e.jsxs("p",{children:["Are you don't have an account yet? ",e.jsx(u,{to:"/register",children:"Sign Up."})]})]})]})};export{h as default};