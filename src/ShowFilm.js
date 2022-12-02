import { StoreContext } from "./Providers/Store"
import { useContext } from "react"
import { useState } from "react";


export default function ShowFilm(){
    const { movies, setMovies } = useContext(StoreContext)
    const [deleteMovies, setDeleteMovies] = useState([
        { movies }
        
      ]);
    



        const removeElement = (id) => {
            const newMovie = movies.filter((movie) => movie.id !== id)
                setMovies(newMovie)
          };


        
    
    return(
        
        movies.map((movie, id) => {
            return(
                <div key={id}>
                    <p>{movie.title}</p>
                    <button 
                    onClick={() => removeElement(movie.id)}
                    >Delete</button>
                </div>
                
            )
        })
    )

    
}