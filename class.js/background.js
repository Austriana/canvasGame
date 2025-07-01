export default class Background{
    constructor(gameWidth, gameHeigth){
        this.image = new Image();
        this.image.src = './pictures/background.png';
        this.gameWidth = gameWidth;
        this.gameHeigth = gameHeigth;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 720;
        this.speed = 1;
        this.gas = 0;
    };

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x + this.width - 10, this.y, 
            this.width, this.height);

    };

    update(input){
        if(input.keys.indexOf('ArrowRight')>-1){
            this.speed = 5;
        } else if(input.keys.indexOf('ArrowLeft')>-1){
            this.speed = 0;
        } else {
            this.speed = 1;
        }
        this.x -= this.speed;
        if(this.x < 0 - this.width) this.x = 0;
    };
};