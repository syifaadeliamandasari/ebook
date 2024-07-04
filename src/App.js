import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App;