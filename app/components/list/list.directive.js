"use strict";

angular.module("list").directive("list", () => {
    return {
        restrict: "E",
        scope: {
            list: "=?",
            type: "=",
            parentId: "@?"
        },
        template: "<div ng-include=\"'app/components/list/list-' + type + '.html'\"></div>",
        controller: "ListController"
    }
});