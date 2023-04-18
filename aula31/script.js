function play(escolhaDoUsuario) {
    
    //Opções de escolha do Computador
    //Estamos criando uma lista de escolhas possíveis (array) 
    const escolhas = ['pedra', 'papel', 'tesoura'];
   
    // Escolha do computador
    const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];

    //Mostra a escolha do computador
    const resultadoDoComputador = document.getElementById('computer-choice');

    // Troca o conteúdo do elemento html
    resultadoDoComputador.innerHTML = 'A escolha do computador foi:' + escolhaDoComputador


    //Pegar div resultado
    const resultado = document.getElementById('result');

    //Vamos comparar as escolhas
    // Usamos dois == para comparação
    if (escolhaDoUsuario == escolhaDoComputador) {

        // Troca o conteúdo do elemento html
        resultado.innerHTML = 'Empate!';
    } else if (

        // Condição para o usuário vencer
        (escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura') ||
        (escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') ||
        (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel')
    ) {
        // Troca o conteúdo do elemento html
        resultado.innerHTML = 'Você Ganhou!';
    } else {
        // Troca o conteúdo do elemento html
        resultado.innerHTML = 'Você Perdeu!';
    }
}