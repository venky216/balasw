import styled from 'styled-components'
import ButtonComponent from '../../../components/Button';

export const MapContainer = styled.div`
 flex:1;
 height: 80vh;
 flex-wrap:wrap;
`

export const MapBox = styled.div`
 height: 100%;
`

export const ButtonContainer = styled.div`
 display:flex;
 width:100%;
 flex-direction:row-reverse;

`

export const StyledButtonComponent = styled(ButtonComponent)`
    margin: 10px;
    width: 130px;   
    background: #2C2D44;
    &:hover{
        background:#232634;
      }
      &:focus{
        background:#232634;
      } 
`




