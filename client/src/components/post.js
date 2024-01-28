//CHANGE AUTHOR TO AUTHOR.USERNAME AFTER CREATE POSTS

export default function Post({_id,title,content,author, timestamp}) {   
    return (
        <div className='Post'>
            <h1 className='title'>{title}</h1>
            <h4 className="author">Written by: {author}</h4>
            <h4 className="timestamp">{timestamp}</h4>
            <p className='content'>{content}</p>
        </div>
    );
}