function fibonacci(num) {
    //matriz sequencia de fibonacci
    let sequence = [0, 1];
  
    //loop a partir do 3 elemento
    for (let i = 2; i < num; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  
    //depois de gerar a sequencia de Fibonacci, validando se o NUM esta presente na sequencia
    if (sequence.includes(num)) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  console.log(fibonacci(21)); // Exemplo de número que pertence à sequência
  console.log(fibonacci(20)); // Exemplo de número que não pertence à sequência