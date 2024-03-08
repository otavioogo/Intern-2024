function inverterString(string) {

    //Inicio com String vazio
    let stringInvertida = '';
    //Percorrer String de Traz para frente
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
    //Apos a string Invertida vai ser retornada
    return stringInvertida;
  }
  
  console.log(inverterString('hello')); 