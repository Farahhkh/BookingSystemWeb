import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './view/pages/LoginPage/LoginPage';
import Header from './view/components/Header/Header';
import HomePage from './view/pages/homePage/HomePage';
import Booking from './view/pages/booking/Booking';
import MyBookings from './view/pages/mybookings/MyBookings';
import MyAccount from './view/pages/myAccount/MyAccount';

function App() {
  return (
    <div className="App" style={{}}>
      <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/mybookings" element={<MyBookings/>}/>
        <Route path="/account" element={<MyAccount/>}/>

      </Routes>
    </div>
  );
}

export default App;