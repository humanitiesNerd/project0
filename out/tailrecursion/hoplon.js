// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11646_SHARP_){
return (p1__11646_SHARP_ instanceof Node);
}):(function (p1__11647_SHARP_){
try{return p1__11647_SHARP_.nodeType;
}catch (e11648){if((e11648 instanceof Error)){
var _ = e11648;
return null;
} else {
throw e11648;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11649_SHARP_){
try{return cljs.core.vector_QMARK_(p1__11649_SHARP_);
}catch (e11650){if((e11650 instanceof Error)){
var _ = e11650;
return null;
} else {
throw e11650;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11651_SHARP_){
try{return cljs.core.seq_QMARK_(p1__11651_SHARP_);
}catch (e11652){if((e11652 instanceof Error)){
var _ = e11652;
return null;
} else {
throw e11652;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11653_SHARP_){
if(cljs.core.truth_((function (){var and__4198__auto__ = console;
if(cljs.core.truth_(and__4198__auto__)){
return console.log;
} else {
return and__4198__auto__;
}
})())){
return console.log(p1__11653_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__11655 = arguments.length;
switch (G__11655) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11656){if((e11656 instanceof Error)){
var _ = e11656;
return not_found;
} else {
throw e11656;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__11659 = arguments.length;
switch (G__11659) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11661_SHARP_){
if(cljs.core.truth_((function (){var or__4210__auto__ = (function (){var G__11667 = p1__11661_SHARP_;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__11667) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__11667));
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__11668 = p1__11661_SHARP_;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__11668) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__11668));
}
})())){
return tailrecursion$hoplon$unsplice(p1__11661_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11661_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__11671){
var vec__11673 = p__11671;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11673,(0),null);
var tail = cljs.core.nthnext(vec__11673,(1));
var args = vec__11673;
var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__11673,head,tail,args){
return (function (p1__11669_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),p1__11669_SHARP_)));
});})(kw1_QMARK_,vec__11673,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__11673,head,tail,args){
return (function (p1__11670_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.PersistentVector.EMPTY,p1__11670_SHARP_))], 0));
});})(kw1_QMARK_,mkkw,vec__11673,head,tail,args))
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
var key_STAR_ = (function (p1__11675_SHARP_,p2__11674_SHARP_){
var n = (function (){var s = cljs.core.name(p2__11674_SHARP_);
var c = cljs.core.last(s);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11674_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11675_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");
var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");
var dos = (function (){var G__11742 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11742) : cljs.core.atom.call(null,G__11742));
})();
var ons = (function (){var G__11743 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11743) : cljs.core.atom.call(null,G__11743));
})();
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11676_SHARP_,p2__11677_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11676_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11677_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__11744_11802 = cljs.core.seq(attr);
var chunk__11745_11803 = null;
var count__11746_11804 = (0);
var i__11747_11805 = (0);
while(true){
if((i__11747_11805 < count__11746_11804)){
var vec__11748_11806 = chunk__11745_11803.cljs$core$IIndexed$_nth$arity$2(null,i__11747_11805);
var k_11807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11806,(0),null);
var v_11808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11806,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11808))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__11749 = k_11807;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__11749) : dokey.call(null,G__11749));
})(),v_11808);
} else {
if(cljs.core.fn_QMARK_(v_11808)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__11750 = k_11807;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__11750) : onkey.call(null,G__11750));
})(),v_11808);
} else {
var G__11751_11809 = this$;
var G__11752_11810 = (function (){var G__11754 = k_11807;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__11754) : dokey.call(null,G__11754));
})();
var G__11753_11811 = v_11808;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11751_11809,G__11752_11810,G__11753_11811) : tailrecursion.hoplon.do_BANG_.call(null,G__11751_11809,G__11752_11810,G__11753_11811));

}
}

var G__11812 = seq__11744_11802;
var G__11813 = chunk__11745_11803;
var G__11814 = count__11746_11804;
var G__11815 = (i__11747_11805 + (1));
seq__11744_11802 = G__11812;
chunk__11745_11803 = G__11813;
count__11746_11804 = G__11814;
i__11747_11805 = G__11815;
continue;
} else {
var temp__4423__auto___11816 = cljs.core.seq(seq__11744_11802);
if(temp__4423__auto___11816){
var seq__11744_11817__$1 = temp__4423__auto___11816;
if(cljs.core.chunked_seq_QMARK_(seq__11744_11817__$1)){
var c__4995__auto___11818 = cljs.core.chunk_first(seq__11744_11817__$1);
var G__11819 = cljs.core.chunk_rest(seq__11744_11817__$1);
var G__11820 = c__4995__auto___11818;
var G__11821 = cljs.core.count(c__4995__auto___11818);
var G__11822 = (0);
seq__11744_11802 = G__11819;
chunk__11745_11803 = G__11820;
count__11746_11804 = G__11821;
i__11747_11805 = G__11822;
continue;
} else {
var vec__11755_11823 = cljs.core.first(seq__11744_11817__$1);
var k_11824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11755_11823,(0),null);
var v_11825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11755_11823,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11825))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(function (){var G__11756 = k_11824;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__11756) : dokey.call(null,G__11756));
})(),v_11825);
} else {
if(cljs.core.fn_QMARK_(v_11825)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(function (){var G__11757 = k_11824;
return (onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(G__11757) : onkey.call(null,G__11757));
})(),v_11825);
} else {
var G__11758_11826 = this$;
var G__11759_11827 = (function (){var G__11761 = k_11824;
return (dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(G__11761) : dokey.call(null,G__11761));
})();
var G__11760_11828 = v_11825;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11758_11826,G__11759_11827,G__11760_11828) : tailrecursion.hoplon.do_BANG_.call(null,G__11758_11826,G__11759_11827,G__11760_11828));

}
}

