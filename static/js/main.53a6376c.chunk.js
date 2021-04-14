(this["webpackJsonpmovie-site"]=this["webpackJsonpmovie-site"]||[]).push([[0],{38:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(30),r=n.n(i),a=(n(38),n(8)),o=n(9),d=n(2),j=n(31),l=n(10),u=n(17),p="https://api.themoviedb.org/3",b=function(e){return function(t){var n=new URLSearchParams(Object(l.a)(Object(l.a)({},t),{},{api_key:"0ab346b765ddcf3489e15848e91862c8"})).toString();return u.get("".concat(p).concat(e,"?").concat(n)).then((function(e){return e.data}))}},h=b("/movie/popular"),g=b("/genre/movie/list"),m=b("/search/movie"),O=(n(58),n(33)),x=function(e,t){switch(t.type){case"ADD_MOVIE_TO_LIST":return Object(l.a)(Object(l.a)({},e),{},{movieList:[t.payload].concat(Object(O.a)(e.movieList))});case"REMOVE_MOVIE":return Object(l.a)(Object(l.a)({},e),{},{movieList:e.movieList.filter((function(e){return e.id!==t.payload}))});default:return e}},v=n(0),f={movieList:[]},y=Object(c.createContext)(f),N=function(e){var t=e.genre,n=s.a.useContext(y),c=n.removeMovie,i=n.movieList;return Object(v.jsx)("div",{className:"wrapper",children:i.map((function(e,n){return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h4",{children:e.title}),Object(v.jsx)("div",{className:"genres",children:e.genre_ids.map((function(e){return Object(v.jsx)("span",{children:t[e]},e)}))}),Object(v.jsxs)("div",{className:"image",children:[e.poster_path?Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"poster"}):Object(v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"}),Object(v.jsx)("button",{onClick:function(){return c(e.id)},className:"removeButton",children:"Remove"})]})]},n)}))})},_=function(e){var t=e.movies,n=e.genre,c=s.a.useState([]),i=Object(a.a)(c,2),r=i[0],o=i[1],j=Object(d.f)().id,l=s.a.useContext(y),b=l.addMovieToList,h=!!l.movieList.find((function(e){return e.id===+j}));return s.a.useEffect((function(){window.scrollTo(0,0),function(e){return u.get("".concat(p,"/movie/").concat(e,"/recommendations?api_key=0ab346b765ddcf3489e15848e91862c8&language=en-US&page=1")).then((function(e){return e.data}))}(j).then((function(e){o(e.results)}))}),[j]),Object(v.jsxs)(v.Fragment,{children:[t.filter((function(e){return e.id===+j})).map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{style:{textAlign:"center",margin:"50px 0"},children:e.title}),Object(v.jsxs)("div",{className:"infoWrapper",children:[Object(v.jsxs)("div",{className:"infoImage",children:[e.poster_path?Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"poster"}):Object(v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"}),Object(v.jsx)("button",{disabled:h,onClick:function(){return b(e)},children:h?"Added":"Add"})]}),Object(v.jsxs)("div",{className:"infoDetails",children:[Object(v.jsxs)("span",{className:"release",children:[Object(v.jsx)("b",{children:"Release at : "}),e.release_date]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("span",{style:{display:"flex",flexWrap:"wrap"},children:[Object(v.jsx)("b",{children:"Genre : "}),e.genre_ids.map((function(e){return Object(v.jsx)("span",{style:{marginLeft:"10px"},children:n[e]},e)}))]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("span",{children:[Object(v.jsx)("b",{children:"Description : "}),e.overview]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("span",{children:[Object(v.jsx)("b",{children:"Rating : "}),e.vote_average]})]})]})]},t)})),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{style:{textAlign:"center",margin:"200px 0 100px"},children:"Recommendation movies"}),Object(v.jsx)("div",{className:"wrapper",children:r.map((function(e,t){return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h4",{children:e.title}),Object(v.jsx)("span",{className:"genres",children:e.genre_ids.map((function(e){return Object(v.jsx)("span",{style:{marginLeft:"10px"},children:n[e]},e)}))}),Object(v.jsx)("div",{children:e.poster_path?Object(v.jsx)("img",{style:{width:"98%",height:"310px",padding:"3px"},src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:"poster"}):Object(v.jsx)("img",{style:{width:"98%",height:"310px",padding:"3px"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"})})]},t)}))})]})]})},S=function(){return Object(v.jsx)("div",{className:"headerBackground",children:Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsx)("div",{className:"link",children:Object(v.jsx)(o.b,{to:"/",children:"Luco TV"})}),Object(v.jsx)("div",{className:"link",children:Object(v.jsx)(o.b,{to:"/added",children:"Added Movies"})})]})})},L=function(e){var t=e.title,n=e.id,s=e.img,i=e.genre,r=e.movies,a=e.genre_ids,d=Object(c.useContext)(y),j=d.addMovieToList,l=!!d.movieList.find((function(e){return e.id===r.id}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("h4",{children:t}),Object(v.jsx)("div",{className:"genres",children:a.map((function(e){return Object(v.jsx)("span",{children:i[e]},e)}))}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"image",children:s?Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+s,alt:"poster"}):Object(v.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU",alt:"poster"})}),Object(v.jsxs)("div",{className:"cardButtons",children:[Object(v.jsx)("button",{disabled:l,onClick:function(){return j(r)},children:l?"Added":"Add"}),Object(v.jsx)(o.b,{to:"/info/".concat(n),children:"Info"})]})]})]})})},T=function(e){var t=e.query,n=e.onChange,c=e.nextPage,s=e.prevPage;return Object(v.jsxs)("div",{className:"controlPanel",children:[Object(v.jsx)("button",{onClick:s,children:"Prev Page"}),Object(v.jsx)("input",{placeholder:"  Search...",value:t,type:"text",onChange:n}),Object(v.jsx)("button",{onClick:c,children:"Next Page"})]})},A=function(e){var t=e.movies,n=e.genre,c=e.query,s=e.onChange,i=e.nextPage,r=e.prevPage;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T,{prevPage:r,nextPage:i,query:c,onChange:s}),Object(v.jsx)("div",{className:"wrapper",children:t.map((function(e){return Object(v.jsx)(L,{id:e.id,title:e.title,img:e.poster_path,genre:n,movies:e,genre_ids:e.genre_ids},e.id)}))})]})},C={movieList:localStorage.getItem("movieList")?JSON.parse(localStorage.getItem("movieList")):[]},P=function(){var e=s.a.useState([]),t=Object(a.a)(e,2),n=t[0],c=t[1],i=s.a.useState(null),r=Object(a.a)(i,2),l=r[0],u=r[1],p=s.a.useState(1),b=Object(a.a)(p,2),O=b[0],f=b[1],L=s.a.useState(""),T=Object(a.a)(L,2),P=T[0],w=T[1],M=s.a.useState([]),q=Object(a.a)(M,2),k=q[0],E=q[1],I=s.a.useReducer(x,C),F=Object(a.a)(I,2),V=F[0],B=F[1];s.a.useEffect((function(){localStorage.setItem("movieList",JSON.stringify(V.movieList))}),[V]);s.a.useEffect((function(){h().then((function(e){c(e.results),u(e.total_pages)})),g().then((function(e){E(Object.fromEntries(e.genres.map((function(e){return[e.id,e.name]}))))}))}),[]);var D=s.a.useMemo((function(){return Object(j.debounce)((function(e,t){e.length>0?m({query:e,pageNumber:t}).then((function(e){c(e.results),u(e.total_pages)})):h({pageNumber:t}).then((function(e){c(e.results),u(e.total_pages)}))}),300)}),[]);return Object(v.jsx)(y.Provider,{value:{movieList:V.movieList,added:V.added,addMovieToList:function(e){B({type:"ADD_MOVIE_TO_LIST",payload:e})},removeMovie:function(e){B({type:"REMOVE_MOVIE",payload:e})}},children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(S,{}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{exact:!0,path:"/",children:Object(v.jsx)(A,{movies:n,genre:k,prevPage:function(){P.length>0&&O>1?(f(O-1),m({page:O-1,query:P}).then((function(e){c(e.results),u(e.total_pages)}))):0===P.length&&O>1&&(f(O-1),h({page:O-1,query:P}).then((function(e){c(e.results),u(e.total_pages)})))},nextPage:function(){P.length>0&&O<l?(f(O+1),m({page:O+1,query:P}).then((function(e){c(e.results),u(e.total_pages)}))):0===P.length&&O<l&&(f(O+1),h({page:O+1,query:P}).then((function(e){c(e.results),u(e.total_pages)})))},query:P,onChange:function(e){e.preventDefault(),D(e.target.value,O),w(e.target.value)}})}),Object(v.jsx)(d.a,{path:"/added",children:Object(v.jsx)(N,{genre:k})}),Object(v.jsx)(d.a,{path:"/info/:id",children:Object(v.jsx)(_,{movies:n,genre:k})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.53a6376c.chunk.js.map