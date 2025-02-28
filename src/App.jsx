import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Cliente from "./paginas/Cliente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cliente/:id" element={<Cliente />} />
      </Routes>
    </Router>
  );
}

export default App;
