import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import AddProduct from "../components/AddProduct";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const getData = async () => {
    let params = [];

    if (category) params.push(`category=${category}`);
    if (sort) params.push(`sort=${sort}`);

    let query = params.length ? "?" + params.join("&") : "";

    const data = await fetchProducts(query);
    setProducts(data);

    const uniqueCategories = [...new Set(data.map((p) => p.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product Store</h2>

      <AddProduct refresh={getData} />
      <Filters
        categories={categories}
        setCategory={setCategory}
        setSort={setSort}
        applyFilters={getData}
      />

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default Home;
