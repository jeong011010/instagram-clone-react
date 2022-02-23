import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className="post">
        <h3>Username</h3>
      {/* header -> avater + username */}

        <img className="post_image" src="https://t1.daumcdn.net/cfile/tistory/9960C8455A901F7E29"/>
      {/* image */}
        <h4 className="post_text"><strong>UserID</strong> caption</h4>
      {/* username + caption */}  
    </div>
  )
}

export default Post