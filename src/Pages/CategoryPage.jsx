import React, { useContext } from 'react'
import Footer from '../components/Footer'
import { BackBtn } from '../components/BackBtn'
import { AppContext } from '../contexts/AppContext'
import { Post } from '../components/Post'
import { Spinner } from '../components/Spinner'
import { useLocation } from 'react-router'

export const CategoryPage = () => {
  const {loading, posts} = useContext(AppContext);
  console.log("i am inside category page")
  const location = useLocation();
  let category = location.pathname.split("/").at(-1).replaceAll("%20", " ");
  return (
    <div className='home-page-container'>
      {
        (loading) ?
        (<Spinner/>) :
        (
          <div className='body-container'>
            <div className='inner-body'>
              <BackBtn/>
              <p className='para'>Blogs on {category}</p>
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
