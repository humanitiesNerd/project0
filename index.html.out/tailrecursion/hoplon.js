// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7492_SHARP_){
return (p1__7492_SHARP_ instanceof Node);
}):(function (p1__7493_SHARP_){
try{return p1__7493_SHARP_.nodeType;
}catch (e7494){if((e7494 instanceof Error)){
var _ = e7494;
return null;
} else {
throw e7494;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__7495_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__7495_SHARP_);
}catch (e7496){if((e7496 instanceof Error)){
var _ = e7496;
return null;
} else {
throw e7496;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__7497_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__7497_SHARP_);
}catch (e7498){if((e7498 instanceof Error)){
var _ = e7498;
return null;
} else {
throw e7498;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__7499_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__7499_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args7500 = [];
var len__6061__auto___7504 = arguments.length;
var i__6062__auto___7505 = (0);
while(true){
if((i__6062__auto___7505 < len__6061__auto___7504)){
args7500.push((arguments[i__6062__auto___7505]));

var G__7506 = (i__6062__auto___7505 + (1));
i__6062__auto___7505 = G__7506;
continue;
} else {
}
break;
}

var G__7502 = args7500.length;
switch (G__7502) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7500.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e7503){if((e7503 instanceof Error)){
var _ = e7503;
return not_found;
} else {
throw e7503;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args7508 = [];
var len__6061__auto___7511 = arguments.length;
var i__6062__auto___7512 = (0);
while(true){
if((i__6062__auto___7512 < len__6061__auto___7511)){
args7508.push((arguments[i__6062__auto___7512]));

var G__7513 = (i__6062__auto___7512 + (1));
i__6062__auto___7512 = G__7513;
continue;
} else {
}
break;
}

var G__7510 = args7508.length;
switch (G__7510) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7508.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.call(null,f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.unsplice = (function tailrecursion$hoplon$unsplice(forms){
return cljs.core.mapcat.call(null,(function (p1__7515_SHARP_){
if(cljs.core.truth_((function (){var or__5022__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__7515_SHARP_);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__7515_SHARP_);
}
})())){
return tailrecursion$hoplon$unsplice.call(null,p1__7515_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7515_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__7518){
var vec__7520 = p__7518;
var head = cljs.core.nth.call(null,vec__7520,(0),null);
var tail = cljs.core.nthnext.call(null,vec__7520,(1));
var args = vec__7520;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__7520,head,tail,args){
return (function (p1__7516_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__7516_SHARP_)));
});})(kw1_QMARK_,vec__7520,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__7520,head,tail,args){
return (function (p1__7517_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__7517_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__7520,head,tail,args))
;
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function tailrecursion$hoplon$add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__7522_SHARP_,p2__7521_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__7521_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__7521_SHARP_),((!(cljs.core._EQ_.call(null,p1__7522_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__7523_SHARP_,p2__7524_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__7523_SHARP_,/ /)),clojure.string.split.call(null,p2__7524_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__7547_7565 = cljs.core.seq.call(null,attr);
var chunk__7548_7566 = null;
var count__7549_7567 = (0);
var i__7550_7568 = (0);
while(true){
if((i__7550_7568 < count__7549_7567)){
var vec__7551_7569 = cljs.core._nth.call(null,chunk__7548_7566,i__7550_7568);
var k_7570 = cljs.core.nth.call(null,vec__7551_7569,(0),null);
var v_7571 = cljs.core.nth.call(null,vec__7551_7569,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_7571))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_7570),v_7571);
} else {
if(cljs.core.fn_QMARK_.call(null,v_7571)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_7570),v_7571);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_7570),v_7571);

}
}

var G__7572 = seq__7547_7565;
var G__7573 = chunk__7548_7566;
var G__7574 = count__7549_7567;
var G__7575 = (i__7550_7568 + (1));
seq__7547_7565 = G__7572;
chunk__7548_7566 = G__7573;
count__7549_7567 = G__7574;
i__7550_7568 = G__7575;
continue;
} else {
var temp__4425__auto___7576 = cljs.core.seq.call(null,seq__7547_7565);
if(temp__4425__auto___7576){
var seq__7547_7577__$1 = temp__4425__auto___7576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7547_7577__$1)){
var c__5806__auto___7578 = cljs.core.chunk_first.call(null,seq__7547_7577__$1);
var G__7579 = cljs.core.chunk_rest.call(null,seq__7547_7577__$1);
var G__7580 = c__5806__auto___7578;
var G__7581 = cljs.core.count.call(null,c__5806__auto___7578);
var G__7582 = (0);
seq__7547_7565 = G__7579;
chunk__7548_7566 = G__7580;
count__7549_7567 = G__7581;
i__7550_7568 = G__7582;
continue;
} else {
var vec__7552_7583 = cljs.core.first.call(null,seq__7547_7577__$1);
var k_7584 = cljs.core.nth.call(null,vec__7552_7583,(0),null);
var v_7585 = cljs.core.nth.call(null,vec__7552_7583,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_7585))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_7584),v_7585);
} else {
if(cljs.core.fn_QMARK_.call(null,v_7585)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_7584),v_7585);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_7584),v_7585);

}
}

