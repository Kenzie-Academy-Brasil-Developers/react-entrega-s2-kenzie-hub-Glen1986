import {Route, Switch} from 'react-router';
import {useState, useEffect} from 'react';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup/index'
import Dashboard from '../pages/Dashboard';
const Routes = () => {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      return setAuthenticated(true)
    }
  }, [authenticated])

  return (
    <Switch>
      <Route exact path="/">
        <Home
          authenticated={authenticated}>
        </Home>
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        >
        </Login>
      </Route>
      <Route path="/signup">
        <Signup
          authenticated={authenticated}
        >
        </Signup>
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
        >
        </Dashboard>
      </Route>
    </Switch>
  )
}
export default Routes;
