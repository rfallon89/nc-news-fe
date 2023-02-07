import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article:{article_id,comment_count}}) =>{
    const [comments,setComments] = useState([])
    const [commentCount, setCommentCount] = useState(comment_count)
  
    useEffect(()=>{
        getCommentsbyArticleId(article_id).then(comments=>setComments(comments))
    },[])

    return(
        <section>
           <AddComment article_id={article_id} setComments={setComments} setCount={setCommentCount}/>
           <CommentList comments={comments} comment_count={commentCount}/>
        </section>
    )
}