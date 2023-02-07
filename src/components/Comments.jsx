import { useEffect, useState, useContext } from "react"
import { getCommentsbyArticleId ,postComment} from "../utils/API"
import { UserContext } from "../context/user"

export const Comments = ({article_id}) =>{
    const [comments,setComments] = useState([])
    const [viewComments, setViewComments] = useState(false)
    const {user:username} = useContext(UserContext)
    
    useEffect(()=>{
        getCommentsbyArticleId(article_id).then(comments=>setComments(comments))
    })

    const addComment = (e) =>{
        e.preventDefault()
        postComment(article_id,username,e.target[0].value).then(comment=>setComments(...comments,comment))
    }

    return(
        <section>
            <form onSubmit = {addComment}>
                <textarea name="addComment" placeholder='Add new comment...'cols='70' rows="10" charswidth='23'></textarea>
                <button>Add Comment</button>
            </form>

            <button onClick={()=>setViewComments(!viewComments)}>View Comments</button>
            
            {viewComments
            ? <ul>
            {comments.map(comment=>{
                return (
                    <li key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <div><p>{comment.votes}</p></div>
                        <div>
                            <p>{comment.author}</p>
                            <p>{new Date(comment.created_at).toDateString()}</p>
                            </div>
                    </li>
                )
            })}
            </ul>
            :<p></p>}

        </section>
    )
}