import { useState } from "react";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import ProgramKebaikan from "./pages/programKebaikan";
import CeritaKebaikan from "./pages/ceritaKebaikan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program-kebaikan" element={<ProgramKebaikan />} />
        <Route path="/cerita-kebaikan" element={<CeritaKebaikan />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
