import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Err404 from './pages/Err404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<Err404/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
