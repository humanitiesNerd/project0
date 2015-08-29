// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,tailrecursion$javelin$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"propagate","propagate",274376905),pri_map);
} else {
}

var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__7253 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7251_SHARP_,p2__7252_SHARP_){
return cljs.core.assoc.call(null,p1__7251_SHARP_,p2__7252_SHARP_,p2__7252_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7253;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e7255){if((e7255 instanceof Error)){
var _ = e7255;
return null;
} else {
throw e7255;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7258 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7258);

return G__7258;
} else {
var G__7259 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7259));

return G__7259;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7268 = arguments.length;
var i__6062__auto___7269 = (0);
while(true){
if((i__6062__auto___7269 < len__6061__auto___7268)){
args__6068__auto__.push((arguments[i__6062__auto___7269]));

var G__7270 = (i__6062__auto___7269 + (1));
i__6062__auto___7269 = G__7270;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7262){
var vec__7263 = p__7262;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7263,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7264 = cljs.core.seq.call(null,srcs);
var chunk__7265 = null;
var count__7266 = (0);
var i__7267 = (0);
while(true){
if((i__7267 < count__7266)){
var src = cljs.core._nth.call(null,chunk__7265,i__7267);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7271 = seq__7264;
var G__7272 = chunk__7265;
var G__7273 = count__7266;
var G__7274 = (i__7267 + (1));
seq__7264 = G__7271;
chunk__7265 = G__7272;
count__7266 = G__7273;
i__7267 = G__7274;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7264);
if(temp__4425__auto__){
var seq__7264__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7264__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7264__$1);
var G__7275 = cljs.core.chunk_rest.call(null,seq__7264__$1);
var G__7276 = c__5806__auto__;
var G__7277 = cljs.core.count.call(null,c__5806__auto__);
var G__7278 = (0);
seq__7264 = G__7275;
chunk__7265 = G__7276;
count__7266 = G__7277;
i__7267 = G__7278;
continue;
} else {
var src = cljs.core.first.call(null,seq__7264__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7279 = cljs.core.next.call(null,seq__7264__$1);
var G__7280 = null;
var G__7281 = (0);
var G__7282 = (0);
seq__7264 = G__7279;
chunk__7265 = G__7280;
count__7266 = G__7281;
i__7267 = G__7282;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7260){
var G__7261 = cljs.core.first.call(null,seq7260);
var seq7260__$1 = cljs.core.next.call(null,seq7260);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7261,seq7260__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7301 = arguments.length;
var i__6062__auto___7302 = (0);
while(true){
if((i__6062__auto___7302 < len__6061__auto___7301)){
args__6068__auto__.push((arguments[i__6062__auto___7302]));

var G__7303 = (i__6062__auto___7302 + (1));
i__6062__auto___7302 = G__7303;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7287){
var vec__7288 = p__7287;
var f = cljs.core.nth.call(null,vec__7288,(0),null);
var sources = cljs.core.nth.call(null,vec__7288,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7289_7304 = cljs.core.seq.call(null,this$.sources);
var chunk__7290_7305 = null;
var count__7291_7306 = (0);
var i__7292_7307 = (0);
while(true){
if((i__7292_7307 < count__7291_7306)){
var source_7308 = cljs.core._nth.call(null,chunk__7290_7305,i__7292_7307);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7308))){
source_7308.sinks = cljs.core.conj.call(null,source_7308.sinks,this$);

if((source_7308.rank > this$.rank)){
var seq__7293_7309 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7289_7304,chunk__7290_7305,count__7291_7306,i__7292_7307,source_7308,vec__7288,f,sources){
return (function (p1__7283_SHARP_){
return p1__7283_SHARP_.sinks;
});})(seq__7289_7304,chunk__7290_7305,count__7291_7306,i__7292_7307,source_7308,vec__7288,f,sources))
,source_7308));
var chunk__7294_7310 = null;
var count__7295_7311 = (0);
var i__7296_7312 = (0);
while(true){
if((i__7296_7312 < count__7295_7311)){
var dep_7313 = cljs.core._nth.call(null,chunk__7294_7310,i__7296_7312);
dep_7313.rank = tailrecursion.javelin.next_rank.call(null);

var G__7314 = seq__7293_7309;
var G__7315 = chunk__7294_7310;
var G__7316 = count__7295_7311;
var G__7317 = (i__7296_7312 + (1));
seq__7293_7309 = G__7314;
chunk__7294_7310 = G__7315;
count__7295_7311 = G__7316;
i__7296_7312 = G__7317;
continue;
} else {
var temp__4425__auto___7318 = cljs.core.seq.call(null,seq__7293_7309);
if(temp__4425__auto___7318){
var seq__7293_7319__$1 = temp__4425__auto___7318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7293_7319__$1)){
var c__5806__auto___7320 = cljs.core.chunk_first.call(null,seq__7293_7319__$1);
var G__7321 = cljs.core.chunk_rest.call(null,seq__7293_7319__$1);
var G__7322 = c__5806__auto___7320;
var G__7323 = cljs.core.count.call(null,c__5806__auto___7320);
var G__7324 = (0);
seq__7293_7309 = G__7321;
chunk__7294_7310 = G__7322;
count__7295_7311 = G__7323;
i__7296_7312 = G__7324;
continue;
} else {
var dep_7325 = cljs.core.first.call(null,seq__7293_7319__$1);
dep_7325.rank = tailrecursion.javelin.next_rank.call(null);

var G__7326 = cljs.core.next.call(null,seq__7293_7319__$1);
var G__7327 = null;
var G__7328 = (0);
var G__7329 = (0);
seq__7293_7309 = G__7326;
chunk__7294_7310 = G__7327;
count__7295_7311 = G__7328;
i__7296_7312 = G__7329;
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

var G__7330 = seq__7289_7304;
var G__7331 = chunk__7290_7305;
var G__7332 = count__7291_7306;
var G__7333 = (i__7292_7307 + (1));
seq__7289_7304 = G__7330;
chunk__7290_7305 = G__7331;
count__7291_7306 = G__7332;
i__7292_7307 = G__7333;
continue;
} else {
var temp__4425__auto___7334 = cljs.core.seq.call(null,seq__7289_7304);
if(temp__4425__auto___7334){
var seq__7289_7335__$1 = temp__4425__auto___7334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7289_7335__$1)){
var c__5806__auto___7336 = cljs.core.chunk_first.call(null,seq__7289_7335__$1);
var G__7337 = cljs.core.chunk_rest.call(null,seq__7289_7335__$1);
var G__7338 = c__5806__auto___7336;
var G__7339 = cljs.core.count.call(null,c__5806__auto___7336);
var G__7340 = (0);
seq__7289_7304 = G__7337;
chunk__7290_7305 = G__7338;
count__7291_7306 = G__7339;
i__7292_7307 = G__7340;
continue;
} else {
var source_7341 = cljs.core.first.call(null,seq__7289_7335__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7341))){
source_7341.sinks = cljs.core.conj.call(null,source_7341.sinks,this$);

if((source_7341.rank > this$.rank)){
var seq__7297_7342 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7289_7304,chunk__7290_7305,count__7291_7306,i__7292_7307,source_7341,seq__7289_7335__$1,temp__4425__auto___7334,vec__7288,f,sources){
return (function (p1__7283_SHARP_){
return p1__7283_SHARP_.sinks;
});})(seq__7289_7304,chunk__7290_7305,count__7291_7306,i__7292_7307,source_7341,seq__7289_7335__$1,temp__4425__auto___7334,vec__7288,f,sources))
,source_7341));
var chunk__7298_7343 = null;
var count__7299_7344 = (0);
var i__7300_7345 = (0);
while(true){
if((i__7300_7345 < count__7299_7344)){
var dep_7346 = cljs.core._nth.call(null,chunk__7298_7343,i__7300_7345);
dep_7346.rank = tailrecursion.javelin.next_rank.call(null);

var G__7347 = seq__7297_7342;
var G__7348 = chunk__7298_7343;
var G__7349 = count__7299_7344;
var G__7350 = (i__7300_7345 + (1));
seq__7297_7342 = G__7347;
chunk__7298_7343 = G__7348;
count__7299_7344 = G__7349;
i__7300_7345 = G__7350;
continue;
} else {
var temp__4425__auto___7351__$1 = cljs.core.seq.call(null,seq__7297_7342);
if(temp__4425__auto___7351__$1){
var seq__7297_7352__$1 = temp__4425__auto___7351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7297_7352__$1)){
var c__5806__auto___7353 = cljs.core.chunk_first.call(null,seq__7297_7352__$1);
var G__7354 = cljs.core.chunk_rest.call(null,seq__7297_7352__$1);
var G__7355 = c__5806__auto___7353;
var G__7356 = cljs.core.count.call(null,c__5806__auto___7353);
var G__7357 = (0);
seq__7297_7342 = G__7354;
chunk__7298_7343 = G__7355;
count__7299_7344 = G__7356;
i__7300_7345 = G__7357;
continue;
} else {
var dep_7358 = cljs.core.first.call(null,seq__7297_7352__$1);
dep_7358.rank = tailrecursion.javelin.next_rank.call(null);

var G__7359 = cljs.core.next.call(null,seq__7297_7352__$1);
var G__7360 = null;
var G__7361 = (0);
var G__7362 = (0);
seq__7297_7342 = G__7359;
chunk__7298_7343 = G__7360;
count__7299_7344 = G__7361;
i__7300_7345 = G__7362;
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

var G__7363 = cljs.core.next.call(null,seq__7289_7335__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__7289_7304 = G__7363;
chunk__7290_7305 = G__7364;
count__7291_7306 = G__7365;
i__7292_7307 = G__7366;
continue;
}
} else {
}
}
break;
}

