import React, {useEffect, useState} from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from './firebase';

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if(postId){
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map(doc => doc.data()));
        })
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {

  }

  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt=''
          src="/static/image/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      

      <img className="post_image" src={imageUrl} alt=""/>
      <h4 className="post_text"><strong>{username}</strong> {caption}</h4>

      <div className="post_comments">
        {postId}
        {comments.map((comment) => {
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        })}
      </div>

      <form className="post_commentBox">
        <input
          className="post_input"
          type="text"
          placeholder="input comments"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />
        <button
          className="post_button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>

      

    </div>
  )
}
//https://t1.daumcdn.net/cfile/tistory/9960C8455A901F7E29
export default Post