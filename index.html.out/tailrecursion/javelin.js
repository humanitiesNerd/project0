// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$propagate,pri_map], 0));
} else {
}

var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__9107 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9105_SHARP_,p2__9106_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9105_SHARP_,p2__9106_SHARP_,p2__9106_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9107;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : tailrecursion.javelin.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e9109){if((e9109 instanceof Error)){
var _ = e9109;
return null;
} else {
throw e9109;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__9112 = c;
tailrecursion.javelin.add_sync_BANG_(G__9112);

return G__9112;
} else {
var G__9113 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__9113));

return G__9113;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9122 = arguments.length;
var i__6062__auto___9123 = (0);
while(true){
if((i__6062__auto___9123 < len__6061__auto___9122)){
args__6068__auto__.push((arguments[i__6062__auto___9123]));

var G__9124 = (i__6062__auto___9123 + (1));
i__6062__auto___9123 = G__9124;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9116){
var vec__9117 = p__9116;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9117,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9118 = cljs.core.seq(srcs);
var chunk__9119 = null;
var count__9120 = (0);
var i__9121 = (0);
while(true){
if((i__9121 < count__9120)){
var src = chunk__9119.cljs$core$IIndexed$_nth$arity$2(null,i__9121);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9125 = seq__9118;
var G__9126 = chunk__9119;
var G__9127 = count__9120;
var G__9128 = (i__9121 + (1));
seq__9118 = G__9125;
chunk__9119 = G__9126;
count__9120 = G__9127;
i__9121 = G__9128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9118);
if(temp__4425__auto__){
var seq__9118__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9118__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9118__$1);
var G__9129 = cljs.core.chunk_rest(seq__9118__$1);
var G__9130 = c__5806__auto__;
var G__9131 = cljs.core.count(c__5806__auto__);
var G__9132 = (0);
seq__9118 = G__9129;
chunk__9119 = G__9130;
count__9120 = G__9131;
i__9121 = G__9132;
continue;
} else {
var src = cljs.core.first(seq__9118__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9133 = cljs.core.next(seq__9118__$1);
var G__9134 = null;
var G__9135 = (0);
var G__9136 = (0);
seq__9118 = G__9133;
chunk__9119 = G__9134;
count__9120 = G__9135;
i__9121 = G__9136;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9114){
var G__9115 = cljs.core.first(seq9114);
var seq9114__$1 = cljs.core.next(seq9114);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9115,seq9114__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9155 = arguments.length;
var i__6062__auto___9156 = (0);
while(true){
if((i__6062__auto___9156 < len__6061__auto___9155)){
args__6068__auto__.push((arguments[i__6062__auto___9156]));

var G__9157 = (i__6062__auto___9156 + (1));
i__6062__auto___9156 = G__9157;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9141){
var vec__9142 = p__9141;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9142,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9142,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9143_9158 = cljs.core.seq(this$.sources);
var chunk__9144_9159 = null;
var count__9145_9160 = (0);
var i__9146_9161 = (0);
while(true){
if((i__9146_9161 < count__9145_9160)){
var source_9162 = chunk__9144_9159.cljs$core$IIndexed$_nth$arity$2(null,i__9146_9161);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9162) : tailrecursion.javelin.cell_QMARK_.call(null,source_9162)))){
source_9162.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9162.sinks,this$);

if((source_9162.rank > this$.rank)){
var seq__9147_9163 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9143_9158,chunk__9144_9159,count__9145_9160,i__9146_9161,source_9162,vec__9142,f,sources){
return (function (p1__9137_SHARP_){
return p1__9137_SHARP_.sinks;
});})(seq__9143_9158,chunk__9144_9159,count__9145_9160,i__9146_9161,source_9162,vec__9142,f,sources))
,source_9162));
var chunk__9148_9164 = null;
var count__9149_9165 = (0);
var i__9150_9166 = (0);
while(true){
if((i__9150_9166 < count__9149_9165)){
var dep_9167 = chunk__9148_9164.cljs$core$IIndexed$_nth$arity$2(null,i__9150_9166);
dep_9167.rank = tailrecursion.javelin.next_rank();

var G__9168 = seq__9147_9163;
var G__9169 = chunk__9148_9164;
var G__9170 = count__9149_9165;
var G__9171 = (i__9150_9166 + (1));
seq__9147_9163 = G__9168;
chunk__9148_9164 = G__9169;
count__9149_9165 = G__9170;
i__9150_9166 = G__9171;
continue;
} else {
var temp__4425__auto___9172 = cljs.core.seq(seq__9147_9163);
if(temp__4425__auto___9172){
var seq__9147_9173__$1 = temp__4425__auto___9172;
if(cljs.core.chunked_seq_QMARK_(seq__9147_9173__$1)){
var c__5806__auto___9174 = cljs.core.chunk_first(seq__9147_9173__$1);
var G__9175 = cljs.core.chunk_rest(seq__9147_9173__$1);
var G__9176 = c__5806__auto___9174;
var G__9177 = cljs.core.count(c__5806__auto___9174);
var G__9178 = (0);
seq__9147_9163 = G__9175;
chunk__9148_9164 = G__9176;
count__9149_9165 = G__9177;
i__9150_9166 = G__9178;
continue;
} else {
var dep_9179 = cljs.core.first(seq__9147_9173__$1);
dep_9179.rank = tailrecursion.javelin.next_rank();

var G__9180 = cljs.core.next(seq__9147_9173__$1);
var G__9181 = null;
var G__9182 = (0);
var G__9183 = (0);
seq__9147_9163 = G__9180;
chunk__9148_9164 = G__9181;
count__9149_9165 = G__9182;
i__9150_9166 = G__9183;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__9184 = seq__9143_9158;
var G__9185 = chunk__9144_9159;
var G__9186 = count__9145_9160;
var G__9187 = (i__9146_9161 + (1));
seq__9143_9158 = G__9184;
chunk__9144_9159 = G__9185;
count__9145_9160 = G__9186;
i__9146_9161 = G__9187;
continue;
} else {
var temp__4425__auto___9188 = cljs.core.seq(seq__9143_9158);
if(temp__4425__auto___9188){
var seq__9143_9189__$1 = temp__4425__auto___9188;
if(cljs.core.chunked_seq_QMARK_(seq__9143_9189__$1)){
var c__5806__auto___9190 = cljs.core.chunk_first(seq__9143_9189__$1);
var G__9191 = cljs.core.chunk_rest(seq__9143_9189__$1);
var G__9192 = c__5806__auto___9190;
var G__9193 = cljs.core.count(c__5806__auto___9190);
var G__9194 = (0);
seq__9143_9158 = G__9191;
chunk__9144_9159 = G__9192;
count__9145_9160 = G__9193;
i__9146_9161 = G__9194;
continue;
} else {
var source_9195 = cljs.core.first(seq__9143_9189__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9195) : tailrecursion.javelin.cell_QMARK_.call(null,source_9195)))){
source_9195.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9195.sinks,this$);

if((source_9195.rank > this$.rank)){
var seq__9151_9196 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9143_9158,chunk__9144_9159,count__9145_9160,i__9146_9161,source_9195,seq__9143_9189__$1,temp__4425__auto___9188,vec__9142,f,sources){
return (function (p1__9137_SHARP_){
return p1__9137_SHARP_.sinks;
});})(seq__9143_9158,chunk__9144_9159,count__9145_9160,i__9146_9161,source_9195,seq__9143_9189__$1,temp__4425__auto___9188,vec__9142,f,sources))
,source_9195));
var chunk__9152_9197 = null;
var count__9153_9198 = (0);
var i__9154_9199 = (0);
while(true){
if((i__9154_9199 < count__9153_9198)){
var dep_9200 = chunk__9152_9197.cljs$core$IIndexed$_nth$arity$2(null,i__9154_9199);
dep_9200.rank = tailrecursion.javelin.next_rank();

var G__9201 = seq__9151_9196;
var G__9202 = chunk__9152_9197;
var G__9203 = count__9153_9198;
var G__9204 = (i__9154_9199 + (1));
seq__9151_9196 = G__9201;
chunk__9152_9197 = G__9202;
count__9153_9198 = G__9203;
i__9154_9199 = G__9204;
continue;
} else {
var temp__4425__auto___9205__$1 = cljs.core.seq(seq__9151_9196);
if(temp__4425__auto___9205__$1){
var seq__9151_9206__$1 = temp__4425__auto___9205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9151_9206__$1)){
var c__5806__auto___9207 = cljs.core.chunk_first(seq__9151_9206__$1);
var G__9208 = cljs.core.chunk_rest(seq__9151_9206__$1);
var G__9209 = c__5806__auto___9207;
var G__9210 = cljs.core.count(c__5806__auto___9207);
var G__9211 = (0);
seq__9151_9196 = G__9208;
chunk__9152_9197 = G__9209;
count__9153_9198 = G__9210;
i__9154_9199 = G__9211;
continue;
} else {
var dep_9212 = cljs.core.first(seq__9151_9206__$1);
dep_9212.rank = tailrecursion.javelin.next_rank();

var G__9213 = cljs.core.next(seq__9151_9206__$1);
var G__9214 = null;
var G__9215 = (0);
var G__9216 = (0);
seq__9151_9196 = G__9213;
chunk__9152_9197 = G__9214;
count__9153_9198 = G__9215;
i__9154_9199 = G__9216;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__9217 = cljs.core.next(seq__9143_9189__$1);
var G__9218 = null;
var G__9219 = (0);
var G__9220 = (0);
seq__9143_9158 = G__9217;
chunk__9144_9159 = G__9218;
count__9145_9160 = G__9219;
i__9146_9161 = G__9220;
continue;
}
} else {
}
}
break;
}

