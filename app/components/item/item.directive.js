"use strict";

angular.module("item").directive("item", () => {
    return {
        restrict: "E",
        scope: {
            item: "="
        },
        templateUrl: (elem, attr) => {
            if (attr.type === "collapsable") return "components/item/item-collabsable.html";
        },
        controller: "ItemController"
    }
});