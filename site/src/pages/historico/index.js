import './index.scss';

export default function Menu() {
  return (
    <div className="menu-container">
      <h1>Cardápio</h1>
      <div className="menu">
        <div className="menu-item">
          <img src="imagem1.jpg" alt="Hamburguer 1" />
          <h3>Hamburguer de Carne</h3>
          <p>Delicioso hambúrguer de carne bovina grelhada, alface, tomate, cebola e maionese.</p>
          <p class="price">R$ 12,00</p>
        </div>
        <div className="menu-item">
          <img src="imagem2.jpg" alt="Hamburguer 2" />
          <h3>Hamburguer Vegetariano</h3>
          <p>Opção saudável com hambúrguer de feijão preto, alface, tomate, abacate e molho especial.</p>
          <p class="price">R$ 10,00</p>
        </div>
        <div className="menu-item">
          <img src="imagem3.jpg" alt="Hamburguer 3" />
          <h3>Hamburguer de Frango</h3>
          <p>Um saboroso hambúrguer de frango grelhado com alface, queijo, bacon e molho barbecue.</p>
          <p class="price">R$ 11,00</p>
        </div>
        <div className="menu-item">
          <img src="imagem4.jpg" alt="Hamburguer 4" />
          <h3>Hamburguer de Peixe</h3>
          <p>Uma opção leve com hambúrguer de peixe, alface, tomate, cebola roxa e molho tártaro.</p>
          <p class="price">R$ 13,00</p>
        </div>
      </div>
    </div>
  );
}
