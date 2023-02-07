export const CommentList = ({comments}) =>{
return  (
         <ul>
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
        )          
}