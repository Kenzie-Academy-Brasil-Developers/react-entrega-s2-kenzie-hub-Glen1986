import MyButton from '../../components/Button';
import {useEffect, useState} from "react";
import api from '../../services/api'
import Input from '../../components/Input';
import {FiEdit2} from "react-icons/fi";
import {AnimationContainer, Container, Content} from './styles'
import {toast} from 'react-toastify';
import Card from '../../components/Card';

const Dashboard = () => {
  const [tasks, setTasks] = useState({});
  const [user, setUser] = useState({});
  const [token] = useState(() => {
    const localToken = localStorage.getItem("@KenzieHub:token") || "";
    return JSON.parse(localToken);
  })

  useEffect(() => {
    api.get("/profile", {
      headers: {Authorization: `Bearer ${token}`}
    }).then(response => setUser(response.data))
      .catch((e) => toast.error("Nao e possivel autenyicar usuario"))


    const onSubmitFunction = () => {

    };

    return (
      <Container>
        <Content>
          <AnimationContainer>
            <h1>Seja Bem Vindo: {user.name}</h1>
            <Card user={user}
              tasks={tasks} />
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <Input
                register={register}
                type="text"
                placeholder="Tecnologia"
                name="title"
                icon={FiEdit2}
              />
              <Input
                register={register}
                placeholder="Nivel"
                type="text"
                name="status"
                icon={FiEdit2}
              />
              <MyButton
                title={"AddNew"}
                type="submit"
                onClick={() => console.log("click")}
              />
            </form>
          </AnimationContainer>
        </Content>
      </Container>
    )
  };

  export default Dashboard;
