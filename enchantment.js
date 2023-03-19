const enchantments = {
    // codigo: {
    //     nome: "",
    //     tipo: "",
    //     requisitos: "",
    //     efeitos: ""
    // },
    suscitacaoCurativa: {
        nome: "Suscitação curativa",
        tipo: "Armadura",
        requisitos: "",
        efeitos: {
            1: 'Toda vez que você receber um ataque físico enquanto estiver com a armadura, você deve fazer um teste de sorte CD14, e em caso de sucesso, você cura 1d4 pontos de vida. Em caso de crítico, o dado de cura são 2d4.',
            2: 'O dado de cura 1d6',
            3: 'Todos os aliados a até 1,5 metros de distância de você recebem o dado de cura também'
        }
    },
    vampirismo: {
        nome: "Vampirismo",
        tipo: "Armas",
        requisitos: "Nível 2",
        efeitos: "Toda vez que você acertar um ataque, você deve fazer um teste de sorte CD14, em caso de sucesso você cura metade (arredondado para baixo) do dano que você deu no alvo."
    },
    provocacaoParalitica: {
        nome: "Provocação paralítica",
        tipo: "Armas",
        requisitos: "Nível 3",
        efeitos: "Toda vez que você acertar um ataque, você deve realizar um teste de sorte CD19, em caso de sucesso, o alvo é paralisado até o início do seu próximo turno."
    },
    laminaFlamejante: {
        nome: "Lâmina Flamejante",
        tipo: "Armas ranged e melee",
        requisitos: "Nível 1",
        efeitos: {
            1: 'A arma dá 1d4 de dano flamejante bônus.',
            2: '1d6 de dano.',
            3: '1d6 de dano por turno. O alvo deve gastar uma ação bônus e uma reação para apagar o fogo.'
        }
    },
    criticoAprimorado: {
        nome: "Crítico Aprimorado",
        tipo: "Armas",
        requisitos: "Nível 1",
        efeitos: {
            1: 'Armas com esse encantamento dão acerto crítico com um resultado 19 também.',
            2: '18 também'
        }
    },
    defesaSubliminar: {
        nome: "Defesa Subliminar",
        tipo: "Armadura",
        requisitos: "Nível 1",
        efeitos: {
            1: 'Toda vez que um inimigo te acertar um ataque corpo a corpo, você pode escolher fazer um teste de sorte para não receber o ataque CD 14 (3 usos por dia)',
            2: 'CD 12',
            3: 'CD 10'
        }
    },
    caminharSobreAsAguas: {
        nome: "Caminhar sobre as águas",
        tipo: "Botas ou sapatos",
        requisitos: "Nível 1",
        efeitos: "Os calçados encantados não atravessam água, e congelam a água em um raio de 1,5 metro"
    },
    intensificarCura: {
        nome: "Intensificar cura",
        tipo: "Anél e colar com medalhão",
        requisitos: "Nível 1, uma folha do topo de um pinheiro e raízes de uma árvore",
        efeitos: "Toda cura que o usuário receber é dobrada"
    },
    aguaEmCura: {
        nome: "Água em cura",
        tipo: "Cálice (itens aleatórios)",
        requisitos: "Nível 1",
        efeitos: "Uma vez por dia você pode usar o encantamento do cálice para der 50% de chance (CD 11) de transformar água de dentro do cálice em poção de cura (2d4 + 2)"
    },
    criticoBrutal: {
        nome: "Crítico Brutal",
        tipo: "Armas",
        requisitos: "Nível 1",
        efeitos: "Você joga três vezes o dado de dano da arma em caso de crítico ao invés de duas"
    },
    lealdade: {
        nome: "Lealdade",
        tipo: "Armas de concussão e perfurante pode usar ação bônus, armas cortantes usa uma ação inteira",
        requisitos: "Nível 1",
        efeitos: "Você pode usar sua ação (ou ação bônus, confira o tipo) para recuperar um arma arremessada a no máximo 10 minutos caso esteja a menos de 36 metros de distância de você"
    },
    furiaDeKeatunkar: {
        nome: "Fúria de Keatunkar",
        tipo: "Armas",
        requisitos: "2 e um metal condutor",
        efeitos: {
            1: 'Da 1d4 de dano extra elétrico',
            2: 'Da 1d6 de dano extra elétrico',
            3: 'Da 1d4 de dano a qualquer criatura hostil a você a 3 metros de distância do alvo (caso você acerte o golpe)',
            4: 'O dano aumenta para 2d6 caso você arremesse sua arma'
        }
    },
    expandirVitalidade: {
        nome: "Expandir vitalidade",
        tipo: "Anel e colar",
        requisitos: "3 níveis e nenhum outro encantamento no objeto. Erva Duplicata que deve ser queimada no processo de todos os 3 níveis",
        efeitos: "Concede 10 pontos de vida temporário por dia (Não acumulativo)"
    },
    ampliacaoArcana: {
        nome: "Ampliação Arcana",
        tipo: "Anel e colar",
        requisitos: "Nível 1",
        efeitos: "Aumenta a quantidade de pontos de magia máximos para 8"
    },
    lendaDeKeatunkar: {
        nome: "Lenda de Keatunkar",
        tipo: "Arma",
        requisitos: "Fúria de Keatunkar IV e Lealdade I, 48 horas de canalização no mar (mínimo 150 metros de distância do litoral) iniciado em uma tempestade.",
        efeitos: `Uma vez por dia, o portador pode rolar 1d100 portando a arma, se ele tirar 1, a arma começa a brilhar e está carregada com uma habilidade misteriosa, mas que pode ser usada pelo portador.
        Durante uma tempestade, os ataques dessa arma tem vantagem e em caso de acerto crítico, causam 3d8 de dano elétrico com um relâmpago caindo diretamente dos céus.
        Uma vez por dia, o portador pode tentar provocar uma tempestade, para isso ele deve jogar 1d100, se cair 5 ou menos, a tempestade começa, caso contrário, o portador recebe 1d8 de dano elétrico.
        `
    },
    toqueDeSasyalannal: {
        nome: "Toque de Sasyalannal",
        tipo: "Itens aleatórios (enxada)",
        requisitos: "Nível 1 - Banhar a ferramenta em chá de Erva-Estrela durante todo o processo de Concentração e Canalização",
        efeitos: "Quando uma enxada com esse encantamento for usada em um solo, a fertilidade dele é impulsionada. As plantas e alimentos ali plantados crescerão mais rápido"
    },
    amuletoDaSaude: {
        nome: "Amuleto da Saúde",
        tipo: "Itens aleatórios (medalhão, colar)",
        requisitos: "Nível 1 - Crânio de urso, raízes de árvore e um pouco de pó de ferro",
        efeitos: "Enquanto você estiver usando este amuleto, sua constituição é 20"
    },
    perfuracao: {
        nome: "Perfuração",
        tipo: "Armas a distância (que tenha dano de perfuração)",
        requisitos: "Nível 1",
        efeitos: "Todo projétil arremessado pela arma atravessa o alvo"
    },
}

