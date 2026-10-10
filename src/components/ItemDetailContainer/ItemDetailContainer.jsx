import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data) => {
        const producto = data.find((p) => p.id === parseInt(id));
        setSelectedItem(producto);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  }, [id]);

  return (
    <>
      {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
    </>
  );
};

export default ItemDetailContainer;