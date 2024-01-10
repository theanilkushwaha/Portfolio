import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Sidebar from './components/sidebar';
import About from './components/sub_comps/about';
import Resume from './components/sub_comps/resume';
import Portfolio from './components/sub_comps/portfolio';
import Blog from './components/sub_comps/blog';
import Contact from './components/sub_comps/contact';

function App() {
  return (
    <div className='WholePage'>
      <Router>
        <Navbar />
        <div className='parent'>
          <div className='leftChild'>
            <Sidebar />
          </div>
          <div className='rightChild'>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </div>

        </div>
      </Router>





    </div>
  );
}

export default App;
