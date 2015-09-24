// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9516_SHARP_){
return (p1__9516_SHARP_ instanceof Node);
}):(function (p1__9517_SHARP_){
try{return p1__9517_SHARP_.nodeType;
}catch (e9518){if((e9518 instanceof Error)){
var _ = e9518;
return null;
} else {
throw e9518;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9519_SHARP_){
try{return cljs.core.vector_QMARK_(p1__9519_SHARP_);
}catch (e9520){if((e9520 instanceof Error)){
var _ = e9520;
return null;
} else {
throw e9520;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9521_SHARP_){
try{return cljs.core.seq_QMARK_(p1__9521_SHARP_);
}catch (e9522){if((e9522 instanceof Error)){
var _ = e9522;
return null;
} else {
throw e9522;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__9523_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__9523_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args9524 = [];
var len__6061__auto___9528 = arguments.length;
var i__6062__auto___9529 = (0);
while(true){
if((i__6062__auto___9529 < len__6061__auto___9528)){
args9524.push((arguments[i__6062__auto___9529]));

var G__9530 = (i__6062__auto___9529 + (1));
i__6062__auto___9529 = G__9530;
continue;
} else {
}
break;
}

var G__9526 = args9524.length;
switch (G__9526) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9524.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e9527){if((e9527 instanceof Error)){
var _ = e9527;
return not_found;
} else {
throw e9527;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args9532 = [];
var len__6061__auto___9535 = arguments.length;
var i__6062__auto___9536 = (0);
while(true){
if((i__6062__auto___9536 < len__6061__auto___9535)){
args9532.push((arguments[i__6062__auto___9536]));

var G__9537 = (i__6062__auto___9536 + (1));
i__6062__auto___9536 = G__9537;
continue;
} else {
}
break;
}

var G__9534 = args9532.length;
switch (G__9534) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9532.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.unsplice = (function tailrecursion$hoplon$unsplice(forms){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__9539_SHARP_){
if(cljs.core.truth_((function (){var or__5022__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__9539_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__9539_SHARP_));
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__9539_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__9539_SHARP_));
}
})())){
return tailrecursion$hoplon$unsplice(p1__9539_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9539_SHARP_], null);
}
}),cljs.core.array_seq([forms], 0));
});
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__9542){
var vec__9544 = p__9542;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9544,(0),null);
var tail = cljs.core.nthnext(vec__9544,(1));
var args = vec__9544;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__9544,head,tail,args){
return (function (p1__9540_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__9540_SHARP_)));
});})(kw1_QMARK_,vec__9544,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__9544,head,tail,args){
return (function (p1__9541_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__9541_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__9544,head,tail,args))
;
if(cljs.core.map_QMARK_(head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice(tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,mkkw(args)),tailrecursion.hoplon.unsplice(drkw(args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice(args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function tailrecursion$hoplon$add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__9546_SHARP_,p2__9545_SHARP_){
var n = (function (){var s = cljs.core.name(p2__9545_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__9545_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9546_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__9607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9607) : cljs.core.atom.call(null,G__9607));
})();
var ons = (function (){var G__9608 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9608) : cljs.core.atom.call(null,G__9608));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__9547_SHARP_,p2__9548_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__9547_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__9548_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__9609_9661 = cljs.core.seq(attr);
var chunk__9610_9662 = null;
var count__9611_9663 = (0);
var i__9612_9664 = (0);
while(true){
if((i__9612_9664 < count__9611_9663)){
var vec__9613_9665 = chunk__9610_9662.cljs$core$IIndexed$_nth$arity$2(null,i__9612_9664);
var k_9666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9613_9665,(0),null);
var v_9667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9613_9665,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_9667))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9666) : dokey.call(null,k_9666)),v_9667);
} else {
if(cljs.core.fn_QMARK_(v_9667)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_9666) : onkey.call(null,k_9666)),v_9667);
} else {
var G__9614_9668 = this$;
var G__9615_9669 = (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9666) : dokey.call(null,k_9666));
var G__9616_9670 = v_9667;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9614_9668,G__9615_9669,G__9616_9670) : tailrecursion.hoplon.do_BANG_.call(null,G__9614_9668,G__9615_9669,G__9616_9670));

}
}

