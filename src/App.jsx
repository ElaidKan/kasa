import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import About from './Pages/About/about'
// import FicheLogement from './pages/FicheLogement'

import Navbar from './components/Navbar/navbar'
import Home from './Pages/Home/home';
import FicheLogement from './Pages/FicheLogement/fichelogement';
import Errorpage from './Pages/Errorpage/errorpage';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={< Home />} />
            {/* <Route path="/" element={< />} / > */}
            <Route path="/logement/:idlogement" element={<FicheLogement />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
