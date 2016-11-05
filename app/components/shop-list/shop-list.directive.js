"use strict";

angular.module("shopList").directive("shopList", () => {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "components/shop-list/shop-list.html",
        controller: "ShopListController"
    }
});