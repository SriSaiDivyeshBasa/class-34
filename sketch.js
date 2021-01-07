var hagnoticball,database,position;

function setup(){
    database=firebase.database();

    createCanvas(500,500);
    hagnoticball = createSprite(250,250,10,10);
    hagnoticball.shapeColor = "red";
    var ballposition=database.ref('ball/position');
    ballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}


function readPosition(data){
  position=data.val();
  console.log(position) ; 
  hagnoticball.x=position.x;
  hagnoticball.y=position.y;
   
}
function showError(){
    console.log("error");
}