var G__11829 = cljs.core.next(seq__11744_11817__$1);
var G__11830 = null;
var G__11831 = (0);
var G__11832 = (0);
seq__11744_11802 = G__11829;
chunk__11745_11803 = G__11830;
count__11746_11804 = G__11831;
i__11747_11805 = G__11832;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq((function (){var G__11762 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11762) : cljs.core.deref.call(null,G__11762));
})())){
var G__11763_11833 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__11765 = cljs.core.seq((function (){var G__11769 = dos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11769) : cljs.core.deref.call(null,G__11769));
})());
var chunk__11766 = null;
var count__11767 = (0);
var i__11768 = (0);
while(true){
if((i__11768 < count__11767)){
var vec__11770 = chunk__11766.cljs$core$IIndexed$_nth$arity$2(null,i__11768);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11770,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11770,(1),null);
var G__11771_11835 = this$;
var G__11772_11836 = k;
var G__11773_11837 = (function (){var G__11774 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11774) : cljs.core.deref.call(null,G__11774));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11771_11835,G__11772_11836,G__11773_11837) : tailrecursion.hoplon.do_BANG_.call(null,G__11771_11835,G__11772_11836,G__11773_11837));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11765,chunk__11766,count__11767,i__11768,vec__11770,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11679_SHARP_,p2__11680_SHARP_,p3__11681_SHARP_,p4__11678_SHARP_){
var G__11775 = this$;
var G__11776 = k;
var G__11777 = p4__11678_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11775,G__11776,G__11777) : tailrecursion.hoplon.do_BANG_.call(null,G__11775,G__11776,G__11777));
});})(seq__11765,chunk__11766,count__11767,i__11768,vec__11770,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__11838 = seq__11765;
var G__11839 = chunk__11766;
var G__11840 = count__11767;
var G__11841 = (i__11768 + (1));
seq__11765 = G__11838;
chunk__11766 = G__11839;
count__11767 = G__11840;
i__11768 = G__11841;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__11765);
if(temp__4423__auto__){
var seq__11765__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11765__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__11765__$1);
var G__11842 = cljs.core.chunk_rest(seq__11765__$1);
var G__11843 = c__4995__auto__;
var G__11844 = cljs.core.count(c__4995__auto__);
var G__11845 = (0);
seq__11765 = G__11842;
chunk__11766 = G__11843;
count__11767 = G__11844;
i__11768 = G__11845;
continue;
} else {
var vec__11778 = cljs.core.first(seq__11765__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11778,(1),null);
var G__11779_11846 = this$;
var G__11780_11847 = k;
var G__11781_11848 = (function (){var G__11782 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11782) : cljs.core.deref.call(null,G__11782));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11779_11846,G__11780_11847,G__11781_11848) : tailrecursion.hoplon.do_BANG_.call(null,G__11779_11846,G__11780_11847,G__11781_11848));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11765,chunk__11766,count__11767,i__11768,vec__11778,k,v,seq__11765__$1,temp__4423__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11679_SHARP_,p2__11680_SHARP_,p3__11681_SHARP_,p4__11678_SHARP_){
var G__11783 = this$;
var G__11784 = k;
var G__11785 = p4__11678_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__11783,G__11784,G__11785) : tailrecursion.hoplon.do_BANG_.call(null,G__11783,G__11784,G__11785));
});})(seq__11765,chunk__11766,count__11767,i__11768,vec__11778,k,v,seq__11765__$1,temp__4423__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__11849 = cljs.core.next(seq__11765__$1);
var G__11850 = null;
var G__11851 = (0);
var G__11852 = (0);
seq__11765 = G__11849;
chunk__11766 = G__11850;
count__11767 = G__11851;
i__11768 = G__11852;
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
var G__11764_11834 = (0);
setTimeout(G__11763_11833,G__11764_11834);
} else {
}

if(cljs.core.seq((function (){var G__11786 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11786) : cljs.core.deref.call(null,G__11786));
})())){
var G__11787_11853 = ((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__11789 = cljs.core.seq((function (){var G__11793 = ons;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11793) : cljs.core.deref.call(null,G__11793));
})());
var chunk__11790 = null;
var count__11791 = (0);
var i__11792 = (0);
while(true){
if((i__11792 < count__11791)){
var vec__11794 = chunk__11790.cljs$core$IIndexed$_nth$arity$2(null,i__11792);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11794,(1),null);
var G__11795_11855 = this$;
var G__11796_11856 = k;
var G__11797_11857 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__11795_11855,G__11796_11856,G__11797_11857) : tailrecursion.hoplon.on_BANG_.call(null,G__11795_11855,G__11796_11856,G__11797_11857));

