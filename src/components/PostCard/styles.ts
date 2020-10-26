import styled from 'styled-components';

import postThumb from '../../images/postThumb.png';

export const CardContainer = styled.div`
   width: auto;
   max-width: 350px;
   height: 400px;

   border-radius: 15px;
   background: url(${postThumb}) no-repeat center;
   background-size: cover;

   a {
      text-decoration: none;
   }

   .contentWrapper {
      width: 100%;
      height: 100%;
      padding: 50px 15px;

      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.35);

      display: grid;
      grid-template-rows: 1fr 1fr;

      span {
         font-size: 35px;
         font-weight: 600;
         color: ${props => props.theme.colors.textSecundary};
      }

      .tagsContainer {
         max-width: 300px;
         display: flex;
         align-items: flex-end;

         .tags {
            display: flex;
            flex-wrap: wrap;
            a {
               text-indent: justify;
               white-space: nowrap;
               border-radius: 15px;
               color: ${props => props.theme.colors.textSecundary};
               font-size: 20px;
               padding: 5px 5px;
               font-weight: 500;

               transition: .2s;

               &:not(:last-child) {
                  margin-right: 15px
               }

               &:hover {
                  background: ${props => props.theme.colors.primary}
               }
            }
         }
      }
   }

`;