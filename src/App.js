import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import CharacterID from "./pages/CharacterID";

// import components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/_id" element={<CharacterID />} />
        {/* Créer la route character avec le params id (/:id) */}
      </Routes>
    </Router>
  );
}

export default App;
