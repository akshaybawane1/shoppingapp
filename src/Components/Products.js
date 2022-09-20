import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import classes from "../Style/style.module.css"
import ProductActions from "../store/ProductSlice"

import * as React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined"
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined"

const Products = () => {
  const Products = useSelector(state => state.Prod.products)
  const cart = useSelector(state => state.Prod.cart)
  let cartItem = [...cart]
  const priceSortState = useSelector(state => state.Prod.priceSortState)
  const nameSortState = useSelector(state => state.Prod.nameSortState)
  let prodArr = [...Products]
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        dispatch(ProductActions.setProducts(json))
      })
  }, [])

  const AddToCart = id => {
    let alreadyExist = cartItem.filter(item => {
      if (item.id == id) {
        return item
      }
    })
    console.log(alreadyExist.length)
    if (alreadyExist.length == 0) {
      let Item = Products.filter(item => {
        if (item.id == id) {
          return item
        }
      })

      console.log(Item)
      dispatch(ProductActions.addToCart(Item[0]))
    }
  }

  const SortByName = () => {
    const SortArr = (a, b) => {
      if (!nameSortState) {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
      } else {
        if (a.title > b.title) {
          return -1
        }
        if (a.title < b.title) {
          return 1
        }
      }

      return 0
    }
    const sortedArr = prodArr.sort(SortArr)
    dispatch(ProductActions.setProducts(sortedArr))
    // console.log(sortedArr)
    dispatch(ProductActions.setNameSortState())
  }

  const SortByPrice = () => {
    const SortArr = (a, b) => {
      if (!priceSortState) {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
      } else {
        if (a.price > b.price) {
          return -1
        }
        if (a.price < b.price) {
          return 1
        }
      }

      return 0
    }
    const sortedArr = prodArr.sort(SortArr)
    dispatch(ProductActions.setProducts(sortedArr))
    // console.log(sortedArr)
    dispatch(ProductActions.setPriceSortState())
  }

  const resetFilter = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        dispatch(ProductActions.setProducts(json))
      })
  }

  const handleAnimation = () => {
    const ThrottleAnim = () => {
      // console.log("Throttle Triggered")

      return function () {
        document.getElementById("cartanim").classList.add("cart")
        setTimeout(() => {
          document.getElementById("cartanim").classList.remove("cart")
        }, 1000)
      }
    }

    const func = ThrottleAnim()
    func()
  }

  return (
    <section className={classes.ProductCon}>
      <div className={classes.mar}>
        <div>
          <Stack direction="row" spacing={2} className={classes.posBtn}>
            <Button onClick={SortByName} variant="outlined" startIcon={nameSortState ? <ArrowUpwardIcon /> : <ArrowDownwardOutlinedIcon />}>
              Sort by Name
            </Button>
          </Stack>
        </div>
        <div>
          <Stack direction="row" spacing={2} className={classes.posBtn2}>
            <Button onClick={SortByPrice} variant="outlined" startIcon={priceSortState ? <ArrowUpwardIcon /> : <ArrowDownwardOutlinedIcon />}>
              Sort by Price
            </Button>
          </Stack>
        </div>
        <div>
          <Stack direction="row" spacing={3} size="large" className={classes.posBtn3}>
            <Button onClick={resetFilter} variant="outlined" className={classes.btnSize}>
              Clear filter
            </Button>
          </Stack>
        </div>
      </div>
      <div className={classes.container}>
        {Products.map(item => {
          return (
            <div className="card mx-2 my-2" style={{ width: "18rem" }} key={item.id}>
              <img className={`${classes.imgSize} card-img-top`} src={item.image} alt="..." />
              <div className="card-body">
                <h5 className={`${classes.textWrap} card-title`}>{item.title}</h5>
                <h5 className="card-title">Price: {item.price} $</h5>
                <p className="card-text">{item.description.slice(0, 80) + "..."}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    handleAnimation()
                    AddToCart(item.id)
                    const ThrottleAnim = () => {
                      // console.log("Throttle Triggered")

                      return function () {
                        document.getElementById(item.id.toString()).classList.add("cart")
                        setTimeout(() => {
                          document.getElementById(item.id.toString()).classList.remove("cart")
                        }, 1000)
                      }
                    }

                    const func = ThrottleAnim()
                    func()
                  }}
                >
                  <AddShoppingCartOutlinedIcon id={item.id.toString()} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products
