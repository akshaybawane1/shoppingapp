import { useDispatch, useSelector } from "react-redux"
import classes from "../Style/style.module.css"
import ProductActions from "../store/ProductSlice"
import { Link } from "react-router-dom"

const Cart = () => {
  const cartItems = useSelector(state => state.Prod.cart)
  const dispatch = useDispatch()
  let sum = 0;

  const removeFromCart = id => {
    const newArr = cartItems.filter(item => {
      if (item.id !== id) {
        return item
      }
    })

    dispatch(ProductActions.updateCart(newArr))
  }
  return (
    <>
      <section className={`${classes.ProductCon} mt-5`}>
        {!cartItems.length ? "" : (
          <button type="button" className={`${classes.checkoutBtn} btn btn-outline-primary btn-sm`}>
            <Link to="/Cart/checkout">Checkout</Link>
          </button>
        )}

        <div className={classes.container}>
          <ul className="list-group">
            {!cartItems.length ? (
              <h1>Please add item to cart</h1>
            ) : (
              <>
                {cartItems.map(item => {
                        sum += item.price
                  return (
                    <li className="list-group-item">
                      <img src={item.image} className={classes.cartImg} alt="..." />
                      <span className="card-text me-2">{item.title}</span>
                      <button className={`${classes.floatRight} btn btn-primary`} onClick={() => removeFromCart(item.id)}>
                        Remove from Cart
                      </button>
                    </li>
                  )
                })}
                <li className="list-group-item">Total Amount: {sum}</li>
              </>
            )}

          </ul>
        </div>
      </section>
    </>
  )
}

export default Cart
