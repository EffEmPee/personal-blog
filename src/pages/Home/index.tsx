import React from 'react';

import Header from '../../components/Header';
import { HomePage, Trending } from './styles';

import postThumb from '../../images/postThumb.png';
import ListCards from '../../components/ListCards';

const Home: React.FC = () => {
   return (
      <div className="home-page">
         <Header/>
         <HomePage>
            <Trending>
               <div className="information">
                  <h1>Titulo do post</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div>
               <img src={postThumb} alt="post thumb"/>
            </Trending>
            <ListCards/>
         </HomePage>
      </div>
   );
}

export default Home;