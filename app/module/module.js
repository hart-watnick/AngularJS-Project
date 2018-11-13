"use strict";


angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/home-page", {
                template: "<home-page></home-page>"
            })
            .when("/watchlist-page", {
                template: "<watchlist-page></watchlist-page>"
            })
            .when("/results-list", {
                template: "<results-list></results-list>"
            })
            .when("/search-page", {
                template: "<search-page></search-page>"
            })
            .otherwise({redirectTo: "/home-page"})
    }]);