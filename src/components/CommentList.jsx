import { useState } from "react"

export const CommentList = ({comments}) =>{
    console.log(comments)
    const [viewComments, setViewComments] = useState(false)
    return  (
        <>
            <button onClick={()=>setViewComments(!viewComments)}>View Comments</button>
             
            {viewComments
            
            ?<ul>
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

         </>
         )          
}