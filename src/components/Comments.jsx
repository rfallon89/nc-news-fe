import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article_id}) =>{
    const [comments,setComments] = useState([])
    const [viewComments, setViewComments] = useState(false)
   
    
    useEffect(()=>{
        getCommentsbyArticleId(article_id).then(comments=>setComments(comments))
    })

  
    return(
        <section>
           
            <AddComment article_id={article_id} comments={comments} setComments={setComments}/>
            <button onClick={()=>setViewComments(!viewComments)}>View Comments</button>
            
            {viewComments
            ? <CommentList comments={comments}/>
            :<p></p>}

        </section>
    )
}