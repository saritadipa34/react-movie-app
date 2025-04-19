import MovieCard from "./MovieCard";

const WatchList=({})=>{
    return(
        <div className="px-[190px] w-full h-screen">
            <h1 className="font-bold text-2xl my-4">My WatchList</h1>
            <div className="h-full w-full flex flex-wrap gap-5 ">
            <MovieCard />
            </div>
        </div>
    )
}
export default WatchList;