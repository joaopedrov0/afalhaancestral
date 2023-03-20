const potions = {
    // codigo: {
    //     Nome: "",
    //     Ingredientes: "",
    //     Efeitos: "",
    //     duração: "",
    //     Modificações: "",
    //     preco: ''
    // },
    cura: {
        nome: 'Poção de cura',
        ingredientes: 'Raízes de plantas ou árvores',
        efeitos: '2d4 + 2 de cura',
        duracao: 'Instantânea',
        modificacoes: '2d6 + 4 com Erva-Duplicata',
        preco: '30po'
    },
    velocidade: {
        nome: 'Poção de velocidade',
        ingredientes: 'Cana de açúcar e Erva-Estrela',
        efeitos: 'O usuário tem o deslocamento dobrado, e vantagem em todos os testes de resistência de destreza.',
        duracao: '5d20 minutos',
        modificacoes: 'Com Erva-Duplicata, aumenta a CA em + 3 pela duração',
        preco: '65po'
    },
    transcendenciaArcana: {
        nome: "Poção de Transcendência Arcana",
        ingredientes: "Crânio de Enguia ou de Águia, dentes de leão ou dragão.",
        efeitos: "Recupera os pontos de magia de um conjurador (máximo 50)",
        duracao: "Instantânea",
        modificacoes: "",
        preco: '50po'
    },
    potencializarTalentos: {
        nome: "Poção de Potencializar Talentos",
        ingredientes: "Sangue de Abutre e Erva-Estrela.",
        efeitos: "Em todos os testes realizados com proficiência, o valor da proficiência é dobrado.",
        duracao: "1 hora",
        modificacoes: "",
        preco: '25po'
    },
    veneno: {
        nome: "Poção de Veneno",
        ingredientes: "Escama de serpente venenosa.",
        efeitos: "Os efeitos da poção de veneno podem varias dependendo da forma que são usados. Se algum alvo ingerir uma poção de veneno, ele deve ser bem sucedido em um teste de resistência de Constituição CD do alquimista que a fez (8 + modificador de inteligência + proficiência), se falhar ele recebe 2d6 de dano e metade caso tenha sucesso. Mergulhar uma lâmina na poção e depois atacar, dará ao ataque 1d4 de dano extra.",
        duracao: "1 hora",
        modificacoes: "Se usar uma Erva-Estrela na fabricação dessa poção, ela se torna uma Poção Intensa de Veneno, causando o dano da poção (2d6 pra ingestão e 1d4 pra ataques com armas banhadas) durante 1d6 turnos.",
        preco: '50po'
    },
    amplificarIntelecto: {
        nome: "Poção de Amplificar Intelecto",
        ingredientes: "Cérebro de polvo ou golfinho.",
        efeitos: "Você ganha +5 em quaisquer testes de inteligência, sabedoria ou carisma.",
        duracao: "10 minutos",
        modificacoes: "",
        preco: '40po'
    },
    pulsoSanidade: {
        nome: "Poção de Pulso de Sanidade",
        ingredientes: "1 Olho de aranha gigante ou 80 olhos de aranha normal, Erva-Estrela.",
        efeitos: "Você tira alguém do estado de loucura, e remove durante a duração o desânimo e tristeza que frequentemente aparecem nos moradores de Pípiltin sem razão aparente. Funciona como antidepressivo.",
        duracao: "8 horas",
        modificacoes: "Usando Erva Duplicata, durante 1 hora, além de todos os efeitos já descritos, o usuário tem vantagem em testes de sabedoria.",
        preco: '50po'
    },
    respiracaoDebaixoDagua: {
        nome: "Poção de Respiração debaixo d'água",
        ingredientes: "Guelras de peixe",
        efeitos: "A pessoa sob efeito da poção consegue respirar na água.",
        duracao: "1 hora",
        modificacoes: "Se a poção for feita com Erva Duplicata, a duração aumenta para 8 horas.",
        preco: '30po'
    },
    ultraHidratacao: {
        nome: "Elixir de ultra hidratação",
        ingredientes: "Raízes ou vinhas, Erva-Estrela, Erva-Duplicata e escamas de peixe",
        efeitos: "Uma pequena porção dessa poção consegue suprir a necessidade de água de uma planta ou animal.(8 usos por poção)",
        duracao: "24 horas",
        modificacoes: "",
        preco: '40po'
    },
    visaoNoEscuro: {
        nome: "Poção de visão no escuro",
        ingredientes: "40 olhos de aranha, 1 porção de açúcar.",
        efeitos: "O usuário ganha visão no escuro em 18 metros",
        duracao: "10 minutos",
        modificacoes: "Usando Erva Duplicata, a duração da poção aumenta para 4 horas",
        preco: '30po'
    },
    odioIncontrolavel: {
        nome: "Poção de visão no escuro",
        ingredientes: "1 dente de piranha, 1 cabeça de qualquer animal de tamanho pequeno ou maior morto no mesmo dia e Erva-Estrela. Todos os materiais são consumidos na poção.",
        efeitos: "O usuário ganha +5 em qualquer teste de força ou destreza (incluindo salvaguardas) e esse bônus é aplicado ao dano também. Ele recebe 20 pontos de vida temporários (que desaparecem no final do efeito da poção). Porém, ele obrigatoriamente tem que atacar alguém em todo turno dele, quem estiver mais próximo, aliado ou não. O efeito termina se o usuário chegar a 0 pontos de vida.",
        duracao: "1 minuto",
        modificacoes: "",
        preco: '70po'
    },
    invulnerabilidade: {
        nome: "Poção de Invulnerabilidade",
        ingredientes: "Erva-Estrela, 2 olhos de Gorila Gigante, Erva-Duplicata.",
        efeitos: "O usuário rola 1d20, caso caia 2 ou 1, ele recebe 2d6 de dano psíquico, caso contrário ele fica invulnerável por 1d3 rodadas que começam a contar a partir do próximo turno dele (lembrando que os turnos acontecem ao mesmo tempo.).",
        duracao: "1d3 turnos (1d6 dividido por 2 e arredondado para cima).",
        modificacoes: "",
        preco: '100po'
    },
    vigorAprimorado: {
        nome: "Poção de Vigor Aprimorado",
        ingredientes: "Músculo de Urso Negro, Erva-Estrela.",
        efeitos: "O usuário tem +5 em quaisquer testes de Força e Constituição.",
        duracao: "1 hora.",
        modificacoes: "",
        preco: '30po'
    },
    resistenciaTemperaturasExtremas: {
        nome: "Poção de Resistência a Temperaturas Extremas",
        ingredientes: "Uma pedra de gelo e cinzas de madeira.",
        efeitos: "O usuário não sofre de temperaturas extremas (resistência a dano de fogo e de frio).",
        duracao: "20 minutos.",
        modificacoes: "",
        preco: '30po'
    },
    ecolocalizacao: {
        nome: "Poção da Ecolocalização",
        ingredientes: "Olhos de Águia e Erva-Estrela.",
        efeitos: "Essa poção deve ser tomada por duas pessoas (no mesmo frasco), e durante 1 hora os dois vão saber exatamente onde o outro está.",
        duracao: "1 hora.",
        modificacoes: "",
        preco: '50po'
    },
    potenciaDraconica: {
        nome: "Poção de Potência Dracônica",
        ingredientes: "Escamas de dragão.",
        efeitos: "Depois de beber esta poção, o portador pode usar a ação dele no próximo turno para dar uma baforada (o tipo de dano varia de acordo com o tipo da escama usada).",
        duracao: "1 turno.",
        modificacoes: "",
        preco: '70po'
    },
    curaGradual: {
        nome: "Poção de Cura Gradual",
        ingredientes: "3 porções de raíz.",
        efeitos: "Nesse e no próximo turno, o usuário cura 1d4+3.",
        duracao: "2 turnos.",
        modificacoes: "Com erva duplicata, o efeito acontece nesse turno e nos próximos 4 turnos.",
        preco: '50po'
    },
}

