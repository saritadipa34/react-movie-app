
import MovieCard from "./MovieCard";

const WatchList=({inputValue,watchList,watchedList,setWatchedList,setWatchList,movie})=>{

const handleWatched=(movie)=>{
if(!watchList.some((item)=> item.imdbID === movie.imdbID)){
    setWatchList([...watchList,movie])
    setWatchedList([...watchedList,movie])
} else {
    const updatedWatched=watchList.filter((item)=>item.imdbID !== movie.imdbID);
setWatchList(updatedWatched);
setWatchedList([...watchedList,movie]);
localStorage.setItem('watched',JSON.stringify(updatedWatched));

}
}

    return(
        <div className="px-[190px] w-full h-screen">
            <h1 className="font-bold text-2xl my-4">My WatchList</h1>
            <div className="h-full w-full flex flex-wrap gap-5 "> 

                { watchList.length > 0 &&  watchList.map((list)=>{
  return  <MovieCard onClick={()=>handleWatched(list)} inputValue={inputValue} movie={list} key={list.imdbID}/>
                })
                }
          
            </div>
        </div>
    )
}
export default WatchList;