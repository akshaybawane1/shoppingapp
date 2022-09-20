import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import classes from "../Style/style.module.css"
import LogInActions from "../store/LoginSlice"
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const token = useSelector(state => state.Auth.token)
  const Products = useSelector(state => state.Prod.products)
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  const dispatch = useDispatch()

  const ThrottleError = () => {
    // console.log("Throttle Triggered")

    return function () {
      document.getElementById("err").style.display = "block"
      setTimeout(() => {
        document.getElementById("err").style.display = "none"
      }, 3000)
    }
  }

  const func = ThrottleError()

  const handleLogin = e => {
    e.preventDefault()

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.current.value)) {
      console.log("Valid Email")
    } else {
      dispatch(LogInActions.setErrorMsg("Please Enter Valid Credentials"))
      // const func = ThrottleError()
      func()
      // console.log("Error occured")
      return
    }

    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8iwa3g4HhuY1eMs2WZCvTx_UfIHr9Kas"
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(Res => {
        if (Res.ok) {
          return Res.json()
        } else {
          return Res.json().then(data => {
            let errorMsg = "Failed to authenticate"
            throw new Error(errorMsg)
          })
        }
      })
      .then(data => {
        dispatch(LogInActions.Login(data.idToken))
        navigate("/")
      })
      .catch(err => {
        dispatch(LogInActions.setErrorMsg("Please Enter Valid Credentials"))
        const func = ThrottleError()
        func()
        console.log(err)
      })
  }

  const handleLogout = e => {
    e.preventDefault()
    dispatch(LogInActions.Login(""))
  }

  return (
    <nav className={classes.navbar}>
      <div className="left">
        <ul>
          <li>
            <Link to="/">ShoppingApp</Link>
          </li>

          <li id="cartanim"><Link to="/Cart"><ShoppingCartOutlinedIcon /></Link></li>
        </ul>
      </div>
      {token ? (
        <div className={`${classes.right} ${classes.centerLg}`}>
          <button onClick={handleLogout} className="btn btn-outline-primary btn-sm me-2" type="submit">
            Logout
          </button>
        </div>
      ) : (
        <div className={classes.right}>
          <form onSubmit={handleLogin}>
            <input ref={email} className={classes.inputField} type="email" placeholder="Email" />
            <input ref={password} className={classes.inputField} type="password" placeholder="Password" />
            <button className="btn btn-outline-primary btn-sm me-2" type="submit">
              Login
            </button>
            {!token && (
              <button className="btn btn-outline-primary btn-sm me-2">
                <Link to="/SignUp">SignUp</Link>
              </button>
            )}
          </form>
        </div>
      )}
    </nav>
  )
}

export default Navbar
