// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9496_SHARP_){
return (p1__9496_SHARP_ instanceof Node);
}):(function (p1__9497_SHARP_){
try{return p1__9497_SHARP_.nodeType;
}catch (e9498){if((e9498 instanceof Error)){
var _ = e9498;
return null;
} else {
throw e9498;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9499_SHARP_){
try{return cljs.core.vector_QMARK_(p1__9499_SHARP_);
}catch (e9500){if((e9500 instanceof Error)){
var _ = e9500;
return null;
} else {
throw e9500;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9501_SHARP_){
try{return cljs.core.seq_QMARK_(p1__9501_SHARP_);
}catch (e9502){if((e9502 instanceof Error)){
var _ = e9502;
return null;
} else {
throw e9502;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__9503_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__9503_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args9504 = [];
var len__6061__auto___9508 = arguments.length;
var i__6062__auto___9509 = (0);
while(true){
if((i__6062__auto___9509 < len__6061__auto___9508)){
args9504.push((arguments[i__6062__auto___9509]));

var G__9510 = (i__6062__auto___9509 + (1));
i__6062__auto___9509 = G__9510;
continue;
} else {
}
break;
}

var G__9506 = args9504.length;
switch (G__9506) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9504.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e9507){if((e9507 instanceof Error)){
var _ = e9507;
return not_found;
} else {
throw e9507;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args9512 = [];
var len__6061__auto___9515 = arguments.length;
var i__6062__auto___9516 = (0);
while(true){
if((i__6062__auto___9516 < len__6061__auto___9515)){
args9512.push((arguments[i__6062__auto___9516]));

var G__9517 = (i__6062__auto___9516 + (1));
i__6062__auto___9516 = G__9517;
continue;
} else {
}
break;
}

var G__9514 = args9512.length;
switch (G__9514) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9512.length)].join('')));

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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__9519_SHARP_){
if(cljs.core.truth_((function (){var or__5022__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__9519_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__9519_SHARP_));
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__9519_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__9519_SHARP_));
}
})())){
return tailrecursion$hoplon$unsplice(p1__9519_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9519_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__9522){
var vec__9524 = p__9522;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9524,(0),null);
var tail = cljs.core.nthnext(vec__9524,(1));
var args = vec__9524;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__9524,head,tail,args){
return (function (p1__9520_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__9520_SHARP_)));
});})(kw1_QMARK_,vec__9524,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__9524,head,tail,args){
return (function (p1__9521_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__9521_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__9524,head,tail,args))
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
var key_STAR_ = (function (p1__9526_SHARP_,p2__9525_SHARP_){
var n = (function (){var s = cljs.core.name(p2__9525_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__9525_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9526_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__9587 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9587) : cljs.core.atom.call(null,G__9587));
})();
var ons = (function (){var G__9588 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9588) : cljs.core.atom.call(null,G__9588));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__9527_SHARP_,p2__9528_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__9527_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__9528_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__9589_9641 = cljs.core.seq(attr);
var chunk__9590_9642 = null;
var count__9591_9643 = (0);
var i__9592_9644 = (0);
while(true){
if((i__9592_9644 < count__9591_9643)){
var vec__9593_9645 = chunk__9590_9642.cljs$core$IIndexed$_nth$arity$2(null,i__9592_9644);
var k_9646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593_9645,(0),null);
var v_9647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593_9645,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_9647))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9646) : dokey.call(null,k_9646)),v_9647);
} else {
if(cljs.core.fn_QMARK_(v_9647)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_9646) : onkey.call(null,k_9646)),v_9647);
} else {
var G__9594_9648 = this$;
var G__9595_9649 = (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9646) : dokey.call(null,k_9646));
var G__9596_9650 = v_9647;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9594_9648,G__9595_9649,G__9596_9650) : tailrecursion.hoplon.do_BANG_.call(null,G__9594_9648,G__9595_9649,G__9596_9650));

}
}

