import { Routes , Route } from "react-router-dom";
import Store from "./Screens/Store/Store";
import Cart from "./Screens/Cart/Cart";
import { db } from "./firebase";
import Login from "./Routers/LoginForm";
import Signup from "./Routers/SignUpForm";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  console.log(db)  
  return (
        <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signUp" element={<Signup/>}/>
          
          <Route  element={<ProtectedRoutes/>}>
            <Route path="/store" element={<Store />}/>
            <Route path="/addtocart" element={<Cart />}/>
          </Route>
          
        </Routes>
            
        </>
  )
};


export default App;


