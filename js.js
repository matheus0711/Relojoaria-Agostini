// Inicializa o EmailJS com sua chave pública
emailjs.init('ij03Xy3_3Oan4plMz'); // Substitua com sua chave pública real

// Captura o botão de envio
const btn = document.getElementById('button');

// Lida com o envio do formulário
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Altera o valor do botão enquanto o e-mail está sendo enviado
  btn.value = 'Enviando...';

  // Defina os IDs do serviço e do template
  const serviceID = 'service_oia7uft'; // ID do seu serviço
  const templateID = 'template_djftb5f'; // ID do seu template

  // Envia o formulário usando o serviço e template do EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar E-mail'; // Restaura o botão
      alert('Mensagem enviada com sucesso!'); // Exibe um alerta de sucesso
    }, (err) => {
      btn.value = 'Enviar E-mail'; // Restaura o botão em caso de erro
      alert('Erro ao enviar: ' + JSON.stringify(err)); // Exibe o erro
    });
});

// script.js - Para a página index.html
window.onload = function() {
    // Verifica se há um usuário armazenado no localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        // Exibe uma saudação com o nome do usuário, se encontrado
        document.getElementById('boas-vindas-texto').innerText = `Bem-vindo, ${usuario.nome}!`;
        document.getElementById('minha-conta').style.display = 'none'; // Esconde a opção "Minha Conta"
    }
};