var G__9651 = seq__9589_9641;
var G__9652 = chunk__9590_9642;
var G__9653 = count__9591_9643;
var G__9654 = (i__9592_9644 + (1));
seq__9589_9641 = G__9651;
chunk__9590_9642 = G__9652;
count__9591_9643 = G__9653;
i__9592_9644 = G__9654;
continue;
} else {
var temp__4425__auto___9655 = cljs.core.seq(seq__9589_9641);
if(temp__4425__auto___9655){
var seq__9589_9656__$1 = temp__4425__auto___9655;
if(cljs.core.chunked_seq_QMARK_(seq__9589_9656__$1)){
var c__5806__auto___9657 = cljs.core.chunk_first(seq__9589_9656__$1);
var G__9658 = cljs.core.chunk_rest(seq__9589_9656__$1);
var G__9659 = c__5806__auto___9657;
var G__9660 = cljs.core.count(c__5806__auto___9657);
var G__9661 = (0);
seq__9589_9641 = G__9658;
chunk__9590_9642 = G__9659;
count__9591_9643 = G__9660;
i__9592_9644 = G__9661;
continue;
} else {
var vec__9597_9662 = cljs.core.first(seq__9589_9656__$1);
var k_9663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9597_9662,(0),null);
var v_9664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9597_9662,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_9664))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9663) : dokey.call(null,k_9663)),v_9664);
} else {
if(cljs.core.fn_QMARK_(v_9664)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_9663) : onkey.call(null,k_9663)),v_9664);
} else {
var G__9598_9665 = this$;
var G__9599_9666 = (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_9663) : dokey.call(null,k_9663));
var G__9600_9667 = v_9664;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9598_9665,G__9599_9666,G__9600_9667) : tailrecursion.hoplon.do_BANG_.call(null,G__9598_9665,G__9599_9666,G__9600_9667));

}
}

var G__9668 = cljs.core.next(seq__9589_9656__$1);
var G__9669 = null;
var G__9670 = (0);
var G__9671 = (0);
seq__9589_9641 = G__9668;
chunk__9590_9642 = G__9669;
count__9591_9643 = G__9670;
i__9592_9644 = G__9671;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dos) : cljs.core.deref.call(null,dos)))){
var G__9613_9672 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__9615 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dos) : cljs.core.deref.call(null,dos)));
var chunk__9616 = null;
var count__9617 = (0);
var i__9618 = (0);
while(true){
if((i__9618 < count__9617)){
var vec__9619 = chunk__9616.cljs$core$IIndexed$_nth$arity$2(null,i__9618);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,(1),null);
var G__9620_9674 = this$;
var G__9621_9675 = k;
var G__9622_9676 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9620_9674,G__9621_9675,G__9622_9676) : tailrecursion.hoplon.do_BANG_.call(null,G__9620_9674,G__9621_9675,G__9622_9676));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__9615,chunk__9616,count__9617,i__9618,vec__9619,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9530_SHARP_,p2__9531_SHARP_,p3__9532_SHARP_,p4__9529_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__9529_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9529_SHARP_));
});})(seq__9615,chunk__9616,count__9617,i__9618,vec__9619,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__9677 = seq__9615;
var G__9678 = chunk__9616;
var G__9679 = count__9617;
var G__9680 = (i__9618 + (1));
seq__9615 = G__9677;
chunk__9616 = G__9678;
count__9617 = G__9679;
i__9618 = G__9680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9615);
if(temp__4425__auto__){
var seq__9615__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9615__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9615__$1);
var G__9681 = cljs.core.chunk_rest(seq__9615__$1);
var G__9682 = c__5806__auto__;
var G__9683 = cljs.core.count(c__5806__auto__);
var G__9684 = (0);
seq__9615 = G__9681;
chunk__9616 = G__9682;
count__9617 = G__9683;
i__9618 = G__9684;
continue;
} else {
var vec__9623 = cljs.core.first(seq__9615__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9623,(1),null);
var G__9624_9685 = this$;
var G__9625_9686 = k;
var G__9626_9687 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9624_9685,G__9625_9686,G__9626_9687) : tailrecursion.hoplon.do_BANG_.call(null,G__9624_9685,G__9625_9686,G__9626_9687));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__9615,chunk__9616,count__9617,i__9618,vec__9623,k,v,seq__9615__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9530_SHARP_,p2__9531_SHARP_,p3__9532_SHARP_,p4__9529_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__9529_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9529_SHARP_));
});})(seq__9615,chunk__9616,count__9617,i__9618,vec__9623,k,v,seq__9615__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__9688 = cljs.core.next(seq__9615__$1);
var G__9689 = null;
var G__9690 = (0);
var G__9691 = (0);
seq__9615 = G__9688;
chunk__9616 = G__9689;
count__9617 = G__9690;
i__9618 = G__9691;
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
var G__9614_9673 = (0);
setTimeout(G__9613_9672,G__9614_9673);
} else {
}

