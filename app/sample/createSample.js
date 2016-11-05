function createSample () {
    //Create a sample list
    var list = new List();

    for (var i = 0; i < 10; i++) {
        var shop = new Shop({
            name: "Shop" + (i+1),
            id: "shop" + i,
            data: {
                0: "Адрес: Street: " + (i+1) + ", house: 1",
                1: "Мы работаем: 9.00 - 21.00"
            }
        });

        for (var j = 0; j < 10; j++) {
            var commodity = new Commodity({
                name: "Commodity" + (j+1),
                description: "Commodity" + (j+1) + " from Shop" + (i+1),
                id: "commodity" + j
            });
            shop.addCommodity(commodity);
        };

        list.add(shop);
    };

    return list;
};