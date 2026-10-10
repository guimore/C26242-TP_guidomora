import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/images/cart.png';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
const {getQuantity} = useContext(CartContext)    

  return (<>
      {
      <Link to={"/carrito"} style={{ backgroundColor: '#f3f3f3', border: '1px solid #d3d3d3', borderRadius: 8, marginLeft: 16, marginRight: 24, padding: '4px 8px' }}>
        <img src={cartLogo} alt="cart" width={32} height={32} />
        {
        getQuantity()>0&&<button style={{ backgroundColor: '#e7e7e7', border: '1px solid #cfcfcf', borderRadius: 999, color: '#111' }}>{getQuantity()}</button>
        }
      </Link>
      }
  </>
  );
};

export default CartWidget;
