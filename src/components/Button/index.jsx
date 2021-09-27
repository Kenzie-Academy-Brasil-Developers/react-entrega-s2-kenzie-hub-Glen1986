import {Container} from './styles'

const MyButton = ({title, whiteSchema = false, ...rest}) => {
  return (
    <Container
      whiteSchema={whiteSchema}
      type="button"
      {...rest}
    >{title}
    </Container>
  )
}
export default MyButton
