function ProductList({ products = [] }) {
  return (
    <div style={styles.container}>
      {products.map((p) => (
        <div key={p._id} style={styles.card}>
          <h3 style={styles.name}>{p.name}</h3>
          <p style={styles.price}>₹{p.price}</p>
          <span style={styles.category}>{p.category}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "10px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  name: {
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#28a745",
  },
  category: {
    fontSize: "12px",
    color: "#555",
  },
};

export default ProductList;
