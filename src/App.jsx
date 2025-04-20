import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import { useState } from "react";

const App=()=>{
      const [inputValue,setInputValue]=useState('');
    const [watchList, setWatchList] = useState([]);
    
  
  return(
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList inputValue={inputValue} watchList={watchList}/>} />
        <Route path="/Watched" element={<Watched />} />
        <Route path="/Add" element={<Add inputValue={inputValue} setInputValue={setInputValue}  watchList={watchList} setWatchList={setWatchList}/>}></Route>
      </Routes> 
      </Router>
      
    </div>
  )
}
export default App;