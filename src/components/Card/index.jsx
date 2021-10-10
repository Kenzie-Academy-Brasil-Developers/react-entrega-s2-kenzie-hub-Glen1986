import {Content} from '../../pages/Dashboard/styles';
import {Container} from '../Card/styles';
const Card = ({user}) => {


  return (
    <>
      <Container>
        <Content>
          <h2>Tecnologias</h2>
          <span>{user.name}</span>
          <span>{user.id}</span>
        </Content>
      </Container>
    </>
  );
}
export default Card;
