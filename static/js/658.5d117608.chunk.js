"use strict";(self.webpackChunkshopping_app=self.webpackChunkshopping_app||[]).push([[658],{7658:function(t,e,r){r.r(e);var n=r(2982),i=r(2791),c=r(9434),s=r(672),a=r(8260),o=r(6874),l=r(4162),d=r(9861),u=r(6330),f=r(1655),p=r(184);e.default=function(){var t=(0,c.v9)((function(t){return t.Prod.products})),e=(0,c.v9)((function(t){return t.Prod.cart})),r=(0,n.Z)(e),h=(0,c.v9)((function(t){return t.Prod.priceSortState})),m=(0,c.v9)((function(t){return t.Prod.nameSortState})),Z=(0,n.Z)(t),x=(0,c.I0)();(0,i.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(t){x(a.Z.setProducts(t))}))}),[]);return(0,p.jsxs)("section",{className:s.Z.ProductCon,children:[(0,p.jsxs)("div",{className:s.Z.mar,children:[(0,p.jsx)("div",{children:(0,p.jsx)(l.Z,{direction:"row",spacing:2,className:s.Z.posBtn,children:(0,p.jsx)(o.Z,{onClick:function(){var t=Z.sort((function(t,e){if(m){if(t.title>e.title)return-1;if(t.title<e.title)return 1}else{if(t.title<e.title)return-1;if(t.title>e.title)return 1}return 0}));x(a.Z.setProducts(t)),x(a.Z.setNameSortState())},variant:"outlined",startIcon:m?(0,p.jsx)(d.Z,{}):(0,p.jsx)(f.Z,{}),children:"Sort by Name"})})}),(0,p.jsx)("div",{children:(0,p.jsx)(l.Z,{direction:"row",spacing:2,className:s.Z.posBtn2,children:(0,p.jsx)(o.Z,{onClick:function(){var t=Z.sort((function(t,e){if(h){if(t.price>e.price)return-1;if(t.price<e.price)return 1}else{if(t.price<e.price)return-1;if(t.price>e.price)return 1}return 0}));x(a.Z.setProducts(t)),x(a.Z.setPriceSortState())},variant:"outlined",startIcon:h?(0,p.jsx)(d.Z,{}):(0,p.jsx)(f.Z,{}),children:"Sort by Price"})})}),(0,p.jsx)("div",{children:(0,p.jsx)(l.Z,{direction:"row",spacing:3,size:"large",className:s.Z.posBtn3,children:(0,p.jsx)(o.Z,{onClick:function(){fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(t){x(a.Z.setProducts(t))}))},variant:"outlined",className:s.Z.btnSize,children:"Clear filter"})})})]}),(0,p.jsx)("div",{className:s.Z.container,children:t.map((function(e){return(0,p.jsxs)("div",{className:"card mx-2 my-2",style:{width:"18rem"},children:[(0,p.jsx)("img",{className:"".concat(s.Z.imgSize," card-img-top"),src:e.image,alt:"..."}),(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsx)("h5",{className:"".concat(s.Z.textWrap," card-title"),children:e.title}),(0,p.jsxs)("h5",{className:"card-title",children:["Price: ",e.price," $"]}),(0,p.jsx)("p",{className:"card-text",children:e.description.slice(0,80)+"..."}),(0,p.jsx)("button",{className:"btn btn-dark",onClick:function(){document.getElementById("cartanim").classList.add("cart"),setTimeout((function(){document.getElementById("cartanim").classList.remove("cart")}),1e3),function(e){var n=r.filter((function(t){if(t.id==e)return t}));if(console.log(n.length),0==n.length){var i=t.filter((function(t){if(t.id==e)return t}));console.log(i),x(a.Z.addToCart(i[0]))}}(e.id)},children:(0,p.jsx)(u.Z,{})})]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=658.5d117608.chunk.js.map