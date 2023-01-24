import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navigation/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Welcome from './components/Welcome';
import BuyerHomepage from './components/BuyerHomepage'

window.Buffer = window.Buffer || require('buffer').Buffer;

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/home'
          element={<BuyerHomepage />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/welcome'
          element={<Welcome />}
        />
        <Route
          path='*'
          element={<p>Not a valid route...</p>}
        />
      </Routes>
    </Router>
  );
};

export default App;
