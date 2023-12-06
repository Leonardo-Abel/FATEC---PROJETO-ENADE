// Ativa o modo estrito para garantir boas práticas e detectar erros mais facilmente.
'use strict'
// Importa o módulo 'prova' do arquivo 'prova.js'.
import { prova } from './prova.js'
// Obtém os dados armazenados localmente com a chave 'resultado' e converte de JSON para um objeto JavaScript.
const data = JSON.parse(localStorage.getItem('resultado'))
// Agora, a variável 'data' contém os dados recuperados do armazenamento local.

// Declaração da função 'createTable'.
function createTable() {
    // Obtém a referência ao elemento de tabela com o ID 'tabela'.
    const tabela = document.getElementById('tabela')
    // Verifica se existe dados (variável 'data') disponíveis.
    if (data) {
        // Itera sobre cada elemento dentro do array 'data'.
        data.forEach(element => {
            // Verifica se a resposta do elemento é 'EM BRANCO'.
            if(element.resposta == 'EM BRANCO') {
                // Adiciona uma nova linha à tabela com os detalhes da questão.
                tabela.innerHTML += `
                    <tbody>
                        <tr>
                            <td>${element.questao}</td>
                            <td>EM BRANCO</td>
                            <td>${element.respostaCorreta}</td>
                        </tr>
                    </tbody>
                `
            }
            // Caso a resposta do elemento não seja 'EM BRANCO'.
            else {
                // Adiciona uma nova linha à tabela com os detalhes da questão, incluindo a resposta dada pelo usuário.
                tabela.innerHTML += `
                    <tbody>
                        <tr>
                            <td>${element.questao}</td>
                            <td>${element.resposta.letra}</td>
                            <td>${element.respostaCorreta}</td>
                        </tr>
                    </tbody>
                `
            }
        });
    // Caso 'data' não esteja definido ou seja vazio, itera sobre cada elemento no array 'prova'.
    } else {
        prova.forEach(element => {
            // Adiciona uma nova linha à tabela com os detalhes da questão, indicando que a resposta do usuário foi 'EM BRANCO'.
            tabela.innerHTML += `
                <tbody>
                    <tr>
                        <td>${element.questao}</td>
                        <td>EM BRANCO</td>
                        <td>${element.resposta.letra}</td>
                    </tr>
                </tbody>
            `            
        });
    }
}

// Declaração da função 'createGraphics'.
function createGraphics() {
    // Verifica se existem dados disponíveis.
    if (data) {
        // Filtra os elementos em 'data' que tiveram a resposta correta (acertou).
        const qtd_acertos = data.filter((element) => element.resposta.acertou).length
        // Filtra os elementos em 'data' que tiveram a resposta incorreta (não acertou).
        const qtd_erros = data.filter((element) => !element.resposta.acertou).length
        
        // Atualiza o conteúdo dos elementos HTML com a quantidade de acertos e erros.
        document.getElementById('acerto').textContent = `${qtd_acertos}/35`
        document.getElementById('erro').textContent = `${qtd_erros}/35`
        
        // Calcula a porcentagem de acertos e erros em relação ao total de questões (35).
        const valorAcertos = (qtd_acertos * 100)/35
        const valorErros = (qtd_erros * 100)/35
        // Atualiza a largura dos elementos gráficos com base nas porcentagens calculadas.
        document.getElementById('acerto_grafico').style.width = `${valorAcertos}%`
        document.getElementById('erro_grafico').style.width = `${valorErros}%`
    } else {
        // Se não houver dados, configura os elementos HTML para indicar que não houve acertos e todos os itens foram errados.
        document.getElementById('acerto').textContent = `0/35`
        document.getElementById('erro').textContent = `35/35`
        // Configura a largura do gráfico de erros para 100%, indicando que todas as questões foram respondidas incorretamente.
        document.getElementById('erro_grafico').style.width = `100%`
    }
}
// Adiciona um event listener ao elemento com o ID 'refazer_simulado'.
document.getElementById('refazer_simulado').addEventListener('click', () => {
    // Limpa todos os dados armazenados localmente.
    localStorage.clear()
    // Redireciona a janela do navegador para a página './instrucoes.html'.
    window.location = './instrucoes.html'
})
// Chama a função 'createTable' para criar a tabela com base nos dados.
createTable()
// Chama a função 'createGraphics' para criar os gráficos com base nos dados.
createGraphics()