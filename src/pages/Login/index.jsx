
import {AnimationContainer, Container, Content} from './styles'
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';


const Login = ({autenticated, setAutenticated}) => {
  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .min(8, "minimo 8 caracteres")
      .required("campo Obrigatorio!!!"),
  })
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    api.post("/sessions", data).then((response) => {
      const {token, user} = response.data;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
      setAutenticated(true)
      return history.push("/dashboard");
    })
      .catch((err) => toast.error("error al login", err))
  };
  if (autenticated) {
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
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
            />
            <Button type="submit"
              title={"Logar"}
            ></Button>
            <p>Ja tem una conta? faza seu <Link to="/signup">SignUp</Link></p>
            <p>Pagina de Inicio<Link to="/" > Home</Link></p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
};
export default Login;
