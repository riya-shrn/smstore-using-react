import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import Navbar from './components/Navbar';
import Jewelery from './pages/Jewelery';
import Mensclothing from './pages/Mensclothing';
import Womensclothing from './pages/Womensclothing';
import Singleproduct from './components/Singleproduct';
import Lgin from './pages/Lgin';
import Registration from './pages/Registration';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Lgin/>}></Route>
      <Route path='/home' element={<Home/>} />
      <Route path='/electronics' element={<Electronics/>}></Route>
      <Route path='/jewelery' element={<Jewelery/>}></Route>
      <Route path='/mens-clothing' element={<Mensclothing/>}></Route>
      <Route path='/womens-clothing' element={<Womensclothing/>}></Route>
      <Route path='/single-product/:product_id' element={<Singleproduct/>}></Route>
      {/* <Route path='/login' element={<Lgin/>}></Route> */}
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
