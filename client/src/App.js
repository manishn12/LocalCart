import React ,{useState} from 'react'
import './bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Account from './components/Account';
import Logout from './components/Logout'; 
import PostProduct from './components/PostProduct';
import ProductDetail from './components/ProductDetail'
import Request from './components/Request';

export const CredentialsContext = React.createContext();
export const AdminContext = React.createContext();
// export const AddResponseContext = React.createContext();



function App() {

  const credentialState = useState(null);
  const AdminState = useState(false);
  //const AddResponseState = useState([]);
  

  return (
    <CredentialsContext.Provider value={credentialState }> 
    <AdminContext.Provider value={AdminState}>
    {/* <AddResponseContext.provider value= {AddResponseState} > */}
    <BrowserRouter>
    <div className = "App">
  <Navbar />
      <div className="auth-wrapper">
        <div className="auth-inner">
         <Switch>
           <Route exact path="/"  component={Home} />
           <Route path="/cart" component = {Cart} />
           <Route path="/account" component = {Account} />
           <Route path="/login" component={Login} />
           <Route path="/logout" component={Logout} />
           <Route path="/register" component={Register} />
           <Route path="/post" component={PostProduct} />
           <Route path="/request" component ={Request} />
           <Route path ="/product/:id" component ={ProductDetail} />
         </Switch>

        </div>
      </div>
    </div>
    </BrowserRouter>
    {/* </AddResponseContext.provider> */}
    </AdminContext.Provider>
    </CredentialsContext.Provider>
  )
}

export default App
