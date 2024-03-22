var usuarios = [
  { nome: "Danrlei", email: "danrleimentalista@gmail.com", senha: "Gestor@01" },
  { nome: "Elizabeth", email: "elizabeth.moraes@speedmais.com.br", senha: "speed123" },
  { nome: "Jaciane", email: "jaciany.freitas@speedmais.com.br", senha: "vida2023" },
  { nome: "Usuário 3", email: "danielle.barros@speedmais.com.br", senha: "speed123" },
];

function login() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (!email || !senha) {
    exibirMensagemErro("Insira algum valor!");
    return;
  }

  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (usuarioEncontrado) {
    var mensagem = "Bem-vindo, ao ambiente ExplorerSIPEC/DECIPEX" + usuarioEncontrado.nome + "!";
    exibirMensagemSucesso(mensagem);
    window.location.href = "explorer.html";
  } else {
    exibirMensagemErro("Credenciais inválidas. Por favor, tente novamente.");
  }
}

function exibirMensagemErro(mensagem) {
  var balaoErro = document.getElementById("balao-erro");
  balaoErro.textContent = mensagem;
  balaoErro.classList.add("show");
  setTimeout(function() {
    balaoErro.classList.remove("show");
  }, 3000);
}

function exibirMensagemSucesso(mensagem) {
  var balaoSucesso = document.getElementById("balao-sucesso");
  balaoSucesso.textContent = mensagem;
  balaoSucesso.classList.add("show");
  setTimeout(function() {
    balaoSucesso.classList.remove("show");
  }, 4000);
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita o comportamento padrão do formulário (submit)
    login(); // Chama a função de login quando a tecla "Enter" for pressionada
  }
});

document.addEventListener('keydown', function(event) {
if (event.ctrlKey && event.key === 'u') {
event.preventDefault();
alert('A função "Ctrl + U" está desativada nesta página.');
}
});

document.addEventListener('contextmenu', function(event) {
event.preventDefault();
alert('O botão direito do mouse está desativado nesta página.');
});
