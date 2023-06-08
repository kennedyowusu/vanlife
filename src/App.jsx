import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';

import { makeServer } from './server/index';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
