// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.util.nth = (function tailrecursion$hoplon$util$nth(coll,n){
try{return tailrecursion$hoplon$util$nth(coll,n);
}catch (e10974){if((e10974 instanceof Error)){
var e = e10974;
return null;
} else {
throw e10974;

}
}});
tailrecursion.hoplon.util.name = (function tailrecursion$hoplon$util$name(x){
try{return tailrecursion$hoplon$util$name(x);
}catch (e10977){if((e10977 instanceof Error)){
var e = e10977;
return null;
} else {
throw e10977;

}
}});
tailrecursion.hoplon.util.interval = (function tailrecursion$hoplon$util$interval(f,msec){
return window.setInterval(f,msec);
});
tailrecursion.hoplon.util.route_cell = (function tailrecursion$hoplon$util$route_cell(msec,default$){
var hash = (function (){
return window.location.hash;
});
var ret = tailrecursion.javelin.cell(hash());
tailrecursion.hoplon.util.interval(((function (ret,hash){
return (function (){
var h = hash();
var G__10980 = ret;
var G__10981 = ((cljs.core.empty_QMARK_(h))?default$:h);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10980,G__10981) : cljs.core.reset_BANG_.call(null,G__10980,G__10981));
});})(ret,hash))
,msec);

return ret;
});
var qcache_10995 = (function (){var G__10986 = cljs.core.constant$keyword$tailrecursion$hoplon$util_SLASH_none;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10986) : cljs.core.atom.call(null,G__10986));
})();
tailrecursion.hoplon.util.query = ((function (qcache_10995){
return (function tailrecursion$hoplon$util$query(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.util.query.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(qcache_10995))
;

tailrecursion.hoplon.util.query.cljs$core$IFn$_invoke$arity$variadic = ((function (qcache_10995){
return (function (p__10988){
var vec__10989 = p__10988;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10989,(0),null);
var _ = cljs.core.nthnext(vec__10989,(1));
var args = vec__10989;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$tailrecursion$hoplon$util_SLASH_none,(function (){var G__10990 = qcache_10995;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10990) : cljs.core.deref.call(null,G__10990));
})()))){
if(cljs.core.truth_(k)){
return (function (){var G__10991 = qcache_10995;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10991) : cljs.core.deref.call(null,G__10991));
})().call(null,tailrecursion.hoplon.util.name(k));
} else {
var G__10992 = qcache_10995;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10992) : cljs.core.deref.call(null,G__10992));
}
} else {
var s = window.location.search;
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
var v = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),/[&]/);
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__10989,k,_,args,qcache_10995){
return (function (p1__10985_SHARP_){
if((cljs.core.count(p1__10985_SHARP_) < (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10985_SHARP_,"");
} else {
return p1__10985_SHARP_;
}
});})(v,s,vec__10989,k,_,args,qcache_10995))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__10989,k,_,args,qcache_10995){
return (function (p1__10984_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),p1__10984_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(p1__10984_SHARP_))) || (((2) < cljs.core.count(p1__10984_SHARP_)));
});})(v,s,vec__10989,k,_,args,qcache_10995))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__10989,k,_,args,qcache_10995){
return (function (p1__10983_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,p1__10983_SHARP_);
});})(v,s,vec__10989,k,_,args,qcache_10995))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__10989,k,_,args,qcache_10995){
return (function (p1__10982_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10982_SHARP_,/[=]/);
});})(v,s,vec__10989,k,_,args,qcache_10995))
,v)))));
var G__10993_10996 = qcache_10995;
var G__10994_10997 = m;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10993_10996,G__10994_10997) : cljs.core.reset_BANG_.call(null,G__10993_10996,G__10994_10997));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.util.query,args);
} else {
return null;
}
}
});})(qcache_10995))
;

tailrecursion.hoplon.util.query.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.util.query.cljs$lang$applyTo = ((function (qcache_10995){
return (function (seq10987){
return tailrecursion.hoplon.util.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10987));
});})(qcache_10995))
;
tailrecursion.hoplon.util.pluralize = (function tailrecursion$hoplon$util$pluralize(word,count){
return [cljs.core.str(word),cljs.core.str(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),count))?"s":null))].join('');
});
tailrecursion.hoplon.util.capitalize = (function tailrecursion$hoplon$util$capitalize(s){
if(typeof s === 'string'){
return clojure.string.capitalize(s);
} else {
return null;
}
});
tailrecursion.hoplon.util.str_partition = (function tailrecursion$hoplon$util$str_partition(re,s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__10998_SHARP_){
if(cljs.core.truth_(cljs.core.re_matches(re,p1__10998_SHARP_))){
return true;
} else {
return null;
}
}),s));
});
tailrecursion.hoplon.util.capitalize_name = (function tailrecursion$hoplon$util$capitalize_name(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.util.capitalize,tailrecursion.hoplon.util.str_partition(/[a-zA-Z]/,s)));
});
tailrecursion.hoplon.util.format_date = (function tailrecursion$hoplon$util$format_date(date_str){
var vec__11000 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Number,clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(2),null);
var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
var i = (m - (1));
if((i < (0))){
return "<< Sorry, there was an error computing the date. >>";
} else {
return [cljs.core.str(tailrecursion.hoplon.util.nth(months,(m - (1)))),cljs.core.str(" "),cljs.core.str(d),cljs.core.str(", "),cljs.core.str(y)].join('');
}
});
