const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, bodies;
var egg1;
var head1;
var ligaC, ligaRh, ligaLh, ligaL, ligaL2, ligaW;
var ground;
var leg1, leg2;
var hammer;
//var player1 = new Group();
var rightHand, leftHand;



function setup() {
    
    canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world
    egg1 = new egg(50,380);
    ground = new block(600,500,1200,50);
    head1 = new head(50,330);
    rightHand = new hand(80, 380);
    leftHand = new hand(20,380);
    leg1 = new leg(35,420);
    leg2 = new leg(65,420);
    ligaC = new liga(egg1.body, head1.body);
    ligaRh = new liga(egg1.body, rightHand.body);
    ligaLh = new liga(egg1.body, leftHand.body);
    ligaL = new liga(egg1.body, leg1.body);
    ligaL2 = new liga(egg1.body, leg2.body);
    player1 = [];
    hammer = new weapon(80,70);
    box1 = new box(100,70);
    player1.push(head1);
    player1.push(ligaC);
    player1.push(egg1);
    player1.push(ligaRh);
    player1.push(ligaLh);
    player1.push(ligaL);
    player1.push(ligaL2);
    player1.push(leg1);
    player1.push(leg2);
    player1.push(leftHand);
    player1.push(rightHand);
    console.log(player1.lenght);
}
function draw(){
    background( "blue");
   
    ground.display();
    egg1.display();
    head1.display();
    leg1.display();
    leg2.display();
    //box1.display();
    rightHand.display();
    leftHand.display();
     /*ligaC.display();
    ligaRh.display();
    ligaLh.display(); 
    ligaL.display(); 
    ligaL2.display();*/
    //randomWeapon();
   
    
    if(keyCode === 100){
        player1.position.x = player1.position.x + 5;
    }
    /*if(keyCode === 97){
        player1.position.x = player1.position.x - 5;
    }
    if(keyCode === 32){
        player1.position.y = player1.position.y -8;
    */
    }



    


/*function randomWeapon(){
    if(box1.isTouching(leg1)){
        ligaW = new liga2(rightHand.body, hammer.body);
        hammer.display();
        
    }*/