if(cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ons) : cljs.core.deref.call(null,ons)))){
var G__9633_9692 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__9635 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ons) : cljs.core.deref.call(null,ons)));
var chunk__9636 = null;
var count__9637 = (0);
var i__9638 = (0);
while(true){
if((i__9638 < count__9637)){
var vec__9639 = chunk__9636.cljs$core$IIndexed$_nth$arity$2(null,i__9638);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639,(1),null);
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));

var G__9694 = seq__9635;
var G__9695 = chunk__9636;
var G__9696 = count__9637;
var G__9697 = (i__9638 + (1));
seq__9635 = G__9694;
chunk__9636 = G__9695;
count__9637 = G__9696;
i__9638 = G__9697;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9635);
if(temp__4425__auto__){
var seq__9635__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9635__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9635__$1);
var G__9698 = cljs.core.chunk_rest(seq__9635__$1);
var G__9699 = c__5806__auto__;
var G__9700 = cljs.core.count(c__5806__auto__);
var G__9701 = (0);
seq__9635 = G__9698;
chunk__9636 = G__9699;
count__9637 = G__9700;
i__9638 = G__9701;
continue;
} else {
var vec__9640 = cljs.core.first(seq__9635__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9640,(1),null);
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));

var G__9702 = cljs.core.next(seq__9635__$1);
var G__9703 = null;
var G__9704 = (0);
var G__9705 = (0);
seq__9635 = G__9702;
chunk__9636 = G__9703;
count__9637 = G__9704;
i__9638 = G__9705;
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

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9706_SHARP_,p2__9707_SHARP_){
return p1__9706_SHARP_.appendChild(p2__9707_SHARP_);
}):(function (p1__9708_SHARP_,p2__9709_SHARP_){
try{return p1__9708_SHARP_.appendChild(p2__9709_SHARP_);
}catch (e9710){if((e9710 instanceof Error)){
var _ = e9710;
return null;
} else {
throw e9710;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__9713 = this$;
var G__9714 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__9713,G__9714) : tailrecursion.hoplon.add_children_BANG_.call(null,G__9713,G__9714));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__9720){
var vec__9726 = p__9720;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9726,(0),null);
var _ = cljs.core.nthnext(vec__9726,(1));
var kids = vec__9726;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__9726,child_cell,_,kids){
return (function (p1__9716_SHARP_,p2__9717_SHARP_,p3__9718_SHARP_,p4__9715_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__9715_SHARP_);
});})(vec__9726,child_cell,_,kids))
);
} else {
var node_9731 = ((function (vec__9726,child_cell,_,kids){
return (function (p1__9719_SHARP_){
if(typeof p1__9719_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__9719_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__9719_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9719_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__9719_SHARP_)))){
return p1__9719_SHARP_;
} else {
return null;
}
}
});})(vec__9726,child_cell,_,kids))
;
var seq__9727_9732 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_9731,tailrecursion.hoplon.unsplice(kids)));
var chunk__9728_9733 = null;
var count__9729_9734 = (0);
var i__9730_9735 = (0);
while(true){
if((i__9730_9735 < count__9729_9734)){
var x_9736 = chunk__9728_9733.cljs$core$IIndexed$_nth$arity$2(null,i__9730_9735);
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9736) : tailrecursion.hoplon.append_child.call(null,this$,x_9736));

