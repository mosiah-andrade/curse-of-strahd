import React, { useState } from 'react';

// Componente que exibe os dados dos dados de RPG
export default function Dados() {
  const [resultado, setResultado] = useState('');
  const [lados, setLados] = useState(4);
  const [quantidade, setQuantidade] = useState(1);
  const [corResultado, setCorResultado] = useState('text-amber-100');

  function rolarDado(lados, quantidade = 1) {
    let resultados = [];
    let cor = 'text-amber-100'; // Cor padrão

    for (let i = 0; i < quantidade; i++) {
      const resultado = Math.floor(Math.random() * lados) + 1;
      resultados.push(resultado);

      // Lógica para determinar a cor
      if (resultado === 1) {
        cor = 'text-red-500';
      } else if (resultado === lados) {
        cor = 'text-green-500';
      }
    }
    
    // Define o estado da cor com base no último resultado rolado
    // ou no que for mais relevante (neste caso, o último).
    setCorResultado(cor);
    
    return resultados.join(', ');
  }

  function handleRolar() {
    setResultado(rolarDado(lados, quantidade));
  }

  return (
    <div className="flex space-x-2">
      <form onSubmit={e => e.preventDefault()}>
        <label className="mr-2 font-bold">Rolar Dados:</label>
        <select
          className="mx-2 p-1 bg-gray-800 border border-gray-700 rounded text-white"
          value={lados}
          onChange={e => setLados(Number(e.target.value))}
        >
          <option value="4">d4</option>
          <option value="6">d6</option>
          <option value="8">d8</option>
          <option value="10">d10</option>
          <option value="12">d12</option>
          <option value="20">d20</option>
          <option value="100">d100</option>
        </select>
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={e => setQuantidade(Number(e.target.value))}
          className="mx-2 w-16 p-1 bg-gray-800 border border-gray-700 rounded text-center text-white"
        />
        <button
          type="button"
          className="px-3 py-1 bg-red-800 hover:bg-red-900 rounded text-white font-bold"
          onClick={handleRolar}
        >
          Rolar
        </button>
        <br />
        <div className="flex justify-center mt-4">
          <div className="bg-[#4e342e] border-2 border-[#3e2723] p-4 rounded-lg shadow-md text-center w-full max-w-sm">
            <span className={`font-mono text-lg ${corResultado}`}>{resultado}</span>
          </div>
        </div>
      </form>
    </div>
  );
}