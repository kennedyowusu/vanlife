import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';

import { makeServer } from './server/index';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';

import HostLayout from './components/HostLayout';
import Dashboard from './components/Host/Dashboard';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';

makeServer();

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
