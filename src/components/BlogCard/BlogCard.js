import "./BlogCard.css"

function BlogCard({title,content,author,date,category}) {
  return (
    <div className="blog-card">
        <h2>{title}</h2>
    </div>
  )
}

export default BlogCard