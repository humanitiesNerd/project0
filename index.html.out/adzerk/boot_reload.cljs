(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(when-not (client/alive?) (client/connect "ws://localhost:47652" {:on-jsload (fn* [] (+))}))