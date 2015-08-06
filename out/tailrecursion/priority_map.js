// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.val(f)),cljs.core.key(f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq((function (){var iter__4964__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__11588(s__11589){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__11589__$1 = s__11589;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__11589__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var vec__11598 = cljs.core.first(xs__4975__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11598,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11598,(1),null);
var iterys__4960__auto__ = ((function (s__11589__$1,vec__11598,priority,item_set,xs__4975__auto__,temp__4423__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__11588_$_iter__11590(s__11591){
return (new cljs.core.LazySeq(null,((function (s__11589__$1,vec__11598,priority,item_set,xs__4975__auto__,temp__4423__auto__,coll__$1){
return (function (){
var s__11591__$1 = s__11591;
while(true){
var temp__4423__auto____$1 = cljs.core.seq(s__11591__$1);
if(temp__4423__auto____$1){
var s__11591__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11591__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__11591__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__11593 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__11592 = (0);
while(true){
if((i__11592 < size__4963__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__11592);
cljs.core.chunk_append(b__11593,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__11630 = (i__11592 + (1));
i__11592 = G__11630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11593),tailrecursion$priority_map$iter__11588_$_iter__11590(cljs.core.chunk_rest(s__11591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11593),null);
}
} else {
var item = cljs.core.first(s__11591__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__11588_$_iter__11590(cljs.core.rest(s__11591__$2)));
}
} else {
return null;
}
break;
}
});})(s__11589__$1,vec__11598,priority,item_set,xs__4975__auto__,temp__4423__auto__,coll__$1))
,null,null));
});})(s__11589__$1,vec__11598,priority,item_set,xs__4975__auto__,temp__4423__auto__,coll__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(item_set));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,tailrecursion$priority_map$iter__11588(cljs.core.rest(s__11589__$1)));
} else {
var G__11631 = cljs.core.rest(s__11589__$1);
s__11589__$1 = G__11631;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4964__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this$__$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (function (){var G__11601 = item;
var G__11602 = cljs.core.constant$keyword$tailrecursion$priority_DASH_map_SLASH_not_DASH_found;
return (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(G__11601,G__11602) : self__.item__GT_priority.call(null,G__11601,G__11602));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.constant$keyword$tailrecursion$priority_DASH_map_SLASH_not_DASH_found)){
return this$__$1;
} else {
var item_set = (function (){var G__11603 = priority;
return (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(G__11603) : self__.priority__GT_set_of_items.call(null,G__11603));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4421__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4421__auto__)){
var current_priority = temp__4421__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),item),cljs.core.array_seq([priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq((function (){var iter__4964__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__11604(s__11605){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__11605__$1 = s__11605;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__11605__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var vec__11614 = cljs.core.first(xs__4975__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11614,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11614,(1),null);
var iterys__4960__auto__ = ((function (s__11605__$1,vec__11614,priority,item_set,xs__4975__auto__,temp__4423__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__11604_$_iter__11606(s__11607){
return (new cljs.core.LazySeq(null,((function (s__11605__$1,vec__11614,priority,item_set,xs__4975__auto__,temp__4423__auto__,this$__$1){
return (function (){
var s__11607__$1 = s__11607;
while(true){
var temp__4423__auto____$1 = cljs.core.seq(s__11607__$1);
if(temp__4423__auto____$1){
var s__11607__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11607__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__11607__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__11609 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__11608 = (0);
while(true){
if((i__11608 < size__4963__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__11608);
cljs.core.chunk_append(b__11609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__11632 = (i__11608 + (1));
i__11608 = G__11632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11609),tailrecursion$priority_map$iter__11604_$_iter__11606(cljs.core.chunk_rest(s__11607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11609),null);
}
} else {
var item = cljs.core.first(s__11607__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__11604_$_iter__11606(cljs.core.rest(s__11607__$2)));
}
} else {
return null;
}
break;
}
});})(s__11605__$1,vec__11614,priority,item_set,xs__4975__auto__,temp__4423__auto__,this$__$1))
,null,null));
});})(s__11605__$1,vec__11614,priority,item_set,xs__4975__auto__,temp__4423__auto__,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(item_set));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,tailrecursion$priority_map$iter__11604(cljs.core.rest(s__11605__$1)));
} else {
var G__11633 = cljs.core.rest(s__11605__$1);
s__11605__$1 = G__11633;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__11634 = null;
var G__11634__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__11634__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__11634 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__11634__2.call(this,self__,item);
case 3:
return G__11634__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11634.cljs$core$IFn$_invoke$arity$2 = G__11634__2;
G__11634.cljs$core$IFn$_invoke$arity$3 = G__11634__3;
return G__11634;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args11587){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11587)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq((function (){var iter__4964__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__11617(s__11618){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__11618__$1 = s__11618;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__11618__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var vec__11627 = cljs.core.first(xs__4975__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11627,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11627,(1),null);
var iterys__4960__auto__ = ((function (s__11618__$1,vec__11627,priority,item_set,xs__4975__auto__,temp__4423__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__11617_$_iter__11619(s__11620){
return (new cljs.core.LazySeq(null,((function (s__11618__$1,vec__11627,priority,item_set,xs__4975__auto__,temp__4423__auto__,sets,this$__$1){
return (function (){
var s__11620__$1 = s__11620;
while(true){
var temp__4423__auto____$1 = cljs.core.seq(s__11620__$1);
if(temp__4423__auto____$1){
var s__11620__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11620__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__11620__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__11622 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__11621 = (0);
while(true){
if((i__11621 < size__4963__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__11621);
cljs.core.chunk_append(b__11622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__11635 = (i__11621 + (1));
i__11621 = G__11635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11622),tailrecursion$priority_map$iter__11617_$_iter__11619(cljs.core.chunk_rest(s__11620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11622),null);
}
} else {
var item = cljs.core.first(s__11620__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__11617_$_iter__11619(cljs.core.rest(s__11620__$2)));
}
} else {
return null;
}
break;
}
});})(s__11618__$1,vec__11627,priority,item_set,xs__4975__auto__,temp__4423__auto__,sets,this$__$1))
,null,null));
});})(s__11618__$1,vec__11627,priority,item_set,xs__4975__auto__,temp__4423__auto__,sets,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(item_set));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,tailrecursion$priority_map$iter__11617(cljs.core.rest(s__11618__$1)));
} else {
var G__11636 = cljs.core.rest(s__11618__$1);
s__11618__$1 = G__11636;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4964__auto__(sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val(entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Priority map literal expects a map for its elements."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 * Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__11638 = cljs.core.nnext(in$);
var G__11639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__11638;
out = G__11639;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq11637){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11637));
});
/**
 * keyval => key val
 * Returns a new priority map with supplied
 * mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__11642 = cljs.core.nnext(in$);
var G__11643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__11642;
out = G__11643;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq11640){
var G__11641 = cljs.core.first(seq11640);
var seq11640__$1 = cljs.core.next(seq11640);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__11641,seq11640__$1);
});
