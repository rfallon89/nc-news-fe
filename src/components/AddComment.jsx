import { useContext, useState} from "react";
import { UserContext } from "../context/user"
import { postComment
 } from "../utils/API";
import '../styles/AddComment.css'

export const AddComment = ({setComments, article_id, setCount}) =>{
 
    const {user:{username}} = useContext(UserContext)
    const [newComment, setNewComment] = useState('')
    const [noContent, setNoContent] = useState(false)
    const [posted,setPosted] = useState(false)

    const addComment = (e) =>{
        setPosted(false)
        e.preventDefault()
        postComment(article_id,username,newComment).then((comment)=>{
            setComments(curr=>[comment,...curr])
            setCount(curr=>curr+1)
            setPosted(true)
        }).catch((e)=>setNoContent(true) )
            setNewComment('')
    }

    const commentHandler = (e) =>{
        setNewComment(e.target.value)
        setNoContent(false)
        setPosted(false)
    }
    
    return (
            <>
                <form onSubmit = {addComment}>
                    <textarea id='addComment' value={newComment} onChange={commentHandler} name="addComment" placeholder='Add new comment...' rows="5"></textarea>
                    <button id='submitComment'>Add Comment</button>
                 </form>
                 {noContent?<p id='noContent'>Please leave a comment before submitting</p>:null}
                 {posted?<p id="added">Comment added</p>:null}
        
            </>
            )
}