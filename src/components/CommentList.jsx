import { useState, useContext } from "react"
import messageIcon from '../icons/message.png'
import like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/CommentList.css'
import { DeleteComment } from "./DeleteComment"
import {UserContext} from '../context/user'

export const CommentList = ({comments,setComments,article:{comment_count,author}}) =>{
    const {user:{username}} = useContext(UserContext)
    const [viewComments, setViewComments] = useState(false)
    
    return  (
            <>
                <div id='commentsList'>
                    <button id='comments_toggle' onClick={()=>setViewComments(!viewComments)}><img src={messageIcon} alt='message icon'/> Comments</button>
                <p>{comment_count}</p>
                </div>
            
                {viewComments
                ?<ul id='commentContainer'>
                    {comments.map((comment,index)=>{
                        return (
                            <li id='commentLayout' key={comment.comment_id}>
                                {comment.author?
                                <>
                                <div id='post'>
                                    <p>{comment.author} -</p>
                                    <p>{new Date(comment.created_at).toDateString()}</p>
                                </div>
                         
                                <p>{comment.body}</p>
                                <div>
                                <div id='likes'><img src={like} alt='like icon'/><p>{comment.votes}</p><img src={dislike} alt='dislike icon'/></div>
                                {username===author || username===comment.author?<DeleteComment commentPosition = {index} setComments ={setComments} commentId = {comment.comment_id}/>:null}
                                </div>
                                </>
                                :  <p>Comment ID: {comment.comment_id} has been removed</p> }
                            </li>
                            )
                    })}
                </ul>
            
                :<p></p>}
            </>
            )          
}