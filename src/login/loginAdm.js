function validarLogin(event) {
    // Evitar que o formulário envie e recarregue a página
    event.preventDefault();
    
    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const alert = document.getElementById("alert");

    // Verificando as credenciais
    if (user === "admin" && password === "00000") {
        alert.style.display = "none"; // Esconde o alert se for válido
        window.location.href = "../homeAdm/homepageAdm.html"
    } else {
        // Usuário inválido
        alert.style.display = "block"; // Exibe o alert
    }
}