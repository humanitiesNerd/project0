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

var G__9087 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9085_SHARP_,p2__9086_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9085_SHARP_,p2__9086_SHARP_,p2__9086_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9087;
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
}catch (e9089){if((e9089 instanceof Error)){
var _ = e9089;
return null;
} else {
throw e9089;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__9092 = c;
tailrecursion.javelin.add_sync_BANG_(G__9092);

return G__9092;
} else {
var G__9093 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__9093));

return G__9093;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9102 = arguments.length;
var i__6062__auto___9103 = (0);
while(true){
if((i__6062__auto___9103 < len__6061__auto___9102)){
args__6068__auto__.push((arguments[i__6062__auto___9103]));

var G__9104 = (i__6062__auto___9103 + (1));
i__6062__auto___9103 = G__9104;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9096){
var vec__9097 = p__9096;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9098 = cljs.core.seq(srcs);
var chunk__9099 = null;
var count__9100 = (0);
var i__9101 = (0);
while(true){
if((i__9101 < count__9100)){
var src = chunk__9099.cljs$core$IIndexed$_nth$arity$2(null,i__9101);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9105 = seq__9098;
var G__9106 = chunk__9099;
var G__9107 = count__9100;
var G__9108 = (i__9101 + (1));
seq__9098 = G__9105;
chunk__9099 = G__9106;
count__9100 = G__9107;
i__9101 = G__9108;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9098);
if(temp__4425__auto__){
var seq__9098__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9098__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9098__$1);
var G__9109 = cljs.core.chunk_rest(seq__9098__$1);
var G__9110 = c__5806__auto__;
var G__9111 = cljs.core.count(c__5806__auto__);
var G__9112 = (0);
seq__9098 = G__9109;
chunk__9099 = G__9110;
count__9100 = G__9111;
i__9101 = G__9112;
continue;
} else {
var src = cljs.core.first(seq__9098__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9113 = cljs.core.next(seq__9098__$1);
var G__9114 = null;
var G__9115 = (0);
var G__9116 = (0);
seq__9098 = G__9113;
chunk__9099 = G__9114;
count__9100 = G__9115;
i__9101 = G__9116;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9094){
var G__9095 = cljs.core.first(seq9094);
var seq9094__$1 = cljs.core.next(seq9094);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9095,seq9094__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9135 = arguments.length;
var i__6062__auto___9136 = (0);
while(true){
if((i__6062__auto___9136 < len__6061__auto___9135)){
args__6068__auto__.push((arguments[i__6062__auto___9136]));

var G__9137 = (i__6062__auto___9136 + (1));
i__6062__auto___9136 = G__9137;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9121){
var vec__9122 = p__9121;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9123_9138 = cljs.core.seq(this$.sources);
var chunk__9124_9139 = null;
var count__9125_9140 = (0);
var i__9126_9141 = (0);
while(true){
if((i__9126_9141 < count__9125_9140)){
var source_9142 = chunk__9124_9139.cljs$core$IIndexed$_nth$arity$2(null,i__9126_9141);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9142) : tailrecursion.javelin.cell_QMARK_.call(null,source_9142)))){
source_9142.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9142.sinks,this$);

if((source_9142.rank > this$.rank)){
var seq__9127_9143 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9123_9138,chunk__9124_9139,count__9125_9140,i__9126_9141,source_9142,vec__9122,f,sources){
return (function (p1__9117_SHARP_){
return p1__9117_SHARP_.sinks;
});})(seq__9123_9138,chunk__9124_9139,count__9125_9140,i__9126_9141,source_9142,vec__9122,f,sources))
,source_9142));
var chunk__9128_9144 = null;
var count__9129_9145 = (0);
var i__9130_9146 = (0);
while(true){
if((i__9130_9146 < count__9129_9145)){
var dep_9147 = chunk__9128_9144.cljs$core$IIndexed$_nth$arity$2(null,i__9130_9146);
dep_9147.rank = tailrecursion.javelin.next_rank();

var G__9148 = seq__9127_9143;
var G__9149 = chunk__9128_9144;
var G__9150 = count__9129_9145;
var G__9151 = (i__9130_9146 + (1));
seq__9127_9143 = G__9148;
chunk__9128_9144 = G__9149;
count__9129_9145 = G__9150;
i__9130_9146 = G__9151;
continue;
} else {
var temp__4425__auto___9152 = cljs.core.seq(seq__9127_9143);
if(temp__4425__auto___9152){
var seq__9127_9153__$1 = temp__4425__auto___9152;
if(cljs.core.chunked_seq_QMARK_(seq__9127_9153__$1)){
var c__5806__auto___9154 = cljs.core.chunk_first(seq__9127_9153__$1);
var G__9155 = cljs.core.chunk_rest(seq__9127_9153__$1);
var G__9156 = c__5806__auto___9154;
var G__9157 = cljs.core.count(c__5806__auto___9154);
var G__9158 = (0);
seq__9127_9143 = G__9155;
chunk__9128_9144 = G__9156;
count__9129_9145 = G__9157;
i__9130_9146 = G__9158;
continue;
} else {
var dep_9159 = cljs.core.first(seq__9127_9153__$1);
dep_9159.rank = tailrecursion.javelin.next_rank();

var G__9160 = cljs.core.next(seq__9127_9153__$1);
var G__9161 = null;
var G__9162 = (0);
var G__9163 = (0);
seq__9127_9143 = G__9160;
chunk__9128_9144 = G__9161;
count__9129_9145 = G__9162;
i__9130_9146 = G__9163;
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

var G__9164 = seq__9123_9138;
var G__9165 = chunk__9124_9139;
var G__9166 = count__9125_9140;
var G__9167 = (i__9126_9141 + (1));
seq__9123_9138 = G__9164;
chunk__9124_9139 = G__9165;
count__9125_9140 = G__9166;
i__9126_9141 = G__9167;
continue;
} else {
var temp__4425__auto___9168 = cljs.core.seq(seq__9123_9138);
if(temp__4425__auto___9168){
var seq__9123_9169__$1 = temp__4425__auto___9168;
if(cljs.core.chunked_seq_QMARK_(seq__9123_9169__$1)){
var c__5806__auto___9170 = cljs.core.chunk_first(seq__9123_9169__$1);
var G__9171 = cljs.core.chunk_rest(seq__9123_9169__$1);
var G__9172 = c__5806__auto___9170;
var G__9173 = cljs.core.count(c__5806__auto___9170);
var G__9174 = (0);
seq__9123_9138 = G__9171;
chunk__9124_9139 = G__9172;
count__9125_9140 = G__9173;
i__9126_9141 = G__9174;
continue;
} else {
var source_9175 = cljs.core.first(seq__9123_9169__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9175) : tailrecursion.javelin.cell_QMARK_.call(null,source_9175)))){
source_9175.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9175.sinks,this$);

if((source_9175.rank > this$.rank)){
var seq__9131_9176 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9123_9138,chunk__9124_9139,count__9125_9140,i__9126_9141,source_9175,seq__9123_9169__$1,temp__4425__auto___9168,vec__9122,f,sources){
return (function (p1__9117_SHARP_){
return p1__9117_SHARP_.sinks;
});})(seq__9123_9138,chunk__9124_9139,count__9125_9140,i__9126_9141,source_9175,seq__9123_9169__$1,temp__4425__auto___9168,vec__9122,f,sources))
,source_9175));
var chunk__9132_9177 = null;
var count__9133_9178 = (0);
var i__9134_9179 = (0);
while(true){
if((i__9134_9179 < count__9133_9178)){
var dep_9180 = chunk__9132_9177.cljs$core$IIndexed$_nth$arity$2(null,i__9134_9179);
dep_9180.rank = tailrecursion.javelin.next_rank();

var G__9181 = seq__9131_9176;
var G__9182 = chunk__9132_9177;
var G__9183 = count__9133_9178;
var G__9184 = (i__9134_9179 + (1));
seq__9131_9176 = G__9181;
chunk__9132_9177 = G__9182;
count__9133_9178 = G__9183;
i__9134_9179 = G__9184;
continue;
} else {
var temp__4425__auto___9185__$1 = cljs.core.seq(seq__9131_9176);
if(temp__4425__auto___9185__$1){
var seq__9131_9186__$1 = temp__4425__auto___9185__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9131_9186__$1)){
var c__5806__auto___9187 = cljs.core.chunk_first(seq__9131_9186__$1);
var G__9188 = cljs.core.chunk_rest(seq__9131_9186__$1);
var G__9189 = c__5806__auto___9187;
var G__9190 = cljs.core.count(c__5806__auto___9187);
var G__9191 = (0);
seq__9131_9176 = G__9188;
chunk__9132_9177 = G__9189;
count__9133_9178 = G__9190;
i__9134_9179 = G__9191;
continue;
} else {
var dep_9192 = cljs.core.first(seq__9131_9186__$1);
dep_9192.rank = tailrecursion.javelin.next_rank();

var G__9193 = cljs.core.next(seq__9131_9186__$1);
var G__9194 = null;
var G__9195 = (0);
var G__9196 = (0);
seq__9131_9176 = G__9193;
chunk__9132_9177 = G__9194;
count__9133_9178 = G__9195;
i__9134_9179 = G__9196;
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

var G__9197 = cljs.core.next(seq__9123_9169__$1);
var G__9198 = null;
var G__9199 = (0);
var G__9200 = (0);
seq__9123_9138 = G__9197;
chunk__9124_9139 = G__9198;
count__9125_9140 = G__9199;
i__9126_9141 = G__9200;
continue;
}
} else {
}
}
break;
}

