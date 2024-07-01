import "./Home.css"
import blogs from "./../../data"
import BlogCard from "./../../components/BlogCard/BlogCard"

function Home() {

  return (
    <>
    <div className="blogs-container">
    {
        blogs.map((blogObject,i)=>{
            const {
                title,
                content,
                author,
                date,
                category
            }=blogObject
            return (
                <BlogCard
                key={i}
                title={title}
                content={content}
                author={author}
                date={date}
                category={category}/>
            )
        })
    }  
    </div>  
    </>
  )
}

export default Home