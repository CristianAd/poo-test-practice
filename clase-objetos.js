// Definición de una clase
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Creación de objetos
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Ana", 25);
  
  // Llamada a métodos
  persona1.saludar();
  persona2.saludar();
  