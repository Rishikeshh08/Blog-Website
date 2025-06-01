import React, { useContext } from 'react'
import { BackBtn } from '../components/BackBtn'
import { AppContext } from '../contexts/AppContext';
import { Post } from '../components/Post';
import { Spinner } from '../components/Spinner';

export const RelatedBlogsPage = () => {
  // console.log("inside related blogs page")
  // const {blog, relatedBlogs} = useContext(AppContext);
  // let blog = (blogsData) ? blogsData.blog : "no-blog";
  // let relatedBlogs = (blogsData) ? blogsData.relatedBlogs : "no-relatedBlogs";
  console.log("inside related blogs comp")
  const {loading, blog, relatedBlogs} = useContext(AppContext);
  return (
    <div className='home-page-container'>
      {
        (loading) ?
        (<Spinner/>) :
        (
          <div className='rb-body'>
            <div className='rb-inner-body'>
              <BackBtn/>
              <div>
                <Post post={blog}/>
                <h2>Related Blogs</h2>
                {
                  relatedBlogs.map((post) => <Post key={post.id} post={post} />)
                }
              </div>
            </div>
            
          </div>
        )
      }
    </div>
  )
}
