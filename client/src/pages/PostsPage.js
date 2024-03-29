import {useState, useEffect} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Post from "../components/post";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        GetPosts();
        console.log(posts);
      }, []);
    
    const GetPosts = () => {
        fetch("http://localhost:3001/post/all")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Error: ", err))
    };

    return (
        <div className="Posts">
            <p>Posts: </p>
            {posts.map(post => {
                return (
                    <Post key={post._id} title={post.title} content={post.content} author={post.author} timestamp={post.timestamp}/>
                );
            })}
        </div>
    );
}