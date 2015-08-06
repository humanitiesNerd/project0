// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__11321 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11321) : cljs.core.atom.call(null,G__11321));
})();
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4423__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4423__auto__){
return (function (){
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__11340 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11340) : branch_QMARK_.call(null,G__11340));
})())?(function (){var G__11341 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__11341) : children.call(null,G__11341));
})():null))));
});})(node,temp__4423__auto__))
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
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$propagate,pri_map], 0));
} else {
}

var temp__4423__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4423__auto__)){
var next = temp__4423__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4421__auto__ = next.thunk;
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
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

var G__11344 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4423__auto__){
return (function (p1__11342_SHARP_,p2__11343_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11342_SHARP_,p2__11343_SHARP_,p2__11343_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4423__auto__))
,popq,next.sinks));
pri_map = G__11344;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((function (){var G__11347 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11347) : tailrecursion.javelin.cell_QMARK_.call(null,G__11347));
})())){
var G__11348 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11348) : cljs.core.deref.call(null,G__11348));
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
}catch (e11350){if((e11350 instanceof Error)){
var _ = e11350;
return null;
} else {
throw e11350;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__11353 = c;
tailrecursion.javelin.add_sync_BANG_(G__11353);

return G__11353;
} else {
var G__11354 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__11354));

return G__11354;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11357){
var vec__11358 = p__11357;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11358,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__11359 = cljs.core.seq(srcs);
var chunk__11360 = null;
var count__11361 = (0);
var i__11362 = (0);
while(true){
if((i__11362 < count__11361)){
var src = chunk__11360.cljs$core$IIndexed$_nth$arity$2(null,i__11362);
if(cljs.core.truth_((function (){var G__11363 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11363) : tailrecursion.javelin.cell_QMARK_.call(null,G__11363));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11365 = seq__11359;
var G__11366 = chunk__11360;
var G__11367 = count__11361;
var G__11368 = (i__11362 + (1));
seq__11359 = G__11365;
chunk__11360 = G__11366;
count__11361 = G__11367;
i__11362 = G__11368;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__11359);
if(temp__4423__auto__){
var seq__11359__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11359__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__11359__$1);
var G__11369 = cljs.core.chunk_rest(seq__11359__$1);
var G__11370 = c__4995__auto__;
var G__11371 = cljs.core.count(c__4995__auto__);
var G__11372 = (0);
seq__11359 = G__11369;
chunk__11360 = G__11370;
count__11361 = G__11371;
i__11362 = G__11372;
continue;
} else {
var src = cljs.core.first(seq__11359__$1);
if(cljs.core.truth_((function (){var G__11364 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11364) : tailrecursion.javelin.cell_QMARK_.call(null,G__11364));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__11373 = cljs.core.next(seq__11359__$1);
var G__11374 = null;
var G__11375 = (0);
var G__11376 = (0);
seq__11359 = G__11373;
chunk__11360 = G__11374;
count__11361 = G__11375;
i__11362 = G__11376;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq11355){
var G__11356 = cljs.core.first(seq11355);
var seq11355__$1 = cljs.core.next(seq11355);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11356,seq11355__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__11381){
var vec__11382 = p__11381;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11382,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__11383_11397 = cljs.core.seq(this$.sources);
var chunk__11384_11398 = null;
var count__11385_11399 = (0);
var i__11386_11400 = (0);
while(true){
if((i__11386_11400 < count__11385_11399)){
var source_11401 = chunk__11384_11398.cljs$core$IIndexed$_nth$arity$2(null,i__11386_11400);
if(cljs.core.truth_((function (){var G__11387 = source_11401;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11387) : tailrecursion.javelin.cell_QMARK_.call(null,G__11387));
})())){
source_11401.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11401.sinks,this$);

if((source_11401.rank > this$.rank)){
var seq__11388_11402 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__11383_11397,chunk__11384_11398,count__11385_11399,i__11386_11400,source_11401,vec__11382,f,sources){
return (function (p1__11377_SHARP_){
return p1__11377_SHARP_.sinks;
});})(seq__11383_11397,chunk__11384_11398,count__11385_11399,i__11386_11400,source_11401,vec__11382,f,sources))
,source_11401));
var chunk__11389_11403 = null;
var count__11390_11404 = (0);
var i__11391_11405 = (0);
while(true){
if((i__11391_11405 < count__11390_11404)){
var dep_11406 = chunk__11389_11403.cljs$core$IIndexed$_nth$arity$2(null,i__11391_11405);
dep_11406.rank = tailrecursion.javelin.next_rank();

var G__11407 = seq__11388_11402;
var G__11408 = chunk__11389_11403;
var G__11409 = count__11390_11404;
var G__11410 = (i__11391_11405 + (1));
seq__11388_11402 = G__11407;
chunk__11389_11403 = G__11408;
count__11390_11404 = G__11409;
i__11391_11405 = G__11410;
continue;
} else {
var temp__4423__auto___11411 = cljs.core.seq(seq__11388_11402);
if(temp__4423__auto___11411){
var seq__11388_11412__$1 = temp__4423__auto___11411;
if(cljs.core.chunked_seq_QMARK_(seq__11388_11412__$1)){
var c__4995__auto___11413 = cljs.core.chunk_first(seq__11388_11412__$1);
var G__11414 = cljs.core.chunk_rest(seq__11388_11412__$1);
var G__11415 = c__4995__auto___11413;
var G__11416 = cljs.core.count(c__4995__auto___11413);
var G__11417 = (0);
seq__11388_11402 = G__11414;
chunk__11389_11403 = G__11415;
count__11390_11404 = G__11416;
i__11391_11405 = G__11417;
continue;
} else {
var dep_11418 = cljs.core.first(seq__11388_11412__$1);
dep_11418.rank = tailrecursion.javelin.next_rank();

var G__11419 = cljs.core.next(seq__11388_11412__$1);
var G__11420 = null;
var G__11421 = (0);
var G__11422 = (0);
seq__11388_11402 = G__11419;
chunk__11389_11403 = G__11420;
count__11390_11404 = G__11421;
i__11391_11405 = G__11422;
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

var G__11423 = seq__11383_11397;
var G__11424 = chunk__11384_11398;
var G__11425 = count__11385_11399;
var G__11426 = (i__11386_11400 + (1));
seq__11383_11397 = G__11423;
chunk__11384_11398 = G__11424;
count__11385_11399 = G__11425;
i__11386_11400 = G__11426;
continue;
} else {
var temp__4423__auto___11427 = cljs.core.seq(seq__11383_11397);
if(temp__4423__auto___11427){
var seq__11383_11428__$1 = temp__4423__auto___11427;
if(cljs.core.chunked_seq_QMARK_(seq__11383_11428__$1)){
var c__4995__auto___11429 = cljs.core.chunk_first(seq__11383_11428__$1);
var G__11430 = cljs.core.chunk_rest(seq__11383_11428__$1);
var G__11431 = c__4995__auto___11429;
var G__11432 = cljs.core.count(c__4995__auto___11429);
var G__11433 = (0);
seq__11383_11397 = G__11430;
chunk__11384_11398 = G__11431;
count__11385_11399 = G__11432;
i__11386_11400 = G__11433;
continue;
} else {
var source_11434 = cljs.core.first(seq__11383_11428__$1);
if(cljs.core.truth_((function (){var G__11392 = source_11434;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11392) : tailrecursion.javelin.cell_QMARK_.call(null,G__11392));
})())){
source_11434.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_11434.sinks,this$);

if((source_11434.rank > this$.rank)){
var seq__11393_11435 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__11383_11397,chunk__11384_11398,count__11385_11399,i__11386_11400,source_11434,seq__11383_11428__$1,temp__4423__auto___11427,vec__11382,f,sources){
return (function (p1__11377_SHARP_){
return p1__11377_SHARP_.sinks;
});})(seq__11383_11397,chunk__11384_11398,count__11385_11399,i__11386_11400,source_11434,seq__11383_11428__$1,temp__4423__auto___11427,vec__11382,f,sources))
,source_11434));
var chunk__11394_11436 = null;
var count__11395_11437 = (0);
var i__11396_11438 = (0);
while(true){
if((i__11396_11438 < count__11395_11437)){
var dep_11439 = chunk__11394_11436.cljs$core$IIndexed$_nth$arity$2(null,i__11396_11438);
dep_11439.rank = tailrecursion.javelin.next_rank();

var G__11440 = seq__11393_11435;
var G__11441 = chunk__11394_11436;
var G__11442 = count__11395_11437;
var G__11443 = (i__11396_11438 + (1));
seq__11393_11435 = G__11440;
chunk__11394_11436 = G__11441;
count__11395_11437 = G__11442;
i__11396_11438 = G__11443;
continue;
} else {
var temp__4423__auto___11444__$1 = cljs.core.seq(seq__11393_11435);
if(temp__4423__auto___11444__$1){
var seq__11393_11445__$1 = temp__4423__auto___11444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11393_11445__$1)){
var c__4995__auto___11446 = cljs.core.chunk_first(seq__11393_11445__$1);
var G__11447 = cljs.core.chunk_rest(seq__11393_11445__$1);
var G__11448 = c__4995__auto___11446;
var G__11449 = cljs.core.count(c__4995__auto___11446);
var G__11450 = (0);
seq__11393_11435 = G__11447;
chunk__11394_11436 = G__11448;
count__11395_11437 = G__11449;
i__11396_11438 = G__11450;
continue;
} else {
var dep_11451 = cljs.core.first(seq__11393_11445__$1);
dep_11451.rank = tailrecursion.javelin.next_rank();

var G__11452 = cljs.core.next(seq__11393_11445__$1);
var G__11453 = null;
var G__11454 = (0);
var G__11455 = (0);
seq__11393_11435 = G__11452;
chunk__11394_11436 = G__11453;
count__11395_11437 = G__11454;
i__11396_11438 = G__11455;
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

var G__11456 = cljs.core.next(seq__11383_11428__$1);
var G__11457 = null;
var G__11458 = (0);
var G__11459 = (0);
seq__11383_11397 = G__11456;
chunk__11384_11398 = G__11457;
count__11385_11399 = G__11458;
i__11386_11400 = G__11459;
continue;
}
} else {
}
}
break;
}

