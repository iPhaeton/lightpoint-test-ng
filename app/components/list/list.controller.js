angular.module("list").controller("ListController", ["$scope", ($scope) => {
    if (!$scope.list) $scope.list = createSample();

    $scope.addItem = function () {
        $scope.list.add();
    };
}]);