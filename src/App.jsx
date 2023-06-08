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

makeServer();

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
              <Route path='host' element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
