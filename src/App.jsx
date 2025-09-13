import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";
import { Setting } from "./Pages/Setting";
import { Register } from "./Pages/Register";
import { Profile } from "./Pages/Profile";
import { Login } from "./Pages/Login";
import { Bookmark } from "./Pages/Bookmark";

function App() {
  return (
    <>
   

      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/post" element={<Post />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      

     
    </>
  );
}

export default App;
