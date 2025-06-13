import { BrowserRouter as BrowserRoute, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {


  return (
    <>
      <Toaster />
      <BrowserRoute>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRoute>
    </>
  )
}

export default App
