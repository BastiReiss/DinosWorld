define
( [],
    function() {
        // loopt die Background bilder
        function collisionStageBackground(p_stage, p_background0, p_background1, p_background2) {
            //console.log(p_background0.x,p_background1.x,p_background2.x);
            if(p_background0.x <= -p_stage.width) {
                p_background0.x = p_background2.x+p_background2.width-20;
            }
            if(p_background1.x <= -p_stage.width) {
                p_background1.x = p_background0.x+p_background0.width;
            }
            if(p_background2.x <= -p_stage.width) {
                p_background2.x = p_background1.x+p_background1.width;
            }
        }

        return collisionStageBackground;
    }
);