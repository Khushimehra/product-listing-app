import { useState } from "react";
import axios from "axios";

function AddProduct({ refresh }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/products", {
        name,
        price,
        category,
      });

      setName("");
      setPrice("");
      setCategory("");

      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Add Product
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default AddProduct;
