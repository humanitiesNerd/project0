// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.app_pages._index_DOT_html.route = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1("#/home/");
if(typeof tailrecursion.hoplon.app_pages._index_DOT_html.page_load__8307__auto__ !== 'undefined'){
} else {
tailrecursion.hoplon.app_pages._index_DOT_html.page_load__8307__auto__ = tailrecursion.hoplon.on_page_load((function (){
return window.location.reload();
}));
}
tailrecursion.hoplon.app_pages._index_DOT_html.get_hash = (function tailrecursion$hoplon$app_pages$_index_DOT_html$get_hash(link){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(link,link.indexOf("#"));
});
tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_ = (function tailrecursion$hoplon$app_pages$_index_DOT_html$active_QMARK_(link,route){
var h = tailrecursion.hoplon.app_pages._index_DOT_html.get_hash(link);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(route,(0),cljs.core.count(h)));
});
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.app_pages._index_DOT_html.viewport = (function() { 
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate = function (args__8261__auto__){
var vec__8859 = tailrecursion.hoplon.parse_args(args__8261__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8859,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8859,(1),null);
var G__8860 = cljs.core.cst$kw$name;
var G__8861 = "viewport";
var G__8862 = cljs.core.cst$kw$content;
var G__8863 = cljs.core.first(kids);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__8860,G__8861,G__8862,G__8863) : tailrecursion.hoplon.html_meta.call(null,G__8860,G__8861,G__8862,G__8863));
};
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport = function (var_args){
var args__8261__auto__ = null;
if (arguments.length > 0) {
var G__8864__i = 0, G__8864__a = new Array(arguments.length -  0);
while (G__8864__i < G__8864__a.length) {G__8864__a[G__8864__i] = arguments[G__8864__i + 0]; ++G__8864__i;}
  args__8261__auto__ = new cljs.core.IndexedSeq(G__8864__a,0);
} 
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate.call(this,args__8261__auto__);};
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$applyTo = (function (arglist__8865){
var args__8261__auto__ = cljs.core.seq(arglist__8865);
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate(args__8261__auto__);
});
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate;
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.setup = (function tailrecursion$hoplon$app_pages$_index_DOT_html$setup(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.app_pages._index_DOT_html.viewport.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["width=device-width, initial-scale=1.0"], 0)),(tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$content,"https://twitter.com/catonano",cljs.core.cst$kw$name,"author") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$content,"https://twitter.com/catonano",cljs.core.cst$kw$name,"author"))], null);
});
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$lang,"it",(function (){var G__8866 = (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__8867 = tailrecursion.hoplon.app_pages._index_DOT_html.setup();
var G__8868 = (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Project0") : tailrecursion.hoplon.title.call(null,"Project0"));
var G__8869 = (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"/semantic-ui.css",cljs.core.cst$kw$rel,"stylesheet") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$href,"/semantic-ui.css",cljs.core.cst$kw$rel,"stylesheet"));
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$4(G__8866,G__8867,G__8868,G__8869) : tailrecursion.hoplon.head.call(null,G__8866,G__8867,G__8868,G__8869));
})(),(function (){var G__8974 = (function (){var G__8978 = (function (){var G__8982 = (function (){var G__8983 = [cljs.core.str("This page uses JavaScript "),cljs.core.str("but it looks like you have it turned off.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__8983) : tailrecursion.hoplon.div.call(null,G__8983));
})();
return (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__8982) : tailrecursion.hoplon.noscript.call(null,G__8982));
})();
var G__8979 = (function (){var G__8986 = cljs.core.cst$kw$toggle;
var G__8987 = tailrecursion.javelin.formula(((function (G__8986,G__8978){
return (function (G__8989,G__8990){
return (G__8989.cljs$core$IFn$_invoke$arity$2 ? G__8989.cljs$core$IFn$_invoke$arity$2("#/home",G__8990) : G__8989.call(null,"#/home",G__8990));
});})(G__8986,G__8978))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route);
var G__8988 = (function (){var G__8995 = cljs.core.cst$kw$class;
var G__8996 = "ui large form";
var G__8997 = cljs.core.cst$kw$method;
var G__8998 = "POST";
var G__8999 = cljs.core.cst$kw$action;
var G__9000 = "#/results";
var G__9001 = (function (){var G__9004 = cljs.core.cst$kw$class;
var G__9005 = "field";
var G__9006 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1("Da") : tailrecursion.hoplon.label.call(null,"Da"));
var G__9007 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$name,"da",cljs.core.cst$kw$placeholder,"Da",cljs.core.cst$kw$type,"text") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$name,"da",cljs.core.cst$kw$placeholder,"Da",cljs.core.cst$kw$type,"text"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9004,G__9005,G__9006,G__9007) : tailrecursion.hoplon.div.call(null,G__9004,G__9005,G__9006,G__9007));
})();
var G__9002 = (function (){var G__9008 = cljs.core.cst$kw$class;
var G__9009 = "field";
var G__9010 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1("A") : tailrecursion.hoplon.label.call(null,"A"));
var G__9011 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$name,"a",cljs.core.cst$kw$placeholder,"A",cljs.core.cst$kw$type,"text") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$name,"a",cljs.core.cst$kw$placeholder,"A",cljs.core.cst$kw$type,"text"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9008,G__9009,G__9010,G__9011) : tailrecursion.hoplon.div.call(null,G__9008,G__9009,G__9010,G__9011));
})();
var G__9003 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"large ui button right floated",cljs.core.cst$kw$type,"submit","Submit") : tailrecursion.hoplon.button.call(null,cljs.core.cst$kw$class,"large ui button right floated",cljs.core.cst$kw$type,"submit","Submit"));
return (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$9(G__8995,G__8996,G__8997,G__8998,G__8999,G__9000,G__9001,G__9002,G__9003) : tailrecursion.hoplon.form.call(null,G__8995,G__8996,G__8997,G__8998,G__8999,G__9000,G__9001,G__9002,G__9003));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8986,G__8987,G__8988) : tailrecursion.hoplon.div.call(null,G__8986,G__8987,G__8988));
})();
var G__8980 = (function (){var G__9014 = cljs.core.cst$kw$toggle;
var G__9015 = tailrecursion.javelin.formula(((function (G__9014,G__8978,G__8979){
return (function (G__9016,G__9017){
return (G__9016.cljs$core$IFn$_invoke$arity$2 ? G__9016.cljs$core$IFn$_invoke$arity$2("#/results",G__9017) : G__9016.call(null,"#/results",G__9017));
});})(G__9014,G__8978,G__8979))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9014,G__9015) : tailrecursion.hoplon.div.call(null,G__9014,G__9015));
})().call(null,(function (){var G__9032 = cljs.core.cst$kw$class;
var G__9033 = "ui big selection celled list";
var G__9034 = (function (){var G__9037 = cljs.core.cst$kw$class;
var G__9038 = "item";
var G__9039 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/helen.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/helen.jpg"));
var G__9040 = (function (){var G__9044 = cljs.core.cst$kw$class;
var G__9045 = "content";
var G__9046 = (function (){var G__9048 = cljs.core.cst$kw$class;
var G__9049 = "header";
var G__9050 = [cljs.core.str("Snickerdoodle")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9048,G__9049,G__9050) : tailrecursion.hoplon.div.call(null,G__9048,G__9049,G__9050));
})();
var G__9047 = [cljs.core.str("An excellent companion")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9044,G__9045,G__9046,G__9047) : tailrecursion.hoplon.div.call(null,G__9044,G__9045,G__9046,G__9047));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9037,G__9038,G__9039,G__9040) : tailrecursion.hoplon.div.call(null,G__9037,G__9038,G__9039,G__9040));
})();
var G__9035 = (function (){var G__9051 = cljs.core.cst$kw$class;
var G__9052 = "item";
var G__9053 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg"));
var G__9054 = (function (){var G__9058 = cljs.core.cst$kw$class;
var G__9059 = "content";
var G__9060 = (function (){var G__9062 = cljs.core.cst$kw$class;
var G__9063 = "header";
var G__9064 = [cljs.core.str("Poodle")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9062,G__9063,G__9064) : tailrecursion.hoplon.div.call(null,G__9062,G__9063,G__9064));
})();
var G__9061 = [cljs.core.str("A poodle, its pretty basic")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9058,G__9059,G__9060,G__9061) : tailrecursion.hoplon.div.call(null,G__9058,G__9059,G__9060,G__9061));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9051,G__9052,G__9053,G__9054) : tailrecursion.hoplon.div.call(null,G__9051,G__9052,G__9053,G__9054));
})();
var G__9036 = (function (){var G__9065 = cljs.core.cst$kw$class;
var G__9066 = "item";
var G__9067 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg"));
var G__9068 = (function (){var G__9072 = cljs.core.cst$kw$class;
var G__9073 = "content";
var G__9074 = (function (){var G__9076 = cljs.core.cst$kw$class;
var G__9077 = "header";
var G__9078 = [cljs.core.str("Paulo")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9076,G__9077,G__9078) : tailrecursion.hoplon.div.call(null,G__9076,G__9077,G__9078));
})();
var G__9075 = [cljs.core.str("He's also a dog")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9072,G__9073,G__9074,G__9075) : tailrecursion.hoplon.div.call(null,G__9072,G__9073,G__9074,G__9075));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9065,G__9066,G__9067,G__9068) : tailrecursion.hoplon.div.call(null,G__9065,G__9066,G__9067,G__9068));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9032,G__9033,G__9034,G__9035,G__9036) : tailrecursion.hoplon.div.call(null,G__9032,G__9033,G__9034,G__9035,G__9036));
})());
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8978,G__8979,G__8980) : tailrecursion.hoplon.div.call(null,G__8978,G__8979,G__8980));
})();
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1(G__8974) : tailrecursion.hoplon.body.call(null,G__8974));
})()], 0));
