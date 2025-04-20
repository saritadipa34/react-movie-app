
const Button=({text,className,onClick,movie})=>{
    return(
        <button onClick={()=>onClick(movie)} movie={movie} className={`bg-green-500 cursor-pointer ${className}`}>{text}</button>
    )
}
export default Button;