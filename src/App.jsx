import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Meniu from "./components/Meniu";
import Input from "./components/Input";
import Algorithm from "./components/Algorithm";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meniu />} />
        <Route path="/input/:alg" element={<Input />} />
        <Route path="/algorithm/:alg/:num" element={<Algorithm />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
