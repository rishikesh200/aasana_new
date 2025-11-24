import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Anal_fistula from './pages/Anal_fistula';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { ROUTES } from './constants/config';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ANAL_FISTULA} element={<Anal_fistula />} />
          {/* <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} /> */}
          {/* 404 - Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
