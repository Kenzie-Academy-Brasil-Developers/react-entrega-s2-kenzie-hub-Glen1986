
import {AnimationContainer, Container, Content} from './styles'
import MyButton from '../../components/Button';
import Input from '../../components/Input';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';


const SignUp = ({authenticated}) => {


  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatorio!!!"),
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    bio: yup.string().required("campo Obrigatorio!!!"),
    contact: yup.string().required("campo Obrigatorio!!!"),
    course_module: yup.string().required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .min(8, "minimo 8 caracteres")
      .required("campo Obrigatorio!!!"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
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

  const onSubmitFunction = ({name, email, bio, contact, course_module, password}) => {
    const user = {name, email, bio, contact, course_module, password};
    api.post("/users", user)
      .then((_) => {
        toast.success("sucesso ao criar a conta"); return history.push("/login")
      })
      .catch((err) => toast.error("error al crear cueta", err))

  };

  if (authenticated) {
    return <Redirect to="/dashboard" />
  }


  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="seu nome"
              name="name"
              error={errors.name?.message}
            />

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
              label="biografia"
              placeholder="conte algo d vc"
              name="bio"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              label="Contato"
              placeholder="onde char vc?"
              name="contact"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              label="course_module"
              placeholder="modulo do curso"
              name="course_module"
              error={errors.course_module?.message}
            />


            <Input
              register={register}
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              type="password"
              label="confirmar Password"
              placeholder="confirmar password"
              name="confPassword"
              error={errors.confPassword?.message}
            />
            <MyButton type="submit" title={"Register"}></MyButton>

            <p>Ja tem una conta? faza seu <Link to="/login">login</Link></p>
            <p>Pagina de Inicio<Link to="/" > Home</Link></p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  )
};
export default SignUp;