var G__11858 = seq__11789;
var G__11859 = chunk__11790;
var G__11860 = count__11791;
var G__11861 = (i__11792 + (1));
seq__11789 = G__11858;
chunk__11790 = G__11859;
count__11791 = G__11860;
i__11792 = G__11861;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__11789);
if(temp__4423__auto__){
var seq__11789__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11789__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__11789__$1);
var G__11862 = cljs.core.chunk_rest(seq__11789__$1);
var G__11863 = c__4995__auto__;
var G__11864 = cljs.core.count(c__4995__auto__);
var G__11865 = (0);
seq__11789 = G__11862;
chunk__11790 = G__11863;
count__11791 = G__11864;
i__11792 = G__11865;
continue;
} else {
var vec__11798 = cljs.core.first(seq__11789__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798,(1),null);
var G__11799_11866 = this$;
var G__11800_11867 = k;
var G__11801_11868 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__11799_11866,G__11800_11867,G__11801_11868) : tailrecursion.hoplon.on_BANG_.call(null,G__11799_11866,G__11800_11867,G__11801_11868));

var G__11869 = cljs.core.next(seq__11789__$1);
var G__11870 = null;
var G__11871 = (0);
var G__11872 = (0);
seq__11789 = G__11869;
chunk__11790 = G__11870;
count__11791 = G__11871;
i__11792 = G__11872;
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
var G__11788_11854 = (0);
setTimeout(G__11787_11853,G__11788_11854);
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11873_SHARP_,p2__11874_SHARP_){
return p1__11873_SHARP_.appendChild(p2__11874_SHARP_);
}):(function (p1__11875_SHARP_,p2__11876_SHARP_){
try{return p1__11875_SHARP_.appendChild(p2__11876_SHARP_);
}catch (e11877){if((e11877 instanceof Error)){
var _ = e11877;
return null;
} else {
throw e11877;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
(function (){var G__11881 = this$;
return jQuery(G__11881);
})().empty();

var G__11882 = this$;
var G__11883 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__11882,G__11883) : tailrecursion.hoplon.add_children_BANG_.call(null,G__11882,G__11883));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__11889){
var vec__11902 = p__11889;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11902,(0),null);
var _ = cljs.core.nthnext(vec__11902,(1));
var kids = vec__11902;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__11903 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11903) : cljs.core.deref.call(null,G__11903));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11902,child_cell,_,kids){
return (function (p1__11885_SHARP_,p2__11886_SHARP_,p3__11887_SHARP_,p4__11884_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11884_SHARP_);
});})(vec__11902,child_cell,_,kids))
);
} else {
var node_11914 = ((function (vec__11902,child_cell,_,kids){
return (function (p1__11888_SHARP_){
if(typeof p1__11888_SHARP_ === 'string'){
var G__11904 = p1__11888_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__11904) : tailrecursion.hoplon.$text.call(null,G__11904));
} else {
if(cljs.core.truth_((function (){var G__11905 = p1__11888_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11905) : tailrecursion.hoplon.node_QMARK_.call(null,G__11905));
})())){
return p1__11888_SHARP_;
} else {
return null;
}
}
});})(vec__11902,child_cell,_,kids))
;
var seq__11906_11915 = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(node_11914,tailrecursion.hoplon.unsplice(kids)));
var chunk__11907_11916 = null;
var count__11908_11917 = (0);
var i__11909_11918 = (0);
while(true){
if((i__11909_11918 < count__11908_11917)){
var x_11919 = chunk__11907_11916.cljs$core$IIndexed$_nth$arity$2(null,i__11909_11918);
var G__11910_11920 = this$;
var G__11911_11921 = x_11919;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__11910_11920,G__11911_11921) : tailrecursion.hoplon.append_child.call(null,G__11910_11920,G__11911_11921));

var G__11922 = seq__11906_11915;
var G__11923 = chunk__11907_11916;
var G__11924 = count__11908_11917;
var G__11925 = (i__11909_11918 + (1));
seq__11906_11915 = G__11922;
chunk__11907_11916 = G__11923;
count__11908_11917 = G__11924;
i__11909_11918 = G__11925;
continue;
} else {
var temp__4423__auto___11926 = cljs.core.seq(seq__11906_11915);
if(temp__4423__auto___11926){
var seq__11906_11927__$1 = temp__4423__auto___11926;
if(cljs.core.chunked_seq_QMARK_(seq__11906_11927__$1)){
var c__4995__auto___11928 = cljs.core.chunk_first(seq__11906_11927__$1);
var G__11929 = cljs.core.chunk_rest(seq__11906_11927__$1);
var G__11930 = c__4995__auto___11928;
var G__11931 = cljs.core.count(c__4995__auto___11928);
var G__11932 = (0);
seq__11906_11915 = G__11929;
chunk__11907_11916 = G__11930;
count__11908_11917 = G__11931;
i__11909_11918 = G__11932;
continue;
} else {
var x_11933 = cljs.core.first(seq__11906_11927__$1);
var G__11912_11934 = this$;
var G__11913_11935 = x_11933;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__11912_11934,G__11913_11935) : tailrecursion.hoplon.append_child.call(null,G__11912_11934,G__11913_11935));

var G__11936 = cljs.core.next(seq__11906_11927__$1);
var G__11937 = null;
var G__11938 = (0);
var G__11939 = (0);
seq__11906_11915 = G__11936;
chunk__11907_11916 = G__11937;
count__11908_11917 = G__11938;
i__11909_11918 = G__11939;
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
var G__11947__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__11941 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11941,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__11942 = this$;
G__11942.hoplonIFn(attr,kids);

return G__11942;
} else {
var G__11943 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__11943,attr);

