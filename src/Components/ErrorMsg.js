import classes from  "../Style/style.module.css"
import { useSelector } from "react-redux";

const ErrorMsg = (props) => {
        const errorMsg = useSelector(state=>state.Auth.errorMsg)
        return ( 
                <h4>
                <span id="err" className={classes.errMsg}>
                                {errorMsg}     
                </span>
                </h4>
         );
}
 
export default ErrorMsg;