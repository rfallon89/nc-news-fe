import { useContext} from "react";
import { UserContext } from "../context/user"
import { postComment
 } from "../utils/API";

export const AddComment = ({setComments, article_id}) =>{
 
const {user:username} = useContext(UserContext)

const addComment = (e) =>{
    e.preventDefault()
    postComment(article_id,username,e.target[0].value).then(comment=> {
        setComments(curr=>[comment,...curr])})}
    
        return (
            <>
        <form onSubmit = {addComment}>
            <textarea name="addComment" placeholder='Add new comment...'cols='70' rows="10" charswidth='23'></textarea>
            <button>Add Comment</button>
            
        </form> 
        
        </>
         )

}