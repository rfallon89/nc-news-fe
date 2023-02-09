import { useState, useEffect } from "react"

export const Pagination = ({page, setPage, totalArticles})=>{
    const [pageNumbers, setPageNumbers] = useState([])
    
   
    useEffect(()=>{
        const pageArr = [];
        for(let i=1;i>Math.ceil(totalArticles/10);i++){
            pageArr.push(i)
        }
        setPageNumbers([...pageArr])
    },[totalArticles])
}