var compute_9201 = ((function (vec__9122,f,sources){
return (function (p1__9118_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9118_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9118_SHARP_)));
});})(vec__9122,f,sources))
;
this$.thunk = ((function (compute_9201,vec__9122,f,sources){
return (function (){
return this$.state = compute_9201(this$.sources);
});})(compute_9201,vec__9122,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq9119){
var G__9120 = cljs.core.first(seq9119);
var seq9119__$1 = cljs.core.next(seq9119);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9120,seq9119__$1);
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
var G__9203 = this$__$1;
var G__9204 = (function (){var G__9205 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9205) : f.call(null,G__9205));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9203,G__9204) : cljs.core.reset_BANG_.call(null,G__9203,G__9204));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9208 = this$__$1;
var G__9209 = (function (){var G__9210 = this$__$1.state;
var G__9211 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9210,G__9211) : f.call(null,G__9210,G__9211));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9208,G__9209) : cljs.core.reset_BANG_.call(null,G__9208,G__9209));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9215 = this$__$1;
var G__9216 = (function (){var G__9217 = this$__$1.state;
var G__9218 = a;
var G__9219 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9217,G__9218,G__9219) : f.call(null,G__9217,G__9218,G__9219));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9215,G__9216) : cljs.core.reset_BANG_.call(null,G__9215,G__9216));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9220 = this$__$1;
var G__9221 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9220,G__9221) : cljs.core.reset_BANG_.call(null,G__9220,G__9221));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9222 = cljs.core.seq(self__.watches);
var chunk__9223 = null;
var count__9224 = (0);
var i__9225 = (0);
while(true){
if((i__9225 < count__9224)){
var vec__9226 = chunk__9223.cljs$core$IIndexed$_nth$arity$2(null,i__9225);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9226,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9226,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9228 = seq__9222;
var G__9229 = chunk__9223;
var G__9230 = count__9224;
var G__9231 = (i__9225 + (1));
seq__9222 = G__9228;
chunk__9223 = G__9229;
count__9224 = G__9230;
i__9225 = G__9231;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9222);
if(temp__4425__auto__){
var seq__9222__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9222__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9222__$1);
var G__9232 = cljs.core.chunk_rest(seq__9222__$1);
var G__9233 = c__5806__auto__;
var G__9234 = cljs.core.count(c__5806__auto__);
var G__9235 = (0);
seq__9222 = G__9232;
chunk__9223 = G__9233;
count__9224 = G__9234;
i__9225 = G__9235;
continue;
} else {
var vec__9227 = cljs.core.first(seq__9222__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9227,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9227,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9236 = cljs.core.next(seq__9222__$1);
var G__9237 = null;
var G__9238 = (0);
var G__9239 = (0);
seq__9222 = G__9236;
chunk__9223 = G__9237;
count__9224 = G__9238;
i__9225 = G__9239;
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
var G__9240__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9240 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9241__i = 0, G__9241__a = new Array(arguments.length -  0);
while (G__9241__i < G__9241__a.length) {G__9241__a[G__9241__i] = arguments[G__9241__i + 0]; ++G__9241__i;}
  sources = new cljs.core.IndexedSeq(G__9241__a,0);
} 
return G__9240__delegate.call(this,sources);};
G__9240.cljs$lang$maxFixedArity = 0;
G__9240.cljs$lang$applyTo = (function (arglist__9242){
var sources = cljs.core.seq(arglist__9242);
return G__9240__delegate(sources);
});
G__9240.cljs$core$IFn$_invoke$arity$variadic = G__9240__delegate;
return G__9240;
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
var bind = (function (p1__9243_SHARP_){
var _STAR_tx_STAR_9247 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__9248 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9248) : cljs.core.atom.call(null,G__9248));
})();

