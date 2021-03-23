function getValue() {
  var myValue = document.getElementById("dolarValue").value;
  var dolarConvert = parseFloat(myValue * 5.51).toFixed(2);
  document.getElementById("realValue").innerHTML = dolarConvert;
}
