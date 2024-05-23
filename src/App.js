import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import './styles/App.css';
import Footer from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <div className="main-container">
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}
export default App;