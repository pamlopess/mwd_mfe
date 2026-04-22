import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Catalogo() {
  const { adicionar } = useCarrinho();
  const [mensagem, setMensagem] = useState("");

  const produtos = [
    { id: 1, nome: "Camiseta Branca", preco: 49.90 },
    { id: 2, nome: "Calça Jeans", preco: 129.90 },
    { id: 3, nome: "Moletom", preco: 149.90 },
    { id: 4, nome: "Blusa Preta", preco: 99.99 },
    { id: 5, nome: "Tênis Azul", preco: 334.99 },
  ];

  function adicionarAoCarrinho(produto) {
    adicionar(produto);

    setMensagem(`${produto.nome} adicionado ao carrinho`);

    setTimeout(() => setMensagem(""), 2000);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Catálogo</h2>

      {mensagem && <div className="toast">{mensagem}</div>}

      <div className="grid">
        {produtos.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.nome}</h3>
            <p>R$ {p.preco}</p>
            <button onClick={() => adicionarAoCarrinho(p)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}