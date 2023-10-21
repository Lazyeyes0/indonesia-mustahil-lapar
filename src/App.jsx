import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import ProgramKebaikan from "./pages/programKebaikan";
import CeritaKebaikan from "./pages/ceritaKebaikan";
// import DetailPage from "./pages/detailPage";
import DetailProgram from "./pages/detailProgram";
import DonasiPage from "./pages/donasiPage";
import DetailDonasi from "./pages/detailDonasi";
import NotFound from "./pages/404page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program-kebaikan" element={<ProgramKebaikan />} />
        <Route path="/cerita-kebaikan" element={<CeritaKebaikan />} />
        <Route path="/program-kebaikan/:id" element={<DetailProgram />} />
        <Route path="/salurkan-kebaikan" element={<DonasiPage />} />
        <Route
          path="/program-kebaikan/:id/donasi/"
          element={<DetailDonasi />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
