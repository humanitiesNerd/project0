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

var G__7259 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7257_SHARP_,p2__7258_SHARP_){
return cljs.core.assoc.call(null,p1__7257_SHARP_,p2__7258_SHARP_,p2__7258_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7259;
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
}catch (e7261){if((e7261 instanceof Error)){
var _ = e7261;
return null;
} else {
throw e7261;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7264 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7264);

return G__7264;
} else {
var G__7265 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7265));

return G__7265;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7274 = arguments.length;
var i__6062__auto___7275 = (0);
while(true){
if((i__6062__auto___7275 < len__6061__auto___7274)){
args__6068__auto__.push((arguments[i__6062__auto___7275]));

var G__7276 = (i__6062__auto___7275 + (1));
i__6062__auto___7275 = G__7276;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7268){
var vec__7269 = p__7268;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7269,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7270 = cljs.core.seq.call(null,srcs);
var chunk__7271 = null;
var count__7272 = (0);
var i__7273 = (0);
while(true){
if((i__7273 < count__7272)){
var src = cljs.core._nth.call(null,chunk__7271,i__7273);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7277 = seq__7270;
var G__7278 = chunk__7271;
var G__7279 = count__7272;
var G__7280 = (i__7273 + (1));
seq__7270 = G__7277;
chunk__7271 = G__7278;
count__7272 = G__7279;
i__7273 = G__7280;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7270);
if(temp__4425__auto__){
var seq__7270__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7270__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7270__$1);
var G__7281 = cljs.core.chunk_rest.call(null,seq__7270__$1);
var G__7282 = c__5806__auto__;
var G__7283 = cljs.core.count.call(null,c__5806__auto__);
var G__7284 = (0);
seq__7270 = G__7281;
chunk__7271 = G__7282;
count__7272 = G__7283;
i__7273 = G__7284;
continue;
} else {
var src = cljs.core.first.call(null,seq__7270__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7285 = cljs.core.next.call(null,seq__7270__$1);
var G__7286 = null;
var G__7287 = (0);
var G__7288 = (0);
seq__7270 = G__7285;
chunk__7271 = G__7286;
count__7272 = G__7287;
i__7273 = G__7288;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7266){
var G__7267 = cljs.core.first.call(null,seq7266);
var seq7266__$1 = cljs.core.next.call(null,seq7266);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7267,seq7266__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7307 = arguments.length;
var i__6062__auto___7308 = (0);
while(true){
if((i__6062__auto___7308 < len__6061__auto___7307)){
args__6068__auto__.push((arguments[i__6062__auto___7308]));

var G__7309 = (i__6062__auto___7308 + (1));
i__6062__auto___7308 = G__7309;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7293){
var vec__7294 = p__7293;
var f = cljs.core.nth.call(null,vec__7294,(0),null);
var sources = cljs.core.nth.call(null,vec__7294,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7295_7310 = cljs.core.seq.call(null,this$.sources);
var chunk__7296_7311 = null;
var count__7297_7312 = (0);
var i__7298_7313 = (0);
while(true){
if((i__7298_7313 < count__7297_7312)){
var source_7314 = cljs.core._nth.call(null,chunk__7296_7311,i__7298_7313);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7314))){
source_7314.sinks = cljs.core.conj.call(null,source_7314.sinks,this$);

if((source_7314.rank > this$.rank)){
var seq__7299_7315 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7295_7310,chunk__7296_7311,count__7297_7312,i__7298_7313,source_7314,vec__7294,f,sources){
return (function (p1__7289_SHARP_){
return p1__7289_SHARP_.sinks;
});})(seq__7295_7310,chunk__7296_7311,count__7297_7312,i__7298_7313,source_7314,vec__7294,f,sources))
,source_7314));
var chunk__7300_7316 = null;
var count__7301_7317 = (0);
var i__7302_7318 = (0);
while(true){
if((i__7302_7318 < count__7301_7317)){
var dep_7319 = cljs.core._nth.call(null,chunk__7300_7316,i__7302_7318);
dep_7319.rank = tailrecursion.javelin.next_rank.call(null);

var G__7320 = seq__7299_7315;
var G__7321 = chunk__7300_7316;
var G__7322 = count__7301_7317;
var G__7323 = (i__7302_7318 + (1));
seq__7299_7315 = G__7320;
chunk__7300_7316 = G__7321;
count__7301_7317 = G__7322;
i__7302_7318 = G__7323;
continue;
} else {
var temp__4425__auto___7324 = cljs.core.seq.call(null,seq__7299_7315);
if(temp__4425__auto___7324){
var seq__7299_7325__$1 = temp__4425__auto___7324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7299_7325__$1)){
var c__5806__auto___7326 = cljs.core.chunk_first.call(null,seq__7299_7325__$1);
var G__7327 = cljs.core.chunk_rest.call(null,seq__7299_7325__$1);
var G__7328 = c__5806__auto___7326;
var G__7329 = cljs.core.count.call(null,c__5806__auto___7326);
var G__7330 = (0);
seq__7299_7315 = G__7327;
chunk__7300_7316 = G__7328;
count__7301_7317 = G__7329;
i__7302_7318 = G__7330;
continue;
} else {
var dep_7331 = cljs.core.first.call(null,seq__7299_7325__$1);
dep_7331.rank = tailrecursion.javelin.next_rank.call(null);

var G__7332 = cljs.core.next.call(null,seq__7299_7325__$1);
var G__7333 = null;
var G__7334 = (0);
var G__7335 = (0);
seq__7299_7315 = G__7332;
chunk__7300_7316 = G__7333;
count__7301_7317 = G__7334;
i__7302_7318 = G__7335;
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

var G__7336 = seq__7295_7310;
var G__7337 = chunk__7296_7311;
var G__7338 = count__7297_7312;
var G__7339 = (i__7298_7313 + (1));
seq__7295_7310 = G__7336;
chunk__7296_7311 = G__7337;
count__7297_7312 = G__7338;
i__7298_7313 = G__7339;
continue;
} else {
var temp__4425__auto___7340 = cljs.core.seq.call(null,seq__7295_7310);
if(temp__4425__auto___7340){
var seq__7295_7341__$1 = temp__4425__auto___7340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7295_7341__$1)){
var c__5806__auto___7342 = cljs.core.chunk_first.call(null,seq__7295_7341__$1);
var G__7343 = cljs.core.chunk_rest.call(null,seq__7295_7341__$1);
var G__7344 = c__5806__auto___7342;
var G__7345 = cljs.core.count.call(null,c__5806__auto___7342);
var G__7346 = (0);
seq__7295_7310 = G__7343;
chunk__7296_7311 = G__7344;
count__7297_7312 = G__7345;
i__7298_7313 = G__7346;
continue;
} else {
var source_7347 = cljs.core.first.call(null,seq__7295_7341__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7347))){
source_7347.sinks = cljs.core.conj.call(null,source_7347.sinks,this$);

if((source_7347.rank > this$.rank)){
var seq__7303_7348 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7295_7310,chunk__7296_7311,count__7297_7312,i__7298_7313,source_7347,seq__7295_7341__$1,temp__4425__auto___7340,vec__7294,f,sources){
return (function (p1__7289_SHARP_){
return p1__7289_SHARP_.sinks;
});})(seq__7295_7310,chunk__7296_7311,count__7297_7312,i__7298_7313,source_7347,seq__7295_7341__$1,temp__4425__auto___7340,vec__7294,f,sources))
,source_7347));
var chunk__7304_7349 = null;
var count__7305_7350 = (0);
var i__7306_7351 = (0);
while(true){
if((i__7306_7351 < count__7305_7350)){
var dep_7352 = cljs.core._nth.call(null,chunk__7304_7349,i__7306_7351);
dep_7352.rank = tailrecursion.javelin.next_rank.call(null);

var G__7353 = seq__7303_7348;
var G__7354 = chunk__7304_7349;
var G__7355 = count__7305_7350;
var G__7356 = (i__7306_7351 + (1));
seq__7303_7348 = G__7353;
chunk__7304_7349 = G__7354;
count__7305_7350 = G__7355;
i__7306_7351 = G__7356;
continue;
} else {
var temp__4425__auto___7357__$1 = cljs.core.seq.call(null,seq__7303_7348);
if(temp__4425__auto___7357__$1){
var seq__7303_7358__$1 = temp__4425__auto___7357__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7303_7358__$1)){
var c__5806__auto___7359 = cljs.core.chunk_first.call(null,seq__7303_7358__$1);
var G__7360 = cljs.core.chunk_rest.call(null,seq__7303_7358__$1);
var G__7361 = c__5806__auto___7359;
var G__7362 = cljs.core.count.call(null,c__5806__auto___7359);
var G__7363 = (0);
seq__7303_7348 = G__7360;
chunk__7304_7349 = G__7361;
count__7305_7350 = G__7362;
i__7306_7351 = G__7363;
continue;
} else {
var dep_7364 = cljs.core.first.call(null,seq__7303_7358__$1);
dep_7364.rank = tailrecursion.javelin.next_rank.call(null);

var G__7365 = cljs.core.next.call(null,seq__7303_7358__$1);
var G__7366 = null;
var G__7367 = (0);
var G__7368 = (0);
seq__7303_7348 = G__7365;
chunk__7304_7349 = G__7366;
count__7305_7350 = G__7367;
i__7306_7351 = G__7368;
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

var G__7369 = cljs.core.next.call(null,seq__7295_7341__$1);
var G__7370 = null;
var G__7371 = (0);
var G__7372 = (0);
seq__7295_7310 = G__7369;
chunk__7296_7311 = G__7370;
count__7297_7312 = G__7371;
i__7298_7313 = G__7372;
continue;
}
} else {
}
}
break;
}

