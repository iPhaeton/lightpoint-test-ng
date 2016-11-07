angular.module("list").controller("ListController", ["$scope", "Sample", ($scope, Sample) => {
    $scope.addItem = function () {
        $scope.list.add();
    };

    $scope.mover = new Mover ();

    if (!$scope.list) {
        $scope.list = new ShopList();
        Sample.get({}, (result) => {
            var list = $scope.list;

            for (var i in result) {
                if (isNaN(+i)) continue;

                list[i] = new Shop({
                    name: result[i].name,
                    data: result[i].data,
                    innerList: result[i].innerList,
                });
                list[i].number = result[i].number;
                list[i].id = result[i].id
                for (var j in result[i].commodities) {
                    if (isNaN(+j)) continue;
                    list[i].commodities[j] = new Commodity({
                        name: result[i].commodities[j].name,
                        description: result[i].commodities[j].description
                    })
                    list[i].commodities[j].number = result[i].commodities[j].number;
                    list[i].commodities[j].id = result[i].commodities[j].id;
                    list[i].commodities.length++;
                }
                ;
                list[i].commodities.name = "commodities";
                list.length++;
            }
            ;
            list.name = "shops";

            console.log(list);
        });
    };
}]);