try{return (p1__9243_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9243_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9243_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9247;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_9249 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9249;
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
var len__6061__auto___9257 = arguments.length;
var i__6062__auto___9258 = (0);
while(true){
if((i__6062__auto___9258 < len__6061__auto___9257)){
args__6068__auto__.push((arguments[i__6062__auto___9258]));

var G__9259 = (i__6062__auto___9258 + (1));
i__6062__auto___9258 = G__9259;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9256 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9256) : cljs.core.atom.call(null,G__9256));
})();
var tag_neq = ((function (olds){
return (function (p1__9250_SHARP_,p2__9251_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9250_SHARP_,p2__9251_SHARP_),p2__9251_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9253_SHARP_,p2__9252_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9253_SHARP_,p2__9252_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9260__delegate = function (rest__9254_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9254_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9254_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9254_SHARP_));

return news;
};
var G__9260 = function (var_args){
var rest__9254_SHARP_ = null;
if (arguments.length > 0) {
var G__9261__i = 0, G__9261__a = new Array(arguments.length -  0);
while (G__9261__i < G__9261__a.length) {G__9261__a[G__9261__i] = arguments[G__9261__i + 0]; ++G__9261__i;}
  rest__9254_SHARP_ = new cljs.core.IndexedSeq(G__9261__a,0);
} 
return G__9260__delegate.call(this,rest__9254_SHARP_);};
G__9260.cljs$lang$maxFixedArity = 0;
G__9260.cljs$lang$applyTo = (function (arglist__9262){
var rest__9254_SHARP_ = cljs.core.seq(arglist__9262);
return G__9260__delegate(rest__9254_SHARP_);
});
G__9260.cljs$core$IFn$_invoke$arity$variadic = G__9260__delegate;
return G__9260;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq9255){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9255));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9263_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9263_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items,f){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(cljs.core.seq).call(null,items);
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9264_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9264_SHARP_);
});})(pool_size,items_seq,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9271_9277 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9272_9278 = null;
var count__9273_9279 = (0);
var i__9274_9280 = (0);
while(true){
if((i__9274_9280 < count__9273_9279)){
var i_9281 = chunk__9272_9278.cljs$core$IIndexed$_nth$arity$2(null,i__9274_9280);
var G__9275_9282 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9281) : ith_item__$1.call(null,i_9281));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9275_9282) : f__$1.call(null,G__9275_9282));

