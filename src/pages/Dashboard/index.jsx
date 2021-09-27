//import api from '../../services/api.jsx'
//import {useState, useEffect} from 'react';
import {Redirect} from "react-router-dom";

const Dashboard = ({authenticated}) => {
  if (!authenticated) {
    return <Redirect to="/login" />
  }
  return (
    <div>dashboard</div>
  )
}
export default Dashboard;
