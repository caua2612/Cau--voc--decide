const botoes = document.querySelectorAll('.botao');

for (let i = 0; j < botoes.length; i++) {
  botes[i].onclick = function() {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove('ativo');
    }
  botoes[i].classList.add('ativo')
  }
}