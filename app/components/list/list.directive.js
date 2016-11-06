"use strict";

angular.module("list").directive("list", () => {
    return {
        restrict: "E",
        scope: {
            list: "=?",
            type: "=",
            parentId: "@?"
        },
        template: "<div ng-include=\"'components/list/list-' + type + '.html'\"></div>",
        controller: "ListController"
    }
});