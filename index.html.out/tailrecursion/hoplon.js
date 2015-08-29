// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7486_SHARP_){
return (p1__7486_SHARP_ instanceof Node);
}):(function (p1__7487_SHARP_){
try{return p1__7487_SHARP_.nodeType;
}catch (e7488){if((e7488 instanceof Error)){
var _ = e7488;
return null;
} else {
throw e7488;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__7489_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__7489_SHARP_);
}catch (e7490){if((e7490 instanceof Error)){
var _ = e7490;
return null;
} else {
throw e7490;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__7491_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__7491_SHARP_);
}catch (e7492){if((e7492 instanceof Error)){
var _ = e7492;
return null;
} else {
throw e7492;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__7493_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__7493_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args7494 = [];
var len__6061__auto___7498 = arguments.length;
var i__6062__auto___7499 = (0);
while(true){
if((i__6062__auto___7499 < len__6061__auto___7498)){
args7494.push((arguments[i__6062__auto___7499]));

var G__7500 = (i__6062__auto___7499 + (1));
i__6062__auto___7499 = G__7500;
continue;
} else {
}
break;
}

var G__7496 = args7494.length;
switch (G__7496) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7494.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e7497){if((e7497 instanceof Error)){
var _ = e7497;
return not_found;
} else {
throw e7497;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args7502 = [];
var len__6061__auto___7505 = arguments.length;
var i__6062__auto___7506 = (0);
while(true){
if((i__6062__auto___7506 < len__6061__auto___7505)){
args7502.push((arguments[i__6062__auto___7506]));

var G__7507 = (i__6062__auto___7506 + (1));
i__6062__auto___7506 = G__7507;
continue;
} else {
}
break;
}

var G__7504 = args7502.length;
switch (G__7504) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7502.length)].join('')));

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
return cljs.core.mapcat.call(null,(function (p1__7509_SHARP_){
if(cljs.core.truth_((function (){var or__5022__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__7509_SHARP_);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__7509_SHARP_);
}
})())){
return tailrecursion$hoplon$unsplice.call(null,p1__7509_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7509_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__7512){
var vec__7514 = p__7512;
var head = cljs.core.nth.call(null,vec__7514,(0),null);
var tail = cljs.core.nthnext.call(null,vec__7514,(1));
var args = vec__7514;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__7514,head,tail,args){
return (function (p1__7510_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__7510_SHARP_)));
});})(kw1_QMARK_,vec__7514,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__7514,head,tail,args){
return (function (p1__7511_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__7511_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__7514,head,tail,args))
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
var key_STAR_ = (function (p1__7516_SHARP_,p2__7515_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__7515_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__7515_SHARP_),((!(cljs.core._EQ_.call(null,p1__7516_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__7517_SHARP_,p2__7518_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__7517_SHARP_,/ /)),clojure.string.split.call(null,p2__7518_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__7541_7559 = cljs.core.seq.call(null,attr);
var chunk__7542_7560 = null;
var count__7543_7561 = (0);
var i__7544_7562 = (0);
while(true){
if((i__7544_7562 < count__7543_7561)){
var vec__7545_7563 = cljs.core._nth.call(null,chunk__7542_7560,i__7544_7562);
var k_7564 = cljs.core.nth.call(null,vec__7545_7563,(0),null);
var v_7565 = cljs.core.nth.call(null,vec__7545_7563,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_7565))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_7564),v_7565);
} else {
if(cljs.core.fn_QMARK_.call(null,v_7565)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_7564),v_7565);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_7564),v_7565);

}
}

