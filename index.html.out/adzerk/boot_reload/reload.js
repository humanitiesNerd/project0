// Compiled by ClojureScript 1.7.48 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__7115_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7115_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7120 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7121 = null;
var count__7122 = (0);
var i__7123 = (0);
while(true){
if((i__7123 < count__7122)){
var s = cljs.core._nth.call(null,chunk__7121,i__7123);
var temp__4425__auto___7124 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7124)){
var sheet_7125 = temp__4425__auto___7124;
var temp__4425__auto___7126__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7125.href,changed);
if(cljs.core.truth_(temp__4425__auto___7126__$1)){
var href_uri_7127 = temp__4425__auto___7126__$1;
sheet_7125.ownerNode.href = href_uri_7127.makeUnique().toString();
} else {
}
} else {
}

var G__7128 = seq__7120;
var G__7129 = chunk__7121;
var G__7130 = count__7122;
var G__7131 = (i__7123 + (1));
seq__7120 = G__7128;
chunk__7121 = G__7129;
count__7122 = G__7130;
i__7123 = G__7131;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7120);
if(temp__4425__auto__){
var seq__7120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7120__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7120__$1);
var G__7132 = cljs.core.chunk_rest.call(null,seq__7120__$1);
var G__7133 = c__5806__auto__;
var G__7134 = cljs.core.count.call(null,c__5806__auto__);
var G__7135 = (0);
seq__7120 = G__7132;
chunk__7121 = G__7133;
count__7122 = G__7134;
i__7123 = G__7135;
continue;
} else {
var s = cljs.core.first.call(null,seq__7120__$1);
var temp__4425__auto___7136__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7136__$1)){
var sheet_7137 = temp__4425__auto___7136__$1;
var temp__4425__auto___7138__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7137.href,changed);
if(cljs.core.truth_(temp__4425__auto___7138__$2)){
var href_uri_7139 = temp__4425__auto___7138__$2;
sheet_7137.ownerNode.href = href_uri_7139.makeUnique().toString();
} else {
}
} else {
}

var G__7140 = cljs.core.next.call(null,seq__7120__$1);
var G__7141 = null;
var G__7142 = (0);
var G__7143 = (0);
seq__7120 = G__7140;
chunk__7121 = G__7141;
count__7122 = G__7142;
i__7123 = G__7143;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7148 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7149 = null;
var count__7150 = (0);
var i__7151 = (0);
while(true){
if((i__7151 < count__7150)){
var s = cljs.core._nth.call(null,chunk__7149,i__7151);
var temp__4425__auto___7152 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7152)){
var image_7153 = temp__4425__auto___7152;
var temp__4425__auto___7154__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7153.src,changed);
if(cljs.core.truth_(temp__4425__auto___7154__$1)){
var href_uri_7155 = temp__4425__auto___7154__$1;
image_7153.src = href_uri_7155.makeUnique().toString();
} else {
}
} else {
}

var G__7156 = seq__7148;
var G__7157 = chunk__7149;
var G__7158 = count__7150;
var G__7159 = (i__7151 + (1));
seq__7148 = G__7156;
chunk__7149 = G__7157;
count__7150 = G__7158;
i__7151 = G__7159;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7148);
if(temp__4425__auto__){
var seq__7148__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7148__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7148__$1);
var G__7160 = cljs.core.chunk_rest.call(null,seq__7148__$1);
var G__7161 = c__5806__auto__;
var G__7162 = cljs.core.count.call(null,c__5806__auto__);
var G__7163 = (0);
seq__7148 = G__7160;
chunk__7149 = G__7161;
count__7150 = G__7162;
i__7151 = G__7163;
continue;
} else {
var s = cljs.core.first.call(null,seq__7148__$1);
var temp__4425__auto___7164__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7164__$1)){
var image_7165 = temp__4425__auto___7164__$1;
var temp__4425__auto___7166__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7165.src,changed);
if(cljs.core.truth_(temp__4425__auto___7166__$2)){
var href_uri_7167 = temp__4425__auto___7166__$2;
image_7165.src = href_uri_7167.makeUnique().toString();
} else {
}
} else {
}

