import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';

function EditProduct() {
  const { product } = useContext(ProductContext);

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setBrand(product.brand);
      setModel(product.model);
      setPrice(product.price);
      setColor(product.color);
    }
  }, [product]);

  return (
    <div>
      <h1>Edit Product</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" value={brand} onChange={e => setBrand(e.target.value)} />
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" value={model} onChange={e => setModel(e.target.value)} />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" value={color} onChange={e => setColor(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProduct;