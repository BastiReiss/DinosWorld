define([],
    function () {
        function control(window,p_init_control,ModelDino,ModelBackground0,ModelBackground1,ModelBackground2) {

            var spaceKey = p_init_control.dinoKeyCode;

            function jump(p_event) {
                //console.log(p_event);
                if (p_event.keyCode === spaceKey) {
                    //console.log("jump");
                    //console.log(ModelDino);
                    ModelDino.jump();
                }
            }
            window.addEventListener("keydown",jump);
        }
        return control;
});