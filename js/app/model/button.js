define([],
    function () {
        function ModelButton(init) {
            this.id      = init.id;
            this.labelStart   = init.labelStop ;
            this.labelStop   = init.labelStart ;
        }
        return ModelButton;
    }
);