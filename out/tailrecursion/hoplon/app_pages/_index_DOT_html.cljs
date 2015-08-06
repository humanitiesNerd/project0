(ns tailrecursion.hoplon.app-pages._index_DOT_html
  (:require [tailrecursion.hoplon.util :as hutil]
            [tailrecursion.hoplon :refer [form
                                          audio
                                          input
                                          hgroup
                                          do!
                                          timeout
                                          $text
                                          rely
                                          base
                                          h1
                                          embed
                                          h3
                                          body
                                          keygen
                                          val-id
                                          on-append!
                                          progress
                                          main
                                          cite
                                          on-page-load
                                          object
                                          i
                                          p
                                          nav
                                          ruby
                                          relx
                                          check-val!
                                          a
                                          menu
                                          blockquote
                                          img
                                          $comment
                                          span
                                          track
                                          seq?*
                                          data
                                          u
                                          dl
                                          select
                                          html
                                          thead
                                          del
                                          eventsource
                                          append-child
                                          fieldset
                                          rel
                                          aside
                                          figure
                                          figcaption
                                          q
                                          on!
                                          bdi
                                          video
                                          address
                                          caption
                                          parse-args
                                          by-id
                                          dd
                                          rp
                                          hr
                                          tbody
                                          table
                                          acronym
                                          frame
                                          applet
                                          html-var
                                          add-initfn!
                                          pre
                                          ul
                                          dir
                                          html-time
                                          add-attributes!
                                          html-map
                                          sup
                                          dfn
                                          sub
                                          mark
                                          script
                                          big
                                          button
                                          wbr
                                          strong
                                          li
                                          dt
                                          frameset
                                          td
                                          tr
                                          section
                                          th
                                          optgroup
                                          rel-event
                                          iframe
                                          legend
                                          em
                                          kbd
                                          spliced
                                          article
                                          isindex
                                          abbr
                                          command
                                          source
                                          output
                                          basefont
                                          route-cell
                                          header
                                          datalist
                                          tfoot
                                          s
                                          ins
                                          footer
                                          title
                                          is-ie8
                                          h5
                                          canvas
                                          param
                                          font
                                          div
                                          option
                                          summary
                                          samp
                                          center
                                          small
                                          style
                                          textarea
                                          loop-tpl*
                                          strike
                                          h4
                                          tt
                                          head
                                          add-children!
                                          ol
                                          details
                                          col
                                          vector?*
                                          label
                                          rt
                                          when-dom
                                          h6
                                          link
                                          page-load
                                          colgroup
                                          meter
                                          html-meta
                                          text-val!
                                          bdo
                                          b
                                          code
                                          node?
                                          noframes
                                          replace-children!
                                          noscript
                                          safe-nth
                                          h2
                                          area
                                          br
                                          unsplice]]
            [tailrecursion.javelin :refer [input?
                                           cell
                                           cell?
                                           destroy-cell!
                                           ^{:private true} last-rank
                                           ^{:deprecated true} lift
                                           lens?
                                           set-formula!
                                           cell-doseq*
                                           ^{:private true, :dynamic true} *tx*
                                           deref*
                                           set-cell!
                                           lens
                                           formula?
                                           alts!
                                           dosync*
                                           cell-map
                                           formula]])
  (:require-macros [tailrecursion.hoplon :refer [text
                                                 with-timeout
                                                 sexp
                                                 defelem
                                                 def-values
                                                 with-page-load
                                                 loop-tpl
                                                 with-interval
                                                 with-init!]]
                   [tailrecursion.javelin :refer [with-let
                                                  mx2
                                                  dosync
                                                  cell=
                                                  set-cell!=
                                                  prop-cell
                                                  cell-doseq
                                                  defc
                                                  cell-let-1
                                                  defc=
                                                  macroexpand-all
                                                  mx cell-let]]))
(def route (route-cell "#/home/"))
(with-page-load (.. js/window -location reload))
(defelem
  viewport
  [attr kids]
  (html-meta :name "viewport" :content (first kids)))
(defn setup []
  (vector
    (viewport "width=device-width, initial-scale=1.0")
    (html-meta :content "https://twitter.com/catonano" :name "author")))
(html
  :lang
  "en"
  (head (html-meta :charset "utf-8") (setup) (title "Project0"))
  (body
    (div
      (a :do-scroll-to (cell= route))
      (noscript
        (div
          "This page uses JavaScript but it looks like you have it turned off."))
      ((div :class "ui main text container")
        (h1 :class "ui header" "Sticky Example")
        (p
          "This example shows how to use lazy loaded images, a sticky menu, and a simple text container")))))