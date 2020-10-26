import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContentWrapper } from './styles';

const navLinks = [
   {
      title: 'Home',
      path: '/home'
   },
   {
      title: 'Posts',
      path: '/posts'
   },
   {
      title: 'Contact Me',
      path: '/contact-me'
   },
   {
      title: 'Login',
      path: '/login'
   }
]


const Header: React.FC = () => {

   return (
      <Container>
         <ContentWrapper>  
            <ul>
               {navLinks.map((link, index) => (
                  <li key={index}>
                     <Link to={link.path}>{link.title}</Link>
                  </li>
               )
               )}
            </ul>

            <div className="title">
               <span id="name">Felipe</span>
               <span> Blog</span>
            </div>
         </ContentWrapper>
      </Container>
   );
}

export default Header;