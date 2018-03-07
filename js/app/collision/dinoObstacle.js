define([],
    function () {
        function collisionDinoObstacle(p_dino,p_obstacle,p_gameEnd) {
                if(
                    p_dino.x + p_dino.width -70 >= p_obstacle.x &&
                        p_dino.x <= p_obstacle.x + p_obstacle.width &&
                        p_dino.y + p_dino.height -50 >= p_obstacle.y
                ){
                    console.log("hit");
                    p_gameEnd();
                }
            }
        return collisionDinoObstacle;
    }
);