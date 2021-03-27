import styled from 'styled-components';
import { setFlex, setBackground } from '../../styles'


const Hero = styled.header`
    min-height: 80vh;
    ${props => setBackground({
    img: props.img,
    color: 'rgba(0,0,20,0.5)',
    position: props.position
})};
    ${setFlex()}
`

export default Hero