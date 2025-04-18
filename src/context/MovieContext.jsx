import { createContext } from "react";

export const MovieContext=createContext();

export const MovieProvider=({children})=>{
    return(
<MovieProvider value={{}}>
{children}
</MovieProvider>
    )
}
