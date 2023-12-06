'use strict'

// Importa a const 'prova' do arquivo 'prova.js', que contém todos os dados referente a prova do ENADE
import { prova } from './prova.js'
// Importa a função 'addDataInStorage' do arquivo 'respostas.js', que armazena os dados do resultado da prova no localStorage
import { addDataInStorage } from './respostas.js'

// Adiciona um evento de clique ao elemento com o id 'finalizar'
document.getElementById('finalizar').addEventListener('click', () => {
    // Obtém os dados armazenados no localStorage com a chave 'respostas' e converte para objeto JavaScript
    const dados = JSON.parse(localStorage.getItem('respostas'))

    // Verifica se há dados no localStorage
    if(dados) {
        // Verifica se o número de respostas registradas não é igual ao número total de questões na prova
        if(dados.respostas.length != prova.length) {
            // Exibe uma mensagem de alerta ao usuário perguntando se deseja finalizar a prova com questões não respondidas
            swal({
                title: 'Deseja mesmo finalizar agora?',
                text: 'Você ainda não respondeu todas as questões e aquelas que estiverem em branco serão contabilizadas como erradas.',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
            .then((vaiFinalizar) => {
                // Se o usuário confirmar a finalização, chama a função addDataInStorage
                if (vaiFinalizar) {
                    addDataInStorage()
                }
            });
        }
    } else {
        // Se não houver dados no localStorage, exibe uma mensagem de alerta perguntando se deseja sair da prova
        swal({
            title: 'Deseja mesmo sair da prova?',
            text: 'Você ainda não respondeu nenhuma questão, logo sua prova será zerada.',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        .then((vaiFinalizar) => {
            // Se o usuário confirmar a saída, chama a função addDataInStorage
            if (vaiFinalizar){
                addDataInStorage()
            }
        });
    }
})
