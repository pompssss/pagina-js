// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Selecionando os parágrafos com a classe 'mensagem2' (remover espaço)
const mensagens = document.getElementsByClassName('mensagem2'); // Correção aqui

// Criando o botão para modificar as frases
const botaomudarfrase = document.createElement('button');
botaomudarfrase.textContent = "Modificar a frase";
document.querySelector('.container').appendChild(botaomudarfrase);

// Evento de clique para modificar as frases
botaomudarfrase.addEventListener('click', function() {
  for(let i = 0; i < mensagens.length; i++) {
    mensagens[i].textContent = `Frase modificada ${i + 1} utilizando JS!`;
  }
});