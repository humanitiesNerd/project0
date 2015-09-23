// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('exicon.semantic_ui');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.app_pages._index_DOT_html.route = tailrecursion.hoplon.route_cell.call(null,"#/home/");
if(typeof tailrecursion.hoplon.app_pages._index_DOT_html.page_load__6672__auto__ !== 'undefined'){
} else {
tailrecursion.hoplon.app_pages._index_DOT_html.page_load__6672__auto__ = tailrecursion.hoplon.on_page_load.call(null,(function (){
return window.location.reload();
}));
}
tailrecursion.hoplon.app_pages._index_DOT_html.get_hash = (function tailrecursion$hoplon$app_pages$_index_DOT_html$get_hash(link){
return cljs.core.subs.call(null,link,link.indexOf("#"));
});
tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_ = (function tailrecursion$hoplon$app_pages$_index_DOT_html$active_QMARK_(link,route){
var h = tailrecursion.hoplon.app_pages._index_DOT_html.get_hash.call(null,link);
return cljs.core._EQ_.call(null,h,cljs.core.subs.call(null,route,(0),cljs.core.count.call(null,h)));
});
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.app_pages._index_DOT_html.viewport = (function() { 
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate = function (args__6626__auto__){
var vec__7248 = tailrecursion.hoplon.parse_args.call(null,args__6626__auto__);
var attr = cljs.core.nth.call(null,vec__7248,(0),null);
var kids = cljs.core.nth.call(null,vec__7248,(1),null);
return tailrecursion.hoplon.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.first.call(null,kids));
};
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport = function (var_args){
var args__6626__auto__ = null;
if (arguments.length > 0) {
var G__7249__i = 0, G__7249__a = new Array(arguments.length -  0);
while (G__7249__i < G__7249__a.length) {G__7249__a[G__7249__i] = arguments[G__7249__i + 0]; ++G__7249__i;}
  args__6626__auto__ = new cljs.core.IndexedSeq(G__7249__a,0);
} 
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate.call(this,args__6626__auto__);};
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$applyTo = (function (arglist__7250){
var args__6626__auto__ = cljs.core.seq(arglist__7250);
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate(args__6626__auto__);
});
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate;
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.setup = (function tailrecursion$hoplon$app_pages$_index_DOT_html$setup(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.app_pages._index_DOT_html.viewport.call(null,"width=device-width, initial-scale=1.0"),tailrecursion.hoplon.html_meta.call(null,new cljs.core.Keyword(null,"content","content",15833224),"https://twitter.com/catonano",new cljs.core.Keyword(null,"name","name",1843675177),"author")], null);
});
tailrecursion.hoplon.html.call(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),"it",tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.html_meta.call(null,new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf-8"),tailrecursion.hoplon.app_pages._index_DOT_html.setup.call(null),tailrecursion.hoplon.title.call(null,"Project0"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/semantic-ui.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.noscript.call(null,tailrecursion.hoplon.div.call(null,[cljs.core.str("This page uses JavaScript "),cljs.core.str("but it looks like you have it turned off.")].join(''))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),tailrecursion.javelin.formula.call(null,(function (G__7251,G__7252){
return G__7251.call(null,"#/home",G__7252);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route),tailrecursion.hoplon.form.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"ui large form",new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),"#/results",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"field",tailrecursion.hoplon.label.call(null,"Da"),tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"da",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Da",new cljs.core.Keyword(null,"type","type",1174270348),"text")),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"field",tailrecursion.hoplon.label.call(null,"A"),tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"A",new cljs.core.Keyword(null,"type","type",1174270348),"text")),tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"large ui button right floated",new cljs.core.Keyword(null,"type","type",1174270348),"submit","Submit"))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),tailrecursion.javelin.formula.call(null,(function (G__7253,G__7254){
return G__7253.call(null,"#/results",G__7254);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route)).call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"ui big selection celled list",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"item",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"ui avatar image",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/avatar/small/helen.jpg"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"content",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"header",[cljs.core.str("Snickerdoodle")].join('')),[cljs.core.str("An excellent companion")].join(''))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"item",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"ui avatar image",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/avatar/small/daniel.jpg"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"content",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"header",[cljs.core.str("Poodle")].join('')),[cljs.core.str("A poodle, its pretty basic")].join(''))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"item",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"ui avatar image",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/avatar/small/daniel.jpg"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"content",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"header",[cljs.core.str("Paulo")].join('')),[cljs.core.str("He's also a dog")].join(''))))))));

//# sourceMappingURL=_index_DOT_html.js.map