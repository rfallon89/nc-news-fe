import {useEffect, useState} from 'react'
import { getArticles} from '../utils/API'
import { useParams} from "react-router-dom";
import {Link} from 'react-router-dom'
import create from '../icons/create-list.png'
import '../styles/Home.css'
import {Header} from './Header'


export const Home = ({article_topic, onScroll, articleRef, articles}) => {
    // const [articles, setArticles] = useState([])
    const {topic} = useParams()
   
    // useEffect(()=>{
    //     article_topic
    //     ?getArticles(article_topic).then(articles =>setArticles(articles))
    //     :getArticles(topic).then(articles =>setArticles(articles))
    // },[topic])

    return (
        <div >
            {articles.length !==0?
            <>
           {!article_topic?<Header/>:null}
        <main className='articles' onScroll={onScroll} ref ={articleRef} style={{height:"100vh", overflowY:"auto"}}>
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
        </>
        :<p>loading</p>}
        </div>
    )
}