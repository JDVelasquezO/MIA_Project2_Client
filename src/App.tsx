import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Widgets/Navbar";
import Footer from "./components/Widgets/Footer";
import Welcome from "./pages/Auth/Welcome";
import Login from "./pages/Auth/Login";
import Home from "./pages/Auth/Home";
import Register from "./pages/Auth/Register";
import Subscription from "./pages/User/Subscription";
import Profile from "./pages/User/Profile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Events from "./pages/User/Events";
import Prediction from "./pages/User/Prediction";
import Event from "./pages/Event/Event";
import BulkLoad from "./pages/Admin/BulkLoad";
import DefineResults from "./pages/User/DefineResults";
import Workday from "./pages/Admin/Workday";
import Sport from "./pages/Admin/Sport";
import Results from "./pages/Admin/Results";
import Season from "./pages/Admin/Season";
import SeasonUser from "./pages/Admin/SeasonUser";

function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState(0);
  const [idUser, setIdUser] = useState(0);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');

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
              setFirst(content.First);
              setLast(content.Last);
              setBirth(content.DateBirth);
              setEmail(content.Email);
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
                <Route exact path='/forgotPass' component={ForgotPassword} />
                <Route exact path='/events' component={ () => <Events role={role} name={name} /> } />
                <Route exact path='/login' component={ () => <Login setName={setName} /> } />
                <Route exact path='/home' component={ () => <Home name={name} role={role} /> } />
                <Route exact path='/subs' component={ () => <Subscription name={name} role={role} idUser={idUser} /> } />
                <Route exact path='/profile'
                       component={ () => <Profile first={first} last={last} username={name}
                                                  birth={birth} email={email} /> } />
                <Route exact path='/prediction' component={Prediction} />
                <Route path='/event/:id' component={Event} />
                <Route path='/bulkLoad' component={BulkLoad} />
                <Route path='/workingDays' component={Workday} />
                <Route path='/sports' component={Sport} />
                <Route path='/defineResults' component={Results} />
                <Route path='/season' component={Season} />
                <Route path='/seasonUser/:id' component={SeasonUser} />
            </main>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;