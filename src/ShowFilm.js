import { StoreContext } from "./Providers/Store"
import { useContext } from "react"
import { useState } from "react";


export default function ShowFilm(){
    const { movies } = useContext(StoreContext)
    const [not, setNot] = useState({movies})
    function removeFilm(){
        
    }
    
    return(
        
        movies.map((movie) => {
            return(
                <div>
                    <p>{movie.title}</p>
                    <button onClick={removeFilm()}>Delete</button>
                </div>
                
            )
        })
    )

    
}