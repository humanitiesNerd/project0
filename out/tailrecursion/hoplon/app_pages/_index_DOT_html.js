// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.util');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.app_pages._index_DOT_html.route = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1("#/home/");
if(typeof tailrecursion.hoplon.app_pages._index_DOT_html.page_load__10442__auto__ !== 'undefined'){
} else {
tailrecursion.hoplon.app_pages._index_DOT_html.page_load__10442__auto__ = tailrecursion.hoplon.on_page_load((function (){
return window.location.reload();
}));
}
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.app_pages._index_DOT_html.viewport = (function() { 
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate = function (args__10396__auto__){
var vec__10933 = tailrecursion.hoplon.parse_args(args__10396__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10933,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10933,(1),null);
var G__10934 = cljs.core.constant$keyword$name;
var G__10935 = "viewport";
var G__10936 = cljs.core.constant$keyword$content;
var G__10937 = cljs.core.first(kids);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__10934,G__10935,G__10936,G__10937) : tailrecursion.hoplon.html_meta.call(null,G__10934,G__10935,G__10936,G__10937));
};
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport = function (var_args){
var args__10396__auto__ = null;
if (arguments.length > 0) {
var G__10938__i = 0, G__10938__a = new Array(arguments.length -  0);
while (G__10938__i < G__10938__a.length) {G__10938__a[G__10938__i] = arguments[G__10938__i + 0]; ++G__10938__i;}
  args__10396__auto__ = new cljs.core.IndexedSeq(G__10938__a,0);
} 
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate.call(this,args__10396__auto__);};
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$applyTo = (function (arglist__10939){
var args__10396__auto__ = cljs.core.seq(arglist__10939);
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate(args__10396__auto__);
});
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate;
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.setup = (function tailrecursion$hoplon$app_pages$_index_DOT_html$setup(){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.app_pages._index_DOT_html.viewport.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["width=device-width, initial-scale=1.0"], 0)),(function (){var G__10944 = cljs.core.constant$keyword$content;
var G__10945 = "https://twitter.com/catonano";
var G__10946 = cljs.core.constant$keyword$name;
var G__10947 = "author";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__10944,G__10945,G__10946,G__10947) : tailrecursion.hoplon.html_meta.call(null,G__10944,G__10945,G__10946,G__10947));
})()],null));
});
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$lang,"en",(function (){var G__10948 = (function (){var G__10951 = cljs.core.constant$keyword$charset;
var G__10952 = "utf-8";
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2(G__10951,G__10952) : tailrecursion.hoplon.html_meta.call(null,G__10951,G__10952));
})();
var G__10949 = tailrecursion.hoplon.app_pages._index_DOT_html.setup();
var G__10950 = (function (){var G__10953 = "Project0";
return (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1(G__10953) : tailrecursion.hoplon.title.call(null,G__10953));
})();
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$3(G__10948,G__10949,G__10950) : tailrecursion.hoplon.head.call(null,G__10948,G__10949,G__10950));
})(),(function (){var G__10954 = (function (){var G__10955 = (function (){var G__10958 = cljs.core.constant$keyword$do_DASH_scroll_DASH_to;
var G__10959 = tailrecursion.javelin.formula(((function (G__10958){
return (function (G__10960){
return G__10960;
});})(G__10958))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route);
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__10958,G__10959) : tailrecursion.hoplon.a.call(null,G__10958,G__10959));
})();
var G__10956 = (function (){var G__10961 = (function (){var G__10962 = "This page uses JavaScript but it looks like you have it turned off.";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__10962) : tailrecursion.hoplon.div.call(null,G__10962));
})();
return (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__10961) : tailrecursion.hoplon.noscript.call(null,G__10961));
})();
var G__10957 = (function (){var G__10963 = cljs.core.constant$keyword$class;
var G__10964 = "ui main text container";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__10963,G__10964) : tailrecursion.hoplon.div.call(null,G__10963,G__10964));
})().call(null,(function (){var G__10965 = cljs.core.constant$keyword$class;
var G__10966 = "ui header";
var G__10967 = "Sticky Example";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__10965,G__10966,G__10967) : tailrecursion.hoplon.h1.call(null,G__10965,G__10966,G__10967));
})(),(function (){var G__10968 = "This example shows how to use lazy loaded images, a sticky menu, and a simple text container";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__10968) : tailrecursion.hoplon.p.call(null,G__10968));
})());
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__10955,G__10956,G__10957) : tailrecursion.hoplon.div.call(null,G__10955,G__10956,G__10957));
})();
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1(G__10954) : tailrecursion.hoplon.body.call(null,G__10954));
})()], 0));
