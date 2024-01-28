import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePostsPage() {
    const navigate = useNavigate();

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    async function createNewPost(e) {
        const author = window.localStorage.getItem("userID");
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post/new', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({title, content, author })
        });
        if (response.ok) {
          alert("Successful");
        }
        else {
            alert("Unsuccessful");
        }
        
      }

    return (
        <div className="Create-Post">
            
            <form onSubmit={createNewPost}>
            <input className='title'type="title"
                    placeholder={'Title'}
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
            />
            <br />
            <input className='content' type="content"
                    placeholder={'Content'}
                    value={content}
                    onChange={({target}) => setContent(target.value)}
            />
            <br />
            <button style={{marginTop:'5px'}}>Create post</button>
            </form>
        </div>
    );
}