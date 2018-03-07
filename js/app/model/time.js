define([],
    function () {
        function ModelTime(init) {
            this.minutesEL = document.getElementById(init.minutesID);
            this.secondsEL = document.getElementById(init.secondsID);
            this.minutesInt = init.minutes;
            this.secondsInt = init.seconds;
            this.mnts;
            this.scnds;
        }

        ModelTime.prototype = {

            tick: function () {
                if(this.secondsInt < 60 ){
                    this.secondsInt++;
                }else{
                    this.secondsInt = 0;
                    this.minutesEL++;
                }
            },
            reset: function () {
                this.minutesEL.innerHTML = "00";
                this.secondsEl.innerHTML = "00";
            },
            displayTime: function () {
                this.minutesEL.innerHTML = "" + this.minutesInt;
                this.secondsEL.innerHTML = "" + this.secondsInt;
            },
            //stops the time
            stop: function () {

            }
        };

        return ModelTime;
    });