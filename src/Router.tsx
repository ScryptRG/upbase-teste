import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/form" element={<Form />}></Route>
    </Routes>
  );
}
