import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import { useEffect, useState } from "react";

const App=()=>{
      const [inputValue,setInputValue]=useState('');
    const [watchList, setWatchList] = useState([]);
    const [watchedList,setWatchedList]=useState([]);
    
useEffect(()=>{
const watched=localStorage.getItem('watched');
if(watched){
  setWatchedList(JSON.parse(watched))
}
},[])

useEffect(()=>{
  if(watchedList.length > 0){
localStorage.setItem('watched',JSON.stringify(watchedList))}
},[watchedList])

useEffect(()=>{
const saved=localStorage.getItem('wishList');
if(saved){
  setWatchList(JSON.parse(saved));
}
},[])

useEffect(()=>{
  if(watchList.length > 0){
  localStorage.setItem('wishList',JSON.stringify(watchList))}
},[watchList])

  return(
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList inputValue={inputValue} watchList={watchList}  setWatchList={setWatchList} watchedList={watchedList} setWatchedList={setWatchedList}/>} />
        <Route path="/Watched" element={<Watched watchedList={watchedList} setWatchedList={setWatchedList} />} />
        <Route path="/Add" element={<Add inputValue={inputValue}  setInputValue={setInputValue}  watchList={watchList} setWatchList={setWatchList}
        />}></Route>
      </Routes> 
      </Router>
      
    </div>
  )
}
export default App;