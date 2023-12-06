'use strict'

// Importa a const 'prova' do arquivo 'prova.js', que contém todos os dados referente a prova do ENADE
import { prova } from './prova.js'
// Importa a função 'addDataInStorage' do arquivo 'respostas.js', que armazena os dados do resultado da prova no localStorage
import { addDataInStorage } from './respostas.js'

// Obtém a parte da URL que contém os parâmetros após o '?'
const url = window.location.search.substring(1)

// Extrai o valor associado à chave 'questao' na string da URL, subtrai 1 para obter o índice correto no array 'prova'
const numQuestao = (url.split('=')[1] - 1)

// Função para corrigir a questão com base na letra da resposta e no índice da resposta do usuário
function corrigirQuestao(letraResposta, indexRespostaUsuario) {
    const questao = prova[numQuestao]
    let retorno

    if (letraResposta == questao.resposta.letra) {
        // Se a letra da resposta do usuário for igual à letra da resposta correta
        retorno = {
            acertou: true,
            alternativaCorreta: questao.alternativas[questao.resposta.index]
        }
    } else {
        // Se a letra da resposta do usuário for diferente da letra da resposta correta
        retorno = {
            acertou: false,
            alternativaAssinalada: questao.alternativas[indexRespostaUsuario],
            alternativaCorreta: questao.alternativas[questao.resposta.index]
        }
    }

    return retorno
}

// Função para avançar para a próxima questão, armazenando a resposta no localStorage
function nextQuestion(acerto, alternativa) {
    // Resgata os dados que estão no localStorage
    const data = JSON.parse(localStorage.getItem('respostas'))

    if (data) {
        // Se já houver dados no localStorage, adiciona a nova resposta ao array existente no localStorage
        data.respostas.push({
            questao: numQuestao,
            acertou: acerto,
            alternativaAssinalada: alternativa
        })
        localStorage.setItem('respostas', JSON.stringify(data))
    } else {
        // Se não houver dados no localStorage, cria um novo objeto com a resposta e o armazena no localStorage
        localStorage.setItem('respostas', JSON.stringify({
            respostas: [
                {
                    questao: numQuestao,
                    acertou: acerto,
                    alternativaAssinalada: alternativa
                }
            ]
        }))
    }

    // Se a questão atual for a última, exibe uma mensagem de conclusão e chama a função addDataInStorage, caso contrário, avança para a próxima questão
    if (numQuestao + 1 == prova.length) {
        swal({
            title: 'Parabéns! Você finalizou a prova',
            text: 'Siga em frente para visualizar seu resultado',
            icon: 'success'
        }).then(() => {
            addDataInStorage();
        })
    } else {
        // Se não for a última, apenas redireciona o usuário para a próxima questão
        window.location.href = `../pages/prova.html?questao=${numQuestao + 2}`
    }
}

// Adiciona um evento de clique ao elemento com o ID "estatisticas"
document.getElementById('estatisticas').addEventListener('click', () => {
    // Redireciona para a página específica das estáticas dessa questão
    window.location = `./Q${prova[numQuestao].questao}.html`
})

// Adiciona um evento de clique ao botão com o id 'responder'
document.getElementById('responder').addEventListener('click', () => {
    // Obtém todas as alternativas como uma coleção e converte para um array
    const alternativas = Array.from(document.getElementsByClassName('alternativa'))
    let correcao

    // Vare o array de altertivas para saber qual foi assinalada
    alternativas.forEach((element, i) => {
        // Verifica se a alternativa foi assinalada
        if (element.checked)
            // Chama a função que corrige a questão com base na letra da resposta e no índice da resposta do usuário, para ter a correção da alternativa assinalada 
            correcao = corrigirQuestao(element.defaultValue, i)
    })

    // Verifica se a correção foi realizada, ou seja, o usuário respondeu essa questão
    if (correcao) {
        let alternativaCorreta = correcao.alternativaCorreta.alternativa

        // Verifica se a alternativa correta possui a chave 'alternativaCorrecao', para poder exibir o texto correto
        if(correcao.alternativaCorreta.alternativaCorrecao) {
            // Se tiver essa chave, altera a variável que armazena a alternativa correta para o conteúdo dessa chave
            alternativaCorreta = correcao.alternativaCorreta.alternativaCorrecao
        }

        if (correcao.acertou) {
            // Se a resposta estiver correta, exibe uma mensagem de sucesso
            swal({
                title: 'Parabéns! Você acertou',
                text: `${correcao.alternativaCorreta.letra}) ${alternativaCorreta}`,
                icon: 'success'
            }).then(() => {
                nextQuestion(true, correcao.alternativaCorreta)
            })
        } else {
            // Senão, exibe uma mensagem de erro
            swal({
                title: 'Que pena... Você errou',
                text: `A resposta correta é "${correcao.alternativaCorreta.letra}) ${alternativaCorreta}"`,
                icon: 'error'
            }).then(() => {
                nextQuestion(false, correcao.alternativaAssinalada)
            })
        }
    } else {
        // Se o usuário não respondeu, exibe uma mensagem de aviso
        swal({
            title: 'Você não respondeu!',
            text: 'Sua resposta está em branco. Assinale uma alternativa antes de responder ou pule a questão.',
            icon: 'warning'
        })
    }
})
