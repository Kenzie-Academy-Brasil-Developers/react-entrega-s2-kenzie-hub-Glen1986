import api from '../../services/api.jsx'
import {useState, useEffect} from 'react';

const Dash = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  useEffect(() => {
    api.post("/sesions", {
      headers: {Authorization: `Bearer ${token}`},
    })
  })
    .then((response) => setUser(response.data))
    .catch((err) => console.log(err))

  return (
    <div>{user.name}</div>
  )
}
export default Dash;
