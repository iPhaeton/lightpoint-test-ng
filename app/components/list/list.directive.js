"use strict";

angular.module("list").directive("list", () => {
    return {
        restrict: "E",
        scope: {},
        templateUrl: (elem, attr) => {
            if (attr.type === "collapsable") return "components/list/list-collapsable.html";
        },
        controller: "ListController"
    }
});