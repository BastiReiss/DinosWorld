define([],
    function () {
        function ViewButton(model, init, document) {
            this.model = model;
            this.element = document.getElementById(model.id);

        }

        ViewButton.prototype.draw =
            function () {
                var l_model = this.model,
                    l_element = this.element;
            };
        return ViewButton;
    }
);