class Mover {
    constructor () {

    };

    watch (elem, selector, callback) {
        this.initialized = false;
        this.timer = setTimeout(() => {
            this.init(elem, selector, callback);
        }, 300);
        $(document).on("mouseup", {self: this}, this.clear);
    };

    init (elem, selector, callback) {
        this.initialized = true;
        this.elem = elem;
        this.callback = callback;
        this.selector = selector;

        this.pasteBefore = null;
        this.pasteAfter = null;

        this.bunch = $(this.selector);

        $(document).on("mousemove", {self: this}, this.selectAvailableSpaces);

        console.log("init");
    };

    clear (event) {
        var self = event.data.self;

        clearTimeout(self.timer);

        if (self.initialized) {
            if (self.pasteBefore || self.pasteAfter) self.callback(self.pasteBefore, self.pasteAfter);

            self.clearBorders();
            $(document).off("mousemove", self.selectAvailableSpaces);
            self.initialized = false;
            console.log("clear");
        };

        $(document).off("mouseup", self.clear);
    };

    selectAvailableSpaces (event) {
        var self = event.data.self;

        event.preventDefault();

        var first = $(self.bunch[0]);
        var last = $(self.bunch[self.bunch.length-1]);

        if (event.pageY < self.bunch.offset().top) {
            self.clearBorders();

            first.css({
                borderTop: "5px solid blue"
            });
            self.pasteBefore = first;
        } else if (event.pageY > last.offset().top) {
            self.clearBorders();

            last.css({
                borderBottom: "5px solid blue"
            });
            self.pasteAfter = last;
        } else {
            first.css({
                borderTop: "none"
            });
            last.css({
                borderBottom: "none"
            });

            for (var i = 0; i < self.bunch.length - 1; i++) {
                if (self.elem.get(0) === self.bunch[i]) {
                    continue;
                };

                var item = $(self.bunch[i]),
                    next = $(self.bunch[i+1]);

                if (event.pageY > item.offset().top && event.pageY <= next.offset().top) {
                    item.css({
                        borderBottom: "5px solid blue"
                    });
                    self.pasteAfter = item;
                } else {
                    item.css({
                        borderBottom: "none"
                    });
                };
            };
        };
    };

    clearBorders () {
        this.pasteBefore = null;
        this.pasteAfter = null;

        this.bunch.each ((i, item) => {
            if (i === 0) {
                $(item).css({
                    borderTop: "none"
                });
            };
            $(item).css({
                borderBottom: "none"
            });
        });
    };
};