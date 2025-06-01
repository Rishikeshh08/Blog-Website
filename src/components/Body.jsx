import React, { useContext } from 'react'
import { Post } from './Post';
import { Spinner } from './Spinner';
import { AppContext } from '../contexts/AppContext';


export const Body = () => {
  // console.log("in Body comp")
  let {posts, loading, blogsData} = useContext(AppContext);
  // console.log(loading)
  // console.log("(Body.jsx) blogData: ",blogsData);
  // let posts = blogsData?.posts ?? "no-posts";
  // console.log("blogdata", blogsData);
  // console.log("posts", posts);
  // console.log(posts);
  return (
    <div className='body-container'>
      <div className='inner-body'>
        {
          (loading) ? 
          <Spinner/> : 
          (
            (blogsData) ? 
            (posts.map(  (post) => <Post key={post.id} post={post}/>  )) :
            (<p>NO Blogs Available</p>)
          )
        }
      </div>
      
        
    </div>
    // <div>body</div>
  )
}
