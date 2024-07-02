import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './../../data'
import './BlogView.css'


function BlogView() {
  const { id } = useParams()

 

  const selectBlog = blogs.find((blogObject) => blogObject.id === id)

  const {
    title,
    content,
    author,
    date,
    category,
    readTime
  } = selectBlog

  return (
    <div className='blog-detail-container'>
      <h1 className='title'>{title}</h1>
      <div className='author-container'>
        <img src={author.auth} alt='img' className='author-image' />
        <div>
          <div>
            <span className='name'> {author.name} </span>
            <span className='follow'>Follow</span>
          </div>
          <div>
            <span className='dim-color'> {date} </span>
          </div>
        </div>
      </div>

      <p className='blog-content'> {content} </p>
      {
        category.map((categorie, i) => {
          return <span key={i} className='categories'> {categorie} </span>
        })
      }
      <p className='bottom-author-name'>Written by {selectBlog.author.name} </p>
    </div>
  )
}

export default BlogView