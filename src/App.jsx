import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';

import { makeServer } from './server/index';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';

makeServer();

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path='/vans/:id' element={<VanDetail />} />
            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
