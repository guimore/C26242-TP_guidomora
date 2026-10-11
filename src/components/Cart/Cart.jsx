import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, clear, getTotal, removeItem } = useContext(CartContext);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const handleFinalizarCompra = () => {
    setCompraFinalizada(true);
    clear();
  };

  // Si la compra se finalizó, mostrar mensaje
  if (compraFinalizada) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1>🎉 ¡Gracias por tu compra!</h1>
          <p>Tu pedido fue procesado con éxito.</p>
          <Link to="/productos" className="btn-volver">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1>🛒 Tu carrito está vacío</h1>
          <p>Agregá productos para empezar a comprar.</p>
          <Link to="/productos" className="btn-volver">
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  // Si hay productos
  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Tu Carrito</h1>

      <div className="cart-layout">
        {/* Columna izquierda: productos */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">
                  Precio unitario: <strong>${item.price?.toLocaleString('es-AR')}</strong>
                </p>
                <p className="cart-item-amount">
                  Cantidad: <strong>{item.amount}</strong>
                </p>
                <p className="cart-item-subtotal">
                  Subtotal: <strong>${(item.price * item.amount)?.toLocaleString('es-AR')}</strong>
                </p>
              </div>
              <button
                className="btn-eliminar"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Columna derecha: resumen */}
        <div className="cart-summary">
          <h2>Resumen de compra</h2>
          <div className="summary-row">
            <span>Productos:</span>
            <span>{cart.length}</span>
          </div>
          <div className="summary-row">
            <span>Items totales:</span>
            <span>{cart.reduce((acc, i) => acc + i.amount, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${getTotal().toLocaleString('es-AR')}</span>
          </div>

          <button className="btn-finalizar" onClick={handleFinalizarCompra}>
            Finalizar Compra
          </button>
          <button className="btn-vaciar" onClick={clear}>
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;