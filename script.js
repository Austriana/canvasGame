import Background from "./class.js/background.js";
import Player from "./class.js/player.js";
import InputHandler from "./class.js/inputhandler.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update(input);
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate);
    };

    animate(0);
});