(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(260)},187:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),c=a(33),l=a(17),s=a(108),u=a(51),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITE_SUCCESS":return"undefined"!=typeof t.data&&e.every(function(e){return e.trackId-t.data.trackId})?[].concat(Object(u.a)(e),[t.data]):e.filter(function(e){return e.trackId!==t.data.trackId});default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SONGS_SUCCESS":return Object(u.a)(t.data);case"SWITCH_FAVORITES_STATE":return e.some(function(e){return e.trackId===t.id})?Object(u.a)(e.map(function(e){return e.trackId===t.id?(e.isFavorite=!e.isFavorite,e):e})):e;case"FETCH_SONGS_ERROR":return[t.error];default:return e}},d={trackLink:"",isPlaying:!1,trackId:0,artistName:"",trackName:"",playlist:[],index:0},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SONG_SUCCESS":var a=Object.assign({},e);return a.trackLink=t.song.previewUrl,a.trackId=t.song.trackId,a.isPlaying=t.song.previewUrl!==e.trackLink||!e.isPlaying,a.artistName=t.song.artistName,a.trackName=t.song.trackName,a.playlist=t.playlist,a.index=t.playlist.findIndex(function(e){return e.trackId===t.song.trackId}),a.next=a.index===t.playlist.length-1?0:a.index+1,a.previous=0===a.index?t.playlist.length-1:a.index-1,a;default:return e}},g=Object(c.c)({playerInfo:f,songs:m,favorites:p}),h=a(23),v={main:Object(h.createMuiTheme)({palette:{primary:{main:"#3F5866",contrastText:"#F2F2F2"},secondary:{main:"#BDD3DE",contrastText:"#F2F2F2"},error:{main:"#FF9000",contrastText:"#F0F0DF"},background:{paper:"#f2f2f2",default:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)",icon:"rgba(0, 0, 0, 0.12)"},divider:"rgba(0, 0, 0, 0.12)",action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.08)",hoverOpacity:.1,selected:"rgba(0, 0, 0, 0.14)",disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)"}},typography:{useNextVariants:!0}})},y=(a(187),a(24)),b=a(25),E=a(27),k=a(26),S=a(28),O=a(43),w=a(34),I=a(41),N=a.n(I),j=a(109),C=a.n(j),T=a(110),x=a.n(T),F=a(112),P=a.n(F),_=a(29),D=a.n(_),A=a(19),U=a.n(A),B=a(60),L=a.n(B),R=a(111),V=a.n(R),G=a(61),H=a.n(G),W=a(40),M=a.n(W),J=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={favoriteButtonColor:"primary"},a.switchSoundState=function(){var e=a.props.favorite?a.props.favorites:a.props.searching;a.props.addSongToPlayer(a.props.song,e)},a.switchFavoriteState=function(){a.props.switchFavoritesState(a.props.song),a.setState("primary"===a.state.favoriteButtonColor?{favoriteButtonColor:"error"}:{favoriteButtonColor:"primary"})},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.song,o=t.playerInfo;return r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(C.a,{className:a.card},r.a.createElement("div",{className:a.details},r.a.createElement(x.a,{className:a.content},r.a.createElement(U.a,{component:"h5",variant:"h5",title:"name of track is ".concat(n.trackName)},n.trackName),r.a.createElement(U.a,{variant:"subtitle1",color:"textSecondary",title:"artist name is ".concat(n.artistName)},n.artistName)),r.a.createElement("div",{className:a.controls},r.a.createElement(D.a,{title:o.isPlaying&&o.trackLink===n.previewUrl?"Pause":"Play",onClick:this.switchSoundState,"aria-label":o.isPlaying&&o.trackLink===n.previewUrl?"Pause":"Play"},o.isPlaying&&o.trackLink===n.previewUrl?r.a.createElement(V.a,{color:"primary"}):r.a.createElement(L.a,{color:"primary"})),r.a.createElement(D.a,{onClick:this.switchFavoriteState,"aria-label":"Add-to-favorite",title:this.props.favorites.some(function(t){return t.trackId===e.props.song.trackId})?"Favorite":"Not favorite"},r.a.createElement(H.a,{color:this.state.favoriteButtonColor})),"error"===this.state.favoriteButtonColor?r.a.createElement(N.a,{href:n.artistViewUrl,target:"_blank"},r.a.createElement(U.a,{className:a.price,variant:"subtitle1",color:"textSecondary",title:"Look on iTunes"},"Look on iTunes")):r.a.createElement(U.a,{className:a.price,variant:"subtitle1",color:"textSecondary"},n.trackPrice,"$"))),r.a.createElement(P.a,{title:n.collectionName,className:a.cover,image:n.artworkUrl})),r.a.createElement("br",null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.favorites.some(function(t){return t.trackId===e.song.trackId})?{favoriteButtonColor:"error"}:e.favorites.length||"error"!==t.favoriteButtonColor?null:{favoriteButtonColor:"primary"}}}]),t}(n.Component),X=Object(h.withStyles)(function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column",width:"100%"},content:{flex:"1 0 auto"},cover:{width:150},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing.unit,paddingBottom:e.spacing.unit},price:{paddingLeft:e.spacing.unit,paddingRight:e.spacing.unit}}})(J),K=function(e){return{id:e,type:"SWITCH_FAVORITES_STATE"}},Y=function(e,t){return{song:e,playlist:t,type:"ADD_SONG_SUCCESS"}},$=function(e){return{data:e,type:"ADD_TO_FAVORITE_SUCCESS"}},q=function(e){return function(t){var a=localStorage.getItem("iTunesApp");if("string"!==typeof a)localStorage.setItem("iTunesApp",e.trackId),t(K(e.trackId)),t($(e));else if(a.split(" ").every(function(t){return t-e.trackId}))localStorage.setItem("iTunesApp",(a+" "+e.trackId).trim()),t(K(e.trackId)),t($(e));else{var n=a.split(" ").filter(function(t){return t-e.trackId});localStorage.setItem("iTunesApp",n.join(" ").trim()),t(K(e.trackId)),t($(e))}}},z=Object(l.b)(function(e){return{favorites:e.favorites,playerInfo:e.playerInfo,searching:e.songs}},function(e){return{switchFavoritesState:function(t){return e(q(t))},addSongToPlayer:function(t,a){return e(Y(t,a))}}})(X),Q=function(e){return e.songs.map(function(t){return r.a.createElement(z,{key:t.trackId,favorite:e.isfavorite,song:t})})},Z=function(e){return e.songs.length?r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(Q,{favorite:!1,songs:e.songs})):r.a.createElement(U.a,{omponent:"h2",variant:"h4",color:"secondary",gutterBottom:!0,align:"center"},"For searching write in input field")},ee=Object(l.b)(function(e){return{songs:e.songs}})(Z),te=function(e){return e.favorites.length?r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(Q,{isfavorite:!0,songs:e.favorites})):r.a.createElement(U.a,{omponent:"h2",variant:"h4",color:"secondary",gutterBottom:!0,align:"center"},"You don't have favorites yet")},ae=Object(l.b)(function(e){return{songs:e.songs.filter(function(e){return e.isFavorite}),favorites:e.favorites}})(te),ne=a(42),re=a(62),oe=a.n(re),ie=a(63),ce=a.n(ie),le=a(113),se=a.n(le),ue=a(114),pe=a.n(ue),me=a(115),de=a.n(me),fe=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).switchSoundState=function(){var e=a.props.history.location.pathname.split(/\//g).reverse()[0],t=a.props.track,n=t.favorites,r=t.songs,o=a.props,i=o.favoritesSongs,c=o.searchingSongs;o.playerInfo.artistName?n.length?a.props.addSongToPlayer(n[0],i):a.props.addSongToPlayer(r[0],c):"favorites"===e&&i[0]?a.props.addSongToPlayer(i[0],i):!e&&c[0]&&a.props.addSongToPlayer(c[0],c)},a.playNext=function(){var e=a.props.playerInfo,t=e.playlist,n=e.next;e.artistName&&1!==t.length&&a.props.addSongToPlayer(t[n],t)},a.playPrevious=function(){var e=a.props.playerInfo,t=e.playlist,n=e.previous;e.artistName&&1!==t.length&&a.props.addSongToPlayer(t[n],t)},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.playerInfo;return r.a.createElement(oe.a,{color:"primary",className:t.appBar},r.a.createElement(ce.a,{className:t.toolbar},r.a.createElement("div",{className:t.songInfo},r.a.createElement(U.a,{name:"trackName",className:t.title,variant:"h5",color:"inherit",noWrap:!0},a.trackName),r.a.createElement(U.a,{name:"artistName",className:t.title,variant:"h6",color:"secondary",noWrap:!0},a.artistName)),r.a.createElement("div",{className:t.controls},r.a.createElement(D.a,{onClick:this.playPrevious,color:"secondary","aria-label":"Previous"},r.a.createElement(se.a,null)),a.isPlaying?r.a.createElement(D.a,{onClick:this.switchSoundState,"aria-label":"Pause"},r.a.createElement(pe.a,{color:"secondary"})):r.a.createElement(D.a,{onClick:this.switchSoundState,"aria-label":"Play"},r.a.createElement(L.a,{color:"secondary"})),r.a.createElement(D.a,{onClick:this.playNext,color:"secondary","aria-label":"Next"},r.a.createElement(de.a,null)))))}}]),t}(n.Component),ge=Object(h.withStyles)(function(e){return{appBar:{top:"auto",bottom:0},title:Object(ne.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),songInfo:{position:"absolute"},toolbar:{display:"flex",alignItems:"center"},controls:{display:"flex",alignItems:"center",margin:"0 auto"}}})(fe),he=Object(l.b)(function(e){return{track:{songs:e.songs.filter(function(t){return t.trackId===e.playerInfo.trackId}),favorites:e.favorites.filter(function(t){return t.trackId===e.playerInfo.trackId})},playerInfo:e.playerInfo,searchingSongs:e.songs,favoritesSongs:e.favorites}},function(e){return{addSongToPlayer:function(t,a){return e(Y(t,a))}}})(ge),ve=a(123),ye=a.n(ve),be=a(39),Ee=a(122),ke=a.n(Ee),Se=a(64),Oe=a.n(Se),we=a(116),Ie=a.n(we),Ne=a(117),je=a.n(Ne),Ce=a(119),Te=a.n(Ce),xe=a(65),Fe=a.n(xe),Pe=a(66),_e=a.n(Pe),De=a(120),Ae=a.n(De),Ue=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).toggleDrawer=function(e){return a.props.toggleDrawer(e)},a.clearStorage=function(){a.props.favorites.forEach(function(e){return a.props.switchFavoritesState(e)}),localStorage.removeItem("iTunesApp")},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Ie.a,{open:this.props.isOpen,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0)},r.a.createElement("div",{role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},r.a.createElement("div",{className:e.list},r.a.createElement(je.a,null,r.a.createElement(N.a,{component:O.b,to:"/"},r.a.createElement(Fe.a,{button:!0},r.a.createElement(Oe.a,null),r.a.createElement(_e.a,{primary:"Search"}))),r.a.createElement(N.a,{component:O.b,to:"/favorites"},r.a.createElement(Fe.a,{button:!0},r.a.createElement(H.a,null),r.a.createElement(_e.a,{primary:"Favorites"}))),r.a.createElement(Te.a,null),r.a.createElement(N.a,{component:O.b,onClick:this.clearStorage,to:"/"},r.a.createElement(Fe.a,{button:!0},r.a.createElement(Ae.a,null),r.a.createElement(_e.a,{primary:"Clear favorites"}))))))))}}]),t}(r.a.Component),Be=Object(h.withStyles)({list:{width:250}})(Ue),Le=Object(l.b)(function(e){return{favorites:e.favorites}},function(e){return{switchFavoritesState:function(t){return e(q(t))}}})(Be),Re=a(121),Ve=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.searchingValue=function(e){var t=e.target.value.trim().split(/\s+/).join("+");t&&a.props.getSongs(t)},a.toggleDrawer=function(e){return function(){a.setState({isOpen:e})}},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes,t="/"===this.props.history.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{position:"static"},r.a.createElement(ce.a,null,r.a.createElement(D.a,{onClick:this.toggleDrawer(!0),className:e.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(ke.a,null)),r.a.createElement(U.a,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},t?"Searching page":"Favorite songs"),r.a.createElement("div",{className:e.grow}),t?r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(Oe.a,null)),r.a.createElement(Re.DebounceInput,{element:ye.a,minLength:2,debounceTimeout:700,onChange:this.searchingValue,placeholder:"Song...",classes:{root:e.inputRoot,input:e.inputInput}})):""))),r.a.createElement(Le,{isOpen:this.state.isOpen,toggleDrawer:this.toggleDrawer}))}}]),t}(n.Component),Ge=Object(h.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(ne.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ne.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(be.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(be.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(ne.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:250}})}})(Ve),He=function(e,t){return e.map(function(e){return{artistName:e.artistName,trackName:e.trackName,previewUrl:e.previewUrl,artworkUrl:(a=e.artworkUrl100,a.slice(0,-13)+"300x300bb.jpg"),trackPrice:e.trackPrice,trackId:e.trackId,collectionName:e.collectionName,artistViewUrl:e.artistViewUrl,isFavorite:t};var a})},We={method:"GET",headers:new Headers},Me=function(e,t){return function(a){return"undefined"===typeof t?fetch("https://itunes.apple.com/search?term=".concat(e,"&media=music&limit=10"),We).then(function(e){return e.json()}).then(function(e){return a(function(e){return{data:e,type:"FETCH_SONGS_SUCCESS"}}(He(e.results,!1)))}).catch(function(e){return a({error:e,type:"FETCH_SONGS_ERROR"})}):fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song")).then(function(e){return e.json()}).then(function(e){return a($(He(e.results,!0)[0]))}).catch(function(e){return a({error:e,type:"FETCH_SONGS_ERROR"})})}},Je=Object(l.b)(null,function(e){return{getSongs:function(t){return e(Me(t))}}})(Ge),Xe=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).playSong=function(){return a.audio.play()},a.pause=function(){return a.audio.pause()},a}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("iTunesApp");"string"===typeof t&&t&&t.split(" ").forEach(function(t){return e.props.getSongs(null,t)})}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.playerInfo,n=a.trackLink,r=a.isPlaying,o=a.playlist,i=a.next;n!==e.playerInfo.trackLink?(this.audio=new Audio(n),this.audio.onended=function(){t.props.addSongToPlayer(o[i],o)},this.audio.onloadeddata=function(){return t.audio.play()}):void 0!==this.audio&&(r?this.playSong():this.pause())}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.playerInfo.trackLink;return e.playerInfo.trackLink&&t!==e.playerInfo.trackLink&&(this.audio.src=""),null}},{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(w.a,{path:"/",component:Je}),r.a.createElement("br",null),r.a.createElement(w.a,{exact:!0,path:"/",component:ee}),r.a.createElement(w.a,{exact:!0,path:"/favorites",component:ae}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,{path:"/",component:he}))}}]),t}(n.Component),Ke=Object(l.b)(function(e){return{playerInfo:e.playerInfo}},function(e){return{getSongs:function(t,a){return e(Me(t,a))},addSongToPlayer:function(t,a){return e(Y(t,a))}}})(Xe),Ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,$e=Object(c.e)(g,Ye(Object(c.a)(s.a)));i.a.render(r.a.createElement(l.a,{store:$e},r.a.createElement(h.MuiThemeProvider,{theme:v.main},r.a.createElement(Ke,null))),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.32f23378.chunk.js.map