var compute_9221 = ((function (vec__9142,f,sources){
return (function (p1__9138_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9138_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9138_SHARP_)));
});})(vec__9142,f,sources))
;
this$.thunk = ((function (compute_9221,vec__9142,f,sources){
return (function (){
return this$.state = compute_9221(this$.sources);
});})(compute_9221,vec__9142,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq9139){
var G__9140 = cljs.core.first(seq9139);
var seq9139__$1 = cljs.core.next(seq9139);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9140,seq9139__$1);
});

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : tailrecursion.javelin.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : tailrecursion.javelin.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__9223 = this$__$1;
var G__9224 = (function (){var G__9225 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9225) : f.call(null,G__9225));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9223,G__9224) : cljs.core.reset_BANG_.call(null,G__9223,G__9224));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9228 = this$__$1;
var G__9229 = (function (){var G__9230 = this$__$1.state;
var G__9231 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9230,G__9231) : f.call(null,G__9230,G__9231));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9228,G__9229) : cljs.core.reset_BANG_.call(null,G__9228,G__9229));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9235 = this$__$1;
var G__9236 = (function (){var G__9237 = this$__$1.state;
var G__9238 = a;
var G__9239 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9237,G__9238,G__9239) : f.call(null,G__9237,G__9238,G__9239));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9235,G__9236) : cljs.core.reset_BANG_.call(null,G__9235,G__9236));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9240 = this$__$1;
var G__9241 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9240,G__9241) : cljs.core.reset_BANG_.call(null,G__9240,G__9241));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9242 = cljs.core.seq(self__.watches);
var chunk__9243 = null;
var count__9244 = (0);
var i__9245 = (0);
while(true){
if((i__9245 < count__9244)){
var vec__9246 = chunk__9243.cljs$core$IIndexed$_nth$arity$2(null,i__9245);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9246,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9246,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9248 = seq__9242;
var G__9249 = chunk__9243;
var G__9250 = count__9244;
var G__9251 = (i__9245 + (1));
seq__9242 = G__9248;
chunk__9243 = G__9249;
count__9244 = G__9250;
i__9245 = G__9251;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9242);
if(temp__4425__auto__){
var seq__9242__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9242__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9242__$1);
var G__9252 = cljs.core.chunk_rest(seq__9242__$1);
var G__9253 = c__5806__auto__;
var G__9254 = cljs.core.count(c__5806__auto__);
var G__9255 = (0);
seq__9242 = G__9252;
chunk__9243 = G__9253;
count__9244 = G__9254;
i__9245 = G__9255;
continue;
} else {
var vec__9247 = cljs.core.first(seq__9242__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9247,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9247,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9256 = cljs.core.next(seq__9242__$1);
var G__9257 = null;
var G__9258 = (0);
var G__9259 = (0);
seq__9242 = G__9256;
chunk__9243 = G__9257;
count__9244 = G__9258;
i__9245 = G__9259;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

tailrecursion.javelin.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write(writer__5602__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return c.thunk;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return c.update;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function tailrecursion$javelin$set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_(c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__9260__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9260 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9261__i = 0, G__9261__a = new Array(arguments.length -  0);
while (G__9261__i < G__9261__a.length) {G__9261__a[G__9261__i] = arguments[G__9261__i + 0]; ++G__9261__i;}
  sources = new cljs.core.IndexedSeq(G__9261__a,0);
} 
return G__9260__delegate.call(this,sources);};
G__9260.cljs$lang$maxFixedArity = 0;
G__9260.cljs$lang$applyTo = (function (arglist__9262){
var sources = cljs.core.seq(arglist__9262);
return G__9260__delegate(sources);
});
G__9260.cljs$core$IFn$_invoke$arity$variadic = G__9260__delegate;
return G__9260;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_((new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__9263_SHARP_){
var _STAR_tx_STAR_9267 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__9268 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9268) : cljs.core.atom.call(null,G__9268));
})();

