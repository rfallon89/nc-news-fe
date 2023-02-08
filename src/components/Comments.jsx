import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article:{article_id,comment_count}}) =>{
    
    const [comments,setComments] = useState([])
    const [commentCount, setCommentCount] = useState(comment_count)
    const [page, setPage] = useState(1)
  
    useEffect(()=>{
        getCommentsbyArticleId(article_id, page).then(commentsRes=>setComments([...comments,...commentsRes]))
    },[page])

    return (
        <section>
           <AddComment article_id={article_id} setComments={setComments} setCount={setCommentCount}/>
           <CommentList comments={comments} comment_count={commentCount} setPage={setPage} page={page}/>
        </section>
    )
}