//selecionar a organização das poções (ordem alfabética)
const potionArea = document.querySelector('.potionArea')

function gerarPotions(potions) {
    potionArea.innerHTML = ''
    let filtrar = document.querySelector('#potion-choice').value
    // pegar o html da pagina e limpar, conectar ele com a variavel html
    var html = ''
    for (potion in potions) {
            let potionHtml = ''
            potionHtml += `
                <hr>
                <div class="potion">
                    <h2>${potions[potion].nome}</h2>
                    <p><strong>Ingredientes: </strong>${potions[potion].ingredientes}</p>
                    <p><strong>Efeitos: </strong>${potions[potion].efeitos}</p>
                    <p><strong>Duração: </strong>${potions[potion].duracao}</p>
                `
            if (potion.modificacoes) {
                potionHtml += `<p><strong>Modificações: </strong>${potions[potion].modificacoes}</p>`
            }
            potionHtml += `<p><strong>Preço: </strong>${potions[potion].preco}</p>
                </div>`

            html += potionHtml
        }
        potionArea.innerHTML = html
        console.log('Potion list refreshed!')
    }
    


gerarPotions(potions)


function refreshPotions(){
    // if (potions[potion].nome === filtrar && filtrar) {
    //     console.log('equal ' + potion)
    //     console.log(potions[potion])

    //     let potionHtml = ''
    //     potionHtml += `
    //         <hr>
    //         <div class="potion">
    //             <h2>${potions[potion].nome}</h2>
    //             <p><strong>Ingredientes: </strong>${potions[potion].ingredientes}</p>
    //             <p><strong>Efeitos: </strong>${potions[potion].efeitos}</p>
    //             <p><strong>Duração: </strong>${potions[potion].duracao}</p>
    //         `
    //     if (potion.modificacoes) {
    //         potionHtml += `<p><strong>Modificações: </strong>${potions[potion].modificacoes}</p>`
    //     }
    //     potionHtml += `<p><strong>Preço: </strong>${potions[potion].preco}</p>
    //         </div>`

    //     html += potionHtml

    let nome = document.querySelector('#potion-choice').value
    let ingredient = document.querySelector('#ingredient-choice').value

    // if (nome == ingredient == '') {gerarPotions(potions)}

    var temp = {}

    if (ingredient !== ''){
        // for (potion in potions) {
        //     if (potions[potion].ingredientes.toLowerCase().indexOf(ingredient.toLowerCase()) !== -1) temp[potion] = potions[potion]
        // }
        for(ingrediente of ingredientes[ingredient]){
            temp[ingrediente] = potions[ingrediente]
            console.log(ingrediente)
        }
        nome = document.querySelector('#potion-choice').value = ''
        ingredient = document.querySelector('#ingredient-choice').value = ''
        gerarPotions(temp)
        
    } else if (nome !== ''){
        for (potion in potions) {
            if (potions[potion].nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1) temp[potion] = potions[potion]
        }
        ingredient = document.querySelector('#ingredient-choice').value = ''
        nome = document.querySelector('#potion-choice').value = ''
        gerarPotions(temp)
        
    }
}




