import { BrowserRouter, Route, Routes } from "react-router";
import ProtectedPage from "./pages/ProtectedPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ProtectedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
