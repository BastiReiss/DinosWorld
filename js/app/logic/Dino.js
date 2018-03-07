define
([
        'collision/stageBackground', 'collision/dinoObstacle', 'collision/stageObstacle',
        'model/loop'
    ],
    function(
             collisionStageBackground,collisionDinoObstacle, collisionStageObstacle , ModelLoop ) {
        function DinoLogic(p_init,p_models) {
            //console.log(p_models);

            //local copies of models from init
            var l_stage = p_models.stage,
                l_button = p_models.button,
                l_background0 = p_models.background0,
                l_background1 = p_models.background1,
                l_background2 = p_models.background2,
                l_dino = p_models.dino,
                l_obstacle = p_models.obstacle,
                l_time = p_models.time,
                l_models_movable = [],
                l_model_loop = new ModelLoop(f_collision, l_models_movable ,l_time);

            // schaut nach allen model Objekten im array l_models_movable, die eine move methode haben

            for (var k in p_models) {
                //console.log(p_models[k]);
                if (p_models[k].move != null) {
                    l_models_movable.push(p_models[k]);
                }
            }



            // zusammenfassung aller collisionen
            function f_collision() {
                collisionStageBackground(l_stage, l_background0, l_background1, l_background2);
                collisionDinoObstacle(l_dino,l_obstacle,gameEnd);
                collisionStageObstacle(l_stage,l_obstacle);

            }


            // alle methoden die bei der der function stop aufgerufen werden
            this.test = function () {
                console.log("test");
            };

           this.gameStart = function() {
               /*
               l_background0.start();
               l_background1.start();
               l_background2.start();
               l_model_loop.start();
               l_obstacle.start();
                */
               l_button.label = p_init.labelStop;
               l_model_loop.start();
               console.log("gamestart");
            };

            // alle methoden die bei der der function start aufgerufen werden
            this.gameStop = function() {
                /*
                l_model_loop.stop();
                l_dino.stop();
                l_background0.stop();
                l_background1.stop();
                l_background2.stop();
                l_obstacle.stop();
                */
                l_button.label = p_init.labelStart,
                l_model_loop.stop();
                console.log("gamestop");
            };
            
            function gameReset() {

            }
            
            function gameEnd () {
                //reset that stuff
                document.getElementById("gameover").style.display = "block";
                document.getElementById(l_button.id).innerHTML = "start new Game",
                l_button.label = p_init.labelStart,
                l_background0.reset();
                l_background1.reset();
                l_background2.reset();
                l_dino.reset();
                l_obstacle.reset();
                l_model_loop.stop();
                console.log("gameEnd");
            }


        }


        return DinoLogic;
    });
