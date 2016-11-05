"use strict";

angular.module("shopItem").directive("shopItem", () => {
    return {
        restrict: "E",
        scope: {
            shop: "="
        },
        templateUrl: "components/shop-item/shop-item.html",
        controller: "ShopItemController"
    }
});