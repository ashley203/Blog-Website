import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostsPage from "./pages/PostsPage";
import CreatePostsPage from "./pages/CreatePostsPage";
import MyPostsPage from "./pages/MyPostsPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/create-posts" element={<CreatePostsPage />} />
          <Route path="/my-posts" element={<MyPostsPage />} />
        </Routes>
    </div>
  );
}

export default App;