var G__9737 = seq__9727_9732;
var G__9738 = chunk__9728_9733;
var G__9739 = count__9729_9734;
var G__9740 = (i__9730_9735 + (1));
seq__9727_9732 = G__9737;
chunk__9728_9733 = G__9738;
count__9729_9734 = G__9739;
i__9730_9735 = G__9740;
continue;
} else {
var temp__4425__auto___9741 = cljs.core.seq(seq__9727_9732);
if(temp__4425__auto___9741){
var seq__9727_9742__$1 = temp__4425__auto___9741;
if(cljs.core.chunked_seq_QMARK_(seq__9727_9742__$1)){
var c__5806__auto___9743 = cljs.core.chunk_first(seq__9727_9742__$1);
var G__9744 = cljs.core.chunk_rest(seq__9727_9742__$1);
var G__9745 = c__5806__auto___9743;
var G__9746 = cljs.core.count(c__5806__auto___9743);
var G__9747 = (0);
seq__9727_9732 = G__9744;
chunk__9728_9733 = G__9745;
count__9729_9734 = G__9746;
i__9730_9735 = G__9747;
continue;
} else {
var x_9748 = cljs.core.first(seq__9727_9742__$1);
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9748) : tailrecursion.hoplon.append_child.call(null,this$,x_9748));

var G__9749 = cljs.core.next(seq__9727_9742__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9727_9732 = G__9749;
chunk__9728_9733 = G__9750;
count__9729_9734 = G__9751;
i__9730_9735 = G__9752;
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
var G__9760__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9754 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9754,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9754,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9755 = this$;
G__9755.hoplonIFn(attr,kids);

return G__9755;
} else {
var G__9756 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9756,attr);

tailrecursion.hoplon.add_children_BANG_(G__9756,kids);

return G__9756;
}
};
var G__9760 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9761__i = 0, G__9761__a = new Array(arguments.length -  1);
while (G__9761__i < G__9761__a.length) {G__9761__a[G__9761__i] = arguments[G__9761__i + 1]; ++G__9761__i;}
  args = new cljs.core.IndexedSeq(G__9761__a,0);
} 
return G__9760__delegate.call(this,self__,args);};
G__9760.cljs$lang$maxFixedArity = 1;
G__9760.cljs$lang$applyTo = (function (arglist__9762){
var self__ = cljs.core.first(arglist__9762);
var args = cljs.core.rest(arglist__9762);
return G__9760__delegate(self__,args);
});
G__9760.cljs$core$IFn$_invoke$arity$variadic = G__9760__delegate;
return G__9760;
})()
;

