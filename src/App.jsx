import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;