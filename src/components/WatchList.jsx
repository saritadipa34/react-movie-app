
import MovieCard from "./MovieCard";

const WatchList=({inputValue,watchList})=>{
    return(
        <div className="px-[190px] w-full h-screen">
            <h1 className="font-bold text-2xl my-4">My WatchList</h1>
            <div className="h-full w-full flex flex-wrap gap-5 "> 

                { watchList.length > 0 &&  watchList.map((list)=>{
  return  <MovieCard inputValue={inputValue} movie={list} key={list.imdbID}/>
                })
                }
          
            </div>
        </div>
    )
}
export default WatchList;