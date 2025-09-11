// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Encontros from './componets/Encontros';
import Npc from './componets/Npc';
import './index.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="ml-20 mt-10
          mb-10 px-20 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-colors duration-200 font-bold inline-block w-auto cursor-click"><Link to="/">Encontros</Link></li>
          <li className="ml-20 mt-10
          mb-10 px-20 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-colors duration-200 font-bold inline-block w-auto cursor-click"><Link  to="/Npc">Npc</Link></li>
        </ul>
      </nav>

      <hr />
      <Routes>
        <Route path="/" element={<Encontros />} />
        <Route path="/Npc" element={<Npc />} />
      </Routes>
    </div>
  );
};

export default App;