var G__9671 = seq__9609_9661;
var G__9672 = chunk__9610_9662;
var G__9673 = count__9611_9663;
var G__9674 = (i__9612_9664 + (1));
seq__9609_9661 = G__9671;
chunk__9610_9662 = G__9672;
count__9611_9663 = G__9673;
i__9612_9664 = G__9674;
continue;
} else {
var temp__4425__auto___9675 = cljs.core.seq(seq__9609_9661);
if(temp__4425__auto___9675){
var seq__9609_9676__$1 = temp__4425__auto___9675;
if(cljs.core.chunked_seq_QMARK_(seq__9609_9676__$1)){
var c__5806__auto___9677 = cljs.core.chunk_first(seq__9609_9676__$1);
var G__9678 = cljs.core.chunk_rest(seq__9609_9676__$1);
var G__9679 = c__5806__auto___9677;
var G__9680 = cljs.core.count(c__5806__auto___9677);
var G__9681 = (0);
seq__9609_9661 = G__9678;
chunk__9610_9662 = G__9679;
count__9611_9663 = G__9680;
i__9612_9664 = G__9681;
continue;
} else {
var vec__9617_9682 = cljs.core.first(seq__9609_9676__$1);
var k_9683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9617_9682,(0),null);
var v_9684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9617_9682,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_9684))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9683) : dokey.call(null,k_9683)),v_9684);
} else {
if(cljs.core.fn_QMARK_(v_9684)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_9683) : onkey.call(null,k_9683)),v_9684);
} else {
var G__9618_9685 = this$;
var G__9619_9686 = (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9683) : dokey.call(null,k_9683));
var G__9620_9687 = v_9684;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9618_9685,G__9619_9686,G__9620_9687) : tailrecursion.hoplon.do_BANG_.call(null,G__9618_9685,G__9619_9686,G__9620_9687));

}
}

var G__9688 = cljs.core.next(seq__9609_9676__$1);
var G__9689 = null;
var G__9690 = (0);
var G__9691 = (0);
seq__9609_9661 = G__9688;
chunk__9610_9662 = G__9689;
count__9611_9663 = G__9690;
i__9612_9664 = G__9691;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dos) : cljs.core.deref.call(null,dos)))){
var G__9633_9692 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__9635 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dos) : cljs.core.deref.call(null,dos)));
var chunk__9636 = null;
var count__9637 = (0);
var i__9638 = (0);
while(true){
if((i__9638 < count__9637)){
var vec__9639 = chunk__9636.cljs$core$IIndexed$_nth$arity$2(null,i__9638);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639,(1),null);
var G__9640_9694 = this$;
var G__9641_9695 = k;
var G__9642_9696 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9640_9694,G__9641_9695,G__9642_9696) : tailrecursion.hoplon.do_BANG_.call(null,G__9640_9694,G__9641_9695,G__9642_9696));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__9635,chunk__9636,count__9637,i__9638,vec__9639,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9550_SHARP_,p2__9551_SHARP_,p3__9552_SHARP_,p4__9549_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__9549_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9549_SHARP_));
});})(seq__9635,chunk__9636,count__9637,i__9638,vec__9639,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__9697 = seq__9635;
var G__9698 = chunk__9636;
var G__9699 = count__9637;
var G__9700 = (i__9638 + (1));
seq__9635 = G__9697;
chunk__9636 = G__9698;
count__9637 = G__9699;
i__9638 = G__9700;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9635);
if(temp__4425__auto__){
var seq__9635__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9635__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9635__$1);
var G__9701 = cljs.core.chunk_rest(seq__9635__$1);
var G__9702 = c__5806__auto__;
var G__9703 = cljs.core.count(c__5806__auto__);
var G__9704 = (0);
seq__9635 = G__9701;
chunk__9636 = G__9702;
count__9637 = G__9703;
i__9638 = G__9704;
continue;
} else {
var vec__9643 = cljs.core.first(seq__9635__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9643,(1),null);
var G__9644_9705 = this$;
var G__9645_9706 = k;
var G__9646_9707 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9644_9705,G__9645_9706,G__9646_9707) : tailrecursion.hoplon.do_BANG_.call(null,G__9644_9705,G__9645_9706,G__9646_9707));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__9635,chunk__9636,count__9637,i__9638,vec__9643,k,v,seq__9635__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9550_SHARP_,p2__9551_SHARP_,p3__9552_SHARP_,p4__9549_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__9549_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9549_SHARP_));
});})(seq__9635,chunk__9636,count__9637,i__9638,vec__9643,k,v,seq__9635__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__9708 = cljs.core.next(seq__9635__$1);
var G__9709 = null;
var G__9710 = (0);
var G__9711 = (0);
seq__9635 = G__9708;
chunk__9636 = G__9709;
count__9637 = G__9710;
i__9638 = G__9711;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__9634_9693 = (0);
setTimeout(G__9633_9692,G__9634_9693);
} else {
}

if(cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ons) : cljs.core.deref.call(null,ons)))){
var G__9653_9712 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__9655 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ons) : cljs.core.deref.call(null,ons)));
var chunk__9656 = null;
var count__9657 = (0);
var i__9658 = (0);
while(true){
if((i__9658 < count__9657)){
var vec__9659 = chunk__9656.cljs$core$IIndexed$_nth$arity$2(null,i__9658);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9659,(1),null);
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));

