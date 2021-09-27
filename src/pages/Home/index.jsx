import {Redirect, useHistory} from 'react-router-dom';
import MyButton from "../../components/Button";
import {Container, Content} from './styles.jsx';

function Home({authenticated}) {

  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path)
  }
  if (authenticated) {
    return <Redirect to="/dashboard" />
  }
  return (
    <>
      <Container>
        <Content>

          <h1>Kenzie<span>Hub</span></h1>
          <span>O Jeito Certo de C-orgaizar</span>
          <div>
            <MyButton whiteSchema onClick={() => handleNavigation("/signup")} title={"Register"} />
            <MyButton onClick={() => handleNavigation("/login")} title={"Login"} />
          </div>
        </Content>
      </Container>
    </>
  )
}
export default Home;
