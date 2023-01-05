import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/booking" element={ <Booking /> } />
      </Routes>
    </div>
  );
}

export default App;
