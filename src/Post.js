import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar'

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt='afehQazi'
          src="/static/image/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      
      {/* header -> avater + username */}

      <img className="post_image" src="https://t1.daumcdn.net/cfile/tistory/9960C8455A901F7E29"/>
      {/* image */}
      <h4 className="post_text"><strong>UserID</strong> caption</h4>
      {/* username + caption */}  
    </div>
  )
}

export default Post