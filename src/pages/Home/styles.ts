import styled from 'styled-components';

export const HomePage = styled.div`
   height: 100%;
   width: 100%;
   padding: 0 300px;
   margin-bottom: 80px;
`;

export const Trending = styled.div`
   height: 30vw;
   max-height: 500px;

   display: flex;
   align-items: flex-end;
   justify-content: space-evenly;

   .information {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 80px 0px;
      max-width: 700px;
      h1 {
         max-width: 550px;
         font-size: 60px;
         margin-bottom: 30px;
      }
      p {
         width: max-content;
         max-width: 650px;
         padding: 10px;
         color: ${props => props.theme.colors.textSecundary};
         font-size: 18px;
         border-radius: 15px;
         background: ${props => props.theme.colors.primary}
      }
   }

   img {
      width: 500px;
      height: 500px;
      /* padding: 20px; */

      background: ${props => props.theme.colors.primary};
      border-radius: 15px;
   }
`;