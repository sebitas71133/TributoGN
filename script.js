let bio = document.querySelector("#biografia");
let cont = document.querySelector("#contribuciones");
let fila = document.querySelector("#filantropia");
let cita = document.querySelector("#citas");
let btnBio = document.querySelector("#btnBiografia");
let btnCont = document.querySelector("#btnContribuciones");
let btnFila = document.querySelector("#btnFilantropia");
let btnCita = document.querySelector("#btnCitas");

let array = [bio, cont, fila, cita];

window.addEventListener("load", actualizar);

function actualizar() {
  cont.setAttribute("style", "display: none");
  fila.setAttribute("style", "display: none");
  cita.setAttribute("style", "display: none");
}

function tarjetas(e) {
  array.forEach((tarjeta) => {
    if (tarjeta.id === e.textContent.toLowerCase().trim()) {
      tarjeta.setAttribute("style", "display:flex");
    } else {
      tarjeta.setAttribute("style", "display: none");
    }
  });
}
