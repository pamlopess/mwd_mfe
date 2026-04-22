import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho() {
  const { itens, remover } = useCarrinho();

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Carrinho</h2>

      {itens.length === 0 && <p>Carrinho vazio</p>}

      {itens.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <strong>{item.nome}</strong>
          <p>Qtd: {item.quantidade}</p>
          <p>Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}</p>

          <button onClick={() => remover(item.id)}>Remover</button>
        </div>
      ))}

      {itens.length > 0 && (
        <h3>Total: R$ {total.toFixed(2)}</h3>
      )}
    </div>
  );
}