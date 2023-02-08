import { useState } from "react"
import messageIcon from '../icons/message.png'
import like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/CommentList.css'
export const CommentList = ({comments,comment_count}) =>{

    const [viewComments, setViewComments] = useState(false)
    
    return  (
            <>
                <div id='commentsList'>
                    <button id='comments_toggle' onClick={()=>setViewComments(!viewComments)}><img src={messageIcon} alt='message icon'/> Comments</button>
                <p>{comment_count}</p>
                </div>
            
                {viewComments
                ?<ul id='commentContainer'>
                    {comments.map(comment=>{
                        return (
                            <li id='commentLayout' key={comment.comment_id}>
                                <div id='post'>
                                    <p>{comment.author}</p>
                                    <p>{new Date(comment.created_at).toDateString()}</p>
                                </div>
                         
                                <p>{comment.body}</p>

                                <div id='likes'><img src={like} alt='like icon'/><p>{comment.votes}</p><img src={dislike} alt='dislike icon'/></div>
                            </li>
                            )
                    })}
                </ul>
            
                :<p></p>}
            </>
            )          
}