import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {                    
    
    // const blogs = props.blogs                    // yo vanda sajilo tarika chai mathi function mai props object lai destructuring gareko huncha
    // const title = props.title 

    return ( 
        <div className="blog-list">

            <h2>{ title }</h2>
            
            {/*  JSX ma JS ko code lekhda curly brace vitra lekhna parcha */}

            {                                                                                                               
                blogs.map(blog => (                                 // Javascript array method vitra JSX lekhna ko lagi chai small bracket or parenthesis vitra lekhna parcha
                    
                    <div className="blog-preview" key={blog.id} >   
                        
                        <Link to={`/blogs/${blog.id}`}>             
                            
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>

                        </Link>

                    </div>
                ))
            }

        </div>
    );
}
 
export default BlogList;