function Filters({ categories = [], setCategory, setSort, applyFilters }) {
  return (
    <div style={styles.container}>
      <select
        onChange={(e) => setCategory(e.target.value)}
        style={styles.select}
      >
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSort(e.target.value)} style={styles.select}>
        <option value="">Sort</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <button onClick={applyFilters} style={styles.button}>
        Apply
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Filters;
