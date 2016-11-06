class Shop {
    constructor (options) {
        var self = this;

        this.name = options.name || "New shop";
        this.data  = options.data || {};

        if (!this.data["Адрес"]) this.data["Адрес"] = "";
        if (!this.data["Мы работаем"]) this.data["Мы работаем"] = "";

        this.commodities = new CommodityList("commodities");

        this.innerList = {
            list: self.commodities,
            button: "Показать товары",
            type: "table"
        }
    };

    addCommodity (commodity) {
        this.commodities.add(commodity);
    };
};