var G__7586 = cljs.core.next.call(null,seq__7547_7577__$1);
var G__7587 = null;
var G__7588 = (0);
var G__7589 = (0);
seq__7547_7565 = G__7586;
chunk__7548_7566 = G__7587;
count__7549_7567 = G__7588;
i__7550_7568 = G__7589;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__7553 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__7554 = null;
var count__7555 = (0);
var i__7556 = (0);
while(true){
if((i__7556 < count__7555)){
var vec__7557 = cljs.core._nth.call(null,chunk__7554,i__7556);
var k = cljs.core.nth.call(null,vec__7557,(0),null);
var v = cljs.core.nth.call(null,vec__7557,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__7553,chunk__7554,count__7555,i__7556,vec__7557,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__7526_SHARP_,p2__7527_SHARP_,p3__7528_SHARP_,p4__7525_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__7525_SHARP_);
});})(seq__7553,chunk__7554,count__7555,i__7556,vec__7557,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__7590 = seq__7553;
var G__7591 = chunk__7554;
var G__7592 = count__7555;
var G__7593 = (i__7556 + (1));
seq__7553 = G__7590;
chunk__7554 = G__7591;
count__7555 = G__7592;
i__7556 = G__7593;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7553);
if(temp__4425__auto__){
var seq__7553__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7553__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7553__$1);
var G__7594 = cljs.core.chunk_rest.call(null,seq__7553__$1);
var G__7595 = c__5806__auto__;
var G__7596 = cljs.core.count.call(null,c__5806__auto__);
var G__7597 = (0);
seq__7553 = G__7594;
chunk__7554 = G__7595;
count__7555 = G__7596;
i__7556 = G__7597;
continue;
} else {
var vec__7558 = cljs.core.first.call(null,seq__7553__$1);
var k = cljs.core.nth.call(null,vec__7558,(0),null);
var v = cljs.core.nth.call(null,vec__7558,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__7553,chunk__7554,count__7555,i__7556,vec__7558,k,v,seq__7553__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__7526_SHARP_,p2__7527_SHARP_,p3__7528_SHARP_,p4__7525_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__7525_SHARP_);
});})(seq__7553,chunk__7554,count__7555,i__7556,vec__7558,k,v,seq__7553__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__7598 = cljs.core.next.call(null,seq__7553__$1);
var G__7599 = null;
var G__7600 = (0);
var G__7601 = (0);
seq__7553 = G__7598;
chunk__7554 = G__7599;
count__7555 = G__7600;
i__7556 = G__7601;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__7559 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__7560 = null;
var count__7561 = (0);
var i__7562 = (0);
while(true){
if((i__7562 < count__7561)){
var vec__7563 = cljs.core._nth.call(null,chunk__7560,i__7562);
var k = cljs.core.nth.call(null,vec__7563,(0),null);
var v = cljs.core.nth.call(null,vec__7563,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__7602 = seq__7559;
var G__7603 = chunk__7560;
var G__7604 = count__7561;
var G__7605 = (i__7562 + (1));
seq__7559 = G__7602;
chunk__7560 = G__7603;
count__7561 = G__7604;
i__7562 = G__7605;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7559);
if(temp__4425__auto__){
var seq__7559__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7559__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7559__$1);
var G__7606 = cljs.core.chunk_rest.call(null,seq__7559__$1);
var G__7607 = c__5806__auto__;
var G__7608 = cljs.core.count.call(null,c__5806__auto__);
var G__7609 = (0);
seq__7559 = G__7606;
chunk__7560 = G__7607;
count__7561 = G__7608;
i__7562 = G__7609;
continue;
} else {
var vec__7564 = cljs.core.first.call(null,seq__7559__$1);
var k = cljs.core.nth.call(null,vec__7564,(0),null);
var v = cljs.core.nth.call(null,vec__7564,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__7610 = cljs.core.next.call(null,seq__7559__$1);
var G__7611 = null;
var G__7612 = (0);
var G__7613 = (0);
seq__7559 = G__7610;
chunk__7560 = G__7611;
count__7561 = G__7612;
i__7562 = G__7613;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7614_SHARP_,p2__7615_SHARP_){
return p1__7614_SHARP_.appendChild(p2__7615_SHARP_);
}):(function (p1__7616_SHARP_,p2__7617_SHARP_){
try{return p1__7616_SHARP_.appendChild(p2__7617_SHARP_);
}catch (e7618){if((e7618 instanceof Error)){
var _ = e7618;
return null;
} else {
throw e7618;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__7624){
var vec__7630 = p__7624;
var child_cell = cljs.core.nth.call(null,vec__7630,(0),null);
var _ = cljs.core.nthnext.call(null,vec__7630,(1));
var kids = vec__7630;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__7630,child_cell,_,kids){
return (function (p1__7620_SHARP_,p2__7621_SHARP_,p3__7622_SHARP_,p4__7619_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__7619_SHARP_);
});})(vec__7630,child_cell,_,kids))
);
} else {
var node_7635 = ((function (vec__7630,child_cell,_,kids){
return (function (p1__7623_SHARP_){
if(typeof p1__7623_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__7623_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__7623_SHARP_))){
return p1__7623_SHARP_;
} else {
return null;
}
}
});})(vec__7630,child_cell,_,kids))
;
var seq__7631_7636 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_7635,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__7632_7637 = null;
var count__7633_7638 = (0);
var i__7634_7639 = (0);
while(true){
if((i__7634_7639 < count__7633_7638)){
var x_7640 = cljs.core._nth.call(null,chunk__7632_7637,i__7634_7639);
tailrecursion.hoplon.append_child.call(null,this$,x_7640);

var G__7641 = seq__7631_7636;
var G__7642 = chunk__7632_7637;
var G__7643 = count__7633_7638;
var G__7644 = (i__7634_7639 + (1));
seq__7631_7636 = G__7641;
chunk__7632_7637 = G__7642;
count__7633_7638 = G__7643;
i__7634_7639 = G__7644;
continue;
} else {
var temp__4425__auto___7645 = cljs.core.seq.call(null,seq__7631_7636);
if(temp__4425__auto___7645){
var seq__7631_7646__$1 = temp__4425__auto___7645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7631_7646__$1)){
var c__5806__auto___7647 = cljs.core.chunk_first.call(null,seq__7631_7646__$1);
var G__7648 = cljs.core.chunk_rest.call(null,seq__7631_7646__$1);
var G__7649 = c__5806__auto___7647;
var G__7650 = cljs.core.count.call(null,c__5806__auto___7647);
var G__7651 = (0);
seq__7631_7636 = G__7648;
chunk__7632_7637 = G__7649;
count__7633_7638 = G__7650;
i__7634_7639 = G__7651;
continue;
} else {
var x_7652 = cljs.core.first.call(null,seq__7631_7646__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_7652);

var G__7653 = cljs.core.next.call(null,seq__7631_7646__$1);
var G__7654 = null;
var G__7655 = (0);
var G__7656 = (0);
seq__7631_7636 = G__7653;
chunk__7632_7637 = G__7654;
count__7633_7638 = G__7655;
i__7634_7639 = G__7656;
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__7664__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__7658 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7658,(0),null);
var kids = cljs.core.nth.call(null,vec__7658,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7659 = this$;
G__7659.hoplonIFn(attr,kids);

return G__7659;
} else {
var G__7660 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7660,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7660,kids);

return G__7660;
}
};
var G__7664 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__7665__i = 0, G__7665__a = new Array(arguments.length -  1);
while (G__7665__i < G__7665__a.length) {G__7665__a[G__7665__i] = arguments[G__7665__i + 1]; ++G__7665__i;}
  args = new cljs.core.IndexedSeq(G__7665__a,0);
} 
return G__7664__delegate.call(this,self__,args);};
G__7664.cljs$lang$maxFixedArity = 1;
G__7664.cljs$lang$applyTo = (function (arglist__7666){
var self__ = cljs.core.first(arglist__7666);
var args = cljs.core.rest(arglist__7666);
return G__7664__delegate(self__,args);
});
G__7664.cljs$core$IFn$_invoke$arity$variadic = G__7664__delegate;
return G__7664;
})()
;

