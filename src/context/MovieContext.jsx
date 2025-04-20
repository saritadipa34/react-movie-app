import { createContext, useState } from "react";

export const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const [search,setSearch]=useState('Inception');

    const apiKey=import.meta.env.VITE_API_KEY; 
     const getMovieData=async(search)=>{
    try{
        const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`);
        const data=await response.json();

if(data.Response==='True'){
    setSearch(search);
    return data.Search
} else {
    return [];
}
    
    } catch (error){
        console.log(error.message);
    }
}

    return(
<MovieContext.Provider value={{getMovieData,search}}>
{children}
</MovieContext.Provider>
    )
}
