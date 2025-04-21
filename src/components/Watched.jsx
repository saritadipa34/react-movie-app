import MovieCard from "./MovieCard";


const Watched=({watchedList})=>{

    return(
        <div className="px-[190px] w-full h-screen ">
            <h1 className="font-bold text-2xl my-4">My WatchedList</h1>
              <div className="h-full w-full flex flex-wrap gap-5 "> 
{
    watchedList.length> 0 && watchedList.map((film,index)=>{
        return <MovieCard key={`${film.imdbID}-${index}`} movie={film}/>
    })
}
        </div>
        </div>
    )
}
export default Watched;