var compute_11460 = ((function (vec__11382,f,sources){
return (function (p1__11378_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__11378_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__11378_SHARP_)));
});})(vec__11382,f,sources))
;
this$.thunk = ((function (compute_11460,vec__11382,f,sources){
return (function (){
return this$.state = compute_11460(this$.sources);
});})(compute_11460,vec__11382,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq11379){
var G__11380 = cljs.core.first(seq11379);
var seq11379__$1 = cljs.core.next(seq11379);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11380,seq11379__$1);
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
if(cljs.core.truth_((function (){var G__11461 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11461) : tailrecursion.javelin.lens_QMARK_.call(null,G__11461));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__11462 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11462) : tailrecursion.javelin.input_QMARK_.call(null,G__11462));
})())){
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
var G__11463 = this$__$1;
var G__11464 = (function (){var G__11465 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11465) : f.call(null,G__11465));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11463,G__11464) : cljs.core.reset_BANG_.call(null,G__11463,G__11464));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__11466 = this$__$1;
var G__11467 = (function (){var G__11468 = this$__$1.state;
var G__11469 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11468,G__11469) : f.call(null,G__11468,G__11469));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11466,G__11467) : cljs.core.reset_BANG_.call(null,G__11466,G__11467));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__11470 = this$__$1;
var G__11471 = (function (){var G__11472 = this$__$1.state;
var G__11473 = a;
var G__11474 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11472,G__11473,G__11474) : f.call(null,G__11472,G__11473,G__11474));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11470,G__11471) : cljs.core.reset_BANG_.call(null,G__11470,G__11471));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__11475 = this$__$1;
var G__11476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11475,G__11476) : cljs.core.reset_BANG_.call(null,G__11475,G__11476));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__11477 = cljs.core.seq(self__.watches);
var chunk__11478 = null;
var count__11479 = (0);
var i__11480 = (0);
while(true){
if((i__11480 < count__11479)){
var vec__11481 = chunk__11478.cljs$core$IIndexed$_nth$arity$2(null,i__11480);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11481,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11481,(1),null);
var G__11482_11491 = key;
var G__11483_11492 = this$__$1;
var G__11484_11493 = o;
var G__11485_11494 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11482_11491,G__11483_11492,G__11484_11493,G__11485_11494) : f.call(null,G__11482_11491,G__11483_11492,G__11484_11493,G__11485_11494));