tailrecursion.hoplon.add_children_BANG_(G__11943,kids);

return G__11943;
}
};
var G__11947 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__11948__i = 0, G__11948__a = new Array(arguments.length -  1);
while (G__11948__i < G__11948__a.length) {G__11948__a[G__11948__i] = arguments[G__11948__i + 1]; ++G__11948__i;}
  args = new cljs.core.IndexedSeq(G__11948__a,0);
} 
return G__11947__delegate.call(this,self__,args);};
G__11947.cljs$lang$maxFixedArity = 1;
G__11947.cljs$lang$applyTo = (function (arglist__11949){
var self__ = cljs.core.first(arglist__11949);
var args = cljs.core.rest(arglist__11949);
return G__11947__delegate(self__,args);
});
G__11947.cljs$core$IFn$_invoke$arity$variadic = G__11947__delegate;
return G__11947;
})()
;

Element.prototype.apply = (function (self__,args11940){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11940)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11950__delegate = function (args){
var this$ = this;
var vec__11944 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__11945 = this$;
G__11945.hoplonIFn(attr,kids);

return G__11945;
} else {
var G__11946 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__11946,attr);

tailrecursion.hoplon.add_children_BANG_(G__11946,kids);

return G__11946;
}
};
var G__11950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11951__i = 0, G__11951__a = new Array(arguments.length -  0);
while (G__11951__i < G__11951__a.length) {G__11951__a[G__11951__i] = arguments[G__11951__i + 0]; ++G__11951__i;}
  args = new cljs.core.IndexedSeq(G__11951__a,0);
} 
return G__11950__delegate.call(this,args);};
G__11950.cljs$lang$maxFixedArity = 0;
G__11950.cljs$lang$applyTo = (function (arglist__11952){
var args = cljs.core.seq(arglist__11952);
return G__11950__delegate(args);
});
G__11950.cljs$core$IFn$_invoke$arity$variadic = G__11950__delegate;
return G__11950;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__11965__delegate = function (args){
var vec__11959 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__11960 = elem;
return jQuery(G__11960);
})().empty();

