const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//let engine;
//let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(rightForce);
  
  //criando o botão de flecha para cima
  btn2 = createImg('up.png'); //atribuindo uma imagem
  btn2.position(20,30); //posicionando a imagem
  btn2.size(50,50); //estabelecendo um tamanho para essa imagem 
  btn2.mouseClicked(upForce); //quando eu clicar com o botão, eu chamo a função
  

  //criando os objetos da classe Ground e passando os parâmetros
  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);


  //var ball_options = {restitution: 0.95, frictionAir:0.05};

  //cria um corpo circular (posiçãoX, posiçãoY, raio, atributos)
  ball = Bodies.circle(200,100,20,{restitution: 0.95, frictionAir:0.05});
  World.add(world,ball); //adiciona o corpo no mundo
  
  //centraliza os objetos
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  //exibe na tela um corpo circular (ball)
  ellipse(ball.position.x,ball.position.y,20);


  //mostrando os objetos da classe Ground (usando o método display)
  ground.display();
  top_wall.display();
  left.display();
  right.display();

  //atualizando o motor de física para exibir os objetos corretamente na tela
  Engine.update(engine);
}


function rightForce(){

  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

//função para aplicar força para cima
function upForce(){
  //comando que aplica a força (o objeto em que ele aplica a força, 
  // {posição inicial de X e de Y}, {posição final de X e Y com a aplicação da força})
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
