import Header from "../components/Header";
import Products from "../components/product/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center flex-column "
        style={{
          marginTop: "80px",
          //  background: "red"
        }}
      >
        <h1>homepage</h1>
        <h2>Products</h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;
