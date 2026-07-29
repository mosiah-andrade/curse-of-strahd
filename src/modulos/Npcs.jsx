const npcs = {
  {
    "nome": "Strahd von Zarovich",
    "personalidade": "Mente afiada, coração escuro, formidável, estrategista e impiedoso.",
    "alinhamento": "Leal e Mau",
    "estatisticas": {
      "FOR": 18,
      "DES": 18,
      "CON": 18,
      "INT": 20,
      "SAB": 15,
      "CAR": 18
    },
    "ND": 15,
    "classe_armadura": 16,
    "pontos_vida": 144,
    "ataques": [
      "Ataques Múltiplos (Forma de Vampiro Apenas)",
      "Golpe Desarmado: +9 para atingir, 8 (1d8+4) de dano de concussão mais 14 (4d6) de dano necrótico",
      "Mordida: +9 para atingir, 7 (1d6+4) de dano perfurante mais 10 (3d6) de dano necrótico"
    ],
    "habilidades_especiais": [
      "Regeneração",
      "Resistência Lendária (3/dia)",
      "Metamorfo",
      "Escalada Aracnídea",
      "Fraquezas Vampíricas",
      "Ações Lendárias"
    ]
  },
  {
    "nome": "Baba Lysaga",
    "personalidade": "Apegada obsessivamente a Strahd, cruel, poderosa e vingativa.",
    "alinhamento": "Caótico e Mau",
    "estatisticas": {
      "FOR": 18,
      "DES": 10,
      "CON": 16,
      "INT": 20,
      "SAB": 17,
      "CAR": 13
    },
    "ND": 11,
    "classe_armadura": 15,
    "pontos_vida": 120,
    "ataques": [
      "Ataques Múltiplos (3 ataques com bordão)",
      "Bordão: +8 para atingir, 7 (1d6+4) de dano de concussão",
      "Invocar Enxames de Insetos"
    ],
    "habilidades_especiais": [
      "Bênção da Mãe Noite",
      "Conjuração (16º nível)",
      "Metamorfo"
    ]
  },
  {
    "nome": "Rahadin",
    "personalidade": "Servo eterno, leal, guerreiro cruel e impiedoso.",
    "alinhamento": "Leal e Mau",
    "estatisticas": {
      "FOR": 14,
      "DES": 22,
      "CON": 17,
      "INT": 15,
      "SAB": 16,
      "CAR": 18
    },
    "ND": 10,
    "classe_armadura": 18,
    "pontos_vida": 135,
    "ataques": [
      "Ataques Múltiplos (3 ataques com cimitarra ou 2 com dardos)",
      "Cimitarra: +10 para atingir, 9 (1d6+6) de dano cortante",
      "Dardo Envenenado: +10 para atingir, 8 (1d4+6) de dano perfurante + 5 (2d4) de dano de veneno"
    ],
    "habilidades_especiais": [
      "Coro da Morte",
      "Ancestralidade Feérica",
      "Máscara da Natureza",
      "Conjuração Inata"
    ]
  },
  {
    "nome": "Madame Eva",
    "personalidade": "Vidente enigmática, protetora dos Vistani, focada em seus objetivos.",
    "alinhamento": "Caótico e Neutro",
    "estatisticas": {
      "FOR": 8,
      "DES": 11,
      "CON": 12,
      "INT": 17,
      "SAB": 20,
      "CAR": 18
    },
    "ND": 10,
    "classe_armadura": 10,
    "pontos_vida": 88,
    "ataques": [
      "Adaga: +4 para atingir, 2 (1d4) de dano perfurante",
      "Praga (Recarrega após Descanso Longo)",
      "Olho do Mal"
    ],
    "habilidades_especiais": [
      "Conjuração (16º nível)",
      "Clarividência Mágica"
    ]
  },
  {
    "nome": "Ezmerelda d'Avenir",
    "personalidade": "Caçadora de monstros corajosa, determinada e habilidosa.",
    "alinhamento": "Caótico e Bom",
    "estatisticas": {
      "FOR": 14,
      "DES": 19,
      "CON": 16,
      "INT": 16,
      "SAB": 11,
      "CAR": 17
    },
    "ND": 8,
    "classe_armadura": 17,
    "pontos_vida": 82,
    "ataques": [
      "Ataques Múltiplos (3 ataques)",
      "Espada Curta: +7 para atingir, 7 (1d6+4) de dano perfurante",
      "Rapieira: +7 para atingir, 8 (1d8+4) de dano perfurante"
    ],
    "habilidades_especiais": [
      "Conjuração (7º nível)",
      "Equipamento Especial"
    ]
  },
  {
    "nome": "Izek Strazni",
    "personalidade": "Cruel, leal ao seu mestre, obcecado e intimidador.",
    "alinhamento": "Neutro e Mau",
    "estatisticas": {
      "FOR": 18,
      "DES": 15,
      "CON": 16,
      "INT": 10,
      "SAB": 9,
      "CAR": 15
    },
    "ND": 5,
    "classe_armadura": 14,
    "pontos_vida": 112,
    "ataques": [
      "Ataques Múltiplos (2 ataques com machado)",
      "Machado de Batalha: +7 para atingir, 13 (2d8+4) de dano cortante",
      "Lançar Fogo: +5 para atingir, 10 (3d6) de dano de fogo"
    ],
    "habilidades_especiais": [
      "Bruto",
      "Presente Demoniaco (Braço Diabólico)"
    ]
  },
  {
    "nome": "Rictavio (Rudolph van Richten)",
    "personalidade": "Caçador de monstros lendário, cauteloso e estrategista.",
    "alinhamento": "Leal e Bom",
    "estatisticas": {
      "FOR": 9,
      "DES": 12,
      "CON": 13,
      "INT": 16,
      "SAB": 18,
      "CAR": 16
    },
    "ND": 5,
    "classe_armadura": 12,
    "pontos_vida": 77,
    "ataques": [
      "Ataques Múltiplos (2 ataques com espada-bengala)",
      "Espada-Bengala: +4 para atingir, 4 (1d6+1) de dano de concussão ou perfurante"
    ],
    "habilidades_especiais": [
      "Conjuração (9º nível)",
      "Matador de Mortos-Vivos",
      "Equipamento Especial"
    ]
  },
  {
    "nome": "O Abade",
    "personalidade": "Corrompido por seus próprios ideais de perfeição, obcecado.",
    "alinhamento": "Leal e Mau",
    "estatisticas": {
      "FOR": 18,
      "DES": 18,
      "CON": 18,
      "INT": 17,
      "SAB": 20,
      "CAR": 20
    },
    "ND": 10,
    "classe_armadura": 17,
    "pontos_vida": 136,
    "ataques": [
      "Maça: +8 para atingir, 7 (1d6+4) de dano de concussão + 18 (4d8) de dano radiante",
      "Olhar Curativo (3/dia)"
    ],
    "habilidades_especiais": [
      "Anjo Disfarçado (Deva)",
      "Resistência à Magia"
    ]
  },
  {
    "nome": "Vladimir Horngaard",
    "personalidade": "Vingativo, amargurado e leal à sua ordem.",
    "alinhamento": "Leal e Mau",
    "estatisticas": {
      "FOR": 18,
      "DES": 17,
      "CON": 18,
      "INT": 13,
      "SAB": 15,
      "CAR": 14
    },
    "ND": 7,
    "classe_armadura": 17,
    "pontos_vida": 192,
    "ataques": [
      "Ataques Múltiplos (2 ataques com espada)",
      "Espada Grande +2: +9 para atingir, 20 (4d6+6) de dano cortante"
    ],
    "habilidades_especiais": [
      "Vingança Mortal",
      "Regeneração"
    ]
  },
  {
    "nome": "Homem-Corvo (Wereraven)",
    "personalidade": "Cauteloso, secreto e geralmente benevolente.",
    "alinhamento": "Leal e Bom",
    "estatisticas": {
      "FOR": 10,
      "DES": 15,
      "CON": 11,
      "INT": 13,
      "SAB": 15,
      "CAR": 14
    },
    "ND": 2,
    "classe_armadura": 12,
    "pontos_vida": 31,
    "ataques": [
      "Bico (Forma de Corvo ou Híbrida): +4 para atingir, 1 de dano perfurante",
      "Espada Curta (Forma Humana ou Híbrida): +4 para atingir, 5 (1d6+2) de dano perfurante"
    ],
    "habilidades_especiais": [
      "Metamorfo",
      "Mimetismo do Som",
      "Regeneração (Imunidade a danos não mágicos/não prateados)"
    ]
  },
  {
    "nome": "Cabana Rastejante de Baba Lysaga",
    "personalidade": "Constructo sem mente, segue ordens de Baba Lysaga.",
    "alinhamento": "Imparcial (Neutro)",
    "estatisticas": {
      "FOR": 26,
      "DES": 7,
      "CON": 20,
      "INT": 1,
      "SAB": 3,
      "CAR": 3
    },
    "ND": 11,
    "classe_armadura": 16,
    "pontos_vida": 263,
    "ataques": [
      "Ataques Múltiplos (Ataques com raízes ou rocha)",
      "Raiz: +12 para atingir, 30 (4d10+8) de dano de concussão",
      "Rocha: +12 para atingir, 21 (3d8+8) de dano de concussão"
    ],
    "habilidades_especiais": [
      "Monstro de Cerco",
      "Susceptibilidade Antimagia"
    ]
  },
  {
    "nome": "Guerreiro Fantasma",
    "personalidade": "Leal ao seu dever, persistente e honrado.",
    "alinhamento": "Qualquer tendência",
    "estatisticas": {
      "FOR": 16,
      "DES": 11,
      "CON": 16,
      "INT": 8,
      "SAB": 10,
      "CAR": 15
    },
    "ND": 3,
    "classe_armadura": 16,
    "pontos_vida": 45,
    "ataques": [
      "Ataques Múltiplos (2 ataques com espada longa espectral)",
      "Espada Longa Espectral: +5 para atingir, 7 (1d8+3) de dano de energia"
    ],
    "habilidades_especiais": [
      "Movimento Incorpóreo",
      "Visão Etérea",
      "Forma Etérea"
    ]
  },
  {
    "nome": "Pidlwick II",
    "personalidade": "Solitário, assassino quando chateado, busca companhia.",
    "alinhamento": "Neutro e Mau",
    "estatisticas": {
      "FOR": 10,
      "DES": 14,
      "CON": 11,
      "INT": 8,
      "SAB": 13,
      "CAR": 10
    },
    "ND": "1/4",
    "classe_armadura": 14,
    "pontos_vida": 10,
    "ataques": [
      "Porrete: +2 para atingir, 2 (1d4) de dano de concussão",
      "Dardo: +4 para atingir, 4 (1d4+2) de dano perfurante"
    ],
    "habilidades_especiais": [
      "Emboscada",
      "Constructo"
    ]
  },
  {
    "nome": "Armadura Animada de Strahd",
    "personalidade": "Malévola, leal apenas a Strahd.",
    "alinhamento": "Leal e Mau",
    "estatisticas": {
      "FOR": 17,
      "DES": 13,
      "CON": 16,
      "INT": 9,
      "SAB": 10,
      "CAR": 9
    },
    "ND": 6,
    "classe_armadura": 21,
    "pontos_vida": 112,
    "ataques": [
      "Ataques Múltiplos (2 ataques corpo-a-corpo ou raio de choque)",
      "Espada Larga: +6 para atingir, 10 (2d6+3) de dano cortante + 3 (1d6) de dano elétrico",
      "Raio de Choque: +4 para atingir, 10 (3d6) de dano elétrico"
    ],
    "habilidades_especiais": [
      "Objeto do Mal",
      "Susceptibilidade Antimagia"
    ]
  },
  {
    "nome": "Zumbi de Strahd",
    "personalidade": "Morto-vivo sem mente, persistente.",
    "alinhamento": "Imparcial (Neutro)",
    "estatisticas": {
      "FOR": 13,
      "DES": 6,
      "CON": 16,
      "INT": 3,
      "SAB": 6,
      "CAR": 5
    },
    "ND": 1,
    "classe_armadura": 8,
    "pontos_vida": 30,
    "ataques": [
      "Ataques Múltiplos (3 ataques: mordida e 2 garras)",
      "Mordida: +3 para atingir, 3 (1d4+1) de dano perfurante",
      "Garras: +3 para atingir, 4 (1d6+1) de dano cortante"
    ],
    "habilidades_especiais": [
      "Membros Repugnantes",
      "Natureza de Morto-Vivo"
    ]
  },
  {
    "nome": "Kasimir Velikov",
    "personalidade": "Mutilado, resiliente, busca redenção para sua irmã.",
    "alinhamento": "Neutro",
    "estatisticas": {
      "FOR": 9,
      "DES": 14,
      "CON": 11,
      "INT": 17,
      "SAB": 12,
      "CAR": 11
    },
    "ND": 6,
    "classe_armadura": 12,
    "pontos_vida": 40,
    "ataques": [
      "Adaga: +5 para atingir, 4 (1d4+2) de dano perfurante"
    ],
    "habilidades_especiais": [
      "Conjuração (9º nível - Arcano)",
      "Ancestral Feérico",
      "Visão no Escuro"
    ]
  },
  {
    "nome": "Bruxa Baroviana",
    "personalidade": "Colecionadora obsessiva, pactuada com Strahd, traiçoeira.",
    "alinhamento": "Caótico e Mau",
    "estatisticas": {
      "FOR": 7,
      "DES": 11,
      "CON": 13,
      "INT": 14,
      "SAB": 11,
      "CAR": 12
    },
    "ND": "1/2",
    "classe_armadura": 10,
    "pontos_vida": 16,
    "ataques": [
      "Garras (Requer Alterar): +3 para atingir, 4 (1d6+1) de dano cortante",
      "Adaga: +2 para atingir, 2 (1d4) de dano perfurante"
    ],
    "habilidades_especiais": [
      "Conjuração (3º nível)",
      "Visão no Escuro"
    ]
  },
  {
    "nome": "Pária (Mongrelfolk)",
    "personalidade": "Tímido, territorial, deformado e mestre em camuflagem.",
    "alinhamento": "Qualquer tendência",
    "estatisticas": {
      "FOR": 12,
      "DES": 9,
      "CON": 15,
      "INT": 9,
      "SAB": 10,
      "CAR": 6
    },
    "ND": "1/4",
    "classe_armadura": 11,
    "pontos_vida": 26,
    "ataques": [
      "Ataques Múltiplos (2 ataques: mordida e garra ou arma)",
      "Mordida: +3 para atingir, 3 (1d4+1) de dano perfurante",
      "Garra: +3 para atingir, 3 (1d4+1) de dano cortante"
    ],
    "habilidades_especiais": [
      "Mimetismo do Som",
      "Especialista em Camuflagem"
    ]
  },
  {
    "nome": "Árvore Infectada",
    "personalidade": "Planta carnívora viciosa, odeia outras árvores infectadas e entes.",
    "alinhamento": "Neutro e Mau",
    "estatisticas": {
      "FOR": 23,
      "DES": 10,
      "CON": 20,
      "INT": 6,
      "SAB": 10,
      "CAR": 3
    },
    "ND": 7,
    "classe_armadura": 15,
    "pontos_vida": 149,
    "ataques": [
      "Ataques Múltiplos (4 ataques: 2 galhos e 2 raízes)",
      "Mordida: +9 para atingir, 19 (3d8+6) de dano perfurante",
      "Galhos: +9 para atingir, 16 (3d6+6) de dano de concussão",
      "Raiz Constritora: +9 para atingir, 9 (1d6+6) de dano de concussão + agarrado"
    ],
    "habilidades_especiais": [
      "Aparência Falsa",
      "Monstro de Cerco"
    ]
  },
  {
    "nome": "Retrato Guardião",
    "personalidade": "Sentinela mágica, imagem viva de alguém.",
    "alinhamento": "Imparcial (Neutro)",
    "estatisticas": {
      "FOR": 1,
      "DES": 1,
      "CON": 10,
      "INT": 14,
      "SAB": 10,
      "CAR": 10
    },
    "ND": 1,
    "classe_armadura": 5,
    "pontos_vida": 22,
    "ataques": [
      "Conjuração Inata (3/dia): contra mágica, coroa de loucura, padrão hipnótico, telecinésia"
    ],
    "habilidades_especiais": [
      "Imagem Viva",
      "Aparência Falsa",
      "Susceptibilidade Antimagia"
    ]
  },
  {
    "nome": "Vassoura Animada de Ataque",
    "personalidade": "Autômato simples, ataca quem tenta montá-la.",
    "alinhamento": "Imparcial (Neutro)",
    "estatisticas": {
      "FOR": 10,
      "DES": 17,
      "CON": 10,
      "INT": 1,
      "SAB": 5,
      "CAR": 1
    },
    "ND": "1/4",
    "classe_armadura": 15,
    "pontos_vida": 17,
    "ataques": [
      "Ataques Múltiplos (2 ataques de vassourada)",
      "Vassourada: +5 para atingir, 5 (1d4+3) de dano de concussão"
    ],
    "habilidades_especiais": [
      "Aparência Falsa",
      "Susceptibilidade Antimagia",
      "Ataque Animado (Reação)"
    ]
  }


}
export default npcs;
