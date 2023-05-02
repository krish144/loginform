import './App.css';

import Login from './Pages/Login'

import Regesiter from './Pages/Regesiter';

import Admin from './Pages/Admin';

import Profile from './Pages/Profile';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectRouter from './Component/ProtectRouter';

import Registered from './Pages/Registered';

import DashBord from "./Pages/DashBord"

import Order from './Pages/Order';

import Customer from './Pages/Customer';

import Product from './Pages/Product';

import Analytics from './Pages/Analytics';

function App() {

  const status = { check: false };

  return (
    <main className="App">
      <Routes>
        <Route exact path='/' element={<Login status={status} />} />
        <Route exact path='/register' element={<Regesiter />} />
        <Route element={<ProtectRouter status={status} />} >
          <Route exact path='/profile' element={<Profile />}>
          <Route exact path='/profile/' element={<DashBord />} />
            <Route exact path='/profile/orders' element={<Order />} />
            <Route exact path='/profile/customers' element={<Customer />} />
            <Route exact path='/profile/products' element={<Product/>} />
            <Route exact path='/profile/analytics' element={<Analytics/>} />
          </Route>
          <Route exact path='/admin' element={<Admin />} >
            <Route exact path='/admin/' element={<DashBord />} />
            <Route exact path='/admin/orders' element={<Order />} />
            <Route exact path='/admin/customers' element={<Customer />} />
            <Route exact path='/admin/products' element={<Product/>} />
            <Route exact path='/admin/analytics' element={<Analytics/>} />
          </Route>
        </Route>
        <Route exact path="/registered" element={<Registered />} />
      </Routes>
    </main>
  );
}

export default App;
