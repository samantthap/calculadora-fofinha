const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    manipularClique(botao);
  });
});

document.addEventListener('keydown', (event) => {
  const tecla = event.key;

  if (/[0-9+\-*/.=]|Enter|Escape|Backspace/.test(tecla)) {
    event.preventDefault();
    if (tecla === 'Enter') {
      calcularResultado();
    } else if (tecla === 'Escape') {
      limparDisplay();
    } else if (tecla === 'Backspace') {
      apagarUltimoCaractere();
    } else {
      manipularTecla(tecla);
    }
  }
});

function manipularClique(botao) {
  if (botao.classList.contains('numero')) {
    adicionarAoDisplay(botao.textContent);
  } else if (botao.classList.contains('operador')) {
    adicionarAoDisplay(` ${botao.textContent} `);
  } else if (botao.classList.contains('igual')) {
    calcularResultado();
  } else if (botao.classList.contains('limpar')) {
    limparDisplay();
  }
}

function manipularTecla(tecla) {
  if (/[0-9]/.test(tecla)) {
    adicionarAoDisplay(tecla);
  } else if (/[+\-*/.]/.test(tecla)) {
    adicionarAoDisplay(` ${tecla} `);
  } else if (tecla === '=') {
    calcularResultado();
  }
}

function adicionarAoDisplay(valor) {
  display.value += valor;
}

function calcularResultado() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}

function limparDisplay() {
  display.value = '';
}

function apagarUltimoCaractere() {
  display.value = display.value.slice(0, -1);
}