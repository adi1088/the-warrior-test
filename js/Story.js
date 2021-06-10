class Story{

  constructor(){
        this.title=createElement('h2');
        this.message=createElement('h2');
        this.button=createButton("Play");
    }
    hide() {
        this.title.hide();
        this.message.hide();
        this.button.hide();
    }
    display(){
        // console.log("entered")
        background(255)
        this.title.html("Notice");
        this.title.position(480,50);
        this.title.style('font-size','70px');
        this.title.style('color','red');
        this.message.html("Hey Warrior ! , Are You Ready To Save The World From The Attack Of The Blood Demons And Its Army. Be Aware Of Ghost ! .       Be Fast As You Can So That You Should Survive More,  And Save The World  ")
        this.message.position(20,150);
        this.message.style('font-size','40px');
        this.message.style('color','Black');
        this.button.position(900,600);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','White');
    

    this.button.mousePressed(() => {
        this.title.hide();
        this.message.hide();
        this.button.hide();
        
        gameState=2; 
    });
 }
 }