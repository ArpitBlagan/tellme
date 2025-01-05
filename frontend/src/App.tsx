import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/searchlist" element={<List />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
