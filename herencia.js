// Clase base
class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  // Clase derivada (hereda de Animal)
  class Perro extends Animal {
    hacerSonido() {
      console.log(`${this.nombre} ladra.`);
    }
  }
  
  class Gato extends Animal {
    hacerSonido() {
      console.log(`${this.nombre} maulla.`);
    }
  }
  
  const perro = new Perro("Max");
  const gato = new Gato("Whiskers");
  
  perro.hacerSonido()
  gato.hacerSonido();

 
  