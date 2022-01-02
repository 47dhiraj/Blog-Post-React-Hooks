import { useState } from "react";
import { useHistory } from "react-router-dom";




const Create = () => {

    // Vaye var ko sabbai blogs lai ek lot fetch garna sakincha incase chaiyo vani
    // const { data: all_blogs} = useFetch('http://localhost:8000/blogs')  
    


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');       
    
    const [isPending, setIsPending] = useState(false)
    
    const history = useHistory();                   
    

    const handleSubmit = (e) => {

        e.preventDefault()                          

        const blog = { title, body, author }            // blog ko data type chai js object huncha

        setIsPending(true)

        fetch('http://localhost:8000/blogs/', {

            method: 'POST',                                             // form submisstion ko method chai POST huncha so tei gareko

            headers: { "Content-Type": "application/json" },            // JSON type ko data server ma pathauni vayera application/json lekheko

            body: JSON.stringify(blog)                                  // blog (i.e JS object) lai JSON string ma convert garna ko lagi JSON.stringify() method ko use gareko ho

        }).then(() => {

            setIsPending(false)

            // history.go(-1);                                     
            
            history.push('/');                                   

        })

    }
    

    return ( 

        <div className="create">
            <h2>Add new Blog</h2>

            <form onSubmit= {handleSubmit}>

                <label>Blog Title: </label>
                <input 
                    type="text" 
                    required
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) }
                />
                

                <label>Blog Body: </label>
                <textarea name="" id=""
                    required
                    value = { body }
                    onChange = { (e) => setBody(e.target.value) }
                ></textarea>


                <label>Blog Author: </label>
                <select
                    required
                    value = { author }
                    onChange = { (e) => setAuthor(e.target.value) }
                >
                    <option value="" disabled>Select Author</option>

                    <option value="Dhiraj">Dhiraj</option>
                    <option value="Agent 47">Agent 47</option>
                    <option value="Hitman">Hitman</option>

                    {/* yesari dynamically author display garna sakincha */}
                    {/* { all_blogs && all_blogs.map(blog => (
                            <option value={blog.author} key={blog.id}> { blog.author } </option>
                    ))} */}
                    
                </select>
                
                { !isPending && <button>Add Blog</button> }

                { isPending && <button disabled>Adding Blog ... </button> }
                
            </form>

        </div>
    );
}
 
export default Create;



