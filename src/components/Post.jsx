import React from 'react'
import { NavLink } from 'react-router'
import { Spinner } from './Spinner';
// import { AppContext } from '../contexts/AppContext';

export const Post = ({post}) => {
  // console.log(post.id)

  // let category = (post) ? post.category.replace(" ", "-") : "no-post-category";
  // console.log(category);
  // const {loading} = useContext(AppContext);

  return (
    <div className='post-container'>
        {
          (post.category) ?
          (
            <div>
              <NavLink className="title navl" to={`/blogs/${post.id}`}>{post.title}</NavLink>
              <p className='para2'>By <span>{post.author}</span> on <span><NavLink className="navl" to={`/categories/${post.category}`}>{post.category}</NavLink>   </span></p>
              <p className='para3'>Posted On {post.date}</p>
              <p className='para4'>{post.content}</p>
              {
                post.tags.map((tag, index) => {
                  let tagWithoutSpace = tag.replace(" ", "-")
                  return (
                    <NavLink className="navl tags" to={`/tags/${tag}`} key={index}>
                      #{tagWithoutSpace}
                    </NavLink>
                  )
                })
              }
            </div>
          ) :
          (<Spinner/>)
        }
            
          
    </div>
  )
}
