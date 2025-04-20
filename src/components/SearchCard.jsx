import Button from "./Button";


const SearchCard=({movie,onClick})=>{
    const{Poster,Title,Year,Type}=movie;

    return(

<div className=" flex h-[91px] truncate text-sm min-h-[96px] gap-2 bg-amber-300">

<img className="h-[90px] w-[100px] object-center object-contain  flex-shrink-0" src={Poster} alt="img" />
<div className="flex flex-col gap-3">
<h1 className="font-bold tex-lg truncate mt-1">{Title}</h1>
<p>{Year}</p>

<div className="flex w-full gap-10">
<Button onClick={onClick} movie={movie} className={"h-6 text-[10px] px-2"} text={"ADD TO WATCHLIST"} />
<Button className={"h-6 text-[10px] px-2"} text={"ADD TO WATCHED"} />
</div>
</div>
</div>

    )
}
export default SearchCard;