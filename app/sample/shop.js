class Shop {
    constructor (options) {
        var self = this;

        this.id = options.id;
        this.name = options.name;
        this.number = options.number;
        this.data  = options.data;

        this.commodities = new List();

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