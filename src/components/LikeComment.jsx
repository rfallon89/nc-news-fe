import { useState, useEffect } from "react"
import { patchComment } from "../utils/API"
import Like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/LikeComment.css'
export const CommentLike = ({setComments, commentId, votes,index}) =>{

    const [like , setLike] = useState(0)
    const [click, setClick] = useState(false)

    useEffect(()=>{
        patchComment(commentId,like)
    },[click,like,commentId])

    const voteHandler = (value) =>{
        setComments(curr=>{
            const update = [...curr]
            update[index] = {...update[index], votes:update[index].votes+value}
            return update
        })
        setLike(value)
        setClick(!click)
    }
    return(
    click && like === 1
        ?<div id='likeContainer'><button className="like1" disabled onClick ={()=>voteHandler(1)}> <img className="icon" src= {Like} alt='like icon'/> <p>{votes}</p> </button>
        <button className="like2" onClick ={()=>voteHandler(-1)}> <img className="icon" src= {dislike} alt='dislike icon'/><p>Unlike</p> </button>
        </div> 
        
        :click && like === -1
        ?<button className="like3"  onClick ={()=>voteHandler(1)}><img className="icon" src= {dislike} alt='dislike icon'/> <p>Remove Dislike</p> </button>
        :<div id='likeContainer'><button className="like1" onClick ={()=>voteHandler(1)}> <img className="icon" src= {Like} alt='like icon'/> <p>{votes}</p> </button>
        <button className="like2" onClick ={()=>voteHandler(-1)}> <img className="icon" src= {dislike} alt='dislike icon'/> </button></div>
    ) 
}   