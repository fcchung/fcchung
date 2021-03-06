import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/index";
import About from './pages/about';
import NavigationBar from './components/navBar';

function App() {


  return (
    <div className="App">

      <main>
        <NavigationBar/>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Router>
      </main>

    </div>
  );
}

export default App;
