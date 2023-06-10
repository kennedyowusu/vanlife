import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';

import { makeServer } from './server/index';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';

import HostLayout from './components/HostLayout';
import Dashboard from './components/Host/Dashboard';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanInfo from './components/Host/HostVanInfo';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanPhotos from './components/Host/HostVanPhotos';
import NotFound from './pages/NotFound/NotFound';
import Error from './components/Error';

makeServer();

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} />
    <Route path='vans/:id' element={<VanDetail />} />

    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>

))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
