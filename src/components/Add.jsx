import { FaSearch } from "react-icons/fa";

const Add=()=>{
    
    return(
        
        <div className="relative w-1/3  h-[500px] flex flex-col  mx-auto pt-5">
            <input type="text" className="w-full h-8 pl-12 mb-4 bg-blue-950 text-white"  placeholder="Search For Movies"/>
            <FaSearch className="absolute top-7 left-5 text-white"/>

        </div>
    )
}
export default Add;