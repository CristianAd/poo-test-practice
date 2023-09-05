class Animal1{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    sonido(){
        return "El animal es" + this.nombre
    }
}

class Perro1 extends Animal1{
  
    otrosonido(){
       return "otro sonido" 
    }

}

const especie1 = new Perro1
especie1.