var G__7566 = seq__7541_7559;
var G__7567 = chunk__7542_7560;
var G__7568 = count__7543_7561;
var G__7569 = (i__7544_7562 + (1));
seq__7541_7559 = G__7566;
chunk__7542_7560 = G__7567;
count__7543_7561 = G__7568;
i__7544_7562 = G__7569;
continue;
} else {
var temp__4425__auto___7570 = cljs.core.seq.call(null,seq__7541_7559);
if(temp__4425__auto___7570){
var seq__7541_7571__$1 = temp__4425__auto___7570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7541_7571__$1)){
var c__5806__auto___7572 = cljs.core.chunk_first.call(null,seq__7541_7571__$1);
var G__7573 = cljs.core.chunk_rest.call(null,seq__7541_7571__$1);
var G__7574 = c__5806__auto___7572;
var G__7575 = cljs.core.count.call(null,c__5806__auto___7572);
var G__7576 = (0);
seq__7541_7559 = G__7573;
chunk__7542_7560 = G__7574;
count__7543_7561 = G__7575;
i__7544_7562 = G__7576;
continue;
} else {
var vec__7546_7577 = cljs.core.first.call(null,seq__7541_7571__$1);
var k_7578 = cljs.core.nth.call(null,vec__7546_7577,(0),null);
var v_7579 = cljs.core.nth.call(null,vec__7546_7577,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_7579))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_7578),v_7579);
} else {
if(cljs.core.fn_QMARK_.call(null,v_7579)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_7578),v_7579);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_7578),v_7579);

}
}

