import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import CompShowProducts from './CProduct/ShowProduct.js';
import CompEditarProducts from './CProduct/EditarProduct.js';
import CompShowPqrs from './CPqr/ShowPqr.js';
import CompEditarPqrs from './CPqr/EditarPqr';
import CompShowEncuestas from './CEncuesta/ShowEncues';
import CompEditarEncuestas from './CEncuesta/EditarEncues';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Productos' element={<CompShowProducts />} />
          <Route path='/editar/:id' element={<CompEditarProducts />} />
          <Route path='/Pqr' element={<CompShowPqrs />} />
          <Route path='/editarPqr/:id' element={<CompEditarPqrs />} />
          <Route path='/Encuesta' element={<CompShowEncuestas />} />
          <Route path='/editarEncu/:id' element={<CompEditarEncuestas />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
