import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