var G__7580 = cljs.core.next.call(null,seq__7541_7571__$1);
var G__7581 = null;
var G__7582 = (0);
var G__7583 = (0);
seq__7541_7559 = G__7580;
chunk__7542_7560 = G__7581;
count__7543_7561 = G__7582;
i__7544_7562 = G__7583;
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
var seq__7547 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__7548 = null;
var count__7549 = (0);
var i__7550 = (0);
while(true){
if((i__7550 < count__7549)){
var vec__7551 = cljs.core._nth.call(null,chunk__7548,i__7550);
var k = cljs.core.nth.call(null,vec__7551,(0),null);
var v = cljs.core.nth.call(null,vec__7551,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__7547,chunk__7548,count__7549,i__7550,vec__7551,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__7520_SHARP_,p2__7521_SHARP_,p3__7522_SHARP_,p4__7519_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__7519_SHARP_);
});})(seq__7547,chunk__7548,count__7549,i__7550,vec__7551,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__7584 = seq__7547;
var G__7585 = chunk__7548;
var G__7586 = count__7549;
var G__7587 = (i__7550 + (1));
seq__7547 = G__7584;
chunk__7548 = G__7585;
count__7549 = G__7586;
i__7550 = G__7587;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7547);
if(temp__4425__auto__){
var seq__7547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7547__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7547__$1);
var G__7588 = cljs.core.chunk_rest.call(null,seq__7547__$1);
var G__7589 = c__5806__auto__;
var G__7590 = cljs.core.count.call(null,c__5806__auto__);
var G__7591 = (0);
seq__7547 = G__7588;
chunk__7548 = G__7589;
count__7549 = G__7590;
i__7550 = G__7591;
continue;
} else {
var vec__7552 = cljs.core.first.call(null,seq__7547__$1);
var k = cljs.core.nth.call(null,vec__7552,(0),null);
var v = cljs.core.nth.call(null,vec__7552,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__7547,chunk__7548,count__7549,i__7550,vec__7552,k,v,seq__7547__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__7520_SHARP_,p2__7521_SHARP_,p3__7522_SHARP_,p4__7519_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__7519_SHARP_);
});})(seq__7547,chunk__7548,count__7549,i__7550,vec__7552,k,v,seq__7547__$1,temp__4425__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__7592 = cljs.core.next.call(null,seq__7547__$1);
var G__7593 = null;
var G__7594 = (0);
var G__7595 = (0);
seq__7547 = G__7592;
chunk__7548 = G__7593;
count__7549 = G__7594;
i__7550 = G__7595;
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
var seq__7553 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__7554 = null;
var count__7555 = (0);
var i__7556 = (0);
while(true){
if((i__7556 < count__7555)){
var vec__7557 = cljs.core._nth.call(null,chunk__7554,i__7556);
var k = cljs.core.nth.call(null,vec__7557,(0),null);
var v = cljs.core.nth.call(null,vec__7557,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__7596 = seq__7553;
var G__7597 = chunk__7554;
var G__7598 = count__7555;
var G__7599 = (i__7556 + (1));
seq__7553 = G__7596;
chunk__7554 = G__7597;
count__7555 = G__7598;
i__7556 = G__7599;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7553);
if(temp__4425__auto__){
var seq__7553__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7553__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7553__$1);
var G__7600 = cljs.core.chunk_rest.call(null,seq__7553__$1);
var G__7601 = c__5806__auto__;
var G__7602 = cljs.core.count.call(null,c__5806__auto__);
var G__7603 = (0);
seq__7553 = G__7600;
chunk__7554 = G__7601;
count__7555 = G__7602;
i__7556 = G__7603;
continue;
} else {
var vec__7558 = cljs.core.first.call(null,seq__7553__$1);
var k = cljs.core.nth.call(null,vec__7558,(0),null);
var v = cljs.core.nth.call(null,vec__7558,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__7604 = cljs.core.next.call(null,seq__7553__$1);
var G__7605 = null;
var G__7606 = (0);
var G__7607 = (0);
seq__7553 = G__7604;
chunk__7554 = G__7605;
count__7555 = G__7606;
i__7556 = G__7607;
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7608_SHARP_,p2__7609_SHARP_){
return p1__7608_SHARP_.appendChild(p2__7609_SHARP_);
}):(function (p1__7610_SHARP_,p2__7611_SHARP_){
try{return p1__7610_SHARP_.appendChild(p2__7611_SHARP_);
}catch (e7612){if((e7612 instanceof Error)){
var _ = e7612;
return null;
} else {
throw e7612;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__7618){
var vec__7624 = p__7618;
var child_cell = cljs.core.nth.call(null,vec__7624,(0),null);
var _ = cljs.core.nthnext.call(null,vec__7624,(1));
var kids = vec__7624;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__7624,child_cell,_,kids){
return (function (p1__7614_SHARP_,p2__7615_SHARP_,p3__7616_SHARP_,p4__7613_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__7613_SHARP_);
});})(vec__7624,child_cell,_,kids))
);
} else {
var node_7629 = ((function (vec__7624,child_cell,_,kids){
return (function (p1__7617_SHARP_){
if(typeof p1__7617_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__7617_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__7617_SHARP_))){
return p1__7617_SHARP_;
} else {
return null;
}
}
});})(vec__7624,child_cell,_,kids))
;
var seq__7625_7630 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_7629,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__7626_7631 = null;
var count__7627_7632 = (0);
var i__7628_7633 = (0);
while(true){
if((i__7628_7633 < count__7627_7632)){
var x_7634 = cljs.core._nth.call(null,chunk__7626_7631,i__7628_7633);
tailrecursion.hoplon.append_child.call(null,this$,x_7634);

var G__7635 = seq__7625_7630;
var G__7636 = chunk__7626_7631;
var G__7637 = count__7627_7632;
var G__7638 = (i__7628_7633 + (1));
seq__7625_7630 = G__7635;
chunk__7626_7631 = G__7636;
count__7627_7632 = G__7637;
i__7628_7633 = G__7638;
continue;
} else {
var temp__4425__auto___7639 = cljs.core.seq.call(null,seq__7625_7630);
if(temp__4425__auto___7639){
var seq__7625_7640__$1 = temp__4425__auto___7639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7625_7640__$1)){
var c__5806__auto___7641 = cljs.core.chunk_first.call(null,seq__7625_7640__$1);
var G__7642 = cljs.core.chunk_rest.call(null,seq__7625_7640__$1);
var G__7643 = c__5806__auto___7641;
var G__7644 = cljs.core.count.call(null,c__5806__auto___7641);
var G__7645 = (0);
seq__7625_7630 = G__7642;
chunk__7626_7631 = G__7643;
count__7627_7632 = G__7644;
i__7628_7633 = G__7645;
continue;
} else {
var x_7646 = cljs.core.first.call(null,seq__7625_7640__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_7646);

var G__7647 = cljs.core.next.call(null,seq__7625_7640__$1);
var G__7648 = null;
var G__7649 = (0);
var G__7650 = (0);
seq__7625_7630 = G__7647;
chunk__7626_7631 = G__7648;
count__7627_7632 = G__7649;
i__7628_7633 = G__7650;
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
var G__7658__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__7652 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7652,(0),null);
var kids = cljs.core.nth.call(null,vec__7652,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7653 = this$;
G__7653.hoplonIFn(attr,kids);

return G__7653;
} else {
var G__7654 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7654,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7654,kids);

return G__7654;
}
};
var G__7658 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__7659__i = 0, G__7659__a = new Array(arguments.length -  1);
while (G__7659__i < G__7659__a.length) {G__7659__a[G__7659__i] = arguments[G__7659__i + 1]; ++G__7659__i;}
  args = new cljs.core.IndexedSeq(G__7659__a,0);
} 
return G__7658__delegate.call(this,self__,args);};
G__7658.cljs$lang$maxFixedArity = 1;
G__7658.cljs$lang$applyTo = (function (arglist__7660){
var self__ = cljs.core.first(arglist__7660);
var args = cljs.core.rest(arglist__7660);
return G__7658__delegate(self__,args);
});
G__7658.cljs$core$IFn$_invoke$arity$variadic = G__7658__delegate;
return G__7658;
})()
;

