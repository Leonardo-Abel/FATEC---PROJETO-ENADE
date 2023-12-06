// export: Utilizado para exportar a variável. Recurso necessário pois esta const será utilizada como base de dados para as perguntas da prova.
// const: A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Optei por esse tipo de variável pois os dados da prova não pode ser alterados.
// prova: Nome da variável que armazena um array de dados
export const prova = [ // array ('[]'): Os arrays são estruturas que servem para guardar dados, e organizá-los. Neste caso, cada item do array armazena dados sobre cada questão - dados estes estruturados em um json.
    { // json ('{}'): Acrônimo de JavaScript Object Notation, é uma forma de armazenar informações de maneira estruturada em formato de chaves, as quais funcionam como subvariávies que armazenam mais dados, podendo ser recuperados a partir de sua chave.
        questao: '01', // chave que armazena uma string (texto) que contém o número da questão.
        textos: [ // chave que armazena um array com os textos da questão (considerando que uma questão pode ter mais de um texto, optou-se por utilizar um array em que cada item é um texto).
            { // json que armazena os dados de cada texto
                tipo: 'txt', // chave que armazena uma string (texto) que intica qual o tipo de texto (podendo ser 'txt': texto; 'img': imagem e assim por diante...)
                descricao: // chave que armazena os itens que podem conter dentro de cada texto, podendo ser parágrafos, afirmações, proposições etc
                [
                    'A chance de uma criança de baixa renda ter um futuro melhor que a realidade em que nasceu está, em maior ou menor grau, relacionada à escolaridade e ao nível de renda de seus pais. Nos países ricos, o "elevador social" anda mais rápido. Nos emergentes, mais devagar. No Brasil, ainda mais lentamente. O país ocupa a segunda pior posição em um estudo sobre mobilidade social feito pela Organização para a Cooperação e Desenvolvimento Econômico (OCDE), em 2018, com dados de 30 países. Segundo os resultados, seriam necessárias nove gerações para que os descendentes de um brasileiro entre os 10% mais pobres ati ngissem o nível médio de rendimento do país. A esti mati va é a mesma para a África do Sul e só perde para a Colômbia, onde o período de ascensão levaria 11 gerações. Mais de 1/3 daqueles que nascem entre os 20% mais pobres no Brasil permanece na base da pirâmide, enquanto apenas 7% consegue chegar aos 20% mais ricos. Filhos de pais na base da pirâmide têm dificuldade de acesso à saúde e maior probabilidade de frequentar uma escola com ensino de baixa qualidade. A educação precária, em geral, limita as opções para esses jovens no mercado de trabalho. Sobram-lhes empregos de baixa remuneração, em que a possibilidade de crescimento salarial para quem tem pouca qualifi cação é pequena – e a chance de perpetuação do ciclo de pobreza, grande.'
                ],
                referencia: 'LEMOS, V. Brasil é o segundo pior em mobilidade social em ranking de 30 países. BBC news Brasil, 15 jun. 2018 (adaptado).', // chave que armazena uma string (texto) com os créditos do texto, imagem etc
            }
        ],
        enunciado: 'A partir das informações apresentadas, é correto afirmar que', // chave que armazena uma string (texto) com o enunciado da questão
        alternativas: [ // array que armazena as cinco alternativas
            { // json com informações sobre cada alternativa (sua letra e conteúdo)
                letra: 'A', // chave que armazena a letra da alternativa
                alternativa: 'o fator ambiental e o fator demográfico afetam a mobilidade social observada, sendo ela menor nos países que apresentam as maiores taxas de natalidade.' // chave que armazena o conteúdo da alterativa
            },
            {
                letra: 'B',
                alternativa: 'a baixa organização social dos economicamente menos favorecidos determina a baixa mobilidade social da base para o topo da pirâmide.'
            },
            {
                letra: 'C',
                alternativa: 'a mobilidade social é caracterizada por um fator ancestral que se revela ao longo das gerações, sendo um limitador da efi cácia de políti cas públicas de redução das desigualdades sociais.'
            },
            {
                letra: 'D',
                alternativa: 'a análise de mobilidade social permite a observação de um ciclo vicioso, que se caracteriza por uma subida nas camadas sociais seguida de uma queda, repeti ndo-se esse ciclo de modo sucessivo.'
            },
            {
                letra: 'E',
                alternativa: 'a ascensão social depende de fatores viabilizadores que estão fora do alcance das camadas pobres, o que ocasiona conflitos sociais em busca do acesso a tais fatores.'
            }
        ],
        resposta: { // chave que armazena os dados da resposta, sendo ela sua letra e o índice desta no array de alternativas
            letra: 'E',
            index: 4
        }
    },
    {
        questao: '02',
        textos: [
            {
                tipo: 'img',
                descricao: '../imgs/02.png',
                referencia: 'Disponível em: https://www.facebook.com/embrapa/photos/a.609357055926350/733391400189581/?type=1&theater. Acesso em: 27 maio 2020.',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'Em alguns países da Europa, permite-se que um produto de menor valor estéti co seja comercializado. Estamos falando de um pepino deformado ou de uma cebola pequena, mas não de um produto contaminado com resíduos químicos ou agentes biológicos. No caso do Brasil, o problema vai além da aparência, porque há hortaliças ruins – contaminadas, murchas, machucadas – que chegam às bancas para ser comercializadas.',
                    'Mas, se nos dois contextos há perda de alimentos e preconceito em relação às hortaliças fora do padrão visual, mas boas para o consumo, quais seriam as alternati vas para evitar o desperdício e melhorar a qualidade dos produtos? Para os pesquisadores do assunto, não adianta replicar a experiência europeia no Brasil, de exigir hortaliças esteti camente perfeitas, porque também teríamos produtos sendo desprezados ainda na etapa de produção. Não devemos passar de um mercado pouco exigente, que gera desperdício no varejo e nas residências, para um mercado exigente que gera perda no campo.',
                    'A solução do problema é conscienti zar os diversos elos da cadeia produti va, especialmente varejistas e consumidores, para que sejam esclarecidos sobre quais aspectos da aparência das hortaliças comprometem a qualidade. Quanto maior a exigência do mercado por hortaliças de aparência perfeita, maior o desperdício de alimentos. Por sua vez, quanto maior a exigência por hortaliças sem danos, causados pela falta de cuidado e pela falta de higiene, menor será a perda de alimentos e maior a qualidade da alimentação da população brasileira.'
                ],
                referencia: ' Disponível em: https://www.embrapa.br/busca-de-noticias/-/noticia/29626389/manuseio-correto-preserva-a-qualidade-e-a-vida-util-das-hortalicas. Acesso em: 27 maio 2020 (adaptado).',
            },
            {
                tipo: 'justificativas',
                descricao: 
                {
                    titulo: 'Considerando as informações apresentadas nos textos, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases:
                    [
                        'I. O texto I sintetiza uma informação principal do texto II, ao apresentar critérios distintivos de alterações visuais que têm efeitos puramente estéticos em produtos alimentícios daquelas que têm implicações na qualidade desses produtos.',
                        'II. O texto II divulga que o aumento das perdas na cadeia produti va de hortaliças no Brasil é proporcional à elevação de exigências dos consumidores pela aparência de produtos agropecuários.'
                    ]  
                }
            },
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.'
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.',
                alternativaCorrecao: `As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I. \n
                I. O texto I sintetiza uma informação principal do texto II, ao apresentar critérios distintivos de alterações visuais que têm efeitos puramente estéticos em produtos alimentícios daquelas que têm implicações na qualidade desses produtos.
                II. O texto II divulga que o aumento das perdas na cadeia produti va de hortaliças no Brasil é proporcional à elevação de exigências dos consumidores pela aparência de produtos agropecuários.` 
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '03',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Na Alemanha nazista, no auge da Segunda Guerra Mundial, surgiu a necessidade de abrir mais espaço para os veículos automoti vos. Com muitos ciclistas, as bicicletas viraram um empecilho, forçando a criação de um espaço exclusivo para elas – talvez as primeiras ciclovias do mundo. Mas, se na década de 1940 os veículos eram prioridade, hoje, o uso de bicicletas – e das ciclovias – surge como uma das principais alternati vas para melhorar a qualidade de vida nas grandes metrópoles. Quando políticas públicas incentivam o uso de bicicletas como meio de transporte para curtas e médias distâncias, um novo panorama se abre.',
                ],
                referencia: 'COSTA, J. Ciclovias ajudam a humanizar o espaço urbano. Ciência e Cultura. v. 68, n. 2, São Paulo, 2016 (adaptado);.',
            },
            {
                tipo: 'img',
                descricao: '../imgs/03.JPG',
                referencia: 'Disponível em: http://dopedal.blogspot.com/2012/05/charge-do-silverio-voz-da-serra.html. Acesso em: 29 de abr. 2020.',
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: 'Considerando as informações apresentadas e o uso de bicicletas como alternativa para melhorar a qualidade de vida nas cidades, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. Dado que as bicicletas são veículos que ocupam pouco espaço na malha viária, prescinde-se de investimentos públicos em construção de ciclovias, sendo prioritárias campanhas de conscientização de motoristas a respeito dos benefí cios do uso da bicicleta como meio de transporte.',
                        'II. O uso das bicicletas como meio de transporte contribui para a melhoria da qualidade de vida nas grandes metrópoles, pois elas não emitem poluentes, além de esse uso proporcionar a prática de atividade física.',
                        'III. A partir da Segunda Guerra Mundial, durante o governo da Alemanha nazista, o uso da bicicleta como meio de transporte tornou-se eficaz e passou a prevalecer nas cidades europeias.'
                    ]  
                }
            },
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, apenas.'
            },
            {
                letra: 'B',
                alternativa: 'II, apenas.',
                alternativaCorrecao: `II, apenas. \n
                II. O uso das bicicletas como meio de transporte contribui para a melhoria da qualidade de vida nas grandes metrópoles, pois elas não emitem poluentes, além de esse uso proporcionar a prática de atividade física.`
            },
            {
                letra: 'C',
                alternativa: 'I e III, apenas.'
            },
            {
                letra: 'D',
                alternativa: 'II e III, apenas.'
            },
            {
                letra: 'E',
                alternativa: 'I, II e III.'
            }
        ],
        resposta: {
            letra: 'B',
            index: 1
        }
    },
    {
        questao: '04',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Além do contexto econômico, o avanço da tecnologia também é um dos responsáveis pelo aumento dos trabalhadores informais. E a tendência de contratação de freelancers por meio de plataformas digitais, como aplicativos de delivery e de mobilidade urbana, ganhou até um nome: Gig Economy, ou economia dos bicos. Para os gigantes de tecnologia detentores desses aplicativos, os motoristas são trabalhadores autônomos, que não possuem vínculo empregatício. Além de não estarem sujeitos a nenhuma regulamentação e proteção legal, os profissionais que desenvolvem esse ti po de trabalho deixam de contribuir para a Previdência Social e de possuir benefícios como Fundo de Garantia por Tempo de Serviço (FGTS), férias e décimo terceiro salário. Não obstante, ainda arcam com todo o custo da atividade que exercem. Em uma reportagem que ouviu alguns desses trabalhadores, motoristas afirmaram sofrer com problemas de coluna e com o estresse no trânsito, além das longas jornadas de trabalho. Por esses motivos, a Gig Economy está no centro de uma discussão mundial acerca da responsabilidade dessas companhias milionárias sobre as condições de trabalho da mão de obra que contratam. No meio do limbo jurídico, quem sofre são os trabalhadores dessas plataformas, que ficam duplamente desprotegidos ― pelas empresas e pelo Estado.'
                ],
                referencia: 'Disponível em: https://exame.abril.com.br/carreira/quais-sao-as-consequencia-do-trabalho-informal-no-pais/. Acesso em: 18 abr. 2020 (adaptado).',
            },
            {
                tipo: 'justificativas',
                descricao: 
                {
                    titulo: 'A partir das informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases:
                    [
                        'I. Trabalhadores autônomos informais que atuam em plataformas digitais sem qualquer vínculo empregatício, desprotegidos de regulamentação ou lei trabalhista, compõem a Gig Economy.',
                        'II. Os trabalhadores, na Gig Economy, arcam com todos os custos necessários para desempenhar o seu trabalho, ganham por produção e enfrentam longas jornadas diárias, o que os deixa mais desgastados e com problemas de saúde.'
                    ]  
                }
            },
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.'
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.',
                alternativaCorrecao: `As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I. \n
                I. Trabalhadores autônomos informais que atuam em plataformas digitais sem qualquer vínculo empregatício, desprotegidos de regulamentação ou lei trabalhista, compõem a Gig Economy.
                II. Os trabalhadores, na Gig Economy, arcam com todos os custos necessários para desempenhar o seu trabalho, ganham por produção e enfrentam longas jornadas diárias, o que os deixa mais desgastados e com problemas de saúde.`
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.'
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            }
        ],
        resposta: {
            letra: 'B',
            index: 1
        }
    },
    {
        questao: '05',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Segundo o Ministério da Saúde, em 2017 o Brasil registrou uma média nacional de 5,7 óbitos para 100 mil habitantes. Na população indígena, foi registrado um número de óbitos três vezes maior que a média nacional – 15,2. Destes registros, 44,8% (aproximadamente, 6,8 óbitos), são suicídios de crianças e adolescentes entre 10 e 19 anos. Esses dados contrastam com o panorama nacional, em que o maior índice é entre adolescentes e adultos de 15 a 20 anos.'
                ],
                referencia: 'Disponível em: https://www.cvv.org.br/blog/o-suicidio-do-povo-indigena/. Acesso em: 30 de abr. 2020 (adaptado).',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'Evidências apontam que, em determinadas minorias étnico-raciais, como os indígenas (aborígines ou populações nativas), o suicídio entre crianças apresenta taxas bem mais elevadas do que as observadas na população geral. No Brasil, o enforcamento foi utilizado mais frequentemente entre indígenas do que entre não indígenas, não se observando, no primeiro grupo, suicídios por intoxicação ou por armas de fogo. O mapa a seguir apresenta a distribuição dos óbitos por suicídio entre crianças e adolescentes indígenas no Brasil, entre os anos de 2010 e 2014.',
                    'https://blogger.googleusercontent.com/img/a/AVvXsEimR6_mqHj92lY51AwusbYas582K5Y7elyTCQsuDKtA8nODawERK7KO-GYwBLLZXiF9ZRnn2SLgRL6wLWX5AtMX_sMPJ2gzMpyDsEJbdxNECGUeUCB37bjfwfiqWxEgYlDzP-X-W-wIIt-lSPlHdXLRmcf7usw1GSnXIQsGzJ9j-LKyKpybWyTJABmD=w640-h549'
                ],
                referencia: 'SOUZA, M. Mortalidade por suicídio entre crianças indígenas no Brasil. Caderno de saúde Pública, v.35, Rio de Janeiro, 2019 (adaptado).                ',
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: 'Considerando as informações apresentadas e o alto índice de suicídio da população indígena, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. O elevado índice de suicídios entre crianças e adolescentes indígenas no país evidencia a necessidade de ações com foco nos direitos fundamentais desses indivíduos.',
                        'II. Os estados do Pará e de Tocanti ns são os que possuem os maiores índices de suicídio de indígenas na faixa etária de 10 a 14 anos.',
                        'III. Os povos das tribos originárias do Brasil, no que tange a sua história e preservação cultural, não estão amparados por direitos e garantias constitucionais.',
                        'IV. O estabelecimento de ações preventivas ao suicídio nas comunidades indígenas deve considerar os elementos globais que afetam a população em geral, na faixa etária entre 15 e 20 anos.'
                    ]  
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I.',
                alternativaCorrecao: `I. \n
                I. O elevado índice de suicídios entre crianças e adolescentes indígenas no país evidencia a necessidade de ações com foco nos direitos fundamentais desses indivíduos.`
            },
            {
                letra: 'B',
                alternativa: 'II.'
            },
            {
                letra: 'C',
                alternativa: 'I e III.'
            },
            {
                letra: 'D',
                alternativa: 'II e IV.'
            },
            {
                letra: 'E',
                alternativa: 'III e IV.'
            }
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '06',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'A pandemia ocasionada pelo novo Coronavírus gerou impactos negativos na economia e nos negócios, intensificando problemas sociais no mundo todo. Nos Estados Unidos, um estudo realizado com a parceria de duas importantes universidades verificou que a expectativa de vida dos norte-americanos caiu 1,1 ano em 2020. A nova expectati va é de 77,4 anos. De acordo com o estudo, esta foi a maior queda anual da expectativa de vida já registrada nos últimos 40 anos. O declínio é ainda maior se considerada a expectativa de vida para negros que moram no país, cuja queda foi de 2,1 anos. Para a população latina, essa queda foi de 3 anos. O declínio na expectati va de vida dos latinos é significativo, uma vez que eles apresentam menor incidência de condições crônicas que são fatores de risco para a Covid-19 em relação às populações de brancos e negros.'
                ],
                referencia: 'LOUREIRO, R. Covid-19 reduz gravemente expectativa de vida de negros e latinos nos EUA. Revista Exame, 2021 (adaptado).',
            },
            {
                tipo: 'justificativas',
                descricao: 
                {
                    titulo: 'Considerando as informações apresentadas no texto, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases:
                    [
                        'I. O efeito desproporcional da pandemia da Covid-19 na expectativa de vida da população negra e latino-americana estabelece relação com sua situação de vulnerabilidade social.',
                        'II. Uma hipótese que pode ser levantada quanto à diminuição da expectativa de vida de negros e latino-americanos está relacionada às suas precárias condições de trabalho, levando-os a maior possibilidade de exposição ao contágio pelo novo Coronavírus.'
                    ]  
                }
            },
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
                alternativaCorrecao: `As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I. \n
                I. O efeito desproporcional da pandemia da Covid-19 na expectativa de vida da população negra e latino-americana estabelece relação com sua situação de vulnerabilidade social.
                II. Uma hipótese que pode ser levantada quanto à diminuição da expectativa de vida de negros e latino-americanos está relacionada às suas precárias condições de trabalho, levando-os a maior possibilidade de exposição ao contágio pelo novo Coronavírus.`
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.'
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            }
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '07',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'O estudo Internet and American Life Project, do Pew Research Center, demonstrou que, em 2009, metade das buscas de temas relacionados à saúde na internet era feita para terceiros, e quase seis em cada dez pessoas que usaram meios digitais para se informar sobre saúde mudaram o enfoque com que cuidavam da própria saúde ou da de algum parente. Estima-se que exista uma correlação positiva entre o grau de conhecimento das doenças (seus fatores de risco, formas de prevenção e tratamento) e a taxa de adoção de hábitos saudáveis pela sociedade. O aumento nos diagnósticos precoces do câncer de mama e a diminuição do tabagismo são dois exemplos clássicos a favor dessa ideia. Acredita-se que indivíduos mais bem informados aderem a comportamentos preventivos e reagem melhor a uma enfermidade.',
                    'Infelizmente, a divulgação de temas médicos é uma faca de dois gumes: quem não sabe nada está mais perto da verdade do que a pessoa cuja mente está cheia de informações equivocadas. Conseguir que a mensagem seja bem decodificada pelos receptores é o grande desafio que preocupa (ou deveria preocupar) tanto médicos quanto jornalistas.'
                ],
                referencia: 'TABAKMAN, R. a saúde na mídia: medicina para jornalistas, jornalismo para médicos. Trad. Lizandra Magon de Almeida. São Paulo: Summus Editorial, 2013 (adaptado).',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'De acordo com os dados da última TIC Domicílios — pesquisa realizada anualmente com o objetivo de mapear formas de uso das tecnologias de informação e comunicação no país —, aproximadamente 46% dos usuários de Internet no Brasil utilizam a rede à procura de informações médicas sobre saúde em geral e serviços de saúde. Para uma médica e pesquisadora da Fiocruz, os indivíduos sempre procuraram informações sobre seu estado de saúde, mas é inegável que o surgimento da Internet trouxe um aumento signifi cati vo do acesso a informações amplificando assim os reflexos deste processo e alterando a relação entre os indivíduos. A pesquisadora chama a atenção para o perigo do autodiagnóstico e da automedicação, que podem gerar consequências nefastas tanto para os indivíduos quanto para a saúde pública, uma vez que boa parte dos estudos mostra que não são adotados critérios durante as buscas na Internet.'
                ],
                referencia: 'Disponível em: https://agencia.fiocruz.br/conteudos-sobre-saude-na-web-alteram-relacao-medico-paciente. Acesso em: 16 abr. 2020 (adaptado).'
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: ' Considerando a abordagem dos textos, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. Os textos I e II evidenciam a importância de critérios nas buscas realizadas pelos usuários da Internet por informações sobre patologias, pois algumas informações podem trazer riscos à saúde por fomentarem a compreensão equivocada de sintomas e profilaxias.',
                        'II. O texto I afirma que a disponibilização de informações sobre temas de saúde nos meios de comunicação tem contribuído para o esclarecimento da população acerca de hábitos saudáveis.',
                        'III. No texto II, defende-se o acesso a informações relativas a pesquisas da área da saúde nos veículos de comunicação, pois elas permitem que o indivíduo seja proativo na prevenção de patologias.'
                    ]  
                }
            },
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, apenas.'
            },
            {
                letra: 'B',
                alternativa: 'III, apenas.'
            },
            {
                letra: 'C',
                alternativa: 'I e II, apenas.',
                alternativaCorrecao: `I e II, apenas. \n
                I. Os textos I e II evidenciam a importância de critérios nas buscas realizadas pelos usuários da Internet por informações sobre patologias, pois algumas informações podem trazer riscos à saúde por fomentarem a compreensão equivocada de sintomas e profilaxias.
                II. O texto I afirma que a disponibilização de informações sobre temas de saúde nos meios de comunicação tem contribuído para o esclarecimento da população acerca de hábitos saudáveis.`
            },
            {
                letra: 'D',
                alternativa: 'II e III, apenas.'
            },
            {
                letra: 'E',
                alternativa: 'I, II e III.'
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '08',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Que é democracia? Em seu famoso discurso em Gettysburg, Abraham Lincoln disse que “a democracia é o governo do povo, feito para o povo e pelo povo, e responsável perante o povo”. O crédito desta definição é, na verdade, de Daniel Webster, que a elaborou 33 anos antes de Lincoln em outro discurso. Nesta ideia de “governo pelo povo e para o povo” surge uma questão essencial: e quando o povo esti ver em desacordo? E quando o povo tiver preferências divergentes? O politólogo Arend Lijphart ressalta que há duas respostas principais: a resposta da “democracia majoritária” e a resposta da “democracia consensual”. Na democracia majoritária, a resposta é simples e direta: deve-se governar para a maioria do povo. A resposta alternati va, no modelo da democracia consensual é: deve-se governar para o máximo possível de pessoas.',
                    'A virtude da democracia consensual é buscar consensos mais amplos no que é interesse de todos; o desafio da democracia consensual pressupõe lideranças políticas mais maduras, tanto no governo quanto na oposição. Democratas genuínos têm aversão à ideia do totalitarismo e combatem os delírios daqueles que desejam poder sem limites.'
                ],
                referencia: 'Disponível em: https://g1.globo.com/politica/blog/matheus-leitao/post/2020/02/25/democracia-consensual-contra-a-tirania-da-maioria.ghtml. Acesso em: 2 maio 2020 (adaptado).',
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: ' A partir dos argumentos expostos no texto, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. O bem comum, a ser estabelecido por um governo democrático, nem sempre está associado às opiniões da maioria do povo.',
                        'II. A democracia consensual é caracterizada pelo consenso a ser alcançado entre situação e oposição, nas decisões governamentais.',
                        'III. Circunstâncias políticas de polarização, marcadas pela alta competitividade e combatividade entre posições divergentes, caracterizam um modelo de democracia majoritária.',
                        'IV. Democracia consensual pressupõe que a situação política no poder considere em suas decisões as necessidades das minorias, no sentido de governar para todo o povo.'
                    ]  
                }
            },
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e II.'
            },
            {
                letra: 'B',
                alternativa: 'I e IV.'
            },
            {
                letra: 'C',
                alternativa: 'II e III.'
            },
            {
                letra: 'D',
                alternativa: 'I, III e IV.',
                alternativaCorrecao: `I, III e IV. \n
                I. O bem comum, a ser estabelecido por um governo democrático, nem sempre está associado às opiniões da maioria do povo.
                III. Circunstâncias políticas de polarização, marcadas pela alta competitividade e combatividade entre posições divergentes, caracterizam um modelo de democracia majoritária.
                IV. Democracia consensual pressupõe que a situação política no poder considere em suas decisões as necessidades das minorias, no sentido de governar para todo o povo.`
            },
            {
                letra: 'E',
                alternativa: 'II, III e IV.'
            }
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '09',
        textos: [
            {
                tipo: 'img',
                descricao: '../imgs/09.JPG',
                referencia: 'JOHNST, L. It don’t mean a thing song/Cool Stuff/FborFW Strip Fix. 2006. Available at: https://www.FBorFW.com. Access on: 27 may 2020.',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'What\'s the controversy?',
                    `• In Dennis E. Baron's "Grammar and Good Taste: Reforming the American Language," he describes the opinions of Henry Alford, who was dean of Canterbury and editor of the Greek New Testament. Apparently, "Alford opposes 'ain't,' even though it is often used by educated persons, partly because it is proscribed... and also because it is ill-formed. As a contraction, it bears no resemblance to 'am not' or 'are not', and therefore he claims it may not be used legitimately to replace these phrases".`,
                    `• In William and Mary Morris' Harper Dictionary of Contemporary Usage, a panel of consultants was asked "Would you accept 'I ain't the least bit interested'?" In writing, 96% said no, but in speech 40.7% said yes. "It should be noted that several of the respondents who approved the use of 'ain't' in writing indicated that they were referring to its use in fictional dialogue to establish character".`
                ],
                referencia: 'JOHNSON, A. Say it ain’t so: an analysis of the etymology and the colloquial usage of ain’t. 2018. Available at: https://openriver.winona.edu/cgi/viewcontent.cgi?article=1001&context=urc2018. Access on: 27 may 2020 (adapted).',
            },
            {
                tipo: 'justificativas',
                descricao: 
                {
                    titulo: 'Considerando a tirinha e o excerto do pôster acadêmico, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases:
                    [
                        'I. A tirinha de “For better or for worse” pode ser utilizada didaticamente para uma atividade de leitura, explorando a utilização do termo “ain’t” no contexto oral e coloquial.',
                        'II. É importante que os estudantes compreendam que a etimologia de um termo leva os usuários proficientes da língua inglesa, com alto nível de educação formal, a utilizá-lo em um contexto oral, mas não em um contexto escrito.'
                    ]  
                }
            },
        ],
        enunciado: 'A respeito das asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.'
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.',
                alternativaCorrecao: `A asserção I é uma proposição verdadeira, e a II é uma proposição falsa. \n
                I. A tirinha de “For better or for worse” pode ser utilizada didaticamente para uma atividade de leitura, explorando a utilização do termo “ain’t” no contexto oral e coloquial.
                II. É importante que os estudantes compreendam que a etimologia de um termo leva os usuários proficientes da língua inglesa, com alto nível de educação formal, a utilizá-lo em um contexto oral, mas não em um contexto escrito.`
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '10',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Women writers. And female characters had been part of novel-writing since the time of Aphra Behn and Delarivier Manley, and it is a commonplace that women were the main readers of the genre in the eighteenth century. After Sir Walter Scott made the novel popular worldwide, it was for two decades, seen largely as a man’s genre. Women writers were expected to write the kinds of novel which George Eliot was to condemn in an essay as Silly Novels by Lady Novelists – the sub-genres of romance, fantasy and sensation. But several of the major figures of the Victorian novel are women; and the heroines they created began to throw off the victims role that male authors had created, from Moll Fladers, Pamela, and Clarissa onwards. Jane Eyre’s “Reader, I married him” close to the end of Charlotte Brontë’s novel (1847) that bears the character’s name, shows the reversal of the roles and the decision-making capacities that the new generation of socially aware women could demonstrate. (…) The Brontë sisters, Charlotte, Emily, and Anne Brontë, not only contributed much to the growth of the novel, but also to the position of women at this time. They did much to alter the way in which women were viewed, demonstrating new social, psychological, and emotional possibilities for women.'
                ],
                referencia: 'McRAE, J.; CARTER, R. The Routledge History of Literature in English. London, Routledge, 2001, p. 267 (adapted).',
            }
        ],
        enunciado: 'Com base nas informações apresentadas, o texto possui uma característica importante da literatura Vitoriana que é marcada pelo(a)',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'escrita de mulheres que confere às personagens femininas protagonismo social.'
            },
            {
                letra: 'B',
                alternativa: 'emprego da fantasia nos textos escritos por mulheres para a popularização do gênero.'
            },
            {
                letra: 'C',
                alternativa: 'presença de personagens populares nos romances oitocentistas escritos por mulheres.'
            },
            {
                letra: 'D',
                alternativa: 'vitimização das mulheres nos romances escritos por autores homens durante o século XIX.'
            },
            {
                letra: 'E',
                alternativa: 'carga alta de emoção presente nos livros produzidos por escritoras daquele período literário.'
            }
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '11',
        textos: [
            {
                tipo: 'txt',
                titulo: 'Homework I love you',
                descricao:
                [
                    "Homework, I love you. I think that you’re great. It’s wonderful fun when you keep me up late. I think you’re the best when I’m totally stressed, preparing and cramming all night for a test. Homework, I love you. What more can I say? I love to do hundreds of problems each day. You boggle my mind and you make me go blind, but still I’m ecstatic that you were assigned. Homework, I love you. I tell you, it’s true. There’s nothing more fun or exciting to do. You’re never a chore, for it’s you I adore. I wish that our teacher would hand you out more. Homework, I love you. You thrill me inside. I’m filled with emotions. I’m fit to be tied. I cannot complain when you frazzle my brain. Of course, that’s because I’m completely insane." 
                ],
                referencia: 'NESBITT, K. Homework I love you. Available athttps://www.poetry4kids.com/poems/homework-i-love-you/. Access on: 29 may 2020.',
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: 'Taking the poem into account and assuming the narrator is a student, consider the following statements.',
                    frases :
                    [
                        'I. The choice of plain language ensures that readers can easily understand the poem the first time they read it.',
                        'II. The tone of the poem is nostalgic since it describes some of the student’s memories of how things used to be at school.',
                        'III. The use of juxtaposition emphasizes the student’s view of homework as being enjoyable as well as burdensome.',
                        'IV. The last verse of the poem is quite revealing since it explains why the student has such feelings towards homework.'
                    ]  
                }
            },
        ],
        enunciado: 'It is only correct what is stated in',
        alternativas: [
            {
                letra: "A",
                alternativa: "I and II."
            },
            {
                letra: "B",
                alternativa: "II and IV."
            },
            {
                letra: "C",
                alternativa: "III and IV.",
                alternativaCorrecao: `III and IV. \n
                III. The use of juxtaposition emphasizes the student’s view of homework as being enjoyable as well as burdensome.
                IV. The last verse of the poem is quite revealing since it explains why the student has such feelings towards homework.`
            },
            {
                letra: "D",
                alternativa: "I, II and III."
            },
            {
                letra: "E",
                alternativa: "I, III and IV."
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '12',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'It is time now to return to the “literature” in “comparative literature” and to examine its position, which we believe vital, in the new digital context, which has become the context of all cultural production today. The fact that any form of production whatsoever is now impacted and transformed by the digital turn in culture, however, does not imply that literature and the book have become residual domains of culture, whose dominant and emergent forms (to follow here the terminology coined by Raymond Williams 1977) would then be digital and multimedia.',
                    'One may have the impression that literature is now evolving towards new forms of transmedia storytelling. True, this is a decisive turn or shift in contemporary writing. However, it would be dangerous to conclude that this evolution is linear or teleological. In this case, there is no reason at all to think that the literature of tomorrow will become transmedia storytelling, with only a marginal place left for what used to be considered literature and its traditional mediations. Even Henry Jenkins made it clear from the beginning that “not all stories will flow across media”, right after pointing to Hollywood´s pitches as the referential scenario against which transmedial storytelling’s focus on characters and worlds must be understood.'
                ],
                referencia: 'BAETENS, J.; SÁNCHEZ-MESA, D. Comparative Literature in the Age of Convergence Culture. Interfaces. 36, 2015 (adapted).',
            }
        ],
        enunciado: 'O texto apresentado faz uma reflexão sobre o lugar da literatura nos dias atuais, apontando para a',
        alternativas: [
            {
                letra: "A",
                alternativa: "necessidade de comparação entre repositórios literários diferentes."
            },
            {
                letra: "B",
                alternativa: "adaptação das narrativas literárias para plataformas digitais e multimídias."
            },
            {
                letra: "C",
                alternativa: "emergência de novas formas de narrativas no novo contexto transmidiático."
            },
            {
                letra: "D",
                alternativa: "complexidade da posição da literatura na relação entre os meios tradicionais e digitais."
            },
            {
                letra: "E",
                alternativa: "mudança na produção de textos literários diante dos desafios contemporâneos."
            }
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '13',
        textos: [],
        enunciado: 'A high school teacher decided to search the internet for authentic materials which could be taken into his/her classes and help develop his/her learners’ pragmatic competence as well as get them to discuss issues related to politics.</br>Which of the materials below can he/she use to achieve the intended goal?',
        alternativas: [
            {
                letra: "A",
                alternativa: "../imgs/alt-A.JPG"
            },
            {
                letra: "B",
                alternativa: "../imgs/alt-B.JPG"
            },
            {
                letra: "C",
                alternativa: "../imgs/alt-C.JPG"
            },
            {
                letra: "D",
                alternativa: "../imgs/alt-D.JPG"
            },
            {
                letra: "E",
                alternativa: "../imgs/alt-E.JPG"
            }
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '14',
        textos: [
            {
                tipo: 'img',
                descricao: '../imgs/14-1.JPG',
                referencia: 'Available at: https://www.cartoonstock.com/cartoonview.asp?catref=aban2104. Access on: 22 June 2020.',
            },
            {
                tipo: 'img',
                descricao: '../imgs/14-2.JPG',
                referencia: 'Available at: https://www.cartoonstock.com/cartoonview.asp?catref=aban1774. Access on: 22 June 2020.',
            },
        ],
        enunciado: 'Considering the cartoons, choose the statement which depicts their common theme.',
        alternativas: [
            {
                letra: "A",
                alternativa: "The widespread adoption of digital technology in schools has had a transformative effect on education."
            },
            {
                letra: "B",
                alternativa: "The technology allows teachers to personalize lessons, democratize the classroom and better engage students."
            },
            {
                letra: "C",
                alternativa: "The uses of technology in the classroom shift the experience of the ‘sage-on-a-stage’ approach to a more collaborative learning environment."
            },
            {
                letra: "D",
                alternativa: "The school systems are often willing to adopt and keep pace with the latest digital technologies and the new possibilities they present."
            },
            {
                letra: "E",
                alternativa: "The 21st century learners are more tech savvy than ever before and perceive technology available to them at school as outdated."
            }
        ],
        resposta: {
            letra: 'E',
            index: 4
        }
    },
    {
        questao: '15',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Sometimes in big Hollywood movies they’ll have these crazy chase scenes where somebody jumps or gets thrown from a moving car. (…) Whenever I see that I think, “That’s rubbish. Getting thrown out a moving car hurts way worse than that”. I was nine years old when my mother threw me out of a moving car. It happened on a Sunday. I know it was on a Sunday because we were coming home from church, and every Sunday in my childhood meant church. We never missed church. My mother was – and still is – a deeply religious woman. Like indigenous people around the world, black South African adopted the religion of our colonizers. By “adopt” I mean it was forced on us. This particular Sunday, the Sunday I was hurled from a moving car, started like any other Sunday. My mother woke me up, made me porridge for breakfast (…) but when we were finally all strapped in and ready to go, the car wouldn’t start. My mom had this ancient, broken-down, bright-tangerine Volkswagen Beetle she picked up for next to nothing.',
                    'That carless Sunday we made our circuit of churches (…) When we walked out the Rosebank Union it was dark and we were alone. (…) In those days, with violence and riots going on, you did not want to be out that late at night. We waited and waited for a minibus to come by. Under apartheid the government provided no public transportation for blacks. Necessity being the mother of invention, black people created their own transit system, an informal network of bus routes. (…) Being unregulated, minibuses were unreliable. When they came, they came. When they didn’t, they didn’t. Not a minibus at a sight. We walked and walked, and after what felt like an eternity, a car drove up and stopped. We were the only passengers in the minibus. This driver was a particular angry one. As we rode along he started lecturing my mother about being in a car with a man who was not her husband. He sped off. He was driving fast and he wasn’t stopping. When we came to the next traffic light (…) my mother reached over, pulled the sliding door open, grabbed me and threw me out as far as she could. (…) Back and forth we went. I was too confused and too angry about getting thrown out of the car to realize what had happened. My mother saved my life.'
                ],
                referencia: 'NOAH, T. Born a Crime. New York, Spiegel & Grau, 2016 (adapted).',
            }
        ],
        enunciado: 'A metáfora da dor sentida na queda de um carro em movimento, empregada pelo narrador do texto ao rememorar um incidente de sua infância, aponta para',
        alternativas: [
            {
                letra: "A",
                alternativa: "o tratamento preconceituoso para com a mulher sul-africana."
            },
            {
                letra: "B",
                alternativa: "a adequação das pessoas vítimas de preconceitos ao sistema opressor"
            },
            {
                letra: "C",
                alternativa: "a violência de vários tipos vivida pelo negro sul-africano durante o apartheid."
            },
            {
                letra: "D",
                alternativa: "o comportamento religioso de alguns grupos sociais sul-africanos após a colonização."
            },
            {
                letra: "E",
                alternativa: "a escassez de transporte público para as pessoas carentes da sociedade sul-africana."
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '16',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    `This is America </br>
                    Donʹt catch you slippinʹ up </br>
                    Look at how Iʹm livinʹ now </br>
                    Police be trippinʹ now </br>
                    Yeah, this is America </br>
                    Guns in my area (word, my area) </br>
                    I got the strap* </br>
                    I gotta carry ʹem`,
                    `Yeah, yeah, Iʹma go into this </br>
                    Yeah, yeah, this is guerilla, woo </br>
                    Yeah, yeah, Iʹma go get the bag </br>
                    Yeah, yeah, or Iʹma get the pad** </br>
                    Yeah, yeah, Iʹm so cold like, yeah (yeah) </br>
                    Iʹm so dope like, yeah </br>
                    We gonʹ blow like, yeah (straight up, uh)`,
                    `*strap is slang for gun </br>
                    **pad is slang for house`
                ],
                referencia: 'Gambino, C., Goransson, L. Available at: https://www.letras.mus.br/childish-gambino/this-is-america/. Access on: 20 may 2020 (adapted).',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'My little sister Nettie is got a boyfriend in the same shape almost as Pa. His wife died. She was kilt by her boyfriend coming home from church. He got only three children though. He seen Nettie in church and now every Sunday evening here come Mr. _____. I tell Nettie to keep at her books. It be more then a notion taking care of children ain’t even yourn. And look what happen to Ma.'
                ],
                referencia: 'WALKER, A. The color purple. New York: Harcourt, 2003 (adapted).',
            },
            {
                tipo: 'afirmacoes',
                descricao: 
                {
                    titulo: 
                        `O texto I é um trecho da canção “This is America” do artista Donald Glover, lançada em 2018 e que discute a situação da população negra nos Estados Unidos. O texto II é um excerto do romance epistolar “The color purple”, de 1982, da escritora norte-americana Alice Walker, no qual a protagonista, uma jovem negra, conta sua história de abusos, sofrimentos e descobertas por meio de cartas endereçadas a Deus. </br>
                        Considerando as possibilidades de abordagem didática de ambos os textos em uma aula de Língua Inglesa, avalie as afirmações a seguir.`,
                    frases :
                    [
                        'I. Os textos permitem discutir como questões sociais, econômicas e raciais influenciam na forma como os indivíduos se apropriam e utilizam a língua.',
                        'II. Os textos proporcionam refletir sobre como segmentos específicos da sociedade podem utilizar a língua como instrumento de denúncia social.',
                        'III. Os textos possibilitam debater as diferenças entre a norma culta da língua e o uso coloquial que se faz dela em diferentes situações e intenções comunicativas.'
                    ]  
                }
            }
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: "A",
                alternativa: "I, apenas."
            },
            {
                letra: "B",
                alternativa: "III, apenas."
            },
            {
                letra: "C",
                alternativa: "I e II, apenas."
            },
            {
                letra: "D",
                alternativa: "II e III, apenas."
            },
            {
                letra: "E",
                alternativa: "I, II e III.",
                alternativaCorrecao: `I, II e III. \n
                I. Os textos permitem discutir como questões sociais, econômicas e raciais influenciam na forma como os indivíduos se apropriam e utilizam a língua.
                II. Os textos proporcionam refletir sobre como segmentos específicos da sociedade podem utilizar a língua como instrumento de denúncia social.
                III. Os textos possibilitam debater as diferenças entre a norma culta da língua e o uso coloquial que se faz dela em diferentes situações e intenções comunicativas.`

            }
        ],
        resposta: {
            letra: 'E',
            index: 4
        }
    },
    {
        questao: '17',
        textos: [
            {
                tipo: 'txt',
                titulo: "to do list (after the break up)",
                descricao:
                [
                    `1. take refuge in your bed. </br>
                    2. cry. till the tears stop (this will take a few days). </br>
                    3. don’t listen to slow songs. </br>
                    4. delete their number from your phone even though it is memorized on your fingertips. </br>
                    5. don’t look at old photos. </br>
                    6. find the closest ice cream shop and treat yourself to two scoops of mint chocolate chip. The mint will calm your heart. you deserve the chocolate. </br>
                    7. buy new bed sheets. </br>
                    8. collect all the gifts, t-shirts, and everything with their smell on it and drop it off at a donation center. </br>
                    9. plan a trip. </br>
                    10. perfect the art of smiling and nodding when someone brings their name up in conversation. </br>
                    11. start a new project. </br>
                    12. whatever you do. do not call. </br>
                    13. do not beg for what does not want to stay. </br>
                    14. stop crying at some point. </br>
                    15. allow yourself to feel foolish for believing you could’ve built the rest of your life in someone else’s stomach. </br>
                    16. breathe. </br>`
                ],
                referencia: 'KAUR, R. The sun and her flowers. London: Simon & Schuster, 2017 (adapted).',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'Part of what we mean by a ‘literary’ work is one in which whatis said is to be taken in terms of how it is said. It is the kind of writing in which the content is inseparable from the language in which it is presented. Language is constitutive of the reality or experience, rather than simply a vehicle for it.'
                ],
                referencia: 'EAGLETON, T. How to read literature. New Haven: Yale University Press, 2013 (adapted).',
            },
            {
                tipo: 'justificativas',
                descricao: 
                {
                    titulo: 'A partir da leitura dos textos I e II, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases:
                    [
                        'I. No que concerne à criatividade na maneira como se apresenta a mensagem, para além de sua temática, como mencionado por Eagleton, é possível afirmar que o poema atende ao que se considera um trabalho literário.',
                        'II. Rupi Kaur faz um uso inovador da linguagem ao utilizar uma forma fixa do gênero lírico para produzir uma “to do list”, que aborda uma temática sensível e comum ao público.'
                    ]  
                }
            },
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: "A",
                alternativa: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
            },
            {
                letra: "B",
                alternativa: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
            },
            {
                letra: "C",
                alternativa: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
                alternativaCorrecao: `A asserção I é uma proposição verdadeira, e a II é uma proposição falsa. \n
                I. No que concerne à criatividade na maneira como se apresenta a mensagem, para além de sua temática, como mencionado por Eagleton, é possível afirmar que o poema atende ao que se considera um trabalho literário.
                II. Rupi Kaur faz um uso inovador da linguagem ao utilizar uma forma fixa do gênero lírico para produzir uma “to do list”, que aborda uma temática sensível e comum ao público.`
            },
            {
                letra: "D",
                alternativa: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
            },
            {
                letra: "E",
                alternativa: "As asserções I e II são proposições falsas."
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '18',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'At the age of forty, Joaquim Maria Machado de Assis invented a narrative device that transformed him from a provincial, rather conventional writer into a world-class novelist. This leap is usually explained biographically, and psychologically. Critics like to say that Machado, who nearly went blind, lost his illusions and passed from romanticism to realism — and so on. Explanations of this sort, however, are beside the point, since anyone can contract an illness, shed illusions or accept a new literary doctrine without becoming a great writer. But if we consider the change as one of literary form, the terms of the argument alter. Machado’s innovation then appears as an aesthetic solution to objective problems, lodged not simply within his own earlier fiction, but in the development of the Brazilian novel and indeed of Brazilian culture at large: perhaps even of ex-colonial societies in general.',
                    'In 1880 Machado published The Posthumous Memoirs of Brás Cubas, the first world-class Brazilian novel. What had changed with this novel? Its stroke of genius was to move the narrative point of view to the upper-class position. Hitherto, the narrators in Machado’s novels had always sympathized with those in a precarious, socially dependent situation, fretting over the arbitrary and unreliable behaviour of those who called the shots, as if to ask how such dependents could persuade their overlords to behave in a civilized manner, to make society more just and liveable for all. In other words, Machado’s unreliable narrator has a distinctly nineteenth-century class substance, and as a device this is its secret.'
                ],
                referencia: 'SCHWARZ, R. A Brazilian Breakthrough. In: New Left Review. 36, nov./dec., 2005. p. 91- 107 (adapted).',
            }
        ],
        enunciado: 'O texto apresenta um elemento inovador fundamental da ficção de Machado de Assis, que refere-se ao (à)',
        alternativas: [
            {
                letra: "A",
                alternativa: "passagem de sua obra do movimento romântico para o realismo."
            },
            {
                letra: "B",
                alternativa: "emprego de aspectos biográficos na composição de suas personagens."
            },
            {
                letra: "C",
                alternativa: "transformação de temáticas provincianas em mundiais em seus romances."
            },
            {
                letra: "D",
                alternativa: "aprofundamento das características psicológicas de suas personagens realistas."
            },
            {
                letra: "E",
                alternativa: "mudança da focalização para personagens representantes da classe alta brasileira."
            }
        ],
        resposta: {
            letra: 'E',
            index: 4
        }
    },
    {
        questao: '19',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'Language teaching has long been associated with teaching in a country or countries where a target language is spoken, but this approach is inadequate. In the contemporary world, language teaching has a responsibility to prepare learners for interaction with people of other cultural backgrounds, teaching them skills and attitudes as well as knowledge. This article presents the main concepts involved in this view of language teaching: the notion of culture, the languageculture nexus, and intercultural competence. It also explains the implications of the approach in terms of the skills, attitudes, and knowledge that should be taught. The article goes further: It argues that language teaching needs to be linked to other disciplines in order to develop an approach that integrates insights from citizenship education. All of this has implications for teachers’ professional identity and for cooperation across the curriculum.'
                ],
                referencia: 'BYRAM, M.; WAGNER, M. Making a difference: language teaching for intercultural and international dialogue. Foreign language annals, v. 51, n. 1, 2018. p. 140-151 (adapted).',
            }
        ],
        enunciado: 'Considerando as informações apresentadas, qual conceito de língua embasa o trabalho dos autores do texto?',
        alternativas: [
            {
                letra: "A",
                alternativa: "Língua como sistema de princípios radicados na mente humana ou conjunto de princípios universais."
            },
            {
                letra: "B",
                alternativa: "Língua como sistema gramatical pertencente a um grupo de indivíduos ou a linguagem própria de um povo."
            },
            {
                letra: "C",
                alternativa: "Língua como sistema de signos e como organização vinculada à faculdade da linguagem, favorecendo a compreensão que se tem de um mundo tecido pela própria linguagem." 
            },
            {
                letra: "D",
                alternativa: "Língua como conjunto organizado e opositivo de relações, adotado por determinada sociedade para permitir o exercício de linguagem entre os homens."
            },
            {
                letra: "E",
                alternativa: "Língua como interação social cuja função é promover discursos ou como instrumento de comunicação, usada na realização da vida social."
            }
        ],
        resposta: {
            letra: 'E',
            index: 4
        }
    },
    {
        questao: '20',
        textos: [
            {
                tipo: 'txt',
                titulo: 'LITERATURE AND CREATIVE WRITING',
                descricao:
                [
                    "At New York University’s campus in Abu Dhabi, where I am a professor of literature and creative writing, one of my courses examines ten books that sought to accomplish what Guernica did. In “Novels That Changed the World”, my students wrestle with the few fictions that stretched beyond personal or literary influence and launched revolutions, addressed colonial abuse, improved public policy, forged cultural identity, or challenged repressive dogma. By the end of the course the students are supposed to present a short individual production which will be assessed according to the literary criteria learned in class, the best ones to be published by the university press. This work is obligatory and it compounds the major part of the grade of the subject, along with other parameters such as frequency and participation.",
                    'When the students start reading and have the opportunity of discussing the historical contexts in which the books were written, they realize the importance of literature and discover that each novel on our reading list spoke against the injustices of its time, and in doing so highlighted the injustices of today. In every book, we found a stubborn insistence on speaking out and that is exactly what I use as ignition point to stimulate them to write their own pieces of writing. Along the course, and with the help of the reflections raised by the group discussions in class, the students become able to also produce literary works approaching sensitive themes of our times. I personally read and orientate the students so as to guarantee the quality of their texts, considering that some of them possess meaningful literary value and may even become the next best-seller. Who dares to doubt?' 
                ],
                referencia: 'Available at: https://www.weforum.org/agenda/2017/05/literature-and-creative-writing-are-vital-to-democracy-here-s-why/. Access on: 19 apr. 2020. (adapted).',
            }
        ],
        enunciado: 'A partir das informações apresentadas, assinale a alternativa que descreve o processo avaliativo mencionado no texto.',
        alternativas: [
            {
                letra: "A",
                alternativa: "A avaliação será individual, realizada por meio de uma resenha crítica de uma obra literária escolhida mediante critérios rigorosos do seu valor literário, e servirá para compor a maior parte da nota dos alunos na disciplina."
            },
            {
                letra: "B",
                alternativa: "Os alunos poderão fazer trabalhos em duplas ou pequenos grupos, suas produções deverão seguir requisitos de um texto literário e os melhores trabalhos serão publicados pela editora da universidade."
            },
            {
                letra: "C",
                alternativa: "A avaliação será individual, mediante a produção de um trabalho escrito nos moldes de um texto literário, avaliado e orientado pelo professor da disciplina e os melhores textos serão publicados pela editora da universidade."
            },
            {
                letra: "D",
                alternativa: "O aluno escolhe um autor e imprime em seu trabalho as técnicas e rigor literário semelhantes ao do autor escolhido, sob a orientação do professor, e as notas da atividade corresponderão à maior parte dos créditos da disciplina."
            },
            {
                letra: "E",
                alternativa: "Os alunos produzem, individualmente, um texto curto de valor literário, tendo como parâmetro uma obra escolhida pelo professor, sendo este trabalho requisito para a obtenção da aprovação na disciplina."
            }
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '21',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Task-Based Language Teaching (TBLT), as we know it today, was first developed in the 1980s by N. Prabhu, a teacher and researcher in Bangalore, South India. He suggested that language acquisition is “an unconscious process which is best facilitated by bringing about in the learner a preoccupation with meaning, saying and doing”. He believed that using tasks would help tap into learners’ natural mechanisms for second language acquisition.'
                ],
                referencia: 'CHANDY, R. The origins of TBLT. Available at: https://languagebyexperience.com/blog/the-origins-of-tblt/.Access on: 8 june 2020 (adapted).',
            },
            {
                tipo: 'txt',
                descricao: 
                [
                    'For learning to take place, learners must be engaged in the process of education. One way to engage learners is to motivate them through authentic learning experiences. Authentic learning experiences are instructional activities that demonstrate real life connections by associating the concept being taught with a real-life experience or event. For authentic learning to take place, teachers must involve students in the process of gathering, analyzing, and using information to make informed decisions that relate to real life. More than any previous generation, today’s digital students look for relevancy in the content of the various subjects they are learning.'
                ],
                referencia: 'SHELLY, G. B.; GUNTER, G. A.; GUNTER, R. E. Teachers discovering computers: integrating technology and digital media in the classroom. 6 ed. Boston (MA): Cengage Learning, 2010. p. 334 (adapted).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Considerando as informações apresentadas nos textos, avalie as propostas didáticas a seguir.',
                    frases :
                    [
                        'I. The final project for this year is an arts blog – a website containing texts, videos, images, opinions,and links. It should represent the universe of art in your city or region.',
                        'II. Select a Brazilian movie. Write a synopsis of the movie using no more than 280 characters. Peer edit it and make the necessary corrections. Tweet it.',
                        'III. You are going to read a short text about internet addiction disorder. Read it carefully and answer the questions.',
                        'IV. Read the introduction of this fanfic from FanFiction.net written by a book fan. Now it’s your turn to write fanfic about a character of the book you summarized.'
                    ]
                }
            }
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e III, apenas.'
            },
            {
                letra: 'B',
                alternativa: 'I, II e III, apenas.'
            },
            {
                letra: 'C',
                alternativa: 'I, II e IV, apenas.',
                alternativaCorrecao: `I, II e IV, apenas. \n
                I. The final project for this year is an arts blog – a website containing texts, videos, images, opinions,and links. It should represent the universe of art in your city or region.
                II. Select a Brazilian movie. Write a synopsis of the movie using no more than 280 characters. Peer edit it and make the necessary corrections. Tweet it.
                IV. Read the introduction of this fanfic from FanFiction.net written by a book fan. Now it’s your turn to write fanfic about a character of the book you summarized.`
            },
            {
                letra: 'D',
                alternativa: 'II, III e IV, apenas.'
            },
            {
                letra: 'E',
                alternativa: 'I, II, III e IV.'
            },
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '22',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Virtual Learning Environments (VLEs) can be used as a virtual assessment environment if the software is designed suitably for language assessment purposes. In other words, if the quizzes, questionnaires or exams on a course are uploaded, it would be virtual environment-based language assessment. VLEs provide differentiated instruction that can modify resources, content, activities and address students’ needs. Students need personalized language assessment as well to improve their learning experience with this assessment. Thus, more reflective, self-regulated individuals need useful assessment instruments capable of monitoring their learning progress. As discussed in previous sections, most of the digital tools offer personalized assessment for language learners. For instance, the use of voice recording with the purpose of speaking skills assessment or video conferencing use.'
                ],
                referencia: 'MERI YILAN, S.; KORUYAN, K. S. ICT-Based Assessment, Methods, and Programs in Tertiary Education. IGI Global, 2020. p. 51 (adapted).',
            },
            {
                tipo: 'txt',
                descricao: 
                [
                    'Paper-based textbooks are being replaced by more engaging digital textbooks containing hyperlinks, interactive presentations, and videos. Additionally, a digital learning environment enables students to set their own pace of study and teachers to track students’ progress more efficiently. These technological advances in the educational context as well as our daily life have greatly impacted the assessment of English language proficiency.',
                    'Our endeavours to integrate new technology for the better have had several outcomes: adaptive testing based on a candidate’s level of ability; quick reporting of results enhanced by AI-enabled marking; various modes of testing available for the stakeholders; instantaneous feedback for enhancing learning and teaching; and innovative assessment for the future.'
                ],
                referencia: 'LEE, H. W. Technology-Enhanced Language Assessment: Innovative Approaches for Better Learning. Cambridge Assessment. Available at: https://www.cambridgeassessment.org.uk/insights/technology-enhanced-languageassessment-innovative-approaches-for-better-learning/. Access on: 8 june 2020 (adapted).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Considerando a realização de avaliações a distância, em virtude da pandemia de Covid-19, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. As tecnologias digitais favorecem a regulação e autorregulação da aprendizagem em um processo formativo.',
                        'II. Ambientes virtuais de aprendizagem são formatados para a aplicação de testes em papel após upload.',
                        'III. As potencialidades de avaliação em ambientes virtuais não se limitam à modalidade de EaD.',
                        'IV. Cada texto atribui papéis diferentes para a avaliação mediada por tecnologias digitais.'
                    ]
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e III.',
                alternativaCorrecao: `I e III. \n
                I. As tecnologias digitais favorecem a regulação e autorregulação da aprendizagem em um processo formativo.
                III. As potencialidades de avaliação em ambientes virtuais não se limitam à modalidade de EaD.`
            },
            {
                letra: 'B',
                alternativa: 'I e IV'
            },
            {
                letra: 'C',
                alternativa: 'II e III'
            },
            {
                letra: 'D',
                alternativa: 'I, II e IV'
            },
            {
                letra: 'E',
                alternativa: 'II, III e IV.'
            },
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '23',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Assessment helps focus attention on the learning progress and outcomes of each student. Collecting student assessment information is essential to improve teaching and learning strategies and meet information needs at the level of students, parents, teachers, school leaders, policy makers, and society.',
                    'Students need to be clear about what they are aiming to learn and which indicators and criteria are appropriate to evaluate progress and inform future learning. Engaging students as active participants in assessment will help them develop capabilities in analysing their own learning and becoming self-directed learners.',
                    'Parents typically want to know how their children are doing and progressing in relation to expected standards and in comparison to others in the same age group. Providing assessment information to parents is key to building strong school-home partnerships by making parents aware of learning goals, their children’s progress and priorities for further learning.',
                    'Teachers need assessment information that is reliable and consistent across schools in order to understand student strengths and weaknesses in relation to expected standards, to target future teaching and improve classroom instruction.',
                    'School leaders can use such information for school self-evaluation processes and to provide accountability information to their employers and the educational administration.',
                    'Policy makers need aggregated assessment information to monitor the performance of schools and education systems and ensure that national education goals are met.',
                    'Society at large also needs credentials about the quality of education and the achievement of standards in the education system.',
                    'There is a large body of research showing a strong impact of different types of assessment on student learning outcomes. Evidence on different approaches indicates that carefully planned assessment interventions that are well aligned with learning goals and place students at the centre of the process have strong potential to raise achievement and reduce disparities.'
                ],
                referencia: 'Available at: https://www.oecd-ilibrary.org/student-assessment-putting-the-learner-at-the-centre. Access on: 18 apr. 2020 (adapted).',
            },
        ],
        enunciado: 'Considerando o texto apresentado e o processo de ensino aprendizagem, é correto afirmar que',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'os órgãos reguladores do ensino têm a responsabilidade de garantir que as escolas estabeleçam seus padrões de aprendizagem livremente, cabendo a eles referendar as decisões tomadas pelas escolas e monitorar as metas por elas estabelecidas.'
            },
            {
                letra: 'B',
                alternativa: 'os professores precisam utilizar sistemas avaliativos que reflitam o desempenho de seus estudantes a fim de definir metas tangíveis e em concordância com os padrões esperados para cada aluno e/ou ano/série escolar.'
            },
            {
                letra: 'C',
                alternativa: 'os estudantes têm o papel de colaborar com o desenvolvimento de sistemas avaliativos que contemplem suas aptidões, por meio de avaliações flexíveis, que podem ser elaboradas por eles próprios, tornando-os aprendizes auto-orientados.'
            },
            {
                letra: 'D',
                alternativa: 'a sociedade deve exigir credenciais dos professores que formam os alunos, pois espera-se que a qualidade da educação atenda às demandas do mercado.'
            },
            {
                letra: 'E',
                alternativa: 'os pais precisam ter acesso às avaliações escolares para que possam comparar o desempenho de seus filhos com o de outras crianças, a fim de colaborar na construção de atividades avaliativas.'
            },
        ],
        resposta: {
            letra: 'B',
            index: 1
        }
    },
    {
        questao: '24',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Teacher Astrid: I discourage the use of dictionaries in the classroom: learners can become over-dependent on them. I try to get my learners to guess words that they don’t know, or if they can’t manage that, then I try to help them to find out the meaning by asking leading questions. If they really don’t understand something, they can look it up in their dictionaries at home.',
                    'Teacher Britt: Invariably, when I give my learners a text to read, I ask them to read it quickly for the main ideas. Once everyone has got the general idea, they read the whole passage again, then one or two of them tell me in their own words what they understood. Next, I usually ask them to work in pairs or small groups to find answers to more detailed questions: they always read the passage at least twice more to scan and find the answers. By doing it like this, I think they get a lot more out of the text, and there’s plenty of learner-to-learner interaction, too.',
                    'Teacher Kate: When I teach reading, I like my learners to use other language abilities, too. I do various things. For example, before reading a passage, my learners discuss the topic or brainstorm vocabulary they predict they will hear; or they listen to a short passage on a related topic and discuss it. At the reading stage, I make sure to spell out why they are reading. We read a passage more than once, each time with a new task. The learners fill in a chart, or match pictures to paragraphs or answer true/false questions. Finally, I save enough time for a follow-up, like a role-play or group work where the learners write a different ending or discuss the issue in the text.'
                ],
                referencia: 'TANNER, R.; GREEN, C. Tasks for Teacher Education: A Reflective Approach. Addison Wesley Longman, 1998. p. 60-61 (adapted).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Based on the teachers’ descriptions, consider the following statements.',
                    frases :
                    [
                        'I. The three teachers follow a three-phase stage order: pre-reading activities, while-reading activities and post-reading activities.',
                        'II. The reading strategies inferred from the descriptions aim to develop the learners’ ability to comprehend any text, not to guide them to the comprehension of a particular text.',
                        'III. One of the teachers’ choice of an integrated-skill approach over a segregated-skill one can contribute to an adequate preparation of the learners in academic communication, career-related language use, or everyday interaction in the language.'
                    ]
                }
            }
        ],
        enunciado: 'The correct statement or statements is/are',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, only.'
            },
            {
                letra: 'B',
                alternativa: 'II, only.'
            },
            {
                letra: 'C',
                alternativa: 'I and II, only'
            },
            {
                letra: 'D',
                alternativa: 'II and III, only.',
                alternativaCorrecao: `II and III, only. \n
                II. The reading strategies inferred from the descriptions aim to develop the learners’ ability to comprehend any text, not to guide them to the comprehension of a particular text.
                III. One of the teachers’ choice of an integrated-skill approach over a segregated-skill one can contribute to an adequate preparation of the learners in academic communication, career-related language use, or everyday interaction in the language.`
            },
            {
                letra: 'E',
                alternativa: 'I, II and III.'
            },
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '25',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'No field of education has been subjected more frequently to the ebbs and flows of global geopolitics than Foreign Language (FL) education. Wars and displays of military strength, economic and technological power, and claims to cultural superiority can enhance the prestige of one language over another; perceptions of a language’s social significance or of its exchange value on the market of symbolic goods can affect people’s desire to learn the language. For example, the First World War seriously reduced the demand for German in the United States, the collapse of the Soviet Union at the end of the Cold War wiped out enrollments in Russian, while the victory of the English-speaking Allies in the Second World War promoted the learning of English around the globe. The decision in 2008 by the UC Berkeley administration to severely cut the Japanese, Korean, and Chinese programs for budgetary reasons was reversed not because of the protests by the foreign language departments, but because it mobilized the Asian-American community, which turned the issue into one of civil rights. Heritage language learners and the geopolitical ties they represent came to the rescue of foreign languages. With the increased mobility brought about by globalization, the increased diversity of academic environments, and the hegemonic spread of English as a lingua franca, foreign language education has become at once more necessary and more controversial than it was fifty years ago.'
                ],
                referencia: 'KRAMSCH, C. Between globalization and decolonization: foreign languages in the cross-fire. In: MACEDO, D. (Ed.). Decolonizing foreign language educators: the misteaching of English and other colonial languages. New York/London: Routledge, 2019. p. 50-72 (adapted).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Considerando o trecho apresentado e a diversidade linguística do inglês e seus aspectos geopolíticos, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. Desde a Segunda Guerra Mundial há um jogo ideológico para expandir a Língua Inglesa em detrimento da Alemã.',
                        'II. Questões econômicas e tecnológicas propiciam a hegemonia da Língua Inglesa e seu prestígio em relação a línguas minoritárias.',
                        'III. A elite que domina os departamentos de língua estrangeira em universidades utiliza-se dos direitos civis para defender a língua inglesa.',
                        'IV. O fluxo da geopolítica global repercute na área de ensino e aprendizagem de línguas estrangeiras.'
                    ]
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e II.'
            },
            {
                letra: 'B',
                alternativa: 'II e IV.',
                alternativaCorrecao: `II e IV. \n
                II. Questões econômicas e tecnológicas propiciam a hegemonia da Língua Inglesa e seu prestígio em relação a línguas minoritárias.
                IV. O fluxo da geopolítica global repercute na área de ensino e aprendizagem de línguas estrangeiras.`
            },
            {
                letra: 'C',
                alternativa: 'III e IV.'
            },
            {
                letra: 'D',
                alternativa: 'I, II e III.'
            },
            {
                letra: 'E',
                alternativa: 'II, III e IV.'
            },
        ],
        resposta: {
            letra: 'B',
            index: 1
        }
    },
    {
        questao: '26',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'It was my second semester at my new school and I realized that things weren’t working out the way I wanted. It was a speaking skills class, but my students just wouldn’t open their mouths. The first semester had been the same. At that time, I had thought it was just a matter of my adjusting to a new situation. Now I knew it was something more serious. I decided to audiorecord my classes over several days. The recordings confirmed my observations. The tape was filled with the sound of my voice, punctuated by prolonged silences, and the occasional monosyllabic student response. I consulted colleagues who said it was a “cultural thing”.',
                    'So there was my challenge – and my dilemma: how to get my Cantonese-speaking Hong Kong students to speak English. I decided to change the dynamics of the classroom, focusing more overtly on group work, and encouraging students to speak through split information tasks in which students had to speak English.',
                    'This new awareness led me into a second investigative cycle, focusing this time on the reluctant speakers in the class. I decided that these students were having difficulty redefining their roles, and concluded that if I added a learning strategy dimension with a focus on learner roles and responsibilities, it might help sensitize them to this very different kind of classroom.'
                ],
                referencia: 'BAILEY, K.; CURTIS, A.; NUNAN, D. Pursuing Professional Development: the self as source. Boston (MA): Heinle & Heinle, 2001. p. 133-134 (adapted).',
            },
        ],
        enunciado: 'Com base nas informações do texto, o tipo de análise/pesquisa que o professor conduziu acerca de sua prática docente é a',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'pesquisa-ação.'
            },
            {
                letra: 'B',
                alternativa: 'análise documental.'
            },
            {
                letra: 'C',
                alternativa: 'análise conversacional.'
            },
            {
                letra: 'D',
                alternativa: 'pesquisa experimental.'
            },
            {
                letra: 'E',
                alternativa: 'pesquisa levantamento.'
            },
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '27',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'O inglês contemporâneo é resultado da interseção de várias línguas e eventos pertinentes que contribuíram para a formação, variação e adaptação pelas quais a Língua Inglesa passou até chegar a sua composição atual.'
                ],
                referencia: 'MOREIRA, C. de S.; GOMES, M. D.; RESGALA, R. M. Memória e Linguagem: Apontamentos sobre a História Diacrônica da Língua Inglesa. 2015 (adaptado). Disponível em: www.fsj.edu.br. Acesso em: 14 mar. 2020.',
            },
            {
                tipo: 'img',
                descricao: '../imgs/27.JPG',
                referencia: 'GLASBERGEN, R. 2007. Available at: https://hubpages.com/education/EducationCartoons-Teaching-Humor-Funny-Teacher-Cartoons. Access on: 14 mar. 2020.',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'De acordo com os textos, em decorrência das mudanças socioculturais, pode-se afirmar que',
                    frases :
                    [
                        'I. as línguas sofrem influências dos avanços sociais e tecnológicos, apresentando transformações na escrita e na oralidade.',
                        'II. os gêneros textuais orais e escritos são responsáveis pelos avanços e pelas transformações tecnológicas.',
                        'III. as produções textuais discentes refletem traços de mudanças linguísticas contemporâneas em gêneros orais e escritos.'
                    ]
                }
            }
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, apenas.'
            },
            {
                letra: 'B',
                alternativa: 'I e II, apenas.'
            },
            {
                letra: 'C',
                alternativa: 'I e III, apenas.',
                alternativaCorrecao: `I e III, apenas. \n
                I. as línguas sofrem influências dos avanços sociais e tecnológicos, apresentando transformações na escrita e na oralidade.
                III. as produções textuais discentes refletem traços de mudanças linguísticas contemporâneas em gêneros orais e escritos.`
            },
            {
                letra: 'D',
                alternativa: 'II e III, apenas.'
            },
            {
                letra: 'E',
                alternativa: 'I, II e III.'
            },
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '28',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Uma das competências a serem desenvolvidas por alunos de Língua Inglesa dos anos finais do Ensino Fundamental, de acordo com a Base Nacional Comum Curricular (BNCC), é:',
                    '“conhecer diferentes patrimônios culturais, materiais e imateriais, difundidos na língua inglesa, com vistas ao exercício da fruição e da ampliação de perspectivas no contato com diferentes manifestações artístico-culturais.”'
                ],
                referencia: 'BRASIL. Base nacional comum curricular (BNCC). Educação é a Base. Brasília, MEC/CONSED/UNDIME, 2017.',
            },
            {
                tipo: 'img',
                descricao: '../imgs/28.JPG',
                referencia: 'Available at: http://www.beeornottobe.com.br/. Access on: 24 may 2020.',
            },
            {
                tipo: 'justificativas',
                descricao:
                {
                    titulo: 'A partir da leitura e análise dos textos I e II, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases :
                    [
                        'I. O anúncio apresentado no texto II aborda o tema interdisciplinar relacionado ao meio ambiente e possibilita o desenvolvimento da competência da BNCC descrita no texto I.',
                        'II. A peça publicitária apresenta um caráter multimodal e faz referência intertextual a um clássico da literatura inglesa, por meio do nome da Organização Não Governamental (ONG), os quais convergem para reforçar a mensagem de preservação das abelhas.'
                    ]
                }
            }
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
                alternativaCorrecao: `As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I. \n
                I. O anúncio apresentado no texto II aborda o tema interdisciplinar relacionado ao meio ambiente e possibilita o desenvolvimento da competência da BNCC descrita no texto I.
                II. A peça publicitária apresenta um caráter multimodal e faz referência intertextual a um clássico da literatura inglesa, por meio do nome da Organização Não Governamental (ONG), os quais convergem para reforçar a mensagem de preservação das abelhas.`
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.'
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            },
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '29',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'O material didático Shakespeare Vive nas Escolas foi criado pelo British Council e pela Royal Shakespeare Company (RSC) para celebrar o aniversário de 400 anos da morte de William Shakespeare em 2016.',
                    'O material ajuda a investigar Shakespeare como o escritor que ainda fala com todos os povos e nações, tratando das grandes questões e temas da experiência humana e o que significa ser um cidadão no século XXI. As atividades propostas neste material estimulam professores e alunos a se envolverem com algumas das questões, temas e ideias das peças de Shakespeare e a descobrir como elas permanecem relevantes e atuais em nossas vidas, onde quer que estejamos no mundo.',
                    'As peças de Shakespeare foram encenadas milhares de vezes desde que foram escritas e ainda existem incontáveis formas diferentes de interpretar sua obra, cada nova interpretação trará à cena diferentes temas e ideias.'
                ],
                referencia: 'Disponível em: https://www.britishcouncil.org.br/atividades/shakespeare-lives/materiais-didaticos. Acesso em: 01 jun. 2020.',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'A crítica cultural é mais uma triste ciência social, mas a crítica literária, como uma arte, sempre foi e sempre será um fenômeno elitista. Foi um erro acreditar que a crítica literária podia tornar-se uma base para a educação democrática ou para a melhoria da sociedade. Quando nossos departamentos de inglês e outros de literatura se reduzirem às dimensões de nossos atuais departamentos Clássicos, cedendo suas funções mais vulgares às legiões de Estudos Culturais, talvez possamos retornar ao estudo do inescapável, a Shakespeare e seus poucos pares, que afinal nos inventaram a nós todos.'
                ],
                referencia: 'BLOOM, H. O cânone ocidental. Rio de janeiro: Objetiva, 1995 (adaptado).',
            },
            {
                tipo: 'justificativas',
                descricao:
                {
                    titulo: 'Com base na leitura dos textos I e II, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases :
                    [
                        'I. Um professor de Educação Básica que tenha como pressuposto teórico de sua prática, no que diz respeito ao cânone literário, o postulado no texto II, poderia fazer uso do material didático apresentado no texto I.',
                        'II. O texto I considera que Shakespeare, por ser um autor canônico, é passível de ser compreendido e apreciado por estudantes da Educação Básica, porque trata das grandes questões e temas da experiência humana.'
                    ]
                }
            }
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.'
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.'
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.',
                alternativaCorrecao: `A asserção I é uma proposição falsa, e a II é uma proposição verdadeira. \n
                I. Um professor de Educação Básica que tenha como pressuposto teórico de sua prática, no que diz respeito ao cânone literário, o postulado no texto II, poderia fazer uso do material didático apresentado no texto I.
                II. O texto I considera que Shakespeare, por ser um autor canônico, é passível de ser compreendido e apreciado por estudantes da Educação Básica, porque trata das grandes questões e temas da experiência humana.`
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            },
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '30',
        textos: [
            {
                tipo: 'txt',
                descricao:
                [
                    'A crença “avaliação como momento inerente ao processo de aprendizagem” confirma a crença detectada nos Modelos de Avaliação Idealizados das alunas-avaliadas. No papel de professoras-avaliadoras, essa se origina das metáforas “avaliação como instrumento de auxílio” e “avaliação como relaxamento”. Essa crença se remete à experiência de uma das participantes, ao conversar com seus alunos para acalmá-los em relação à avaliação. Para minimizar o nervosismo de seus alunos, a aluna-professora passou para eles tranquilidade, tentando transformar a avaliação em um processo natural como parte da aprendizagem.',
                ],
                referencia: 'BARATA, M. C. C. M. Modelos de avaliação experienciados e idealizados - experiências, metáforas e crenças de alunas e professoras em formação. In: MICCOLI, L. (Org.). Pesquisa experiencial em contextos de aprendizagem: uma abordagem em evolução. Campinas (SP): Pontes, 2014. p. 341 (adaptado).',
            },
            {
                tipo: 'txt',
                descricao:
                [
                    'O planejamento de projetos deve conter uma descrição do produto e interlocutor, descrevendo a situação comunicativa na qual está inserido. Descreve também os objetivos de aprendizagem e aqui o potencial para articulação entre os eixos. Segue com a descrição das etapas, que orientará a prática da sala de aula do professor e, finalmente, descreve os instrumentos e critérios para avaliação do aprendizado. A avaliação vai remeter às competências gerais e específicas da área, o que considero importante para que o trabalho da sala de aula de fato se conecte com toda a proposta da Base Nacional Comum Curricular.'
                ],
                referencia: 'DURAZZO, S. B. Parecer Base Nacional Comum Língua Inglesa. Janeiro de 2017. Disponível em: http://basenacionalcomum.mec.gov.br/images/relatorios-analiticos/Parecer_6_LI_Sandra_Tatiana_Baumel_Durazzo.pdf. Acesso em: 10 jun. 2020.',
            },
        ],
        enunciado: 'Com base nas informações anteriores, o que os textos apresentam em comum no que se refere ao conceito de avaliação?',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'A avaliação conduz os estudantes a um estado de nervosismo indesejado.'
            },
            {
                letra: 'B',
                alternativa: 'A avaliação orienta a prática da sala de aula durante a condução de projetos.'
            },
            {
                letra: 'C',
                alternativa: 'A avaliação constitui-se um instrumento crucial do trabalho de qualquer professor.'
            },
            {
                letra: 'D',
                alternativa: 'A avaliação dever ser um componente intrínseco do processo de ensino e aprendizagem.'
            },
            {
                letra: 'E',
                alternativa: 'A avaliação configura-se um momento para determinar se os objetivos de aprendizagem foram atingidos.'
            }
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '31',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'Os quilombolas, compreendidos também como povos ou comunidades tradicionais, exigem que as políticas públicas a eles destinadas considerem a sua inter-relação com as dimensões históricas, políticas, econômicas, sociais, culturais e educacionais que acompanham a constituição dos quilombos no Brasil. Consequentemente, a Educação Escolar Quilombola não pode ser pensada somente se levando em conta os aspectos normativos, burocráticos e institucionais relacionados à configuração das políticas educacionais. A sua implementação deverá ser sempre acompanhada de consulta prévia e realizada pelo poder público junto às comunidades quilombolas e suas organizações.'
                ],
                referencia: 'BRASIL/CNE. Parecer Cne/CeB n. 16/2012. Diretrizes Curriculares Nacionais para a Educação Escolar Quilombola, 2012 (adaptado).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Considerando o texto e as discussões sobre políticas de articulação escola/comunidade quilombola,avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. A relação entre educação e movimentos sociais na educação quilombola objetiva adequar essa organização cultural ao sistema educacional.',
                        'II. A história, a memória, o território, a ancestralidade e os conhecimentos tradicionais da comunidade quilombola são aspectos considerados na garanti a do direito à educação quilombola.',
                        'III. O papel da comunidade quilombola é determinante nos processos decisórios acerca da educação escolar a ser nela implementada.'
                    ]
                }
            }
        ],
        enunciado: 'É correto o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, apenas.'
            },
            {
                letra: 'B',
                alternativa: 'II, apenas.'
            },
            {
                letra: 'C',
                alternativa: 'I e III, apenas.'
            },
            {
                letra: 'D',
                alternativa: 'II e III, apenas.',
                alternativaCorrecao: `II e III, apenas. \n
                II. A história, a memória, o território, a ancestralidade e os conhecimentos tradicionais da comunidade quilombola são aspectos considerados na garanti a do direito à educação quilombola.
                III. O papel da comunidade quilombola é determinante nos processos decisórios acerca da educação escolar a ser nela implementada.`
            },
            {
                letra: 'E',
                alternativa: 'I, II e III.'
            },
        ],
        resposta: {
            letra: 'D',
            index: 3
        }
    },
    {
        questao: '32',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'O pensamento de Paulo Freire – a sua teoria do conhecimento – deve ser entendido no contexto em que surgiu o Nordeste brasileiro, onde, no início da década de 1960, metade de seus 30 milhões de habitantes vivia na “cultura do silêncio”, como ele dizia, isto é, eram analfabetos. Era preciso “dar-lhes a palavra” para que transitassem para a participação na construção de um Brasil que fosse dono de seu próprio destino e que superasse o colonialismo.'
                ],
                referencia: 'GADOTTI, Moacir. Paulo Freire : uma bibliografi a. São Paulo: Cortez, 1996.',
            },
            {
                tipo: 'justificativas',
                descricao:
                {
                    titulo: 'Com base no texto e nas ideias freireanas, avalie as asserções a seguir e a relação proposta entre elas.',
                    frases :
                    [
                        'I. Paulo Freire denunciou a opressão e a exclusão gerada pela supressão do direito à educação e à cidadania, defendendo a educação como uma empreitada coletiva.',
                        'II. A educação deve ser compreendida como um ato político, pois deve incentivar a reflexão e a ação consciente e criativa do sujeito em seu processo de libertação.'
                    ]
                }
            }
        ],
        enunciado: 'A respeito dessas asserções, assinale a opção correta.',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
                alternativaCorrecao: `As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I. \n
                I. Paulo Freire denunciou a opressão e a exclusão gerada pela supressão do direito à educação e à cidadania, defendendo a educação como uma empreitada coletiva.
                II. A educação deve ser compreendida como um ato político, pois deve incentivar a reflexão e a ação consciente e criativa do sujeito em seu processo de libertação.`
            },
            {
                letra: 'B',
                alternativa: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.'
            },
            {
                letra: 'C',
                alternativa: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.'
            },
            {
                letra: 'D',
                alternativa: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.'
            },
            {
                letra: 'E',
                alternativa: 'As asserções I e II são proposições falsas.'
            },
        ],
        resposta: {
            letra: 'A',
            index: 0
        }
    },
    {
        questao: '33',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'O Decreto n. 5.626/2005, que dispõe sobre a Língua Brasileira de Sinais (Libras) considera a pessoa surda como aquela que, por ter perda auditiva, compreende e interage com o mundo por meio de experiências visuais. Em consonância com o decreto, nas escolas públicas em que há crianças surdas ou com deficiência auditiva matriculadas, faz-se necessário o desenvolvimento de práticas capazes de garantir o seu direito à educação.'
                ],
                referencia: 'Disponível em: http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Decreto/D5626.htm. Acesso em 20 abr. 2020 (adaptado).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Considerando as ações necessárias para a escola garantir o direito à educação das crianças surdas, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. É necessário criar situações em sala de aula que promovam o convívio social entres as crianças, que estimule o respeito às diferenças, promovendo o reconhecimento das suas potencialidades e o desenvolvimento afetivo, cognitivo, linguístico e sociocultural.',
                        'II. A Libras deve ser assegurada como a primeira língua da criança surda, considerando-se a Língua Portuguesa, na modalidade escrita, como a segunda.',
                        'III. É fundamental disponibilizar intérpretes de Libras para as crianças surdas, e caso não seja possível, é preciso solicitar aos familiares que procurem outra escola mais preparada.',
                        'IV. A escola deve fomentar parcerias com os pais com o objeti vo de acolhê-los e ajudá-los a constituir uma imagem positiva de seu filho surdo, auxiliando-o na compreensão da sua realidade.',
                        'V. Os professores precisam desenvolver, em relação aos alunos surdos, processos de avaliação mais subjetivos com foco nas dificuldades de aprendizagem desses alunos.'
                    ]
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e V'
            },
            {
                letra: 'B',
                alternativa: 'II e III.'
            },
            {
                letra: 'C',
                alternativa: 'I, II e IV.',
                alternativaCorrecao: `I, II e IV. \n
                I. É necessário criar situações em sala de aula que promovam o convívio social entres as crianças, que estimule o respeito às diferenças, promovendo o reconhecimento das suas potencialidades e o desenvolvimento afetivo, cognitivo, linguístico e sociocultural.
                II. A Libras deve ser assegurada como a primeira língua da criança surda, considerando-se a Língua Portuguesa, na modalidade escrita, como a segunda.
                IV. A escola deve fomentar parcerias com os pais com o objeti vo de acolhê-los e ajudá-los a constituir uma imagem positiva de seu filho surdo, auxiliando-o na compreensão da sua realidade.`
            },
            {
                letra: 'D',
                alternativa: 'I, III, IV e V.'
            },
            {
                letra: 'E',
                alternativa: 'II, III, IV e V.'
            },
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '34',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'As percepções sobre o termo liderança revelam uma configuração ainda precária da realidade brasileira no campo da gestão escolar. As pesquisas internacionais apresentam uma gama significativa de resultados sobre o tema há, pelo menos, mais de duas décadas. Vale lembrar que os estudos sobre escolas eficazes, na sua maioria, apontam o efeito da liderança do gestor como um dos principais fatores explicativos dessa equação. Um sobrevoo nos dados da pesquisa Olhares Cotidianos sobre a Gestão Escolar (OCGE), realizada com gestores e professores de seis escolas de um município brasileiro, permite identificar, de forma geral, noções sobre o termo, ao se solicitar ao grupo algum tipo de caracterização mais precisa de liderança:',
                    '"Isso aí é uma coisa que se tem ou não se tem." (Ana, Grupo Liderança).',
                    '"O dom da palavra, do convencimento..." (Andrea, Grupo Liderança).',
                    '"Carisma" (Cíntia, Grupo Liderança).',
                    '"A pessoa nasce com isso ou não." (Adriana, Grupo Liderança).'
                ],
                referencia: 'COELHO, F. M. O Cotidiano da Gestão Escolar: o método de caso na sistematização de problemas. Educação & Realidade, Porto Alegre, v. 40, n. 4, out./dez. 2015, p. 1.261-1.276 (adaptado).',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'Relacionando as ideias de liderança expostas pelas participantes da pesquisa sobre o exercício da gestão escolar, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. As respostas de Ana e Adriana reforçam as concepções defendidas pelas investigações científicas do campo educacional contemporâneo sobre liderança, que afirmam que nem todos podem ser gestores escolares e que é preciso ter a qualidade de empreendedor para ocupar esse cargo.',
                        'II. Ana e Cíntia expõem ideias que são coerentes com os estudos atuais sobre a prática da gestão escolar, pois enfati zam o estilo administrativo do gestor, que é um fator fundamental para se compreender a liderança e as suas relações com os objetivos educacionais das escolas.',
                        'III. Em suas respostas, Andrea e Cíntia expressam a ideia de liderança a partir de um de seus aspectos, o interpessoal, embora outros fatores relevantes interfiram na gestão escolar, como o administrativo e/ou o pedagógico.',
                        'IV. As afirmações das participantes relacionam a liderança a uma capacidade de convencimento e a uma habilidade inata do líder – concepções já ultrapassadas pelas investigações educacionais sobre o tema no cenário contemporâneo.'
                    ]
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I e IV.'
            },
            {
                letra: 'B',
                alternativa: 'II e III.'
            },
            {
                letra: 'C',
                alternativa: 'III e IV.',
                alternativaCorrecao: `III e IV. \n
                III. Em suas respostas, Andrea e Cíntia expressam a ideia de liderança a partir de um de seus aspectos, o interpessoal, embora outros fatores relevantes interfiram na gestão escolar, como o administrativo e/ou o pedagógico.
                IV. As afirmações das participantes relacionam a liderança a uma capacidade de convencimento e a uma habilidade inata do líder – concepções já ultrapassadas pelas investigações educacionais sobre o tema no cenário contemporâneo.`
            },
            {
                letra: 'D',
                alternativa: 'I, II e III.'
            },
            {
                letra: 'E',
                alternativa: 'I, II e IV.'
            },
        ],
        resposta: {
            letra: 'C',
            index: 2
        }
    },
    {
        questao: '35',
        textos: [
            {
                tipo: 'txt',
                descricao: 
                [
                    'As redes sociais promovem formas de interação entre indivíduos agrupados por interesses mútuos, identidades semelhantes e também por valores compartilhados. Nesse contexto, a Internet vem se tornando um importante espaço para movimentos sociais por possibilitar uma acelerada e ampla difusão de ideias e absorção de novos elementos em busca de algo em comum. Assim, os movimentos sociais se fazem valer cada vez mais da “democracia informacional”, da “ciberdemocracia” e da prática do “ciberativismo”. '
                ],
                referencia: '',
            },
            {
                tipo: 'afirmacoes',
                descricao:
                {
                    titulo: 'A partir das ideias sobre comunicação e interação virtual, avalie as afirmações a seguir.',
                    frases :
                    [
                        'I. Os movimentos sociais tendem a perder força, prestígio e visibilidade com o crescimento da virtualidade junto à nova geração de jovens e adultos.',
                        'II. Ciberdemocracia, democracia informacional e ciberativismo podem ser classificados como movimentos advindos da virtualidade.',
                        'III. As redes sociais potencializam o ativismo fazendo uso da virtualidade, no entanto, ainda são pouco exploradas pelos movimentos sociais da atualidade.',
                        'IV. Tempo e espaço são conceitos a serem repensados a partir da inserção cada vez maior da virtualidade na vida social.',
                        'V. É papel do educador formar e preparar os alunos para uma atuação responsável e crítica frente à virtualidade, explorando suas potencialidades.'
                    ]
                }
            }
        ],
        enunciado: 'É correto apenas o que se afirma em',
        alternativas: [
            {
                letra: 'A',
                alternativa: 'I, II, e III.'
            },
            {
                letra: 'B',
                alternativa: 'I, III e IV.'
            },
            {
                letra: 'C',
                alternativa: 'I, IV e V.'
            },
            {
                letra: 'D',
                alternativa: 'II, III e V.'
            },
            {
                letra: 'E',
                alternativa: 'II, IV e V.',
                alternativaCorrecao: `II, IV e V. \n
                II. Ciberdemocracia, democracia informacional e ciberativismo podem ser classificados como movimentos advindos da virtualidade.
                IV. Tempo e espaço são conceitos a serem repensados a partir da inserção cada vez maior da virtualidade na vida social.
                V. É papel do educador formar e preparar os alunos para uma atuação responsável e crítica frente à virtualidade, explorando suas potencialidades.`
            },
        ],
        resposta: {
            letra: 'E',
            index: 4
        }
    }
]