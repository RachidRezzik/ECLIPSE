(this.webpackJsonpeclipse=this.webpackJsonpeclipse||[]).push([[0],{24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),n=c.n(s),a=c(17),r=c.n(a),l=c(2),d=(c(24),c(4)),o=c(3),j=c(6),u=c.p+"static/media/arrow.47538aa7.png";function m(e){var t=function(){e.handleMenuSwitch()},c=function(){e.handleMenuSlider()},s="";return"Men"===e.menuItemSelected?("MEN",s=Object(i.jsxs)("div",{className:"subMenu_links",children:[Object(i.jsxs)("button",{onClick:t,children:[Object(i.jsx)("img",{src:u,alt:""}),"MEN"]}),Object(i.jsx)(j.HashLink,{to:"/MEN#Shirts",onClick:c,children:"Shirts"}),Object(i.jsx)(j.HashLink,{to:"/MEN#Shorts",onClick:c,children:"Shorts"}),Object(i.jsx)(j.HashLink,{to:"/MEN#Joggers",onClick:c,children:"Joggers"})]})):"Women"===e.menuItemSelected&&("Women",s=Object(i.jsxs)("div",{className:"subMenu_links",children:[Object(i.jsxs)("button",{onClick:t,children:[Object(i.jsx)("img",{src:u,alt:""}),"WOMEN"]}),Object(i.jsx)(j.HashLink,{to:"/WOMEN#Shirts",onClick:c,children:"Shirts"}),Object(i.jsx)(j.HashLink,{to:"/WOMEN#Shorts",onClick:c,children:"Shorts"}),Object(i.jsx)(j.HashLink,{to:"/WOMEN#Leggings",onClick:c,children:"Leggings"})]})),Object(i.jsx)("div",{children:s})}function h(){var e=Object(s.useState)({width:void 0,height:void 0}),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c}var b=c.p+"static/media/Men_tank.a700db38.jpg",O=c.p+"static/media/Men_tank2.1f9a11d3.jpg",g=c.p+"static/media/Men_tank3.bfa0d794.jpg",x=c.p+"static/media/Men_shirt.f0c47aed.jpg",p=c.p+"static/media/Men_shirt2.519fe539.jpg",f=c.p+"static/media/Men_shirt3.1f65a6f0.jpg",v=c.p+"static/media/Men_running.89ac054a.jpg",N=c.p+"static/media/Men_running2.e174500d.jpg",S=c.p+"static/media/Men_running3.ce245c19.jpg",_=c.p+"static/media/Men_flexible.92c9dc00.jpg",I=c.p+"static/media/Men_flexible2.4cea1723.jpg",y=c.p+"static/media/Men_flexible3.855b2ad8.jpg",k=c.p+"static/media/Men_athletic.0ac08b54.jpg",M=c.p+"static/media/Men_athletic2.b6291e86.jpg",C=c.p+"static/media/Men_athletic3.6d856601.jpg",E=c.p+"static/media/Men_classic.379ec0fa.jpg",P=c.p+"static/media/Men_classic2.1f52b1d6.jpg",T=c.p+"static/media/Men_classic3.b785fcdc.jpg",L=[{itemTitle:"Classic Tank",itemPrice:14.99,itemImages:[b,O,g],category:"MEN"},{itemTitle:"Dryfit T-shirt",itemPrice:17.5,itemImages:[x,p,f],category:"MEN"},{itemTitle:"Running Shorts",itemPrice:19.99,itemImages:[v,N,S],category:"MEN"},{itemTitle:"Flexible Shorts",itemPrice:19.99,itemImages:[_,I,y],category:"MEN"},{itemTitle:"Athletic Joggers",itemPrice:27.5,itemImages:[k,M,C],category:"MEN"},{itemTitle:"Classic Joggers",itemPrice:24.99,itemImages:[E,P,T],category:"MEN"}],w=c.p+"static/media/Women_shirt.794a3acc.jpg",A=c.p+"static/media/Women_shirt2.15ca80aa.jpg",W=c.p+"static/media/Women_shirt3.5120850b.jpg",R=c.p+"static/media/Women_tank.b0304129.jpg",H=c.p+"static/media/Women_tank2.f23dc297.jpg",$=c.p+"static/media/Women_tank3.614901a8.jpg",B=c.p+"static/media/Women_athletic.4dc78733.jpg",F=c.p+"static/media/Women_athletic2.a44ecbc6.jpg",J=c.p+"static/media/Women_athletic3.5c0618d9.jpg",G=c.p+"static/media/Women_lifestyle.75a573a1.jpg",D=c.p+"static/media/Women_lifestyle2.a883bd64.jpg",q=c.p+"static/media/Women_lifestyle3.0a70a40d.jpg",z=c.p+"static/media/Women_classic.83f67493.jpg",U=c.p+"static/media/Women_classic2.d07f1ca0.jpg",X=c.p+"static/media/Women_classic3.0c26d169.jpg",Q=c.p+"static/media/Women_eclipse1.f9998425.jpg",Y=c.p+"static/media/Women_eclipse2.62083bec.jpg",K=c.p+"static/media/Women_eclipse3.26e648b5.jpg",V=[{itemTitle:"Classic Tank",itemPrice:12.5,itemImages:[R,H,$],category:"WOMEN"},{itemTitle:"Dryfit Shirt",itemPrice:14.5,itemImages:[w,A,W],category:"WOMEN"},{itemTitle:"Athletic Shorts",itemPrice:17.5,itemImages:[B,F,J],category:"WOMEN"},{itemTitle:"Lifestyle Shorts",itemPrice:14.99,itemImages:[G,D,q],category:"WOMEN"},{itemTitle:"Classic Leggings",itemPrice:17.5,itemImages:[z,U,X],category:"WOMEN"},{itemTitle:"Eclipse1 Leggings",itemPrice:19.99,itemImages:[Q,Y,K],category:"WOMEN"}];function Z(e){var t=n.a.createRef(),c=L.concat(V),a=Object(s.useState)([]),r=Object(l.a)(a,2),o=r[0],j=r[1],u=Object(s.useRef)();return Object(s.useEffect)((function(){var t=function(t){u.current.contains(t.target)||"search"===t.target.id||e.handleClickOutsideSearch()};document.addEventListener("mousedown",t);var c=document.querySelector(".search_container"),i=c.offsetHeight,s="".concat(-i-65,"px");return c.style.top=s,e.searchOpen&&(c.style.top="65px"),function(){document.removeEventListener("mousedown",t)}})),Object(i.jsxs)("div",{ref:u,className:e.searchOpen?"search_container active":"search_container",children:[Object(i.jsx)("input",{ref:t,id:"search_input",type:"text",placeholder:"Search ECLIPSE Products...",onKeyUp:function(){var e=[];j([]),t.current.value.length>=2&&c.forEach((function(c){if(c.itemTitle.toLowerCase().startsWith(t.current.value.toLowerCase())||c.itemTitle.toLowerCase().includes(" ".concat(t.current.value.toLowerCase()))){var i={};i.itemTitle=c.itemTitle,i.itemPrice=c.itemPrice,i.category=c.category,i.itemImages=c.itemImages,i.key=o.length+1,e.push(i)}})),e.length>=1?j(e):0==e.length&&t.current.value.length>=2&&j(Object(i.jsxs)("h2",{className:"no_results_found",children:['No Search Results Found for "',t.current.value,'"']}))},autoComplete:"off"}),o.length>=1&&Array.isArray(o)?Object(i.jsx)("div",{className:"suggestions_container",children:o.map((function(t){return Object(i.jsx)("div",{className:"suggestion_div",onClick:function(){return c=t.itemTitle,i=t.itemImages,s=t.itemPrice,n=t.category,e.handleItemPreview(c,i,s,n),window.scrollTo({top:0}),void e.handleSearch();var c,i,s,n},children:Object(i.jsx)(d.Link,{to:"/ITEM",className:"suggestion_link",children:Object(i.jsxs)("div",{className:"suggestion",children:[Object(i.jsx)("img",{src:t.itemImages[0],alt:""}),Object(i.jsxs)("div",{className:"suggestion_description",children:[Object(i.jsx)("p",{children:t.category}),Object(i.jsx)("h4",{children:t.itemTitle}),Object(i.jsxs)("h4",{children:["($",t.itemPrice.toFixed(2),")"]})]})]})})})}))}):"h2"==o.type?o:""]})}var ee=c.p+"static/media/x_mark.ae3869d0.png",te=c.p+"static/media/minus_sign.62d1785a.png",ce=c.p+"static/media/plus_sign.af036e11.png",ie=c.p+"static/media/white_x_mark.24f16f08.png";function se(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var c=function(c){!t.current.contains(c.target)&&e.modalOpen&&e.handleModalClick()};return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}})),Object(i.jsxs)("div",{className:e.modalOpen?"checkout_modal active":"checkout_modal",children:[Object(i.jsxs)("div",{ref:t,className:"modal_message_container",children:[Object(i.jsx)("h3",{children:"We're Sorry, Checkout is Currently Unavailable...."}),Object(i.jsx)("h4",{children:'Please Forgive Us and Get 25% Off Your Next Order Using Coupon Code "OURBAD25" When Checkout is Available Again!'})]}),Object(i.jsx)("img",{className:e.modalOpen?"exit_modal active":"exit_modal",src:ie,onClick:function(){e.handleModalClick()},alt:""})]})}function ne(e){var t;t=e.bagOrders.reduce((function(e,t){return e+t.subtotal}),0).toFixed(2);var c=function(e){localStorage.setItem("discount",e),j(e)},a=function(){return Number(localStorage.getItem("discount"))},r=Object(s.useState)(null!=a()?a():0),d=Object(l.a)(r,2),o=d[0],j=d[1];null===localStorage.getItem("discount")&&(console.log("discount needs to be zero"),c(0));var u=n.a.createRef(),m=Object(i.jsx)("h4",{className:"coupon_message",children:"Status: No Valid Coupons"});5==o?m=Object(i.jsxs)("h4",{className:"coupon_message",children:["Status: ",Object(i.jsx)("span",{style:{color:"rgb(5, 175, 5)"},children:"SANTACLAUS22 Applied"})]}):15==o&&(m=Object(i.jsxs)("h4",{className:"coupon_message",children:["Status: ",Object(i.jsx)("span",{style:{color:"rgb(5, 175, 5)"},children:"GINGERBREAD15 Applied"})]}));var h=Object(s.useState)(!1),b=Object(l.a)(h,2),O=b[0],g=b[1],x=function(){g(!O)};return Object(i.jsxs)("div",{className:"bag_container",children:[Object(i.jsx)(se,{modalOpen:O,handleModalClick:x}),Object(i.jsx)("h1",{children:"Your Bag"}),0===e.bagItems?Object(i.jsx)("div",{children:Object(i.jsx)("h2",{id:"empty_bag",children:"Your Bag is Empty"})}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"bag_intro",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:["TOTAL: (",e.bagItems," ",e.bagItems>1?"Items":"Item",")"]}),Object(i.jsxs)("h3",{children:["$",t]})]}),Object(i.jsx)("button",{className:"checkout",onClick:x,children:"CHECKOUT"})]}),Object(i.jsx)("div",{className:"bag_items_container",children:e.bagOrders.map((function(s){return Object(i.jsxs)("div",{className:"bag_item",children:[Object(i.jsxs)("div",{className:"subtotal_remove",children:["$",s.subtotal.toFixed(2),Object(i.jsx)("img",{className:"remove_item",src:ee,alt:"",onClick:function(){return i=s.itemImage,n=s.size,a=s.quantity,r=s.subtotal,e.handleRemoveFromBag(e.bagOrders,i,n,a),void((t-r<50&&5===o||t-r<80&&15===o)&&(j(0),c(0)));var i,n,a,r}})]}),Object(i.jsx)("div",{className:"item_image",children:Object(i.jsx)("img",{src:s.itemImage,alt:""})}),Object(i.jsxs)("div",{className:"item_description",children:[Object(i.jsx)("h2",{children:s.itemTitle}),Object(i.jsxs)("h2",{children:["Size: ",s.size]}),Object(i.jsx)("h2",{children:"Quantity:"}),Object(i.jsxs)("div",{className:"quantity_div",children:[Object(i.jsx)("img",{id:"minus_sign",src:te,alt:"",onClick:function(){return i=s.itemImage,n=s.size,a=s.quantity,r=s.itemPrice,e.handleSubtractQuantity(e.bagOrders,i,n,a,r),void((t-r<50&&5===o||t-r<80&&15===o)&&(j(0),c(0)));var i,n,a,r}}),Object(i.jsx)("span",{children:s.quantity}),Object(i.jsx)("img",{id:"plus_sign",src:ce,alt:"",onClick:function(){return t=s.itemImage,c=s.size,i=s.quantity,n=s.itemPrice,void e.handleAddQuantity(e.bagOrders,t,c,i,n);var t,c,i,n}})]})]})]},s.key)}))}),Object(i.jsxs)("div",{className:"coupon_area",children:[Object(i.jsx)("h3",{children:"Coupon Codes"}),Object(i.jsxs)("form",{className:"coupon_flex",onSubmit:function(){"SANTACLAUS22"===u.current.value&&t>=50&&0===o?(j(5),c(5),m="Coupon Code: SANTACLAUS22 Applied"):"GINGERBREAD15"===u.current.value&&t>=80&&(j(15),c(15),m="Coupon Code: GINGERBREAD15 Applied")},children:[Object(i.jsx)("input",{ref:u,className:"coupon_input",type:"text",placeholder:"Enter Coupon Code..."}),Object(i.jsx)("input",{className:"coupon_submit",type:"submit",value:"APPLY"})]}),m]}),Object(i.jsxs)("div",{style:{marginTop:"30px"},className:"order_summary_div",children:[Object(i.jsxs)("p",{children:[e.bagItems," ",e.bagItems>1?"ITEMS":"ITEM"]}),Object(i.jsxs)("p",{children:["$",t]})]}),Object(i.jsxs)("div",{className:"order_summary_div",children:[Object(i.jsx)("p",{children:"DELIVERY"}),Object(i.jsx)("p",{children:"FREE"})]}),Object(i.jsxs)("div",{className:"order_summary_div",children:[Object(i.jsx)("p",{children:"Sales Tax"}),Object(i.jsx)("p",{children:"-"})]}),0!=o?Object(i.jsxs)("div",{className:"order_summary_div",children:[Object(i.jsx)("p",{children:"COUPON CODE"}),Object(i.jsxs)("p",{style:{color:"red"},children:["-$",o.toFixed(2)]})]}):"",Object(i.jsxs)("div",{className:"order_summary_div",children:[Object(i.jsx)("h2",{children:"TOTAL"}),Object(i.jsxs)("h2",{children:["$",(t-o).toFixed(2)]})]}),Object(i.jsx)("button",{className:"checkout",style:{margin:"50px"},onClick:x,children:"CHECKOUT"})]})]})}var ae=c.p+"static/media/eclipse_logo.c20d0d14.JPG",re=c.p+"static/media/hamburger.321c6b70.png",le=c.p+"static/media/shopping_bag.ff45bab7.png",de=c.p+"static/media/search.bf1f29ae.png";function oe(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(h().width<=650),d=Object(l.a)(r,2),o=d[0],b=d[1],O=h().width;!function(e,t){e>650&&1==t?b(!1):e<=650&&0==t&&b(!0)}(h().width,o);var g=function(t){e.handleMenuSlider(t)},x=function(t){a(t),e.handleMenuSwitch()},p=function(e){var t=document.querySelector(e);O>650&&(t.style.display="flex")},f=function(e){var t=document.querySelector(e);O>650&&(t.style.display="none")},v=function(t){var c=document.querySelector(t);O>650&&(c.style.display="none"),window.scrollTo({top:0}),e.handleSearchCloseDesktop()},N=function(t){var c=document.querySelector(t);O>650&&(c.style.display="none",e.handleSearchCloseDesktop())};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("div",{className:"logo_div",children:Object(i.jsx)(j.HashLink,{to:"/",onClick:function(){return g("logo_click")},children:Object(i.jsx)("img",{src:ae,alt:""})})}),o?Object(i.jsx)("div",{className:e.menuSlider?"menu_slider active":"menu_slider",children:Object(i.jsxs)("div",{className:"slider_container",children:[Object(i.jsxs)("div",{className:"first_menu",style:{transform:"translateX(".concat(e.X,"%")},children:[Object(i.jsxs)("button",{onClick:function(){return x("Men")},children:["MEN ",Object(i.jsx)("img",{src:u,alt:""})]}),Object(i.jsxs)("button",{onClick:function(){return x("Women")},children:["WOMEN ",Object(i.jsx)("img",{src:u,alt:""})]})]}),Object(i.jsx)("div",{className:"second_menu",style:{transform:"translateX(".concat(e.X,"%")},children:Object(i.jsx)(m,{menuItemSelected:n,handleMenuSwitch:e.handleMenuSwitch,handleMenuSlider:g})})]})}):Object(i.jsxs)("div",{className:"desktop_menu",children:[Object(i.jsxs)("div",{className:"dropdown1",onMouseOver:function(){return p(".submenu1")},onMouseOut:function(){return f(".submenu1")},children:[Object(i.jsx)(j.HashLink,{className:"MEN",to:"/MEN",onClick:function(){return v(".submenu1")},children:"MEN"}),Object(i.jsxs)("div",{className:"submenu1",children:[Object(i.jsx)(j.HashLink,{to:"/MEN#Shirts",onClick:function(){return N(".submenu1")},children:"SHIRTS"}),Object(i.jsx)(j.HashLink,{to:"/MEN#Shorts",onClick:function(){return N(".submenu1")},children:"SHORTS"}),Object(i.jsx)(j.HashLink,{to:"/MEN#Joggers",onClick:function(){return N(".submenu1")},children:"JOGGERS"})]})]}),Object(i.jsxs)("div",{className:"dropdown2",onMouseOver:function(){return p(".submenu2")},onMouseOut:function(){return f(".submenu2")},children:[Object(i.jsx)(j.HashLink,{to:"/WOMEN",onClick:function(){return v(".submenu2")},children:"WOMEN"}),Object(i.jsxs)("div",{className:"submenu2",children:[Object(i.jsx)(j.HashLink,{to:"/WOMEN#Shirts",onClick:function(){return N(".submenu2")},children:"SHIRTS"}),Object(i.jsx)(j.HashLink,{to:"/WOMEN#Shorts",onClick:function(){return N(".submenu2")},children:"SHORTS"}),Object(i.jsx)(j.HashLink,{to:"/WOMEN#Leggings",onClick:function(){return N(".submenu2")},children:"LEGGINGS"})]})]})]}),Object(i.jsx)("div",{className:"hamburger_div",children:Object(i.jsx)("img",{src:e.menuSlider?ee:re,alt:"",onClick:function(){return g("hamburger_click")}})}),Object(i.jsxs)("div",{className:"bag_div",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{id:"search",src:e.searchOpen?ee:de,alt:"",onClick:function(){e.handleSearch()}})}),Object(i.jsx)("div",{children:Object(i.jsxs)(j.HashLink,{to:"/BAG",onClick:function(){window.scrollTo({top:0}),e.handleMenuSlider("bag_click")},children:[Object(i.jsx)("img",{src:le,alt:""}),Object(i.jsx)("h4",{className:"bag_total",children:e.bagItems})]})})]})]}),Object(i.jsx)(Z,{searchOpen:e.searchOpen,handleItemPreview:e.handleItemPreview,handleSearch:e.handleSearch,handleClickOutsideSearch:e.handleClickOutsideSearch})]})}function je(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("section",{className:"Home_Section",children:[Object(i.jsx)("div",{className:"diagonalHover first"}),Object(i.jsx)("div",{className:"diagonalHover second"})]}),Object(i.jsx)("div",{className:"sale_container",children:Object(i.jsxs)("div",{className:"sale_background",children:[Object(i.jsx)("h1",{children:"Deals for the Holidays"}),Object(i.jsxs)("div",{className:"sale_flex",children:[Object(i.jsxs)("div",{className:"sale_item",children:[Object(i.jsx)("h2",{children:"$5 Off Order of $50 or More"}),Object(i.jsx)("button",{children:"Coupon Code: GINGERBREAD15"})]}),Object(i.jsxs)("div",{className:"sale_item",children:[Object(i.jsx)("h2",{children:"$15 Off Order of $80 or More"}),Object(i.jsx)("button",{children:"Coupon Code: SANTACLAUS22"})]})]})]})})]})}c.p;function ue(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("h3",{children:"Join the ECLIPSE Newsletter to Find Out About New Releases and Exclusive Offers!"}),Object(i.jsx)("p",{children:"You Can Unsubscribe Anytime"}),Object(i.jsxs)("div",{className:"newsletter",children:[Object(i.jsx)("input",{type:"email",placeholder:"Enter your email"}),Object(i.jsx)("input",{type:"submit",id:"email_submit",value:"Submit"})]})]})})}function me(e){var t=function(t,c,i,s){e.handleItemPreview(t,c,i,s)};return Object(i.jsxs)("div",{className:"Page",children:[Object(i.jsx)("div",{className:"intro_container",children:Object(i.jsx)("h1",{children:"Shop Men"})}),Object(i.jsx)("h2",{id:"Shirts",children:"SHIRTS"}),Object(i.jsxs)("div",{className:"product_container",children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Classic Tank",[b,O,g],14.99,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:b,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Classic Tank"}),Object(i.jsx)("h3",{children:"$14.99"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Dryfit T-Shirt",[x,p,f],17.5,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:x,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Dryfit T-Shirt"}),Object(i.jsx)("h3",{children:"$17.50"})]})})]}),Object(i.jsx)("h2",{id:"Shorts",children:"SHORTS"}),Object(i.jsxs)("div",{className:"product_container",children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Running Shorts",[v,N,S],19.99,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:v,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Running Shorts"}),Object(i.jsx)("h3",{children:"$19.99"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Flexible Shorts",[_,I,y],19.99,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:_,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Flexible Shorts"}),Object(i.jsx)("h3",{children:"$19.99"})]})})]}),Object(i.jsx)("h2",{id:"Joggers",children:"JOGGERS"}),Object(i.jsxs)("div",{className:"product_container",style:{marginBottom:"100px"},children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Athletic Joggers",[k,M,C],27.5,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:k,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Athletic Joggers"}),Object(i.jsx)("h3",{children:"$27.50"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Classic Joggers",[E,P,T],24.99,"MEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:E,alt:""}),Object(i.jsx)("p",{children:"MEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Classic Joggers"}),Object(i.jsx)("h3",{children:"$24.99"})]})})]})]})}function he(e){var t=function(t,c,i,s){e.handleItemPreview(t,c,i,s),window.scrollTo({top:0})};return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"Page",children:[Object(i.jsx)("div",{className:"intro_container",id:"container_women",children:Object(i.jsx)("h1",{children:"Shop Women"})}),Object(i.jsx)("h2",{id:"Shirts",children:"SHIRTS"}),Object(i.jsxs)("div",{className:"product_container",children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Classic Tank",[R,H,$],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:R,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Classic Tank"}),Object(i.jsx)("h3",{children:"$12.50"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Dryfit Shirt",[w,A,W],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:w,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Dryfit Shirt"}),Object(i.jsx)("h3",{children:"$14.50"})]})})]}),Object(i.jsx)("h2",{id:"Shorts",children:"SHORTS"}),Object(i.jsxs)("div",{className:"product_container",children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Athletic Shorts",[B,F,J],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:B,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Athletic Shorts"}),Object(i.jsx)("h3",{children:"$17.50"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Lifestyle Shorts",[G,D,q],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:G,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Lifestyle Shorts"}),Object(i.jsx)("h3",{children:"$14.99"})]})})]}),Object(i.jsx)("h2",{id:"Leggings",children:"LEGGINGS"}),Object(i.jsxs)("div",{className:"product_container",style:{marginBottom:"100px"},children:[Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Classic Leggings",[z,U,X],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:z,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Classic Leggings"}),Object(i.jsx)("h3",{children:"$17.50"})]})}),Object(i.jsx)(d.Link,{to:"/Item",onClick:function(){return t("Eclipse1 Leggings",[Q,Y,K],14.99,"WOMEN")},children:Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:Q,alt:""}),Object(i.jsx)("p",{children:"WOMEN"}),Object(i.jsx)("h1",{className:"product_title",children:"Eclipse1 Leggings"}),Object(i.jsx)("h3",{children:"$19.99"})]})})]})]})})}var be=function(e){var t=Object(s.useState)(!1),c=Object(l.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){0!==e.show&&(a(!0),r(e.delay))}),[e.show,e.delay]);var r=function(e){setTimeout((function(){return a(!1)}),e)};return Object(i.jsx)("div",{children:Object(i.jsx)("h3",{className:n?"item_added_alert active":"item_added_alert",children:"Item Added to Bag"})})};function Oe(e){var t=Object(s.useState)(0),c=Object(l.a)(t,2),a=c[0],r=c[1],d=n.a.createRef(),o=n.a.createRef();return Object(i.jsxs)("div",{style:{marginTop:"10px"},children:[Object(i.jsx)(be,{show:a,delay:2e3}),Object(i.jsxs)("div",{className:"product_selections",children:[Object(i.jsx)("h3",{children:"Quantity:"}),Object(i.jsxs)("select",{ref:d,children:[Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"}),Object(i.jsx)("option",{value:"3",children:"3"})]})]}),Object(i.jsxs)("div",{className:"product_selections",children:[Object(i.jsx)("h3",{children:"Size:"}),Object(i.jsxs)("select",{ref:o,children:[Object(i.jsx)("option",{value:"S",children:"S"}),Object(i.jsx)("option",{value:"M",children:"M"}),Object(i.jsx)("option",{value:"L",children:"L"}),Object(i.jsx)("option",{value:"XL",children:"XL"})]})]}),Object(i.jsx)("button",{className:"AddtoBag",onClick:function(){e.handleAddToBag(Number(d.current.value),o.current.value,e.itemTitle,e.itemPrice,e.itemImage),r(a+1)},children:"Add to Bag"})]})}var ge=c.p+"static/media/expand.defd2bd5.png";function xe(e){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var c=function(c){!t.current.contains(c.target)&&e.modalOpen&&e.handleModalClick()};return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}})),Object(i.jsxs)("div",{className:e.modalOpen?"image_modal active":"image_modal",children:[Object(i.jsx)("img",{ref:t,id:"expanded_image",src:e.featuredImage,alt:""}),Object(i.jsx)("img",{className:e.modalOpen?"exit_modal active":"exit_modal",src:ie,onClick:function(){e.handleModalClick()},alt:""})]})}function pe(e){var t=function(t){e.handleFeaturedImage(t)},c=function(t,c,i,s){e.handleItemPreview(t,c,i,s),window.scrollTo({top:0})};Object(s.useEffect)((function(){document.querySelectorAll(".item_photos img").forEach((function(t){t.src.includes(e.featuredImage)?(t.style.boxShadow="0px 0px 15px darkgray",t.style.opacity="1"):(t.style.boxShadow="none",t.style.opacity=".35")}))}));var n=Object(s.useState)(!1),a=Object(l.a)(n,2),r=a[0],d=a[1],o=function(){d(!r)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(xe,{modalOpen:r,handleModalClick:o,featuredImage:e.featuredImage}),Object(i.jsxs)("div",{className:"item_related_container",children:[Object(i.jsxs)("div",{className:"item_preview_container",children:[Object(i.jsxs)("div",{className:"item_images",children:[Object(i.jsxs)("div",{style:{position:"relative"},children:[Object(i.jsx)("img",{className:"featured_image",src:e.featuredImage,alt:""}),Object(i.jsx)("img",{src:ge,id:"expand",onClick:o})]}),Object(i.jsxs)("div",{className:"item_photos",children:[Object(i.jsx)("img",{src:e.featuredProduct.imageArray[0],alt:"",onClick:function(){return t(e.featuredProduct.imageArray[0])}}),Object(i.jsx)("img",{src:e.featuredProduct.imageArray[1],alt:"",onClick:function(){return t(e.featuredProduct.imageArray[1])}}),Object(i.jsx)("img",{src:e.featuredProduct.imageArray[2],alt:"",onClick:function(){return t(e.featuredProduct.imageArray[2])}})]})]}),Object(i.jsxs)("div",{className:"item_options",children:[Object(i.jsx)("p",{children:e.featuredProduct.category}),Object(i.jsx)("h3",{children:e.featuredProduct.itemTitle}),Object(i.jsxs)("h3",{children:["$",e.featuredProduct.itemPrice.toFixed(2)]}),Object(i.jsx)(Oe,{handleAddToBag:e.handleAddToBag,itemTitle:e.featuredProduct.itemTitle,itemPrice:e.featuredProduct.itemPrice,itemImage:e.featuredProduct.imageArray[0]})]})]}),Object(i.jsxs)("div",{className:"related_products_container",children:[Object(i.jsx)("h2",{style:{textAlign:"center"},children:"Related ECLIPSE Products"}),Object(i.jsxs)("div",{className:"related_product",onClick:function(){return c(e.relatedProducts[0].itemTitle,e.relatedProducts[0].itemImages,e.relatedProducts[0].itemPrice,e.relatedProducts[0].category)},children:[Object(i.jsx)("img",{src:e.relatedProducts[0].itemImages[0],alt:""}),Object(i.jsxs)("div",{className:"related_description",children:[Object(i.jsx)("p",{children:e.relatedProducts[0].category}),Object(i.jsx)("h4",{children:e.relatedProducts[0].itemTitle}),Object(i.jsxs)("h4",{children:["$",e.relatedProducts[0].itemPrice.toFixed(2)]})]})]}),Object(i.jsxs)("div",{className:"related_product",onClick:function(){return c(e.relatedProducts[1].itemTitle,e.relatedProducts[1].itemImages,e.relatedProducts[1].itemPrice,e.relatedProducts[1].category)},children:[Object(i.jsx)("img",{src:e.relatedProducts[1].itemImages[0],alt:""}),Object(i.jsxs)("div",{className:"related_description",children:[Object(i.jsx)("p",{children:e.relatedProducts[1].category}),Object(i.jsx)("h4",{children:e.relatedProducts[1].itemTitle}),Object(i.jsxs)("h4",{children:["$",e.relatedProducts[1].itemPrice.toFixed(2)]})]})]}),Object(i.jsxs)("div",{className:"related_product",onClick:function(){return c(e.relatedProducts[2].itemTitle,e.relatedProducts[2].itemImages,e.relatedProducts[2].itemPrice,e.relatedProducts[2].category)},children:[Object(i.jsx)("img",{src:e.relatedProducts[2].itemImages[0],alt:""}),Object(i.jsxs)("div",{className:"related_description",children:[Object(i.jsx)("p",{children:e.relatedProducts[2].category}),Object(i.jsx)("h4",{children:e.relatedProducts[2].itemTitle}),Object(i.jsxs)("h4",{children:["$",e.relatedProducts[2].itemPrice.toFixed(2)]})]})]})]})]})]})}var fe=function(){var e=function(e){localStorage.setItem("bagOrders",JSON.stringify(e))},t=function(){return JSON.parse(localStorage.getItem("bagOrders"))};null===localStorage.getItem("bagOrders")&&e([]);var c=Object(s.useState)(null!=t()?t():[]),n=Object(l.a)(c,2),a=n[0],r=n[1],j=function(t,c,i,s,n){var l={};l.quantity=t,l.size=c,l.itemTitle=i,l.itemPrice=s,l.subtotal=t*s,l.itemImage=n,l.key=a.length+1,r(a.concat([l])),e(a.concat([l]))},u=function(t,c,i,s,n){if(x(g+t),localStorage.setItem("bagItems",g+t),0===a.length)j(t,c,i,s,n);else{var l=[];a.forEach((function(e){l.push(e.itemImage)})),a.forEach((function(d){l.includes(n)&&d.itemImage===n&&d.size===c?(d.quantity=d.quantity+t,d.subtotal=d.subtotal+s*t,r(a),e(a)):(!l.includes(n)||l.includes(n)&&d.itemImage===n&&d.size!==c)&&j(t,c,i,s,n)}))}},m=function(t,c,i,s){var n=t.findIndex((function(e){return e.itemImage===c&&e.size===i})),a=t.filter((function(e,t){return t!==n}));r(a),e(a),x(g-s),localStorage.setItem("bagItems",g-s)};void 0===localStorage.getItem("bagItems")&&localStorage.setItem("bagItems",0);var h=localStorage.getItem("bagItems"),b=Object(s.useState)(0===h?0:Number(h)),O=Object(l.a)(b,2),g=O[0],x=O[1],p=function(t,c,i,s,n){var a=t.findIndex((function(e){return e.itemImage===c&&e.size===i}));t[a].quantity=s+1,t[a].subtotal=n*(s+1),r(t),e(t),x(g+1),localStorage.setItem("bagItems",g+1)},f=function(t,c,i,s,n){var a=t.findIndex((function(e){return e.itemImage===c&&e.size===i}));0!==s&&(t[a].quantity=s-1,t[a].subtotal=n*(s-1),x(g-1),localStorage.setItem("bagItems",g-1)),r(t),e(t)},v=function(e){localStorage.setItem("featuredProduct",JSON.stringify(e))},N=function(){return JSON.parse(localStorage.getItem("featuredProduct"))};null===localStorage.getItem("featuredProduct")&&v({});var S=Object(s.useState)(null!=N()?N():""),_=Object(l.a)(S,2),I=_[0],y=_[1];null===localStorage.getItem("featuredImage")&&v("");var k=Object(s.useState)(null!=JSON.parse(localStorage.getItem("featuredImage"))?I.imageArray[0]:""),M=Object(l.a)(k,2),C=M[0],E=M[1],P=function(e,t,c,i){var s={itemTitle:e,imageArray:t,itemPrice:c,category:i};y(s),v(s),window.scrollTo({top:0}),T(t[0]),B(s)},T=function(e){E(e),function(e){localStorage.setItem("featuredImage",JSON.stringify(e))}(e)},w=function(e){localStorage.setItem("relatedProducts",JSON.stringify(e))},A=function(){return JSON.parse(localStorage.getItem("relatedProducts"))};null===localStorage.getItem("relatedProducts")&&w([]);var W=Object(s.useState)(null!=A()?A():[]),R=Object(l.a)(W,2),H=R[0],$=R[1],B=function(e){var t=[],c=("MEN"===e.category?L:V).filter((function(t){return t.itemTitle!==e.itemTitle})),i=c[Math.floor(Math.random()*c.length)];t.push(i);var s=(c=c.filter((function(e){return e.itemTitle!==i.itemTitle})))[Math.floor(Math.random()*c.length)];t.push(s);var n=(c=c.filter((function(e){return e.itemTitle!==s.itemTitle})))[Math.floor(Math.random()*c.length)];t.push(n),$(t),w(t)},F=Object(s.useState)(!1),J=Object(l.a)(F,2),G=J[0],D=J[1],q=Object(s.useState)(0),z=Object(l.a)(q,2),U=z[0],X=z[1],Q=Object(s.useState)(!1),Y=Object(l.a)(Q,2),K=Y[0],Z=Y[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(d.HashRouter,{basename:"/",children:[Object(i.jsx)(oe,{bagItems:g,searchOpen:K,menuSlider:G,X:U,handleMenuSwitch:function(){X(0==U?-100:0)},handleMenuSlider:function(e){Z(!1),"logo_click"===e||"bag_click"===e?(window.scrollTo({top:0}),D(!1)):D(!G),G?setTimeout((function(){X(0)}),770):X(0)},handleItemPreview:P,handleSearch:function(){G&&D(!1),Z(!K)},handleClickOutsideSearch:function(){Z(!1)},handleSearchCloseDesktop:function(){Z(!1)}}),Object(i.jsxs)(o.g,{children:[Object(i.jsx)(o.d,{exact:!0,path:"/",component:je}),Object(i.jsx)(o.d,{path:"/MEN",render:function(){return Object(i.jsx)(me,{handleAddToBag:u,handleItemPreview:P})}}),Object(i.jsx)(o.d,{path:"/WOMEN",render:function(){return Object(i.jsx)(he,{handleAddToBag:u,handleItemPreview:P})}}),Object(i.jsx)(o.d,{path:"/Item",render:function(){return Object(i.jsx)(pe,{featuredProduct:I,featuredImage:C,relatedProducts:H,handleItemPreview:P,handleFeaturedImage:T,handleAddToBag:u})}}),Object(i.jsx)(o.d,{path:"/BAG",render:function(){return Object(i.jsx)(ne,{bagOrders:a,bagItems:g,handleRemoveFromBag:m,handleAddQuantity:p,handleSubtractQuantity:f})}})]}),Object(i.jsx)(ue,{})]})})},ve=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(fe,{})}),document.getElementById("root")),ve()}},[[30,1,2]]]);
//# sourceMappingURL=main.74ba2d65.chunk.js.map