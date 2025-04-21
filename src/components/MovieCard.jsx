import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const MovieCard=({movie})=>{
    const [show,setShow]=useState(false);

const iconShow=()=>{
    setShow(true);
}

const iconHide=()=>{
    setShow(false);
}

    return(
    
        <div className="relative"  onMouseEnter={iconShow} onMouseLeave={iconHide}>
            <img className=" h-[250px] w-[200px]" src={movie.Poster} alt="IMG" />
            {show  && <div  className="flex bg-gray-300 text-2xl absolute gap-8 top-[200px] left-14">
            <IoEye />    
            <RxCross2 />             
            </div> }
</div>
    )
}
export default MovieCard;