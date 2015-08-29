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
return (function (p1__7112_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7112_SHARP_,path);
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
var seq__7117 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7118 = null;
var count__7119 = (0);
var i__7120 = (0);
while(true){
if((i__7120 < count__7119)){
var s = cljs.core._nth.call(null,chunk__7118,i__7120);
var temp__4425__auto___7121 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7121)){
var sheet_7122 = temp__4425__auto___7121;
var temp__4425__auto___7123__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7122.href,changed);
if(cljs.core.truth_(temp__4425__auto___7123__$1)){
var href_uri_7124 = temp__4425__auto___7123__$1;
sheet_7122.ownerNode.href = href_uri_7124.makeUnique().toString();
} else {
}
} else {
}

var G__7125 = seq__7117;
var G__7126 = chunk__7118;
var G__7127 = count__7119;
var G__7128 = (i__7120 + (1));
seq__7117 = G__7125;
chunk__7118 = G__7126;
count__7119 = G__7127;
i__7120 = G__7128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7117);
if(temp__4425__auto__){
var seq__7117__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7117__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7117__$1);
var G__7129 = cljs.core.chunk_rest.call(null,seq__7117__$1);
var G__7130 = c__5806__auto__;
var G__7131 = cljs.core.count.call(null,c__5806__auto__);
var G__7132 = (0);
seq__7117 = G__7129;
chunk__7118 = G__7130;
count__7119 = G__7131;
i__7120 = G__7132;
continue;
} else {
var s = cljs.core.first.call(null,seq__7117__$1);
var temp__4425__auto___7133__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7133__$1)){
var sheet_7134 = temp__4425__auto___7133__$1;
var temp__4425__auto___7135__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7134.href,changed);
if(cljs.core.truth_(temp__4425__auto___7135__$2)){
var href_uri_7136 = temp__4425__auto___7135__$2;
sheet_7134.ownerNode.href = href_uri_7136.makeUnique().toString();
} else {
}
} else {
}

var G__7137 = cljs.core.next.call(null,seq__7117__$1);
var G__7138 = null;
var G__7139 = (0);
var G__7140 = (0);
seq__7117 = G__7137;
chunk__7118 = G__7138;
count__7119 = G__7139;
i__7120 = G__7140;
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
var seq__7145 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7146 = null;
var count__7147 = (0);
var i__7148 = (0);
while(true){
if((i__7148 < count__7147)){
var s = cljs.core._nth.call(null,chunk__7146,i__7148);
var temp__4425__auto___7149 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7149)){
var image_7150 = temp__4425__auto___7149;
var temp__4425__auto___7151__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7150.src,changed);
if(cljs.core.truth_(temp__4425__auto___7151__$1)){
var href_uri_7152 = temp__4425__auto___7151__$1;
image_7150.src = href_uri_7152.makeUnique().toString();
} else {
}
} else {
}

var G__7153 = seq__7145;
var G__7154 = chunk__7146;
var G__7155 = count__7147;
var G__7156 = (i__7148 + (1));
seq__7145 = G__7153;
chunk__7146 = G__7154;
count__7147 = G__7155;
i__7148 = G__7156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7145);
if(temp__4425__auto__){
var seq__7145__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7145__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7145__$1);
var G__7157 = cljs.core.chunk_rest.call(null,seq__7145__$1);
var G__7158 = c__5806__auto__;
var G__7159 = cljs.core.count.call(null,c__5806__auto__);
var G__7160 = (0);
seq__7145 = G__7157;
chunk__7146 = G__7158;
count__7147 = G__7159;
i__7148 = G__7160;
continue;
} else {
var s = cljs.core.first.call(null,seq__7145__$1);
var temp__4425__auto___7161__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7161__$1)){
var image_7162 = temp__4425__auto___7161__$1;
var temp__4425__auto___7163__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7162.src,changed);
if(cljs.core.truth_(temp__4425__auto___7163__$2)){
var href_uri_7164 = temp__4425__auto___7163__$2;
image_7162.src = href_uri_7164.makeUnique().toString();
} else {
}
} else {
}