var G__9714 = seq__9655;
var G__9715 = chunk__9656;
var G__9716 = count__9657;
var G__9717 = (i__9658 + (1));
seq__9655 = G__9714;
chunk__9656 = G__9715;
count__9657 = G__9716;
i__9658 = G__9717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9655);
if(temp__4425__auto__){
var seq__9655__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9655__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9655__$1);
var G__9718 = cljs.core.chunk_rest(seq__9655__$1);
var G__9719 = c__5806__auto__;
var G__9720 = cljs.core.count(c__5806__auto__);
var G__9721 = (0);
seq__9655 = G__9718;
chunk__9656 = G__9719;
count__9657 = G__9720;
i__9658 = G__9721;
continue;
} else {
var vec__9660 = cljs.core.first(seq__9655__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9660,(1),null);
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));

var G__9722 = cljs.core.next(seq__9655__$1);
var G__9723 = null;
var G__9724 = (0);
var G__9725 = (0);
seq__9655 = G__9722;
chunk__9656 = G__9723;
count__9657 = G__9724;
i__9658 = G__9725;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
;
var G__9654_9713 = (0);
setTimeout(G__9653_9712,G__9654_9713);
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9726_SHARP_,p2__9727_SHARP_){
return p1__9726_SHARP_.appendChild(p2__9727_SHARP_);
}):(function (p1__9728_SHARP_,p2__9729_SHARP_){
try{return p1__9728_SHARP_.appendChild(p2__9729_SHARP_);
}catch (e9730){if((e9730 instanceof Error)){
var _ = e9730;
return null;
} else {
throw e9730;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__9733 = this$;
var G__9734 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__9733,G__9734) : tailrecursion.hoplon.add_children_BANG_.call(null,G__9733,G__9734));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__9740){
var vec__9746 = p__9740;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9746,(0),null);
var _ = cljs.core.nthnext(vec__9746,(1));
var kids = vec__9746;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__9746,child_cell,_,kids){
return (function (p1__9736_SHARP_,p2__9737_SHARP_,p3__9738_SHARP_,p4__9735_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__9735_SHARP_);
});})(vec__9746,child_cell,_,kids))
);
} else {
var node_9751 = ((function (vec__9746,child_cell,_,kids){
return (function (p1__9739_SHARP_){
if(typeof p1__9739_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__9739_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__9739_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9739_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__9739_SHARP_)))){
return p1__9739_SHARP_;
} else {
return null;
}
}
});})(vec__9746,child_cell,_,kids))
;
var seq__9747_9752 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_9751,tailrecursion.hoplon.unsplice(kids)));
var chunk__9748_9753 = null;
var count__9749_9754 = (0);
var i__9750_9755 = (0);
while(true){
if((i__9750_9755 < count__9749_9754)){
var x_9756 = chunk__9748_9753.cljs$core$IIndexed$_nth$arity$2(null,i__9750_9755);
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9756) : tailrecursion.hoplon.append_child.call(null,this$,x_9756));

var G__9757 = seq__9747_9752;
var G__9758 = chunk__9748_9753;
var G__9759 = count__9749_9754;
var G__9760 = (i__9750_9755 + (1));
seq__9747_9752 = G__9757;
chunk__9748_9753 = G__9758;
count__9749_9754 = G__9759;
i__9750_9755 = G__9760;
continue;
} else {
var temp__4425__auto___9761 = cljs.core.seq(seq__9747_9752);
if(temp__4425__auto___9761){
var seq__9747_9762__$1 = temp__4425__auto___9761;
if(cljs.core.chunked_seq_QMARK_(seq__9747_9762__$1)){
var c__5806__auto___9763 = cljs.core.chunk_first(seq__9747_9762__$1);
var G__9764 = cljs.core.chunk_rest(seq__9747_9762__$1);
var G__9765 = c__5806__auto___9763;
var G__9766 = cljs.core.count(c__5806__auto___9763);
var G__9767 = (0);
seq__9747_9752 = G__9764;
chunk__9748_9753 = G__9765;
count__9749_9754 = G__9766;
i__9750_9755 = G__9767;
continue;
} else {
var x_9768 = cljs.core.first(seq__9747_9762__$1);
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9768) : tailrecursion.hoplon.append_child.call(null,this$,x_9768));

var G__9769 = cljs.core.next(seq__9747_9762__$1);
var G__9770 = null;
var G__9771 = (0);
var G__9772 = (0);
seq__9747_9752 = G__9769;
chunk__9748_9753 = G__9770;
count__9749_9754 = G__9771;
i__9750_9755 = G__9772;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function tailrecursion$hoplon$on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__9780__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9774 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9774,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9774,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9775 = this$;
G__9775.hoplonIFn(attr,kids);

return G__9775;
} else {
var G__9776 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9776,attr);

