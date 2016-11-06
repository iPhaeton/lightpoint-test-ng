angular.module("item").controller("ItemController", ["$scope", ($scope) => {
    var list = $scope.$parent.$parent.$parent.list;

    $scope.bodyUrl = "components/item/item-body-" + $scope.type + ".html";

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
        switch ($scope.bodyUrl) {
            case "components/item/item-body-collapsable.html":
                $scope.bodyUrl = "components/item/item-body-collapsable-edit.html";
                break;
            case "components/item/item-body-collapsable-edit.html":
                $scope.bodyUrl = "components/item/item-body-collapsable.html";
                break;
            case "components/item/item-body-table.html":
                $scope.bodyUrl = "components/item/item-body-table-edit.html";
                break;
            case "components/item/item-body-table-edit.html":
                $scope.bodyUrl = "components/item/item-body-table.html";
                break;
        };
    };

    $scope.closeAll = function () {
        $(".collapse").collapse("hide");
    }
}]);