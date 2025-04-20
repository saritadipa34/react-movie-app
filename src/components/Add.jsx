import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MovieContext } from "../context/MovieContext";
import SearchCard from "./SearchCard";

const Add=({inputValue,setInputValue,watchList,setWatchList})=>{
    const [searchResults,setSearchResults]=useState([]);
    const [movies,setMovies]=useState([]);
    const {getMovieData}=useContext(MovieContext);

useEffect(()=>{
const searchedMovie=localStorage.getItem('searched');
if(searchedMovie){
    setSearchResults(JSON.parse(searchedMovie));
    setMovies(JSON.parse(searchedMovie))
}
},[])

const addToWatchList=(movie)=>{
if(!watchList.find((watch)=>watch.imdbID === movie.imdbID)){
    const updatedList=[...watchList,movie];
    setWatchList(updatedList);
    localStorage.setItem('watchList',JSON.stringify(updatedList))
    console.log(movie);
}
}

const handleInput=async(e)=>{
    const inputData=e.target.value;
    setInputValue(inputData);
    if(inputData.trim() !== ""){
     const result= await getMovieData(inputData);
setMovies(result);
setSearchResults(result);
localStorage.setItem('searched',JSON.stringify(result));
    }
}

    return(
        
        <div className="relative w-1/3  h-[500px] flex flex-col  mx-auto pt-5">
            <input type="text" value={inputValue} onChange={handleInput}  className="w-full min-h-8 pl-12 mb-4 bg-blue-950 text-white"  placeholder="Search For Movies"/>
            <FaSearch className="absolute top-7 left-5 text-white"/>
            <div className="h-[450px] max-h-[450px] flex flex-col gap-2 overflow-y-scroll">
{   movies && movies.length > 0 &&
movies.map((movie)=>{
    return <SearchCard movie={movie} key={movie.imdbID} onClick={()=>addToWatchList(movie)} />
})
}
</div>
        </div>
    )
}
export default Add;
