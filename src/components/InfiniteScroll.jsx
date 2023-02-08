import {useState,useEffect,useRef} from 'react'
import { getArticles } from '../utils/API'
import { Home } from './Home';

export const ArticlesContainer =()=>{
    
    const articleRef = useRef();
    const [currPage, setCurrPage] = useState(1);
    const [prevPage, setPrevPage] = useState(0);
    const [articles, setArticles] = useState([]);
    const [lastPage, setLastPage] = useState(false);

    useEffect(()=>{
        if(!lastPage && prevPage !== currPage){
        getArticles(currPage).then((articlesResponse)=>{
            setPrevPage(currPage);
            setArticles([...articles,...articlesResponse])
        }).catch(()=>setLastPage(true))
        }
    },[lastPage, currPage, prevPage])

    const onScroll = () => {
        console.log(articleRef.current.scrollHeight,"<<<SH")
        console.log(articleRef.current.scrollTop,"<<<<ST")
        console.log(articleRef.current.clientHeight,"<<<CH")
        if(articleRef.current){
            const {scrollTop, scrollHeight, clientHeight} = articleRef.current;
            if(scrollTop+clientHeight >= scrollHeight-0.5){
                setCurrPage(currPage+1);
            }
        }
    };

    return (
        <Home onScroll={onScroll} articleRef={articleRef} articles={articles} />
    )
}