
import React from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router-dom';
import Input from '../../components/Input';
import MyButton from '../../components/Button';
import Card from '../../components/Card';
import {FiEdit2} from 'react-icons/fi';
import {Container, InputContainer, TaskContainer} from './styles';
import {useState, useEffect} from 'react';
import api from '../../services/api';
import {toast} from 'react-toastify';

const Dashboard = ({autenticated}) => {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem('@Doit:token')) || ""
  );
  const {register, handleSubmit} = useForm();

  const loadTasks = () => {
    api
      .get('/task', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const apiTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocalString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      })

      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadTasks();
  }, [autenticated]);

  const onSubmit = ({task}) => {
    if (!task) {
      return toast.error("complete o campo com um tarefa")
    }
    api.post("/task", {
      description: task,
    }, {
      headers: {
        Auhorization: `Bearer ${token}`,
      },
    }
    ).then((response) => loadTasks())
  };
  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);
    api.put(`/task/${id}`, {completed: true}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
      .then(response => setTasks(newTasks));
  }

  if (!autenticated) {
    return <Redirect to="/login" />
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>11 septiembre</time>
        <section>
          <Input icon={FiEdit2}
            placeholder="nova tarefa"
            register={register}
            name="task"
          />
          <MyButton type="submit">Adicionar</MyButton>
        </section>
      </InputContainer>
      <TaskContainer>
        {tasks.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => handleCompleted(task._id)}
          />
        ))}
      </TaskContainer>
    </Container>
  );
};
export default Dashboard;
