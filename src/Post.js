import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);

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
      
      {/* header -> avater + username */}

      <img className="post_image" src={imageUrl} alt=""/>
      {/* image */}
      <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
      {/* username + caption */}  
    </div>
  )
}
//https://t1.daumcdn.net/cfile/tistory/9960C8455A901F7E29
export default Post