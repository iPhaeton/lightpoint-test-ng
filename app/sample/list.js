class List {
    constructor (name) {
        Object.defineProperty(this, "name", {iterable: false, value: name, writable: true});
        Object.defineProperty(this, "length", {iterable: false, value: 0, writable: true});
        Object.defineProperty(this, "nextItemId", {iterable: false, value: 0, writable: true});
    };

    add (value) {
        if (!value.number) value.number = this.length;
        if (!value.number) value.id = this.nextItemId++;
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

    moveAfter (insert, after) {
        var insertItem = this[insert];

        if (insert < after) {
            for (var i = insert; i < after; i++) {
                this[i] = this[i + 1];
                this[i].number = i;
            };
            this[after] = insertItem;
            this[after].number = after;
        } else {
            for (var i = insert; i > after+1; i--) {
                this[i] = this[i - 1];
                this[i].number = i;
            };
            this[after+1] = insertItem;
            this[after+1].number = after+1;
        };

        console.log(insert, after);
    };

    moveBefore (insert, before) {
        var insertItem = this[insert];

        if (insert < before) {
            for (var i = insert; i < before-1; i++) {
                this[i] = this[i + 1];
                this[i].number = i;
            };
            this[before-1] = insertItem;
            this[before-1].number = before-1;
        } else {
            for (var i = insert; i > before; i--) {
                this[i] = this[i - 1];
                this[i].number = i;
            };
            this[before] = insertItem;
            this[before].number = before;
        };

        console.log(insert, before);
    };
};