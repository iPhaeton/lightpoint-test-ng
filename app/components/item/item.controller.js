angular.module("item").controller("ItemController", ["$scope", ($scope) => {
    var list = $scope.$parent.$parent.$parent.list;

    $scope.parentId = "#" + $scope.parentId;
    $scope.innerListVisible = false;

    $scope.showInnerList = function () {
        if ($scope.innerListVisible) $scope.innerListVisible = false;
        else $scope.innerListVisible = true;
    };

    $scope.deleteItem = function () {
        list.delete($scope.item.number);
    }
}]);