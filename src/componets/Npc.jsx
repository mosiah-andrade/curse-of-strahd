import React, { useState } from 'react';
import npcs, { getNpcList } from '../modulos/Npcs.jsx';
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

const Filter = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
);

// Linha divisória clássica das fichas de D&D (Grossa na esquerda, fina na direita)
const DivisoriaDnd = () => (
    <svg className="w-full h-[5px] my-3 opacity-90" preserveAspectRatio="none" viewBox="0 0 100 5">
        <polygon points="0,0 100,2 100,3 0,5" fill="#922610" />
    </svg>
);

// Calculadora de modificador de atributo
const getModificador = (valor) => {
    if (!valor) return "+0";
    const mod = Math.floor((valor - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
};

// Componente que renderiza a ficha no formato visual do D&D 5e
const FichaDnd = ({ npc }) => {
    const stats = npc.estatisticas_combate || npc;
    
    return (
        <div className="bg-[#fdf1dc] text-[#191111] font-serif border-t-[6px] border-b-[6px] border-[#e69a28] shadow-2xl w-full max-w-2xl mx-auto relative overflow-hidden">
            {/* Textura sutil de pergaminho usando pseudo-elemento no Tailwind */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>
            
            <div className="p-6 relative z-10">
                {/* Cabeçalho */}
                <div>
                    <h1 className="text-4xl font-bold text-[#922610] font-serif mb-1 tracking-wide">{npc.nome}</h1>
                    <p className="italic text-sm text-black">
                        {npc.funcao} {npc.personalidade && `| ${npc.personalidade}`}
                    </p>
                </div>

                <DivisoriaDnd />

                {/* Status Básicos */}
                <div className="text-[#7a200d] font-sans text-[15px]">
                    <p><strong className="font-bold">Classe de Armadura</strong> {stats.CA}</p>
                    <p><strong className="font-bold">Pontos de Vida</strong> {stats.PV}</p>
                    <p><strong className="font-bold">Deslocamento</strong> {stats.deslocamento}</p>
                    {stats.iniciativa !== undefined && (
                        <p><strong className="font-bold">Iniciativa</strong> {stats.iniciativa >= 0 ? `+${stats.iniciativa}` : stats.iniciativa}</p>
                    )}
                </div>

                <DivisoriaDnd />

                {/* Atributos Responsivos */}
                {stats.atributos && (
                    <>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center text-[#7a200d] font-sans mb-2">
                            {['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'].map(attr => (
                                <div key={attr} className="flex flex-col items-center">
                                    <div className="font-bold uppercase text-xs tracking-wider">{attr.substring(0, 3)}</div>
                                    <div className="text-sm">
                                        {stats.atributos[attr] || 10} ({getModificador(stats.atributos[attr] || 10)})
                                    </div>
                                </div>
                            ))}
                        </div>
                        <DivisoriaDnd />
                    </>
                )}

                {/* Perícias, Sentidos, Idiomas e ND */}
                <div className="text-[#7a200d] font-sans text-[15px] space-y-1">
                    {stats.salvamentos && Object.keys(stats.salvamentos).length > 0 && (
                        <p><strong className="font-bold">Testes de Resistência</strong> {
                            Object.entries(stats.salvamentos).map(([k, v]) => `${k.substring(0, 3)} ${v}`).join(', ')
                        }</p>
                    )}
                    {stats.pericias && stats.pericias.length > 0 && (
                        <p><strong className="font-bold">Perícias</strong> {stats.pericias.join(', ')}</p>
                    )}
                    {stats.sentidos && stats.sentidos.length > 0 && (
                        <p><strong className="font-bold">Sentidos</strong> {stats.sentidos.join(', ')}</p>
                    )}
                    {stats.idiomas && stats.idiomas.length > 0 && (
                        <p><strong className="font-bold">Idiomas</strong> {stats.idiomas.join(', ')}</p>
                    )}
                    {stats.nivel_de_desafio && (
                        <p><strong className="font-bold">Nível de Desafio</strong> {stats.nivel_de_desafio}</p>
                    )}
                </div>

                <DivisoriaDnd />

                {/* Habilidades Especiais / Traços */}
                {stats.habilidades_especiais && (
                    <div className="mt-4 mb-4">
                        <p className="text-black text-[15px] leading-relaxed">
                            <strong className="italic font-bold">Características. </strong>
                            {stats.habilidades_especiais}
                        </p>
                    </div>
                )}

                {/* Ações */}
                {(stats.acoes || stats.ataques) && (
                    <div className="mt-6">
                        <h2 className="text-2xl text-[#922610] font-serif font-bold border-b border-[#922610] mb-3">Ações</h2>
                        <div className="space-y-4">
                            {(stats.acoes || stats.ataques).map((acao, index) => (
                                <p key={index} className="text-black text-[15px] leading-relaxed">
                                    <strong className="italic font-bold">{acao.nome}. </strong>
                                    {acao.tipo && <em className="text-[#7a200d]">{acao.tipo}: </em>}
                                    {acao.acerto && `${acao.acerto} para atingir, `}
                                    {acao.alcance && `alcance ${acao.alcance}, `}
                                    {acao.alvo && `${acao.alvo}. `}
                                    {acao.dano && <em>Acerto: </em>}
                                    {acao.dano && `${acao.dano} `}
                                    {acao.descricao && acao.descricao}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Magias */}
                {stats.magias && stats.magias.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-2xl text-[#922610] font-serif font-bold border-b border-[#922610] mb-3">Conjuração</h2>
                        <div className="space-y-2">
                            {stats.magias.map((magia, index) => (
                                <p key={index} className="text-black text-[15px] leading-relaxed">
                                    <strong className="font-bold text-[#7a200d]">{magia.nome}: </strong>
                                    <span className="italic">{magia.descricao}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ações Lendárias */}
                {stats.acoes_lendarias && stats.acoes_lendarias.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-2xl text-[#922610] font-serif font-bold border-b border-[#922610] mb-3">Ações Lendárias</h2>
                        <p className="text-black text-[15px] mb-3 leading-relaxed">O monstro pode realizar 3 ações lendárias, escolhidas dentre as opções abaixo. Apenas uma opção de ação lendária pode ser usada por vez e apenas no final do turno de outra criatura. O monstro recupera as ações lendárias gastas no início do seu turno.</p>
                        <div className="space-y-3">
                            {stats.acoes_lendarias.map((acao, index) => (
                                <p key={index} className="text-black text-[15px] leading-relaxed">
                                    <strong className="italic font-bold">{acao.nome}. </strong>
                                    {acao.descricao}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

function Npc() {
    const [searchTerm, setSearchTerm] = useState('');
    const [regionFilter, setRegionFilter] = useState('todos');
    const [selectedNpc, setSelectedNpc] = useState(null);

    const handleSearchChange = (event) => setSearchTerm(event.target.value);
    const handleRegionChange = (event) => setRegionFilter(event.target.value);
    const handleNpcClick = (npc) => setSelectedNpc(npc);
    const handleClosePopup = () => setSelectedNpc(null);

    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    // Obtém a lista baseada no filtro de região e aplica a busca por texto
    const filteredNpcs = getNpcList(regionFilter).filter(npc => {
        const searchableText = [
            npc.nome,
            npc.funcao,
            npc.personalidade,
            npc.descricao
        ].filter(Boolean).join(' ').toLowerCase();

        return searchableText.includes(normalizedSearch);
    });

    return (
        <div className="flex justify-center items-start min-h-screen bg-neutral-950 p-4 md:p-8 font-sans text-gray-100">
            <div className="w-full max-w-4xl bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
                <div className="p-6 md:p-8">
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-2 font-serif">
                            Bestiário de Baróvia
                        </h1>
                        <p className="text-gray-400 text-sm">Arquivos e Estatísticas de NPCs</p>
                    </div>

                    {/* Controles de Filtro e Busca */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                placeholder="Buscar por nome, função ou característica..."
                                className="w-full pl-11 pr-4 py-3 border border-gray-700 rounded-xl bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-inner"
                            />
                        </div>
                        
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Filter className="h-5 w-5 text-gray-500" />
                            </div>
                            <select
                                value={regionFilter}
                                onChange={handleRegionChange}
                                className="w-full pl-11 pr-10 py-3 border border-gray-700 rounded-xl bg-gray-800/50 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all cursor-pointer shadow-inner"
                            >
                                <option value="todos">Todas as Regiões</option>
                                <option value="curse_of_strahd">Curse of Strahd (Geral)</option>
                                <option value="vila_de_barovia">Vila de Baróvia</option>
                                <option value="vallaki">Vallaki</option>
                                <option value="velho_osso_moedor">Velho Osso Moedor</option>
                                <option value="krezk">Krezk</option>
                                <option value="covil_dos_lobisomens">Covil dos Lobisomens</option>
                                <option value="argynvostholt">Argynvostholt</option>
                                <option value="templo_do_ambar">Templo do Âmbar</option>
                                <option value="colina_yester">Colina Yester</option>
                                <option value="castelo_de_strahd">Castelo Ravenloft</option>
                                <option value="apendice_d">Apêndice D</option>
                            </select>
                            {/* Seta customizada do select */}
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    {/* Grid de NPCs */}
                    <div className="max-h-[65vh] overflow-y-auto custom-scrollbar pr-2 pb-4">
                        {filteredNpcs.length > 0 ? (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredNpcs.map((npc) => {
                                    const stats = npc.estatisticas_combate || npc;
                                    return (
                                        <li
                                            key={npc.nome}
                                            className="group flex flex-col justify-between p-5 bg-gray-800/40 rounded-2xl border border-gray-700/50 cursor-pointer hover:bg-gray-800 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.1)] transition-all duration-300 transform hover:-translate-y-1"
                                            onClick={() => handleNpcClick(npc)}
                                        >
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h2 className="text-xl font-bold text-gray-100 group-hover:text-red-400 transition-colors font-serif">{npc.nome}</h2>
                                                    {stats.nivel_de_desafio && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-400 border border-red-800/50 whitespace-nowrap">
                                                            ND {stats.nivel_de_desafio.split(' ')[0]}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                                                    {npc.funcao}
                                                </p>
                                            </div>
                                            <div className="mt-4 flex items-center text-xs text-gray-500 font-medium tracking-wide uppercase">
                                                <span className="group-hover:text-gray-300 transition-colors">Ver ficha completa →</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                <p className="text-lg">Nenhum registro encontrado nas brumas...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal de Detalhes da Ficha */}
            {selectedNpc && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 sm:p-6 z-50 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={handleClosePopup}
                >
                    <div 
                        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button
                            className="absolute top-3 right-3 bg-red-900/80 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors z-20 backdrop-blur-md border border-red-700/50 group"
                            onClick={handleClosePopup}
                            title="Fechar Ficha"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
                        </button>
                        
                        <FichaDnd npc={selectedNpc} />
                    </div>
                </div>
            )}
            
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #374151;
                    border-radius: 10px;
                    border: 2px solid #111827;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #4b5563;
                }
            `}</style>
        </div>
    );
}

export default Npc;