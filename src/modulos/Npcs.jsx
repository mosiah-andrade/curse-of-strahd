const npcs = {
  "vila_de_barovia": [
    {
      "nome": "Ismark Indirovich",
      "funcao": "Novo Burgomestre da Vila de Barovia",
      "personalidade": "Honrado e protetor.",
      "estatisticas_combate": {
        "ficha_referencia": "Use as estatísticas de um **Guarda (Guard)**.",
        "CA": 16,
        "PV": "11 (2d8+2)",
        "iniciativa": 0,
        "deslocamento": "30 ft",
        "ataques": [
          {
            "nome": "Lança",
            "dano": "1d6+1 perfurante (ou 1d8+1 se empunhada com 2 mãos)",
            "alcance": "5 ft"
          }
        ],
        "habilidades_especiais": "Nenhuma. Ele é um combatente regular."
      }
    },
    {
      "nome": "Ireena Kolyana",
      "funcao": "Alvo de Strahd",
      "personalidade": "Determinada e resiliente.",
      "estatisticas_combate": {
        "ficha_referencia": "Use as estatísticas de um **Plebeu (Commoner)**.",
        "CA": 10,
        "PV": "4 (1d8)",
        "iniciativa": 0,
        "deslocamento": "30 ft",
        "ataques": [
          {
            "nome": "Faca de Cozinha",
            "dano": "1d4+0 cortante",
            "alcance": "5 ft"
          }
        ],
        "habilidades_especiais": "Nenhuma. Ela é uma não combatente, fraca em combate."
      }
    },
    {
      "nome": "Bildrath Cantemir",
      "funcao": "Mercador",
      "personalidade": "Ganancioso e covarde.",
      "estatisticas_combate": {
        "ficha_referencia": "Use as estatísticas de um **Plebeu (Commoner)**.",
        "CA": 10,
        "PV": "4 (1d8)",
        "iniciativa": 0,
        "deslocamento": "30 ft",
        "ataques": [
          {
            "nome": "Adaga",
            "dano": "1d4+0 perfurante",
            "alcance": "5 ft"
          }
        ],
        "habilidades_especiais": "Ele tentará fugir ou se render a todo custo."
      }
    },
    {
      "nome": "Parriwimple",
      "funcao": "Funcionário e guarda-costas de Bildrath Cantemir",
      "personalidade": "Simples, obediente e leal a seu tio.",
      "estatisticas_combate": {
        "ficha_referencia": "Adaptado de um **Gladiador (Gladiator)**",
        "CA": 16,
        "PV": "112 (15d8 + 45)",
        "deslocamento": "30 ft",
        "atributos": {
          "Força": 20,
          "Destreza": 15,
          "Constituição": 16,
          "Inteligência": 10,
          "Sabedoria": 12,
          "Carisma": 14
        },
        "salvamentos": {
          "Força": "+8",
          "Destreza": "+5",
          "Constituição": "+6"
        },
        "pericias": ["Atletismo +8", "Intimidação +5"],
        "sentidos": ["Percepção Passiva 11"],
        "idiomas": ["Comum"],
        "nivel_de_desafio": "5 (1,800 XP)",
        "acoes": [
          {
            "nome": "Ataques Múltiplos",
            "descricao": "Parriwimple faz três ataques corpo a corpo ou dois ataques à distância."
          },
          {
            "nome": "Tridente",
            "tipo": "Ataque com Arma Corpo a Corpo",
            "acerto": "+8",
            "alcance": "5 ft",
            "alvo": "um alvo",
            "dano": "7 (1d6 + 4) perfurante (ou 8 (1d8 + 4) se empunhado com 2 mãos)"
          },
          {
            "nome": "Rede",
            "tipo": "Ataque com Arma à Distância",
            "acerto": "+5",
            "alcance": "5/15 ft",
            "alvo": "um alvo grande ou menor",
            "descricao": "Se acertar, o alvo fica impedido. Para se libertar, deve fazer um teste de Força CD 10 ou a rede deve receber 5 de dano cortante (CA 10)."
          }
        ],
        "reacoes": [
          {
            "nome": "Ataque Brutal (Parry)",
            "descricao": "Parriwimple adiciona 3 à sua CA contra um ataque corpo a corpo que o atingiria. Ele deve ver o atacante e estar empunhando uma arma."
          }
        ],
        "equipamento": ["Tridente", "Rede"]
      }
    },
    {
        "nome": "Doru",
        "funcao": "Vampiro Faminto",
        "personalidade": "Enlouquecido e sedento por sangue.",
        "estatisticas_combate": {
            "ficha_referencia": "Use as estatísticas de um **Spawn Vampiro (Vampire Spawn)**.",
            "CA": 15,
            "PV": "82 (11d8+33)",
            "iniciativa": "+4",
            "deslocamento": "30 ft",
            "ataques": [
                {
                    "nome": "Mordida",
                    "dano": "1d6+4 perfurante + 2d6 necrótico",
                    "descricao": "Alvo precisa fazer um teste de salvamento de Constituição CD 14 ou o alvo reduz o máximo de PV. Doru se cura com o dano necrótico causado."
                },
                {
                    "nome": "Garras",
                    "dano": "2d4+4 cortante",
                    "alcance": "5 ft"
                }
            ],
            "habilidades_especiais": "Regeneração, Escalada Aracnídea, Imunidade a alguns tipos de dano."
        }
    },
    {
      "nome": "Padre Donavich",
      "funcao": "Sacerdote",
      "personalidade": "Desesperado e exausto.",
      "estatisticas_combate": {
        "ficha_referencia": "Use as estatísticas de um **Sacerdote (Priest)**.",
        "CA": 13,
        "PV": "27 (5d8+5)",
        "iniciativa": 0,
        "deslocamento": "30 ft",
        "ataques": [
          {
            "nome": "Clava",
            "dano": "1d6+1 contundente",
            "alcance": "5 ft"
          }
        ],
        "habilidades_especiais": "Pode conjurar feitiços divinos de cura e de ataque como 'Cure Wounds' e 'Sacred Flame'."
      }
    },
    {
      "nome": "Mad Mary",
      "funcao": "Mãe desesperada",
      "personalidade": "Triste e enlouquecida.",
      "estatisticas_combate": {
        "ficha_referencia": "Use as estatísticas de um **Plebeu (Commoner)**. Ela não lutará, mas chorará ou implorará.",
        "CA": 10,
        "PV": "4 (1d8)",
        "iniciativa": 0,
        "deslocamento": "30 ft",
        "ataques": "Nenhum.",
        "habilidades_especiais": "Nenhuma."
      }
    },
    {
        "nome": "Madam Eva",
        "funcao": "Líder da tribo e cartomante",
        "personalidade": "Enigmática, perspicaz e com um ar de sabedoria ancestral. Ela conhece os segredos do destino de Barovia.",
        "descricao": "Uma velha cigana com um olhar penetrante. É a única Vistani que pode traçar a verdadeira leitura do destino dos heróis."
    },
    {
        "nome": "Yanek",
        "funcao": "Guardião do Acampamento",
        "personalidade": "Silencioso e observador. Raramente fala, mas sua presença é intimidadora. Fiel a Madam Eva.",
        "estatisticas_combate": {
            "ficha_referencia": "Use as estatísticas de um Bárbaro (Barbarian) de nível 3.",
            "CA": 14,
            "PV": "35 (3d12 + 15)",
            "deslocamento": "40 ft",
            "habilidades_especiais": "Fúria (Rage)"
        }
    },
    {
        "nome": "Esmeralda d'Avenir",
        "funcao": "Caçadora de Vampiros (NPC)",
        "personalidade": "Determinada, pragmática e com um lado cínico. Apesar de suas perdas, ela continua sua missão com uma feroz convicção.",
        "estatisticas_combate": {
            "ficha_referencia": "Use as estatísticas de um Inquisidor (Inquisitor) com algumas adaptações.",
            "CA": 16,
            "PV": "70 (10d8 + 25)",
            "deslocamento": "30 ft",
            "ataques": [
                {
                    "nome": "Espada Larga",
                    "dano": "1d10 + 3 cortante"
                },
                {
                    "nome": "Besta Pesada",
                    "dano": "1d12 perfurante",
                    "alcance": "100/400 ft"
                }
            ],
            "habilidades_especiais": "Lançar feitiços de clérigo, Habilidade de detecção de mortos-vivos."
        },
        "descricao": "Uma caçadora de vampiros com uma perna protética, que busca vingança contra Strahd por ter tirado seu mentor."
    }
    
  ]
};

export default npcs;