Element.prototype.apply = (function (self__,args9753){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9753)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9763__delegate = function (args){
var this$ = this;
var vec__9757 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9757,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9757,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9758 = this$;
G__9758.hoplonIFn(attr,kids);

return G__9758;
} else {
var G__9759 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9759,attr);

tailrecursion.hoplon.add_children_BANG_(G__9759,kids);

return G__9759;
}
};
var G__9763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9764__i = 0, G__9764__a = new Array(arguments.length -  0);
while (G__9764__i < G__9764__a.length) {G__9764__a[G__9764__i] = arguments[G__9764__i + 0]; ++G__9764__i;}
  args = new cljs.core.IndexedSeq(G__9764__a,0);
} 
return G__9763__delegate.call(this,args);};
G__9763.cljs$lang$maxFixedArity = 0;
G__9763.cljs$lang$applyTo = (function (arglist__9765){
var args = cljs.core.seq(arglist__9765);
return G__9763__delegate(args);
});
G__9763.cljs$core$IFn$_invoke$arity$variadic = G__9763__delegate;
return G__9763;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__9776__delegate = function (args){
var vec__9771 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__9772 = cljs.core.seq(kids);
var chunk__9773 = null;
var count__9774 = (0);
var i__9775 = (0);
while(true){
if((i__9775 < count__9774)){
var k = chunk__9773.cljs$core$IIndexed$_nth$arity$2(null,i__9775);
elem.appendChild(k);

var G__9777 = seq__9772;
var G__9778 = chunk__9773;
var G__9779 = count__9774;
var G__9780 = (i__9775 + (1));
seq__9772 = G__9777;
chunk__9773 = G__9778;
count__9774 = G__9779;
i__9775 = G__9780;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9772);
if(temp__4425__auto__){
var seq__9772__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9772__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9772__$1);
var G__9781 = cljs.core.chunk_rest(seq__9772__$1);
var G__9782 = c__5806__auto__;
var G__9783 = cljs.core.count(c__5806__auto__);
var G__9784 = (0);
seq__9772 = G__9781;
chunk__9773 = G__9782;
count__9774 = G__9783;
i__9775 = G__9784;
continue;
} else {
var k = cljs.core.first(seq__9772__$1);
elem.appendChild(k);

var G__9785 = cljs.core.next(seq__9772__$1);
var G__9786 = null;
var G__9787 = (0);
var G__9788 = (0);
seq__9772 = G__9785;
chunk__9773 = G__9786;
count__9774 = G__9787;
i__9775 = G__9788;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__9776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9789__i = 0, G__9789__a = new Array(arguments.length -  0);
while (G__9789__i < G__9789__a.length) {G__9789__a[G__9789__i] = arguments[G__9789__i + 0]; ++G__9789__i;}
  args = new cljs.core.IndexedSeq(G__9789__a,0);
} 
return G__9776__delegate.call(this,args);};
G__9776.cljs$lang$maxFixedArity = 0;
G__9776.cljs$lang$applyTo = (function (arglist__9790){
var args = cljs.core.seq(arglist__9790);
return G__9776__delegate(args);
});
G__9776.cljs$core$IFn$_invoke$arity$variadic = G__9776__delegate;
return G__9776;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__9791__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__9791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9792__i = 0, G__9792__a = new Array(arguments.length -  0);
while (G__9792__i < G__9792__a.length) {G__9792__a[G__9792__i] = arguments[G__9792__i + 0]; ++G__9792__i;}
  args = new cljs.core.IndexedSeq(G__9792__a,0);
} 
return G__9791__delegate.call(this,args);};
G__9791.cljs$lang$maxFixedArity = 0;
G__9791.cljs$lang$applyTo = (function (arglist__9793){
var args = cljs.core.seq(arglist__9793);
return G__9791__delegate(args);
});
G__9791.cljs$core$IFn$_invoke$arity$variadic = G__9791__delegate;
return G__9791;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___9796 = arguments.length;
var i__6062__auto___9797 = (0);
while(true){
if((i__6062__auto___9797 < len__6061__auto___9796)){
args__6068__auto__.push((arguments[i__6062__auto___9797]));

var G__9798 = (i__6062__auto___9797 + (1));
i__6062__auto___9797 = G__9798;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__9795 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq9794){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9794));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__9799_SHARP_){
return document.createTextNode(p1__9799_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__9800_SHARP_){
return document.createComment(p1__9800_SHARP_);
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
return jQuery("body").on("submit",(function (p1__9801_SHARP_){
var e = (function (){var G__9802 = p1__9801_SHARP_.target;
return jQuery(G__9802);
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
return p1__9801_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function tailrecursion$hoplon$by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function tailrecursion$hoplon$val_id(id){
var G__9805 = tailrecursion.hoplon.by_id(id);
var G__9806 = cljs.core.cst$kw$value;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__9805,G__9806) : tailrecursion.hoplon.do_BANG_.call(null,G__9805,G__9806));
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
var args9807 = [];
var len__6061__auto___9810 = arguments.length;
var i__6062__auto___9811 = (0);
while(true){
if((i__6062__auto___9811 < len__6061__auto___9810)){
args9807.push((arguments[i__6062__auto___9811]));

var G__9812 = (i__6062__auto___9811 + (1));
i__6062__auto___9811 = G__9812;
continue;
} else {
}
break;
}

var G__9809 = args9807.length;
switch (G__9809) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9807.length)].join('')));

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
var args9814 = [];
var len__6061__auto___9817 = arguments.length;
var i__6062__auto___9818 = (0);
while(true){
if((i__6062__auto___9818 < len__6061__auto___9817)){
args9814.push((arguments[i__6062__auto___9818]));

var G__9819 = (i__6062__auto___9818 + (1));
i__6062__auto___9818 = G__9819;
continue;
} else {
}
break;
}

var G__9816 = args9814.length;
switch (G__9816) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9814.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9821 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9821) : cljs.core.atom.call(null,G__9821));
})();
var prefer_table__5917__auto__ = (function (){var G__9822 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9822) : cljs.core.atom.call(null,G__9822));
})();
var method_cache__5918__auto__ = (function (){var G__9823 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9823) : cljs.core.atom.call(null,G__9823));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9824 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9824) : cljs.core.atom.call(null,G__9824));
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
var G__9825 = elem;
var G__9826 = cljs.core.cst$kw$attr;
var G__9827 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9825,G__9826,G__9827) : tailrecursion.hoplon.do_BANG_.call(null,G__9825,G__9826,G__9827));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__9828__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9828 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9829__i = 0, G__9829__a = new Array(arguments.length -  2);
while (G__9829__i < G__9829__a.length) {G__9829__a[G__9829__i] = arguments[G__9829__i + 2]; ++G__9829__i;}
  args = new cljs.core.IndexedSeq(G__9829__a,0);
} 
return G__9828__delegate.call(this,elem,_,args);};
G__9828.cljs$lang$maxFixedArity = 2;
G__9828.cljs$lang$applyTo = (function (arglist__9830){
var elem = cljs.core.first(arglist__9830);
arglist__9830 = cljs.core.next(arglist__9830);
var _ = cljs.core.first(arglist__9830);
var args = cljs.core.rest(arglist__9830);
return G__9828__delegate(elem,_,args);
});
G__9828.cljs$core$IFn$_invoke$arity$variadic = G__9828__delegate;
return G__9828;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9831 = cljs.core.seq(kvs);
var chunk__9832 = null;
var count__9833 = (0);
var i__9834 = (0);
while(true){
if((i__9834 < count__9833)){
var vec__9835 = chunk__9832.cljs$core$IIndexed$_nth$arity$2(null,i__9834);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9835,(1),null);
var k_9837__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9837__$1);
} else {
e.attr(k_9837__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9837__$1:v));
}

