import './App.css'
import ThemeToggle from "./components/basics/ThemeToggle.jsx";

import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/router/PublicLayout";
import Home from "@/components/public-facing/pages/Home";
import About from "@/components/public-facing/pages/About";
import NotFound from "@/components/basics/NotFound";
import Admission from "@/components/public-facing/pages/Admission.jsx";
import Join from "@/components/public-facing/pages/Join.jsx";

const App = () => {
  return (
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/join" element={<Join/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;