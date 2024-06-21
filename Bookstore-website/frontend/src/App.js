import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Navbar from './Component/Navbar';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
