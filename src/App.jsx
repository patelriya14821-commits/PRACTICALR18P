import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile", price: 15000 },
    { id: 3, name: "Keyboard", price: 1000 }
  ]);

  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function selectProduct(product) {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  }

  function updateProduct(e) {
    e.preventDefault();

    setProducts(
      products.map((product) =>
        product.id === editId
          ? { ...product, name: name, price: Number(price) }
          : product
      )
    );

    setEditId(null);
    setName("");
    setPrice("");
  }

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ₹{product.price}</p>
          <button onClick={() => selectProduct(product)}>
            Edit
          </button>
        </div>
      ))}

      {editId !== null && (
        <form onSubmit={updateProduct}>
          <h2>Edit Product</h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
}

export default App;