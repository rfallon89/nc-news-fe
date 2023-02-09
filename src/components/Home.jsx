import {useEffect, useState} from 'react'
import { getArticles} from '../utils/API'
import { useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import create from '../icons/create-list.png'
import '../styles/Home.css'
import {Header} from './Header'
import { Sort } from './Sort';


export const Home = ({article_topic}) => {
    const [articles, setArticles] = useState([])
    const {topic} = useParams()
    const [sortBy, setSortBy] = useState(undefined)
    const [order, setOrder] = useState(undefined)
    
    const [error, setError] = useState(false)

    useEffect(()=>{
        article_topic
        ?getArticles(article_topic).then(articles =>{
            setError(false)
            setArticles(articles)})
        :getArticles(topic, sortBy, order).then(articles =>setArticles(articles)).catch((e)=>setError(true))
    },[topic,,sortBy,order])

    let navigate = useNavigate();

    const errorHandler = () =>{{
        return navigate("*")
    }}
    return (
        <div>
            {error? errorHandler():
            <div>
           {!article_topic?<Header/>:null}
           {article_topic?null:<Sort setSortBy={setSortBy} setOrder={setOrder}/>}
        <main className='articles'>
            
            {articles.map(article =>{
                return(
                    <div key={article.article_id} className='article'>
                        <Link to={`/articles/${article.article_id}`}><img id='article_img' src={article.article_img_url} alt={article.title}/></Link>
                        <div className='overview'>
                        <div>
                        <Link id = 'title' to={`/articles/${article.article_id}`}><b>{article.title}</b></Link>
                        <p>{article.author}</p>
                        </div>
                        <div className='created'>
                        <p><img src= {create} alt=''/>{article.created_at.slice(0,10)}</p>
                        <Link id='topic' to={`/topic/${article.topic}`}><b>{article.topic}</b></Link>
                        </div>
                        </div>
                    </div>
                )
            })}
        </main>
        </div>}
        </div>
    )
}