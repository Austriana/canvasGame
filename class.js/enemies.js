export default class Enemy{


    constructor(gameWidth, gameHeight){
        this.image = new Image();
        this.image.src = './pictures/enemy.png';
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 160;
        this.heigt = 119;
        this.x = this.gameWidth - this.width;
        this.y = this.gameHeight - this.heigt;
        this.frameX = 5;
        this.frameY = 0;
        this.gameframe = 0;
        this.enemiesArray = [];
    }
    
    draw(context){
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.heigt, this.width, this.heigt, this.x, this.y, this.width, this.heigt)
    }

    update(){
        this.x-=3
        if(this.gameframe % 3 === 0){
            if(this.frameX < 5){
            this.frameX++;
            } else this.frameX = 0;
        }
    }
};