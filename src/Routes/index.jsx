import {Route, Switch} from 'react-router';
import {useState, useEffect} from 'react';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup/index'
import Dashboard from '../pages/Dashboard';
const Routes = () => {

  const [autenticated, setAutenticated] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));
    if (token) {
      return setAutenticated(true)
    }
  }, [autenticated])

  return (
    <Switch>
      <Route exact path="/">
        <Home
          autenticated={autenticated}>
        </Home>
      </Route>
      <Route path="/login">
        <Login
          autenticated={autenticated}>
        </Login>
      </Route>
      <Route path="/signup">
        <Signup
          autenticated={autenticated}
          setAutenticated={setAutenticated}>
        </Signup>
      </Route>
      <Route path="/dashboard">
        <Dashboard
          autenticated={autenticated}
        >
        </Dashboard>
      </Route>
    </Switch>
  )
}
export default Routes;
