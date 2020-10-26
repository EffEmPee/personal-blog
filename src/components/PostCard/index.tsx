import React from 'react';

import { CardContainer } from './styles';

import { Link } from 'react-router-dom';

interface Post {
   title: string;
   tags: Array<{}>;
}

const PostCard: React.FC<Post> = (post) => {
   return (
      <CardContainer>
         <Link to="/">
            <div className="contentWrapper">
               <span>{post.title}</span>
               <div className="tagsContainer">
                  <div className="tags">
                     {post.tags.map((tag, index) => (
                        <Link to="/" key={index}>{tag}</Link>
                     ))}
                  </div>
               </div>
            </div>
         </Link>
      </CardContainer>
   );
}

export default PostCard;