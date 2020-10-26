import styled from 'styled-components';

export const Container = styled.div`
   position: fixed;
   width: 60px;
   height: 60px;
   bottom: 80px;
   left: 50px;

   border-radius: 15px;
   border: none;
   background: ${props => props.theme.colors.switcher};
   cursor: pointer;
   transition: background-color .25s linear;

   display: flex;
   justify-content:center;
   align-items: center;

   &:hover {
      background: ${props => props.theme.colors.secundary};
   }
`;