import { useState } from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home onNavigate={setPage} />}
      {page === "portfolio" && <Portfolio onNavigate={setPage} />}
    </>
  );
}
