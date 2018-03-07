define([],
    function () {
        function ModelBackground(init) {
            this.width = init.width;
            this.height = init.height;
            this.x = init.position.x;
            this.y = init.position.y;
            this.z = init.position.z;
            this.vel = init.vel;
            this.velz = init.velz;
        }

        ModelBackground.prototype = {

            //speed at start
            reset: function () {
                this.x = this.z;
            },
            start: function () {
                this.vel -= this.velz;
            },
            //stops background
            stop: function () {
                this.vel = 0;
            },
            //moves background
            move: function (deltaT) {
                this.x -= this.vel;
            }
        };

        return ModelBackground;
    });