Element.prototype.apply = (function (self__,args7657){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7657)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__7667__delegate = function (args){
var this$ = this;
var vec__7661 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7661,(0),null);
var kids = cljs.core.nth.call(null,vec__7661,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7662 = this$;
G__7662.hoplonIFn(attr,kids);

return G__7662;
} else {
var G__7663 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7663,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7663,kids);

return G__7663;
}
};
var G__7667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7668__i = 0, G__7668__a = new Array(arguments.length -  0);
while (G__7668__i < G__7668__a.length) {G__7668__a[G__7668__i] = arguments[G__7668__i + 0]; ++G__7668__i;}
  args = new cljs.core.IndexedSeq(G__7668__a,0);
} 
return G__7667__delegate.call(this,args);};
G__7667.cljs$lang$maxFixedArity = 0;
G__7667.cljs$lang$applyTo = (function (arglist__7669){
var args = cljs.core.seq(arglist__7669);
return G__7667__delegate(args);
});
G__7667.cljs$core$IFn$_invoke$arity$variadic = G__7667__delegate;
return G__7667;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__7680__delegate = function (args){
var vec__7675 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7675,(0),null);
var kids = cljs.core.nth.call(null,vec__7675,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__7676 = cljs.core.seq.call(null,kids);
var chunk__7677 = null;
var count__7678 = (0);
var i__7679 = (0);
while(true){
if((i__7679 < count__7678)){
var k = cljs.core._nth.call(null,chunk__7677,i__7679);
elem.appendChild(k);

var G__7681 = seq__7676;
var G__7682 = chunk__7677;
var G__7683 = count__7678;
var G__7684 = (i__7679 + (1));
seq__7676 = G__7681;
chunk__7677 = G__7682;
count__7678 = G__7683;
i__7679 = G__7684;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7676);
if(temp__4425__auto__){
var seq__7676__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7676__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7676__$1);
var G__7685 = cljs.core.chunk_rest.call(null,seq__7676__$1);
var G__7686 = c__5806__auto__;
var G__7687 = cljs.core.count.call(null,c__5806__auto__);
var G__7688 = (0);
seq__7676 = G__7685;
chunk__7677 = G__7686;
count__7678 = G__7687;
i__7679 = G__7688;
continue;
} else {
var k = cljs.core.first.call(null,seq__7676__$1);
elem.appendChild(k);

var G__7689 = cljs.core.next.call(null,seq__7676__$1);
var G__7690 = null;
var G__7691 = (0);
var G__7692 = (0);
seq__7676 = G__7689;
chunk__7677 = G__7690;
count__7678 = G__7691;
i__7679 = G__7692;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__7680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7693__i = 0, G__7693__a = new Array(arguments.length -  0);
while (G__7693__i < G__7693__a.length) {G__7693__a[G__7693__i] = arguments[G__7693__i + 0]; ++G__7693__i;}
  args = new cljs.core.IndexedSeq(G__7693__a,0);
} 
return G__7680__delegate.call(this,args);};
G__7680.cljs$lang$maxFixedArity = 0;
G__7680.cljs$lang$applyTo = (function (arglist__7694){
var args = cljs.core.seq(arglist__7694);
return G__7680__delegate(args);
});
G__7680.cljs$core$IFn$_invoke$arity$variadic = G__7680__delegate;
return G__7680;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__7695__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__7695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7696__i = 0, G__7696__a = new Array(arguments.length -  0);
while (G__7696__i < G__7696__a.length) {G__7696__a[G__7696__i] = arguments[G__7696__i + 0]; ++G__7696__i;}
  args = new cljs.core.IndexedSeq(G__7696__a,0);
} 
return G__7695__delegate.call(this,args);};
G__7695.cljs$lang$maxFixedArity = 0;
G__7695.cljs$lang$applyTo = (function (arglist__7697){
var args = cljs.core.seq(arglist__7697);
return G__7695__delegate(args);
});
G__7695.cljs$core$IFn$_invoke$arity$variadic = G__7695__delegate;
return G__7695;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___7700 = arguments.length;
var i__6062__auto___7701 = (0);
while(true){
if((i__6062__auto___7701 < len__6061__auto___7700)){
args__6068__auto__.push((arguments[i__6062__auto___7701]));

var G__7702 = (i__6062__auto___7701 + (1));
i__6062__auto___7701 = G__7702;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7699 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7699,(0),null);
var _ = cljs.core.nth.call(null,vec__7699,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq7698){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7698));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__7703_SHARP_){
return document.createTextNode(p1__7703_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__7704_SHARP_){
return document.createComment(p1__7704_SHARP_);
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
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__7705_SHARP_){
var e = jQuery(p1__7705_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__7705_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function tailrecursion$hoplon$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function tailrecursion$hoplon$val_id(id){
return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",305978217));
});
tailrecursion.hoplon.rel = (function tailrecursion$hoplon$rel(other,event){
var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());
var ox = os.call(null,"left");
var oy = os.call(null,"top");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",-1757859776),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function tailrecursion$hoplon$relx(other,event){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function tailrecursion$hoplon$rely(other,event){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function tailrecursion$hoplon$rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));

return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args7706 = [];
var len__6061__auto___7709 = arguments.length;
var i__6062__auto___7710 = (0);
while(true){
if((i__6062__auto___7710 < len__6061__auto___7709)){
args7706.push((arguments[i__6062__auto___7710]));

var G__7711 = (i__6062__auto___7710 + (1));
i__6062__auto___7710 = G__7711;
continue;
} else {
}
break;
}

var G__7708 = args7706.length;
switch (G__7708) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7706.length)].join('')));

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
var args7713 = [];
var len__6061__auto___7716 = arguments.length;
var i__6062__auto___7717 = (0);
while(true){
if((i__6062__auto___7717 < len__6061__auto___7716)){
args7713.push((arguments[i__6062__auto___7717]));

var G__7718 = (i__6062__auto___7717 + (1));
i__6062__auto___7717 = G__7718;
continue;
} else {
}
break;
}

