// 5. Slot Machine

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".

// Ejemplo de uso
class SlotMachine {
  constructor() {
    // Inicializa el contador de monedas
    this.coins = 0
  }

  play() {
    this.coins++
    const roulettesSpin = [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5] // Genera 3 booleanos aleatorios

    if (roulettesSpin.every((reel) => reel)) {
      // Si los 3 booleanos son true devuelve true
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
      // reset the coins
      this.coins = 0
    } else {
      // Si no, devuelve false
      console.log('Good luck next time!!')
    }
  }
}

const machine1 = new SlotMachine()
machine1.play() // "Good luck next time!!"
machine1.play() // "Good luck next time!!"
machine1.play() // "Congratulations!!!. You won 3 coins!!"
machine1.play() // "Good luck next time!!"
machine1.play() // "Congratulations!!!. You won 2 coins!!"
