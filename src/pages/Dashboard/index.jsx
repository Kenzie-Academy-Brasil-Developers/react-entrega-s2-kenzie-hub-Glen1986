

import {AnimationContainer, Container, Content} from './styles'
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Link, useHistory} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("@KenzieHub:token") || "";
    return JSON.parse(localToken);
  })
  useEffect(() => {
    api.get("/profile", {
      headers: {Authorization: `Bearer ${token}`}
    }).then(response => setUser(response.data))
      .catch((e) => console.log(e))
  })
  return (
    <><div>{user.name}</div></>
  )
};

export default Dashboard;
