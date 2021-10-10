
import {AnimationContainer, Container, Content} from './styles'
import MyButton from '../../components/Button';
import Input from '../../components/Input';
import {Link, useHistory} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";


const Login = ({authenticated, setAuthenticated}) => {
  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .required("campo Obrigatorio!!!"),
  })
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    api.post("/sessions", data)
      .then((response) => {
        const {token, user} = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("nao e possivel accesar sua conta"))
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />
  }
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              icon={FiMail}
              label="Emai"
              placeholder="seu email"
              name="email"
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
            />
            <MyButton type="submit"
              title={"Logar"}
            ></MyButton>
            <p>Ja tem una conta? faza seu <Link to="/signup">SignUp</Link></p>
            <p>Pagina de Inicio<Link to="/" > Home</Link></p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
};
export default Login;
