define([],
    function () {
        function ViewDino(p_model,p_init,p_document) {
            this.model       = p_model;
            this.image       = new Image();
            //this.image_model = p_model.image;
            this.image.src   = p_init.img;
            //creates local canvas
            var l_canvas  = this.v_canvas = p_document.createElement("canvas");

            this.context = l_canvas.getContext("2d");
            l_canvas.width  = p_model.width;
            l_canvas.height = p_model.height;

        }
        ViewDino.prototype.draw =
            function(p_context) {
                //draws Dino image
                this.context.clearRect(0,0,200,200);
                this.image.src = this.image.src;
                this.context.drawImage(this.image,0,0,200,200);
                //draws local canvas on global canvas (stage)
                p_context.drawImage(this.v_canvas, this.model.x, this.model.y);

            };

            return ViewDino;

    }
);