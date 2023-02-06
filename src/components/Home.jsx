import {useEffect, useState} from 'react'
import { getArticles} from '../utils/API'
import { useParams} from "react-router-dom";
import {Link} from 'react-router-dom'


export const Home = () => {
    const [articles, setArticles] = useState([])
    const {topic} = useParams()

    useEffect(()=>{
        getArticles().then(articles =>setArticles(articles))
    },[])

        useEffect(()=>{
            getArticles(topic).then((articles)=>setArticles(articles))
        })
    

    return (
        <main className='articles'>
            {articles.map(article =>{
                return(
                    <div key={article.article_id} className='article'>
                        <Link to={`/articles/${article.article_id}`}><img id='article_img' src={article.article_img_url} alt={article.title}/></Link>
                        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
                        <p>{article.author}</p>
                        <p>{article.created_at}</p>
                        <Link to={`/topic/${article.topic}`}>{article.topic}</Link>
                    </div>
                )
            })}
        </main>
    )
}