import { useState } from "react";
import Catalogo from "./pages/catalogo";
import Carrinho from "./pages/carrinho";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [pagina, setPagina] = useState("catalogo");

  return (
    <div>
      <nav style={{ display: "flex", gap: 10, padding: 20 }}>
        <button onClick={() => setPagina("catalogo")}>Catálogo</button>
        <button onClick={() => setPagina("carrinho")}>Carrinho</button>
        <button onClick={() => setPagina("checkout")}>Checkout</button>
      </nav>

      <ErrorBoundary>
        {pagina === "catalogo" && <Catalogo />}
        {pagina === "carrinho" && <Carrinho />}
        {pagina === "checkout" && <Checkout />}
      </ErrorBoundary>
    </div>
  );
}