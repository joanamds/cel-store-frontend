import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { role } = useContext(UserContext);
  const { setProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleEditClick = (product) => {
    setProduct(product);
    navigate('/edit-product')
  };

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

  const filterProducts = (products, search) => {
    if(!search) return setFilteredProducts(products);
    const result = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredProducts(result);
  }

  return (
    <div>
      <h1>Home</h1>
      <h3>Buscar produto</h3>
      <input type="text" value={search} onChange={ (e) => setSearch(e.target.value) } />
      <button type="submit" onClick={filterProducts}>Pesquisar</button>
      {(search === "" ? products : filteredProducts).map((product)=> {
        return (
          <div key={product.name}>
            <h2> { product.name } </h2>
            <p> { product.price }</p>
            <p> { product.brand }</p>
            <p> { product.model }</p>
            <p> { product.color }</p>
            {role === 'admin' && (
              <>
                <button onClick={() => handleEditClick(product)}>Editar</button>
                <button type="button">Deletar</button>
              </>
            )}
          </div>
        );
      })}
      {search !== "" && filteredProducts.length === 0 && <p>Produto não encontrado</p>}
    </div>
  );
}

export default Homepage;