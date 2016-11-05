"use strict";

angular.module("list").directive("list", () => {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "components/list/list.html",
        controller: "ListController"
    }
});