class ShopList extends List {
    add (value) {
        if (!value) value = new Shop({});
        super.add(value);
    };
};