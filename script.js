var ValorEmDolarTexto = prompt(
  "Qual o valor em dolar que você quer converter?"
);

var ValorFixed = parseFloat(ValorEmDolarTexto * 5.51).toFixed(2);

alert(ValorFixed);
