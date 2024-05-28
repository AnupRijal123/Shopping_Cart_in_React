import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import StoreItem from './pages/StoreItem';
import Navbar from './components/Navbar';
import './styles/App.css';
import Footer from './components/Footer';
import NotFound from '../src/pages/NotFound';
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
              <Route path='/store/:id' element={<StoreItem />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}
export default App;