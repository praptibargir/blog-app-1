import "./BlogCard.css"
import {Link} from 'react-router-dom';

function BlogCard({id,title,content,author,date,category}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content-preview">
            {content.substring(0,70)}....
        </p>
        <div className="author-card">
            <img src={author.auth} alt="Author Avtar" className="author-avtar"/>
            <span className="author-name">{author.name}</span>
            <span className="blog-date">{date}</span>
        </div>
        {category.map((categorie,i)=>{
            return <span key={i} className="category-badge">{categorie}</span>
        })}
    </Link>
  )
}

export default BlogCard