class Game{
    constructor(){}


start(){
    if(gameState===0){
        form = new Form();
        form.display();
    }
}
  play(){
    if(gameState===1){
        story = new Story();
        story.display();
  }  
   if(gameState===2){
       clear();
       console.log("enterd");
       stage1=createSprite(displayWidth-500,displayHeight-400);
       stage1.addImage(stage1Img);  
         stage1.scale=1
   }
  }
}