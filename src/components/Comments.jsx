import { useEffect } from "react"
import { getCommentsbyArticleId } from "../utils/API"

export const Comments = ({artcile_id}) =>{
    const [comments,setComments] = useState([])

    useEffect(()=>{
        getCommentsbyArticleId(artcile_id).then(comments=>setComments(comments))
    })

    return(
        <section>
            <h2>Comments</h2>
            
            <ul>
            {comments.map(comment=>{
                return (
                    <li key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <div><p>{comment.votes}</p></div>
                        <div>
                            <p>{comment.author}</p>
                            <p>{comment.created_at.slice(0,10)}</p>
                            </div>
                    </li>
                )
            })}
            </ul>
        </section>
    )
}