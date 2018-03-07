define([
    "model/button","view/button",
    "model/background","view/background",
    "model/dino","view/dino",
    "model/obstacle","view/obstacle",
    "model/time", "view/loop", "logic/Dino",
        "control/control"

],function (ModelButton,ViewButton,ModelBackground,ViewBackground,ModelDino,ViewDino,ModelObstacle,ViewObstacle,ModelTime,ViewLoop,DinoLogic,control) {

    function init( window, p_init ) {
        console.log(p_init);
        var game = false,
            canvas_init = p_init.canvas,
            l_document = window.document,
            canvas = l_document.getElementById(canvas_init.element),
            //canvas = document.getElementById("canvas"),
            model_Button = new ModelButton(p_init.model.button),
            view_Button = new ViewButton(model_Button,p_init.view.button,document),
            model_Background0 = new ModelBackground(p_init.model.background0),
            view_Background0 = new ViewBackground(model_Background0,p_init.view.background0,document),
            model_Background1 = new ModelBackground(p_init.model.background1),
            view_Background1 = new ViewBackground(model_Background1,p_init.view.background1,document),
            model_Background2 = new ModelBackground(p_init.model.background2),
            view_Background2 = new ViewBackground(model_Background2,p_init.view.background2,document),
            model_Dino = new ModelDino( p_init.model.dino ),
            view_Dino = new ViewDino( model_Dino,p_init.view.dino,document ),
            model_Obstacle = new ModelObstacle( p_init.model.obstacle ),
            view_Obstacle = new ViewObstacle( model_Obstacle, p_init.view.obstacle, document),
            model_time = new ModelTime(p_init.time),

            l_models = {
                stage : canvas,
                button: model_Button,
                background0 : model_Background0,
                background1 : model_Background1,
                background2 : model_Background2,
                dino: model_Dino,
                obstacle: model_Obstacle,
                time: model_time
            },

            views = [
                view_Button,
                view_Background0,
                view_Background1,
                view_Background2,
                view_Dino,
                view_Obstacle
            ];

            canvas.width = canvas_init.width;
            canvas.height = canvas_init.height;

        //model

        new ViewLoop(window, canvas, views).start();

        control(window,p_init.control,model_Dino,model_Background0,model_Background1,model_Background2);
        //DinoLogic(p_init.model.button,l_models);

        dinol = new DinoLogic(p_init.model.button,l_models);

        function start(self) {
            if(!game){
                self.innerHTML = model_Button.labelStart;
                dinol.gameStart();
                game = true;
            }else if(game){
                self.innerHTML = model_Button.labelStop;
                dinol.gameStop();
                game = false;
            }
        }

        document.getElementById(model_Button.id).addEventListener('click',function () {
            var gameLabel = document.getElementById("gameover");
            gameLabel.style.display = "none";
            gameLabel.innerHTML = "Game Over";
            start(this);
        });


    }
    return init;
    }
);