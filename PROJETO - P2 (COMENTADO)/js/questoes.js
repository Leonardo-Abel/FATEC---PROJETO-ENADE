'use strict'

// Importa a const 'prova' do arquivo 'prova.js', que contém todos os dados referente a prova do ENADE
import { prova } from './prova.js'

// Obtém a parte da URL que contém os parâmetros após o '?'
const url = window.location.search.substring(1)
// Extrai o valor associado à chave 'questao' na string da URL, subtrai 1 para obter o índice correto no array 'prova'
const numQuestao = (url.split('=')[1] - 1) // subtrai 1 o valor encontrado, pois este será utilizado como índice para o array que contém a prova - este segue a ordem exata ds questões da prova original

// Função para carregar as questões na página
function loadQuestions() {
    // Obtém a questão atual do array 'prova'
    const questao = prova[numQuestao]
    // Obtém a referência para o elemento com o ID "corpo-pergunta" no DOM
    const corpoPergunta = document.getElementById('corpo-pergunta')
    // Cria um novo elemento <div> dinamicamente
    const textos = document.createElement('div')
    // Adiciona a classe "textos" ao elemento criado
    textos.classList.add('textos')

    // Função para carregar o número da questão na página
    function loadNumber(numeroQuestao) {
        // Obtém a referência para o elemento com o ID "questao" no DOM
        const questao = document.getElementById('questao')
        // Cria um novo elemento <span> dinamicamente
        const span = document.createElement('span')
        // Define o texto do elemento <span> como "questão ${numeroQuestao}/35"
        span.textContent = `questão ${numeroQuestao}/35`
        // Adiciona o elemento <span> como um filho do elemento com o ID "questao"
        questao.appendChild(span)
    }

    // Função para navegar entre as páginas das questões, podendo pular ou voltar uma questão
    function navPage() {
        // Obtém a referência para o elemento com o ID "corpo-pergunta" no DOM
        const questao = document.getElementById('corpo-pergunta')
        // Cria um novo elemento <div> dinamicamente e adiciona classes e ID
        const navButtons = document.createElement('div')
        navButtons.classList.add('nav-buttons')
        navButtons.id = 'nav-buttons'
        // Cria um novo elemento <a> dinamicamente e adiciona o ID "voltar"
        const voltar = document.createElement('a')
        voltar.id = 'voltar'
        // Adiciona conteúdo HTML ao elemento <a>
        voltar.innerHTML += `
            <span>voltar</span>
        `
        // Atribui um valor ao atributo href do elemento <a> com o ID "voltar"
        voltar.href = `../pages/prova.html?questao=${numQuestao}`
        // Cria um novo elemento <a> dinamicamente e atribui o ID "pular"
        const pular = document.createElement('a')
        pular.id = 'pular'
        // Adiciona conteúdo HTML ao elemento <a>
        pular.innerHTML += `
            <span>pular</span>
        `
        // Define o atributo href do elemento <a> com uma URL dinâmica
        pular.href = `../pages/prova.html?questao=${numQuestao + 2}`
        // Adiciona o elemento <a> com o ID "voltar" como filho do elemento <div> com o ID "nav-buttons"
        navButtons.appendChild(voltar)
        // Adiciona o elemento <a> com o ID "pular" como filho do elemento <div> com o ID "nav-buttons"
        navButtons.appendChild(pular)
        // Adiciona o elemento <div> com o ID "nav-buttons" como filho do elemento com o ID "corpo-pergunta"
        questao.appendChild(navButtons)

        // Chama a função para ocultar os botões de navegação
        hideButtons()
    }

    // Função para ocultar os botões de navegação em casos específicos
    function hideButtons() {
        const navButtons = document.getElementById('nav-buttons')

        if (numQuestao == 0) {
            const voltar = document.getElementById('voltar')
            voltar.style = 'display: none;'

            navButtons.style = 'justify-content: end;' 
        } else if(numQuestao == prova.length - 1) {
            const pular = document.getElementById('pular')
            pular.style = 'display: none;'   
        }
    }

    // Carrega o número da questão na página
    loadNumber(questao.questao);

    // Itera sobre os textos da questão
    questao.textos.forEach((element, i) => {
        // Inicia um bloco switch com base no valor da propriedade 'tipo' do objeto 'element'
        switch (element.tipo) {
            case 'txt' :
                // Se o valor de 'tipo' for 'txt', executa o seguinte código:

                // Cria um novo elemento <div> dinamicamente e adiciona a classe 'texto'
                const div = document.createElement('div')
                div.classList.add('texto')

                // Adiciona título e descrição aos textos
                if(element.titulo) {
                    // Adiciona o título do texto
                    div.innerHTML += `
                            <span class="numTXT">TEXTO ${i + 1}</span>
                            <span class="titulo">${element.titulo}</span>
                    `
                    // Adiciona a descrição do texto
                    element.descricao.forEach(descricao => {
                        div.innerHTML += `
                            <div class="paragrafo">
                                <span class="descricao">${descricao}</span>
                            </div>
                        `
                    });

                    // Adiciona a referência do texto
                    div.innerHTML += `
                            <span class="referencia">${element.referencia}</span>
                    `
                }
                else {
                    // Adiciona o título do texto
                    div.innerHTML += `
                        <div id="texto">
                            <span class="numTXT">TEXTO ${i + 1}</span>
                    `
                    // Adiciona a descrição do texto
                    element.descricao.forEach(descricao => {
                        // Verifica se a descrição é um link para uma imagem
                        if(descricao.search(/https/) == 0) {
                            div.innerHTML += `
                                <div class="paragrafo">
                                    <img src="${descricao}">
                                </div>
                            `
                        } else {
                            div.innerHTML += `
                                <div class="paragrafo">
                                    <span class="descricao">${descricao}</span>
                                </div>
                            `
                        }
                    });
                    
                    // Adiciona a referência do texto
                    div.innerHTML += `
                    <span class="referencia">${element.referencia}</span>
                    </div>
                    `
                }
                // Adiciona o bloco de texto ao elemento 'textos'
                textos.appendChild(div)

                break;

            case 'img' :
                const divIMG = document.createElement('div')
                divIMG.classList.add('texto')

                // Adiciona o título, a imagem e a referência do texto
                divIMG.innerHTML += `
                    <span class="numTXT">TEXTO ${i + 1}</span>
                    <img src="${element.descricao}">
                    <span class="referencia">${element.referencia}</span>
                `
                // Adiciona o bloco de texto ao elemento 'textos'
                textos.appendChild(divIMG)

                // Sai do bloco de código associado ao caso anterior.
                break;
            
            case 'justificativas' :
                // Cria um novo elemento div no DOM.
                const divJUS = document.createElement('div')
                // Adiciona a classe 'texto' ao elemento div recém-criado.
                divJUS.classList.add('texto')
                // Agora 'divJUS' é uma referência ao elemento div com a classe 'texto'.

                // Adiciona o título e as frases de justificativa
                divJUS.innerHTML += `
                    <span class="tituloJus">${element.descricao.titulo}</span>
                    <span class="frase">${element.descricao.frases[0]}</span>
                    <span class="porque">PORQUE</span>
                    <span class="frase">${element.descricao.frases[1]}</span>
                `
                // Adiciona o bloco de texto ao elemento 'textos'
                textos.appendChild(divJUS)

                break;
            
            case 'afirmacoes' :
                const divAFIR = document.createElement('div')
                divAFIR.classList.add('texto')

                // Adiciona o título e as frases de afirmação
                divAFIR.innerHTML += `
                    <span class="tituloAfir">${element.descricao.titulo}</span>
                `
                element.descricao.frases.forEach((frase) => {
                    divAFIR.innerHTML += `
                        <span class="afirmativa">${frase}</span>
                    `                    
                });
                // Adiciona o bloco de texto ao elemento 'textos'
                textos.appendChild(divAFIR)

                break;
            
            default:
                // Se o tipo de texto não for reconhecido limpa a área de textos
                textos.textContent += ''
                break;

        }

        // Adiciona o bloco de textos ao corpo da pergunta
        corpoPergunta.appendChild(textos)
    });

    // Adiciona o enunciado da questão ao corpo da pergunta
    corpoPergunta.innerHTML += `
        <div id="enunciado">
            <span>${questao.enunciado}</span>
        </div>
    `

    // Cria o formulário de alternativas
    const alternativas = document.createElement('form')
    alternativas.classList.add('alternativas')

    // Obtém os dados do localStorage
    const dadosLocal = JSON.parse(localStorage.getItem('respostas'))
    let desativarRadioButton = ''
    let alternativaAssinalada

    // Verifica se já há uma resposta registrada para a questão atual no localStorage
    if(dadosLocal) {
        dadosLocal.respostas.forEach(element => {
            if(element.questao == numQuestao) {
                // Desativa os botões de rádio se já houver uma resposta registrada
                desativarRadioButton = 'disabled'
                alternativaAssinalada = element.alternativaAssinalada.letra

                // Oculta o botão de responder se já houver uma resposta registrada
                document.getElementById('responder').style.display = 'none'
            }
        });
    }

    // Itera sobre as alternativas da questão
    questao.alternativas.forEach((element, i) => {
        let checked = ''
        // Marca a alternativa que foi assinalada anteriormente
        if(element.letra == alternativaAssinalada)
            checked = 'checked'
        
        if(questao.textos.length > 0) {
            // Adiciona as alternativas de texto ao formulário
            alternativas.innerHTML += `
                <div>
                    <input type="radio" id="${element.letra}" name="alternativa" value="${element.letra}" class="alternativa" ${checked} ${desativarRadioButton}>
                    <label for="${element.letra}">${element.letra}) ${element.alternativa}</label>
                </div>
            `
        } else {
            // Adiciona as alternativas de imagem ao formulário
            alternativas.innerHTML += `
                <div>
                    <input type="radio" id="${element.letra}" name="alternativa" value="${element.letra}" class="alternativa" ${checked} ${desativarRadioButton}>
                    <label for="${element.letra}">
                        ${element.letra})
                        <img src="${element.alternativa}">
                    </label>
                </div>
            `
        }
    });

    // Adiciona o formulário de alternativas ao corpo da pergunta
    corpoPergunta.appendChild(alternativas)

    // Adiciona a fonte da prova ao corpo da pergunta
    corpoPergunta.innerHTML += `
        <span class="fonte-enade">Fonte: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos</span>
    `
    // Chama a função para navegar entre as páginas
    navPage()
        
}

// Chama a função para carregar as questões na página
loadQuestions() 
