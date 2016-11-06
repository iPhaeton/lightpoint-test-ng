angular.module("item").controller("ItemController", ["$scope", ($scope) => {
    $scope.parentId = "#" + $scope.parentId;
    $scope.innerListVisible = false;

    $scope.showInnerList = function () {
        if ($scope.innerListVisible) $scope.innerListVisible = false;
        else $scope.innerListVisible = true;
    };
}]);