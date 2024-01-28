import {useState, useEffect} from "react";
import Post from "../components/post";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const userID = window.localStorage.getItem("userID");

    useEffect( () => {
        GetPosts();
        console.log(posts);
      }, []);
    
    const GetPosts = () => {
        fetch("http://localhost:3001/post/posts/" + userID)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Error: ", err))
    };

    return (
        <div className="Posts">
            <p>My Posts: </p>
            {posts.map(post => {
                return (
                    <Post key={post._id} title={post.title} content={post.content} author={post.author} timestamp={post.timestamp}/>
                );
            })}
        </div>
    );
}