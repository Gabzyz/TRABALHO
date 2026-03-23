// Selecionando os elementos que vamos usar
const botao = document.getElementById('btnInterativo');
const cabecalho = document.querySelector('header');

// Adicionando o "ouvinte" de clique
botao.addEventListener('click', function() {
    // 1. Mostra um alerta na tela
    alert('Olá! Espero que goste do meu trabalho escolar!');
    
    // 2. Muda a cor de fundo do cabeçalho (efeito visual)
    cabecalho.style.background = '#002266'; 
    
    // 3. Muda o texto do botão
    botao.innerText = 'Obrigado por visitar!';
});