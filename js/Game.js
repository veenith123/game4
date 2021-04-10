class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
          playerCount = playerCountRef.val();
          player.getCount();
      }
      form = new Form()
      form.display();
            }
            gamebg1 = createSprite(770,430);
            gamebg1.scale = 1;
            gamebg1.addImage("gamebg1",gamebg1_img);

            sling1 = createSprite(80,100);
            sling1.scale = 0.50;
            sling1.addImage("sling1",sling1_img);

            sling2 = createSprite(67,80);
            sling2.scale = 0.45;
            sling2.addImage("sling2",sling2_img);

            sling3 = createSprite(74,67,14,9);
            sling3.scale = 1.7;
            sling3.addImage("sling3",sling3_img);

            slinga = createSprite(1465,100);
            slinga.scale = 0.50;
            slinga.addImage("slinga",slinga_img);

            slingb = createSprite(1452,80);
            slingb.scale = 0.45;
            slingb.addImage("sling1b",slingb_img);

            slingc = createSprite(1460,67,14,5);
            slingc.scale = 1.7;
            slingc.addImage("sling3",sling3_img);

            grass = createSprite(110,786);
            grass.scale = 0.4;
            grass.addImage("grass",grass_img);

            grass1 = createSprite(1428,786);
            grass1.scale = 0.4;
            grass1.addImage("grass1",grass1_img);

            board = createSprite(24,127);
            board.scale = 0.7;
            board.addImage("board",board_img);

            board1 = createSprite(1512,127);
            board1.scale = 0.7;
            board1.addImage("board1",board1_img);

            wood = createSprite(85,768);
            wood.scale = 0.3;
            wood.addImage("wood",wood_img);

            wood1 = createSprite(1451,768);
            wood1.scale = 0.3;
            wood1.addImage("wood1",wood1_img);

            blank = createSprite(-700,590,50,20);
            blank.addImage("blank",blank_img);
            blank.scale = 0.8;
            
            mushroom1 = createSprite(1443,200);
            mushroom1.addImage("mushroom1",mushroom1_img);
            mushroom1.scale = 0.6;

            mushroom2 = createSprite(1443,400);
            mushroom2.addImage("mushroom2",mushroom2_img);
            mushroom2.scale = 0.6;
             
            mushroom3 = createSprite(97,200);
            mushroom3.addImage("mushroom3",mushroom3_img);
            mushroom3.scale = 0.6;

            mushroom4 = createSprite(96,400);
            mushroom4.addImage("mushroom4",mushroom4_img);
            mushroom4.scale = 0.6;

            mushroom5 = createSprite(97,610);
            mushroom5.addImage("mushroom5",mushroom5_img);
            mushroom5.scale = 0.6;

            mushroom6 = createSprite(96,580);
            mushroom6.addImage("mushroom6",mushroom6_img);
            mushroom6.scale = 0.6;
             
            mushroom7 = createSprite(1443,610);
            mushroom7.addImage("mushroom7",mushroom7_img);
            mushroom7.scale = 0.6;

            mushroom8 = createSprite(1443,580);
            mushroom8.addImage("mushroom8",mushroom8_img);
            mushroom8.scale = 0.6;
            
            mushroom1.depth = gamebg1.depth+11;
            mushroom2.depth = gamebg1.depth+11;
            mushroom3.depth = gamebg1.depth+11;
            mushroom4.depth = gamebg1.depth+11;
            mushroom5.depth = gamebg1.depth+11;
            mushroom6.depth = gamebg1.depth+11;
            mushroom7.depth = gamebg1.depth+11;
            mushroom8.depth = gamebg1.depth+11;
 


            gamebg1.depth= blank.depth+1
            wood.depth = gamebg1.depth+10


            
        }
        play(){
            form.hide();
    
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              background(bg2_img);
                    //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

       
        if (index === player.index){
          stroke(100);
          fill("red");
          ellipse(x,y,600,600);
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }
      }
              if (frameCount % 300 === 0) {
                tanks = createSprite(random(0, 85), 772);
                tanks.scale = 0.05;
                tanks.velocityX = 2;
                var rand = Math.round(random(1,6));
                switch(rand){
                    case 1: tanks.addImage("tank1",tank1_img);
                    break;
                    case 2: tanks.addImage("tank2", tank2_img);
                    break;
                    case 3: tanks.addImage("tank3", tank3_img);
                    break;
                    case 4: tanks.addImage("tank4", tank4_img);
                    break;
                    case 5: tanks.addImage("tank5", tank5_img);
                    break;
                    case 6: tanks.addImage("tank6", tank6_img);
                    break;
                }
            
                
                gamebg1.depth = tanks.depth+1
                blank.depth = tanks.depth+1
                wood.depth = tanks.depth+1
                wood1.depth = tanks.depth+1
                grass.depth = tanks.depth+1
                grass1.depth = tanks.depth+1

                tankGroup.add(tanks);
              }

            drawSprites();
            }
        }
}