var G__9838 = seq__9831;
var G__9839 = chunk__9832;
var G__9840 = count__9833;
var G__9841 = (i__9834 + (1));
seq__9831 = G__9838;
chunk__9832 = G__9839;
count__9833 = G__9840;
i__9834 = G__9841;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9831);
if(temp__4425__auto__){
var seq__9831__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9831__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9831__$1);
var G__9842 = cljs.core.chunk_rest(seq__9831__$1);
var G__9843 = c__5806__auto__;
var G__9844 = cljs.core.count(c__5806__auto__);
var G__9845 = (0);
seq__9831 = G__9842;
chunk__9832 = G__9843;
count__9833 = G__9844;
i__9834 = G__9845;
continue;
} else {
var vec__9836 = cljs.core.first(seq__9831__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9836,(1),null);
var k_9846__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9846__$1);
} else {
e.attr(k_9846__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9846__$1:v));
}

var G__9847 = cljs.core.next(seq__9831__$1);
var G__9848 = null;
var G__9849 = (0);
var G__9850 = (0);
seq__9831 = G__9847;
chunk__9832 = G__9848;
count__9833 = G__9849;
i__9834 = G__9850;
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
return (function (p1__9851_SHARP_){
return cljs.core.zipmap(p1__9851_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__9852 = cljs.core.seq(clmap);
var chunk__9853 = null;
var count__9854 = (0);
var i__9855 = (0);
while(true){
if((i__9855 < count__9854)){
var vec__9856 = chunk__9853.cljs$core$IIndexed$_nth$arity$2(null,i__9855);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9858 = seq__9852;
var G__9859 = chunk__9853;
var G__9860 = count__9854;
var G__9861 = (i__9855 + (1));
seq__9852 = G__9858;
chunk__9853 = G__9859;
count__9854 = G__9860;
i__9855 = G__9861;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9852);
if(temp__4425__auto__){
var seq__9852__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9852__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9852__$1);
var G__9862 = cljs.core.chunk_rest(seq__9852__$1);
var G__9863 = c__5806__auto__;
var G__9864 = cljs.core.count(c__5806__auto__);
var G__9865 = (0);
seq__9852 = G__9862;
chunk__9853 = G__9863;
count__9854 = G__9864;
i__9855 = G__9865;
continue;
} else {
var vec__9857 = cljs.core.first(seq__9852__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9866 = cljs.core.next(seq__9852__$1);
var G__9867 = null;
var G__9868 = (0);
var G__9869 = (0);
seq__9852 = G__9866;
chunk__9853 = G__9867;
count__9854 = G__9868;
i__9855 = G__9869;
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
var seq__9870 = cljs.core.seq(kvs);
var chunk__9871 = null;
var count__9872 = (0);
var i__9873 = (0);
while(true){
if((i__9873 < count__9872)){
var vec__9874 = chunk__9871.cljs$core$IIndexed$_nth$arity$2(null,i__9873);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9876 = seq__9870;
var G__9877 = chunk__9871;
var G__9878 = count__9872;
var G__9879 = (i__9873 + (1));
seq__9870 = G__9876;
chunk__9871 = G__9877;
count__9872 = G__9878;
i__9873 = G__9879;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9870);
if(temp__4425__auto__){
var seq__9870__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9870__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9870__$1);
var G__9880 = cljs.core.chunk_rest(seq__9870__$1);
var G__9881 = c__5806__auto__;
var G__9882 = cljs.core.count(c__5806__auto__);
var G__9883 = (0);
seq__9870 = G__9880;
chunk__9871 = G__9881;
count__9872 = G__9882;
i__9873 = G__9883;
continue;
} else {
var vec__9875 = cljs.core.first(seq__9870__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9884 = cljs.core.next(seq__9870__$1);
var G__9885 = null;
var G__9886 = (0);
var G__9887 = (0);
seq__9870 = G__9884;
chunk__9871 = G__9885;
count__9872 = G__9886;
i__9873 = G__9887;
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
var G__9888 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__9889 = (0);
return setTimeout(G__9888,G__9889);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9890 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9890) : cljs.core.atom.call(null,G__9890));
})();
var prefer_table__5917__auto__ = (function (){var G__9891 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9891) : cljs.core.atom.call(null,G__9891));
})();
var method_cache__5918__auto__ = (function (){var G__9892 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9892) : cljs.core.atom.call(null,G__9892));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9893 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9893) : cljs.core.atom.call(null,G__9893));
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
return (function (){var G__9894 = this$__$1.target;
return jQuery(G__9894);
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
return (function (G__9922,G__9923){
return (G__9922.cljs$core$IFn$_invoke$arity$1 ? G__9922.cljs$core$IFn$_invoke$arity$1(G__9923) : G__9922.call(null,G__9923));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__9925,G__9924){
return (G__9924.cljs$core$IFn$_invoke$arity$1 ? G__9924.cljs$core$IFn$_invoke$arity$1(G__9925) : G__9924.call(null,G__9925));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__9895_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__9926,G__9927){
return (G__9926 < G__9927);
});})(pool_size,items_seq,cur_count))
).call(null,p1__9895_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__9896_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__9929,G__9930,G__9928){
return (G__9928.cljs$core$IFn$_invoke$arity$2 ? G__9928.cljs$core$IFn$_invoke$arity$2(G__9929,G__9930) : G__9928.call(null,G__9929,G__9930));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__9896_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__9944,G__9942,G__9937,G__9935,G__9936,G__9941,G__9943,G__9938,G__9940,G__9939){
if(cljs.core.truth_((G__9935 < G__9936))){
var seq__9931_9947 = cljs.core.seq((G__9937.cljs$core$IFn$_invoke$arity$2 ? G__9937.cljs$core$IFn$_invoke$arity$2(G__9935,G__9936) : G__9937.call(null,G__9935,G__9936)));
var chunk__9932_9948 = null;
var count__9933_9949 = (0);
var i__9934_9950 = (0);
while(true){
if(cljs.core.truth_((i__9934_9950 < count__9933_9949))){
var i_9951 = chunk__9932_9948.cljs$core$IIndexed$_nth$arity$2(null,i__9934_9950);
var e_9952 = (function (){var G__9945 = (G__9939.cljs$core$IFn$_invoke$arity$1 ? G__9939.cljs$core$IFn$_invoke$arity$1(i_9951) : G__9939.call(null,i_9951));
return (G__9938.cljs$core$IFn$_invoke$arity$1 ? G__9938.cljs$core$IFn$_invoke$arity$1(G__9945) : G__9938.call(null,G__9945));
})().call(null,cljs.core.cst$kw$do_DASH_toggle,(G__9940.cljs$core$IFn$_invoke$arity$1 ? G__9940.cljs$core$IFn$_invoke$arity$1(i_9951) : G__9940.call(null,i_9951)));
if(cljs.core.not(G__9941)){
G__9942.appendChild(e_9952);
} else {
G__9942.insertBefore(e_9952,G__9942.firstChild);
}

var G__9953 = seq__9931_9947;
var G__9954 = chunk__9932_9948;
var G__9955 = count__9933_9949;
var G__9956 = (i__9934_9950 + (1));
seq__9931_9947 = G__9953;
chunk__9932_9948 = G__9954;
count__9933_9949 = G__9955;
i__9934_9950 = G__9956;
continue;
} else {
var temp__4425__auto___9957 = cljs.core.seq(seq__9931_9947);
if(temp__4425__auto___9957){
var seq__9931_9958__$1 = temp__4425__auto___9957;
if(cljs.core.chunked_seq_QMARK_(seq__9931_9958__$1)){
var c__5806__auto___9959 = cljs.core.chunk_first(seq__9931_9958__$1);
var G__9960 = cljs.core.chunk_rest(seq__9931_9958__$1);
var G__9961 = c__5806__auto___9959;
var G__9962 = cljs.core.count(c__5806__auto___9959);
var G__9963 = (0);
seq__9931_9947 = G__9960;
chunk__9932_9948 = G__9961;
count__9933_9949 = G__9962;
i__9934_9950 = G__9963;
continue;
} else {
var i_9964 = cljs.core.first(seq__9931_9958__$1);
var e_9965 = (function (){var G__9946 = (G__9939.cljs$core$IFn$_invoke$arity$1 ? G__9939.cljs$core$IFn$_invoke$arity$1(i_9964) : G__9939.call(null,i_9964));
return (G__9938.cljs$core$IFn$_invoke$arity$1 ? G__9938.cljs$core$IFn$_invoke$arity$1(G__9946) : G__9938.call(null,G__9946));
})().call(null,cljs.core.cst$kw$do_DASH_toggle,(G__9940.cljs$core$IFn$_invoke$arity$1 ? G__9940.cljs$core$IFn$_invoke$arity$1(i_9964) : G__9940.call(null,i_9964)));
if(cljs.core.not(G__9941)){
G__9942.appendChild(e_9965);
} else {
G__9942.insertBefore(e_9965,G__9942.firstChild);
}

var G__9966 = cljs.core.next(seq__9931_9958__$1);
var G__9967 = null;
var G__9968 = (0);
var G__9969 = (0);
seq__9931_9947 = G__9966;
chunk__9932_9948 = G__9967;
count__9933_9949 = G__9968;
i__9934_9950 = G__9969;
continue;
}
} else {
}
}
break;
}

return (G__9943.cljs$core$IFn$_invoke$arity$2 ? G__9943.cljs$core$IFn$_invoke$arity$2(G__9944,G__9936) : G__9943.call(null,G__9944,G__9936));
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
var args9970 = [];
var len__6061__auto___9996 = arguments.length;
var i__6062__auto___9997 = (0);
while(true){
if((i__6062__auto___9997 < len__6061__auto___9996)){
args9970.push((arguments[i__6062__auto___9997]));

var G__9998 = (i__6062__auto___9997 + (1));
i__6062__auto___9997 = G__9998;
continue;
} else {
}
break;
}

var G__9972 = args9970.length;
switch (G__9972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9970.length)].join('')));

}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
var r = (function (){var ret__8058__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__9975_10000 = ((function (ret__8058__auto__){
return (function (){
var G__9977 = ret__8058__auto__;
var G__9978 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9977,G__9978) : cljs.core.reset_BANG_.call(null,G__9977,G__9978));
});})(ret__8058__auto__))
;
var G__9976_10001 = (100);
setInterval(G__9975_10000,G__9976_10001);

