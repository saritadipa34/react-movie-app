import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieCard=()=>{
    const {getMovieData}=useContext(MovieContext);
    const imgUrl=import.meta.env.VITE_TEMP_IMG;


    return(
    
        <div>
            <img className="h-[250px] w-[200px]" src={imgUrl} alt="IMG" />

        </div>
    )
}
export default MovieCard;