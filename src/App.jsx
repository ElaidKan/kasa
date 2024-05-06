import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Apropos from './pages/Apropos'
// import FicheLogement from './pages/FicheLogement'
// import Error from './pages/Error'
import Navbar from './components/Navbar/navbar'
import Home from './Pages/Home/home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={< Home />} />
            {/* <Route path="/" element={< />} / > */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
