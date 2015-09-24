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
var vec__8869 = tailrecursion.hoplon.parse_args(args__8261__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(1),null);
var G__8870 = cljs.core.cst$kw$name;
var G__8871 = "viewport";
var G__8872 = cljs.core.cst$kw$content;
var G__8873 = cljs.core.first(kids);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(G__8870,G__8871,G__8872,G__8873) : tailrecursion.hoplon.html_meta.call(null,G__8870,G__8871,G__8872,G__8873));
};
var tailrecursion$hoplon$app_pages$_index_DOT_html$viewport = function (var_args){
var args__8261__auto__ = null;
if (arguments.length > 0) {
var G__8874__i = 0, G__8874__a = new Array(arguments.length -  0);
while (G__8874__i < G__8874__a.length) {G__8874__a[G__8874__i] = arguments[G__8874__i + 0]; ++G__8874__i;}
  args__8261__auto__ = new cljs.core.IndexedSeq(G__8874__a,0);
} 
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate.call(this,args__8261__auto__);};
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$lang$applyTo = (function (arglist__8875){
var args__8261__auto__ = cljs.core.seq(arglist__8875);
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate(args__8261__auto__);
});
tailrecursion$hoplon$app_pages$_index_DOT_html$viewport.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$app_pages$_index_DOT_html$viewport__delegate;
return tailrecursion$hoplon$app_pages$_index_DOT_html$viewport;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.setup = (function tailrecursion$hoplon$app_pages$_index_DOT_html$setup(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.app_pages._index_DOT_html.viewport.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["width=device-width, initial-scale=1.0"], 0)),(tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$content,"https://twitter.com/catonano",cljs.core.cst$kw$name,"author") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$content,"https://twitter.com/catonano",cljs.core.cst$kw$name,"author"))], null);
});
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$lang,"it",(function (){var G__8876 = (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$charset,"utf-8") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$charset,"utf-8"));
var G__8877 = tailrecursion.hoplon.app_pages._index_DOT_html.setup();
var G__8878 = (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Project0") : tailrecursion.hoplon.title.call(null,"Project0"));
var G__8879 = (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"/semantic-ui.css",cljs.core.cst$kw$rel,"stylesheet") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$href,"/semantic-ui.css",cljs.core.cst$kw$rel,"stylesheet"));
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$4(G__8876,G__8877,G__8878,G__8879) : tailrecursion.hoplon.head.call(null,G__8876,G__8877,G__8878,G__8879));
})(),(function (){var G__8989 = (function (){var G__8993 = (function (){var G__8997 = (function (){var G__8998 = [cljs.core.str("This page uses JavaScript "),cljs.core.str("but it looks like you have it turned off.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__8998) : tailrecursion.hoplon.div.call(null,G__8998));
})();
return (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__8997) : tailrecursion.hoplon.noscript.call(null,G__8997));
})();
var G__8994 = (function (){var G__9001 = cljs.core.cst$kw$toggle;
var G__9002 = tailrecursion.javelin.formula(((function (G__9001,G__8993){
return (function (G__9004,G__9005){
return (G__9004.cljs$core$IFn$_invoke$arity$2 ? G__9004.cljs$core$IFn$_invoke$arity$2("#/home",G__9005) : G__9004.call(null,"#/home",G__9005));
});})(G__9001,G__8993))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route);
var G__9003 = (function (){var G__9010 = cljs.core.cst$kw$class;
var G__9011 = "ui large form";
var G__9012 = cljs.core.cst$kw$method;
var G__9013 = "POST";
var G__9014 = cljs.core.cst$kw$action;
var G__9015 = "#/results";
var G__9016 = (function (){var G__9019 = cljs.core.cst$kw$class;
var G__9020 = "field";
var G__9021 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1("Da") : tailrecursion.hoplon.label.call(null,"Da"));
var G__9022 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$name,"da",cljs.core.cst$kw$placeholder,"Da",cljs.core.cst$kw$type,"text") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$name,"da",cljs.core.cst$kw$placeholder,"Da",cljs.core.cst$kw$type,"text"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9019,G__9020,G__9021,G__9022) : tailrecursion.hoplon.div.call(null,G__9019,G__9020,G__9021,G__9022));
})();
var G__9017 = (function (){var G__9023 = cljs.core.cst$kw$class;
var G__9024 = "field";
var G__9025 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1("A") : tailrecursion.hoplon.label.call(null,"A"));
var G__9026 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$name,"a",cljs.core.cst$kw$placeholder,"A",cljs.core.cst$kw$type,"text") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$name,"a",cljs.core.cst$kw$placeholder,"A",cljs.core.cst$kw$type,"text"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9023,G__9024,G__9025,G__9026) : tailrecursion.hoplon.div.call(null,G__9023,G__9024,G__9025,G__9026));
})();
var G__9018 = (function (){var G__9027 = cljs.core.cst$kw$class;
var G__9028 = "large ui button right floated";
var G__9029 = cljs.core.cst$kw$type;
var G__9030 = "submit";
var G__9031 = [cljs.core.str("Submit")].join('');
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$5(G__9027,G__9028,G__9029,G__9030,G__9031) : tailrecursion.hoplon.button.call(null,G__9027,G__9028,G__9029,G__9030,G__9031));
})();
return (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$9(G__9010,G__9011,G__9012,G__9013,G__9014,G__9015,G__9016,G__9017,G__9018) : tailrecursion.hoplon.form.call(null,G__9010,G__9011,G__9012,G__9013,G__9014,G__9015,G__9016,G__9017,G__9018));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9001,G__9002,G__9003) : tailrecursion.hoplon.div.call(null,G__9001,G__9002,G__9003));
})();
var G__8995 = (function (){var G__9034 = cljs.core.cst$kw$toggle;
var G__9035 = tailrecursion.javelin.formula(((function (G__9034,G__8993,G__8994){
return (function (G__9036,G__9037){
return (G__9036.cljs$core$IFn$_invoke$arity$2 ? G__9036.cljs$core$IFn$_invoke$arity$2("#/results",G__9037) : G__9036.call(null,"#/results",G__9037));
});})(G__9034,G__8993,G__8994))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.active_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.route);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9034,G__9035) : tailrecursion.hoplon.div.call(null,G__9034,G__9035));
})().call(null,(function (){var G__9052 = cljs.core.cst$kw$class;
var G__9053 = "ui big selection celled list";
var G__9054 = (function (){var G__9057 = cljs.core.cst$kw$class;
var G__9058 = "item";
var G__9059 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/helen.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/helen.jpg"));
var G__9060 = (function (){var G__9064 = cljs.core.cst$kw$class;
var G__9065 = "content";
var G__9066 = (function (){var G__9068 = cljs.core.cst$kw$class;
var G__9069 = "header";
var G__9070 = [cljs.core.str("Snickerdoodle")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9068,G__9069,G__9070) : tailrecursion.hoplon.div.call(null,G__9068,G__9069,G__9070));
})();
var G__9067 = [cljs.core.str("An excellent companion")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9064,G__9065,G__9066,G__9067) : tailrecursion.hoplon.div.call(null,G__9064,G__9065,G__9066,G__9067));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9057,G__9058,G__9059,G__9060) : tailrecursion.hoplon.div.call(null,G__9057,G__9058,G__9059,G__9060));
})();
var G__9055 = (function (){var G__9071 = cljs.core.cst$kw$class;
var G__9072 = "item";
var G__9073 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg"));
var G__9074 = (function (){var G__9078 = cljs.core.cst$kw$class;
var G__9079 = "content";
var G__9080 = (function (){var G__9082 = cljs.core.cst$kw$class;
var G__9083 = "header";
var G__9084 = [cljs.core.str("Poodle")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9082,G__9083,G__9084) : tailrecursion.hoplon.div.call(null,G__9082,G__9083,G__9084));
})();
var G__9081 = [cljs.core.str("A poodle, its pretty basic")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9078,G__9079,G__9080,G__9081) : tailrecursion.hoplon.div.call(null,G__9078,G__9079,G__9080,G__9081));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9071,G__9072,G__9073,G__9074) : tailrecursion.hoplon.div.call(null,G__9071,G__9072,G__9073,G__9074));
})();
var G__9056 = (function (){var G__9085 = cljs.core.cst$kw$class;
var G__9086 = "item";
var G__9087 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"ui avatar image",cljs.core.cst$kw$src,"/images/avatar/small/daniel.jpg"));
var G__9088 = (function (){var G__9092 = cljs.core.cst$kw$class;
var G__9093 = "content";
var G__9094 = (function (){var G__9096 = cljs.core.cst$kw$class;
var G__9097 = "header";
var G__9098 = [cljs.core.str("Paulo")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9096,G__9097,G__9098) : tailrecursion.hoplon.div.call(null,G__9096,G__9097,G__9098));
})();
var G__9095 = [cljs.core.str("He's also a dog")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9092,G__9093,G__9094,G__9095) : tailrecursion.hoplon.div.call(null,G__9092,G__9093,G__9094,G__9095));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__9085,G__9086,G__9087,G__9088) : tailrecursion.hoplon.div.call(null,G__9085,G__9086,G__9087,G__9088));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9052,G__9053,G__9054,G__9055,G__9056) : tailrecursion.hoplon.div.call(null,G__9052,G__9053,G__9054,G__9055,G__9056));
})());
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8993,G__8994,G__8995) : tailrecursion.hoplon.div.call(null,G__8993,G__8994,G__8995));
})();
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$1(G__8989) : tailrecursion.hoplon.body.call(null,G__8989));
})()], 0));
