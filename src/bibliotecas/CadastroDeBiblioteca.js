document.getElementById('biblioteca-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const numero = document.getElementById('numero').value;
  const horarioInicio = document.getElementById('horarioInicio').value;
  const horarioFim = document.getElementById('horarioFim').value;

  const biblioteca = {
    nome,
    telefone,
    endereco: `${endereco}, ${numero}`,
    horario: `${horarioInicio} - ${horarioFim}`
  };

  // Simulação de salvar no banco (aqui seria conectado ao backend ou banco de dados)
  console.log('Dados salvos:', biblioteca);

  // Exibe o alerta no canto inferior direito
  showAlert('Biblioteca cadastrada com sucesso!', 'success');

  // Limpa o formulário
  document.getElementById('biblioteca-form').reset();
});

// Função para exibir alerta
function showAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.role = 'alert';
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  alertContainer.appendChild(alert);

  // Remove o alerta após 4 segundos
  setTimeout(() => {
    alert.remove();
  }, 4000);
}
