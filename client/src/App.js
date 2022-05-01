import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./pages/index";
import About from './pages/about';
import NavigationBar from './components/navBar';

function App() {


  return (
    <div className="App">
      <NavigationBar/>
      <main>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Router>
        </Container>
      </main>

    </div>
  );
}

export default App;
