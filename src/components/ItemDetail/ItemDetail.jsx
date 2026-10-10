import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (count) => {
    setCantidad(count);
    addItem(item, count);
  };

  return (
    <div className='detailsStyle'>
      <h1 className='titleStyle'>{item.name}</h1>
      <div className='row'>
        <div className='col'>
          <img src={item.image} className='img_med' alt={item.name} />
        </div>
        <div className='col'>
          <h3>Descripción:</h3>
          <p>{item.description}</p>
          <h3>Precio: ${item.price?.toLocaleString('es-AR')}</h3>
          <hr />
          <ItemCount stock={item.stock || 10} initial={1} onAdd={handleOnAdd} />
          {cantidad > 0 && (
            <Link to="/carrito" className='btn_item_count'>
              Finalizar compra
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;