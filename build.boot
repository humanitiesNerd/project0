(set-env!
  :project 'hoplon-semantic-test
  :version "0.1.0-SNAPSHOT"
  :dependencies '[
    [adzerk/boot-reload  "0.3.1" :scope "test"]
    [cljsjs/boot-cljsjs "0.5.0" :scope "test"]
    [exicon/semantic-ui "2.0.6-SNAPSHOT"]
    [tailrecursion/javelin "3.6.3"]
    [adzerk/boot-cljs "1.7.48-SNAPSHOT"]
    [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
    [tailrecursion/hoplon "6.0.0-SNAPSHOT"]
    [pandeiro/boot-http "0.6.3"]]
  :exclusions '[[com.keminglabs/cljx]]
  :source-paths #{"src"}
  :resource-paths #{"resources/assets"}
  )

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[cljsjs.boot-cljsjs :refer [from-cljsjs]]
;  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer :all]
  '[pandeiro.boot-http :refer [serve]]
  '[tailrecursion.boot-hoplon :refer [hoplon prerender html2cljs]])

(deftask dev
  "Build hoplon.io for local development."
  []
  (comp
    (from-cljsjs :profile :development)
    (sift :to-resource #{#"themes"})
    (sift :to-resource #{#"semantic-ui.inc.css"})
    (sift :move {#"^semantic-ui.inc.css$" "semantic-ui.css"})
    (watch)
;    (speak)
    (serve :dir "target")
    (hoplon)
    (reload)
    (cljs)))

(deftask prod
  "Build hoplon.io for production deployment."
  []
  (comp
    (from-cljsjs :profile :production)
    (sift :to-resource #{#"themes"})
    (sift :to-resource #{#"semantic-ui.min.inc.css"})
    (sift :move {#"^semantic-ui.min.inc.css$" "semantic-ui.css"})
    (hoplon :pretty-print true)
    (cljs :optimizations :advanced :source-map true)
    (prerender)))