try{return (p1__9263_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9263_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9263_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9267;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_9269 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9269;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9277 = arguments.length;
var i__6062__auto___9278 = (0);
while(true){
if((i__6062__auto___9278 < len__6061__auto___9277)){
args__6068__auto__.push((arguments[i__6062__auto___9278]));

var G__9279 = (i__6062__auto___9278 + (1));
i__6062__auto___9278 = G__9279;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9276 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9276) : cljs.core.atom.call(null,G__9276));
})();
var tag_neq = ((function (olds){
return (function (p1__9270_SHARP_,p2__9271_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9270_SHARP_,p2__9271_SHARP_),p2__9271_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9273_SHARP_,p2__9272_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9273_SHARP_,p2__9272_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9280__delegate = function (rest__9274_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9274_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9274_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9274_SHARP_));

return news;
};
var G__9280 = function (var_args){
var rest__9274_SHARP_ = null;
if (arguments.length > 0) {
var G__9281__i = 0, G__9281__a = new Array(arguments.length -  0);
while (G__9281__i < G__9281__a.length) {G__9281__a[G__9281__i] = arguments[G__9281__i + 0]; ++G__9281__i;}
  rest__9274_SHARP_ = new cljs.core.IndexedSeq(G__9281__a,0);
} 
return G__9280__delegate.call(this,rest__9274_SHARP_);};
G__9280.cljs$lang$maxFixedArity = 0;
G__9280.cljs$lang$applyTo = (function (arglist__9282){
var rest__9274_SHARP_ = cljs.core.seq(arglist__9282);
return G__9280__delegate(rest__9274_SHARP_);
});
G__9280.cljs$core$IFn$_invoke$arity$variadic = G__9280__delegate;
return G__9280;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq9275){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9275));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9283_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9283_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items,f){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(cljs.core.seq).call(null,items);
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9284_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9284_SHARP_);
});})(pool_size,items_seq,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9291_9297 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9292_9298 = null;
var count__9293_9299 = (0);
var i__9294_9300 = (0);
while(true){
if((i__9294_9300 < count__9293_9299)){
var i_9301 = chunk__9292_9298.cljs$core$IIndexed$_nth$arity$2(null,i__9294_9300);
var G__9295_9302 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9301) : ith_item__$1.call(null,i_9301));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9295_9302) : f__$1.call(null,G__9295_9302));