Element.prototype.apply = (function (self__,args7651){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7651)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__7661__delegate = function (args){
var this$ = this;
var vec__7655 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7655,(0),null);
var kids = cljs.core.nth.call(null,vec__7655,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7656 = this$;
G__7656.hoplonIFn(attr,kids);

return G__7656;
} else {
var G__7657 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7657,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7657,kids);

return G__7657;
}
};
var G__7661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7662__i = 0, G__7662__a = new Array(arguments.length -  0);
while (G__7662__i < G__7662__a.length) {G__7662__a[G__7662__i] = arguments[G__7662__i + 0]; ++G__7662__i;}
  args = new cljs.core.IndexedSeq(G__7662__a,0);
} 
return G__7661__delegate.call(this,args);};
G__7661.cljs$lang$maxFixedArity = 0;
G__7661.cljs$lang$applyTo = (function (arglist__7663){
var args = cljs.core.seq(arglist__7663);
return G__7661__delegate(args);
});
G__7661.cljs$core$IFn$_invoke$arity$variadic = G__7661__delegate;
return G__7661;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__7674__delegate = function (args){
var vec__7669 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7669,(0),null);
var kids = cljs.core.nth.call(null,vec__7669,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__7670 = cljs.core.seq.call(null,kids);
var chunk__7671 = null;
var count__7672 = (0);
var i__7673 = (0);
while(true){
if((i__7673 < count__7672)){
var k = cljs.core._nth.call(null,chunk__7671,i__7673);
elem.appendChild(k);

var G__7675 = seq__7670;
var G__7676 = chunk__7671;
var G__7677 = count__7672;
var G__7678 = (i__7673 + (1));
seq__7670 = G__7675;
chunk__7671 = G__7676;
count__7672 = G__7677;
i__7673 = G__7678;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7670);
if(temp__4425__auto__){
var seq__7670__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7670__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7670__$1);
var G__7679 = cljs.core.chunk_rest.call(null,seq__7670__$1);
var G__7680 = c__5806__auto__;
var G__7681 = cljs.core.count.call(null,c__5806__auto__);
var G__7682 = (0);
seq__7670 = G__7679;
chunk__7671 = G__7680;
count__7672 = G__7681;
i__7673 = G__7682;
continue;
} else {
var k = cljs.core.first.call(null,seq__7670__$1);
elem.appendChild(k);

var G__7683 = cljs.core.next.call(null,seq__7670__$1);
var G__7684 = null;
var G__7685 = (0);
var G__7686 = (0);
seq__7670 = G__7683;
chunk__7671 = G__7684;
count__7672 = G__7685;
i__7673 = G__7686;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__7674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7687__i = 0, G__7687__a = new Array(arguments.length -  0);
while (G__7687__i < G__7687__a.length) {G__7687__a[G__7687__i] = arguments[G__7687__i + 0]; ++G__7687__i;}
  args = new cljs.core.IndexedSeq(G__7687__a,0);
} 
return G__7674__delegate.call(this,args);};
G__7674.cljs$lang$maxFixedArity = 0;
G__7674.cljs$lang$applyTo = (function (arglist__7688){
var args = cljs.core.seq(arglist__7688);
return G__7674__delegate(args);
});
G__7674.cljs$core$IFn$_invoke$arity$variadic = G__7674__delegate;
return G__7674;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__7689__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__7689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7690__i = 0, G__7690__a = new Array(arguments.length -  0);
while (G__7690__i < G__7690__a.length) {G__7690__a[G__7690__i] = arguments[G__7690__i + 0]; ++G__7690__i;}
  args = new cljs.core.IndexedSeq(G__7690__a,0);
} 
return G__7689__delegate.call(this,args);};
G__7689.cljs$lang$maxFixedArity = 0;
G__7689.cljs$lang$applyTo = (function (arglist__7691){
var args = cljs.core.seq(arglist__7691);
return G__7689__delegate(args);
});
G__7689.cljs$core$IFn$_invoke$arity$variadic = G__7689__delegate;
return G__7689;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___7694 = arguments.length;
var i__6062__auto___7695 = (0);
while(true){
if((i__6062__auto___7695 < len__6061__auto___7694)){
args__6068__auto__.push((arguments[i__6062__auto___7695]));

var G__7696 = (i__6062__auto___7695 + (1));
i__6062__auto___7695 = G__7696;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7693 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7693,(0),null);
var _ = cljs.core.nth.call(null,vec__7693,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq7692){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7692));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__7697_SHARP_){
return document.createTextNode(p1__7697_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__7698_SHARP_){
return document.createComment(p1__7698_SHARP_);
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
return jQuery("body").on("submit",(function (p1__7699_SHARP_){
var e = jQuery(p1__7699_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__7699_SHARP_.preventDefault();
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
var args7700 = [];
var len__6061__auto___7703 = arguments.length;
var i__6062__auto___7704 = (0);
while(true){
if((i__6062__auto___7704 < len__6061__auto___7703)){
args7700.push((arguments[i__6062__auto___7704]));

var G__7705 = (i__6062__auto___7704 + (1));
i__6062__auto___7704 = G__7705;
continue;
} else {
}
break;
}

var G__7702 = args7700.length;
switch (G__7702) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7700.length)].join('')));

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
var args7707 = [];
var len__6061__auto___7710 = arguments.length;
var i__6062__auto___7711 = (0);
while(true){
if((i__6062__auto___7711 < len__6061__auto___7710)){
args7707.push((arguments[i__6062__auto___7711]));

var G__7712 = (i__6062__auto___7711 + (1));
i__6062__auto___7711 = G__7712;
continue;
} else {
}
break;
}

var G__7709 = args7707.length;
switch (G__7709) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7707.length)].join('')));

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
var G__7714__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__7714 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__7715__i = 0, G__7715__a = new Array(arguments.length -  2);
while (G__7715__i < G__7715__a.length) {G__7715__a[G__7715__i] = arguments[G__7715__i + 2]; ++G__7715__i;}
  args = new cljs.core.IndexedSeq(G__7715__a,0);
} 
return G__7714__delegate.call(this,elem,_,args);};
G__7714.cljs$lang$maxFixedArity = 2;
G__7714.cljs$lang$applyTo = (function (arglist__7716){
var elem = cljs.core.first(arglist__7716);
arglist__7716 = cljs.core.next(arglist__7716);
var _ = cljs.core.first(arglist__7716);
var args = cljs.core.rest(arglist__7716);
return G__7714__delegate(elem,_,args);
});
G__7714.cljs$core$IFn$_invoke$arity$variadic = G__7714__delegate;
return G__7714;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7717 = cljs.core.seq.call(null,kvs);
var chunk__7718 = null;
var count__7719 = (0);
var i__7720 = (0);
while(true){
if((i__7720 < count__7719)){
var vec__7721 = cljs.core._nth.call(null,chunk__7718,i__7720);
var k = cljs.core.nth.call(null,vec__7721,(0),null);
var v = cljs.core.nth.call(null,vec__7721,(1),null);
var k_7723__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7723__$1);
} else {
e.attr(k_7723__$1,((cljs.core._EQ_.call(null,true,v))?k_7723__$1:v));
}

