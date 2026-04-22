import { useState } from "react";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Checkout() {
  const { itens, limpar } = useCarrinho();

  const [finalizado, setFinalizado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    cidade: "",
  });

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function finalizarCompra() {
    if (!form.nome || !form.endereco || !form.numero || !form.cidade || !form.CEP || !form.bairro || !form.estado) {
      alert("Preencha todos os campos");
      return;
    }

    limpar();
    setFinalizado(true);
  }

  if (finalizado) {
    return (
      <div style={{ padding: 20 }}>
        <h2>🎉 Compra finalizada com sucesso!</h2>
        <p>Entrega para: {form.nome}</p>
        <p>{form.endereco}, {form.numero} {form.complemento} </p>
        <p>CEP:{form.CEP}  {form.bairro} {form.cidade}/{form.estado}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>

      {itens.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          <h3>Total: R$ {total.toFixed(2)}</h3>
            <div className="form">
              <div className="form-group">
                <label>Nome completo</label>
                <input
                  name="nome"
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Endereço</label>
                <input
                  name="endereco"
                  placeholder="Rua, Avenida, travessa..."
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Nº</label>
                <input
                  name="numero"
                  placeholder="Número da residência"
                  onChange={handleChange}
                />
              </div>

               <div className="form-group">
                <label>Complemento</label>
                <input
                  name="complemento"
                  placeholder="Complemento (opcional)"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>CEP</label>
                <input
                  name="CEP"
                  placeholder="seu CEP"
                  onChange={handleChange}
                />
              </div>


          <div className="form-group">
                <label>Bairro</label>
                <input
                  name="bairro"
                  placeholder="Seu bairro"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Cidade</label>
                <input
                  name="cidade"
                  placeholder="Sua cidade"
                  onChange={handleChange}
                />
              </div>

               <div className="form-group">
                <label>Estado</label>
                <input
                  name="estado"
                  placeholder="Seu estado"
                  onChange={handleChange}
                />
              </div>
            </div>
          <br /><br />

          <button onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
}