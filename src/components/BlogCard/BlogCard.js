import "./BlogCard.css"

function BlogCard({title,content,author,date,category}) {
  return (
    <div className="blog-card">
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
    </div>
  )
}

export default BlogCard