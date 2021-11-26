import './App.css';
import MyContainer from "./components/MyContainer"
import Header from "./components/Header"
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<MyContainer />} />  
          <Route exact path="/about" element={<About />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
