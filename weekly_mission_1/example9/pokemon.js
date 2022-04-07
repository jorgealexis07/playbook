
export default class Pokemon {
    constructor (name) {
      this.name = name
    }

    
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }