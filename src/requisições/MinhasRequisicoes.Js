let reserva;

function selecionarReseva(event) {
  reserva = event.target.parentElement;

  console.log(reserva);
}
function excluirReserva() {
  reserva.style.display = "none"
}