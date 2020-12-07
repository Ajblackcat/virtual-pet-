//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;
var dog1;
function preload(){
  //load images here
  dog1=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
 
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300);
  dog.addImage(dog1);
  dog.scale=0.15;
   foodStockRef=database.ref('food');
  foodStockRef.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);  
dog.addImage(happyDog);

}
  drawSprites();
  textSize(16);
  fill("red");
  text(" press the'Up Arrow' key to feed the dog",50,70)
  

fill("red");
text("Food Remaining:"+foodS,170,200);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}






