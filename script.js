import Background from "./class.js/background.js";
import Player from "./class.js/player.js";
import InputHandler from "./class.js/inputhandler.js";
import Enemy from "./class.js/enemies.js";
import { score } from "./class.js/enemies.js";

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    const enemy = new Enemy(canvas.width, canvas.height);

    function handleEnemies(deltaTime){
        if(enemy.enemyTimer > enemy.enemyInterval){
            console.log (enemy.enemyInterval)
            enemy.enemiesArray.push(new Enemy(canvas.width, canvas.height));
            enemy.enemyTimer = 0;
            enemy.enemyInterval = Math.random()*5000+4000
        } else {
            enemy.enemyTimer += deltaTime;
        };
            enemy.enemiesArray.forEach(enemies => {
            enemies.draw(ctx);
            enemies.update(input);
            });
        enemy.enemiesArray = enemy.enemiesArray.filter(enemy => !enemy.markedForDeletion)
    };

    function displayStatusText(context){
        context.fillStyle = 'black';
        context.font = '40px Helvetica';
        context.fillText(`Score: ${score}`, 20, 50);
        context.fillStyle = 'black';
        context.font = '40px Helvetica';
        context.fillText(`Game Over: ${player.counter}`, 20, 100)

    }

    function animate(timeStamp){
        const deltaTime = timeStamp - enemy.lastTime;
        enemy.lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update(input);
        player.draw(ctx);
        player.update(input, enemy.enemiesArray);
        requestAnimationFrame(animate);
        handleEnemies(deltaTime, input);
        displayStatusText(ctx);
    };

    animate(0);
});