'use strict';

(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === "function" && define.amd) {
        define(["leaflet"], factory);

        // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === "object") {
        module.exports = factory(require("leaflet"));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== "undefined" && window.L) {
        window.L.Routing = factory(L);
    }
}(function (L) {
    L.Routing = {
        add: function (x, y) {
            return x + y
        }

    };
    // implement your plugin

    // return your plugin when you are done
    return L.Routing;
}, window));