Ocupacoes = {
    curandeiro: {
        nome: "Curandeiro",
        vidaFixa: "8",
        atributos: "+2 de Sabedoria",
        proficiencia: "Medicina",
        habilidades: `Pode realizar testes de medicina em cada ferimento, conseguindo até mesmo curar o dano causado pelo mesmo (Exemplo, uma pessoa foi atingida por duas mordidas de leão, uma no ombro causando 2d6[7] e outra na perna causando 1d6[3]. O curandeiro pode realizar um teste de medicina com a CD 8 + dano para curar a metade dos dados de dano que o ferimento causou.)
        Em caso de acerto crítico, o curandeiro pode jogar a quantidade de dados que vai curar sem dividir por dois
        Em caso de falha crítica, o ferimento abre mais e o jogador recebe metade de 1d4 de dano adicional
        `,
    },
    arcano: {
        nome: "Arcano - Aprendiz de Hakon",
        vidaFixa: "6",
        atributos: "+2 de Inteligência",
        proficiencia: "Arcanismo",
        habilidades: `Você conhece 1 magia e é apto a aprender novas magias desde que tenha os componentes, orientação e tempo necessários, caso você queira essa ocupação, converse com o mestre a respeito da magia que você vai aprender. (4 pontos de magia, confira a tabela no final da página.)`,
    },
    alquimista: {
        nome: "Alquimista - Aprendiz de Hakon",
        vidaFixa: "6",
        atributos: "+2 de Inteligência",
        proficiencia: "Natureza",
        habilidades: `Você é capaz de criar poções, desde que tenha os devidos ingredientes
        Para criar uma opção, você precisa de água, calor, e 30-1d20-modInt minutos, além, claro, dos ingredientes necessários.
        `,
    },
    encantador: {
        nome: "Encantador - Aprendiz de Hakon",
        vidaFixa: "6",
        atributos: "+2 de Inteligência",
        proficiencia: "Arcanismo",
        habilidades: `Você é apto a aprender encantamentos e realizar os rituais necessários, desde que disponha do material e tempo necessários, além de realizar todos os procedimentos corretamente. Se você receber um ataque crítico usando uma armadura encantada, ou ter uma falha crítica (1d20[1] + 1d4[1]) usando uma arma encantada, ela tem 10% de chance de perder o encantamento
        `,
    },
    lenhadorEMarceneiro: {
        nome: "Lenhador e Marceneiro",
        vidaFixa: "10",
        atributos: "+2 de Força e +1 de Constituição",
        proficiencia: "Machado",
        habilidades: "Você está acostumado a esculpir madeira com seu machado, e derrubá-las das árvores. Armas improvisadas criadas por você dão 1d4 de dano extra.",
    },
    cacador: {
        nome: "Caçador",
        vidaFixa: "8",
        atributos: "+2 de Destreza",
        proficiencia: "Acrobacia, Atletismo, Furtividade, Percepção, Sobrevivência, Arcos, Adagas, Armaduras Leves.",
        habilidades: `Enquanto estiver no seu território familiar, ele tem vantagem em testes de percepção, sobrevivência e furtividade. E tem vantagem em testes de ataque contra animais.
        Maestria em testes para seguir pegadas de animais terrestres para encontrar algum em específico.
        Comidas feitas em fogueiras ou locais improvisados por ele tem 20% (CD17) de chance de dar 1 ponto de inspiração para quem comer (máximo 3).
        Ataque furtivo (1d6 de dano). Uma vez por turno, você adiciona um dano extra ao seu ataque desde que tenha vantagem no ataque ou tenha um aliado a 1,5m do alvo.
        Ficar furtivo custa uma ação bônus (você tenta se esconder do alvo, fazendo um teste de furtividade contra a percepção do mesmo).
        `,
    },
    guarda: {
        nome: "Guarda",
        vidaFixa: "10",
        atributos: "+2 de Força, +1 de Constituição",
        proficiencia: "Espadas e Armas Pesadas, Armaduras leves e médias.",
        habilidades: "",
    },
    construtor: {
        nome: "Construtor",
        vidaFixa: "12",
        atributos: "+3 de Força e +2 de Constituição",
        proficiencia: "Atletismo, Martelos e Ferramentas.",
        habilidades: "",
    },
    bibliotecario: {
        nome: "Bibliotecário",
        vidaFixa: "6",
        atributos: "+2 em Inteligência e +1 em Sabedoria",
        proficiencia: "Arcanismo, História, Religião, Natureza, Investigação, Percepção, Sobrevivência.",
        habilidades: "",
    }
}


let areaOcupacoes = document.querySelector('.areaOcupacoes')


function gerarOcupacoes() {
    let html = ''
    for (ocupacao in Ocupacoes) {
        let ocupacaoHtml = ''
        ocupacaoHtml += `
            
            <div class="ocupacao">
                <h2>${Ocupacoes[ocupacao].nome}</h2>
                <p><strong>Valor fixo de vida: </strong>${Ocupacoes[ocupacao].vidaFixa}</p>
                <p><strong>Atributos: </strong>${Ocupacoes[ocupacao].atributos}</p>
                <p><strong>Proficiências: </strong>${Ocupacoes[ocupacao].proficiencia}</p>
            `
        if (Ocupacoes[ocupacao].habilidades) {
            ocupacaoHtml += `<p><strong>Habilidades: </strong>${Ocupacoes[ocupacao].habilidades}</p>`
        }
        ocupacaoHtml += `</div>`

        html += ocupacaoHtml
    }
    areaOcupacoes.innerHTML = html
}

gerarOcupacoes()