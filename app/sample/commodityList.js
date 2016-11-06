class CommodityList extends List {
    add (value) {
        if (!value) value = new Commodity({});
        super.add(value);
    };
};