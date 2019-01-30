import styled from 'styled-components';
import { Button } from 'react-materialize';

export const DropdownLabel = styled.div`
position:relative;
flex:1;
`
export const StyledButton = styled(Button)`
  width:96%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:5px 10px 5px 5px;
  border:none;
  height:100%;
  color:var(--secondaryColor);
  background:var(--primaryColor);
  &:hover{
    background:var(--darkPurple);
  }
  &:focus{
    background:var(--darkPurple);
  }
`
export const DropdownArrow = styled.div`
border: solid var(--secondaryColor);
border-width: 0 3px 3px 0;
padding: 3px;
transform: ${props => props.dropdownShow ? 'rotate(-135deg)' : 'rotate(45deg)' } 
`
export const ListItems = styled.div`
   position : absolute;
   display:${props => props.dropdownShow ? 'block' : 'none'};
   width:96%;
   background: var(--white);
   box-shadow:var(--box-shadow1);
`
export const ListItem = styled.div`
  padding:15px 10px;
  cursor:pointer;
  color: var(--balck);
  box-shadow:1px 1px 1px 0 rgba(0,0,0,0.12);
  &:hover{
      background: var(--aliceblue);
  }
`