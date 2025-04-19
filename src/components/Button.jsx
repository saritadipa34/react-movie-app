
const Button=({text,className,onClick})=>{
    return(
        <button onClick={onClick} className={`bg-green-500 cursor-pointer ${className}`}>{text}</button>
    )
}
export default Button;