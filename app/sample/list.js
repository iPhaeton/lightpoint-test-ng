class List {
    constructor (name) {
        Object.defineProperty(this, "name", {iterable: false, value: name, writable: true});
        Object.defineProperty(this, "length", {iterable: false, value: 0, writable: true});
    };

    add (value) {
        value.number = this.length;
        value.id = this.name + value.number;
        this[this.length++] = value;
    };

    delete (prop) {
        delete this[prop];
        for (var i = prop; i < this.length-1; i++) {
            this[i] = this[i+1];
            this[i].number = i;
        };
        delete this[this.length-1];
        this.length--;
    };
};