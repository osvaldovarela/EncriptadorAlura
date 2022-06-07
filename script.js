function encriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();

  var txtCifrado = texto.replace(/e/i, "enter");
  var txtCifrado = txtCifrado.replace(/o/i, "ober");
  var txtCifrado = txtCifrado.replace(/i/i, "imes");
  var txtCifrado = txtCifrado.replace(/a/i, "ai");
  var txtCifrado = txtCifrado.replace(/u/i, "ufat");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();

  var txtCifrado = texto.replace(/enter/i, "e");
  var txtCifrado = txtCifrado.replace(/ober/i, "o");
  var txtCifrado = txtCifrado.replace(/imes/i, "i");
  var txtCifrado = txtCifrado.replace(/ai/i, "a");
  var txtCifrado = txtCifrado.replace(/ufat/i, "u");

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copy() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("¡copiado!");
}