return tailrecursion.javelin.formula(((function (ret__8058__auto__){
return (function (G__9979){
return G__9979;
});})(ret__8058__auto__))
).call(null,ret__8058__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__9981,G__9980){
if(cljs.core.truth_((G__9980.cljs$core$IFn$_invoke$arity$2 ? G__9980.cljs$core$IFn$_invoke$arity$2("",G__9981) : G__9980.call(null,"",G__9981)))){
return G__9981;
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
return (function (G__9983,G__9982){
return G__9982.location.hash = G__9983;
});})(setter__8059__auto__,callback__8060__auto__))
).call(null,setter__8059__auto__,window);

var G__9985_10002 = ((function (setter__8059__auto__,callback__8060__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__)),window.location.hash)){
var G__9987_10004 = window.location.hash;
(callback__8060__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8060__auto__.cljs$core$IFn$_invoke$arity$1(G__9987_10004) : callback__8060__auto__.call(null,G__9987_10004));

return window.location.hash = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__));
} else {
return null;
}
});})(setter__8059__auto__,callback__8060__auto__))
;
var G__9986_10003 = (100);
setInterval(G__9985_10002,G__9986_10003);

return setter__8059__auto__;
} else {
var r = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__9988,G__9989){
var or__5022__auto__ = G__9988;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__9989;
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
return (function (G__9991,G__9990){
return G__9990.location.hash = G__9991;
});})(setter__8059__auto__,callback__8060__auto__))
).call(null,setter__8059__auto__,window);

var G__9993_10005 = ((function (setter__8059__auto__,callback__8060__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__)),window.location.hash)){
var G__9995_10007 = window.location.hash;
(callback__8060__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8060__auto__.cljs$core$IFn$_invoke$arity$1(G__9995_10007) : callback__8060__auto__.call(null,G__9995_10007));

return window.location.hash = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setter__8059__auto__) : cljs.core.deref.call(null,setter__8059__auto__));
} else {
return null;
}
});})(setter__8059__auto__,callback__8060__auto__))
;
var G__9994_10006 = (100);
setInterval(G__9993_10005,G__9994_10006);

return setter__8059__auto__;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = 2;
