import Button from "./Button";


const SearchCard=()=>{
    const imgUrl=import.meta.env.VITE_TEMP_IMG;

    return(
        <div className=" bg-red-300 ">
<div className=" flex h-[96px] gap-3  bg-amber-300">

<img className="h-[95px] w-1/4" src={imgUrl} alt="img" />
<div className="flex flex-col gap-3">
<h1 className="font-bold tex-lg">Hero</h1>
<p>2001</p>

<div className="flex w-full gap-10">
<Button className={"h-6 text-[10px] px-2"} text={"ADD TO WATCHLIST"} />
<Button className={"h-6 text-[10px] px-2"} text={"ADD TO WATCHED"} />
</div>
</div>
</div>
        </div>
    )
}
export default SearchCard;