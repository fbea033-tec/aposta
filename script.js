// Programa para somar as apostas de quatro amigos
function calcularPremio(apostas) {
  // Soma todas as apostas
  let premioTotal = apostas.reduce((soma, valor) => soma + valor, 0);
  console.log(`O valor total do prêmio é R$${premioTotal.toFixed(2)}`);
}

// Exemplo de uso
let apostas = [50, 30, 20, 100]; // valores apostados pelos quatro amigos
calcularPremio(apostas);
