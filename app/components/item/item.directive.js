"use strict";

angular.module("item").directive("item", () => {
    return {
        restrict: "E",
        scope: {
            item: "="
        },
        templateUrl: "components/item/item.html",
        controller: "ItemController"
    }
});