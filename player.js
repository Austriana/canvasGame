export default class Player{
    constructor(gameWidth, gameHeigth){
        this.image = new Image();
        this.image.src = 'player.png';
        this.gameWidth = gameWidth;
        this.gameHeigth = gameHeigth;
        this.width = 200;
        this.height = 200;
        this.x = 10;
        this.y = this.gameHeigth - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.width = this.width;
        this.height = this.height;
        this.speed = 0;
        this.vy = 0;
        this.weight = 1;
    };
    
    draw(context){
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height, this.x, this.y, this.width, this.height);
    };

    update(input){
        if(input.keys.indexOf('ArrowRight')>-1){
            this.speed = 5;
            if(this.frameX < 8 && this.onGround()){
            this.frameX++;
            } else this.frameX = 0;
        } else if(input.keys.indexOf('ArrowLeft')>-1){
            this.speed = -5;
        } else if(input.keys.indexOf('Space')>-1 && this.onGround()){
            this.vy -= 30;
        } else {
            this.speed = 0;
            this.frameX = 0;
        };

        this.x += this.speed;
        if(this.x < 0) this.x = 0;
        else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width

        this.y += this.vy;
        if(!this.onGround()){
            this.vy += this.weight;
            this.frameY = 1;
        } else {
            this.vy = 0;
            this.frameY = 0;
        };

        if(this.y > this.gameHeigth - this.height){
            this.y = this.gameHeigth - this.height;
        };
    }
    onGround(){
        return this.y >= this.gameHeigth - this.height;
    };
};