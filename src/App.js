import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>
    
    <Routes>

    <Route element={<PrivateComponent/>}>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/add' element={<AddProduct/>}></Route>
      <Route path='/update/:id' element={<UpdateProduct/>}></Route>
      <Route path='/logout' element={<h1>Logout</h1>}></Route>
      <Route path='/profile' element={<h1>Profile</h1>}></Route>
      </Route>

      <Route path='login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
