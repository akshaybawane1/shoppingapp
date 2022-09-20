
import React,{ Suspense} from "react"
import './App.css';
import Navbar from './Components/Navbar';
import {HashRouter,Routes,Route} from "react-router-dom"
import SignUp from './Components/SignUpPage';
import ErrorMsg from './Components/ErrorMsg';
// import Products from './Components/Products';
import Cart from './Components/Cart';
import CheckoutForm from './Components/CheckoutForm';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
const Products = React.lazy(()=> import("./Components/Products"))


function App() {
  const isLoading = useSelector(state => state.Auth.isLoading)
  return (
    <HashRouter >
          <Navbar />
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/" element={
                               <Suspense fallback={
                                <Box sx={{ display: 'flex',position:"fixed",top:"50vh",left:"50vw" }}>
                                <CircularProgress />
                              </Box>
                               }>
                                  <Products />
                               </Suspense>
      } />
      <Route path="/Cart/checkout" element={<CheckoutForm />} />
    </Routes>
    
    <ErrorMsg />
    </HashRouter>
  );
}

export default App;
