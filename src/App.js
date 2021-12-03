import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Produtos from './components/Produtos/Produtos';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/produtos" element={<Produtos/>}/>

        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
