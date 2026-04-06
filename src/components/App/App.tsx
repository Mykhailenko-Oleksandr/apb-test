import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Variables from "../../pages/Variables/Variables";
import VariableDetails from "../../pages/VariableDatails/VariableDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/variables" element={<Variables />} />
      <Route path="/variables/:id" element={<VariableDetails />} />
    </Routes>
  );
}
