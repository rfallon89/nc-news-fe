import { useEffect, useState } from "react"
import { getCommentsbyArticleId } from "../utils/API"
import { AddComment } from "./AddComment"
import { CommentList } from "./CommentList"

export const Comments = ({article}) =>{
    
    const [comments,setComments] = useState([])
    const [commentCount, setCommentCount] = useState(article.comment_count)
  
    useEffect(()=>{
        getCommentsbyArticleId(article.article_id).then(comments=>setComments(comments))
    },[])

    return (
        <section>
           <AddComment article_id={article.article_id} setComments={setComments} setCount={setCommentCount}/>
           <CommentList comments={comments} setComments={setComments} article={article}/>
        </section>
    )
}