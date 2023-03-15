/*
vários comentários
*/

// uma linha de comentário

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll ('.imagem');

//passo 2 - dar um jeito de identificar o clique do usuário no botão
/*
INVIÁVEL COM MUITOS BOTÕES
const botao1 = document.getElementById('botao1')
botao1.addEventListener ('click', () => {
    console.log ('clicou no botao 1');
})
*/

botoesCarrossel.forEach ((botao, indice) => {
    botao.addEventListener ('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add ('selecionado');

        // passo 5 - esconder a imagem ativa de fundo]
        const imagemAtiva = document.querySelector ('.ativa');
        imagemAtiva.classList.remove ('ativa');

        // passo 6 - fazer aparecer imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add ('ativa');
     })
})


function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

