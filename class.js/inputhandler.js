export default class InputHandler{
    constructor(){
        this.keys = document.addEventListener('keypress', (e) => {
            this.keys = e.code;
            
        });
        this.keys = window.addEventListener('click', (e)=>{
            this.keys = e.target.value
        });
     };
};