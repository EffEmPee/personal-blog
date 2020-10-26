import styled from 'styled-components';

export const Container = styled.nav`
   height: 150px;
   width: 100%;

   position: relative;
   display: flex;
   align-items: flex-end; 
   padding: 10px 50px;
   margin-bottom: 80px;
   background: none;

`;

export const ContentWrapper = styled.div`
   height: 100%; 
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   position: absolute;
   right: 350px;

   .title {
      margin-left: 50px;
      text-align: center;
      
      span { 
         font-size: 25px;
         color: ${props => props.theme.colors.text};
      }

      span#name {
         padding: 1px;
         border: 3px solid ${props => props.theme.colors.text};
         border-radius: 8px;
      }
   }

   ul {
      display: flex;
      align-items: center;
      list-style: none;
   }

   a {
      text-transform: uppercase;
      font-size: 17px;
      text-decoration: none;
      color: ${props => props.theme.colors.text};

      margin: 0 15px;
   }

   a:hover {
      text-decoration: underline;
   }
`;