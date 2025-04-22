import MovieCard from "./MovieCard";

const Watched=({watchedList,setWatchedList})=>{

    const removeWatched=(movie)=>{
        const removed=watchedList.filter((item)=>item.imdbID !== movie.imdbID)
            setWatchedList(removed);
        }

    return(
        <div className="px-[190px] w-full h-screen ">
            <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl my-4">My WatchedList</h1>
            <div className=" bg-green-600 mr-4 h-[25px] min-w-[50px] my-4 text-sm rounded-lg flex justify-center items-center font-bold text-white">{watchedList.length}</div>
            </div>
              <div className="h-full w-full flex flex-wrap gap-5 "> 
{
    watchedList.length> 0 && watchedList.map((film,index)=>{
        return <MovieCard key={`${film.imdbID}-${index}`} movie={film} removeWatched={()=>removeWatched(film)}/>
    })
}
        </div>
        </div>
    )
}
export default Watched;