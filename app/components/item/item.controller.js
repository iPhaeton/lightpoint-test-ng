angular.module("item").controller("ItemController", ["$scope", "$element", ($scope, $element) => {
    $scope.moving = false;

    var list = $scope.$parent.$parent.$parent.list;

    if (!$scope.bodyUrl) $scope.bodyUrl = "components/item/item-body-" + $scope.type + ".html";

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
                $scope.editedItem = {
                    name: $scope.item.name,
                    data: {}
                };
                for (var data in $scope.item.data) {
                    $scope.editedItem.data[data] = $scope.item.data[data];
                };
                break;
            case "components/item/item-body-collapsable-edit.html":
                $scope.bodyUrl = "components/item/item-body-collapsable.html";
                break;
            case "components/item/item-body-table.html":
                $scope.bodyUrl = "components/item/item-body-table-edit.html";
                $scope.editedItem = {
                    name: $scope.item.name,
                    description: $scope.item.description
                };
                break;
            case "components/item/item-body-table-edit.html":
                $scope.bodyUrl = "components/item/item-body-table.html";
                break;
        };
        if ($scope.type === "collapsable") {
            $scope.closeAll();
            $element.find(".collapse").collapse("show");
        };
    };

    $scope.closeAll = function () {
        $(".collapse").each((i, elem) => {
            var elem = $(elem);
            if (elem.get(0) !== $element.find(".collapse").get(0)) elem.collapse("hide");
        })
    };

    $scope.saveItem = function () {
        $scope.$broadcast("save");
    };

    $scope.$on("save", () => {
        if (!$scope.item || !$scope.editedItem) return;

        $scope.item.name = $scope.editedItem.name;

        if ($scope.editedItem.data) $scope.item.data = $scope.editedItem.data;
        if ($scope.editedItem.description) $scope.item.description = $scope.editedItem.description;

        $scope.editedItem = {};

        $scope.toggleEditMode();
    });

    $scope.cancelItem = function () {
        $scope.toggleEditMode();
    };

    $scope.initMover = function () {
        var mover = $scope.$parent.$parent.$parent.mover;
        mover.watch($element, "item.panel", (pasteBefore, pasteAfter) => {
            if (pasteAfter) {
                $scope.$apply(() => {
                    list.moveAfter($scope.item.number, angular.element(pasteAfter).scope().item.number);
                });
            } else if (pasteBefore) {
                $scope.$apply(() => {
                    list.moveBefore($scope.item.number, angular.element(pasteBefore).scope().item.number);
                });
            }
        });
    };
}]);