
const Button=({text,className})=>{
    return(
        <button className={`bg-green-500 cursor-pointer ${className}`}>{text}</button>
    )
}
export default Button;