class Form{
    constructor(){
       this.button = createButton('Enter');
       this.title = createElement('h2');
     
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }
    display() {
        this.title.html("The Warrior");
        this.title.position(480, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
     
      

        this.button.mousePressed(() => {
            this.title.hide();
            this.button.hide();
            gameState=1;
        });
        
            
    }
}