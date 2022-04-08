export default class Pokemon {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name; // Estás variables se le conocen como atributos
    }
  
    sayhello() {
      console.log(`Mi pokemon ${this.name} te saluda!!!!`);
    }
  
    sayMessage(message) {
      console.log(`Mi pokemon ${this.name} dice: ${message}`);
    }
  }
  