
import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
heigth:100vh;
display: flex;
align-items: stretch;
`;
export const Background = styled.div`
@media (min-width:900px){
  flex: 1;
  background-size: contain;
}`
  ;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width:700px;
margin:0 auto;

`;

const appearFromDown = keyframes`
from {
  opacity: 0;
  transform: translateY(50px)
}
to{
  opacity:1;
  transform: translateY(0px)
}
` ;

export const AnimationContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
animation:${appearFromDown} 1s;
form{
margin:80px 0;
  width:340px;
  text-align: center;
  h1{
  margin-bottom: 32px;
  }
    > div{
   margin-top:16px
 } 
  p{
    margin-top:8px;
  
  a{
    font-weigth:bold;
    color:var(--blue)
  }
  }
}

`

