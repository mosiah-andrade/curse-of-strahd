import React, { useState } from 'react';
import './index.css';
import Dados  from './modulos/Dados.jsx';
// Dados de encontros aleatórios em formato JSON, baseados nas tabelas fornecidas.
const encountersData = {
  estrada: {
    dia: {
      2: "3d6 plebeus Barovianos",
      3: "1d6 batedores Barovianos",
      4: "Armadilha de caça",
      5: "Sepultura",
      6: "Trilha falsa",
      7: "1d4-1 bandidos Vistanis",
      8: "Cavaleiro esquelético",
      9: "Bugiganga",
      10: "Pacote escondido",
      11: "1d4 enxames de morcegos (50%) ou 1 homem-corvo (veja apêndice D) forma de corvo (50%)",
      12: "1d6 lobos atrozes",
      13: "3d6 lobos",
      14: "1d4 furiosos",
      15: "Cadáver",
      16: "1d6 lobisomens em forma humana",
      17: "1 druida com 2d6 galhos infectados",
      18: "2d4 espetos infectados",
      19: "1d6 espantalhos",
      20: "1 ressurgido"
    },
    noite: {
      2: "1 fantasma",
      3: "Armadilha de caça",
      4: "Sepultura",
      5: "Bugiganga",
      6: "Cadáver",
      7: "Pacote escondido",
      8: "Cavaleiro esquelético",
      9: "1d8 enxame de morcegos",
      10: "1d6 lobos atrozes",
      11: "3d6 lobos",
      12: "1d4 furiosos",
      13: "1 druida e 2d6 galhos infectados",
      14: "2d4 espetos infectados",
      15: "1d6 lobisomens na forma de lobo",
      16: "3d6 zumbis",
      17: "1d6 espantalhos",
      18: "1d8 zumbis de Strahd (veja apêndice D)",
      19: "1 fogo-fátuo",
      20: "1 ressurgido"
    }
  },
  selvagem: {
    dia: {
      2: "3d6 plebeus Barovianos",
      3: "1d6 batedores Barovianos",
      4: "Armadilha de caça",
      5: "Sepultura",
      6: "Trilha falsa",
      7: "1d4-1 bandidos Vistanis",
      8: "Cavaleiro esquelético",
      9: "Bugiganga",
      10: "Pacote escondido",
      11: "1d4 enxames de morcegos (50%) ou 1 homem-corvo (veja apêndice D) forma de corvo (50%)",
      12: "1d6 lobos atrozes",
      13: "3d6 lobos",
      14: "1d4 furiosos",
      15: "Cadáver",
      16: "1d6 lobisomens em forma humana",
      17: "1 druida com 2d6 galhos infectados",
      18: "2d4 espetos infectados",
      19: "1d6 espantalhos",
      20: "1 ressurgido"
    },
    noite: {
      2: "1 fantasma",
      3: "Armadilha de caça",
      4: "Sepultura",
      5: "Bugiganga",
      6: "Cadáver",
      7: "Pacote escondido",
      8: "Cavaleiro esquelético",
      9: "1d8 enxame de morcegos",
      10: "1d6 lobos atrozes",
      11: "3d6 lobos",
      12: "1d4 furiosos",
      13: "1 druida e 2d6 galhos infectados",
      14: "2d4 espetos infectados",
      15: "1d6 lobisomens na forma de lobo",
      16: "3d6 zumbis",
      17: "1d6 espantalhos",
      18: "1d8 zumbis de Strahd (veja apêndice D)",
      19: "1 fogo-fátuo",
      20: "1 ressurgido"
    }
  }
};

// Função auxiliar para formatar o tempo de minutos para um formato de "horas e minutos"
const formatTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  let timeString = '';
  if (hours > 0) {
    timeString += `${hours} hora${hours > 1 ? 's' : ''}`;
  }
  if (minutes > 0) {
    if (hours > 0) {
      timeString += ' e ';
    }
    timeString += `${minutes} minuto${minutes > 1 ? 's' : ''}`;
  }
  return timeString || '0 minutos';
};

// Função para buscar o encontro com base no resultado da rolagem
const getEncounter = (totalRoll, terrain, dayTime) => {
  const data = encountersData[terrain][dayTime];
  return data[totalRoll] || "Resultado da rolagem não encontrado na tabela.";
};

