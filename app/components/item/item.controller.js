angular.module("item").controller("ItemController", ["$scope", ($scope) => {
    $scope.parentId = "#" + $scope.parentId;
}]);