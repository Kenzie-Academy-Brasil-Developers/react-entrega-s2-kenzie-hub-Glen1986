import {Container} from './styles'

const Button = ({title,type, onClick, whiteSchema = false, ...rest}) => {
  return (
    <Container
      whiteSchema={whiteSchema}
      type={type}
      {...rest}
      onClick={onClick}
    >{title}
    </Container>
  )
}
export default Button
