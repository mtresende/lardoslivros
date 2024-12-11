const url = "https://428051d2-7000-4935-a2cd-234912cf093e-00-39vld8ab3fa17.janeway.replit.dev/"
var usuariosCadastrados;

async function validarUsuario() {
    const urlUsuario = url + "usuario"

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    fetch(urlUsuario, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => {

            if(json.length === 0) {
                var alert1 = document.getElementById("alert1");
                alert1.style.display = "block";
            }

            if (email.value == json[0].email && password.value == json[0].password) {
                document.getElementById("resp").innerHTML = "<p>Usuário validado!</p>";
                window.location.href = "../home/homepage.html"
            } else {
                var alert2 = document.getElementById("alert2");
                alert2.style.display = "flex";
            }
        });
}

function encontrarEmail(vetor, email) {
    return vetor.findIndex(usuario => usuario.email == email);
}

function validarSenha(usuario, senha) {
    var valido = false;
    if (usuario.senha == senha)
        valido = true;
    return valido
}