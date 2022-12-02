import { createContext, useEffect, useState } from "react";
import { getMovies } from '../ListMovie'

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies)
        })
    }, [])

    return (
        <StoreContext.Provider value={{
            movies: movies,
            setMovies: setMovies,
          
        }}>
            {props.children}
            {console.log(movies)}
           
        </StoreContext.Provider>
    )

}