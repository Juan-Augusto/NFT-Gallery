import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Produtos from './components/Produtos/Produtos';
import Detalhes from './components/Details/Detalhes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/produtos" element={<Produtos/>}/>
          <Route path="/produtos/:id" element={<Detalhes/>}/>


        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
