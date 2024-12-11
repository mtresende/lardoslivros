// Evento de submissão para criar um novo autor (POST)
document.getElementById('autorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const dob = document.getElementById('dob').value;

    const autor = { nome, categoria, dob };
    createAutor(autor);

    document.getElementById('resultado').innerHTML = 'Autor cadastrado com sucesso!';
    this.reset();
    displayAutores();
});

// Função POST para criar um novo autor
function createAutor(autor) {
    const autores = JSON.parse(localStorage.getItem('autores')) || [];
    autores.push(autor);
    localStorage.setItem('autores', JSON.stringify(autores));
}

// Função GET para obter todos os autores
function getAutores() {
    return JSON.parse(localStorage.getItem('autores')) || [];
}

// Função para exibir a lista de autores
function displayAutores() {
    const Listadeautores = document.getElementById('Listadeautores');
    const autores = getAutores();

    Listadeautores.innerHTML = '';
    autores.forEach((autor, index) => {
        const autorDiv = document.createElement('div');
        autorDiv.classList.add('autor');
        autorDiv.innerHTML = `
            <div>
                <strong>Nome:</strong> ${autor.nome}<br>
                <strong>Categoria:</strong> ${autor.categoria}<br>
                <strong>Data de Nascimento:</strong> ${autor.dob}
            </div>
            <button class="delete-button" onclick="deleteAutor(${index})">Excluir</button>
            <button class="edit-button" onclick="editAutor(${index})">Editar</button>
        `;
        Listadeautores.appendChild(autorDiv);
    });
}

// Função DELETE para excluir um autor pelo índice
function deleteAutor(index) {
    const autores = getAutores();
    autores.splice(index, 1);
    localStorage.setItem('autores', JSON.stringify(autores));
    displayAutores();
    document.getElementById('resultado').innerHTML = 'Autor excluído com sucesso!';
}

// Função PUT para atualizar completamente um autor pelo índice
function updateAutor(index, autorAtualizado) {
    const autores = getAutores();
    autores[index] = autorAtualizado;
    localStorage.setItem('autores', JSON.stringify(autores));
    displayAutores();
}

// Função PATCH para atualizar parcialmente um autor pelo índice
function patchAutor(index, camposAtualizados) {
    const autores = getAutores();
    Object.assign(autores[index], camposAtualizados);
    localStorage.setItem('autores', JSON.stringify(autores));
    displayAutores();
}

// Função para preencher o formulário de edição de autor (chama PUT)
function editAutor(index) {
    const autores = getAutores();
    const autor = autores[index];

    document.getElementById('nome').value = autor.nome;
    document.getElementById('categoria').value = autor.categoria;
    document.getElementById('dob').value = autor.dob;

    document.getElementById('autorForm').onsubmit = function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const categoria = document.getElementById('categoria').value;
        const dob = document.getElementById('dob').value;

        const autorAtualizado = { nome, categoria, dob };
        updateAutor(index, autorAtualizado);

        document.getElementById('resultado').innerHTML = 'Autor atualizado com sucesso!';
        this.reset();
        document.getElementById('autorForm').onsubmit = submitHandler;
    };
}

// Exibe a lista de autores ao carregar a página
document.addEventListener('DOMContentLoaded', displayAutores);

// Função de submissão original do formulário
const submitHandler = document.getElementById('autorForm').onsubmit;
