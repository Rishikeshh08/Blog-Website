import React from 'react'
import { useNavigate } from 'react-router'

export const BackBtn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button
        className='btn backBtn'
        onClick={()=> navigate(-1)}
        >Back</button>
    </div>
  )
}