var G__7165 = cljs.core.next.call(null,seq__7145__$1);
var G__7166 = null;
var G__7167 = (0);
var G__7168 = (0);
seq__7145 = G__7165;
chunk__7146 = G__7166;
count__7147 = G__7167;
i__7148 = G__7168;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7171){
var map__7174 = p__7171;
var map__7174__$1 = ((((!((map__7174 == null)))?((((map__7174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7174):map__7174);
var on_jsload = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7174,map__7174__$1,on_jsload){
return (function (p1__7169_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7169_SHARP_,".js");
});})(map__7174,map__7174__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7174,map__7174__$1,on_jsload){
return (function (p1__7170_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7170_SHARP_).makeUnique());
});})(js_files,map__7174,map__7174__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7174,map__7174__$1,on_jsload){
return (function() { 
var G__7176__delegate = function (_){
return on_jsload.call(null);
};
var G__7176 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7177__i = 0, G__7177__a = new Array(arguments.length -  0);
while (G__7177__i < G__7177__a.length) {G__7177__a[G__7177__i] = arguments[G__7177__i + 0]; ++G__7177__i;}
  _ = new cljs.core.IndexedSeq(G__7177__a,0);
} 
return G__7176__delegate.call(this,_);};
G__7176.cljs$lang$maxFixedArity = 0;
G__7176.cljs$lang$applyTo = (function (arglist__7178){
var _ = cljs.core.seq(arglist__7178);
return G__7176__delegate(_);
});
G__7176.cljs$core$IFn$_invoke$arity$variadic = G__7176__delegate;
return G__7176;
})()
;})(js_files,map__7174,map__7174__$1,on_jsload))
,((function (js_files,map__7174,map__7174__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7174,map__7174__$1,on_jsload))
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

var seq__7183_7187 = cljs.core.seq.call(null,things_to_log);
var chunk__7184_7188 = null;
var count__7185_7189 = (0);
var i__7186_7190 = (0);
while(true){
if((i__7186_7190 < count__7185_7189)){
var t_7191 = cljs.core._nth.call(null,chunk__7184_7188,i__7186_7190);
console.log(t_7191);

var G__7192 = seq__7183_7187;
var G__7193 = chunk__7184_7188;
var G__7194 = count__7185_7189;
var G__7195 = (i__7186_7190 + (1));
seq__7183_7187 = G__7192;
chunk__7184_7188 = G__7193;
count__7185_7189 = G__7194;
i__7186_7190 = G__7195;
continue;
} else {
var temp__4425__auto___7196 = cljs.core.seq.call(null,seq__7183_7187);
if(temp__4425__auto___7196){
var seq__7183_7197__$1 = temp__4425__auto___7196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7183_7197__$1)){
var c__5806__auto___7198 = cljs.core.chunk_first.call(null,seq__7183_7197__$1);
var G__7199 = cljs.core.chunk_rest.call(null,seq__7183_7197__$1);
var G__7200 = c__5806__auto___7198;
var G__7201 = cljs.core.count.call(null,c__5806__auto___7198);
var G__7202 = (0);
seq__7183_7187 = G__7199;
chunk__7184_7188 = G__7200;
count__7185_7189 = G__7201;
i__7186_7190 = G__7202;
continue;
} else {
var t_7203 = cljs.core.first.call(null,seq__7183_7197__$1);
console.log(t_7203);

var G__7204 = cljs.core.next.call(null,seq__7183_7197__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7183_7187 = G__7204;
chunk__7184_7188 = G__7205;
count__7185_7189 = G__7206;
i__7186_7190 = G__7207;
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

var G__7209 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7209,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7209);

adzerk.boot_reload.reload.reload_css.call(null,G__7209);

adzerk.boot_reload.reload.reload_img.call(null,G__7209);

return G__7209;
});

//# sourceMappingURL=reload.js.map