define([],
    function () {
        function ViewBackground(model_background, p_init, document) {
            //console.log(p_init);
            this.modelBackground = model_background;
            this.image = new Image;
            this.image.src = p_init.img;


            var l_canvas  = this.v_canvas = document.createElement("canvas");

            this.context = l_canvas.getContext("2d");

            l_canvas.width  = model_background.width;
            l_canvas.height = model_background.height;

        }
        ViewBackground.prototype.draw =
            function(ctx) {
                this.context.drawImage(this.image,0,0);
                ctx.drawImage(this.v_canvas, this.modelBackground.x, this.modelBackground.y);
            }
        ;
        return ViewBackground;

    });