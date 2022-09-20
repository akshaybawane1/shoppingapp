import { useDispatch } from "react-redux"
import classes from "../Style/style.module.css"
import LogInActions from "../store/LoginSlice"
import {useNavigate} from "react-router-dom"

const CheckoutForm = () => {
        const dispatch = useDispatch()
        const navigate = useNavigate()

        const ThrottleError = ()=>{
                // console.log("Throttle Triggered")
                
                return function(){
                        document.getElementById("err").style.display = "block"
                        document.getElementById("err").style.backgroundColor = "#93e693"
                        setTimeout(()=>{
                                document.getElementById("err").style.display = "none"
                                document.getElementById("err").style.backgroundColor = "#f37a7a"
                        },3000)
                }
          }
        
          const func = ThrottleError()

        const handleSubmit = (e)=>{
                e.preventDefault()
                document.getElementById("checkoutform").reset()
                dispatch(LogInActions.setErrorMsg("Thanks for shoping"))
                func()
                navigate("/")
        }
  return (
    <>
        <section className={`${classes.ProductCon} ${classes.centerForm} mt-5 px-5 py-5`}>
      <div className={classes.container}>
      <form className="row g-3" id="checkoutform" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="name" required/>
        </div>
        <div className="col-md-6">
          <label for="sirname" className="form-label">
            Surname
          </label>
          <input type="name" className="form-control" id="sirname" required/>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" required/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select" required>
            <option selected>Choose...</option>
            <option>Andhra Pradesh</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" required/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
            <label className="form-check-label" for="gridCheck">
              Cash on delivery
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Place an order
          </button>
        </div>
      </form>
      </div>
      </section >
    </>
  )
}

export default CheckoutForm
