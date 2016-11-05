"use strict";

angular.module("list").directive("list", () => {
    return {
        restrict: "E",
        scope: {
            list: "=?",
            parentId: "@?"
        },
        templateUrl: (elem, attr) => {
            if (attr.type === "collapsable") return "components/list/list-collapsable.html";
            else return "components/list/empty.html"
        },
        controller: "ListController"
    }
});