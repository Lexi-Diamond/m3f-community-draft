import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './Community';
import InvalidPage  from './components/Invalid404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'
            element={<Community />} />
            <Route path='*'
            element={<InvalidPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
  }
  
  export default App;