export default function App() {
  const [results, setResults] = useState([]);
  const [hours, setHours] = useState('');
  const [rolling, setRolling] = useState(false);
  const [terrain, setTerrain] = useState('estrada');
  const [dayTime, setDayTime] = useState('dia');

  const handleHoursChange = (e) => {
    const val = Number(e.target.value);
    setHours(e.target.value === '' ? '' : Math.max(1, val));
  };

  const handleTerrainChange = (e) => {
    setTerrain(e.target.value);
  };

  const handleDayTimeChange = (e) => {
    setDayTime(e.target.value);
  };

  const handleTravelRoll = (e) => {
    e.preventDefault();
    if (!hours || hours < 1) return;
    setRolling(true);
    const rollsCount = Math.ceil(Number(hours) * 2); // 1d20 por 30 min
    const rolls = [];
    const threshold = terrain === 'estrada' ? 18 : 15;
    let encountersToday = 0; // Contador para os encontros

    for (let i = 0; i < rollsCount; i++) {
      let encounterDescription = null;
      let d12d8Roll = null;
      let d20Roll = null;

      // Só rola o d20 se o limite de 2 encontros não foi atingido
      if (encountersToday < 2) {
        d20Roll = Math.floor(Math.random() * 20) + 1;

        if (d20Roll >= threshold) {
          // Se houver um encontro, rolar d12+d8
          const d12 = Math.floor(Math.random() * 12) + 1;
          const d8 = Math.floor(Math.random() * 8) + 1;
          d12d8Roll = { d12, d8, total: d12 + d8 };
          encounterDescription = getEncounter(d12d8Roll.total, terrain, dayTime);
          encountersToday++; // Incrementa a contagem de encontros
        }
      }

      rolls.push({
        d20Roll,
        time: formatTime((i + 1) * 30),
        hasEncounter: d20Roll >= threshold,
        d12d8Roll,
        encounterDescription,
      });
    }

    setResults(rolls);
    setRolling(false);
  };

  // Encontros encontrados durante a viagem
  const encountersFound = results.filter(roll => roll.hasEncounter);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 text-white font-inter p-4 max-w-4xl mx-auto">
    
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Calculadora de Encontros Aleatórios</h1>
        <p className="text-gray-400 mb-8 text-center">
          Calcule os perigos de uma viagem em Baróvia. A cada 30 minutos, o sistema verifica se um encontro aleatório ocorre.
        </p>
        <form onSubmit={handleTravelRoll} className="mb-4 flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg">
          <label htmlFor="hours" className="text-lg font-semibold">Quantas horas de viagem?</label>
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={handleHoursChange}
            min={1}
            className="w-24 px-3 py-2 rounded-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={terrain}
            onChange={handleTerrainChange}
            className="px-3 py-2 rounded-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="estrada">Estrada</option>
            <option value="selvagem">Área Selvagem</option>
          </select>
          <select
            value={dayTime}
            onChange={handleDayTimeChange}
            className="px-3 py-2 rounded-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="dia">Dia</option>
            <option value="noite">Noite</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-colors duration-200 font-bold"
            disabled={rolling}
          >
            {rolling ? 'Rolando...' : 'Rolar viagem'}
          </button>
        </form>
        {results.length > 0 && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full">
            <p className="text-lg font-semibold mb-2 text-center">
              Total de rolagens: {results.length}
            </p>
            <div className="mt-4 pt-4 text-center">
              {encountersFound.length > 0 ? (
                <>
                  <p className="text-yellow-300 font-bold text-xl mb-4">
                    {encountersFound.length} encontro{encountersFound.length > 1 ? 's' : ''} ocorrido{encountersFound.length > 1 ? 's' : ''}!
                  </p>
                  <ul className="text-left space-y-4">
                    {encountersFound.map((e, i) => (
                      <li key={i} className="p-4 bg-gray-700 rounded-lg shadow-inner">
                        <p><span className="font-bold text-lg text-green-300">Em {e.time}:</span></p>
                        <p className="mt-1 text-gray-200">
                          Rolagem do d20: {e.d20Roll}
                        </p>
                        <p className="mt-1 text-gray-200">
                          Rolagem do Encontro: {e.d12d8Roll.d12} (d12) + {e.d12d8Roll.d8} (d8) = {e.d12d8Roll.total}
                        </p>
                        <p className="mt-1 text-gray-200">
                          Resultado: {e.encounterDescription}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-green-400 font-bold text-xl">
                  Nenhum encontro aleatório!
                </p>
              )}
            </div>
              
          </div>
        )}
      </div>
      <div className="flex justify-center my-8">
        <Dados />
      </div>
    </div>
  );
}
