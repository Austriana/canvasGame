export default class Background{
    constructor(gameWidth, gameHeigth, image, speedModifier){
        this.image = image;
        this.gameWidth = gameWidth;
        this.gameHeigth = gameHeigth;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 730;
        this.speedModifier = speedModifier;
    };

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x + this.width - 10, this.y, 
            this.width, this.height);
    };

    update(speed){
        this.x -= speed * this.speedModifier;
        if(this.x < 0 - this.width) this.x = 0;
    };
};