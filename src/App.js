

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import MyPortfolio from './pages/MyPortfolio';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';




function App() {
  return (
  <>
    <Router>
      <div
        className="container-fluid text-white"
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
          borderWidth: '40px',
          borderStyle: 'solid',
          borderImage: 'linear-gradient(to right, yellow, black) 1'
        }}
      >
        <div className="row min-vh-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<MyPortfolio/>} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            
          </Routes>
          {/* <HomePage /> */}
          {/* <Navbar /> */}
         
        </div>
      
      </div>
    </Router>
   



  </>
  );
}

export default App;
