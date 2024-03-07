import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Homepage() {
  const [products, setProducts] = useState([]);
  const { role } = useContext(UserContext);

  const getProductsExample = [
    {
      name: "Xiaomi Redmi 9",
      brand: "Xiaomi",
      model: "Redmi 9",
      price:  10000,
      color: "red"
    }
  ];

  useEffect(() => {
    setProducts(getProductsExample);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {products.map((product)=> {
        return (
          <div key={product.name}>
            <h2> { product.name } </h2>
            <p> { product.price }</p>
            <p> { product.brand }</p>
            <p> {product.model } </p>
            <p> {product.color } </p>
            {role === 'admin' && (
              <>
                <button type="button">Editar produto</button>
                <button type="button">Deletar produto</button>
              </>
            )}
          </div>
        )
      })}
    </div>
  );
}

export default Homepage;