tailrecursion.hoplon.add_children_BANG_(G__9776,kids);

return G__9776;
}
};
var G__9780 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9781__i = 0, G__9781__a = new Array(arguments.length -  1);
while (G__9781__i < G__9781__a.length) {G__9781__a[G__9781__i] = arguments[G__9781__i + 1]; ++G__9781__i;}
  args = new cljs.core.IndexedSeq(G__9781__a,0);
} 
return G__9780__delegate.call(this,self__,args);};
G__9780.cljs$lang$maxFixedArity = 1;
G__9780.cljs$lang$applyTo = (function (arglist__9782){
var self__ = cljs.core.first(arglist__9782);
var args = cljs.core.rest(arglist__9782);
return G__9780__delegate(self__,args);
});
G__9780.cljs$core$IFn$_invoke$arity$variadic = G__9780__delegate;
return G__9780;
})()
;

Element.prototype.apply = (function (self__,args9773){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9773)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9783__delegate = function (args){
var this$ = this;
var vec__9777 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9777,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9777,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9778 = this$;
G__9778.hoplonIFn(attr,kids);

return G__9778;
} else {
var G__9779 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9779,attr);

tailrecursion.hoplon.add_children_BANG_(G__9779,kids);

return G__9779;
}
};
var G__9783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9784__i = 0, G__9784__a = new Array(arguments.length -  0);
while (G__9784__i < G__9784__a.length) {G__9784__a[G__9784__i] = arguments[G__9784__i + 0]; ++G__9784__i;}
  args = new cljs.core.IndexedSeq(G__9784__a,0);
} 
return G__9783__delegate.call(this,args);};
G__9783.cljs$lang$maxFixedArity = 0;
G__9783.cljs$lang$applyTo = (function (arglist__9785){
var args = cljs.core.seq(arglist__9785);
return G__9783__delegate(args);
});
G__9783.cljs$core$IFn$_invoke$arity$variadic = G__9783__delegate;
return G__9783;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__9796__delegate = function (args){
var vec__9791 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9791,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9791,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__9792 = cljs.core.seq(kids);
var chunk__9793 = null;
var count__9794 = (0);
var i__9795 = (0);
while(true){
if((i__9795 < count__9794)){
var k = chunk__9793.cljs$core$IIndexed$_nth$arity$2(null,i__9795);
elem.appendChild(k);

var G__9797 = seq__9792;
var G__9798 = chunk__9793;
var G__9799 = count__9794;
var G__9800 = (i__9795 + (1));
seq__9792 = G__9797;
chunk__9793 = G__9798;
count__9794 = G__9799;
i__9795 = G__9800;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9792);
if(temp__4425__auto__){
var seq__9792__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9792__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9792__$1);
var G__9801 = cljs.core.chunk_rest(seq__9792__$1);
var G__9802 = c__5806__auto__;
var G__9803 = cljs.core.count(c__5806__auto__);
var G__9804 = (0);
seq__9792 = G__9801;
chunk__9793 = G__9802;
count__9794 = G__9803;
i__9795 = G__9804;
continue;
} else {
var k = cljs.core.first(seq__9792__$1);
elem.appendChild(k);

var G__9805 = cljs.core.next(seq__9792__$1);
var G__9806 = null;
var G__9807 = (0);
var G__9808 = (0);
seq__9792 = G__9805;
chunk__9793 = G__9806;
count__9794 = G__9807;
i__9795 = G__9808;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__9796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9809__i = 0, G__9809__a = new Array(arguments.length -  0);
while (G__9809__i < G__9809__a.length) {G__9809__a[G__9809__i] = arguments[G__9809__i + 0]; ++G__9809__i;}
  args = new cljs.core.IndexedSeq(G__9809__a,0);
} 
return G__9796__delegate.call(this,args);};
G__9796.cljs$lang$maxFixedArity = 0;
G__9796.cljs$lang$applyTo = (function (arglist__9810){
var args = cljs.core.seq(arglist__9810);
return G__9796__delegate(args);
});
G__9796.cljs$core$IFn$_invoke$arity$variadic = G__9796__delegate;
return G__9796;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__9811__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__9811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9812__i = 0, G__9812__a = new Array(arguments.length -  0);
while (G__9812__i < G__9812__a.length) {G__9812__a[G__9812__i] = arguments[G__9812__i + 0]; ++G__9812__i;}
  args = new cljs.core.IndexedSeq(G__9812__a,0);
} 
return G__9811__delegate.call(this,args);};
G__9811.cljs$lang$maxFixedArity = 0;
G__9811.cljs$lang$applyTo = (function (arglist__9813){
var args = cljs.core.seq(arglist__9813);
return G__9811__delegate(args);
});
G__9811.cljs$core$IFn$_invoke$arity$variadic = G__9811__delegate;
return G__9811;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___9816 = arguments.length;
var i__6062__auto___9817 = (0);
while(true){
if((i__6062__auto___9817 < len__6061__auto___9816)){
args__6068__auto__.push((arguments[i__6062__auto___9817]));

var G__9818 = (i__6062__auto___9817 + (1));
i__6062__auto___9817 = G__9818;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__9815 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq9814){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9814));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor("main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__9819_SHARP_){
return document.createTextNode(p1__9819_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__9820_SHARP_){
return document.createComment(p1__9820_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__9821_SHARP_){
var e = (function (){var G__9822 = p1__9821_SHARP_.target;
return jQuery(G__9822);
})();
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__9821_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function tailrecursion$hoplon$by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function tailrecursion$hoplon$val_id(id){
var G__9825 = tailrecursion.hoplon.by_id(id);
var G__9826 = cljs.core.cst$kw$value;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__9825,G__9826) : tailrecursion.hoplon.do_BANG_.call(null,G__9825,G__9826));
});
tailrecursion.hoplon.rel = (function tailrecursion$hoplon$rel(other,event){
var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(jQuery(other).offset());
var ox = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("left") : os.call(null,"left"));
var oy = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("top") : os.call(null,"top"));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(event.pageX - ox),cljs.core.cst$kw$y,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function tailrecursion$hoplon$relx(other,event){
return cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function tailrecursion$hoplon$rely(other,event){
return cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function tailrecursion$hoplon$rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx(rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely(rel_to,event));

return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));
});
});
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args9827 = [];
var len__6061__auto___9830 = arguments.length;
var i__6062__auto___9831 = (0);
while(true){
if((i__6062__auto___9831 < len__6061__auto___9830)){
args9827.push((arguments[i__6062__auto___9831]));

var G__9832 = (i__6062__auto___9831 + (1));
i__6062__auto___9831 = G__9832;
continue;
} else {
}
break;
}