var G__7715 = args7713.length;
switch (G__7715) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7713.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__7720__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__7720 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__7721__i = 0, G__7721__a = new Array(arguments.length -  2);
while (G__7721__i < G__7721__a.length) {G__7721__a[G__7721__i] = arguments[G__7721__i + 2]; ++G__7721__i;}
  args = new cljs.core.IndexedSeq(G__7721__a,0);
} 
return G__7720__delegate.call(this,elem,_,args);};
G__7720.cljs$lang$maxFixedArity = 2;
G__7720.cljs$lang$applyTo = (function (arglist__7722){
var elem = cljs.core.first(arglist__7722);
arglist__7722 = cljs.core.next(arglist__7722);
var _ = cljs.core.first(arglist__7722);
var args = cljs.core.rest(arglist__7722);
return G__7720__delegate(elem,_,args);
});
G__7720.cljs$core$IFn$_invoke$arity$variadic = G__7720__delegate;
return G__7720;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7723 = cljs.core.seq.call(null,kvs);
var chunk__7724 = null;
var count__7725 = (0);
var i__7726 = (0);
while(true){
if((i__7726 < count__7725)){
var vec__7727 = cljs.core._nth.call(null,chunk__7724,i__7726);
var k = cljs.core.nth.call(null,vec__7727,(0),null);
var v = cljs.core.nth.call(null,vec__7727,(1),null);
var k_7729__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7729__$1);
} else {
e.attr(k_7729__$1,((cljs.core._EQ_.call(null,true,v))?k_7729__$1:v));
}

