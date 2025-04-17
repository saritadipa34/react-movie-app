import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import WatchList from "./components/WatchList";

const App=()=>{
  return(
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/Watched" element={<Watched />} />
        <Route path="/Add" element={<Add />}></Route>
      </Routes> 
      </Router>
      
    </div>
  )
}
export default App;