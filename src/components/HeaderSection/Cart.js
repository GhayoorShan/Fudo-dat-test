import React, { useState } from "react";
import { useCart } from "react-use-cart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = () => {
  const [show, setShow] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const buy = () => {
    alert("Checkout");
  };

  return (
    <>
      <div class="dropdown">
        <button
          type="button"
          className="btn position-relative px-4 "
          id="dropdownMenuClickableInside"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          <ShoppingCartOutlinedIcon fontSize="large" />
          <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
            {totalUniqueItems}
            <span class="visually-hidden">Added to cart</span>
          </span>
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuClickableInside"
        >
          {isEmpty ? (
            <h3 className="text-center"> Your cart is Empty </h3>
          ) : (
            <section className="container">
              <div className="row jistufy-content-center">
                <div className="col-12">
                  <h3>Cart</h3>
                  <table className="table  m-0">
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <tr className="align-middle" key={index}>
                            <td>
                              <img
                                src={item.image}
                                alt=""
                                width={60}
                                height={60}
                              />
                            </td>
                            <td>{item.title}</td>

                            <td>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                                className="btn btn-light rounded-circle"
                              >
                                -
                              </button>
                            </td>
                            <td className=" pt-2">{item.quantity}</td>

                            <td>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                                className="btn btn-light rounded-circle ms-2"
                              >
                                +
                              </button>
                            </td>

                            <td>
                              {item.currency}
                              {item.price}
                            </td>

                            <td>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="btn btn-danger ms-2"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="d-grid ">
                  <button onClick={buy} className="btn ms-2 btn-yellow">
                    Check out ${cartTotal.toFixed(2)}
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
