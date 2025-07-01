
export let score = 0;

export default class Enemy{


    constructor(gameWidth, gameHeight){
        this.image = new Image();
        this.image.src = './pictures/enemy.png';
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 160;
        this.height = 119;
        this.x = this.gameWidth;
        this.y = this.gameHeight - this.height;
        this.frameX = 5;
        this.frameY = 0;
        this.gameframe = 0;
        this.enemiesArray = [];
        this.lastTime = 0;
        this.enemyTimer = 0;
        this.enemyInterval = 0;
        this.markedForDeletion = false;
        this.speed = 5;
        this.score = 0;
    }

    draw(context){
        context.strokeStyle = 'white';
        // context.strokeRect(this.x, this.y, this.width, this.height);
        context.beginPath();
        context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
        context.stroke();
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height, this.x, this.y, this.width, this.height)
    }

    update(input){
        if(input.keys.indexOf('ArrowRight')>-1){
            this.speed = 5;
        } else if(input.keys.indexOf('ArrowLeft')>-1){
            this.speed = 0;
        } else {
            this.speed = 1;
        }

        this.x -= this.speed;
        if(this.gameframe % 3 === 0){
            if(this.frameX < 5){
            this.frameX++;
            } else this.frameX = 0;
        };
        if(this.x < 0 - this.width){
            this.markedForDeletion = true;
            score++
        };
    };
};