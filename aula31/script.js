function play(escolhaDoUsuario) {
    //opções de escolha do computado
    //estamos criando uma lista (array) de escolhas possiveis
const escolhas = ['pedra', 'papel', 'tesoura'];

    //o escolhas do computador esta relacionado a linha 4 
const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];
    
// mostra a escolha do computador
const resultadoDoComputador = document.getElementById('computer-choice');
resultadoDoComputador.innerHTML = 'A escolha do computador foi: ' + escolhaDoComputador;     

// pegar div resultado da linha 12 à 14 do html
const resultado = document.getElementById('result');

     //vamos comparar as escolhas
     //usamos 2= para comparaçao 
     if (escolhaDoUsuario == escolhaDoComputador) {
        resultado.innerHTML = 'Empate!';
     } else if (
      // condicoes para o usuario vencer
      (escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura') ||
      (escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') ||
      (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel') 
     ) {
        resultado.innerHTML = 'você ganhou!';

     } else {
        resultado.innerHTML = 'você perdeu!';
    }

}  
    /* Faça as funções aqui! */
