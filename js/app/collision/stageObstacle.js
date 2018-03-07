define([],
    function () {
        function collisionStageObstacle(p_stage,p_obstacle) {
            if(p_obstacle.x < -p_stage.width){
                p_obstacle.x = p_stage.width + Math.floor((Math.random() * 200) + 100);
            }
        }
        return collisionStageObstacle;
    }
);