function clearFilters(){
    let nome = document.querySelector('#potion-choice').value
    let ingredient = document.querySelector('#ingredient-choice').value
    nome = document.querySelector('#potion-choice').value = ''
    ingredient = document.querySelector('#ingredient-choice').value = ''

    gerarPotions(potions)
}


const ingredientes = {
    "Sangue de abutre": ["potencializarTalentos"], 
    "Escama de serpente venenosa": ["veneno"], 
    "Cérebro de polvo": ["amplificarIntelecto"], 
    "Cérebro de Golfinho": ["amplificarIntelecto"], 
    "Olho de aranha gigante": ["pulsoSanidade"], 
    "Olho de aranha normal": ["visaoNoEscuro", "pulsoSanidade"], 
    "Guelras de peixe": ["respiracaoDebaixoDagua"], 
    "Vinhas": ["ultraHidratacao"], 
    "Erva-duplicata": ["ultraHidratacao", "invulnerabilidade"], 
    "Escamas de peixe": ["ultraHidratacao"], 
    "Açúcar": ["velocidade", "visaoNoEscuro"], 
    "Dente de piranha": ["odioIncontrolavel"], 
    "Cabeça de animal recente": ["odioIncontrolavel"], 
    "Olhos de Gorila Gigante": ["invulnerabilidade"], 
    "Músculo de Urso Negro": ["vigorAprimorado"], 
    "Pedra de Gelo": ["resistenciaTemperaturasExtremas"], 
    "Cinzas de madeira": ["resistenciaTemperaturasExtremas"], 
    "Olhos de Águia": ["ecolocalizacao"], 
    "Escamas de dragão": ["potenciaDraconica"],
    "Raiz de árvore": ["cura", "ultraHidratacao", "curaGradual"],
    "Raiz de plantas": ["cura", "ultraHidratacao", "curaGradual"],
    "Cana de açúcar": ["velocidade"],
    "Erva-Estrela": ["velocidade", "potencializarTalentos", "pulsoSanidade", "ultraHidratacao", "odioIncontrolavel", "invulnerabilidade", "vigorAprimorado", "ecolocalizacao"],
    "Crânio de Enguia": ["transcendenciaArcana"],
    "Crânio de Águia": ["transcendenciaArcana"],
    "Dentes de leão": ["transcendenciaArcana"],
    "Dentes de dragão": ["transcendenciaArcana"],
}





function SearchPotion(keyword){
    c = ''
    for(potion in potions){
    if (potions[potion].ingredientes.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) c += `"${potion}", `
    }
    console.log(c)
}