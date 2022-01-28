class Ground {

  //método que constrói o objeto a partir dos parâmetros que vem do sketch.js
  constructor(x, y, w, h) {

    this.w = w; //referencia a própria variável para torná-la pública
    this.h = h; //uma variável pública pode ser usada em outros lugares

    //var options = {isStatic:true};
    
    //criando um corpo retangular           estático:verdadeiro
    this.body = Bodies.rectangle(x, y, w, h, {isStatic:true});
    World.add(world, this.body); //adiciona o corpo no mundo
  }

  //método para mostrar o objeto na tela
  display() {
    var pos = this.body.position;
    push(); 
    rectMode(CENTER); //centraliza o corpo retangular
    stroke(255); //preenchimento
    fill(127); //borda
    //exibe na tela um corpo retangular
    rect(pos.x, pos.y, this.w, this.h); //mostra na tela
    pop();
  }

  
  
}