var G__7168 = cljs.core.next.call(null,seq__7148__$1);
var G__7169 = null;
var G__7170 = (0);
var G__7171 = (0);
seq__7148 = G__7168;
chunk__7149 = G__7169;
count__7150 = G__7170;
i__7151 = G__7171;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7174){
var map__7177 = p__7174;
var map__7177__$1 = ((((!((map__7177 == null)))?((((map__7177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7177):map__7177);
var on_jsload = cljs.core.get.call(null,map__7177__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7177,map__7177__$1,on_jsload){
return (function (p1__7172_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7172_SHARP_,".js");
});})(map__7177,map__7177__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7177,map__7177__$1,on_jsload){
return (function (p1__7173_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7173_SHARP_).makeUnique());
});})(js_files,map__7177,map__7177__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7177,map__7177__$1,on_jsload){
return (function() { 
var G__7179__delegate = function (_){
return on_jsload.call(null);
};
var G__7179 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7180__i = 0, G__7180__a = new Array(arguments.length -  0);
while (G__7180__i < G__7180__a.length) {G__7180__a[G__7180__i] = arguments[G__7180__i + 0]; ++G__7180__i;}
  _ = new cljs.core.IndexedSeq(G__7180__a,0);
} 
return G__7179__delegate.call(this,_);};
G__7179.cljs$lang$maxFixedArity = 0;
G__7179.cljs$lang$applyTo = (function (arglist__7181){
var _ = cljs.core.seq(arglist__7181);
return G__7179__delegate(_);
});
G__7179.cljs$core$IFn$_invoke$arity$variadic = G__7179__delegate;
return G__7179;
})()
;})(js_files,map__7177,map__7177__$1,on_jsload))
,((function (js_files,map__7177,map__7177__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7177,map__7177__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7186_7190 = cljs.core.seq.call(null,things_to_log);
var chunk__7187_7191 = null;
var count__7188_7192 = (0);
var i__7189_7193 = (0);
while(true){
if((i__7189_7193 < count__7188_7192)){
var t_7194 = cljs.core._nth.call(null,chunk__7187_7191,i__7189_7193);
console.log(t_7194);

var G__7195 = seq__7186_7190;
var G__7196 = chunk__7187_7191;
var G__7197 = count__7188_7192;
var G__7198 = (i__7189_7193 + (1));
seq__7186_7190 = G__7195;
chunk__7187_7191 = G__7196;
count__7188_7192 = G__7197;
i__7189_7193 = G__7198;
continue;
} else {
var temp__4425__auto___7199 = cljs.core.seq.call(null,seq__7186_7190);
if(temp__4425__auto___7199){
var seq__7186_7200__$1 = temp__4425__auto___7199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7186_7200__$1)){
var c__5806__auto___7201 = cljs.core.chunk_first.call(null,seq__7186_7200__$1);
var G__7202 = cljs.core.chunk_rest.call(null,seq__7186_7200__$1);
var G__7203 = c__5806__auto___7201;
var G__7204 = cljs.core.count.call(null,c__5806__auto___7201);
var G__7205 = (0);
seq__7186_7190 = G__7202;
chunk__7187_7191 = G__7203;
count__7188_7192 = G__7204;
i__7189_7193 = G__7205;
continue;
} else {
var t_7206 = cljs.core.first.call(null,seq__7186_7200__$1);
console.log(t_7206);

var G__7207 = cljs.core.next.call(null,seq__7186_7200__$1);
var G__7208 = null;
var G__7209 = (0);
var G__7210 = (0);
seq__7186_7190 = G__7207;
chunk__7187_7191 = G__7208;
count__7188_7192 = G__7209;
i__7189_7193 = G__7210;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7212 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7212,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7212);

adzerk.boot_reload.reload.reload_css.call(null,G__7212);

adzerk.boot_reload.reload.reload_img.call(null,G__7212);

return G__7212;
});

//# sourceMappingURL=reload.js.map