var G__7730 = seq__7723;
var G__7731 = chunk__7724;
var G__7732 = count__7725;
var G__7733 = (i__7726 + (1));
seq__7723 = G__7730;
chunk__7724 = G__7731;
count__7725 = G__7732;
i__7726 = G__7733;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7723);
if(temp__4425__auto__){
var seq__7723__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7723__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7723__$1);
var G__7734 = cljs.core.chunk_rest.call(null,seq__7723__$1);
var G__7735 = c__5806__auto__;
var G__7736 = cljs.core.count.call(null,c__5806__auto__);
var G__7737 = (0);
seq__7723 = G__7734;
chunk__7724 = G__7735;
count__7725 = G__7736;
i__7726 = G__7737;
continue;
} else {
var vec__7728 = cljs.core.first.call(null,seq__7723__$1);
var k = cljs.core.nth.call(null,vec__7728,(0),null);
var v = cljs.core.nth.call(null,vec__7728,(1),null);
var k_7738__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7738__$1);
} else {
e.attr(k_7738__$1,((cljs.core._EQ_.call(null,true,v))?k_7738__$1:v));
}

var G__7739 = cljs.core.next.call(null,seq__7723__$1);
var G__7740 = null;
var G__7741 = (0);
var G__7742 = (0);
seq__7723 = G__7739;
chunk__7724 = G__7740;
count__7725 = G__7741;
i__7726 = G__7742;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__7743_SHARP_){
return cljs.core.zipmap.call(null,p1__7743_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__7744 = cljs.core.seq.call(null,clmap);
var chunk__7745 = null;
var count__7746 = (0);
var i__7747 = (0);
while(true){
if((i__7747 < count__7746)){
var vec__7748 = cljs.core._nth.call(null,chunk__7745,i__7747);
var c = cljs.core.nth.call(null,vec__7748,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7748,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7750 = seq__7744;
var G__7751 = chunk__7745;
var G__7752 = count__7746;
var G__7753 = (i__7747 + (1));
seq__7744 = G__7750;
chunk__7745 = G__7751;
count__7746 = G__7752;
i__7747 = G__7753;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7744);
if(temp__4425__auto__){
var seq__7744__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7744__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7744__$1);
var G__7754 = cljs.core.chunk_rest.call(null,seq__7744__$1);
var G__7755 = c__5806__auto__;
var G__7756 = cljs.core.count.call(null,c__5806__auto__);
var G__7757 = (0);
seq__7744 = G__7754;
chunk__7745 = G__7755;
count__7746 = G__7756;
i__7747 = G__7757;
continue;
} else {
var vec__7749 = cljs.core.first.call(null,seq__7744__$1);
var c = cljs.core.nth.call(null,vec__7749,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7749,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7758 = cljs.core.next.call(null,seq__7744__$1);
var G__7759 = null;
var G__7760 = (0);
var G__7761 = (0);
seq__7744 = G__7758;
chunk__7745 = G__7759;
count__7746 = G__7760;
i__7747 = G__7761;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7762 = cljs.core.seq.call(null,kvs);
var chunk__7763 = null;
var count__7764 = (0);
var i__7765 = (0);
while(true){
if((i__7765 < count__7764)){
var vec__7766 = cljs.core._nth.call(null,chunk__7763,i__7765);
var k = cljs.core.nth.call(null,vec__7766,(0),null);
var v = cljs.core.nth.call(null,vec__7766,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7768 = seq__7762;
var G__7769 = chunk__7763;
var G__7770 = count__7764;
var G__7771 = (i__7765 + (1));
seq__7762 = G__7768;
chunk__7763 = G__7769;
count__7764 = G__7770;
i__7765 = G__7771;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7762);
if(temp__4425__auto__){
var seq__7762__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7762__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7762__$1);
var G__7772 = cljs.core.chunk_rest.call(null,seq__7762__$1);
var G__7773 = c__5806__auto__;
var G__7774 = cljs.core.count.call(null,c__5806__auto__);
var G__7775 = (0);
seq__7762 = G__7772;
chunk__7763 = G__7773;
count__7764 = G__7774;
i__7765 = G__7775;
continue;
} else {
var vec__7767 = cljs.core.first.call(null,seq__7762__$1);
var k = cljs.core.nth.call(null,vec__7767,(0),null);
var v = cljs.core.nth.call(null,vec__7767,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7776 = cljs.core.next.call(null,seq__7762__$1);
var G__7777 = null;
var G__7778 = (0);
var G__7779 = (0);
seq__7762 = G__7776;
chunk__7763 = G__7777;
count__7764 = G__7778;
i__7765 = G__7779;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__7805,G__7806){
return G__7805.call(null,G__7806);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__7808,G__7807){
return G__7807.call(null,G__7808);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__7780_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__7809,G__7810){
return (G__7809 < G__7810);
});})(pool_size,items_seq,cur_count))
).call(null,p1__7780_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__7781_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__7813,G__7812,G__7811){
return G__7811.call(null,G__7812,G__7813);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,p1__7781_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__7827,G__7825,G__7820,G__7818,G__7819,G__7824,G__7826,G__7821,G__7823,G__7822){
if(cljs.core.truth_((G__7818 < G__7819))){
var seq__7814_7828 = cljs.core.seq.call(null,G__7820.call(null,G__7818,G__7819));
var chunk__7815_7829 = null;
var count__7816_7830 = (0);
var i__7817_7831 = (0);
while(true){
if(cljs.core.truth_((i__7817_7831 < count__7816_7830))){
var i_7832 = cljs.core._nth.call(null,chunk__7815_7829,i__7817_7831);
var e_7833 = G__7821.call(null,G__7822.call(null,i_7832)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__7823.call(null,i_7832));
if(cljs.core.not.call(null,G__7824)){
G__7825.appendChild(e_7833);
} else {
G__7825.insertBefore(e_7833,G__7825.firstChild);
}

var G__7834 = seq__7814_7828;
var G__7835 = chunk__7815_7829;
var G__7836 = count__7816_7830;
var G__7837 = (i__7817_7831 + (1));
seq__7814_7828 = G__7834;
chunk__7815_7829 = G__7835;
count__7816_7830 = G__7836;
i__7817_7831 = G__7837;
continue;
} else {
var temp__4425__auto___7838 = cljs.core.seq.call(null,seq__7814_7828);
if(temp__4425__auto___7838){
var seq__7814_7839__$1 = temp__4425__auto___7838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7814_7839__$1)){
var c__5806__auto___7840 = cljs.core.chunk_first.call(null,seq__7814_7839__$1);
var G__7841 = cljs.core.chunk_rest.call(null,seq__7814_7839__$1);
var G__7842 = c__5806__auto___7840;
var G__7843 = cljs.core.count.call(null,c__5806__auto___7840);
var G__7844 = (0);
seq__7814_7828 = G__7841;
chunk__7815_7829 = G__7842;
count__7816_7830 = G__7843;
i__7817_7831 = G__7844;
continue;
} else {
var i_7845 = cljs.core.first.call(null,seq__7814_7839__$1);
var e_7846 = G__7821.call(null,G__7822.call(null,i_7845)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__7823.call(null,i_7845));
if(cljs.core.not.call(null,G__7824)){
G__7825.appendChild(e_7846);
} else {
G__7825.insertBefore(e_7846,G__7825.firstChild);
}

var G__7847 = cljs.core.next.call(null,seq__7814_7839__$1);
var G__7848 = null;
var G__7849 = (0);
var G__7850 = (0);
seq__7814_7828 = G__7847;
chunk__7815_7829 = G__7848;
count__7816_7830 = G__7849;
i__7817_7831 = G__7850;
continue;
}
} else {
}
}
break;
}

return G__7826.call(null,G__7827,G__7819);
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
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
var args7851 = [];
var len__6061__auto___7863 = arguments.length;
var i__6062__auto___7864 = (0);
while(true){
if((i__6062__auto___7864 < len__6061__auto___7863)){
args7851.push((arguments[i__6062__auto___7864]));

var G__7865 = (i__6062__auto___7864 + (1));
i__6062__auto___7864 = G__7865;
continue;
} else {
}
break;
}

var G__7853 = args7851.length;
switch (G__7853) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7851.length)].join('')));

}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
var r = (function (){var ret__6423__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);
setInterval(((function (ret__6423__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,ret__6423__auto__,window.location.hash);
});})(ret__6423__auto__))
,(100));

