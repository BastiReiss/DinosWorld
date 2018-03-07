define([],
    function () {
        function ModelDino(p_init) {
            this.x = p_init.position.x;
            this.y = p_init.position.y;
            this.z = p_init.position.z;
            this.vel = p_init.vel;
            this.width = p_init.width;
            this.height = p_init.height;
            this.image = p_init.image;
            this.gravity = 0.5 ;
            this.isJumping;
            this.jumpCount = 2;
        }
        ModelDino.prototype = {
            // p_initiiert den Sprung
            reset: function () {
                this.y = this.z;
            },
            start: function () {
                this.vel = 0;
                this.isJumping = false;
                this.jumpCount = 2;
            },
            jump: function(){
                if(this.jumpCount > 0) {
                    this.isJumping = true;
                }else{
                    this.isJumping = false;
                }
            },
            //bewegt den Dino beim Sprung
            move: function (deltaT) {
                //console.log(this.isJumping,this.y,this.vel,this.gravity);
                if( this.isJumping ) {
                    this.vel = -12;
                    this.jumpCount--;
                    this.isJumping = false;
                }

                this.vel += this.gravity ;
                this.y += this.vel ;

                if(this.y > this.z){
                    this.jumpCount = 2;
                    this.y  = this.z;
                    this.vel = 0;
                    //this.isJumping = false;
                }

            }
        };
        return ModelDino;
    }

);