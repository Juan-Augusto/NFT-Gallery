import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Musicas from './components/Musicas/Musicas';
import Artes from './components/Artes/Artes';
import Jogos from './components/Jogos/Jogos';
import Detalhes from './components/Details/Detalhes';
import SaibaMais from './components/Saiba-mais/Saiba-mais';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/saibamais" element={<SaibaMais/>}/>
          <Route path="/categorias/:id" element={<Artes/>}/>
          <Route path="/categorias/:id" element={<Jogos/>}/>
          <Route path="/categorias/:id" element={<Musicas/>}/>
          <Route path="/produtos/:id" element={<Detalhes/>}/>
        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
