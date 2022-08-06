import React from 'react'
import '../../App.css'
import {NavBtnLink} from '../Navbar/NavbarElements'

function Card({bookTitle,imageUrl}) {
  return (
    <div className="card-container">
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='card-content'>
      <div className='card-title'>
        <h3>{bookTitle}</h3>
      </div>
      </div>
      <div className='btn'>
        <button>
          <a>
            View Book
          </a>
        </button>
      </div>
    </div>
  )
}

export default Card