import { useState, useEffect } from "react";               // yesari useState, useEffect hook lai import garna parcha


// Creating custom hook  ==> yedi thuprai thau ma certain logic lai dynamic tarikale reuse garnu parne cha vani testo bela ma custom hook banayera kaam garna jastai ahile hammile banayeko useFetch auta custom hook ho
// Note : custom hook must start with word use (eg: useFetch), otherwise it won't work

const useFetch = (url) => {

    // Syntax of useState ==> The first element is the initial state and the second one is a function that is used for updating the state.
    const [data, setData] = useState(null)            // data state ko initial value null set gareko

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null)


    // we doesn't store useEffect function in constant because it doesn't return anything to us.
    // This function run every time there is rendering(or rerendering) of DOM  or if the state value is changed or updated.
    // we can also access the state inside the useEffect
    // Inside this useEffect method we can fetch data or do any authentication service which is also said side Effects in react.
    useEffect(() => { 

        // Creating abort controller object
        const abortCont = new AbortController();        // The AbortController is used to handle abort type of error (eg: )

        setTimeout(() => {              // just Loading ... ramro sanga simulate garera dekhauna ko lagi matra jani jani 500 milli seconds wait gareko ho.. don't do this silly in the real world project .. becuase yeslai ajjai badi fetching waiting time badaucha
            
            fetch(url, { signal: abortCont.signal })    // { signal: abortCont.signal } le fetching lai abort garcha when abortion error arises
            .then((response) => {

                if( !response.ok )          // Throwing the custom error
                {
                    throw Error('Could not fetch the data for the resource. Endpoint might be incorrect.')
                }

                return response.json()
            })
            .then((data) => {

                console.log(data)

                setData(data)          // fetch garera data aaye pachi data state ko value lai update gareko 
                
                setIsPending(false)

                setError(null)
            })
            .catch((err) => {           // generally catches the connection problem to the server and also catches the error type of response 
                if (err.name === 'AbortError')      // Abort khalko error aako cha vani, state update nagarni .. so yesto garyo vani matra console ma error aaudaina
                {
                    console.log('fetch aborted')
                } 
                else                            // abort bayek aru normal bela ma tw state update garnai paryo
                {
                    setError(err.message)
                    setIsPending(false)
                }
                
            })

        }, 150)                         // 500 milliseconds samma set timeout gareko
      
        
        return () => abortCont.abort(); // abort the fetching of data from here .. yo line le fetch() method ma abort signal pathaucha and fetching lai abort garcha

    }, [url])                              // Syntax => [state] useEffect dependency vannale only run this custom hook or hook function at the initial render and also when that specific state value changes                                       


    return { data, isPending, error }       // returning object // you can return any type of data (i.e object, array or even boolean)
    // return [ data, isPending, error ]    // You can also return array but object return gareko ramro manincha and sajilo huncha arko file ma access garna

}


export default useFetch