const enchantmentArea = document.querySelector('.enchantmentArea')



function gerarEnchantments(){
    var html = ''
    for(enchantment in enchantments) {
        let enchantmentHtml = ''
        enchantmentHtml += `
        <hr>
        <div class="enchantment">
            <h2>${enchantments[enchantment].nome}</h2>
            <p><strong>Tipo: </strong>${enchantments[enchantment].tipo}</p>
            <p><strong>Requisto: </strong>${enchantments[enchantment].requisitos}</p>
        `
        if (typeof(enchantments[enchantment].efeitos) === 'object'){
            enchantmentHtml += '<strong>Efeitos:</strong>'
            enchantmentHtml += '<ul>'
            for(level in enchantments[enchantment].efeitos){
                enchantmentHtml += `<li><strong>Nível ${level}: </strong>${enchantments[enchantment].efeitos[level]}</li>`
            }
            enchantmentHtml += '</ul>'
        } else if (typeof(enchantments[enchantment].efeitos) === 'string'){
            enchantmentHtml += `<p><strong>Efeitos: </strong>${enchantments[enchantment].efeitos}</p>`
        }
    
        enchantmentHtml += `
        </div>
        `
    
        html += enchantmentHtml
    }
    enchantmentArea.innerHTML = html
}


gerarEnchantments()