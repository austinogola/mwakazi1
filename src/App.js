import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Trips from './pages/Trips'
import Contact from './pages/Contact'
import Activities from './pages/Activities'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        {/* <Route path="/admin" element={<Admin3 />} />
        <Route path="/admin/trips/add" element={<AdminAddTrip />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
