class Pj {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataques = [];
  }
  addAttack(ataque) {
    this.ataques.push(ataque);
  }
  
}

class Ataque {
  constructor(nombre, poder) {
    this.nombre = nombre;
    this.poder = poder;
  }
}

// ataques:
let patada = new Ataque("patada", 3);
let golpe = new Ataque("golpe", 2);

// declaracion de personajes:
let juan = new Pj("juan", 20);
juan.addAttack(patada);
juan.addAttack(golpe);

// enemigos:
let jorge = new Pj("jorge", 20);
jorge.addAttack(patada);
jorge.addAttack(golpe);




export const PJS = [
juan,
new Pj("sofia", 30)
];

export  const PNJ = [jorge];
