import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/screens/login';
import Signup from './Components/screens/signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Navbar>
  );
}

export default App;
