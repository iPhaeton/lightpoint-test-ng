function createSample () {
    //Create a sample list
    var list = new ShopList("shops");

    for (var i = 0; i < 10; i++) {
        var shop = new Shop({
            name: "Shop" + (i+1),
            data: {
                "Адрес": "Street: " + (i+1) + ", house: 1",
                "Мы работаем": "9.00 - 21.00"
            }
        });

        for (var j = 0; j < 10; j++) {
            var commodity = new Commodity({
                name: "Commodity" + (j+1),
                description: "Commodity" + (j+1) + " from Shop" + (i+1),
            });
            shop.addCommodity(commodity);
        };

        list.add(shop);
    };

    var json = JSON.stringify(list);
    console.log(json);

    return list;
};