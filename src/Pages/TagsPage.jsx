import React, { useContext } from 'react'
import Footer from '../components/Footer'
import { BackBtn } from '../components/BackBtn'
import { useLocation } from 'react-router'
import { Post } from '../components/Post'
import { AppContext } from '../contexts/AppContext'
import { Spinner } from '../components/Spinner'
export const TagsPage = () => {
  const location = useLocation();
//<p>Blogs Tagged on #{tag}</p>
  const {loading, posts} = useContext(AppContext);  
  let tag = location.pathname.split("/").at(-1).replaceAll("%20", " ");
  return (
    <div className='home-page-container'>
      {
        (loading) ?
        (<Spinner/>) :
        (
          <div className='body-container'>
            <div className='inner-body'>
              <BackBtn/>
              <p className='para'>Blogs Tagged on #{tag}</p>
              <div>
              {
                (Object.keys(posts).length !== 0) ?
                (
                  posts.map((post) => <Post key={post.id} post={post} />)
                ) :
                (<p>No Posts Available</p>)
              }
              </div>
              <Footer/>
            </div>
            
          </div>
        )
      }
      
    </div>
  )
}
