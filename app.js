let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Debes ingresar un nombre");
    return;
  }

  amigos.push(nombre);

  document.getElementById("listaAmigos").innerHTML += "<li>" + nombre + "</li>";
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No se encuentran amigos para sortear");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let seleccionado = amigos[indice];
  
  document.getElementById("resultado").innerHTML =
    "<li> Amigo sorteado: <strong>" + seleccionado + "</strong></li>";
    document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("amigo").value = "";
}