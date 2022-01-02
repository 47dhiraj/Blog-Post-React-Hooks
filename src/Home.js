import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    // const [ data, isPending, error ] = useFetch('http://localhost:8000/blogs')           // Array destructuring pani garna sakincha but array destructuring vanda object destructuring gareko dherai ramro and sajilo manincha. so tala ko object destructuring tarikale gareko.
    
    const { data: blogs , isPending, error } = useFetch('http://localhost:8000/blogs')        // { data: blogs , isPending, error } yo chai destructuring of the object gareko ho  // data: blogs vannale grabbing the data but naming blogs in this Home.js file

    return ( 
        <div className="home">
            
            {/* JSX ma javascript code lekhna ko lagi curly brace vitra lekhincha */}

            { error && <div> <h2> {error} </h2> </div> }

            {/* &&  use garnu ko karan chai conditional templating gareko ho i.e yedi isPending state ma data cha vani matra right side ko template render garaune, yedi isPending state ma data chaina vani right side ko template render nagaraune  */}
            { isPending && <div> <h2> Loading ... </h2> </div> }

            
            { blogs && <BlogList blogs = { blogs } title="All Blogs" /> }            {/* blogs = { blogs } kina gareko vanda passing data from parent component(Home.js) to child component(BlogList.js) as a props */}  {/* handleDelete={handleDelete} vaneko chai passing function as a props .. jaba child component(i.e BlogList.js) batw parent component(Home.js) ma data pass garnu parcha taba yesto garincha */} 

        </div>
    );

}
 
export default Home;



