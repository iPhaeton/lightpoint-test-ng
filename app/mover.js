class Mover {
    constructor () {

    };

    watch (elem) {
        this.timer = setTimeout(() => {
            this.elem = elem;
            this.init();
        }, 300);
        $(document).on("mouseup", {self: this}, this.clear);
    };

    init () {
        console.log("init");
    }

    clear (event) {
        var self = event.data.self;

        console.log("clear");
        clearTimeout(self.timer)
        $(document).off("mouseup", self.clear);
    }
};