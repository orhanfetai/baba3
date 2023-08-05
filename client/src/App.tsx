import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FolderPage from "./pages/FolderPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/folder/:folderName" element={<FolderPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
