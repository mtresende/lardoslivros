// Adiciona um ouvinte de evento ao formulário para capturar o envio
document.getElementById('autorForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Obtém os valores preenchidos nos campos do formulário, removendo espaços extras
    const nome = document.getElementById('nome').value.trim();
    const nacionalidade = document.getElementById('Nacionalidade').value.trim();
    const generoLiterario = document.getElementById('GeneroLiterario').value.trim();
    const dob = document.getElementById('dob').value.trim();

    // Recupera a lista de autores armazenada no localStorage, ou inicializa um array vazio
    const autores = JSON.parse(localStorage.getItem('autores')) || [];

    // Verifica se já existe um autor com os mesmos dados na lista
    const isDuplicate = autores.some(autor =>
        autor.nome === nome &&                      // Verifica se o nome é igual
        autor.nacionalidade === nacionalidade &&    // Verifica se a nacionalidade é igual
        autor.generoLiterario === generoLiterario && // Verifica se o gênero literário é igual
        autor.dob === dob                           // Verifica se a data de nascimento é igual
    );

    if (isDuplicate) {
        // Exibe uma mensagem de erro e interrompe o fluxo se o autor já existe
        document.getElementById('resultado').innerText = 'Erro: Este autor já foi cadastrado!';
        return; // Encerra a execução da função
    }

    // Cria um objeto para o novo autor com os dados coletados
    const autor = { nome, nacionalidade, generoLiterario, dob };

    // Adiciona o novo autor ao array de autores
    autores.push(autor);

    // Atualiza o localStorage com a nova lista de autores
    localStorage.setItem('autores', JSON.stringify(autores));

    // Exibe uma mensagem de sucesso para o usuário
    document.getElementById('resultado').innerText = 'Autor cadastrado com sucesso!';

    // Reseta os campos do formulário para ficarem em branco
    this.reset();

    // Atualiza a exibição da lista de autores
    displayAutores();
});

// Função para exibir os autores cadastrados
function displayAutores() {
    // Seleciona o elemento onde os autores serão exibidos
    const Listadeautores = document.getElementById('Listadeautores');
    
    // Recupera a lista de autores armazenada no localStorage, ou inicializa um array vazio
    const autores = JSON.parse(localStorage.getItem('autores')) || [];

    // Limpa o conteúdo atual da lista
    Listadeautores.innerHTML = '';

    // Verifica se a lista de autores está vazia
    if (autores.length === 0) {
        // Exibe uma mensagem informando que não há autores cadastrados
        Listadeautores.innerHTML = '<p>Nenhum autor cadastrado ainda.</p>';
        return; // Encerra a execução da função
    }

    // Percorre a lista de autores e cria elementos HTML para exibi-los
    autores.forEach((autor, index) => {
        // Cria um contêiner para cada autor
        const autorDiv = document.createElement('div');
        autorDiv.classList.add('autor'); // Adiciona uma classe CSS para estilização
        
        // Adiciona os dados do autor ao HTML do contêiner
        autorDiv.innerHTML = `
            <div>
                <strong>Nome:</strong> ${autor.nome}<br>
                <strong>Nacionalidade:</strong> ${autor.nacionalidade}<br>
                <strong>Gênero Literário:</strong> ${autor.generoLiterario}<br>
                <strong>Data de Nascimento:</strong> ${autor.dob}
            </div>
            <div>
                <!-- Botão para excluir o autor -->
                <button onclick="deleteAutor(${index})" class="btn btn-danger btn-sm">Excluir</button>
                <!-- Botão para atualizar o autor -->
                <button onclick="atualizarAutor(${index})" class="btn btn-success btn-sm">Atualizar</button>
            </div>
        `;
        // Adiciona o contêiner à lista de autores
        Listadeautores.appendChild(autorDiv);
    });
}

// Função para excluir um autor
function deleteAutor(index) {
    // Recupera a lista de autores armazenada no localStorage
    const autores = JSON.parse(localStorage.getItem('autores')) || [];
    
    // Remove o autor pelo índice fornecido
    autores.splice(index, 1);
    
    // Atualiza o localStorage com a lista modificada
    localStorage.setItem('autores', JSON.stringify(autores));
    
    // Atualiza a exibição da lista de autores
    displayAutores();
}

// Função para iniciar a atualização de um autor
function atualizarAutor(index) {
    // Recupera a lista de autores armazenada no localStorage
    const autores = JSON.parse(localStorage.getItem('autores')) || [];
    
    // Obtém os dados do autor selecionado
    const autor = autores[index];

    // Preenche os campos do formulário com os dados do autor
    document.getElementById('nome').value = autor.nome;
    document.getElementById('Nacionalidade').value = autor.nacionalidade;
    document.getElementById('GeneroLiterario').value = autor.generoLiterario;
    document.getElementById('dob').value = autor.dob;

    // Armazena o índice do autor no dataset do formulário para atualização futura
    document.getElementById('autorForm').dataset.editIndex = index;

    // Exibe uma mensagem para o usuário sobre a atualização
    document.getElementById('resultado').innerText = 'Atualize os dados e clique em "Cadastrar".';
}

// Inicializa a exibição dos autores ao carregar a página
displayAutores();
