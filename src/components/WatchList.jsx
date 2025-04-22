
import MovieCard from "./MovieCard";

const WatchList=({watchList,watchedList,setWatchedList,setWatchList})=>{

    
    const addWatched=(movie)=>{
if(!watchedList.some((item)=>item.imdbID === movie.imdbID)){
    const watchedMovie=[...watchedList,movie];
setWatchedList(watchedMovie);
const filtered=watchList.filter((item)=>item.imdbID !== movie.imdbID);
setWatchList(filtered);
localStorage.setItem('wishList',JSON.stringify(filtered));
}

console.log("watched");
}

    return(
        <div className="px-[190px] w-full h-screen">
            <h1 className="font-bold text-2xl my-4">My WatchList</h1>
            <div className="h-full w-full flex flex-wrap gap-5 "> 

                { watchList.length > 0 &&  watchList.map((list)=>{
  return  <MovieCard addWatched={()=>addWatched(list)}  movie={list} key={list.imdbID}/>
                })
                }
          
            </div>
        </div>
    )
}
export default WatchList;