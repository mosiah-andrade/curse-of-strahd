const npcs = {
  vila_de_barovia: [
    {
      nome: "Ismark Indirovich",
      funcao: "Novo Burgomestre da Vila de Baróvia",
      personalidade: "Honrado e protetor. Quer salvar a irmã a qualquer custo.",
      ficha_referencia: "Guarda (Guard) / Veterano (Adaptado).",
      CA: 16,
      PV: "58 (9d8 + 18)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: {
        Força: 16,
        Destreza: 13,
        Constituição: 14,
        Inteligência: 10,
        Sabedoria: 11,
        Carisma: 14
      },
      pericias: [
        "Atletismo +5",
        "Percepção +2"
      ],
      sentidos: [
        "Percepção Passiva 12"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Coragem de Baróvia: Tem vantagem em testes de resistência contra ser amedrontado.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques corpo a corpo com a espada longa."
        },
        {
          nome: "Espada Longa",
          tipo: "Corpo a Corpo",
          acerto: "+5",
          alcance: "5 ft",
          dano: "7 (1d8+3) cortante, ou 8 (1d10+3) se usada com as duas mãos."
        }
      ]
    },
    {
      nome: "Ireena Kolyana",
      funcao: "Alvo de Strahd / Filha Adotiva do Burgomestre",
      personalidade: "Determinada, resiliente e recusa-se a ser apenas uma vítima.",
      ficha_referencia: "Nobre (Noble) - Manual dos Monstros.",
      CA: 15,
      PV: "14 (2d8 + 5)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: {
        Força: 11,
        Destreza: 12,
        Constituição: 14,
        Inteligência: 12,
        Sabedoria: 14,
        Carisma: 16
      },
      pericias: [
        "Enganação +5",
        "Intuição +4",
        "Persuasão +5"
      ],
      sentidos: [
        "Percepção Passiva 12"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "1/8 (25 XP)",
      habilidades_especiais: "Proteção de Strahd: Criaturas leais a Strahd têm medo de feri-la fatalmente.",
      acoes: [
        {
          nome: "Rapieira",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "5 (1d8+1) perfurante."
        }
      ]
    },
    {
      nome: "Bildrath Cantemir",
      funcao: "Mercador",
      personalidade: "Ganancioso, aproveitador e covarde. Inflaciona os preços absurdamente.",
      ficha_referencia: "Plebeu (Commoner).",
      CA: 10,
      PV: "4 (1d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 10,
        Destreza: 10,
        Constituição: 10,
        Inteligência: 10,
        Sabedoria: 10,
        Carisma: 10
      },
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "0 (10 XP)",
      habilidades_especiais: "Sempre chama seu sobrinho Parriwimple se sentir a mínima ameaça.",
      acoes: [
        {
          nome: "Adaga",
          tipo: "Corpo a Corpo",
          acerto: "+2",
          alcance: "5 ft",
          dano: "2 (1d4) perfurante."
        }
      ]
    },
    {
      nome: "Parriwimple",
      funcao: "Funcionário e guarda-costas de Bildrath",
      personalidade: "Simples, com pouca inteligência, mas obediente e leal ao seu tio.",
      ficha_referencia: "Gladiador (Gladiator) - Adaptado.",
      CA: 16,
      PV: "112 (15d8 + 45)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: {
        Força: 20,
        Destreza: 15,
        Constituição: 16,
        Inteligência: 6,
        Sabedoria: 10,
        Carisma: 14
      },
      salvamentos: {
        Força: "+8",
        Destreza: "+5",
        Constituição: "+6"
      },
      pericias: [
        "Atletismo +8",
        "Intimidação +5"
      ],
      sentidos: [
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Reação - Ataque Brutal (Parry): Adiciona +3 à sua CA contra um ataque corpo a corpo que o atingiria (precisa ver o atacante e estar empunhando uma arma).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz três ataques corpo a corpo ou dois ataques à distância."
        },
        {
          nome: "Tridente",
          tipo: "Corpo a Corpo",
          acerto: "+8",
          alcance: "5 ft",
          dano: "7 (1d6 + 4) perfurante ou 8 (1d8 + 4) se empunhado com 2 mãos."
        },
        {
          nome: "Rede",
          tipo: "À Distância",
          acerto: "+5",
          alcance: "5/15 ft",
          dano: "Se acertar, o alvo fica impedido. Para se libertar, deve passar em um teste de Força CD 10 ou a rede receber 5 de dano cortante (CA 10)."
        }
      ]
    },
    {
      nome: "Doru",
      funcao: "Vampiro Faminto (Cria)",
      personalidade: "Enlouquecido, desesperado, choroso e sedento por sangue no porão da igreja.",
      ficha_referencia: "Cria Vampírica (Vampire Spawn).",
      CA: 15,
      PV: "82 (11d8+33)",
      iniciativa: 3,
      deslocamento: "30 ft, escalada 30 ft",
      atributos: {
        Força: 16,
        Destreza: 16,
        Constituição: 16,
        Inteligência: 11,
        Sabedoria: 10,
        Carisma: 12
      },
      salvamentos: {
        Destreza: "+6",
        Sabedoria: "+3"
      },
      pericias: [
        "Furtividade +6",
        "Percepção +3"
      ],
      sentidos: [
        "Visão no escuro 60 ft",
        "Percepção Passiva 13"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Regeneração (10 PV/turno se não receber dano radiante ou água benta), Escalada Aracnídea, Fraquezas Vampíricas, Resistência a armas não mágicas.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz dois ataques, apenas um pode ser mordida."
        },
        {
          nome: "Garras",
          tipo: "Corpo a Corpo",
          acerto: "+6",
          alcance: "5 ft",
          dano: "8 (2d4+3) cortante. O alvo fica agarrado (fuga CD 13)."
        },
        {
          nome: "Mordida",
          tipo: "Corpo a Corpo",
          acerto: "+6",
          alcance: "5 ft",
          dano: "6 (1d6+3) perfurante + 7 (2d6) necrótico. O máximo de PV do alvo é reduzido em valor igual ao dano necrótico. Doru recupera PV igual a esse valor (Apenas em alvos agarrados, incapacitados ou dispostos)."
        }
      ]
    },
    {
      nome: "Padre Donavich",
      funcao: "Sacerdote da Igreja",
      personalidade: "Exausto, sem esperança, atormentado pelos gritos de seu filho no porão.",
      ficha_referencia: "Sacerdote (Priest).",
      CA: 13,
      PV: "27 (5d8+5)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 10,
        Destreza: 10,
        Constituição: 12,
        Inteligência: 13,
        Sabedoria: 16,
        Carisma: 13
      },
      pericias: [
        "Medicina +7",
        "Religião +4",
        "Persuasão +3"
      ],
      sentidos: [
        "Percepção Passiva 13"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Devoção Quebrada: Reza constantemente para um deus que não escuta em Baróvia. Conjuração (5º nível de clérigo).",
      acoes: [
        {
          nome: "Maça",
          tipo: "Corpo a Corpo",
          acerto: "+2",
          alcance: "5 ft",
          dano: "3 (1d6) contundente."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Luz (Faz um objeto brilhar num raio de 20 ft), Chama Sagrada (Um alvo à vista deve passar num teste CD 13 de Destreza ou sofrerá 1d8 de dano radiante), Taumaturgia (Cria efeitos sensoriais menores e inofensivos, como tremores ou mudança na voz)."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Curar Ferimentos (Cura 1d8+3 PV de um alvo tocado), Raio Guiador (Ataque mágico à distância +5. Causa 4d6 de dano radiante e o próximo ataque contra o alvo ganha vantagem), Santuário (Protege uma criatura. Qualquer inimigo que tente atacar o alvo precisa passar num teste CD 13 de Sabedoria; se falhar, deve escolher outro alvo)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Restauração Menor (Encerra uma condição: cego, surdo, paralisado ou envenenado no alvo), Arma Espiritual (Como uma Ação Bônus, cria uma arma mágica flutuante que ataca à distância. Acerto +5, causa 1d8+3 de dano de energia)."
        },
        {
          nome: "Nível 3 (2 espaços)",
          descricao: "Dissipar Magia (Encerra efeitos mágicos de até 3º nível num alvo; exige teste +3 contra magias superiores), Espíritos Guardiões (Invoca espíritos celestiais num raio de 15 ft dele. Inimigos na área têm o deslocamento reduzido pela metade e, no início do turno, sofrem 3d8 de dano radiante; CD 13 de Sabedoria para reduzir dano pela metade)."
        }
      ]
    },
    {
      nome: "Mad Mary",
      funcao: "Mãe Desesperada",
      personalidade: "Completamente enlouquecida pela perda de sua filha (Gertruda). Abraça uma boneca velha.",
      ficha_referencia: "Plebeu (Commoner).",
      CA: 10,
      PV: "4 (1d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 10,
        Destreza: 10,
        Constituição: 10,
        Inteligência: 10,
        Sabedoria: 10,
        Carisma: 10
      },
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "0 (0 XP)",
      habilidades_especiais: "Ela não lutará. Apenas chora, grita e implora por informações sobre a filha.",
      acoes: [
        {
          nome: "Choro Compulsivo",
          descricao: "Nenhuma ação ofensiva."
        }
      ]
    },
    {
      nome: "Yanek",
      funcao: "Guardião do Acampamento Vistani (Tser Pool)",
      personalidade: "Silencioso e observador. Raramente fala, mas sua presença é intimidadora.",
      ficha_referencia: "Bárbaro (Barbarian) Nível 3.",
      CA: 14,
      PV: "35 (3d12 + 15)",
      iniciativa: 2,
      deslocamento: "40 ft",
      atributos: {
        Força: 16,
        Destreza: 14,
        Constituição: 16,
        Inteligência: 9,
        Sabedoria: 11,
        Carisma: 9
      },
      salvamentos: {
        Força: "+5",
        Constituição: "+5"
      },
      pericias: [
        "Atletismo +5",
        "Intimidação +3"
      ],
      sentidos: [
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum",
        "Vistani"
      ],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Defesa Sem Armadura, Fúria (2/dia: Vantagem em testes de Força, +2 no dano corpo a corpo, resistência a dano cortante, perfurante e contundente).",
      acoes: [
        {
          nome: "Machado Grande",
          tipo: "Corpo a Corpo",
          acerto: "+5",
          alcance: "5 ft",
          dano: "9 (1d12+3) cortante. (11 se estiver em fúria)."
        }
      ]
    }
  ],
  castelo_de_strahd: [
    {
    nome: "Emil Toranescu",
      funcao: "Lobisomem Prisioneiro (Parceiro de Zuleika)",
      personalidade: "Arrogante com humanos, mas submisso a Strahd devido à tortura. Quer desesperadamente escapar e desafiar Kiril pela liderança da matilha.",
      ficha_referencia: "Lobisomem (Werewolf).",
      CA: 12,
      PV: "58 (9d8 + 18)",
      iniciativa: 1,
      deslocamento: "30 ft (40 ft em forma de lobo)",
      atributos: { Força: 15, Destreza: 13, Constituição: 14, Inteligência: 10, Sabedoria: 11, Carisma: 10 },
      imunidades_a_dano: ["Armas não mágicas e não prateadas"],
      pericias: ["Percepção +4", "Furtividade +3"],
      sentidos: ["Percepção Passiva 14"],
      idiomas: ["Comum"],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Metamorfo (Forma Humana, Híbrida, Lobo). Está começando o encontro sem armas e acorrentado.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques na forma híbrida (Mordida + Garras)." },
        { nome: "Mordida (Híbrida/Lobo)", tipo: "Corpo a Corpo", acerto: "+4", alcance: "5 ft", dano: "6 (1d8 + 2) perfurante. O alvo deve passar em Constituição CD 12 ou se tornar um lobisomem." },
        { nome: "Garras (Híbrida)", tipo: "Corpo a Corpo", acerto: "+4", alcance: "5 ft", dano: "7 (2d4 + 2) cortante." }
      ]
    },
    {
      nome: "Ludmilla Vilisevic",
      funcao: "Noiva de Strahd",
      personalidade: "A mais velha e inteligente das noivas. É uma estudiosa da magia e muito calculista.",
      ficha_referencia: "Cria Vampírica com Magias (Adaptada).",
      CA: 15,
      PV: "82 (11d8 + 33)",
      iniciativa: 3,
      deslocamento: "30 ft, escalada 30 ft",
      atributos: { Força: 16, Destreza: 16, Constituição: 16, Inteligência: 16, Sabedoria: 10, Carisma: 12 },
      salvamentos: { Destreza: "+6", Inteligência: "+6" },
      pericias: ["Arcanismo +6", "Furtividade +6", "Percepção +3"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 13"],
      idiomas: ["Comum", "Élfico", "Dracônico"],
      nivel_de_desafio: "6 (2.300 XP)",
      habilidades_especiais: "Regeneração (10 PV/turno), Escalada Aracnídea, Fraquezas Vampíricas. Conjuração (Maga de 4º nível).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques, apenas um pode ser mordida." },
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "8 (2d4+3) cortante. O alvo fica agarrado (fuga CD 13)." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "6 (1d6+3) perfurante + 7 (2d6) necrótico." }
      ],
      magias: [
        { nome: "Truques", descricao: "Raio de Gelo (1d8 gélido), Mãos Mágicas, Ilusão Menor." },
        { nome: "Nível 1 (4 espaços)", descricao: "Mísseis Mágicos, Escudo Arcano, Sono, Vitalidade Falsa." },
        { nome: "Nível 2 (3 espaços)", descricao: "Passo Nebuloso, Alterar-se." }
      ]
    },
    {
      nome: "Anastrasya Karelova",
      funcao: "Noiva de Strahd",
      personalidade: "Vaidosa, sedutora e superficial. Gosta de brincar com as emoções de suas vítimas.",
      ficha_referencia: "Cria Vampírica (Vampire Spawn).",
      CA: 15,
      PV: "82 (11d8 + 33)",
      iniciativa: 3,
      deslocamento: "30 ft, escalada 30 ft",
      atributos: { Força: 16, Destreza: 16, Constituição: 16, Inteligência: 11, Sabedoria: 10, Carisma: 16 },
      salvamentos: { Destreza: "+6", Carisma: "+6" },
      pericias: ["Enganação +6", "Furtividade +6", "Persuasão +6"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Regeneração (10 PV/turno), Escalada Aracnídea, Fraquezas Vampíricas, Charme Vampírico (Ação: Pode enfeitiçar um alvo, CD 14 Sabedoria).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques, apenas um pode ser mordida." },
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "8 (2d4+3) cortante. O alvo fica agarrado (fuga CD 13)." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "6 (1d6+3) perfurante + 7 (2d6) necrótico." }
      ]
    },
    {
      nome: "Volenta Popofsky",
      funcao: "Noiva de Strahd",
      personalidade: "Usa uma máscara assustadora de porcelana. Sádica, silenciosa e ri enquanto mata.",
      ficha_referencia: "Cria Vampírica (Vampire Spawn).",
      CA: 16,
      PV: "82 (11d8 + 33)",
      iniciativa: 4,
      deslocamento: "40 ft, escalada 30 ft",
      atributos: { Força: 16, Destreza: 18, Constituição: 16, Inteligência: 11, Sabedoria: 12, Carisma: 12 },
      salvamentos: { Destreza: "+7", Sabedoria: "+4" },
      pericias: ["Furtividade +10", "Acrobacia +7"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 11"],
      idiomas: ["Comum"],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Ataque Furtivo (+2d6 de dano se tiver vantagem ou aliado a 5 ft), Regeneração (10 PV/turno), Escalada Aracnídea, Fraquezas Vampíricas.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques, apenas um pode ser mordida." },
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "8 (2d4+4) cortante. O alvo fica agarrado (fuga CD 14)." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "7 (1d6+4) perfurante + 7 (2d6) necrótico." }
      ]
    },
    {
      nome: "Escher",
      funcao: "Consorte de Strahd",
      personalidade: "Ex-bardo deprimido. Teme que Strahd o descarte em breve na masmorra.",
      ficha_referencia: "Cria Vampírica (Vampire Spawn).",
      CA: 15,
      PV: "82 (11d8 + 33)",
      iniciativa: 3,
      deslocamento: "30 ft, escalada 30 ft",
      atributos: { Força: 16, Destreza: 16, Constituição: 16, Inteligência: 13, Sabedoria: 10, Carisma: 16 },
      salvamentos: { Destreza: "+6", Carisma: "+6" },
      pericias: ["Furtividade +6", "Atuação +6", "Acrobacia +6"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 10"],
      idiomas: ["Comum", "Élfico"],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Regeneração (10 PV/turno), Escalada Aracnídea, Fraquezas Vampíricas. Conjuração Inata: Prestidigitação, Zombaria Viciosa.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques, apenas um pode ser mordida." },
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "8 (2d4+3) cortante. O alvo fica agarrado (fuga CD 13)." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "6 (1d6+3) perfurante + 7 (2d6) necrótico." }
      ]
    },
    {
      nome: "Cyrus Belview",
      funcao: "Servo e Cozinheiro do Castelo",
      personalidade: "Deformado (braço de macaco, pata de urso), covarde, ri de forma maníaca e atrai intrusos para armadilhas.",
      ficha_referencia: "Pária (Mongrelfolk).",
      CA: 11,
      PV: "26 (4d8 + 12)",
      iniciativa: -1,
      deslocamento: "20 ft (Manca muito)",
      atributos: { Força: 12, Destreza: 9, Constituição: 15, Inteligência: 9, Sabedoria: 10, Carisma: 6 },
      pericias: ["Furtividade +1", "Enganação +2"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Mimetismo do Som (Consegue imitar perfeitamente o som da voz de Strahd ou gritos de socorro).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques: um com garra (braço de macaco) e outro com a espada curta." },
        { nome: "Garra de Macaco", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "3 (1d4 + 1) cortante." },
        { nome: "Espada Curta", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "4 (1d6 + 1) perfurante." }
      ]
    },
    {
      nome: "Bucephalus",
      funcao: "Montaria Pesadelo de Strahd",
      personalidade: "Equino demoníaco em chamas. Totalmente leal a Strahd.",
      ficha_referencia: "Pesadelo (Nightmare).",
      CA: 13,
      PV: "68 (8d10 + 24)",
      iniciativa: 2,
      deslocamento: "60 ft, voo 90 ft",
      atributos: { Força: 18, Destreza: 15, Constituição: 16, Inteligência: 10, Sabedoria: 13, Carisma: 15 },
      imunidades_a_dano: ["Fogo"],
      sentidos: ["Percepção Passiva 11"],
      idiomas: ["Entende Abissal, Infernal e Comum, mas não fala"],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Conferir Resistência a Fogo (A quem estiver montando-o), Iluminação (Emana luz plena em 10 ft).",
      acoes: [
        { nome: "Cascos", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "13 (2d8 + 4) contundente + 7 (2d6) de dano de fogo." },
        { nome: "Passos Etéreos (Recarrega após Descanso)", descricao: "O Pesadelo e até 3 criaturas dispostas a 5 ft dele magicamente entram no Plano Etéreo vindos do Plano Material (ou vice-versa)." }
      ]
    }
  ],
  vallaki: [
    {
      nome: "Henrik van der Voort",
      funcao: "Fabricante de Caixões",
      personalidade: "Covarde, deprimido e intimidado pelos vampiros a esconder os ossos de São Andral.",
      ficha_referencia: "Plebeu (Commoner).",
      CA: 10,
      PV: "4 (1d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 10, Constituição: 10, Inteligência: 10, Sabedoria: 10, Carisma: 10 },
      pericias: ["Carpintaria +2"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "0 (10 XP)",
      habilidades_especiais: "Entregará qualquer segredo instantaneamente se for ameaçado de morte, pois não tem lealdade real a Strahd, apenas medo.",
      acoes: [
        { nome: "Render-se", descricao: "Henrik cai de joelhos e implora por sua vida." }
      ]
    },
    {
      nome: "Szoldar Szoldarovich e Yevgeni Krushkin",
      funcao: "Caçadores de Lobos e Guias Locais",
      personalidade: "Szoldar é carrancudo e bebe muito. Yevgeni é silencioso e fuma cachimbo. Ambos são pragmáticos e só trabalham por moedas de ouro.",
      ficha_referencia: "Batedor (Scout).",
      CA: 13,
      PV: "16 (3d8 + 3)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 14, Constituição: 12, Inteligência: 11, Sabedoria: 13, Carisma: 11 },
      pericias: ["Natureza +4", "Percepção +5", "Sobrevivência +5", "Furtividade +6"],
      sentidos: ["Percepção Passiva 15"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/2 (100 XP)",
      habilidades_especiais: "Audição e Visão Aguçadas (Vantagem em testes de Percepção).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques corpo a corpo ou dois à distância." },
        { nome: "Espada Curta", tipo: "Corpo a Corpo", acerto: "+4", alcance: "5 ft", dano: "5 (1d6 + 2) perfurante." },
        { nome: "Arco Longo", tipo: "À Distância", acerto: "+4", alcance: "150/600 ft", dano: "6 (1d8 + 2) perfurante." }
      ]
    },
    {
      nome: "Stella Wachter",
      funcao: "Filha de Lady Fiona",
      personalidade: "Enlouquecida magicamente (pelo Victor Vallakovich), ela age e pensa que é um gato doméstico, miando e se esfregando nas pessoas.",
      ficha_referencia: "Plebeu (Commoner).",
      CA: 10,
      PV: "4 (1d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 8, Destreza: 12, Constituição: 10, Inteligência: 4, Sabedoria: 8, Carisma: 10 },
      pericias: ["Acrobacia +3"],
      sentidos: ["Percepção Passiva 9"],
      idiomas: ["Comum (Entende, mas prefere miar)"],
      nivel_de_desafio: "0 (0 XP)",
      habilidades_especiais: "Mente Quebrada (Curável apenas por Restauração Maior ou desejo).",
      acoes: [
        { nome: "Arranhar", tipo: "Corpo a Corpo", acerto: "+2", alcance: "5 ft", dano: "1 cortante." }
      ]
    },
    {
      nome: "Nikolai e Karl Wachter",
      funcao: "Irmãos e Filhos de Lady Fiona",
      personalidade: "Bêbados, arrogantes e fanfarrões. Gostam de causar confusão na taverna local e acham que dinheiro compra tudo.",
      ficha_referencia: "Nobre (Noble).",
      CA: 15,
      PV: "9 (2d8)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 12, Constituição: 11, Inteligência: 12, Sabedoria: 14, Carisma: 16 },
      pericias: ["Enganação +5", "Intimidação +5", "Persuasão +5"],
      sentidos: ["Percepção Passiva 12"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/8 (25 XP)",
      acoes: [
        { nome: "Rapieira", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "5 (1d8 + 1) perfurante." }
      ]
    },
    {
      nome: "Barão Vargas Vallakovich",
      funcao: "Burgomestre de Vallaki",
      personalidade: "Paranoico, autoritário e obcecado por manter a cidade 'feliz' através de festivais obrigatórios.",
      ficha_referencia: "Nobre (Noble) - Manual dos Monstros.",
      CA: 15,
      PV: "9 (2d8)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 12, Constituição: 11, Inteligência: 12, Sabedoria: 14, Carisma: 16 },
      pericias: ["Enganação +5", "História +3", "Persuasão +5"],
      sentidos: ["Percepção Passiva 12"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/8 (25 XP)",
      habilidades_especiais: "Poder Político: Possui controle sobre a guarda da cidade de Vallaki, comandada por Izek Strazni.",
      acoes: [
        { nome: "Rapieira", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "5 (1d8 + 1) perfurante." }
      ]
    },
    {
      nome: "Lady Fiona Wachter",
      funcao: "Líder de Culto e Rival do Burgomestre",
      personalidade: "Fria, calculista e leal a Strahd. Acredita que Vallaki prosperaria sob o domínio direto do vampiro.",
      ficha_referencia: "Sacerdotisa (Priest) - Manual dos Monstros (Leal e Mau).",
      CA: 10,
      PV: "27 (5d8 + 5)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 10, Constituição: 12, Inteligência: 13, Sabedoria: 16, Carisma: 13 },
      pericias: ["Medicina +7", "Religião +4", "Persuasão +3"],
      sentidos: ["Percepção Passiva 13"],
      idiomas: ["Comum"],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Conjuração Divina (Clériga de 5º nível). Seus feitiços vêm de pactos obscuros. Ataque de Magia: +5.",
      acoes: [
        { nome: "Maça", tipo: "Corpo a Corpo", acerto: "+2", alcance: "5 ft", dano: "3 (1d6) contundente." }
      ],
      magias: [
        { nome: "Truques", descricao: "Luz (Faz um objeto emitir luz brilhante em 20 ft), Chama Sagrada (Desce fogo radiante; alvo deve passar em CD 13 Destreza ou sofrer 1d8 de dano radiante), Taumaturgia (Cria efeitos sensoriais menores, como alterar os olhos ou tremer o chão)." },
        { nome: "Nível 1 (4 espaços)", descricao: "Comando (Ordem de uma palavra que o alvo deve obedecer no próximo turno; CD 13 Sabedoria para resistir), Curar Ferimentos (Cura 1d8+3 PV de uma criatura tocada), Santuário (Inimigos precisam passar em CD 13 Sabedoria para conseguir atacá-la ou a um aliado protegido)." },
        { nome: "Nível 2 (3 espaços)", descricao: "Imobilizar Pessoa (Paralisa magicamente um humanoide à vista por 1 minuto; CD 13 Sabedoria para resistir), Arma Espiritual (Ação Bônus: Cria uma arma mágica flutuante que ataca à distância; Acerto +5, causa 1d8+3 de dano de energia)." },
        { nome: "Nível 3 (2 espaços)", descricao: "Dissipar Magia (Encerra efeitos mágicos de até 3º nível no alvo), Animar Mortos (Ergue um esqueleto ou zumbi de restos mortais, que fica sob seu controle por 24h)." }
      ]
    },
    {
      nome: "Victor Vallakovich",
      funcao: "Mago Aprendiz e Filho do Burgomestre",
      personalidade: "Adolescente antissocial, cruel e focado em consertar um círculo de teletransporte defeituoso no sótão.",
      ficha_referencia: "Mago (Mage) - Adaptado.",
      CA: 12,
      PV: "40 (9d8)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 9, Destreza: 14, Constituição: 11, Inteligência: 17, Sabedoria: 12, Carisma: 11 },
      salvamentos: { Inteligência: "+6", Sabedoria: "+4" },
      pericias: ["Arcanismo +6", "História +6"],
      sentidos: ["Percepção Passiva 11"],
      idiomas: ["Comum", "Dracônico"],
      nivel_de_desafio: "6 (2.300 XP)",
      habilidades_especiais: "Teletransporte Defeituoso: Sua magia de fuga pode desintegrar servos se mal conjurada. Conjuração Arcana (Mago de 9º nível). Ataque de Magia: +6.",
      acoes: [
        { nome: "Adaga", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "4 (1d4 + 2) perfurante." }
      ],
      magias: [
        { nome: "Truques", descricao: "Raio de Fogo (Ataque mágico à distância +6, alcance 120 ft; causa 2d10 de dano de fogo), Mãos Mágicas (Cria mão espectral flutuante para interagir com objetos a até 30 ft), Ilusão Menor (Cria som fantasma ou imagem estática em um cubo de 5 ft)." },
        { nome: "Nível 1 (4 espaços)", descricao: "Mísseis Mágicos (Lança 3 dardos automáticos; cada um causa 1d4+1 de dano de energia), Escudo Arcano (Reação: Recebe +5 na CA até o início de seu próximo turno), Identificar (Descobre todas as propriedades de um item mágico tocado)." },
        { nome: "Nível 2 (3 espaços)", descricao: "Sugestão (Influencia uma criatura a seguir uma ação sugerida por até 8 horas; CD 14 Sabedoria para resistir), Levitação (Levita verticalmente uma criatura ou objeto; criaturas hostis rolam CD 14 Constituição para evitar)." },
        { nome: "Nível 3 (3 espaços)", descricao: "Contrafeitiço (Reação: Cancela instantaneamente o feitiço de uma criatura a até 60 ft se for de 3º nível ou menor), Animar Mortos (Ergue mortos-vivos das dezenas de restos de servos que ele 'acidentalmente' desintegrou)." },
        { nome: "Nível 4 (3 espaços)", descricao: "Muralha de Fogo (Cria um muro de chamas ardentes; cruzar o muro causa 5d8 de dano de fogo, CD 14 Destreza para metade), Assassino Fantasmagórico (Manifesta o maior pesadelo do alvo na mente dele; o alvo fica Amedrontado e sofre 4d10 de dano psíquico no final de cada turno; CD 14 Sabedoria para resistir)." },
        { nome: "Nível 5 (1 espaço)", descricao: "Cone de Frio (Uma rajada de ar congelante em um cone de 60 ft; criaturas na área sofrem 8d8 de dano de frio, CD 14 Constituição para metade)." }
      ]
    },
    {
      nome: "Gadof Blinsky",
      funcao: "Fabricante de Brinquedos",
      personalidade: "Excêntrico, solitário e amigável. Anda com um macaco de estimação (Piccolo) e cria brinquedos extremamente macabros.",
      ficha_referencia: "Plebeu (Commoner).",
      CA: 10,
      PV: "4 (1d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 10, Constituição: 10, Inteligência: 12, Sabedoria: 10, Carisma: 10 },
      pericias: ["Prestidigitação +2"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "0 (10 XP)",
      habilidades_especiais: "Não é um combatente. É um aliado divertido que produz o famoso bordão: 'Não é divertido, não é Blinsky!'.",
      acoes: [
        { nome: "Fugir ou Esconder-se", descricao: "Tentará evitar combates a todo custo." }
      ]
    }
  ],

  velho_osso_moedor: [
    {
      nome: "Bella Sunbane e Offalia Wormkrump",
      funcao: "Bruxas da Noite (Filhas de Morgantha)",
      personalidade: "Maldosas, risonhas e cruéis. Cozinham crianças para fazer as tortas oníricas.",
      ficha_referencia: "Bruxa da Noite (Night Hag) - Manual dos Monstros.",
      CA: 17,
      PV: "112 (15d8 + 45)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 18, Destreza: 15, Constituição: 16, Inteligência: 16, Sabedoria: 14, Carisma: 16 },
      salvamentos: { Inteligência: "+6", Sabedoria: "+5", Carisma: "+6" },
      pericias: ["Enganação +6", "Furtividade +5", "Intuição +5", "Percepção +5"],
      sentidos: ["Visão no Escuro 120 ft", "Percepção Passiva 15"],
      idiomas: ["Abissal", "Comum", "Infernal", "Primordial"],
      nivel_de_desafio: "7 (2.900 XP)",
      habilidades_especiais: "Magia de Coven (Ativa apenas se as três bruxas estiverem a 30 ft uma da outra. Permite usar uma reserva compartilhada de magias com CD 13 e Ataque +5).",
      acoes: [
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "13 (2d8 + 4) cortante." },
        { nome: "Mudança de Forma", descricao: "Polimorfam-se de forma sobrenatural em humanas idosas inofensivas." },
        { nome: "Transe Etéreo", descricao: "Usam o item mágico Heartstone para se tornarem etéreas instantaneamente e escapar." }
      ],
      magias: [
        { nome: "Magias Inatas Individuais", descricao: "Mísseis Mágicos (2/dia; 3 dardos de 1d4+1 energia cada), Raio de Enfraquecimento (2/dia; Ataque +5, alvo causa metade do dano com armas de Força), Sono (2/dia; Rola 5d8 para ver quantos PV afeta, pondo alvos para dormir)." },
        { nome: "Magias Compartilhadas de Coven", descricao: "Enquanto estiverem juntas, podem conjurar até Nível 6: Relâmpago (Linha de 100 ft, 8d6 de dano elétrico, CD 13 Destreza para metade), Assassino Fantasmagórico (Alvo fica Amedrontado e sofre 4d10 psíquico por turno, CD 13 Sabedoria), Olhar Mordaz (Eyebite - Inflige condições como Pânico, Doença ou Sono, CD 13 Sabedoria)." }
      ]
    }
  ],

  krezk: [
    {
      nome: "Dmitri Krezkov",
      funcao: "Burgomestre de Krezk",
      personalidade: "Desconfiado de forasteiros, mas justo. Está em luto profundo pela perda de todos os seus filhos (o último, Ilya, morreu recentemente de doença).",
      ficha_referencia: "Nobre (Noble).",
      CA: 15,
      PV: "9 (2d8)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 12, Constituição: 11, Inteligência: 12, Sabedoria: 14, Carisma: 16 },
      pericias: ["História +3", "Intuição +4", "Persuasão +5"],
      sentidos: ["Percepção Passiva 12"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/8 (25 XP)",
      habilidades_especiais: "Liderança de Krezk (Controla a abertura dos portões pesados da cidade).",
      acoes: [
        { nome: "Rapieira", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "5 (1d8 + 1) perfurante." }
      ]
    },
    {
      nome: "Vasilka",
      funcao: "Golem de Carne (A Noiva Costurada)",
      personalidade: "Não possui emoções complexas, apenas segue as ordens do Abade com movimentos mecânicos e força letal.",
      ficha_referencia: "Golem de Carne (Flesh Golem).",
      CA: 9,
      PV: "93 (11d8 + 44)",
      iniciativa: -1,
      deslocamento: "30 ft",
      atributos: { Força: 19, Destreza: 9, Constituição: 18, Inteligência: 6, Sabedoria: 10, Carisma: 5 },
      imunidades_a_dano: ["Elétrico", "Venenoso", "Armas não mágicas ou não adamantinas"],
      condicoes_imunes: ["Amedrontado", "Enfeitiçado", "Exausto", "Paralisado", "Petrificado", "Envenenado"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 10"],
      idiomas: ["Comum (Entende, mas não fala)"],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Absorção de Relâmpago (Se sofrer dano elétrico, não perde PV; em vez disso, cura PV igual ao dano). Frenesi (Se a vida cair, pode enlouquecer e atacar qualquer criatura aleatoriamente).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Realiza dois ataques de pancada." },
        { nome: "Pancada", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "13 (2d8 + 4) concussão." }
      ]
    },
    {
      nome: "Clovin Belview",
      funcao: "Mongrelfolk Bicefálico e Músico da Abadia",
      personalidade: "Tem duas cabeças (uma chora enquanto a outra ri ou bebe). Toca viola incrivelmente bem para acalmar os outros mongrelfolks trancafiados.",
      ficha_referencia: "Pária (Mongrelfolk) com modificações.",
      CA: 11,
      PV: "26 (4d8 + 12)",
      iniciativa: -1,
      deslocamento: "30 ft",
      atributos: { Força: 12, Destreza: 9, Constituição: 15, Inteligência: 9, Sabedoria: 10, Carisma: 6 },
      pericias: ["Furtividade +1", "Atuação +4"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Duas Cabeças (Vantagem em testes de Percepção e salvamentos contra ser amedrontado, cego, encantado, surdo ou atordoado).",
      acoes: [
        { nome: "Mordida Múltipla", descricao: "Sua mutação permite ataques desesperados, mas na maioria das vezes, ele apenas tenta fugir." }
      ]
    }
  ],

  covil_dos_lobisomens: [
    {
      nome: "Kiril Stoyanovich",
      funcao: "Alfa dos Lobisomens de Baróvia",
      personalidade: "Sádico, sanguinário e ditador. Acredita na supremacia dos mais fortes e não tem lealdade real a Strahd, apenas medo.",
      ficha_referencia: "Lobisomem (Werewolf) - Chefe.",
      CA: 12,
      PV: "90 (12d8 + 36)",
      iniciativa: 1,
      deslocamento: "30 ft (40 ft em forma de lobo)",
      atributos: { Força: 17, Destreza: 13, Constituição: 16, Inteligência: 10, Sabedoria: 11, Carisma: 10 },
      pericias: ["Percepção +4", "Furtividade +3", "Atletismo +5"],
      imunidades_a_dano: ["Armas não mágicas e não prateadas"],
      sentidos: ["Percepção Passiva 14"],
      idiomas: ["Comum"],
      nivel_de_desafio: "4 (1.100 XP)",
      habilidades_especiais: "Metamorfo (Pode usar sua ação para mudar para forma de Lobo, Híbrida ou Humana). Audição e Olfato Aguçados.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques na forma híbrida (mordida e garras) ou com lança (forma humana)." },
        { nome: "Mordida (Híbrida/Lobo)", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "7 (1d8 + 3) perfurante. O alvo deve passar em Constituição CD 12 ou se tornar um lobisomem." },
        { nome: "Garras (Híbrida)", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "8 (2d4 + 3) cortante." }
      ]
    },
    {
      nome: "Zuleika Toranescu",
      funcao: "Lobisomem Prisioneira / Rebelde",
      personalidade: "Amarga com Kiril, que entregou seu parceiro (Emil) ao Castelo Ravenloft. Pode se aliar aos jogadores para salvar seu amor.",
      ficha_referencia: "Lobisomem (Werewolf).",
      CA: 12,
      PV: "58 (9d8 + 18)",
      iniciativa: 1,
      deslocamento: "30 ft (40 ft em lobo)",
      atributos: { Força: 15, Destreza: 13, Constituição: 14, Inteligência: 10, Sabedoria: 11, Carisma: 10 },
      imunidades_a_dano: ["Armas não mágicas e não prateadas"],
      pericias: ["Percepção +4", "Furtividade +3"],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Metamorfo. Busca vingança e protegerá o grupo se prometem libertar Emil.",
      acoes: [
        { nome: "Mordida e Garras", descricao: "Padrão de Lobisomem. Mordida acerto +4 (1d8+2) / Garras acerto +4 (2d4+2)." }
      ]
    }
  ],

  argynvostholt: [
    {
      nome: "Sir Godfrey Gwilym",
      funcao: "Comandante Revenant da Ordem",
      personalidade: "Diferente de Vladimir, Godfrey ainda possui resquícios de compaixão e honra, podendo ajudar ativamente o grupo se o crânio de Argynvost for recuperado.",
      ficha_referencia: "Revenant Paladino (Revenant).",
      CA: 16,
      PV: "136 (16d8 + 64)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 18, Destreza: 14, Constituição: 18, Inteligência: 13, Sabedoria: 16, Carisma: 18 },
      salvamentos: { Força: "+7", Constituição: "+7", Sabedoria: "+6", Carisma: "+7" },
      imunidades_a_dano: ["Veneno"],
      condicoes_imunes: ["Enfeitiçado", "Exausto", "Amedrontado", "Envenenado", "Atordoado"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 13"],
      idiomas: ["Comum", "Dracônico"],
      nivel_de_desafio: "8 (3.900 XP)",
      habilidades_especiais: "Regeneração (10 PV/turno). Perseguição Vingativa. Conjuração (Paladino de 16º nível).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques corpo a corpo." },
        { nome: "Espada Larga", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "11 (2d6 + 4) cortante." },
        { nome: "Olhar Vingativo", descricao: "Mira em um alvo a até 30 ft. O alvo precisa passar num teste CD 15 Sabedoria ou fica Amedrontado até o final do próximo turno do revenant." }
      ],
      magias: [
        { nome: "Destruição Divina (Divine Smite)", descricao: "Habilidade passiva de Paladino. Quando acerta um ataque, Godfrey pode gastar um slot de magia para causar de 2d8 a 5d8 de dano radiante extra, dependendo do nível do slot gasto." },
        { nome: "Nível 1 (4 espaços)", descricao: "Comando (Ordem mágica, CD 15 Sabedoria), Destruição Cauterizante (Ação bônus; o próximo ataque corpo-a-corpo bem sucedido causa +1d6 de dano de fogo e incendeia o alvo, causando 1d6 de fogo no início dos turnos da vítima até ela passar num teste de Constituição)." },
        { nome: "Nível 2 (3 espaços)", descricao: "Zona da Verdade (Cria uma esfera de 15 ft onde nenhuma criatura pode mentir deliberadamente se falhar num teste CD 15 de Carisma)." },
        { nome: "Nível 3 (3 espaços)", descricao: "Destruição Cegante (Ação bônus; o próximo ataque corpo-a-corpo bem sucedido causa +3d8 de dano radiante e o alvo precisa passar em CD 15 Constituição ou ficará Cego)." },
        { nome: "Nível 4 (1 espaço)", descricao: "Aura da Vida (Proteção a 30 ft; alvos aliados não podem ter seu PV máximo reduzido nem sofrerem envelhecimento mágico)." }
      ]
    }
  ],

  templo_do_ambar: [
    {
      nome: "Vilnius",
      funcao: "Aprendiz de Mago e Saqueador Sobrevivente",
      personalidade: "Covarde, assustado e ganancioso. Oculta-se no templo tentando roubar conhecimentos sem ser morto pelas chamas ou guardiões.",
      ficha_referencia: "Aprendiz de Mago (Apprentice Wizard).",
      CA: 10,
      PV: "9 (2d8)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 10, Constituição: 10, Inteligência: 14, Sabedoria: 10, Carisma: 11 },
      pericias: ["Arcanismo +4", "Furtividade +2"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum", "Dracônico"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Acompanhado por um Quasit invisível, que ele considera um aliado arriscado. Ataque de Magia: +4.",
      acoes: [
        { nome: "Adaga", tipo: "Corpo a Corpo", acerto: "+2", alcance: "5 ft", dano: "2 (1d4) perfurante." }
      ],
      magias: [
        { nome: "Truques", descricao: "Raio de Fogo (Ataque à distância +4; causa 1d10 de dano de fogo a até 120 ft), Ilusão Menor (Cria uma imagem ilusória ou som num cubo de 5 ft), Prestidigitação (Truques simples de limpeza ou distração)." },
        { nome: "Nível 1 (2 espaços)", descricao: "Escudo Arcano (Reação: Recebe +5 na CA contra o ataque atual e até o início de seu próximo turno), Mísseis Mágicos (Atira 3 dardos mágicos guiados; cada um causa 1d4+1 de dano de energia sem rolar acerto), Disfarçar-se (Muda magicamente a própria aparência por 1 hora)." }
      ]
    },
    {
      nome: "Exethanter",
      funcao: "Lich Guardião Sem Memória",
      personalidade: "Perdeu a memória. É surpreendentemente prestativo e educado se não for atacado, vagando confuso pelos corredores do templo.",
      ficha_referencia: "Lich - Manual dos Monstros.",
      CA: 17,
      PV: "135 (18d8 + 54)",
      iniciativa: 3,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 16, Constituição: 16, Inteligência: 20, Sabedoria: 14, Carisma: 16 },
      salvamentos: { Constituição: "+10", Inteligência: "+12", Sabedoria: "+9" },
      pericias: ["Arcanismo +19", "História +12", "Intuição +9", "Percepção +9"],
      resistencias_a_dano: ["Frio", "Elétrico", "Necrótico"],
      imunidades_a_dano: ["Veneno", "Armas não mágicas"],
      sentidos: ["Visão Verdadeira 120 ft", "Percepção Passiva 19"],
      idiomas: ["Comum", "Dracônico", "Abissal", "Infernal", "Élfico"],
      nivel_de_desafio: "21 (33.000 XP)",
      habilidades_especiais: "Resistência Lendária (3/dia: se falhar num teste de resistência, pode escolher passar). Como está com amnésia, inicialmente ele não lança feitiços complexos até ser curado (Restauração Maior). Ataque de magia: +12. Magias CD 20.",
      acoes: [
        { nome: "Toque Paralisante", tipo: "Corpo a Corpo", acerto: "+12", alcance: "5 ft", dano: "10 (3d6) gélido. O alvo precisa passar num teste CD 18 Constituição ou fica paralisado por 1 minuto (pode tentar refazer o teste ao final de cada turno)." }
      ],
      magias: [
        { nome: "Conjuração de Lich (Pós-cura)", descricao: "Como um conjurador de nível 18, Exethanter recupera todo o seu formidável repertório caso o curam:" },
        { nome: "Magias Nível 1-3", descricao: "Mísseis Mágicos, Escudo Arcano, Detectar Pensamentos, Invisibilidade, Animar Mortos, Contrafeitiço (Anula magias lançadas por inimigos), Bola de Fogo (Explosão de 20 ft, 8d6 dano de fogo, CD 20 Destreza)." },
        { nome: "Magias Nível 4-6", descricao: "Assassino Fantasmagórico, Praga (Blight), Dimensão de Bolso, Névoa Mortal (Cone venenoso de 20 ft que causa 5d8 dano, CD 20 Const), Globo de Invulnerabilidade (Cria barreira imune a magias nível 5 ou menor), Desintegrar (Causa 10d6 + 40 de dano de energia; se o alvo cair a 0 PV, ele e seus equipamentos não mágicos viram uma pilha de pó cinza, CD 20 Destreza para evitar)." },
        { nome: "Magias Nível 7-9", descricao: "Dedo da Morte (7d8 + 30 dano necrótico e cria zumbi, CD 20 Constituição), Dominar Monstro (Controla inteiramente as ações de uma criatura por até 1 hora, CD 20 Sabedoria), Palavra de Poder Atordoar (Uma criatura a vista com 150 PV ou menos é instantaneamente atordoada sem teste de resistência inicial), Palavra de Poder Matar (Power Word Kill: Profere uma palavra mortal; se o alvo tiver 100 PV ou menos, morre instantaneamente e sem direito a resistência)." }
      ]
    }
  ],
  colina_yester: [
    {
      nome: "Druida de Yester Hill",
      funcao: "Cultistas de Strahd / Protetores da Árvore Gulthias",
      personalidade: "Selvagens, pintados com sangue, devotam suas vidas a Strahd, considerando-o a entidade suprema da terra.",
      ficha_referencia: "Druida (Druid).",
      CA: 11,
      PV: "27 (5d8 + 5)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 12, Constituição: 13, Inteligência: 12, Sabedoria: 15, Carisma: 11 },
      pericias: ["Medicina +4", "Natureza +3", "Percepção +4"],
      sentidos: ["Percepção Passiva 14"],
      idiomas: ["Druídico", "Comum"],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Adoração Sombria: Escondem-se sob a terra e agem em sintonia com Blight Plants (As pragas de arbustos). Ataque de Magia: +4.",
      acoes: [
        { nome: "Bordão", tipo: "Corpo a Corpo", acerto: "+2", alcance: "5 ft", dano: "3 (1d6) contundente." }
      ],
      magias: [
        { nome: "Truques", descricao: "Bordão Mágico / Shillelagh (Ação bônus: O bordão vira uma arma mágica causando 1d8+2 de concussão e ataca com Sabedoria), Rajada de Veneno (Um alvo em 10 ft precisa passar num teste CD 12 de Constituição ou sofre 1d12 de dano venenoso), Druidcraft (Cria efeitos naturais inofensivos, como prever o clima ou fazer brotar uma semente)." },
        { nome: "Nível 1 (4 espaços)", descricao: "Contrição / Entangle (Terreno de 20 ft fica repleto de raízes; criaturas na área rolam Força CD 12 ou ficam Impedidas; as raízes contam como terreno difícil), Curar Ferimentos (Cura 1d8+2 PV de um alvo tocado), Passos sem Pegadas (Não deixam rastros; conjurador e alvos ganham +10 em testes de Furtividade)." },
        { nome: "Nível 2 (3 espaços)", descricao: "Pele de Árvore / Barkskin (A pele do conjurador endurece, a CA dele não pode ser menor que 16, independente da armadura usada), Crescer Espinhos / Spike Growth (Cria uma área de terreno difícil num raio de 20 ft coberta por espinhos; criaturas sofrem 2d4 de dano perfurante a cada 5 ft de movimento dentro da área)." }
      ]
    },
    {
      nome: "Berserker de Sangue",
      funcao: "Guerreiros Selvagens das Tribos",
      personalidade: "Lutam até a morte cobertos de lama mágica, sem qualquer instinto de preservação.",
      ficha_referencia: "Berserker.",
      CA: 13,
      PV: "67 (9d8 + 27)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 16, Destreza: 12, Constituição: 17, Inteligência: 9, Sabedoria: 11, Carisma: 9 },
      pericias: ["Atletismo +5"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Ataque Imprudente (No início de seu turno, pode escolher ter vantagem em todos os ataques corporais; inimigos ganham vantagem ao atacá-lo até o início de seu próximo turno).",
      acoes: [
        { nome: "Machado Grande", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "9 (1d12 + 3) cortante." }
      ]
    }
  ],
  curse_of_strahd: [
    {
      nome: "Strahd von Zarovich",
      funcao: "Conde de Baróvia, Vampiro Antigo",
      personalidade: "Tirano secular, estrategista brilhante e predador implacável.",
      ficha_referencia: "Curse of Strahd, pág. 239.",
      CA: 16,
      PV: "144 (17d8 + 68)",
      iniciativa: 4,
      deslocamento: "30 ft",
      atributos: {
        Força: 18,
        Destreza: 18,
        Constituição: 18,
        Inteligência: 20,
        Sabedoria: 15,
        Carisma: 18
      },
      salvamentos: {
        Força: "+9",
        Destreza: "+9",
        Constituição: "+9",
        Inteligência: "+10",
        Sabedoria: "+7",
        Carisma: "+9"
      },
      pericias: [
        "Arcanismo +15",
        "Furtividade +14",
        "Percepção +12",
        "Religião +10"
      ],
      sentidos: [
        "Visão no Escuro 120 ft",
        "Percepção Passiva 22"
      ],
      idiomas: [
        "Abissal",
        "Comum",
        "Dracônico",
        "Élfico",
        "Gigante",
        "Infernal"
      ],
      nivel_de_desafio: "15 (13.000 XP)",
      habilidades_especiais: "Metamorfo (Lobo/Morcego/Névoa), Escalada Aracnídea, Regeneração (20 PV/turno), Resistência Lendária (3/dia), Fraquezas Vampíricas.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques, apenas um pode ser Mordida."
        },
        {
          nome: "Golpe Desarmado",
          tipo: "Corpo a Corpo",
          acerto: "+9",
          alcance: "5 ft",
          dano: "8 (1d8+4) contundente + 14 (4d6) necrótico. Pode agarrar (CD 18)."
        },
        {
          nome: "Mordida",
          tipo: "Corpo a Corpo",
          acerto: "+9",
          alcance: "5 ft",
          dano: "7 (1d6+4) perfurante + 10 (3d6) necrótico. Reduz PV máximo do alvo e cura Strahd."
        },
        {
          nome: "Enfeitiçar",
          descricao: "Alvo humanoide a 30 ft deve passar CD 17 Sabedoria ou ser enfeitiçado por 24h. O alvo vê Strahd como um amigo a ser protegido."
        }
      ],
      magias: [
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Compreender Idiomas (entende o significado de qualquer idioma falado ou escrito), Detectar Magia (vê auras brilhantes em objetos mágicos a até 30 ft), Mísseis Mágicos (Cria 3 dardos brilhantes. Acerto automático, cada um causa 1d4+1 de dano de energia), Escudo Arcano (Reação: Recebe +5 na CA até o início do próximo turno e fica imune a Mísseis Mágicos)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Alterar-se (adaptação aquática ou muda sua aparência física), Detectar Pensamentos (Lê os pensamentos superficiais de uma criatura a até 30 ft; CD 18 Sabedoria para resistir), Reflexos (Cria 3 duplicatas ilusórias; ataques contra ele têm chance de acertar uma das cópias), Passo Nebuloso (Ação Bônus: Teleporta-se para um espaço desocupado a até 30 ft que possa ver)."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Animar Mortos (Transforma uma pilha de ossos ou cadáver num Esqueleto ou Zumbi sob seu controle), Contrafeitiço (Reação: Interrompe o feitiço de uma criatura a até 60 ft; teste de Inteligência necessário se a magia for nível 4 ou maior), Bola de Fogo (Explosão em um raio de 20 ft. Causa 8d6 de dano de fogo; teste CD 18 Destreza para metade do dano), Indetectável (Torna o alvo imune a magias de adivinhação e espionagem mágica)."
        },
        {
          nome: "Nível 4 (3 espaços)",
          descricao: "Blight (Drena a umidade do alvo. Causa 8d8 de dano necrótico; teste CD 18 Constituição para metade. Plantas têm desvantagem no teste e recebem dano máximo), Invisibilidade Maior (Fica invisível por 1 minuto; a invisibilidade não é quebrada se ele atacar ou lançar magias), Polimorfia (Transforma uma criatura numa besta; CD 18 Sabedoria para resistir)."
        },
        {
          nome: "Nível 5 (1 espaço)",
          descricao: "Animar Objetos (Dá vida a até 10 objetos inanimados para atacarem sob seu comando), Vidência (Cria um sensor invisível para espiar uma criatura ou local específico; alvo faz teste CD 18 Sabedoria para resistir)."
        }
      ],
      acoes_lendarias: [
        {
          nome: "Mover",
          descricao: "Move-se até seu deslocamento sem ataques de oportunidade."
        },
        {
          nome: "Golpe Desarmado",
          descricao: "Realiza um ataque de Golpe Desarmado."
        },
        {
          nome: "Mordida (Custa 2 Ações)",
          descricao: "Realiza um ataque de Mordida."
        }
      ]
    },
    {
      nome: "Baba Lysaga",
      funcao: "Mãe das Bruxas, Protetora de Strahd",
      personalidade: "Fanática, cruel e possuidora de magias de sangue.",
      ficha_referencia: "Curse of Strahd, pág. 228.",
      CA: 15,
      PV: "120 (16d8 + 48)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 18,
        Destreza: 10,
        Constituição: 16,
        Inteligência: 20,
        Sabedoria: 17,
        Carisma: 13
      },
      salvamentos: {
        Constituição: "+7",
        Sabedoria: "+7"
      },
      pericias: [
        "Arcanismo +13",
        "Religião +13"
      ],
      sentidos: [
        "Percepção Passiva 13"
      ],
      idiomas: [
        "Abissal",
        "Anão",
        "Comum",
        "Dracônico",
        "Gigante"
      ],
      nivel_de_desafio: "11 (7.200 XP)",
      habilidades_especiais: "Bênção da Mãe Noite, Metamorfo (Enxame de Insetos).",
      acoes: [
        {
          nome: "Bordão",
          tipo: "Corpo a Corpo",
          acerto: "+8",
          alcance: "5 ft",
          dano: "7 (1d6+4) contundente."
        },
        {
          nome: "Invocar Enxames",
          descricao: "Convoca 1d4 enxames de insetos (Recarga 5-6)."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Mãos Mágicas (Cria uma mão espectral que pode manipular objetos a 30 ft), Prestidigitação (Cria pequenos truques sensoriais inofensivos), Raio de Fogo (Ataque à distância +9. Causa 3d10 de dano de fogo a até 120 ft)."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Curar Ferimentos (Cura 1d8+5 PV de uma criatura tocada), Mísseis Mágicos (3 dardos de acerto automático, 1d4+1 dano de energia cada), Onda de Choque (Onda de força em um cubo de 15 ft. Causa 2d8 de dano trovejante e empurra alvos 10 ft; CD 17 Constituição para metade do dano e não ser empurrado), Dormir (Rola 5d8; afeta criaturas com base nos PVs atuais, colocando-as em sono mágico)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Cegueira/Surdez (Deixa o alvo cego ou surdo por 1 minuto; CD 17 Constituição para resistir), Passo Nebuloso (Ação Bônus: Teleporta-se até 30 ft), Raio Ardente (Lança 3 raios de fogo. Ataque +9 para cada um; cada acerto causa 2d6 de dano de fogo)."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Bola de Fogo (Explosão num raio de 20 ft. Causa 8d6 de dano de fogo; CD 17 Destreza para metade), Contrafeitiço (Reação: Interrompe a conjuração de uma magia), Dissipar Magia (Encerra efeitos mágicos no alvo)."
        },
        {
          nome: "Nível 4 (3 espaços)",
          descricao: "Blight (Drena fluidos. Causa 8d8 de dano necrótico; CD 17 Constituição para metade), Assassino Fantasmagórico (Cria uma ilusão do maior medo do alvo. Alvo fica amedrontado e sofre 4d10 de dano psíquico por turno; CD 17 Sabedoria para resistir), Polimorfia (Transforma o alvo numa besta; CD 17 Sabedoria para resistir)."
        },
        {
          nome: "Nível 5 (2 espaços)",
          descricao: "Névoa Mortal (Cria uma esfera de névoa venenosa de 20 ft de raio que se move. Causa 5d8 de dano de veneno; CD 17 Constituição para metade), Vidência (Espiona alvos ou locais distantes), Geas (Força uma criatura a cumprir uma ordem; alvo sofre 5d10 de dano psíquico por dia se desobedecer; CD 17 Sabedoria para resistir)."
        },
        {
          nome: "Nível 6 (1 espaço)",
          descricao: "Círculo da Morte (Esfera de 60 ft de raio. Causa 8d6 de dano necrótico; CD 17 Constituição para metade)."
        },
        {
          nome: "Nível 7 (1 espaço)",
          descricao: "Dedo da Morte (Aponta para uma criatura. Causa 7d8 + 30 de dano necrótico; CD 17 Constituição para metade. Se matar o alvo, ele se ergue como um Zumbi sob comando dela no turno seguinte)."
        },
        {
          nome: "Nível 8 (1 espaço)",
          descricao: "Palavra de Poder Atordoar (Fala uma palavra de poder. Se o alvo tiver 150 PV ou menos, fica instantaneamente atordoado. O alvo pode fazer testes CD 17 Constituição no final dos turnos dele para encerrar o efeito)."
        }
      ]
    },
    {
      nome: "O Abade",
      funcao: "Anjo Deva Corrompido",
      personalidade: "Insano, busca a redenção de Strahd através de criações profanas.",
      ficha_referencia: "Curse of Strahd, pág. 225.",
      CA: 17,
      PV: "136 (13d8 + 78)",
      iniciativa: 4,
      deslocamento: "30 ft (Voo 60 ft)",
      atributos: {
        Força: 18,
        Destreza: 18,
        Constituição: 18,
        Inteligência: 17,
        Sabedoria: 20,
        Carisma: 20
      },
      salvamentos: {
        Sabedoria: "+9",
        Carisma: "+9"
      },
      pericias: [
        "Intuição +9",
        "Percepção +9"
      ],
      sentidos: [
        "Visão no Escuro 120 ft",
        "Percepção Passiva 19"
      ],
      nivel_de_desafio: "10 (5.900 XP)",
      habilidades_especiais: "Resistência à Magia, Armas Angélicas (+4d8 radiante em ataques corpo a corpo).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques de Maça."
        },
        {
          nome: "Maça",
          tipo: "Corpo a Corpo",
          acerto: "+8",
          alcance: "5 ft",
          dano: "7 (1d6+4) contundente + 18 (4d8) radiante."
        },
        {
          nome: "Olhar Curativo (3/dia)",
          descricao: "Cura 4d8+2 PV e remove condições de uma criatura tocada."
        },
        {
          nome: "Mudança de Forma",
          descricao: "Transforma-se em humanoide ou animal de ND 10 ou menor."
        }
      ],
      magias: [
        {
          nome: "Inatas",
          descricao: "Detectar Mal e Bem (Sabe a localização de aberrações, celestiais, elementais, feéricos, corruptores ou mortos-vivos num raio de 30 ft), Revivificar (Toca uma criatura que morreu no último minuto e a traz de volta com 1 PV), Auxílio (Até 3 criaturas recebem +5 em seus Pontos de Vida Máximos e atuais por 8 horas), Aumentar Atributo (O alvo tem vantagem em testes de habilidade de um atributo escolhido)."
        }
      ]
    },
    {
      nome: "Ezmerelda d'Avenir",
      funcao: "Caçadora de Monstros",
      personalidade: "Determinada, pragmática e mestre em armadilhas.",
      ficha_referencia: "Curse of Strahd, pág. 230.",
      CA: 17,
      PV: "82 (11d8 + 33)",
      iniciativa: 4,
      deslocamento: "30 ft",
      atributos: {
        Força: 14,
        Destreza: 19,
        Constituição: 16,
        Inteligência: 16,
        Sabedoria: 11,
        Carisma: 17
      },
      salvamentos: {
        Sabedoria: "+3"
      },
      pericias: [
        "Acrobacia +7",
        "Arcanismo +6",
        "Enganação +9",
        "Furtividade +7",
        "Percepção +6",
        "Sobrevivência +6"
      ],
      sentidos: [
        "Percepção Passiva 16"
      ],
      nivel_de_desafio: "8 (3.900 XP)",
      habilidades_especiais: "Equipamento Especial (+1 Couro Batido).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza três ataques com suas armas."
        },
        {
          nome: "Espada Curta +1",
          tipo: "Corpo a Corpo",
          acerto: "+8",
          alcance: "5 ft",
          dano: "8 (1d6+5) perfurante."
        },
        {
          nome: "Rapieira +1",
          tipo: "Corpo a Corpo",
          acerto: "+8",
          alcance: "5 ft",
          dano: "9 (1d8+5) perfurante."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Luz (Faz um objeto emitir luz brilhante num raio de 20 ft), Mãos Mágicas (Manipulação de objetos à distância), Prestidigitação (Truques inofensivos), Raio de Gelo (Ataque +6. Causa 2d8 de dano gélido e reduz o deslocamento do alvo em 10 ft até o próximo turno)."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Detectar Magia (Vê auras mágicas a até 30 ft), Mísseis Mágicos (3 dardos de acerto automático, 1d4+1 de dano de energia cada), Escudo Arcano (Reação: +5 de CA contra um ataque que a acertaria e imune a Mísseis Mágicos)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Passo Nebuloso (Ação Bônus: Teleporte de 30 ft), Reflexos (Cria 3 ilusões suas. Ataques direcionados a ela rolam 1d20 para ver se atingem uma ilusão), Sugestão (Obriga a criatura a seguir um comando razoável. CD 14 Sabedoria para resistir)."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Relâmpago (Uma linha elétrica de 100 ft de comprimento. Causa 8d6 de dano elétrico; CD 14 Destreza para metade), Círculo Mágico (Cria um cilindro protetor que impede a entrada, dá desvantagem em ataques e imunidade a encantos feitos por celestiais, elementais, feéricos, corruptores ou mortos-vivos)."
        },
        {
          nome: "Nível 4 (1 espaço)",
          descricao: "Invisibilidade Maior (Alvo fica invisível por 1 minuto. Atacar ou lançar magias não encerra o feitiço)."
        }
      ]
    },
    {
      nome: "Kasimir Velikov",
      funcao: "Mago Elfo das Sombras",
      personalidade: "Melancólico e focado em resgatar a alma de sua irmã.",
      ficha_referencia: "Curse of Strahd, pág. 232.",
      CA: 12,
      PV: "40 (9d8)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: {
        Força: 9,
        Destreza: 14,
        Constituição: 11,
        Inteligência: 17,
        Sabedoria: 12,
        Carisma: 11
      },
      salvamentos: {
        Inteligência: "+6",
        Sabedoria: "+4"
      },
      pericias: [
        "Arcanismo +6",
        "História +6",
        "Percepção +4"
      ],
      sentidos: [
        "Visão no Escuro 60 ft",
        "Percepção Passiva 14"
      ],
      nivel_de_desafio: "6 (2.300 XP)",
      habilidades_especiais: "Ancestralidade Feérica, Conjuração (9º nível).",
      acoes: [
        {
          nome: "Adaga",
          tipo: "Corpo a Corpo",
          acerto: "+5",
          alcance: "5 ft",
          dano: "4 (1d4+2) perfurante."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Raio de Fogo (Ataque +6. 2d10 de dano de fogo a 120 ft), Mãos Mágicas, Mensagem (Sussurra uma mensagem a uma criatura até 120 ft que pode responder no mesmo tom), Prestidigitação."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Armadura Arcana (A CA base do alvo passa a ser 13 + Modificador de Destreza. Dura 8 horas), Mísseis Mágicos (3 dardos. Acerto automático, 1d4+1 dano de energia cada), Escudo Arcano (Reação: +5 na CA), Sono (Rola 5d8; criaturas na área de efeito caem num sono mágico caso seus PVs atuais permitam, começando pelas de menor PV)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Passo Nebuloso (Ação Bônus: Teleporte de 30 ft), Reflexos (Cria 3 duplicatas mágicas ilusórias), Sugestão (Obriga uma criatura a seguir uma sugestão. CD 14 Sabedoria para resistir)."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Contrafeitiço (Reação: Interrompe feitiços inimigos), Bola de Fogo (Raio de 20 ft. Causa 8d6 de dano de fogo; CD 14 Destreza para metade), Voar (Concede velocidade de voo de 60 ft para uma criatura por até 10 minutos)."
        },
        {
          nome: "Nível 4 (3 espaços)",
          descricao: "Muralha de Fogo (Cria um muro flamejante opaco. Causa 5d8 de dano de fogo a quem cruzar ou terminar o turno perto dele; CD 14 Destreza para metade), Invisibilidade Maior (Invisível por 1 min, não cai ao atacar), Polimorfia (Muda a forma física de um alvo para uma besta; CD 14 Sabedoria para resistir)."
        },
        {
          nome: "Nível 5 (1 espaço)",
          descricao: "Cone de Frio (Uma explosão gélida de 60 ft em cone. Causa 8d8 de dano de frio; CD 14 Constituição para metade. Inimigos mortos por ela congelam)."
        }
      ]
    },
    {
      nome: "Rahadin",
      funcao: "Mordomo de Strahd",
      personalidade: "Servo leal, silencioso e implacável.",
      ficha_referencia: "Curse of Strahd, pág. 246.",
      CA: 18,
      PV: "135 (18d8 + 54)",
      iniciativa: 6,
      deslocamento: "30 ft",
      atributos: {
        Força: 14,
        Destreza: 22,
        Constituição: 17,
        Inteligência: 15,
        Sabedoria: 16,
        Carisma: 18
      },
      salvamentos: {
        Destreza: "+10",
        Sabedoria: "+7",
        Carisma: "+8"
      },
      pericias: [
        "Acrobacia +10",
        "Furtividade +10",
        "Percepção +7"
      ],
      sentidos: [
        "Visão no Escuro 60 ft",
        "Percepção Passiva 17"
      ],
      idiomas: [
        "Comum",
        "Infernal",
        "Élfico"
      ],
      nivel_de_desafio: "10 (5.900 XP)",
      habilidades_especiais: "Coro da Morte (Qualquer criatura que não seja leal a Strahd e comece seu turno num raio de 10 ft sofre 3d10 de dano psíquico; Sabedoria CD 16 para evitar), Ancestralidade Feérica, Máscara da Natureza. Conjuração Inata: 3/dia cada: Passo Nebuloso, Reflexos (Mirage) e Máscara dos Muitos (Disfarçar-se).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza três ataques com cimitarra ou dardos envenenados."
        },
        {
          nome: "Cimitarra",
          tipo: "Corpo a Corpo",
          acerto: "+10",
          alcance: "5 ft",
          dano: "9 (1d6 + 6) cortante."
        },
        {
          nome: "Dardo Envenenado",
          tipo: "À Distância",
          acerto: "+10",
          alcance: "20/60 ft",
          dano: "8 (1d4 + 6) perfurante + 5 (2d4) de dano de veneno."
        }
      ]
    },
    {
      nome: "Madam Eva",
      funcao: "Líder Vistani e Vidente",
      personalidade: "Enigmática, perspicaz e extremamente sábia.",
      ficha_referencia: "Curse of Strahd, pág. 233.",
      CA: 10,
      PV: "88 (16d8 + 32)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 8,
        Destreza: 11,
        Constituição: 12,
        Inteligência: 17,
        Sabedoria: 20,
        Carisma: 18
      },
      salvamentos: {
        Sabedoria: "+9",
        Carisma: "+8"
      },
      pericias: [
        "Intuição +9",
        "Percepção +9"
      ],
      sentidos: [
        "Percepção Passiva 19"
      ],
      idiomas: [
        "Comum",
        "Vistani"
      ],
      nivel_de_desafio: "10 (5.900 XP)",
      habilidades_especiais: "Clarividência Mágica, Visão da Fortuna. Conjuração (Clériga de 16º nível).",
      acoes: [
        {
          nome: "Adaga",
          tipo: "Corpo a Corpo",
          acerto: "+4",
          alcance: "5 ft",
          dano: "2 (1d4) perfurante."
        },
        {
          nome: "Olho do Mal",
          descricao: "Força um alvo que ela possa ver a até 10 ft a rolar com desvantagem em testes de habilidade e ataques, ou em testes de resistência. Dura até dissipar ou ela perder a concentração."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Chama Sagrada (1d8 radiante, CD 17 Destreza), Luz, Consertar (Mending), Taumaturgia."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Perdição (Bane - 3 alvos subtraem 1d4 de ataques e resistências, CD 17 Sabedoria), Comando, Detectar Bem e Mal, Curar Ferimentos (1d8+5)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Imobilizar Pessoa (Paralisa alvo humanoide, CD 17 Sabedoria), Restauração Menor, Arma Espiritual (+9 ataque, 1d8+5 energia)."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Clarividência, Dissipar Magia, Falar com os Mortos, Espíritos Guardiões (Espectros protetores num raio de 15 ft, 3d8 dano radiante, CD 17 Sabedoria para metade)."
        },
        {
          nome: "Nível 4 (3 espaços)",
          descricao: "Adivinhação, Movimentação Livre (Imunidade a condições que reduzem velocidade), Guardião da Fé (Fantasma estático que ataca quem aproxima, 20 dano radiante, CD 17 Sabedoria metade)."
        },
        {
          nome: "Nível 5 (2 espaços)",
          descricao: "Curar Ferimentos em Massa (Cura 3d8+5 para até 6 alvos), Restauração Maior (Remove exaustão, feitiço, maldição, etc), Lendas e Histórias, Vidência."
        },
        {
          nome: "Nível 6 (1 espaço)",
          descricao: "Barreira de Lâminas (Muro de espadas mágicas gira em área. 6d10 dano cortante, CD 17 Destreza metade), Encontrar o Caminho, Banquete de Heróis."
        },
        {
          nome: "Nível 7 (1 espaço)",
          descricao: "Ressurreição, Palavra Divina (Expulsa extra-planares ou pune criaturas baseado nos PVs, CD 17 Carisma)."
        },
        {
          nome: "Nível 8 (1 espaço)",
          descricao: "Terremoto (Gera abalos sísmicos que derrubam estruturas, abrem fendas e derrubam criaturas no chão, CD 17 Constituição)."
        }
      ]
    },
    {
      nome: "Izek Strazni",
      funcao: "Capitão da Guarda de Vallaki",
      personalidade: "Cruel, violento, leal ao Burgomestre e obcecado por Ireena.",
      ficha_referencia: "Curse of Strahd, pág. 247.",
      CA: 14,
      PV: "112 (15d8 + 45)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: {
        Força: 18,
        Destreza: 15,
        Constituição: 16,
        Inteligência: 10,
        Sabedoria: 9,
        Carisma: 15
      },
      salvamentos: {
        Força: "+7",
        Constituição: "+6"
      },
      pericias: [
        "Atletismo +7",
        "Intimidação +5"
      ],
      sentidos: [
        "Percepção Passiva 9"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Bruto: Uma arma corpo-a-corpo causa um dado a mais de dano. Presente Demoniaco (Braço Diabólico).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques com o Machado de Batalha."
        },
        {
          nome: "Machado de Batalha",
          tipo: "Corpo a Corpo",
          acerto: "+7",
          alcance: "5 ft",
          dano: "13 (2d8 + 4) cortante."
        },
        {
          nome: "Lançar Fogo",
          tipo: "À Distância",
          acerto: "+5",
          alcance: "5 ft",
          dano: "10 (3d6) de fogo em um alvo adjacente usando seu braço monstruoso."
        }
      ]
    },
    {
      nome: "Rictavio (Rudolph van Richten)",
      funcao: "Caçador de Monstros e Músico Disfarçado",
      personalidade: "Curioso, ágil, mestre do disfarce e estrategista brilhante.",
      ficha_referencia: "Curse of Strahd, pág. 242.",
      CA: 12,
      PV: "77 (14d8 + 28)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: {
        Força: 9,
        Destreza: 12,
        Constituição: 13,
        Inteligência: 16,
        Sabedoria: 18,
        Carisma: 16
      },
      salvamentos: {
        Inteligência: "+6",
        Sabedoria: "+7"
      },
      pericias: [
        "Investigação +6",
        "Percepção +7",
        "Sobrevivência +7"
      ],
      sentidos: [
        "Percepção Passiva 17"
      ],
      idiomas: [
        "Comum",
        "Dracônico",
        "Élfico"
      ],
      nivel_de_desafio: "5 (1.800 XP)",
      habilidades_especiais: "Matador de Mortos-Vivos (+1d8 de dano contra morto-vivos). Conjuração (9º nível de clérigo).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques com a espada-bengala."
        },
        {
          nome: "Espada-Bengala",
          tipo: "Corpo a Corpo",
          acerto: "+4",
          alcance: "5 ft",
          dano: "4 (1d6 + 1) concussão ou perfurante."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Orientação (+1d4 em um teste de habilidade), Luz, Consertar (Mending), Taumaturgia."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Curar Ferimentos (1d8+4 PV), Detectar Magia, Proteção contra o Bem e o Mal, Santuário (Alvo não pode ser atacado a não ser que o inimigo passe num teste CD 15 Sabedoria)."
        },
        {
          nome: "Nível 2 (3 espaços)",
          descricao: "Restauração Menor (Cura cegueira, surdez, paralisia ou envenenamento), Augúrio."
        },
        {
          nome: "Nível 3 (3 espaços)",
          descricao: "Clarividência, Falar com os Mortos, Remover Maldição."
        },
        {
          nome: "Nível 4 (3 espaços)",
          descricao: "Proteção contra a Morte (Se o alvo cairia a 0 PV, ele cai para 1 PV em vez disso e a magia encerra), Movimentação Livre."
        },
        {
          nome: "Nível 5 (1 espaço)",
          descricao: "Curar Ferimentos em Massa (Cura 3d8+4 PV para até 6 alvos num raio de 30 ft), Lendas e Histórias."
        }
      ]
    },
    {
      nome: "Vladimir Horngaard",
      funcao: "Comandante da Ordem do Dragão de Prata (Revenant)",
      personalidade: "Vingativo, amargurado, consome-se por ódio a Strahd.",
      ficha_referencia: "Curse of Strahd, pág. 249.",
      CA: 17,
      PV: "192 (16d8 + 112)",
      iniciativa: 3,
      deslocamento: "30 ft",
      atributos: {
        Força: 18,
        Destreza: 17,
        Constituição: 18,
        Inteligência: 13,
        Sabedoria: 15,
        Carisma: 14
      },
      salvamentos: {
        Força: "+8",
        Constituição: "+8"
      },
      pericias: [
        "Atletismo +8",
        "Intuição +5"
      ],
      sentidos: [
        "Percepção Passiva 15"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "7 (2.900 XP)",
      habilidades_especiais: "Vingança Mortal, Regeneração (10 PV por turno). Imunidades: veneno e condição envenenado/amedrontado.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Realiza dois ataques com a Espada Grande +2."
        },
        {
          nome: "Espada Grande +2",
          tipo: "Corpo a Corpo",
          acerto: "+9",
          alcance: "5 ft",
          dano: "20 (4d6 + 6) cortante. Contra Strahd, causa 14 (4d6) adicionais."
        }
      ]
    },
    {
      nome: "Homem-Corvo (Wereraven)",
      funcao: "Membro da Ordem da Pena",
      personalidade: "Cauteloso, secreto e aliado contra as trevas.",
      ficha_referencia: "Curse of Strahd, pág. 251.",
      CA: 12,
      PV: "31 (7d8 + 7)",
      iniciativa: 2,
      deslocamento: "30 ft, voo 50 ft",
      atributos: {
        Força: 10,
        Destreza: 15,
        Constituição: 11,
        Inteligência: 13,
        Sabedoria: 15,
        Carisma: 14
      },
      salvamentos: {
        Destreza: "+4",
        Sabedoria: "+4"
      },
      pericias: [
        "Furtividade +4",
        "Percepção +4",
        "Intuição +4"
      ],
      sentidos: [
        "Visão no Escuro 60 ft",
        "Percepção Passiva 14"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Metamorfo (Forma Humana, Corvo ou Híbrida), Regeneração (10 PV/turno), Mimetismo do Som. Imunidade a armas não mágicas/não prateadas.",
      acoes: [
        {
          nome: "Espada Curta (Híbrida/Humana)",
          tipo: "Corpo a Corpo",
          acerto: "+4",
          alcance: "5 ft",
          dano: "5 (1d6+2) perfurante."
        },
        {
          nome: "Bico (Híbrida/Corvo)",
          tipo: "Corpo a Corpo",
          acerto: "+4",
          alcance: "5 ft",
          dano: "1 perfurante."
        }
      ]
    },
    {
      nome: "Guerreiro Fantasma (Phantom Warrior)",
      funcao: "Sentinela Espectral",
      personalidade: "Leal ao seu dever mesmo após a morte.",
      ficha_referencia: "Curse of Strahd, pág. 252.",
      CA: 16,
      PV: "45 (6d8 + 18)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 16,
        Destreza: 11,
        Constituição: 16,
        Inteligência: 8,
        Sabedoria: 10,
        Carisma: 15
      },
      salvamentos: {
        Constituição: "+5",
        Carisma: "+4"
      },
      pericias: [
        "Intimidação +4"
      ],
      sentidos: [
        "Visão no Escuro 60 ft",
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Movimento Incorpóreo (pode passar por objetos), Visão Etérea.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz dois ataques com sua arma espectral."
        },
        {
          nome: "Espada Longa Espectral",
          tipo: "Corpo a Corpo",
          acerto: "+5",
          alcance: "5 ft",
          dano: "7 (1d8 + 3) energia."
        }
      ]
    },
    {
      nome: "Pidlwick II",
      funcao: "Brinquedo Mecânico (Constructo)",
      personalidade: "Silencioso, solitário, mas capaz de assassinatos se provocado ou substituído.",
      ficha_referencia: "Curse of Strahd, pág. 253.",
      CA: 14,
      PV: "10 (3d8)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: {
        Força: 10,
        Destreza: 14,
        Constituição: 11,
        Inteligência: 8,
        Sabedoria: 13,
        Carisma: 10
      },
      salvamentos: {
        Destreza: "+4"
      },
      pericias: [
        "Furtividade +4"
      ],
      sentidos: [
        "Percepção Passiva 11"
      ],
      idiomas: [
        "Comum (entende, mas não fala)"
      ],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Emboscada: No 1º turno, tem vantagem de ataque contra qualquer um que ainda não agiu. Constructo: Não precisa respirar, comer ou dormir.",
      acoes: [
        {
          nome: "Porrete",
          tipo: "Corpo a Corpo",
          acerto: "+2",
          alcance: "5 ft",
          dano: "2 (1d4) concussão."
        },
        {
          nome: "Dardo",
          tipo: "À Distância",
          acerto: "+4",
          alcance: "20/60 ft",
          dano: "4 (1d4+2) perfurante."
        }
      ]
    },
    {
      nome: "Armadura Animada de Strahd",
      funcao: "Armadura Encantada (Constructo)",
      personalidade: "Totalmente submissa às vontades sombrias do Castelo Ravenloft.",
      ficha_referencia: "Curse of Strahd, pág. 254.",
      CA: 21,
      PV: "112 (15d8 + 45)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: {
        Força: 17,
        Destreza: 13,
        Constituição: 16,
        Inteligência: 9,
        Sabedoria: 10,
        Carisma: 9
      },
      salvamentos: {
        Constituição: "+5"
      },
      pericias: [
        "Intimidação +2"
      ],
      sentidos: [
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "6 (2.300 XP)",
      habilidades_especiais: "Susceptibilidade Antimagia (Fica incapacitada em zonas antimagia).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz dois ataques corporais ou usa Raio de Choque."
        },
        {
          nome: "Espada Larga",
          tipo: "Corpo a Corpo",
          acerto: "+6",
          alcance: "5 ft",
          dano: "10 (2d6 + 3) cortante + 3 (1d6) elétrico."
        },
        {
          nome: "Raio de Choque",
          tipo: "Corpo a Corpo",
          acerto: "+4",
          alcance: "5 ft",
          dano: "10 (3d6) de dano elétrico."
        }
      ]
    },
    {
      nome: "Zumbi de Strahd",
      funcao: "Morto-vivo servil do Castelo",
      personalidade: "Feroz. Se perder membros, os membros continuam rastejando e atacando sozinhos.",
      ficha_referencia: "Curse of Strahd, pág. 255.",
      CA: 8,
      PV: "30 (4d8 + 12)",
      iniciativa: -2,
      deslocamento: "20 ft",
      atributos: {
        Força: 13,
        Destreza: 6,
        Constituição: 16,
        Inteligência: 3,
        Sabedoria: 6,
        Carisma: 5
      },
      salvamentos: {
        Constituição: "+5"
      },
      pericias: [
        "Percepção +1"
      ],
      sentidos: [
        "Visão no Escuro 60 ft",
        "Percepção Passiva 11"
      ],
      idiomas: [
        "Nenhum"
      ],
      nivel_de_desafio: "1 (200 XP)",
      habilidades_especiais: "Membros Repugnantes: Se receber pelo menos 5 de dano cortante, uma perna ou braço cai e ganha autonomia (10 PV) para rastejar e atacar oponentes.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz três ataques: um de mordida e dois de garra (se tiver braços)."
        },
        {
          nome: "Mordida",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "3 (1d4 + 1) perfurante."
        },
        {
          nome: "Garras",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "4 (1d6 + 1) cortante."
        }
      ]
    },
    {
      nome: "Bruxa Baroviana",
      funcao: "Adepta dos Segredos Sombrios de Baba Lysaga / Castelo",
      personalidade: "Traiçoeira, amarga e obsessiva.",
      ficha_referencia: "Curse of Strahd, pág. 256.",
      CA: 10,
      PV: "16 (3d8 + 6)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: {
        Força: 7,
        Destreza: 11,
        Constituição: 13,
        Inteligência: 14,
        Sabedoria: 11,
        Carisma: 12
      },
      salvamentos: {
        Inteligência: "+4"
      },
      pericias: [
        "Arcanismo +4",
        "Furtividade +2"
      ],
      sentidos: [
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "1/2 (100 XP)",
      habilidades_especiais: "Visão no Escuro 60 ft. Conjuração (Maga de 3º nível).",
      acoes: [
        {
          nome: "Adaga",
          tipo: "Corpo a Corpo",
          acerto: "+2",
          alcance: "5 ft",
          dano: "2 (1d4) perfurante."
        },
        {
          nome: "Garras (Requer magia Alterar-se)",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "4 (1d6+1) cortante."
        }
      ],
      magias: [
        {
          nome: "Truques",
          descricao: "Raio de Gelo (Ataque mágico +4 à distância. 1d8 de dano gélido e reduz o deslocamento do alvo em 10 ft), Mãos Mágicas, Prestidigitação."
        },
        {
          nome: "Nível 1 (4 espaços)",
          descricao: "Vitalidade Falsa (Ganha 1d4+4 PV temporários), Armadura Arcana (A CA base da bruxa passa a ser 13 + Modificador de Destreza), Mísseis Mágicos (3 dardos. Acerto automático, 1d4+1 dano de energia cada), Raio de Adoecimento (Ataque +4 à distância, causa 2d8 de veneno e o alvo deve passar em CD 12 Constituição ou ficar envenenado até o fim do próximo turno da bruxa)."
        },
        {
          nome: "Nível 2 (2 espaços)",
          descricao: "Alterar-se (Transforma suas mãos em garras cruéis que ganham bônus +1, +3 no acerto total e causam 1d6+1 cortante), Invisibilidade (Fica invisível por 1 hora ou até atacar/conjurar uma magia)."
        }
      ]
    },
    {
      nome: "Pária (Mongrelfolk)",
      funcao: "Aberrações da Abadia / Baróvia",
      personalidade: "Tímidos e deformados. Escondem suas mutações animais sob mantos.",
      ficha_referencia: "Curse of Strahd, pág. 257.",
      CA: 11,
      PV: "26 (4d8 + 12)",
      iniciativa: -1,
      deslocamento: "30 ft",
      atributos: {
        Força: 12,
        Destreza: 9,
        Constituição: 15,
        Inteligência: 9,
        Sabedoria: 10,
        Carisma: 6
      },
      salvamentos: {
        Constituição: "+4"
      },
      pericias: [
        "Furtividade +1"
      ],
      sentidos: [
        "Percepção Passiva 10"
      ],
      idiomas: [
        "Comum"
      ],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Mimetismo do Som, Camuflagem (vantagem em furtividade).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz dois ataques (Mordida + Garra) ou usa armas."
        },
        {
          nome: "Mordida",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "3 (1d4 + 1) perfurante."
        },
        {
          nome: "Garra",
          tipo: "Corpo a Corpo",
          acerto: "+3",
          alcance: "5 ft",
          dano: "3 (1d4 + 1) cortante."
        }
      ]
    },
    {
      nome: "Árvore Infectada",
      funcao: "Monstruosidade Vegetal",
      personalidade: "Imóvel e carnívora, corrompida pelo mal de Baróvia.",
      ficha_referencia: "Curse of Strahd, pág. 258.",
      CA: 15,
      PV: "149 (13d10 + 65)",
      iniciativa: 0,
      deslocamento: "20 ft",
      atributos: {
        Força: 23,
        Destreza: 10,
        Constituição: 20,
        Inteligência: 6,
        Sabedoria: 10,
        Carisma: 3
      },
      salvamentos: {
        Constituição: "+8"
      },
      pericias: [
        "Percepção +3"
      ],
      sentidos: [
        "Percepção Passiva 13"
      ],
      idiomas: [
        "Entende Comum"
      ],
      nivel_de_desafio: "7 (2.900 XP)",
      habilidades_especiais: "Aparência Falsa (parece uma árvore normal), Monstro de Cerco (Dano duplo contra estruturas).",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Dois ataques de galhos ou um galho e um agarrão."
        },
        {
          nome: "Mordida",
          tipo: "Corpo a Corpo",
          acerto: "+9",
          alcance: "5 ft",
          dano: "19 (3d8 + 6) perfurante."
        },
        {
          nome: "Galhos",
          tipo: "Corpo a Corpo",
          acerto: "+9",
          alcance: "5 ft",
          dano: "16 (3d6 + 6) contundente."
        }
      ]
    },
    {
      nome: "Retrato Guardião",
      funcao: "Sentinela Mágica (Constructo)",
      personalidade: "Imóvel, seus olhos sempre acompanham quem anda na sala.",
      ficha_referencia: "Curse of Strahd, pág. 259.",
      CA: 5,
      PV: "22 (5d8 + 5)",
      iniciativa: -5,
      deslocamento: "0 ft",
      atributos: {
        Força: 1,
        Destreza: 1,
        Constituição: 10,
        Inteligência: 14,
        Sabedoria: 10,
        Carisma: 10
      },
      salvamentos: {
        Constituição: "+2"
      },
      pericias: [
        "Percepção +2"
      ],
      sentidos: [
        "Percepção Passiva 12"
      ],
      idiomas: [
        "Entende Comum, mas não fala."
      ],
      nivel_de_desafio: "1 (200 XP)",
      habilidades_especiais: "Imagem Viva, Aparência Falsa (Parece apenas um quadro). Imunidades a quase todas as condições (Amedrontado, Enfeitiçado, Agarrado).",
      acoes: [
        {
          nome: "Conjuração Inata",
          descricao: "Pode conjurar sem componentes. 3/dia cada: Contra Mágica (Interrompe conjuração de magia usando a força da ilusão do quadro), Coroa de Loucura (CD 12 Sabedoria. Alvo ataca seus próprios aliados), Padrão Hipnótico (CD 12 Sabedoria. Alvos num cubo de 30 ft ficam incapacitados), Telecinésia (CD 12 Força. Move alvos em até 30 ft)."
        }
      ]
    },
    {
      nome: "Vassoura Animada de Ataque",
      funcao: "Autômato Defensivo",
      personalidade: "Reage violentamente a intrusos no armário ou quem tenta usá-la.",
      ficha_referencia: "Curse of Strahd, pág. 260.",
      CA: 15,
      PV: "17 (5d8)",
      iniciativa: 3,
      deslocamento: "30 ft, voo 50 ft (pairar)",
      atributos: {
        Força: 10,
        Destreza: 17,
        Constituição: 10,
        Inteligência: 1,
        Sabedoria: 5,
        Carisma: 1
      },
      salvamentos: {
        Destreza: "+5"
      },
      pericias: [
        "Acrobacia +5"
      ],
      sentidos: [
        "Percepção Passiva 5"
      ],
      idiomas: [
        "Nenhum"
      ],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Aparência Falsa, Susceptibilidade Antimagia.",
      acoes: [
        {
          nome: "Ataques Múltiplos",
          descricao: "Faz dois ataques corpo a corpo rápidos."
        },
        {
          nome: "Vassourada",
          tipo: "Corpo a Corpo",
          acerto: "+5",
          alcance: "5 ft",
          dano: "5 (1d4 + 3) concussão."
        }
      ]
    }
  ],
  apendice_d: [
    {
      nome: "Morgantha",
      funcao: "Bruxa da Noite (Night Hag)",
      personalidade: "Vende tortas oníricas em Baróvia. Sorrateira, manipuladora e incrivelmente má.",
      ficha_referencia: "Bruxa da Noite (Night Hag) - Manual dos Monstros.",
      CA: 17,
      PV: "112 (15d8 + 45)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 18, Destreza: 15, Constituição: 16, Inteligência: 16, Sabedoria: 14, Carisma: 16 },
      salvamentos: { Inteligência: "+6", Sabedoria: "+5", Carisma: "+6" },
      pericias: ["Enganação +6", "Furtividade +5", "Intuição +5", "Percepção +5"],
      sentidos: ["Visão no Escuro 120 ft", "Percepção Passiva 15"],
      idiomas: ["Abissal", "Comum", "Infernal", "Primordial"],
      nivel_de_desafio: "7 (2.900 XP)",
      habilidades_especiais: "Resistência à Magia (Vantagem em todos os testes contra feitiços). Conjuração Inata: Detectar Magia, Mísseis Mágicos (2/dia), Raio de Enfraquecimento (2/dia), Sono (2/dia).",
      acoes: [
        { nome: "Garras (Forma Verdadeira)", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "13 (2d8 + 4) cortante." },
        { nome: "Mudança de Forma", descricao: "Polimorfa-se de uma bruxa assustadora para uma idosa comum." },
        { nome: "Transe Etéreo", descricao: "Com seu amuleto *Heartstone*, viaja para o Plano Etéreo." },
        { nome: "Assombrar Pesadelos (1/dia)", descricao: "Atrás de uma vítima dormindo no plano etéreo, inflige sonhos terríveis que reduzem o limite de PV máximo do alvo em 5 (1d10) e impedem bônus de descanso longo." }
      ]
    },
    {
      nome: "Arrigal",
      funcao: "Líder e Assassino Vistani",
      personalidade: "Frio, pragmático e absolutamente focado no serviço de Strahd.",
      ficha_referencia: "Assassino (Assassin) - Manual dos Monstros (com bônus Vistani).",
      CA: 15,
      PV: "78 (12d8 + 24)",
      iniciativa: 4,
      deslocamento: "30 ft",
      atributos: { Força: 11, Destreza: 16, Constituição: 14, Inteligência: 13, Sabedoria: 11, Carisma: 10 },
      salvamentos: { Destreza: "+6", Inteligência: "+4" },
      pericias: ["Acrobacia +6", "Enganação +3", "Furtividade +9", "Percepção +3"],
      sentidos: ["Percepção Passiva 13"],
      idiomas: ["Comum", "Vistani", "Canto dos Ladrões"],
      nivel_de_desafio: "8 (3.900 XP)",
      habilidades_especiais: "Ataque Furtivo (+4d6), Assassinar (Vantagem contra qualquer criatura que não tenha agido no combate. Qualquer acerto em criatura surpresa é crítico automátio), Olho do Mal (Poder Vistani).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques com Espada Curta." },
        { nome: "Espada Curta", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "6 (1d6 + 3) perfurante + veneno 24 (7d6) Constituição CD 15 para metade." },
        { nome: "Besta Leve", tipo: "À Distância", acerto: "+6", alcance: "80/320 ft", dano: "7 (1d8 + 3) perfurante + veneno (igual acima)." }
      ]
    },
    {
      nome: "Luvash",
      funcao: "Irmão de Arrigal (Líder Vistani)",
      personalidade: "Pai de Arabelle. Bêbado na maior parte do tempo, barulhento e estressado.",
      ficha_referencia: "Capitão Bandido (Bandit Captain).",
      CA: 15,
      PV: "65 (10d8 + 20)",
      iniciativa: 3,
      deslocamento: "30 ft",
      atributos: { Força: 15, Destreza: 16, Constituição: 14, Inteligência: 14, Sabedoria: 11, Carisma: 14 },
      salvamentos: { Força: "+4", Destreza: "+5", Sabedoria: "+2" },
      pericias: ["Atletismo +4", "Enganação +4"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum", "Vistani"],
      nivel_de_desafio: "2 (450 XP)",
      habilidades_especiais: "Olho do Mal (Vistani). Reação: Parry (+2 CA).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz três ataques: dois de cimitarra e um de adaga, ou dois à distância com adagas." },
        { nome: "Cimitarra", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "6 (1d6 + 3) cortante." },
        { nome: "Adaga", tipo: "Corpo a Corpo ou Distância", acerto: "+5", alcance: "5/20/60 ft", dano: "5 (1d4 + 3) perfurante." }
      ]
    },
    {
      nome: "Neferon",
      funcao: "Guardião do Templo do Âmbar",
      personalidade: "Um Arcanaloth que defende os segredos proibidos do templo a todo custo.",
      ficha_referencia: "Arcanaloth - Manual dos Monstros.",
      CA: 17,
      PV: "104 (16d8 + 32)",
      iniciativa: 1,
      deslocamento: "30 ft, voo 30 ft",
      atributos: { Força: 20, Destreza: 12, Constituição: 14, Inteligência: 20, Sabedoria: 15, Carisma: 17 },
      salvamentos: { Destreza: "+5", Inteligência: "+9", Sabedoria: "+6", Carisma: "+7" },
      pericias: ["Arcanismo +13", "Enganação +9", "Intuição +6", "Percepção +6"],
      imunidades_a_dano: ["Ácido", "Venenoso", "Armas não mágicas"],
      sentidos: ["Visão Verdadeira 120 ft", "Percepção Passiva 16"],
      idiomas: ["Todos", "Telepatia 120 ft"],
      nivel_de_desafio: "12 (8.400 XP)",
      habilidades_especiais: "Resistência à Magia. Armas Mágicas. Conjuração (Mago de 16º nível, CD 17, Ataque +9).",
      acoes: [
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+7", alcance: "5 ft", dano: "8 (2d4 + 3) cortante + 10 (3d6) venenoso." },
        { nome: "Teleporte", descricao: "Ação: Magicamente se teleporta junto com seus equipamentos até 60 ft para um espaço visível." }
      ],
      magias: [
        { nome: "Truques", descricao: "Raio de Fogo (3d10), Mãos Mágicas, Ilusão Menor, Prestidigitação." },
        { nome: "Nível 1 a 3", descricao: "Escudo Arcano, Mísseis Mágicos, Detectar Pensamentos, Invisibilidade, Sugestão, Medo." },
        { nome: "Nível 4 a 6", descricao: "Banimento, Dimensão de Bolso, Dano de Conta (Cone de frio/Blight), Corrente de Relâmpagos (Chain Lightning, 10d8)." },
        { nome: "Nível 7 a 8", descricao: "Dedo da Morte (7d8+30 necrótico), Mente em Branco (Mind Blank)." }
      ]
    },
    {
      nome: "Guerreiro Fantasma (Phantom Warrior)",
      funcao: "Sentinela Espectral",
      personalidade: "Leal ao seu dever mesmo após a morte.",
      ficha_referencia: "Curse of Strahd, pág. 252.",
      CA: 16,
      PV: "45 (6d8 + 18)",
      iniciativa: 0,
      deslocamento: "30 ft",
      atributos: { Força: 16, Destreza: 11, Constituição: 16, Inteligência: 8, Sabedoria: 10, Carisma: 15 },
      salvamentos: { Constituição: "+5", Carisma: "+4" },
      pericias: ["Intimidação +4"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "3 (700 XP)",
      habilidades_especiais: "Movimento Incorpóreo (pode passar por objetos sofrendo dano), Visão Etérea.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques com sua arma espectral." },
        { nome: "Espada Longa Espectral", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "7 (1d8 + 3) de energia." }
      ]
    },
    {
      nome: "Pidlwick II",
      funcao: "Brinquedo Mecânico Assassino",
      personalidade: "Silencioso, melancólico, e perigoso quando irritado ou substituído.",
      ficha_referencia: "Curse of Strahd, pág. 253.",
      CA: 14,
      PV: "10 (3d8)",
      iniciativa: 2,
      deslocamento: "30 ft",
      atributos: { Força: 10, Destreza: 14, Constituição: 11, Inteligência: 8, Sabedoria: 13, Carisma: 10 },
      salvamentos: { Destreza: "+4" },
      pericias: ["Furtividade +4"],
      sentidos: ["Percepção Passiva 11"],
      idiomas: ["Comum (entende, mas não fala)"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Emboscada: No 1º turno, tem vantagem de ataque contra qualquer um que ainda não agiu. Constructo: Imune a veneno/exaustão.",
      acoes: [
        { nome: "Porrete", tipo: "Corpo a Corpo", acerto: "+2", alcance: "5 ft", dano: "2 (1d4) concussão." },
        { nome: "Dardo", tipo: "À Distância", acerto: "+4", alcance: "20/60 ft", dano: "4 (1d4+2) perfurante." }
      ]
    },
    {
      nome: "Armadura Animada de Strahd",
      funcao: "Armadura Encantada (Constructo)",
      personalidade: "Defesa malévola e submissa.",
      ficha_referencia: "Curse of Strahd, pág. 254.",
      CA: 21,
      PV: "112 (15d8 + 45)",
      iniciativa: 1,
      deslocamento: "30 ft",
      atributos: { Força: 17, Destreza: 13, Constituição: 16, Inteligência: 9, Sabedoria: 10, Carisma: 9 },
      salvamentos: { Constituição: "+5" },
      pericias: ["Intimidação +2"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "6 (2.300 XP)",
      habilidades_especiais: "Susceptibilidade Antimagia (Fica incapacitada em zonas antimagia).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques corporais ou usa Raio de Choque." },
        { nome: "Espada Larga", tipo: "Corpo a Corpo", acerto: "+6", alcance: "5 ft", dano: "10 (2d6 + 3) cortante + 3 (1d6) elétrico." },
        { nome: "Raio de Choque", tipo: "Corpo a Corpo", acerto: "+4", alcance: "5 ft", dano: "10 (3d6) de dano elétrico." }
      ]
    },
    {
      nome: "Zumbi de Strahd",
      funcao: "Morto-vivo Básico",
      personalidade: "Feroz. Seus membros rastejam sozinhos caso sejam decepados.",
      ficha_referencia: "Curse of Strahd, pág. 255.",
      CA: 8,
      PV: "30 (4d8 + 12)",
      iniciativa: -2,
      deslocamento: "20 ft",
      atributos: { Força: 13, Destreza: 6, Constituição: 16, Inteligência: 3, Sabedoria: 6, Carisma: 5 },
      salvamentos: { Constituição: "+5" },
      pericias: ["Percepção +1"],
      sentidos: ["Visão no Escuro 60 ft", "Percepção Passiva 11"],
      idiomas: ["Nenhum"],
      nivel_de_desafio: "1 (200 XP)",
      habilidades_especiais: "Membros Repugnantes: Se receber pelo menos 5 de dano cortante num turno, um membro cai e passa a agir sozinho com 10 PV.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz três ataques: um de mordida e dois de garra (se tiver braços)." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "3 (1d4 + 1) perfurante." },
        { nome: "Garras", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "4 (1d6 + 1) cortante." }
      ]
    },
    {
      nome: "Pária (Mongrelfolk)",
      funcao: "Aberrações",
      personalidade: "Tímidos e deformados. Mistura bestial humana.",
      ficha_referencia: "Curse of Strahd, pág. 257.",
      CA: 11,
      PV: "26 (4d8 + 12)",
      iniciativa: -1,
      deslocamento: "30 ft",
      atributos: { Força: 12, Destreza: 9, Constituição: 15, Inteligência: 9, Sabedoria: 10, Carisma: 6 },
      salvamentos: { Constituição: "+4" },
      pericias: ["Furtividade +1"],
      sentidos: ["Percepção Passiva 10"],
      idiomas: ["Comum"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Mimetismo do Som, Camuflagem (vantagem em furtividade).",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques (Mordida + Garra) ou usa armas." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "3 (1d4 + 1) perfurante." },
        { nome: "Garra", tipo: "Corpo a Corpo", acerto: "+3", alcance: "5 ft", dano: "3 (1d4 + 1) cortante." }
      ]
    },
    {
      nome: "Árvore Infectada",
      funcao: "Monstruosidade Vegetal",
      personalidade: "Imóvel e carnívora, corrompida pelo mal do Coven.",
      ficha_referencia: "Curse of Strahd, pág. 258.",
      CA: 15,
      PV: "149 (13d10 + 65)",
      iniciativa: 0,
      deslocamento: "20 ft",
      atributos: { Força: 23, Destreza: 10, Constituição: 20, Inteligência: 6, Sabedoria: 10, Carisma: 3 },
      salvamentos: { Constituição: "+8" },
      pericias: ["Percepção +3"],
      sentidos: ["Percepção Passiva 13"],
      idiomas: ["Entende Comum"],
      nivel_de_desafio: "7 (2.900 XP)",
      habilidades_especiais: "Aparência Falsa (parece uma árvore normal), Monstro de Cerco.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Dois ataques de galhos ou um galho e um agarrão de mordida." },
        { nome: "Mordida", tipo: "Corpo a Corpo", acerto: "+9", alcance: "5 ft", dano: "19 (3d8 + 6) perfurante." },
        { nome: "Galhos", tipo: "Corpo a Corpo", acerto: "+9", alcance: "5 ft", dano: "16 (3d6 + 6) contundente." }
      ]
    },
    {
      nome: "Vassoura Animada de Ataque",
      funcao: "Autômato Defensivo",
      personalidade: "Agressiva e protetora de sua área.",
      ficha_referencia: "Curse of Strahd, pág. 260.",
      CA: 15,
      PV: "17 (5d8)",
      iniciativa: 3,
      deslocamento: "30 ft, voo 50 ft (pairar)",
      atributos: { Força: 10, Destreza: 17, Constituição: 10, Inteligência: 1, Sabedoria: 5, Carisma: 1 },
      salvamentos: { Destreza: "+5" },
      pericias: ["Acrobacia +5"],
      sentidos: ["Percepção Passiva 5"],
      idiomas: ["Nenhum"],
      nivel_de_desafio: "1/4 (50 XP)",
      habilidades_especiais: "Aparência Falsa, Susceptibilidade Antimagia.",
      acoes: [
        { nome: "Ataques Múltiplos", descricao: "Faz dois ataques corpo a corpo rápidos." },
        { nome: "Vassourada", tipo: "Corpo a Corpo", acerto: "+5", alcance: "5 ft", dano: "5 (1d4 + 3) concussão." }
      ]
    }
  ]
};

export const getNpcList = (regiao = "todos") => {
  const source = regiao === "todos" ? Object.values(npcs).flat() : (npcs[regiao] ?? []);

  const seen = new Set();

  return source.filter((npc) => {
    const key = npc?.nome?.trim().toLowerCase();

    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

export default npcs;