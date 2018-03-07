define([],
    function () {
        function ModelObstacle(p_init) {
            this.x = p_init.position.x;
            this.y = p_init.position.y;
            this.z = p_init.position.z;
            this.vel = p_init.vel;
            this.width = p_init.width;
            this.height = p_init.height;
            this.image = p_init.image;
            this.gravity = 0.5 ;
        }
        ModelObstacle.prototype = {
            reset: function () {
                this.x = this.z;
            },

            start: function () {
                this.vel -= this.velz;
            },
            //stops obstacle
            stop: function () {
                this.vel = 0;
            },
            //moves obstacle to the left of the canvas
            move: function () {
                this.x -= this.vel;
            }


        };


        return ModelObstacle;
    }
);