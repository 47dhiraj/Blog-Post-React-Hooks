import { Link } from "react-router-dom"

const NotFound = () => {
  return (

    <div className="not-found">

      <h2>Sorry</h2><br/>

      <h3>That page cannot be found </h3><br/>

      <h4 ><Link to="/" style= { {color: '#f1356d', textDecoration: 'none'} }>Back to the homepage . . . </Link></h4>

    </div>
  );
}
 
export default NotFound;