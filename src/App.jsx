import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CarPage from "./pages/CarPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