var G__9829 = args9827.length;
switch (G__9829) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9827.length)].join('')));

}
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});

tailrecursion.hoplon.text_val_BANG_.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.check_val_BANG_ = (function tailrecursion$hoplon$check_val_BANG_(){
var args9834 = [];
var len__6061__auto___9837 = arguments.length;
var i__6062__auto___9838 = (0);
while(true){
if((i__6062__auto___9838 < len__6061__auto___9837)){
args9834.push((arguments[i__6062__auto___9838]));

var G__9839 = (i__6062__auto___9838 + (1));
i__6062__auto___9838 = G__9839;
continue;
} else {
}
break;
}

var G__9836 = args9834.length;
switch (G__9836) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9834.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9841 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9841) : cljs.core.atom.call(null,G__9841));
})();
var prefer_table__5917__auto__ = (function (){var G__9842 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9842) : cljs.core.atom.call(null,G__9842));
})();
var method_cache__5918__auto__ = (function (){var G__9843 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9843) : cljs.core.atom.call(null,G__9843));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9844 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9844) : cljs.core.atom.call(null,G__9844));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,(function (elem,key,val){
var G__9845 = elem;
var G__9846 = cljs.core.cst$kw$attr;
var G__9847 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9845,G__9846,G__9847) : tailrecursion.hoplon.do_BANG_.call(null,G__9845,G__9846,G__9847));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__9848__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9848 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9849__i = 0, G__9849__a = new Array(arguments.length -  2);
while (G__9849__i < G__9849__a.length) {G__9849__a[G__9849__i] = arguments[G__9849__i + 2]; ++G__9849__i;}
  args = new cljs.core.IndexedSeq(G__9849__a,0);
} 
return G__9848__delegate.call(this,elem,_,args);};
G__9848.cljs$lang$maxFixedArity = 2;
G__9848.cljs$lang$applyTo = (function (arglist__9850){
var elem = cljs.core.first(arglist__9850);
arglist__9850 = cljs.core.next(arglist__9850);
var _ = cljs.core.first(arglist__9850);
var args = cljs.core.rest(arglist__9850);
return G__9848__delegate(elem,_,args);
});
G__9848.cljs$core$IFn$_invoke$arity$variadic = G__9848__delegate;
return G__9848;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9851 = cljs.core.seq(kvs);
var chunk__9852 = null;
var count__9853 = (0);
var i__9854 = (0);
while(true){
if((i__9854 < count__9853)){
var vec__9855 = chunk__9852.cljs$core$IIndexed$_nth$arity$2(null,i__9854);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9855,(1),null);
var k_9857__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9857__$1);
} else {
e.attr(k_9857__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9857__$1:v));
}

