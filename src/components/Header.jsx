
const Header=()=>{
    return(
        <div className="h-15  w-screen flex justify-around items-center bg-blue-950">
        <h1 className="font-bold cursor-pointer text-xl text-white">Watchlist</h1>
        <ul className="w-1/3 flex gap-15">
            <li className="text-white cursor-pointer">"Watchlist</li>
            <li className=" text-white cursor-pointer">Watched</li>
            <li className="px-3 bg-green-400 cursor-pointer">ADD</li>
        </ul>
        </div>
    )
}
export default Header;