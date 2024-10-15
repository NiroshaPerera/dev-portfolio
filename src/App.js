import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
