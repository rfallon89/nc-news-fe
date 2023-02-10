import { useState, useContext } from "react"
import messageIcon from '../icons/message.png'
import like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/CommentList.css'
import { DeleteComment } from "./DeleteComment"
import {UserContext} from '../context/user'

export const CommentList = ({comments,setComments,article, commentCount, setCommentCount}) =>{
    const {user:{username}} = useContext(UserContext)
    const [viewComments, setViewComments] = useState(false)
    
    return  (
            <>
                <div id='commentsList'>
                    <button id='comments_toggle' onClick={()=>setViewComments(!viewComments)}><img src={messageIcon} alt='message icon'/> Comments</button>
                <p>{commentCount}</p>
                </div>
            
                {viewComments
                ?<ul id='commentContainer'>
                    {comments.map(({comment_id,author,created_at,body,votes},index)=>{
                        return (
                            <li id='commentLayout' key={comment_id}>
                                {author?
                                <>
                                <div id='post'>
                                    <p>{author} -</p>
                                    <p>{new Date(created_at).toDateString()}</p>
                                </div>
                         
                                <p>{body}</p>
                                <div id='trashContainer'>
                                <div id='likes'><img src={like} alt='like icon'/><p>{votes}</p><img src={dislike} alt='dislike icon'/></div>
                                {username===article.author || username===author?<DeleteComment commentPosition = {index} setComments ={setComments} commentId = {comment_id} setCommentCount={setCommentCount}/>:null}
                                </div>
                                </>
                                :  <p id='deleted'>Comment ID: {comment_id} has been removed</p> }
                            </li>
                            )
                    })}
                </ul>
            
                :<p></p>}
            </>
            )          
}