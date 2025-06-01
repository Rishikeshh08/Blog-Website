import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useLocation } from 'react-router';


const Footer = () => {
  console.log("in footer comp")
  let {loading, blogsData, fetchBlogsData} = useContext(AppContext);
  // console.log("loading: ", loading);
  const location = useLocation();
  console.log(location)

  let page = (blogsData) ? blogsData.page : 1;
  let totalPages =  (blogsData) ? blogsData.totalPages : 1;

  function NextPage(){
    if(location.pathname==="/") {
      fetchBlogsData("page", page+1)
    }
    if(location.pathname.split("/").at(-2) === "categories"){
      fetchBlogsData("page", page+1, "category")
    }
    if(location.pathname.split("/").at(-2) === "tags"){
      fetchBlogsData("page", page+1, "tags")
    }
  }
  function PreviousPage(){
    if(location.pathname==="/") {
      fetchBlogsData("page", page-1)
    }
    if(location.pathname.split("/").at(-2) === "categories"){
      fetchBlogsData("page", page-1, "category")
    }
    if(location.pathname.split("/").at(-2) === "tags"){
      fetchBlogsData("page", page-1, "tags")
    }
  }

  return (
    <div className='footer head-foot'>
      <div className='inner-footer'>
        <div className='footer-btns'>
            {
              (page !== 1 && 
              <button 
              className='btn' 
              disabled={loading}
              onClick={PreviousPage}
              >
              Previous</button>) 
            }
            {
              (page !== totalPages &&
              <button
              className='btn'
              disabled={loading}
              onClick={NextPage}
              >
              Next</button>)
            }
        </div>
        <p>Page <span>{page}</span> of <span>{totalPages}</span></p>
      </div>
    </div>
  )
}

export default Footer