return tailrecursion.javelin.formula.call(null,((function (ret__6423__auto__){
return (function (G__7854){
return G__7854;
});})(ret__6423__auto__))
).call(null,ret__6423__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__7856,G__7855){
if(cljs.core.truth_(G__7855.call(null,"",G__7856))){
return G__7856;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl))){
var setter__6424__auto__ = setter_or_dfl;
var callback__6425__auto__ = (function (){var or__5022__auto__ = null;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__6424__auto__,callback__6425__auto__){
return (function (G__7858,G__7857){
return G__7857.location.hash = G__7858;
});})(setter__6424__auto__,callback__6425__auto__))
).call(null,setter__6424__auto__,window);

setInterval(((function (setter__6424__auto__,callback__6425__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__6424__auto__),window.location.hash)){
callback__6425__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__6424__auto__);
} else {
return null;
}
});})(setter__6424__auto__,callback__6425__auto__))
,(100));

return setter__6424__auto__;
} else {
var r = tailrecursion.hoplon.route_cell.call(null);
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__7859,G__7860){
var or__5022__auto__ = G__7859;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__7860;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2 = (function (setter,callback){
var setter__6424__auto__ = setter;
var callback__6425__auto__ = (function (){var or__5022__auto__ = callback;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__6424__auto__,callback__6425__auto__){
return (function (G__7862,G__7861){
return G__7861.location.hash = G__7862;
});})(setter__6424__auto__,callback__6425__auto__))
).call(null,setter__6424__auto__,window);

setInterval(((function (setter__6424__auto__,callback__6425__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__6424__auto__),window.location.hash)){
callback__6425__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__6424__auto__);
} else {
return null;
}
});})(setter__6424__auto__,callback__6425__auto__))
,(100));

return setter__6424__auto__;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=hoplon.js.map