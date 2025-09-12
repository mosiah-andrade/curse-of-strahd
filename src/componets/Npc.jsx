import React, { useState } from 'react';
import npcs from '../modulos/Npcs.jsx';
import '../index.css';

// Componentes SVG para os ícones
const Search = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
    </svg>
);

const X = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
    </svg>
);


// Componente recursivo para renderizar detalhes de um objeto ou array
const renderDetails = (data, title, isNested = false) => {
    if (typeof data !== 'object' || data === null) {
        return <p>{data}</p>;
    }

    const formatKey = (key) => {
        // Converte de snake_case para Title Case
        return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div key={title} className={`${isNested ? 'mt-4 border-t border-gray-600 pt-4' : ''}`}>
            {title && <h3 className={`font-bold ${isNested ? 'text-xl mb-2' : 'text-3xl mb-4'}`}>{formatKey(title)}</h3>}
            <ul className="space-y-2 text-gray-300">
                {Object.entries(data).map(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                        return (
                            <li key={key}>
                                {Array.isArray(value) ? (
                                    <>
                                        <h4 className="font-semibold text-gray-200 mt-2">{formatKey(key)}:</h4>
                                        <ul className="list-disc list-inside ml-4 mt-1">
                                            {value.map((item, i) => (
                                                <li key={i} className="mb-2">
                                                    {typeof item === 'object' ? renderDetails(item, '', true) : item}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    renderDetails(value, key, true)
                                )}
                            </li>
                        );
                    } else {
                        return (
                            <li key={key}>
                                <span className="font-medium text-gray-200">{formatKey(key)}:</span> {value}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};


function Npc() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNpc, setSelectedNpc] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleNpcClick = (npc) => {
        setSelectedNpc(npc);
    };

    const handleClosePopup = () => {
        setSelectedNpc(null);
    };

    const filteredNpcs = npcs.vila_de_barovia.filter(npc =>
        npc.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex justify-center items-start min-h-screen p-6 font-sans text-gray-100">
            <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Arquivos de NPC
                    </h1>

                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Buscar por nome..."
                            className="w-full pl-10 pr-4 py-2 border-2 border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
                        />
                    </div>

                    <div className="mt-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                        {filteredNpcs.length > 0 ? (
                            <ul className="space-y-4">
                                {filteredNpcs.map((npc) => (
                                    <li
                                        key={npc.nome}
                                        className="p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                                        onClick={() => handleNpcClick(npc)}
                                    >
                                        <div>
                                            <h2 className="text-xl font-semibold">{npc.nome}</h2>
                                            <p className="text-sm text-gray-400 font-light">
                                                <span className="font-semibold text-gray-300">Função:</span> {npc.funcao}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500 italic">Nenhum NPC encontrado.</p>
                        )}
                    </div>
                </div>
            </div>

            {selectedNpc && (
                <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative border border-gray-700">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            onClick={handleClosePopup}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        {/* Renderização dinâmica dos detalhes do NPC */}
                        {renderDetails(selectedNpc)}

                    </div>
                </div>
            )}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1f2937;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #4b5563;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                }
                .hover\\:animate-pulse:hover {
                    animation: pulse 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
}
export default Npc;