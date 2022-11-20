import './App.css';
import routes from './Routes'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Order from './pages/Order/Order';
import Profile from './pages/Profile/Profile';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage/>} exact path={routes.HOME()} />
        <Route element={<Order/>} exact path={routes.ORDER()} />
        <Route element={<Profile/>} exact path={routes.PROFILE()} />
        <Route element={<AboutUs/>} exact path={routes.ABOUTUS()} />
      </Routes>
    </div>
  );
}

export default App;
