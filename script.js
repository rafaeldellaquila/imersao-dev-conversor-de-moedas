function getValueDolar() {
  var myValue = document.getElementById("cathValue").value;
  var valueConvert = parseFloat(myValue * 5.51).toFixed(2);
  document.getElementById("convertedValue").innerHTML = valueConvert;
}

function getValueEuro() {
  var myValue = document.getElementById("cathValueEuro").value;
  var valueConvert = parseFloat(myValue * 6.51).toFixed(2);
  document.getElementById("convertedValueEuro").innerHTML = valueConvert;
}

function getValueLight() {
  var myValue = document.getElementById("cathValueKm").value;
  var valueConvert = parseFloat(myValue * 9460536068); //.toFixed(2);
  document.getElementById("convertedValueLight").innerHTML = valueConvert;
}
