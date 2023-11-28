import Header from "../components/Header";

import { useEffect, useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const {
    cart = [],
    setCart,
    countProduct,
    setCountProduct,
  } = useContext(CartContext);

  const incNum = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    let totalProduct = countProduct + 1;
    setCountProduct(totalProduct);
  };

  const decNum = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
    let totalProduct = countProduct - 1;
    setCountProduct(totalProduct);
  };
  const removeItem = (id, count) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    setCountProduct((prevCount) => prevCount - count);
  };
  const totalValue = cart.reduce(
    (total, item) => total + item.prix * item.count,
    0
  );
  useEffect(() => {
    console.log(cart);
    console.log("totalProduct:", countProduct);
  }, [cart, countProduct]);
  return (
    <div>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center flex-column "
        style={{ marginTop: "80px" }}
      >
        <div
          className="card text-bg-dark mb-3"
          style={{ minHeight: "400px", minWidth: "500px", padding: "20px" }}
        >
          <table className="table text-bg-dark mb-3">
            <thead>
              <tr>
                <th scope="col">image</th>
                <th scope="col">Product Name</th>
                <th scope="col">prix</th>
                <th scope="col">cotities</th>

                <th scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      style={{ height: "80px", width: "80px" }}
                      src={item.img}
                      alt=""
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.prix}</td>
                  <td
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "96.6px" }}
                  >
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={() => decNum(item.id)}
                      >
                        -
                      </button>
                    </div>

                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "30px", width: "30px" }}
                    >
                      {item.count}
                    </div>
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={() => incNum(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => removeItem(item.id, item.count)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>Total Value: {totalValue}</div>
          <div>
            <button onClick={() => alert(`we need ${totalValue} from u`)}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
