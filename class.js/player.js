

export default class Player{
    constructor(gameWidth, gameHeigth){
        this.image = new Image();
        this.image.src = './pictures/player.png';
        this.gameWidth = gameWidth;
        this.gameHeigth = gameHeigth;
        this.width = 200;
        this.height = 200;
        this.x = this.gameWidth/2 -this.width/2;
        this.y = this.gameHeigth - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.width = this.width;
        this.height = this.height;
        this.vy = 0;
        this.weight = 1;
        this.slider = document.getElementById('slider');

    };

    draw(context){
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height, this.x, this.y, this.width, this.height);
    };

    update(input, gameframe, playerSpeed){        
        if(input.keys === 'KeyW' && this.onGround()){
            this.vy -= 25 ;
            input.keys = ''; 
        };

        if(gameframe % playerSpeed === 0){
            this.frameX < 7 && this.onGround() 
                ? this.frameX++ 
                : this.frameX = 0
        };

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