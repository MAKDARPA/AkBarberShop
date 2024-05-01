"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{1897:function(e,r,n){function t(e){let r=document.cookie.split(";");for(let n=0;n<r.length;n++){let t=r[n].trim();if(t.startsWith(e+"="))return t.substring(e.length+1)}return null}function i(){window.location.pathname="/signin",document.cookie.split(";").forEach(e=>{let[r]=e.split("=");document.cookie="".concat(r,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")})}n.d(r,{e:function(){return t},m:function(){return i}})},9704:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(7437),i=n(304),o=n(5211);function l(){return(0,t.jsx)(i.Z,{sx:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(o.Z,{})})}n(2265)},1761:function(e,r,n){var t=n(7437),i=n(2265),o=n(278),l=n(304),a=n(6676),s=n(3206),c=n(9835),d=n(5053),u=n(8740),h=n(4598),f=n(8031),x=n(2707),g=n(9038),p=n(7493),m=n(703),b=n(9083),v=n(2293),Z=n(8792),A=n(7907),j=n(1897),y=n(978),w=n(828);let k=[{label:"Profile",link:"profile",href:"/profile"},{label:"Logout",link:"logout",href:"/logout"}];r.Z=function(e){var r,n;let{user:C}=e,L=(0,A.usePathname)(),I=(0,A.useRouter)(),[D,z]=i.useState(null),[E,N]=i.useState(null),[H,M]=i.useState(null),T=(0,w.I0)();i.useEffect(()=>{M(null==C?void 0:C.role)},[C]);let U=()=>{N(null)},B=()=>{T((0,y.k)()),(0,j.m)(),U(),I.push("/signin")},W=()=>{U(),I.push("/profile")},G=e=>{let r={profile:W,logout:B};r[e]&&r[e]()},O={user:[{label:"Home",href:"/",isActive:"/"===L},{label:"My Booking",href:"/my-booking",isActive:"/my-booking"===L}],barber:[{label:"Home",href:"/",isActive:"/"===L},{label:"My Booking",href:"/my-booking",isActive:"/my-booking"===L}],admin:[{label:"Home",href:"/",isActive:"/"===L}]};return(0,t.jsx)(o.Z,{position:"static",sx:{bgcolor:null===p.I||void 0===p.I?void 0:p.I.navbar},children:(0,t.jsx)(h.Z,{maxWidth:"2xl",children:(0,t.jsxs)(a.Z,{disableGutters:!0,sx:{gap:{xs:"0px",md:"20px"}},children:[(0,t.jsxs)(l.Z,{sx:{display:"flex",gap:"10px"},children:[(0,t.jsx)(l.Z,{sx:{display:{xs:"none",md:"flex"}},children:(0,t.jsx)(m.default,{src:b.Z,height:30,width:30,alt:"logo",priority:!0})}),(0,t.jsx)(c.Z,{variant:"h5",noWrap:!0,component:Z.default,ml:"2",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"HairHaven"})]}),(0,t.jsxs)(l.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"},gap:"20px"},children:[(0,t.jsx)(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{z(e.currentTarget)},color:"inherit",children:(0,t.jsx)(u.Z,{})}),(0,t.jsx)(d.Z,{id:"menu-appbar",anchorEl:D,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!D,onClose:()=>{z(null)},sx:{display:{xs:"block",md:"none"}},children:null===(r=O[H])||void 0===r?void 0:r.map(e=>{let{label:r,href:n}=e;return(0,t.jsx)(g.Z,{children:(0,t.jsx)(v.Z,{component:Z.default,href:n,color:L===n?"primary":"inherit",sx:{textDecoration:"none"},children:r})},r)})})]}),(0,t.jsx)(l.Z,{sx:{display:{xs:"flex",md:"none"},mr:1},children:(0,t.jsx)(m.default,{src:b.Z,height:30,width:30,alt:"logo",priority:!0})}),(0,t.jsx)(c.Z,{variant:"h1",noWrap:!0,component:Z.default,href:"/",fontSize:{xs:"18px"},sx:{mr:0,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"HairHaven"}),(0,t.jsx)(l.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:null===(n=O[H])||void 0===n?void 0:n.map(e=>{let{label:r,href:n,isActive:i}=e;return(0,t.jsx)(v.Z,{component:Z.default,href:n,color:i?null===p.I||void 0===p.I?void 0:p.I.white:"inherit",bgcolor:i?null===p.I||void 0===p.I?void 0:p.I.blue:"inherit",sx:{textDecoration:"none",":hover":{bgcolor:"red"},p:"28px"},children:r},r)})}),(0,t.jsxs)(l.Z,{sx:{flexGrow:0},children:[(0,t.jsx)(x.Z,{title:"Open settings",children:(0,t.jsx)(s.Z,{onClick:e=>{N(e.currentTarget)},sx:{p:0},children:C&&(0,t.jsx)(f.Z,{alt:null==C?void 0:C.name,src:"data:image/jpeg;base64,".concat(null==C?void 0:C.profilePic)})})}),(0,t.jsxs)(d.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:E,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!E,onClose:U,PaperProps:{style:{width:"20ch"}},children:[(0,t.jsxs)(l.Z,{p:"20px",children:[(0,t.jsxs)(l.Z,{children:[null==C?void 0:C.firstName," ",null==C?void 0:C.lastName]}),(0,t.jsxs)(l.Z,{display:"flex",gap:"10px",children:[(0,t.jsx)(l.Z,{sx:{fontWeight:600},children:"Role"})," ",null==C?void 0:C.role]})]}),k.map(e=>(0,t.jsx)(g.Z,{onClick:()=>G(e.link),children:(0,t.jsx)(c.Z,{textAlign:"center",children:e.label})},e.label))]})]})]})})})}},7493:function(e,r,n){n.d(r,{I:function(){return t}});let t={navbar:"#000000",blue:"#1565C0",black:"#000000",white:"#ffffff"}},8638:function(e,r,n){n.d(r,{BT:function(){return a},Qz:function(){return c},d1:function(){return s}});var t=n(7908),i=n(5972),o=n(1897);let l=t.Z.create({baseURL:"http://localhost:4000"});l.interceptors.request.use(e=>{let r=(0,o.e)("access_token");return r&&(e.headers.Authorization="Bearer ".concat(r)),e});let a=(0,i.hg)("user/fetchUser",async()=>{try{return(await l.get("/auth/me")).data}catch(e){throw console.error("Error fetching user:",e),(0,o.m)(),e}}),s=(0,i.hg)("user/fetchBarbers",async()=>{try{return(await l.get("/auth/get-barbers")).data}catch(e){throw console.error("Error fetching barbers:",e),e}}),c=(0,i.hg)("user/fetchServices",async()=>{try{return(await l.get("/services/get-services")).data}catch(e){throw console.error("Error fetching barbers:",e),e}})},978:function(e,r,n){n.d(r,{k:function(){return l}});var t=n(5972),i=n(8638);let o=(0,t.oM)({name:"user",initialState:{user:null,isLoading:!1,error:null,barbers:[],services:[]},reducers:{logout(e){e.user=null,e.isLoading=!1,e.error=null}},extraReducers:e=>{e.addCase(i.BT.pending,e=>{e.isLoading=!0,e.error=null}).addCase(i.BT.fulfilled,(e,r)=>{e.user=r.payload,e.isLoading=!1}).addCase(i.BT.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message,e.user=null}).addCase(i.d1.pending,e=>{e.isLoading=!0,e.error=null}).addCase(i.d1.fulfilled,(e,r)=>{e.barbers=r.payload,e.isLoading=!1}).addCase(i.d1.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message}).addCase(i.Qz.pending,e=>{e.isLoading=!0,e.error=null}).addCase(i.Qz.fulfilled,(e,r)=>{e.services=r.payload,e.isLoading=!1}).addCase(i.Qz.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message})}}),{logout:l}=o.actions;r.Z=o.reducer},9083:function(e,r){r.Z={src:"/_next/static/media/Logo.6cb2116e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mOYbsLLyMDAwNDsFZbQ5epzv8IndgIDFCg7ZzIxgIAlg5nwlNjkH/dWL/t/Zua0/06KAXMYQiqUGZCA6I7Wtg9/Thz8+3DTuv+ZfmmdDAyp7Awg8H9zOdiKZeUNx5fnF/3f1N79v71xnhIDAwNDUXodM0NlcBsriOPDwGC/JNr+f7szwywQ/8PsvUwMDFDg5zfHujDv4Z6+6otfGsvu38zPvtbIgAxio/dNqil69r+x7PP/juof/2uLn/1nUGLgZ2CAguio7cUJcftfZ6eevVFVeO9BbsbZk1Ze9TwMDAwMAMbrWLCuxjIpAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);