var compute_7373 = ((function (vec__7294,f,sources){
return (function (p1__7290_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7290_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7290_SHARP_)));
});})(vec__7294,f,sources))
;
this$.thunk = ((function (compute_7373,vec__7294,f,sources){
return (function (){
return this$.state = compute_7373.call(null,this$.sources);
});})(compute_7373,vec__7294,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7291){
var G__7292 = cljs.core.first.call(null,seq7291);
var seq7291__$1 = cljs.core.next.call(null,seq7291);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7292,seq7291__$1);
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
var seq__7374 = cljs.core.seq.call(null,self__.watches);
var chunk__7375 = null;
var count__7376 = (0);
var i__7377 = (0);
while(true){
if((i__7377 < count__7376)){
var vec__7378 = cljs.core._nth.call(null,chunk__7375,i__7377);
var key = cljs.core.nth.call(null,vec__7378,(0),null);
var f = cljs.core.nth.call(null,vec__7378,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7380 = seq__7374;
var G__7381 = chunk__7375;
var G__7382 = count__7376;
var G__7383 = (i__7377 + (1));
seq__7374 = G__7380;
chunk__7375 = G__7381;
count__7376 = G__7382;
i__7377 = G__7383;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7374);
if(temp__4425__auto__){
var seq__7374__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7374__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7374__$1);
var G__7384 = cljs.core.chunk_rest.call(null,seq__7374__$1);
var G__7385 = c__5806__auto__;
var G__7386 = cljs.core.count.call(null,c__5806__auto__);
var G__7387 = (0);
seq__7374 = G__7384;
chunk__7375 = G__7385;
count__7376 = G__7386;
i__7377 = G__7387;
continue;
} else {
var vec__7379 = cljs.core.first.call(null,seq__7374__$1);
var key = cljs.core.nth.call(null,vec__7379,(0),null);
var f = cljs.core.nth.call(null,vec__7379,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7388 = cljs.core.next.call(null,seq__7374__$1);
var G__7389 = null;
var G__7390 = (0);
var G__7391 = (0);
seq__7374 = G__7388;
chunk__7375 = G__7389;
count__7376 = G__7390;
i__7377 = G__7391;
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
var G__7392__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__7392 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__7393__i = 0, G__7393__a = new Array(arguments.length -  0);
while (G__7393__i < G__7393__a.length) {G__7393__a[G__7393__i] = arguments[G__7393__i + 0]; ++G__7393__i;}
  sources = new cljs.core.IndexedSeq(G__7393__a,0);
} 
return G__7392__delegate.call(this,sources);};
G__7392.cljs$lang$maxFixedArity = 0;
G__7392.cljs$lang$applyTo = (function (arglist__7394){
var sources = cljs.core.seq(arglist__7394);
return G__7392__delegate(sources);
});
G__7392.cljs$core$IFn$_invoke$arity$variadic = G__7392__delegate;
return G__7392;
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
var bind = (function (p1__7395_SHARP_){
var _STAR_tx_STAR_7398 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__7395_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7398;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_7399 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7399;
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
var len__6061__auto___7406 = arguments.length;
var i__6062__auto___7407 = (0);
while(true){
if((i__6062__auto___7407 < len__6061__auto___7406)){
args__6068__auto__.push((arguments[i__6062__auto___7407]));

var G__7408 = (i__6062__auto___7407 + (1));
i__6062__auto___7407 = G__7408;
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
return (function (p1__7400_SHARP_,p2__7401_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7400_SHARP_,p2__7401_SHARP_),p2__7401_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__7403_SHARP_,p2__7402_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7403_SHARP_,p2__7402_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7409__delegate = function (rest__7404_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7404_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__7404_SHARP_);

return news;
};
var G__7409 = function (var_args){
var rest__7404_SHARP_ = null;
if (arguments.length > 0) {
var G__7410__i = 0, G__7410__a = new Array(arguments.length -  0);
while (G__7410__i < G__7410__a.length) {G__7410__a[G__7410__i] = arguments[G__7410__i + 0]; ++G__7410__i;}
  rest__7404_SHARP_ = new cljs.core.IndexedSeq(G__7410__a,0);
} 
return G__7409__delegate.call(this,rest__7404_SHARP_);};
G__7409.cljs$lang$maxFixedArity = 0;
G__7409.cljs$lang$applyTo = (function (arglist__7411){
var rest__7404_SHARP_ = cljs.core.seq(arglist__7411);
return G__7409__delegate(rest__7404_SHARP_);
});
G__7409.cljs$core$IFn$_invoke$arity$variadic = G__7409__delegate;
return G__7409;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq7405){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7405));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__7412_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__7412_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,items);
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__7413_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__7413_SHARP_);
});})(pool_size,items_seq,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__7418_7422 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__7419_7423 = null;
var count__7420_7424 = (0);
var i__7421_7425 = (0);
while(true){
if((i__7421_7425 < count__7420_7424)){
var i_7426 = cljs.core._nth.call(null,chunk__7419_7423,i__7421_7425);
f__$1.call(null,ith_item__$1.call(null,i_7426));

var G__7427 = seq__7418_7422;
var G__7428 = chunk__7419_7423;
var G__7429 = count__7420_7424;
var G__7430 = (i__7421_7425 + (1));
seq__7418_7422 = G__7427;
chunk__7419_7423 = G__7428;
count__7420_7424 = G__7429;
i__7421_7425 = G__7430;
continue;
} else {
var temp__4425__auto___7431 = cljs.core.seq.call(null,seq__7418_7422);
if(temp__4425__auto___7431){
var seq__7418_7432__$1 = temp__4425__auto___7431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7418_7432__$1)){
var c__5806__auto___7433 = cljs.core.chunk_first.call(null,seq__7418_7432__$1);
var G__7434 = cljs.core.chunk_rest.call(null,seq__7418_7432__$1);
var G__7435 = c__5806__auto___7433;
var G__7436 = cljs.core.count.call(null,c__5806__auto___7433);
var G__7437 = (0);
seq__7418_7422 = G__7434;
chunk__7419_7423 = G__7435;
count__7420_7424 = G__7436;
i__7421_7425 = G__7437;
continue;
} else {
var i_7438 = cljs.core.first.call(null,seq__7418_7432__$1);
f__$1.call(null,ith_item__$1.call(null,i_7438));

var G__7439 = cljs.core.next.call(null,seq__7418_7432__$1);
var G__7440 = null;
var G__7441 = (0);
var G__7442 = (0);
seq__7418_7422 = G__7439;
chunk__7419_7423 = G__7440;
count__7420_7424 = G__7441;
i__7421_7425 = G__7442;
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