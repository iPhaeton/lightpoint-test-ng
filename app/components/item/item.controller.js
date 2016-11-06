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
    };

    $scope.toggleEditMode = function () {
        switch ($scope.type) {
            case "collapsable":
                $scope.type = "collapsable-edit";
                break;
            case "collapsable-edit":
                $scope.type = "collapsable";
                break;
            case "table":
                $scope.type = "table-edit";
                break;
            case "table-edit":
                $scope.type = "table";
                break;
        };
    };

    $scope.closeAll = function () {
        $(".collapse").collapse("hide");
    }
}]);