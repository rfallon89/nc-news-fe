import {useEffect, useState} from 'react'
import { getArticles} from '../utils/API'
import { useParams} from "react-router-dom";
import {Link} from 'react-router-dom'
import create from '../icons/create-list.png'
import '../styles/Home.css'
import {Header} from './Header'


export const Home = () => {
    const [articles, setArticles] = useState([])
    const {topic} = useParams()

    useEffect(()=>{
        getArticles(topic).then(articles =>setArticles(articles))
    },[topic])

    return (
        <div>
            <Header/>
        <main className='articles'>
            {articles.map(article =>{
                return(
                    <div key={article.article_id} className='article'>
                        <Link to={`/articles/${article.article_id}`}><img id='article_img' src={article.article_img_url} alt={article.title}/></Link>
                        <div className='overview'>
                        <Link id = 'title' to={`/articles/${article.article_id}`}><b>{article.title}</b></Link>
                        <p>{article.author}</p>
                        <div className='created'>
                        <p><img src= {create}/>{article.created_at.slice(0,10)}</p>
                        <Link id='topic' to={`/topic/${article.topic}`}><b>{article.topic}</b></Link>
                        </div>
                        </div>
                    </div>
                )
            })}
        </main>
        </div>
    )
}