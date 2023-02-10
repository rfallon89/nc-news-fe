import { deleteComment } from "../utils/API"
import bin from '../icons/trash.png'
import '../styles/DeleteComment.css'
export const DeleteComment = ({commentId,commentPosition, setComments, setCommentCount}) =>{
    
    const removeComment = () =>{
        setComments((curr)=>{
            const update = [...curr]
            update[commentPosition]={comment_id:commentId}
            setCommentCount((curr)=>curr-1)
            return update
        })
        deleteComment(commentId)
    }

    return(
    <button id="bin" onClick={removeComment}><img id="bin" src={bin} alt='delete icon'/></button>
   ) 

}