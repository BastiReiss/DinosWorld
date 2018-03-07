define([],
function () {
    function ViewObstacle(p_model,p_init,p_document) {
        this.model       = p_model;
        this.image       = new Image();
        this.image.src   = p_init.img;

        //creates local canvas for the obstacle image
        var l_canvas  = this.v_canvas = p_document.createElement("canvas");

        this.context = l_canvas.getContext("2d");
        l_canvas.width  = p_model.width;
        l_canvas.height = p_model.height;

    }
    ViewObstacle.prototype.draw =
        function(p_context) {
            //loops the Obstacle image
            this.context.clearRect(0,0,100,100);
            this.image.src = this.image.src;
            this.context.drawImage(this.image,0,0,100,100);
            //draws local canvas on global canvas
            p_context.drawImage(this.v_canvas, this.model.x, this.model.y);

        };

    return ViewObstacle;

}
);