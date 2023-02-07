import { useParams } from "react-router-dom"
import {getArticleById, patchArticleById} from '../utils/API'
import { useState,useEffect } from "react"
import Like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/Article.css'
import { Link } from "react-router-dom"

export const Article = () =>{
    const {article_id} = useParams()
    const [article,setArticle] = useState({})
    const [like , setLike] = useState(0)
    const [undo, setUndo] = useState(0)

    useEffect(()=>{
        getArticleById(article_id).then(article=>{
            setArticle(article)})
    },[article_id])

    useEffect(()=>{
        patchArticleById(article_id,like)
    },[like])

    useEffect(()=>{
        patchArticleById(article_id,undo)
    },[undo])

    const voteHandler = (e,value) =>{
        setArticle({...article,votes:article.votes+value})
        setLike(like+value)
    }

    const undoHandler = (e,value) =>{
        setArticle({...article,votes:article.votes+value})
        setUndo(value)
        setLike(like+value)
    }


    return (
        article.title
        ?<main>
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <img src={article.article_img_url} alt={`${article.title}`} />
            <p>{article.body}</p>
            <div>
                {like === 1
                ?<><button disabled onClick ={(e)=>voteHandler(e,1)}> <img src= {Like} alt='like icon'/> <p>{article.votes}</p> </button>
                <button onClick ={(e)=>undoHandler(e,-1)}> <img src= {dislike} alt='dislike icon'/>Unlike </button>
                </> 
                
                :like===-1
                ?<button  onClick ={(e)=>undoHandler(e,1)}><img src= {dislike} alt='dislike icon'/> <p>Remove Dislike</p> </button>
                :<><button onClick ={(e)=>voteHandler(e,1)}> <img src= {Like} alt='like icon'/> <p>{article.votes}</p> </button>
                <button onClick ={(e)=>voteHandler(e,-1)}> <img src= {dislike} alt='dislike icon'/> </button></>}
                
                <Link to={`/topic/${article.topic}`}><b>{article.topic}</b></Link>
                <p>{article.created_at.slice(0,10)}</p>
            </div>
        </main>
        :<p>Loading...</p>
    )

}