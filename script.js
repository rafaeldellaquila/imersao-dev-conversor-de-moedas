function getValue() {
  var myValue = document.getElementById("ValorReal").value;
  var dolarConvert = parseFloat(myValue * 5.51).toFixed(2);
  document.getElementById("dolarValue").innerHTML = dolarConvert;
}