var G__7724 = seq__7717;
var G__7725 = chunk__7718;
var G__7726 = count__7719;
var G__7727 = (i__7720 + (1));
seq__7717 = G__7724;
chunk__7718 = G__7725;
count__7719 = G__7726;
i__7720 = G__7727;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7717);
if(temp__4425__auto__){
var seq__7717__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7717__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7717__$1);
var G__7728 = cljs.core.chunk_rest.call(null,seq__7717__$1);
var G__7729 = c__5806__auto__;
var G__7730 = cljs.core.count.call(null,c__5806__auto__);
var G__7731 = (0);
seq__7717 = G__7728;
chunk__7718 = G__7729;
count__7719 = G__7730;
i__7720 = G__7731;
continue;
} else {
var vec__7722 = cljs.core.first.call(null,seq__7717__$1);
var k = cljs.core.nth.call(null,vec__7722,(0),null);
var v = cljs.core.nth.call(null,vec__7722,(1),null);
var k_7732__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7732__$1);
} else {
e.attr(k_7732__$1,((cljs.core._EQ_.call(null,true,v))?k_7732__$1:v));
}

var G__7733 = cljs.core.next.call(null,seq__7717__$1);
var G__7734 = null;
var G__7735 = (0);
var G__7736 = (0);
seq__7717 = G__7733;
chunk__7718 = G__7734;
count__7719 = G__7735;
i__7720 = G__7736;
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
return (function (p1__7737_SHARP_){
return cljs.core.zipmap.call(null,p1__7737_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__7738 = cljs.core.seq.call(null,clmap);
var chunk__7739 = null;
var count__7740 = (0);
var i__7741 = (0);
while(true){
if((i__7741 < count__7740)){
var vec__7742 = cljs.core._nth.call(null,chunk__7739,i__7741);
var c = cljs.core.nth.call(null,vec__7742,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7742,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7744 = seq__7738;
var G__7745 = chunk__7739;
var G__7746 = count__7740;
var G__7747 = (i__7741 + (1));
seq__7738 = G__7744;
chunk__7739 = G__7745;
count__7740 = G__7746;
i__7741 = G__7747;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7738);
if(temp__4425__auto__){
var seq__7738__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7738__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7738__$1);
var G__7748 = cljs.core.chunk_rest.call(null,seq__7738__$1);
var G__7749 = c__5806__auto__;
var G__7750 = cljs.core.count.call(null,c__5806__auto__);
var G__7751 = (0);
seq__7738 = G__7748;
chunk__7739 = G__7749;
count__7740 = G__7750;
i__7741 = G__7751;
continue;
} else {
var vec__7743 = cljs.core.first.call(null,seq__7738__$1);
var c = cljs.core.nth.call(null,vec__7743,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7743,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7752 = cljs.core.next.call(null,seq__7738__$1);
var G__7753 = null;
var G__7754 = (0);
var G__7755 = (0);
seq__7738 = G__7752;
chunk__7739 = G__7753;
count__7740 = G__7754;
i__7741 = G__7755;
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
var seq__7756 = cljs.core.seq.call(null,kvs);
var chunk__7757 = null;
var count__7758 = (0);
var i__7759 = (0);
while(true){
if((i__7759 < count__7758)){
var vec__7760 = cljs.core._nth.call(null,chunk__7757,i__7759);
var k = cljs.core.nth.call(null,vec__7760,(0),null);
var v = cljs.core.nth.call(null,vec__7760,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7762 = seq__7756;
var G__7763 = chunk__7757;
var G__7764 = count__7758;
var G__7765 = (i__7759 + (1));
seq__7756 = G__7762;
chunk__7757 = G__7763;
count__7758 = G__7764;
i__7759 = G__7765;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7756);
if(temp__4425__auto__){
var seq__7756__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7756__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7756__$1);
var G__7766 = cljs.core.chunk_rest.call(null,seq__7756__$1);
var G__7767 = c__5806__auto__;
var G__7768 = cljs.core.count.call(null,c__5806__auto__);
var G__7769 = (0);
seq__7756 = G__7766;
chunk__7757 = G__7767;
count__7758 = G__7768;
i__7759 = G__7769;
continue;
} else {
var vec__7761 = cljs.core.first.call(null,seq__7756__$1);
var k = cljs.core.nth.call(null,vec__7761,(0),null);
var v = cljs.core.nth.call(null,vec__7761,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7770 = cljs.core.next.call(null,seq__7756__$1);
var G__7771 = null;
var G__7772 = (0);
var G__7773 = (0);
seq__7756 = G__7770;
chunk__7757 = G__7771;
count__7758 = G__7772;
i__7759 = G__7773;
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
return (function (G__7799,G__7800){
return G__7799.call(null,G__7800);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__7802,G__7801){
return G__7801.call(null,G__7802);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__7774_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__7803,G__7804){
return (G__7803 < G__7804);
});})(pool_size,items_seq,cur_count))
).call(null,p1__7774_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__7775_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__7806,G__7807,G__7805){
return G__7805.call(null,G__7806,G__7807);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__7775_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__7821,G__7819,G__7814,G__7812,G__7813,G__7818,G__7820,G__7815,G__7817,G__7816){
if(cljs.core.truth_((G__7812 < G__7813))){
var seq__7808_7822 = cljs.core.seq.call(null,G__7814.call(null,G__7812,G__7813));
var chunk__7809_7823 = null;
var count__7810_7824 = (0);
var i__7811_7825 = (0);
while(true){
if(cljs.core.truth_((i__7811_7825 < count__7810_7824))){
var i_7826 = cljs.core._nth.call(null,chunk__7809_7823,i__7811_7825);
var e_7827 = G__7815.call(null,G__7816.call(null,i_7826)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__7817.call(null,i_7826));
if(cljs.core.not.call(null,G__7818)){
G__7819.appendChild(e_7827);
} else {
G__7819.insertBefore(e_7827,G__7819.firstChild);
}

var G__7828 = seq__7808_7822;
var G__7829 = chunk__7809_7823;
var G__7830 = count__7810_7824;
var G__7831 = (i__7811_7825 + (1));
seq__7808_7822 = G__7828;
chunk__7809_7823 = G__7829;
count__7810_7824 = G__7830;
i__7811_7825 = G__7831;
continue;
} else {
var temp__4425__auto___7832 = cljs.core.seq.call(null,seq__7808_7822);
if(temp__4425__auto___7832){
var seq__7808_7833__$1 = temp__4425__auto___7832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7808_7833__$1)){
var c__5806__auto___7834 = cljs.core.chunk_first.call(null,seq__7808_7833__$1);
var G__7835 = cljs.core.chunk_rest.call(null,seq__7808_7833__$1);
var G__7836 = c__5806__auto___7834;
var G__7837 = cljs.core.count.call(null,c__5806__auto___7834);
var G__7838 = (0);
seq__7808_7822 = G__7835;
chunk__7809_7823 = G__7836;
count__7810_7824 = G__7837;
i__7811_7825 = G__7838;
continue;
} else {
var i_7839 = cljs.core.first.call(null,seq__7808_7833__$1);
var e_7840 = G__7815.call(null,G__7816.call(null,i_7839)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__7817.call(null,i_7839));
if(cljs.core.not.call(null,G__7818)){
G__7819.appendChild(e_7840);
} else {
G__7819.insertBefore(e_7840,G__7819.firstChild);
}

var G__7841 = cljs.core.next.call(null,seq__7808_7833__$1);
var G__7842 = null;
var G__7843 = (0);
var G__7844 = (0);
seq__7808_7822 = G__7841;
chunk__7809_7823 = G__7842;
count__7810_7824 = G__7843;
i__7811_7825 = G__7844;
continue;
}
} else {
}
}
break;
}

return G__7820.call(null,G__7821,G__7813);
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
var args7845 = [];
var len__6061__auto___7857 = arguments.length;
var i__6062__auto___7858 = (0);
while(true){
if((i__6062__auto___7858 < len__6061__auto___7857)){
args7845.push((arguments[i__6062__auto___7858]));

var G__7859 = (i__6062__auto___7858 + (1));
i__6062__auto___7858 = G__7859;
continue;
} else {
}
break;
}

var G__7847 = args7845.length;
switch (G__7847) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7845.length)].join('')));

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
return (function (G__7848){
return G__7848;
});})(ret__6423__auto__))
).call(null,ret__6423__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__7850,G__7849){
if(cljs.core.truth_(G__7849.call(null,"",G__7850))){
return G__7850;
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
return (function (G__7852,G__7851){
return G__7851.location.hash = G__7852;
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
return (function (G__7853,G__7854){
var or__5022__auto__ = G__7853;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__7854;
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
return (function (G__7856,G__7855){
return G__7855.location.hash = G__7856;
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