import React from 'react';

import PostCard from '../PostCard/';
import { ListContainer } from './styles';


const ListCards: React.FC = () => {
   const posts = [
      { 
         title: 'Titulo do post',
         tags: ['tag', 'tag-grande-aaa', 'tag-media', 'tag-media'],
      },
      { 
         title: 'Titulo do post',
         tags: ['tag', 'tag-grande-aaa', 'tag-media', 'tag-media'],
      },
      { 
         title: 'Titulo do post',
         tags: ['tag', 'tag-grande-aaa', 'tag-media', 'tag-media'],
      },
      { 
         title: 'Titulo do post',
         tags: ['tag', 'tag-grande-aaa', 'tag-media', 'tag-media'],
      },
   ];

   return (
      <ListContainer>
         {posts.map((post, index) => (
            <PostCard 
               key={index}
               title={post.title}
               tags={post.tags}
            />
         ))}
      </ListContainer>
   );
}

export default ListCards;