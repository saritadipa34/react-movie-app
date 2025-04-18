import { createContext, useEffect, useState } from "react";

export const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const[movieData,setMovieData]=useState([]);

useEffect(()=>{
    const apiKey=import.meta.env.VITE_API_KEY;
const getMovieData=async()=>{
    try{
        const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=Inception`);
        const data=await response.json();
        setMovieData(data);
    } catch (error){
        console.log(error.message);
    }
}
getMovieData();
},[])

    return(
<MovieContext.Provider value={{movieData}}>
{children}
</MovieContext.Provider>
    )
}
