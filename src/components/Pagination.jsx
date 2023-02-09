import { useState, useEffect } from "react"
import '../styles/Pagination.css'

export const Pagination = ({page, setPage, totalArticles})=>{
    const [pageNumbers, setPageNumbers] = useState([])
    
   
    useEffect(()=>{
        const pageArr = [];
        for(let i=1;i<Math.ceil(totalArticles/10)+1;i++){
            pageArr.push(i)
        }
        setPageNumbers([...pageArr])
    },[totalArticles])

    const paginationHandler =({target:{value}})=>{
        console.log(value)
        setPage(value)
    }
    
    return (
        <ul id='pagination'>
            <li onClick={ page===pageNumbers.length? null:paginationHandler} value={page+1}>Next</li>
            {pageNumbers.map(number=><li id={page===number?'selected':'not'} onClick={paginationHandler}key={number} value={number}>{number}</li>)}
            <li onClick={page!==1?paginationHandler:null} value={page-1}>Previous</li>
        </ul>
    )

}