document.getElementById('cep').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('street').value = data.logradouro;
                    document.getElementById('city').value = data.localidade;
                    document.getElementById('state').value = data.uf;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                alert('Erro ao buscar o CEP. Tente novamente.');
            });
    } else {
        alert('Por favor, insira um CEP válido.');
    }
});

const url = "https://428051d2-7000-4935-a2cd-234912cf093e-00-39vld8ab3fa17.janeway.replit.dev/"

async function cadastrar() {
    const urlUsuario = url + "usuario"

    const nome = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm-password');
    const cep = document.getElementById('cep');
    const street = document.getElementById('street');
    const number = document.getElementById('number');
    const city = document.getElementById('city');
    const state = document.getElementById('state');

    fetch(urlUsuario, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "name": nome.value,
            "email": email.value,
            "password": password.value,
            "cep": cep.value,
            "street": street.value,
            "number": number.value,
            "city": city.value,
            "state": state.value
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            nome.value = "";
            email.value = "";
            password.value = "";
            confirm_password.value = "";
            cep.value = "";
            street.value = "";
            number.value = "";
            city.value = "";
            state.value = "";
        });

        var alert = document.getElementById("alerta");
        alert.style.display = "block";
        
        document.body.style.cursor = "wait";
        
        function irTeladeLogin() {
            window.location.href = "../login/login.html";
        }
        
        setTimeout(irTeladeLogin, 3000);
}