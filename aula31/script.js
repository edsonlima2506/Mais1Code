function play(escolhaDoUsuario) {
    // Opções de escolha do computador
    // Estamos criando uma lista (array) de escolhas possíveis
    const escolhas = ['pedra', 'papel', 'tesoura'];

    // Escolha do computador
    const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)];

    // Mostra a escolha do computador
    const resultadoDoComputador = document.getElementById('computer-choice');
    // Troca o conteúdo do elemento HTML
    resultadoDoComputador.innerHTML = 'A escolha do computador foi: ' + escolhaDoComputador;

    // Pegar div resultado
    const resultado = document.getElementById('result');

    // Vamos comparar as escolhas
    // Usamos dois == para comparação
    if (escolhaDoUsuario == escolhaDoComputador) {
        // Troca o conteúdo do elemento HTML
        resultado.innerHTML = 'Empate!';
    } else if (
        // Condições para o usuário vencer
        (escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura') ||
        (escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') ||
        (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel')
    ) {
        // Troca o conteúdo do elemento HTML
        resultado.innerHTML = 'Você ganhou!';
    } else {
        // Troca o conteúdo do elemento HTML
        resultado.innerHTML = 'Você perdeu!';
    }
}