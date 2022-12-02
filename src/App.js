import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { StoreContext,  StoreProvider } from "./Providers/Store"
import ShowFilm from './ShowFilm'
import { useContext } from 'react';



function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
      <Test/>
        <li> <Link to="/movie">Les films</Link></li>
        
        <Routes>
        <Route path='/movie' element={<ShowFilm/>}></Route>

        </Routes>
      </BrowserRouter>
    </StoreProvider>
  

  );
}
function Test(){
  const { movies } = useContext(StoreContext)
  return(
    <div>
      <p>Le nombre de film actuel est : {movies.length}</p>
    </div>
  )
}


export default App;
