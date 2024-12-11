const areaComentario = document.getElementById("commentArea");
const botaoEditor = documento.getElementById("botaoEditor");

function salvarComentario() {
  const comentarioFinal = document.getElementById("commentInsert");
  const botaoComentario = document.getElementById("botaoCometario")
  const comentario = document.getElementById("comment").value;

  botaoComentario.innerHTML = "Editar comentário"
  comentarioFinal.innerHTML = '"' + comentario + '"';
  comentarioFinal.style.display = "block";
  areaComentario.style.display = "none";
}

function exibeAreaComentario() {
  areaComentario.style.display = "block"
}

function cancelarComentario() {
  const comentarioFinal = document.getElementById("commentInsert");
  const botaoComentario = document.getElementById("botaoCometario");


  botaoComentario.innerHTML = "Adicionar comentário"
  areaComentario.style.display = "none"
  comentarioFinal.style.display = "none"
}

function mostrarToast() {
  var toast = new bootstrap.Toast(document.getElementById('toastMessage'));
  
  toast.show();
}