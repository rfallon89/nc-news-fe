import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { CommentList } from "./CommentList"

export const Comments = ({article_id}) =>{
    const [comments,setComments] = useState([])
    const [viewComments, setViewComments] = useState(false)
   
    
    useEffect(()=>{
        getCommentsbyArticleId(article_id).then(comments=>setComments(comments))
    })

  
    return(
        <section>
           

            <button onClick={()=>setViewComments(!viewComments)}>View Comments</button>
            
            {viewComments
            ? <CommentList comments={comments}/>
            :<p></p>}

        </section>
    )
}