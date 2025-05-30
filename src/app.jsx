import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TicTacToe from "./tic-tac-toe/page";
import Home from "./home";
import Puzzle from "./puzzle/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        {/* {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/puzzle" element={<Puzzle/>} /> 
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
