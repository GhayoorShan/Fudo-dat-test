import React from "react";
import { useCart } from "react-use-cart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = () => {
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
          class="dropdown-menu rounded-lg"
          aria-labelledby="dropdownMenuClickableInside"
        >
          {isEmpty ? (
            <h3 className="text-center"> Your cart is Empty </h3>
          ) : (
            <section className="container my-cart p-3">
              <h3>Cart</h3>

              {items.map((item, index) => {
                return (
                  <div>
                    <div className="row">
                      <div className="col-3 pt-3">
                        {" "}
                        <img
                          className="rounded-circle"
                          src={item.image}
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="col ">
                        <div className="row pb-2">{item.title}</div>
                        <div className="row cart-buttons-row ">
                          <div className="col ">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                              className="btn btn-light rounded-circle"
                            >
                              -
                            </button>
                          </div>
                          <div className="col">{item.quantity}</div>
                          <div className="col">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                              className="btn btn-light rounded-circle ms-2"
                            >
                              +
                            </button>
                          </div>
                          <div className="col">
                            {item.currency}
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn text-danger p-0"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="d-grid pt-4">
                <button onClick={buy} className="btn ms-2 btn-yellow">
                  Check out ${cartTotal.toFixed(2)}
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
