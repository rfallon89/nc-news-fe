import { deleteComment } from "../utils/API"
import bin from '../icons/trash.png'
export const DeleteComment = ({commentId,commentPosition, setComments}) =>{
    
    const removeComment = () =>{
        setComments((curr)=>{
            const update = [...curr]
            update[commentPosition]={comment_id:commentId}
            return update
        })
        deleteComment(commentId)
    }

    return(
    <button onClick={removeComment}><img src={bin} alt='delete icon'/></button>
   ) 

}