import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  );
}