var seq__11961 = cljs.core.seq(kids);
var chunk__11962 = null;
var count__11963 = (0);
var i__11964 = (0);
while(true){
if((i__11964 < count__11963)){
var k = chunk__11962.cljs$core$IIndexed$_nth$arity$2(null,i__11964);
elem.appendChild(k);

var G__11966 = seq__11961;
var G__11967 = chunk__11962;
var G__11968 = count__11963;
var G__11969 = (i__11964 + (1));
seq__11961 = G__11966;
chunk__11962 = G__11967;
count__11963 = G__11968;
i__11964 = G__11969;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__11961);
if(temp__4423__auto__){
var seq__11961__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11961__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__11961__$1);
var G__11970 = cljs.core.chunk_rest(seq__11961__$1);
var G__11971 = c__4995__auto__;
var G__11972 = cljs.core.count(c__4995__auto__);
var G__11973 = (0);
seq__11961 = G__11970;
chunk__11962 = G__11971;
count__11963 = G__11972;
i__11964 = G__11973;
continue;
} else {
var k = cljs.core.first(seq__11961__$1);
elem.appendChild(k);

var G__11974 = cljs.core.next(seq__11961__$1);
var G__11975 = null;
var G__11976 = (0);
var G__11977 = (0);
seq__11961 = G__11974;
chunk__11962 = G__11975;
count__11963 = G__11976;
i__11964 = G__11977;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__11965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11978__i = 0, G__11978__a = new Array(arguments.length -  0);
while (G__11978__i < G__11978__a.length) {G__11978__a[G__11978__i] = arguments[G__11978__i + 0]; ++G__11978__i;}
  args = new cljs.core.IndexedSeq(G__11978__a,0);
} 
return G__11965__delegate.call(this,args);};
G__11965.cljs$lang$maxFixedArity = 0;
G__11965.cljs$lang$applyTo = (function (arglist__11979){
var args = cljs.core.seq(arglist__11979);
return G__11965__delegate(args);
});
G__11965.cljs$core$IFn$_invoke$arity$variadic = G__11965__delegate;
return G__11965;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__11980__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11981__i = 0, G__11981__a = new Array(arguments.length -  0);
while (G__11981__i < G__11981__a.length) {G__11981__a[G__11981__i] = arguments[G__11981__i + 0]; ++G__11981__i;}
  args = new cljs.core.IndexedSeq(G__11981__a,0);
} 
return G__11980__delegate.call(this,args);};
G__11980.cljs$lang$maxFixedArity = 0;
G__11980.cljs$lang$applyTo = (function (arglist__11982){
var args = cljs.core.seq(arglist__11982);
return G__11980__delegate(args);
});
G__11980.cljs$core$IFn$_invoke$arity$variadic = G__11980__delegate;
return G__11980;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__11984 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq11983){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11983));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__11985_SHARP_){
return document.createTextNode(p1__11985_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__11986_SHARP_){
return document.createComment(p1__11986_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
var G__11988 = f;
return jQuery(G__11988);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return (function (){var G__11990 = document;
return jQuery(G__11990);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return (function (){var G__11992 = document;
return jQuery(G__11992);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__11994 = "body";
return jQuery(G__11994);
})().on("submit",(function (p1__11993_SHARP_){
var e = (function (){var G__11995 = p1__11993_SHARP_.target;
return jQuery(G__11995);
})();
if(cljs.core.truth_((function (){var or__4210__auto__ = e.attr("action");
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__11993_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function tailrecursion$hoplon$by_id(id){
return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function tailrecursion$hoplon$val_id(id){
var G__11998 = tailrecursion.hoplon.by_id(id);
var G__11999 = cljs.core.constant$keyword$value;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(G__11998,G__11999) : tailrecursion.hoplon.do_BANG_.call(null,G__11998,G__11999));
});
tailrecursion.hoplon.rel = (function tailrecursion$hoplon$rel(other,event){
var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__12003 = other;
return jQuery(G__12003);
})().offset());
var ox = (function (){var G__12004 = "left";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__12004) : os.call(null,G__12004));
})();
var oy = (function (){var G__12005 = "top";
return (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1(G__12005) : os.call(null,G__12005));
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$x,(event.pageX - ox),cljs.core.constant$keyword$y,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function tailrecursion$hoplon$relx(other,event){
return cljs.core.constant$keyword$x.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function tailrecursion$hoplon$rely(other,event){
return cljs.core.constant$keyword$y.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function tailrecursion$hoplon$rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx(rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely(rel_to,event));

var G__12007 = event;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__12007) : handler.call(null,G__12007));
});
});
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__12009 = arguments.length;
switch (G__12009) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__12012 = arguments.length;
switch (G__12012) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__12014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12014) : cljs.core.atom.call(null,G__12014));
})();
var prefer_table__5106__auto__ = (function (){var G__12015 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12015) : cljs.core.atom.call(null,G__12015));
})();
var method_cache__5107__auto__ = (function (){var G__12016 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12016) : cljs.core.atom.call(null,G__12016));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__12017 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12017) : cljs.core.atom.call(null,G__12017));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$default,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default], null),cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,key,val){
var G__12018 = elem;
var G__12019 = cljs.core.constant$keyword$attr;
var G__12020 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12018,G__12019,G__12020) : tailrecursion.hoplon.do_BANG_.call(null,G__12018,G__12019,G__12020));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$value,(function() { 
var G__12022__delegate = function (elem,_,args){
var e = (function (){var G__12021 = elem;
return jQuery(G__12021);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__12022 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12023__i = 0, G__12023__a = new Array(arguments.length -  2);
while (G__12023__i < G__12023__a.length) {G__12023__a[G__12023__i] = arguments[G__12023__i + 2]; ++G__12023__i;}
  args = new cljs.core.IndexedSeq(G__12023__a,0);
} 
return G__12022__delegate.call(this,elem,_,args);};
G__12022.cljs$lang$maxFixedArity = 2;
G__12022.cljs$lang$applyTo = (function (arglist__12024){
var elem = cljs.core.first(arglist__12024);
arglist__12024 = cljs.core.next(arglist__12024);
var _ = cljs.core.first(arglist__12024);
var args = cljs.core.rest(arglist__12024);
return G__12022__delegate(elem,_,args);
});
G__12022.cljs$core$IFn$_invoke$arity$variadic = G__12022__delegate;
return G__12022;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$attr,(function (elem,_,kvs){
var e = (function (){var G__12025 = elem;
return jQuery(G__12025);
})();
var seq__12026 = cljs.core.seq(kvs);
var chunk__12027 = null;
var count__12028 = (0);
var i__12029 = (0);
while(true){
if((i__12029 < count__12028)){
var vec__12030 = chunk__12027.cljs$core$IIndexed$_nth$arity$2(null,i__12029);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030,(1),null);
var k_12032__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12032__$1);
} else {
e.attr(k_12032__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12032__$1:v));
}

var G__12033 = seq__12026;
var G__12034 = chunk__12027;
var G__12035 = count__12028;
var G__12036 = (i__12029 + (1));
seq__12026 = G__12033;
chunk__12027 = G__12034;
count__12028 = G__12035;
i__12029 = G__12036;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12026);
if(temp__4423__auto__){
var seq__12026__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12026__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__12026__$1);
var G__12037 = cljs.core.chunk_rest(seq__12026__$1);
var G__12038 = c__4995__auto__;
var G__12039 = cljs.core.count(c__4995__auto__);
var G__12040 = (0);
seq__12026 = G__12037;
chunk__12027 = G__12038;
count__12028 = G__12039;
i__12029 = G__12040;
continue;
} else {
var vec__12031 = cljs.core.first(seq__12026__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12031,(1),null);
var k_12041__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12041__$1);
} else {
e.attr(k_12041__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12041__$1:v));
}

