import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./pages/Auth/Welcome";
import Login from "./pages/Auth/Login";
import Home from "./pages/Auth/Home";
import Register from "./pages/Auth/Register";
import Subscription from "./pages/User/Subscription";

function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState(0);
  const [idUser, setIdUser] = useState(0);

  useEffect(() => {
      (
          async () => {
              const res = await fetch('http://localhost:8000/quinielas.io/user', {
                  headers: { 'Content-Type': 'application/json' },
                  credentials: 'include'
              });

              const content = await res.json();
              setName(content.Username);
              setRole(content.IdRol);
              setIdUser(content.Id);
          }
      )();
  });

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar name={name} setName={setName} />
            <main>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={ () => <Login setName={setName} /> } />
                <Route exact path='/home' component={ () => <Home name={name} role={role} /> } />
                <Route exact path='/subs' component={ () => <Subscription name={name} role={role} idUser={idUser} /> } />
            </main>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;