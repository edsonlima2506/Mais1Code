/* Faça as funções aqui! */
// Obtém elementos do DOM
const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Variável para armazenar o valor do contador
let counterValue = 0;

// Função para atualizar o valor do contador no DOM
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Aumenta o contador
increaseBtn.addEventListener('click', function() {
    counterValue++;
    counterElement.style.fontSize = (counterValue*5)+'px';
    updateCounter();
});

// Diminui o contador
decreaseBtn.addEventListener('click', function() {
  counterValue--;
  counterElement.style.fontSize = (counterValue*5)+'px';
  updateCounter();
});

// Zera o contador
resetBtn.addEventListener('click', function() {
  counterValue = 0;
  updateCounter();
});