var G__9283 = seq__9271_9277;
var G__9284 = chunk__9272_9278;
var G__9285 = count__9273_9279;
var G__9286 = (i__9274_9280 + (1));
seq__9271_9277 = G__9283;
chunk__9272_9278 = G__9284;
count__9273_9279 = G__9285;
i__9274_9280 = G__9286;
continue;
} else {
var temp__4425__auto___9287 = cljs.core.seq(seq__9271_9277);
if(temp__4425__auto___9287){
var seq__9271_9288__$1 = temp__4425__auto___9287;
if(cljs.core.chunked_seq_QMARK_(seq__9271_9288__$1)){
var c__5806__auto___9289 = cljs.core.chunk_first(seq__9271_9288__$1);
var G__9290 = cljs.core.chunk_rest(seq__9271_9288__$1);
var G__9291 = c__5806__auto___9289;
var G__9292 = cljs.core.count(c__5806__auto___9289);
var G__9293 = (0);
seq__9271_9277 = G__9290;
chunk__9272_9278 = G__9291;
count__9273_9279 = G__9292;
i__9274_9280 = G__9293;
continue;
} else {
var i_9294 = cljs.core.first(seq__9271_9288__$1);
var G__9276_9295 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9294) : ith_item__$1.call(null,i_9294));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9276_9295) : f__$1.call(null,G__9276_9295));

var G__9296 = cljs.core.next(seq__9271_9288__$1);
var G__9297 = null;
var G__9298 = (0);
var G__9299 = (0);
seq__9271_9277 = G__9296;
chunk__9272_9278 = G__9297;
count__9273_9279 = G__9298;
i__9274_9280 = G__9299;
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
