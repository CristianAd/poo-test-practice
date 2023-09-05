class CuentaBancaria {
    constructor(saldoInicial) {
      let saldo = saldoInicial;
  
      this.depositar = (cantidad) => {
        if (cantidad > 0) {
          saldo += cantidad;
          console.log(`Se depositaron $${cantidad}. Saldo actual: $${saldo}`);
        }
      };
  
      this.retirar = (cantidad) => {
        if (cantidad > 0 && cantidad <= saldo) {
          saldo -= cantidad;
          console.log(`Se retiraron $${cantidad}. Saldo actual: $${saldo}`);
        } else {
          console.log("Fondos insuficientes.");
        }
      };
  
      this.obtenerSaldo = () => {
        return saldo;
      };
    }
  }
  
  const cuenta = new CuentaBancaria(1000);
  cuenta.depositar(500);
  cuenta.retirar(200);
  console.log(`Saldo final: $${cuenta.obtenerSaldo()}`);
  