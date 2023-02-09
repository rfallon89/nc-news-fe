import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article}) =>{
    console.log(article.comment_count)
    
    const [comments,setComments] = useState([])
    const [commentCount, setCommentCount] = useState(article.comment_count)
  
    useEffect(()=>{
        getCommentsbyArticleId(article.article_id).then(comments=>{
            setCommentCount(article.comment_count)
            setComments(comments)})
    },[article])

    return (
        <section>
           <AddComment article_id={article.article_id} setComments={setComments} setCount={setCommentCount}/>
           <CommentList comments={comments} setComments={setComments} article={article} commentCount={commentCount} setCommentCount={setCommentCount}/>
        </section>
    )
}