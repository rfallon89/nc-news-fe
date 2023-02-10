import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article}) =>{
    
    const [comments,setComments] = useState([])
    const [commentCount, setCommentCount] = useState(article.comment_count)
    const [page, setPage] = useState(1)
  
    useEffect(()=>{
        getCommentsbyArticleId(article.article_id,page).then(commentsRes=>{
            setCommentCount(article.comment_count)
            setComments(curr=>[...curr,...commentsRes])})
    },[article,page])

    return (
        <section>
           <AddComment article_id={article.article_id} setComments={setComments} setCount={setCommentCount}/>
           <CommentList comments={comments} setComments={setComments} article={article} commentCount={commentCount} setCommentCount={setCommentCount} setPage={setPage} page={page}/>
        </section>
    )
}