define([],
    function () {
        function ModelLoop(p_collision, models, time) {

            //this.window = window;
            console.log(p_collision);
            var l_seconds = 1 / 120;
            this.v_milliseconds = 1000 * l_seconds;
            this.interval;


            this.update_model = function update_model() {

                for (var i = 0, n = models.length; i < n; i++) {
                    if (models[i].move != null) {
                        models[i].move(l_seconds);
                        //console.log(models[i]);
                    }
                    //check for collisions
                    p_collision();
                    //console.log(l_seconds);
                    time.tick();
                    time.displayTime();
                }
            }
            }

            ModelLoop.prototype = {
                //starts the modellloop
                start: function () {
                    this.interval = setInterval(this.update_model, this.v_milliseconds);

                },
                //stops the modelloop
                stop: function () {
                    clearInterval(this.interval);
                }
            };

        return ModelLoop;
});