var G__9858 = seq__9851;
var G__9859 = chunk__9852;
var G__9860 = count__9853;
var G__9861 = (i__9854 + (1));
seq__9851 = G__9858;
chunk__9852 = G__9859;
count__9853 = G__9860;
i__9854 = G__9861;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9851);
if(temp__4425__auto__){
var seq__9851__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9851__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9851__$1);
var G__9862 = cljs.core.chunk_rest(seq__9851__$1);
var G__9863 = c__5806__auto__;
var G__9864 = cljs.core.count(c__5806__auto__);
var G__9865 = (0);
seq__9851 = G__9862;
chunk__9852 = G__9863;
count__9853 = G__9864;
i__9854 = G__9865;
continue;
} else {
var vec__9856 = cljs.core.first(seq__9851__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(1),null);
var k_9866__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9866__$1);
} else {
e.attr(k_9866__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9866__$1:v));
}

var G__9867 = cljs.core.next(seq__9851__$1);
var G__9868 = null;
var G__9869 = (0);
var G__9870 = (0);
seq__9851 = G__9867;
chunk__9852 = G__9868;
count__9853 = G__9869;
i__9854 = G__9870;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__9871_SHARP_){
return cljs.core.zipmap(p1__9871_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__9872 = cljs.core.seq(clmap);
var chunk__9873 = null;
var count__9874 = (0);
var i__9875 = (0);
while(true){
if((i__9875 < count__9874)){
var vec__9876 = chunk__9873.cljs$core$IIndexed$_nth$arity$2(null,i__9875);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9876,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9876,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9878 = seq__9872;
var G__9879 = chunk__9873;
var G__9880 = count__9874;
var G__9881 = (i__9875 + (1));
seq__9872 = G__9878;
chunk__9873 = G__9879;
count__9874 = G__9880;
i__9875 = G__9881;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9872);
if(temp__4425__auto__){
var seq__9872__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9872__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9872__$1);
var G__9882 = cljs.core.chunk_rest(seq__9872__$1);
var G__9883 = c__5806__auto__;
var G__9884 = cljs.core.count(c__5806__auto__);
var G__9885 = (0);
seq__9872 = G__9882;
chunk__9873 = G__9883;
count__9874 = G__9884;
i__9875 = G__9885;
continue;
} else {
var vec__9877 = cljs.core.first(seq__9872__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9877,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9877,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9886 = cljs.core.next(seq__9872__$1);
var G__9887 = null;
var G__9888 = (0);
var G__9889 = (0);
seq__9872 = G__9886;
chunk__9873 = G__9887;
count__9874 = G__9888;
i__9875 = G__9889;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9890 = cljs.core.seq(kvs);
var chunk__9891 = null;
var count__9892 = (0);
var i__9893 = (0);
while(true){
if((i__9893 < count__9892)){
var vec__9894 = chunk__9891.cljs$core$IIndexed$_nth$arity$2(null,i__9893);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9894,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9896 = seq__9890;
var G__9897 = chunk__9891;
var G__9898 = count__9892;
var G__9899 = (i__9893 + (1));
seq__9890 = G__9896;
chunk__9891 = G__9897;
count__9892 = G__9898;
i__9893 = G__9899;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9890);
if(temp__4425__auto__){
var seq__9890__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9890__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9890__$1);
var G__9900 = cljs.core.chunk_rest(seq__9890__$1);
var G__9901 = c__5806__auto__;
var G__9902 = cljs.core.count(c__5806__auto__);
var G__9903 = (0);
seq__9890 = G__9900;
chunk__9891 = G__9901;
count__9892 = G__9902;
i__9893 = G__9903;
continue;
} else {
var vec__9895 = cljs.core.first(seq__9890__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9895,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9904 = cljs.core.next(seq__9890__$1);
var G__9905 = null;
var G__9906 = (0);
var G__9907 = (0);
seq__9890 = G__9904;
chunk__9891 = G__9905;
count__9892 = G__9906;
i__9893 = G__9907;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__9908 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__9909 = (0);
return setTimeout(G__9908,G__9909);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9910 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9910) : cljs.core.atom.call(null,G__9910));
})();
var prefer_table__5917__auto__ = (function (){var G__9911 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9911) : cljs.core.atom.call(null,G__9911));
})();
var method_cache__5918__auto__ = (function (){var G__9912 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9912) : cljs.core.atom.call(null,G__9912));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9913 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9913) : cljs.core.atom.call(null,G__9913));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__9914 = this$__$1.target;
return jQuery(G__9914);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(((function (pool_size){
return (function (G__9942,G__9943){
return (G__9942.cljs$core$IFn$_invoke$arity$1 ? G__9942.cljs$core$IFn$_invoke$arity$1(G__9943) : G__9942.call(null,G__9943));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__9945,G__9944){
return (G__9944.cljs$core$IFn$_invoke$arity$1 ? G__9944.cljs$core$IFn$_invoke$arity$1(G__9945) : G__9944.call(null,G__9945));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__9915_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__9946,G__9947){
return (G__9946 < G__9947);
});})(pool_size,items_seq,cur_count))
).call(null,p1__9915_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__9916_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__9950,G__9949,G__9948){
return (G__9948.cljs$core$IFn$_invoke$arity$2 ? G__9948.cljs$core$IFn$_invoke$arity$2(G__9949,G__9950) : G__9948.call(null,G__9949,G__9950));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,p1__9916_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__9964,G__9962,G__9957,G__9955,G__9956,G__9961,G__9963,G__9958,G__9960,G__9959){
if(cljs.core.truth_((G__9955 < G__9956))){
var seq__9951_9967 = cljs.core.seq((G__9957.cljs$core$IFn$_invoke$arity$2 ? G__9957.cljs$core$IFn$_invoke$arity$2(G__9955,G__9956) : G__9957.call(null,G__9955,G__9956)));
var chunk__9952_9968 = null;
var count__9953_9969 = (0);
var i__9954_9970 = (0);
while(true){
if(cljs.core.truth_((i__9954_9970 < count__9953_9969))){
var i_9971 = chunk__9952_9968.cljs$core$IIndexed$_nth$arity$2(null,i__9954_9970);
var e_9972 = (function (){var G__9965 = (G__9959.cljs$core$IFn$_invoke$arity$1 ? G__9959.cljs$core$IFn$_invoke$arity$1(i_9971) : G__9959.call(null,i_9971));
return (G__9958.cljs$core$IFn$_invoke$arity$1 ? G__9958.cljs$core$IFn$_invoke$arity$1(G__9965) : G__9958.call(null,G__9965));
})().call(null,cljs.core.cst$kw$do_DASH_toggle,(G__9960.cljs$core$IFn$_invoke$arity$1 ? G__9960.cljs$core$IFn$_invoke$arity$1(i_9971) : G__9960.call(null,i_9971)));
if(cljs.core.not(G__9961)){
G__9962.appendChild(e_9972);
} else {
G__9962.insertBefore(e_9972,G__9962.firstChild);
}

var G__9973 = seq__9951_9967;
var G__9974 = chunk__9952_9968;
var G__9975 = count__9953_9969;
var G__9976 = (i__9954_9970 + (1));
seq__9951_9967 = G__9973;
chunk__9952_9968 = G__9974;
count__9953_9969 = G__9975;
i__9954_9970 = G__9976;
continue;
} else {
var temp__4425__auto___9977 = cljs.core.seq(seq__9951_9967);
if(temp__4425__auto___9977){
var seq__9951_9978__$1 = temp__4425__auto___9977;
if(cljs.core.chunked_seq_QMARK_(seq__9951_9978__$1)){
var c__5806__auto___9979 = cljs.core.chunk_first(seq__9951_9978__$1);
var G__9980 = cljs.core.chunk_rest(seq__9951_9978__$1);
var G__9981 = c__5806__auto___9979;
var G__9982 = cljs.core.count(c__5806__auto___9979);
var G__9983 = (0);
seq__9951_9967 = G__9980;
chunk__9952_9968 = G__9981;
count__9953_9969 = G__9982;
i__9954_9970 = G__9983;
continue;
} else {
var i_9984 = cljs.core.first(seq__9951_9978__$1);
var e_9985 = (function (){var G__9966 = (G__9959.cljs$core$IFn$_invoke$arity$1 ? G__9959.cljs$core$IFn$_invoke$arity$1(i_9984) : G__9959.call(null,i_9984));
return (G__9958.cljs$core$IFn$_invoke$arity$1 ? G__9958.cljs$core$IFn$_invoke$arity$1(G__9966) : G__9958.call(null,G__9966));
})().call(null,cljs.core.cst$kw$do_DASH_toggle,(G__9960.cljs$core$IFn$_invoke$arity$1 ? G__9960.cljs$core$IFn$_invoke$arity$1(i_9984) : G__9960.call(null,i_9984)));
if(cljs.core.not(G__9961)){
G__9962.appendChild(e_9985);
} else {
G__9962.insertBefore(e_9985,G__9962.firstChild);
}

var G__9986 = cljs.core.next(seq__9951_9978__$1);
var G__9987 = null;
var G__9988 = (0);
var G__9989 = (0);
seq__9951_9967 = G__9986;
chunk__9952_9968 = G__9987;
count__9953_9969 = G__9988;
i__9954_9970 = G__9989;
continue;
}
} else {
}
}
break;
}

return (G__9963.cljs$core$IFn$_invoke$arity$2 ? G__9963.cljs$core$IFn$_invoke$arity$2(G__9964,G__9956) : G__9963.call(null,G__9964,G__9956));
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell(pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
 * Manage the URL hash via Javelin cells. There are three arities:
 * 
 * - When called with no arguments this function returns a formula cell whose
 * value is the URL hash or nil.
 * 
 * - When called with a single string argument, the argument is taken as the
 * default value, which is returned in place of nil when there is no hash.
 * 
 * - When a single cell argument is provided, the URL hash is kept synced to the
 * value of the cell.
 * 
 * - When a cell and a callback function are both provided, the URL hash is kept
 * synced to the value of the cell as above, and any attempt to change the hash
 * other than via the setter cell causes the callback to be called. The callback
 * should be a function of one argument, the requested URL hash.
 */
tailrecursion.hoplon.route_cell = (function tailrecursion$hoplon$route_cell(){
var args9990 = [];
var len__6061__auto___10016 = arguments.length;
var i__6062__auto___10017 = (0);
while(true){
if((i__6062__auto___10017 < len__6061__auto___10016)){
args9990.push((arguments[i__6062__auto___10017]));

var G__10018 = (i__6062__auto___10017 + (1));
i__6062__auto___10017 = G__10018;
continue;
} else {
}
break;
}

var G__9992 = args9990.length;
switch (G__9992) {
case 0:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9990.length)].join('')));

}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
var r = (function (){var ret__8058__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__9995_10020 = ((function (ret__8058__auto__){
return (function (){
var G__9997 = ret__8058__auto__;
var G__9998 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9997,G__9998) : cljs.core.reset_BANG_.call(null,G__9997,G__9998));
});})(ret__8058__auto__))
;
var G__9996_10021 = (100);
setInterval(G__9995_10020,G__9996_10021);

return tailrecursion.javelin.formula(((function (ret__8058__auto__){
return (function (G__9999){
return G__9999;
});})(ret__8058__auto__))
).call(null,ret__8058__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__10001,G__10000){
if(cljs.core.truth_((G__10000.cljs$core$IFn$_invoke$arity$2 ? G__10000.cljs$core$IFn$_invoke$arity$2("",G__10001) : G__10000.call(null,"",G__10001)))){
return G__10001;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl))){
var setter__8059__auto__ = setter_or_dfl;
var callback__8060__auto__ = (function (){var or__5022__auto__ = null;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__8059__auto__,callback__8060__auto__){
return (function (G__10003,G__10002){
return G__10002.location.hash = G__10003;
});})(setter__8059__auto__,callback__8060__auto__))
).call(null,setter__8059__auto__,window);

