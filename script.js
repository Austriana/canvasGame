import Background from "./class.js/background.js";
import Player from "./class.js/player.js";
import InputHandler from "./class.js/inputhandler.js";
import Enemy from "./class.js/enemies.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    const enemy = new Enemy(canvas.width, canvas.height);

    function handleEnemies(){
    enemy.enemiesArray.push(new Enemy(canvas.width, canvas.height));
    enemy.enemiesArray.forEach(enemy => {
        enemy.draw(ctx);
        enemy.update();
    })
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate);
        // handleEnemies();
    };

    animate();
});