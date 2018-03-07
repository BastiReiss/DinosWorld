define
([],
    function()
    {
        function ViewLoop(window, p_canvas, views)
        {
            //console.log(p_canvas);
            var ctx = p_canvas.getContext("2d"),
                n = views.length;

            this.window = window;
            this.animframe;

            this.update_view =
                function update_view() {
                    // clear canvas
                    ctx.clearRect(0, 0, p_canvas.width, p_canvas.height);

                    // draw all visual objects
                    for (var i = 0;  i < n; i++ ) {
                        views[i].draw(ctx);
                        //console.log(views[i]);
                    }


                    window.requestAnimationFrame(update_view);

                };
        }

        ViewLoop.prototype = {
            start: function () {
                //console.log("viewloop.start");
                this.animframe = this.window.requestAnimationFrame(this.update_view);
            },
            stop: function () {
                //console.log("viewlopp.stop");
                this.window.cancelAnimationFrame(this.animframe);
            }
        };
        return ViewLoop;
    });