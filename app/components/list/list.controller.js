angular.module("list").controller("ListController", ["$scope", ($scope) => {
    if (!$scope.list) $scope.list = createSample();

    //$scope.templateUrl = "components/list/list-" + $scope.type + ".html";
}]);