var G__11495 = seq__11477;
var G__11496 = chunk__11478;
var G__11497 = count__11479;
var G__11498 = (i__11480 + (1));
seq__11477 = G__11495;
chunk__11478 = G__11496;
count__11479 = G__11497;
i__11480 = G__11498;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq(seq__11477);
if(temp__4423__auto__){
var seq__11477__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11477__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__11477__$1);
var G__11499 = cljs.core.chunk_rest(seq__11477__$1);
var G__11500 = c__4995__auto__;
var G__11501 = cljs.core.count(c__4995__auto__);
var G__11502 = (0);
seq__11477 = G__11499;
chunk__11478 = G__11500;
count__11479 = G__11501;
i__11480 = G__11502;
continue;
} else {
var vec__11486 = cljs.core.first(seq__11477__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11486,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11486,(1),null);
var G__11487_11503 = key;
var G__11488_11504 = this$__$1;
var G__11489_11505 = o;
var G__11490_11506 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11487_11503,G__11488_11504,G__11489_11505,G__11490_11506) : f.call(null,G__11487_11503,G__11488_11504,G__11489_11505,G__11490_11506));

var G__11507 = cljs.core.next(seq__11477__$1);
var G__11508 = null;
var G__11509 = (0);
var G__11510 = (0);
seq__11477 = G__11507;
chunk__11478 = G__11508;
count__11479 = G__11509;
i__11480 = G__11510;
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
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"tailrecursion.javelin/Cell");
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
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return c.thunk;
} else {
return and__4198__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return c.update;
} else {
return and__4198__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__4198__auto__;
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
var G__11513__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11512 = cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__11512) : tailrecursion.javelin.cell.call(null,G__11512));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__11513 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__11514__i = 0, G__11514__a = new Array(arguments.length -  0);
while (G__11514__i < G__11514__a.length) {G__11514__a[G__11514__i] = arguments[G__11514__i + 0]; ++G__11514__i;}
  sources = new cljs.core.IndexedSeq(G__11514__a,0);
} 
return G__11513__delegate.call(this,sources);};
G__11513.cljs$lang$maxFixedArity = 0;
G__11513.cljs$lang$applyTo = (function (arglist__11515){
var sources = cljs.core.seq(arglist__11515);
return G__11513__delegate(sources);
});
G__11513.cljs$core$IFn$_invoke$arity$variadic = G__11513__delegate;
return G__11513;
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
var bind = (function (p1__11516_SHARP_){
var _STAR_tx_STAR_11521 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__11522 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11522) : cljs.core.atom.call(null,G__11522));
})();

