import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
import Ventas from './pages/Ventas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login sin layout */}
        <Route path="/" element={<Login />} />

        {/* Rutas con layout */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/productos" element={<Layout><Productos /></Layout>} />
        <Route path="/clientes" element={<Layout><Clientes /></Layout>} />
        <Route path="/ventas" element={<Layout><Ventas /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
