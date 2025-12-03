import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Anal_fistula from './pages/Anal_fistula';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { ROUTES } from './constants/config';
import About from './pages/About';
import Pelvic_floor from './pages/Pelvic_floor';

import Product from './pages/Product';
import Colorectal_symptoms from './pages/Colorectal_symptoms';
import Anal_fissure from './pages/Anal_fissure';
import Laser_surgery from './pages/Laser_surgery';
import Anal_wound_care from './pages/Anal_wound_care';
import Colon_rectal_cancer from './pages/Colon_rectal_cancer';
import Banding_piles from './pages/Banding_piles';
import Piles from './pages/Piles';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          
          {/* Colorectal Clinic routes */}
          <Route path={ROUTES.COLORECTAL_SYMPTOMS} element={<Colorectal_symptoms />} />
          <Route path={ROUTES.PILES_HAEMORRHOIDS} element={<Piles/>} />
          <Route path={ROUTES.BANDING_PILES} element={<Banding_piles />} />
          <Route path={ROUTES.LASER_SURGERY_PILES} element={<Laser_surgery />} />
          <Route path={ROUTES.ANAL_FISSURE} element={<Anal_fissure />} />
          <Route path={ROUTES.ANAL_FISTULA} element={<Anal_fistula />} />
          <Route path={ROUTES.AFTER_ANAL_SURGERY} element={<Anal_wound_care />} />
          <Route path={ROUTES.PELVIC_FLOOR_PROBLEMS} element={<Pelvic_floor />} />
          <Route path={ROUTES.COLON_RECTAL_CANCER} element={<Colon_rectal_cancer />} />
          
           {/* <Route path={ROUTES.CONTACT} element={<Contact />} /> */}
          {/* 404 - Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
