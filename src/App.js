import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
function App() {
  return (
    <Router>
      <h1>Server Side Rendering Example</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/articles'>Articles</Link>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