var G__12042 = cljs.core.next(seq__12026__$1);
var G__12043 = null;
var G__12044 = (0);
var G__12045 = (0);
seq__12026 = G__12042;
chunk__12027 = G__12043;
count__12028 = G__12044;
i__12029 = G__12045;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$class,(function (elem,_,kvs){
var elem__$1 = (function (){var G__12047 = elem;
return jQuery(G__12047);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__12046_SHARP_){
return cljs.core.zipmap(p1__12046_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__12048 = cljs.core.seq(clmap);
var chunk__12049 = null;
var count__12050 = (0);
var i__12051 = (0);
while(true){
if((i__12051 < count__12050)){
var vec__12052 = chunk__12049.cljs$core$IIndexed$_nth$arity$2(null,i__12051);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12052,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12052,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12054 = seq__12048;
var G__12055 = chunk__12049;
var G__12056 = count__12050;
var G__12057 = (i__12051 + (1));
seq__12048 = G__12054;
chunk__12049 = G__12055;
count__12050 = G__12056;
i__12051 = G__12057;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12048);
if(temp__4423__auto__){
var seq__12048__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12048__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__12048__$1);
var G__12058 = cljs.core.chunk_rest(seq__12048__$1);
var G__12059 = c__4995__auto__;
var G__12060 = cljs.core.count(c__4995__auto__);
var G__12061 = (0);
seq__12048 = G__12058;
chunk__12049 = G__12059;
count__12050 = G__12060;
i__12051 = G__12061;
continue;
} else {
var vec__12053 = cljs.core.first(seq__12048__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12053,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12053,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12062 = cljs.core.next(seq__12048__$1);
var G__12063 = null;
var G__12064 = (0);
var G__12065 = (0);
seq__12048 = G__12062;
chunk__12049 = G__12063;
count__12050 = G__12064;
i__12051 = G__12065;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$css,(function (elem,_,kvs){
var e = (function (){var G__12066 = elem;
return jQuery(G__12066);
})();
var seq__12067 = cljs.core.seq(kvs);
var chunk__12068 = null;
var count__12069 = (0);
var i__12070 = (0);
while(true){
if((i__12070 < count__12069)){
var vec__12071 = chunk__12068.cljs$core$IIndexed$_nth$arity$2(null,i__12070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12073 = seq__12067;
var G__12074 = chunk__12068;
var G__12075 = count__12069;
var G__12076 = (i__12070 + (1));
seq__12067 = G__12073;
chunk__12068 = G__12074;
count__12069 = G__12075;
i__12070 = G__12076;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__12067);
if(temp__4423__auto__){
var seq__12067__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12067__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__12067__$1);
var G__12077 = cljs.core.chunk_rest(seq__12067__$1);
var G__12078 = c__4995__auto__;
var G__12079 = cljs.core.count(c__4995__auto__);
var G__12080 = (0);
seq__12067 = G__12077;
chunk__12068 = G__12078;
count__12069 = G__12079;
i__12070 = G__12080;
continue;
} else {
var vec__12072 = cljs.core.first(seq__12067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12081 = cljs.core.next(seq__12067__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12067 = G__12081;
chunk__12068 = G__12082;
count__12069 = G__12083;
i__12070 = G__12084;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$toggle,(function (elem,_,v){
return (function (){var G__12085 = elem;
return jQuery(G__12085);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__12086 = elem;
return jQuery(G__12086);
})().hide().slideDown("fast");
} else {
return (function (){var G__12087 = elem;
return jQuery(G__12087);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__12088 = elem;
return jQuery(G__12088);
})().hide().fadeIn("fast");
} else {
return (function (){var G__12089 = elem;
return jQuery(G__12089);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus,(function (elem,_,v){
var G__12090 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__12092 = elem;
return jQuery(G__12092);
})().focus();
} else {
return (function (){var G__12093 = elem;
return jQuery(G__12093);
})().focusout();
}
});
var G__12091 = (0);
return setTimeout(G__12090,G__12091);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$select,(function (elem,_,___$1){
return (function (){var G__12094 = elem;
return jQuery(G__12094);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__12095_12101 = elem;
var G__12096_12102 = cljs.core.constant$keyword$focus;
var G__12097_12103 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12095_12101,G__12096_12102,G__12097_12103) : tailrecursion.hoplon.do_BANG_.call(null,G__12095_12101,G__12096_12102,G__12097_12103));

var G__12098 = elem;
var G__12099 = cljs.core.constant$keyword$select;
var G__12100 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12098,G__12099,G__12100) : tailrecursion.hoplon.do_BANG_.call(null,G__12098,G__12099,G__12100));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$text,(function (elem,_,v){
return (function (){var G__12104 = elem;
return jQuery(G__12104);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (elem,_,v){
return (function (){var G__12105 = elem;
return jQuery(G__12105);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__12106 = "body,html";
return jQuery(G__12106);
})();
var elem__$1 = (function (){var G__12107 = elem;
return jQuery(G__12107);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__12108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12108) : cljs.core.atom.call(null,G__12108));
})();
var prefer_table__5106__auto__ = (function (){var G__12109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12109) : cljs.core.atom.call(null,G__12109));
})();
var method_cache__5107__auto__ = (function (){var G__12110 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12110) : cljs.core.atom.call(null,G__12110));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__12111 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12111) : cljs.core.atom.call(null,G__12111));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$default,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default], null),cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__12112 = this$__$1.target;
return jQuery(G__12112);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__12113 = elem;
return jQuery(G__12113);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(((function (pool_size){
return (function (G__12153,G__12154){
var G__12155 = G__12154;
return (G__12153.cljs$core$IFn$_invoke$arity$1 ? G__12153.cljs$core$IFn$_invoke$arity$1(G__12155) : G__12153.call(null,G__12155));
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,items_seq){
return (function (G__12157,G__12156){
var G__12158 = G__12157;
return (G__12156.cljs$core$IFn$_invoke$arity$1 ? G__12156.cljs$core$IFn$_invoke$arity$1(G__12158) : G__12156.call(null,G__12158));
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__12114_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count){
return (function (G__12159,G__12160){
return (G__12159 < G__12160);
});})(pool_size,items_seq,cur_count))
).call(null,p1__12114_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__12115_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__12162,G__12163,G__12161){
var G__12164 = G__12162;
var G__12165 = G__12163;
return (G__12161.cljs$core$IFn$_invoke$arity$2 ? G__12161.cljs$core$IFn$_invoke$arity$2(G__12164,G__12165) : G__12161.call(null,G__12164,G__12165));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__12115_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = (function (){return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));
})();
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__12179,G__12177,G__12172,G__12170,G__12171,G__12176,G__12178,G__12173,G__12175,G__12174){
if(cljs.core.truth_((G__12170 < G__12171))){
var seq__12166_12190 = cljs.core.seq((function (){var G__12180 = G__12170;
var G__12181 = G__12171;
return (G__12172.cljs$core$IFn$_invoke$arity$2 ? G__12172.cljs$core$IFn$_invoke$arity$2(G__12180,G__12181) : G__12172.call(null,G__12180,G__12181));
})());
var chunk__12167_12191 = null;
var count__12168_12192 = (0);
var i__12169_12193 = (0);
while(true){
if(cljs.core.truth_((i__12169_12193 < count__12168_12192))){
var i_12194 = chunk__12167_12191.cljs$core$IIndexed$_nth$arity$2(null,i__12169_12193);
var e_12195 = (function (){var G__12182 = (function (){var G__12183 = i_12194;
return (G__12174.cljs$core$IFn$_invoke$arity$1 ? G__12174.cljs$core$IFn$_invoke$arity$1(G__12183) : G__12174.call(null,G__12183));
})();
return (G__12173.cljs$core$IFn$_invoke$arity$1 ? G__12173.cljs$core$IFn$_invoke$arity$1(G__12182) : G__12173.call(null,G__12182));
})().call(null,cljs.core.constant$keyword$do_DASH_toggle,(function (){var G__12184 = i_12194;
return (G__12175.cljs$core$IFn$_invoke$arity$1 ? G__12175.cljs$core$IFn$_invoke$arity$1(G__12184) : G__12175.call(null,G__12184));
})());
if(cljs.core.not(G__12176)){
G__12177.appendChild(e_12195);
} else {
G__12177.insertBefore(e_12195,G__12177.firstChild);
}

var G__12196 = seq__12166_12190;
var G__12197 = chunk__12167_12191;
var G__12198 = count__12168_12192;
var G__12199 = (i__12169_12193 + (1));
seq__12166_12190 = G__12196;
chunk__12167_12191 = G__12197;
count__12168_12192 = G__12198;
i__12169_12193 = G__12199;
continue;
} else {
var temp__4423__auto___12200 = cljs.core.seq(seq__12166_12190);
if(temp__4423__auto___12200){
var seq__12166_12201__$1 = temp__4423__auto___12200;
if(cljs.core.chunked_seq_QMARK_(seq__12166_12201__$1)){
var c__4995__auto___12202 = cljs.core.chunk_first(seq__12166_12201__$1);
var G__12203 = cljs.core.chunk_rest(seq__12166_12201__$1);
var G__12204 = c__4995__auto___12202;
var G__12205 = cljs.core.count(c__4995__auto___12202);
var G__12206 = (0);
seq__12166_12190 = G__12203;
chunk__12167_12191 = G__12204;
count__12168_12192 = G__12205;
i__12169_12193 = G__12206;
continue;
} else {
var i_12207 = cljs.core.first(seq__12166_12201__$1);
var e_12208 = (function (){var G__12185 = (function (){var G__12186 = i_12207;
return (G__12174.cljs$core$IFn$_invoke$arity$1 ? G__12174.cljs$core$IFn$_invoke$arity$1(G__12186) : G__12174.call(null,G__12186));
})();
return (G__12173.cljs$core$IFn$_invoke$arity$1 ? G__12173.cljs$core$IFn$_invoke$arity$1(G__12185) : G__12173.call(null,G__12185));
})().call(null,cljs.core.constant$keyword$do_DASH_toggle,(function (){var G__12187 = i_12207;
return (G__12175.cljs$core$IFn$_invoke$arity$1 ? G__12175.cljs$core$IFn$_invoke$arity$1(G__12187) : G__12175.call(null,G__12187));
})());
if(cljs.core.not(G__12176)){
G__12177.appendChild(e_12208);
} else {
G__12177.insertBefore(e_12208,G__12177.firstChild);
}

var G__12209 = cljs.core.next(seq__12166_12201__$1);
var G__12210 = null;
var G__12211 = (0);
var G__12212 = (0);
seq__12166_12190 = G__12209;
chunk__12167_12191 = G__12210;
count__12168_12192 = G__12211;
i__12169_12193 = G__12212;
continue;
}
} else {
}
}
break;
}

var G__12188 = G__12179;
var G__12189 = G__12171;
return (G__12178.cljs$core$IFn$_invoke$arity$2 ? G__12178.cljs$core$IFn$_invoke$arity$2(G__12188,G__12189) : G__12178.call(null,G__12188,G__12189));
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
var G__12214 = arguments.length;
switch (G__12214) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
var r = (function (){var ret__10193__auto__ = tailrecursion.javelin.cell(window.location.hash);
var G__12215_12241 = ((function (ret__10193__auto__){
return (function (){
var G__12217 = ret__10193__auto__;
var G__12218 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12217,G__12218) : cljs.core.reset_BANG_.call(null,G__12217,G__12218));
});})(ret__10193__auto__))
;
var G__12216_12242 = (100);
setInterval(G__12215_12241,G__12216_12242);

return tailrecursion.javelin.formula(((function (ret__10193__auto__){
return (function (G__12219){
return G__12219;
});})(ret__10193__auto__))
).call(null,ret__10193__auto__);
})();
return tailrecursion.javelin.formula(((function (r){
return (function (G__12221,G__12220){
if(cljs.core.truth_((function (){var G__12222 = "";
var G__12223 = G__12221;
return (G__12220.cljs$core$IFn$_invoke$arity$2 ? G__12220.cljs$core$IFn$_invoke$arity$2(G__12222,G__12223) : G__12220.call(null,G__12222,G__12223));
})())){
return G__12221;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl))){
var setter__10194__auto__ = setter_or_dfl;
var callback__10195__auto__ = (function (){var or__4210__auto__ = null;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10194__auto__,callback__10195__auto__){
return (function (G__12225,G__12224){
return G__12224.location.hash = G__12225;
});})(setter__10194__auto__,callback__10195__auto__))
).call(null,setter__10194__auto__,window);

var G__12226_12243 = ((function (setter__10194__auto__,callback__10195__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__12228 = setter__10194__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12228) : cljs.core.deref.call(null,G__12228));
})(),window.location.hash)){
var G__12229_12245 = window.location.hash;
(callback__10195__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10195__auto__.cljs$core$IFn$_invoke$arity$1(G__12229_12245) : callback__10195__auto__.call(null,G__12229_12245));

return window.location.hash = (function (){var G__12230 = setter__10194__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12230) : cljs.core.deref.call(null,G__12230));
})();
} else {
return null;
}
});})(setter__10194__auto__,callback__10195__auto__))
;
var G__12227_12244 = (100);
setInterval(G__12226_12243,G__12227_12244);

return setter__10194__auto__;
} else {
var r = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0();
return tailrecursion.javelin.formula(((function (r){
return (function (G__12231,G__12232){
var or__4210__auto__ = G__12231;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__12232;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2 = (function (setter,callback){
var setter__10194__auto__ = setter;
var callback__10195__auto__ = (function (){var or__4210__auto__ = callback;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula(((function (setter__10194__auto__,callback__10195__auto__){
return (function (G__12234,G__12233){
return G__12233.location.hash = G__12234;
});})(setter__10194__auto__,callback__10195__auto__))
).call(null,setter__10194__auto__,window);

var G__12235_12246 = ((function (setter__10194__auto__,callback__10195__auto__){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__12237 = setter__10194__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12237) : cljs.core.deref.call(null,G__12237));
})(),window.location.hash)){
var G__12238_12248 = window.location.hash;
(callback__10195__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__10195__auto__.cljs$core$IFn$_invoke$arity$1(G__12238_12248) : callback__10195__auto__.call(null,G__12238_12248));

return window.location.hash = (function (){var G__12239 = setter__10194__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12239) : cljs.core.deref.call(null,G__12239));
})();
} else {
return null;
}
});})(setter__10194__auto__,callback__10195__auto__))
;
var G__12236_12247 = (100);
setInterval(G__12235_12246,G__12236_12247);

return setter__10194__auto__;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = 2;