var compute_7367 = ((function (vec__7288,f,sources){
return (function (p1__7284_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7284_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7284_SHARP_)));
});})(vec__7288,f,sources))
;
this$.thunk = ((function (compute_7367,vec__7288,f,sources){
return (function (){
return this$.state = compute_7367.call(null,this$.sources);
});})(compute_7367,vec__7288,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7285){
var G__7286 = cljs.core.first.call(null,seq7285);
var seq7285__$1 = cljs.core.next.call(null,seq7285);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7286,seq7285__$1);
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
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
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
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__7368 = cljs.core.seq.call(null,self__.watches);
var chunk__7369 = null;
var count__7370 = (0);
var i__7371 = (0);
while(true){
if((i__7371 < count__7370)){
var vec__7372 = cljs.core._nth.call(null,chunk__7369,i__7371);
var key = cljs.core.nth.call(null,vec__7372,(0),null);
var f = cljs.core.nth.call(null,vec__7372,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7374 = seq__7368;
var G__7375 = chunk__7369;
var G__7376 = count__7370;
var G__7377 = (i__7371 + (1));
seq__7368 = G__7374;
chunk__7369 = G__7375;
count__7370 = G__7376;
i__7371 = G__7377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7368);
if(temp__4425__auto__){
var seq__7368__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7368__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7368__$1);
var G__7378 = cljs.core.chunk_rest.call(null,seq__7368__$1);
var G__7379 = c__5806__auto__;
var G__7380 = cljs.core.count.call(null,c__5806__auto__);
var G__7381 = (0);
seq__7368 = G__7378;
chunk__7369 = G__7379;
count__7370 = G__7380;
i__7371 = G__7381;
continue;
} else {
var vec__7373 = cljs.core.first.call(null,seq__7368__$1);
var key = cljs.core.nth.call(null,vec__7373,(0),null);
var f = cljs.core.nth.call(null,vec__7373,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7382 = cljs.core.next.call(null,seq__7368__$1);
var G__7383 = null;
var G__7384 = (0);
var G__7385 = (0);
seq__7368 = G__7382;
chunk__7369 = G__7383;
count__7370 = G__7384;
i__7371 = G__7385;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write.call(null,writer__5602__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
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

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__7386__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__7386 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__7387__i = 0, G__7387__a = new Array(arguments.length -  0);
while (G__7387__i < G__7387__a.length) {G__7387__a[G__7387__i] = arguments[G__7387__i + 0]; ++G__7387__i;}
  sources = new cljs.core.IndexedSeq(G__7387__a,0);
} 
return G__7386__delegate.call(this,sources);};
G__7386.cljs$lang$maxFixedArity = 0;
G__7386.cljs$lang$applyTo = (function (arglist__7388){
var sources = cljs.core.seq(arglist__7388);
return G__7386__delegate(sources);
});
G__7386.cljs$core$IFn$_invoke$arity$variadic = G__7386__delegate;
return G__7386;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__7389_SHARP_){
var _STAR_tx_STAR_7392 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__7389_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7392;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_7393 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7393;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7400 = arguments.length;
var i__6062__auto___7401 = (0);
while(true){
if((i__6062__auto___7401 < len__6061__auto___7400)){
args__6068__auto__.push((arguments[i__6062__auto___7401]));

var G__7402 = (i__6062__auto___7401 + (1));
i__6062__auto___7401 = G__7402;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__7394_SHARP_,p2__7395_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7394_SHARP_,p2__7395_SHARP_),p2__7395_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__7397_SHARP_,p2__7396_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7397_SHARP_,p2__7396_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7403__delegate = function (rest__7398_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7398_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__7398_SHARP_);

return news;
};
var G__7403 = function (var_args){
var rest__7398_SHARP_ = null;
if (arguments.length > 0) {
var G__7404__i = 0, G__7404__a = new Array(arguments.length -  0);
while (G__7404__i < G__7404__a.length) {G__7404__a[G__7404__i] = arguments[G__7404__i + 0]; ++G__7404__i;}
  rest__7398_SHARP_ = new cljs.core.IndexedSeq(G__7404__a,0);
} 
return G__7403__delegate.call(this,rest__7398_SHARP_);};
G__7403.cljs$lang$maxFixedArity = 0;
G__7403.cljs$lang$applyTo = (function (arglist__7405){
var rest__7398_SHARP_ = cljs.core.seq(arglist__7405);
return G__7403__delegate(rest__7398_SHARP_);
});
G__7403.cljs$core$IFn$_invoke$arity$variadic = G__7403__delegate;
return G__7403;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq7399){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7399));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__7406_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__7406_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,items);
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__7407_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__7407_SHARP_);
});})(pool_size,items_seq,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__7412_7416 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__7413_7417 = null;
var count__7414_7418 = (0);
var i__7415_7419 = (0);
while(true){
if((i__7415_7419 < count__7414_7418)){
var i_7420 = cljs.core._nth.call(null,chunk__7413_7417,i__7415_7419);
f__$1.call(null,ith_item__$1.call(null,i_7420));

var G__7421 = seq__7412_7416;
var G__7422 = chunk__7413_7417;
var G__7423 = count__7414_7418;
var G__7424 = (i__7415_7419 + (1));
seq__7412_7416 = G__7421;
chunk__7413_7417 = G__7422;
count__7414_7418 = G__7423;
i__7415_7419 = G__7424;
continue;
} else {
var temp__4425__auto___7425 = cljs.core.seq.call(null,seq__7412_7416);
if(temp__4425__auto___7425){
var seq__7412_7426__$1 = temp__4425__auto___7425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7412_7426__$1)){
var c__5806__auto___7427 = cljs.core.chunk_first.call(null,seq__7412_7426__$1);
var G__7428 = cljs.core.chunk_rest.call(null,seq__7412_7426__$1);
var G__7429 = c__5806__auto___7427;
var G__7430 = cljs.core.count.call(null,c__5806__auto___7427);
var G__7431 = (0);
seq__7412_7416 = G__7428;
chunk__7413_7417 = G__7429;
count__7414_7418 = G__7430;
i__7415_7419 = G__7431;
continue;
} else {
var i_7432 = cljs.core.first.call(null,seq__7412_7426__$1);
f__$1.call(null,ith_item__$1.call(null,i_7432));

var G__7433 = cljs.core.next.call(null,seq__7412_7426__$1);
var G__7434 = null;
var G__7435 = (0);
var G__7436 = (0);
seq__7412_7416 = G__7433;
chunk__7413_7417 = G__7434;
count__7414_7418 = G__7435;
i__7415_7419 = G__7436;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,items_seq,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=javelin.js.map