var G__9303 = seq__9291_9297;
var G__9304 = chunk__9292_9298;
var G__9305 = count__9293_9299;
var G__9306 = (i__9294_9300 + (1));
seq__9291_9297 = G__9303;
chunk__9292_9298 = G__9304;
count__9293_9299 = G__9305;
i__9294_9300 = G__9306;
continue;
} else {
var temp__4425__auto___9307 = cljs.core.seq(seq__9291_9297);
if(temp__4425__auto___9307){
var seq__9291_9308__$1 = temp__4425__auto___9307;
if(cljs.core.chunked_seq_QMARK_(seq__9291_9308__$1)){
var c__5806__auto___9309 = cljs.core.chunk_first(seq__9291_9308__$1);
var G__9310 = cljs.core.chunk_rest(seq__9291_9308__$1);
var G__9311 = c__5806__auto___9309;
var G__9312 = cljs.core.count(c__5806__auto___9309);
var G__9313 = (0);
seq__9291_9297 = G__9310;
chunk__9292_9298 = G__9311;
count__9293_9299 = G__9312;
i__9294_9300 = G__9313;
continue;
} else {
var i_9314 = cljs.core.first(seq__9291_9308__$1);
var G__9296_9315 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9314) : ith_item__$1.call(null,i_9314));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9296_9315) : f__$1.call(null,G__9296_9315));

var G__9316 = cljs.core.next(seq__9291_9308__$1);
var G__9317 = null;
var G__9318 = (0);
var G__9319 = (0);
seq__9291_9297 = G__9316;
chunk__9292_9298 = G__9317;
count__9293_9299 = G__9318;
i__9294_9300 = G__9319;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,items_seq,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
