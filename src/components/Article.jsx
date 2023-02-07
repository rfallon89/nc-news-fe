import { useParams } from "react-router-dom"
import {getArticleById, patchArticleById} from '../utils/API'
import { useState,useEffect } from "react"
import Like from '../icons/thumb-up.png'
import dislike from '../icons/dislike.png'
import '../styles/Article.css'
import { Link } from "react-router-dom"
import { Comments } from "./Comments"

export const Article = () =>{
    const {article_id} = useParams()
    const [article,setArticle] = useState({})
    const [like , setLike] = useState(0)
    const [click, setClick] = useState(false)

    useEffect(()=>{
        getArticleById(article_id).then(article=>{
            setArticle(article)})
    },[article_id])

    useEffect(()=>{
        patchArticleById(article_id,like)
    },[article_id,click])

    const voteHandler = (value) =>{
        setArticle({...article,votes:article.votes+value})
        setLike(value)
        setClick(!click)
    }
    
    return (
        article.title
        ?<main className="article_view">
            <h2>{article.title}</h2>
            <p>{`Posted by ${article.author} on ${new Date(article.created_at).toDateString()}`}</p>
            <img id='article_img' src={article.article_img_url} alt={`${article.title}`} />
            <p>{article.body}</p>
            <div id='footer'>
                {click && like === 1
                ?<><button className="like1" disabled onClick ={()=>voteHandler(1)}> <img className="icon" src= {Like} alt='like icon'/> <p>{article.votes}</p> </button>
                <button className="like2" onClick ={()=>voteHandler(-1)}> <img className="icon" src= {dislike} alt='dislike icon'/><p>Unlike</p> </button>
                </> 
                
                :click && like === -1
                ?<button className="like3"  onClick ={()=>voteHandler(1)}><img className="icon" src= {dislike} alt='dislike icon'/> <p>Remove Dislike</p> </button>
                :<><button className="like1" onClick ={()=>voteHandler(1)}> <img className="icon" src= {Like} alt='like icon'/> <p>{article.votes}</p> </button>
                <button className="like2" onClick ={()=>voteHandler(-1)}> <img className="icon" src= {dislike} alt='dislike icon'/> </button></>}
                
                <Link id='topic_art' to={`/topic/${article.topic}`}><b>{article.topic.slice(0,1).toUpperCase()+article.topic.slice(1)}</b></Link>
               
            </div>
            <section>
                <Comments article_id={article_id}/>
            </section>
        </main>
        :<p>Loading...</p>
    )

}