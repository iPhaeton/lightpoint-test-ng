angular.module("list").controller("ListController", ["$scope", ($scope) => {
    $scope.list = createSample();
}]);