import Background from "./class.js/background.js";
import Player from "./class.js/player.js";
import InputHandler from "./class.js/inputhandler.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = 700;
    canvas.height = 730;
    let speed = 16;
    let playerSpeed = 3;
    let gameFrame = 0;

    let slider = document.getElementById('slider');
    slider.addEventListener('change', ()=>{
        speed = slider.value;
        playerSpeed = Math.round((21 - speed)/2);
    });

    window.addEventListener('keydown', (e)=>{
        if(e.code === 'KeyA' && slider.value > 0)
            slider.value--
        if(e.code === 'KeyD' && slider.value < 21)
            slider.value++

        speed = slider.value;
        playerSpeed = Math.round((21 - speed)/2);        
    });

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height - 120);
    const background_1 = new Background(canvas.width, canvas.height, './pictures/layer-1.png', 0);
    const background_2 = new Background(canvas.width, canvas.height, './pictures/layer-2.png', 0.2);
    const background_3 = new Background(canvas.width, canvas.height, './pictures/layer-3.png', 0.3);
    const background_4 = new Background(canvas.width, canvas.height, './pictures/layer-4.png', 0.7);
    const background_5 = new Background(canvas.width, canvas.height, './pictures/layer-5.png', 1);

    let background = [background_1, background_2, background_3, background_4, background_5]

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.forEach((layer) => {
            layer.draw(ctx);
            layer.update(speed);
        });
        player.draw(ctx);
        player.update(input, gameFrame, playerSpeed);
        requestAnimationFrame(animate);
        gameFrame++
    };

    animate();
});
