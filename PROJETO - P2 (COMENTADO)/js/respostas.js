'use strict';

// Importa o módulo 'prova' do arquivo 'prova.js'.
import { prova } from "./prova.js";

// Declaração de uma função que guarda os dados no storage.
function addDataInStorage() {
    // Obtém os dados do armazenamento local ('respostas') e converte de JSON para objeto JavaScript.
    const dadosStorage = JSON.parse(localStorage.getItem('respostas'))

    if(dadosStorage) {
        let resultadoFinal = []
        // Iterar sobre as questões da prova
        prova.forEach((questaoProva) => {
            // Encontrar a resposta correspondente do aluno
            const respostaAluno = dadosStorage.respostas.find((resp) => parseInt(resp.questao) == (parseInt(questaoProva.questao) - 1));
        
            // Verificar se o aluno respondeu a questão
            if (respostaAluno) {
                resultadoFinal.push({
                    questao: questaoProva.questao,
                    respostaCorreta: questaoProva.resposta.letra,
                    resposta: {
                        letra: respostaAluno.alternativaAssinalada.letra,
                        acertou: respostaAluno.acertou
                    }
                });
            } else {
                // Se o aluno não respondeu, preencher com 'EM BRANCO'
                resultadoFinal.push({
                    questao: questaoProva.questao,
                    respostaCorreta: questaoProva.resposta.letra,
                    resposta: 'EM BRANCO'
                });
            }
        });
        // Define um item no armazenamento local chamado 'resultado' com o valor convertido para JSON da variável 'resultadoFinal'.
        localStorage.setItem('resultado', JSON.stringify(resultadoFinal));
    }
    // Redireciona a janela do navegador para a página './resultado.html'.
    window.location = './resultado.html'
}
// Exporta a função 'addDataInStorage', tornando-a disponível para ser importada em outros módulos.
export {
    addDataInStorage
}
