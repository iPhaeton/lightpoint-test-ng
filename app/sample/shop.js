class Shop {
    constructor (options) {
        this.id = options.id;
        this.name = options.name;
        this.number = options.number;
        this.address = options.address;
        this.hours = options.hours;
    };

    addCommodity (commodity) {
        if (!this.commodities) this.commodities = new List();
        this.commodities.add(commodity);
    };
};