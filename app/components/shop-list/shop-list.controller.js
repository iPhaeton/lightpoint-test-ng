angular.module("shopList").controller("ShopListController", ["$scope", ($scope) => {
    $scope.list = createSample();
}]);