import styled from 'styled-components';
import ButtonComponent from '../../../components/Button/index';


export const NavbarContainer = styled.div`
   width:100%;
   background-color: #232634;
   height: 70px;
   display:flex;
   align-items :center;
   justify-content:space-between;
`;

export const NavbarHeader = styled.div`
  font-size: 20px;
  font-family: 'Playfair Display', serif;
  margin-left : 30px;
  color: var(--white);
`;

export const LogoutButton  = styled(ButtonComponent)`
  background:none;
  box-shadow:none;
`; 


