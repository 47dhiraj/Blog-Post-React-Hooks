import { Link } from "react-router-dom";

const Navbar = () => {                        
    
    return ( 
        <nav className="navbar">

            <h1><Link style={{ color:'#f1356d'}} to="/">Blogs Post</Link></h1>

            <div className="links">

                {/* React ma Link tag le anchor i.e html ma <a> tag ko jasto kaam garcha */}
                <Link to="/">Home</Link>
                
                <Link to="/create">Create new Blog</Link>

            </div>

        </nav>
     );
}
 
export default Navbar;




