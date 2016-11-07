"use strict";

angular.module("item").directive("item", () => {
    return {
        restrict: "E",
        scope: {
            item: "=",
            type: "@",
            parentId: "=?"
        },
        template: "<div ng-include=\"'app/components/item/item-' + type + '.html'\"></div>",
        controller: "ItemController"
    }
});