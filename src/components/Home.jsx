import {useEffect, useState} from 'react'
import { getArticles} from '../utils/API'
import { useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import create from '../icons/create-list.png'
import '../styles/Home.css'
import {Header} from './Header'
import { Sort } from './Sort';
import { Pagination } from './Pagination';


export const Home = ({article_topic}) => {
    
    const {topic} = useParams()

    const [articles, setArticles] = useState([])
    const [topicState, setTopicState] = useState(undefined)
    const [sortBy, setSortBy] = useState(undefined)
    const [order, setOrder] = useState(undefined)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(0)
    
    const [error, setError] = useState(false)

    useEffect(()=>{
        article_topic
        ?getArticles(article_topic).then(articles =>{
            setError(false)
            setArticles(articles)})
        :getArticles(topicState, sortBy, order,page).then(articles =>{
            setTotalArticles(articles[0].total_count)
           return setArticles([...articles])}).catch((e)=>setError(true))
    },[topicState,sortBy,order,page])

    useEffect(()=>{
        if(topic!==topicState){
            setTopicState(topic)
            setPage(1)
        }
    },[topic])

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
            <Pagination page={page} setPage={setPage} totalArticles={totalArticles}/>
        </div>}
        </div>
    )
}