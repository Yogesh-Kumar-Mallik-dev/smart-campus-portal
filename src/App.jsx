import './App.css'
import ThemeToggle from "./components/basics/ThemeToggle.jsx";

import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/router/PublicLayout";
import Home from "@/components/public-facing/pages/Home";
import NotFound from "@/components/basics/NotFound";

const App = () => {
  return (
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;