var G__10005_10022 = ((function (setter__8059__auto__,callback__8060__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__)),window.location.hash)){
var G__10007_10024 = window.location.hash;
(callback__8060__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8060__auto__.cljs$core$IFn$_invoke$arity$1(G__10007_10024) : callback__8060__auto__.call(null,G__10007_10024));

return window.location.hash = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__));
} else {
return null;
}
});})(setter__8059__auto__,callback__8060__auto__))
;
var G__10006_10023 = (100);
setInterval(G__10005_10022,G__10006_10023);

return setter__8059__auto__;
} else {
var r = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__10008,G__10009){
var or__5022__auto__ = G__10008;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__10009;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2 = (function (setter,callback){
var setter__8059__auto__ = setter;
var callback__8060__auto__ = (function (){var or__5022__auto__ = callback;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__8059__auto__,callback__8060__auto__){
return (function (G__10011,G__10010){
return G__10010.location.hash = G__10011;
});})(setter__8059__auto__,callback__8060__auto__))
).call(null,setter__8059__auto__,window);

var G__10013_10025 = ((function (setter__8059__auto__,callback__8060__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__)),window.location.hash)){
var G__10015_10027 = window.location.hash;
(callback__8060__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8060__auto__.cljs$core$IFn$_invoke$arity$1(G__10015_10027) : callback__8060__auto__.call(null,G__10015_10027));

return window.location.hash = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__));
} else {
return null;
}
});})(setter__8059__auto__,callback__8060__auto__))
;
var G__10014_10026 = (100);
setInterval(G__10013_10025,G__10014_10026);

return setter__8059__auto__;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = 2;