try{return (p1__11516_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__11516_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__11516_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_11521;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__11523 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11523) : cljs.core.deref.call(null,G__11523));
})();
var _STAR_tx_STAR_11524 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_11524;
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
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__11531 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11531) : cljs.core.atom.call(null,G__11531));
})();
var tag_neq = ((function (olds){
return (function (p1__11525_SHARP_,p2__11526_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__11525_SHARP_,p2__11526_SHARP_),p2__11526_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__11528_SHARP_,p2__11527_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__11528_SHARP_,p2__11527_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__11535__delegate = function (rest__11529_SHARP_){
var news = diff((function (){var G__11532 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11532) : cljs.core.deref.call(null,G__11532));
})(),rest__11529_SHARP_);
var G__11533_11536 = olds;
var G__11534_11537 = rest__11529_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11533_11536,G__11534_11537) : cljs.core.reset_BANG_.call(null,G__11533_11536,G__11534_11537));

return news;
};
var G__11535 = function (var_args){
var rest__11529_SHARP_ = null;
if (arguments.length > 0) {
var G__11538__i = 0, G__11538__a = new Array(arguments.length -  0);
while (G__11538__i < G__11538__a.length) {G__11538__a[G__11538__i] = arguments[G__11538__i + 0]; ++G__11538__i;}
  rest__11529_SHARP_ = new cljs.core.IndexedSeq(G__11538__a,0);
} 
return G__11535__delegate.call(this,rest__11529_SHARP_);};
G__11535.cljs$lang$maxFixedArity = 0;
G__11535.cljs$lang$applyTo = (function (arglist__11539){
var rest__11529_SHARP_ = cljs.core.seq(arglist__11539);
return G__11535__delegate(rest__11529_SHARP_);
});
G__11535.cljs$core$IFn$_invoke$arity$variadic = G__11535__delegate;
return G__11535;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq11530){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11530));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__11540_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__11540_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__11542 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11542) : cljs.core.deref.call(null,G__11542));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items,f){
var pool_size = tailrecursion.javelin.cell((0));
var items_seq = tailrecursion.javelin.formula(cljs.core.seq).call(null,items);
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__11543_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__11543_SHARP_);
});})(pool_size,items_seq,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__11553_11562 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__11554_11563 = null;
var count__11555_11564 = (0);
var i__11556_11565 = (0);
while(true){
if((i__11556_11565 < count__11555_11564)){
var i_11566 = chunk__11554_11563.cljs$core$IIndexed$_nth$arity$2(null,i__11556_11565);
var G__11557_11567 = (function (){var G__11558 = i_11566;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__11558) : ith_item__$1.call(null,G__11558));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11557_11567) : f__$1.call(null,G__11557_11567));

var G__11568 = seq__11553_11562;
var G__11569 = chunk__11554_11563;
var G__11570 = count__11555_11564;
var G__11571 = (i__11556_11565 + (1));
seq__11553_11562 = G__11568;
chunk__11554_11563 = G__11569;
count__11555_11564 = G__11570;
i__11556_11565 = G__11571;
continue;
} else {
var temp__4423__auto___11572 = cljs.core.seq(seq__11553_11562);
if(temp__4423__auto___11572){
var seq__11553_11573__$1 = temp__4423__auto___11572;
if(cljs.core.chunked_seq_QMARK_(seq__11553_11573__$1)){
var c__4995__auto___11574 = cljs.core.chunk_first(seq__11553_11573__$1);
var G__11575 = cljs.core.chunk_rest(seq__11553_11573__$1);
var G__11576 = c__4995__auto___11574;
var G__11577 = cljs.core.count(c__4995__auto___11574);
var G__11578 = (0);
seq__11553_11562 = G__11575;
chunk__11554_11563 = G__11576;
count__11555_11564 = G__11577;
i__11556_11565 = G__11578;
continue;
} else {
var i_11579 = cljs.core.first(seq__11553_11573__$1);
var G__11559_11580 = (function (){var G__11560 = i_11579;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__11560) : ith_item__$1.call(null,G__11560));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__11559_11580) : f__$1.call(null,G__11559_11580));

var G__11581 = cljs.core.next(seq__11553_11573__$1);
var G__11582 = null;
var G__11583 = (0);
var G__11584 = (0);
seq__11553_11562 = G__11581;
chunk__11554_11563 = G__11582;
count__11555_11564 = G__11583;
i__11556_11565 = G__11584;
continue;
}
} else {
}
}
break;
}

var G__11561 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__11561) : reset_pool_size_BANG_.call(null,G__11561));
} else {
return null;
}
});})(pool_size,items_seq,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
