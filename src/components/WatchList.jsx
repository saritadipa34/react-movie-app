
import MovieCard from "./MovieCard";

const WatchList=({watchList,watchedList,setWatchedList,setWatchList})=>{

    const removeWishListed=(movie)=>{
        const filtered=watchList.filter((item)=>item.imdbID !== movie.imdbID);
        setWatchList(filtered);
        console.log(filtered)
    }
    
    const addWatched=(movie)=>{
if(!watchedList.some((item)=>item.imdbID === movie.imdbID)){
    const watchedMovie=[...watchedList,movie];
setWatchedList(watchedMovie);
const filtered=watchList.filter((item)=>item.imdbID !== movie.imdbID);
setWatchList(filtered);
}

console.log("watched");
}

    return(
        <div className="w-full h-screen px-[190px]">
            <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl my-4">My WatchList</h1>
            <div className=" bg-green-600 mr-4 h-[25px] min-w-[50px] my-4 text-sm rounded-lg flex justify-center items-center font-bold text-white">{watchList.length}</div>
            </div>
            <div className="h-full w-full flex flex-wrap gap-5 "> 

                { watchList.length > 0 &&  watchList.map((list)=>{
  return  <MovieCard addWatched={()=>addWatched(list)} removeWatched={()=>removeWishListed(list)}  movie={list} key={list.imdbID}/>
                })
                }
          
            </div>
        </div>
    )
}
export default WatchList;