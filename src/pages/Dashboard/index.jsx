//import api from '../../services/api.jsx'
//import {useState, useEffect} from 'react';




/*
const Dashboard = () => {
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
    */
const Dashboard = () => {
  return (
    <div>dashboard</div>
  )
}
export default Dashboard;
