import { useState } from "react";

export const Sort = ({setSortBy,setOrder}) =>{
    const [sortInput, setSortInput] = useState('')
    const [orderInput, setOrderInput] = useState('asc')
    
    const submitHandler = (e) =>{
        e.preventDefault()
        setSortBy(()=> sortInput)
        setOrder(()=>orderInput)
        // setSortInput('')
        // setOrderInput('')
    }

    return (
        <form onSubmit={submitHandler}>
            <select onChange={({target})=>setSortInput(target.value)}>
                <option value={undefined}>Sort By</option>
                <option value='article_id'>Article Id</option>
                <option value='title'>Title</option>
                <option value='topic'>Topic</option>
                <option value='author'>Author</option>
                <option value='created_at'>Date Posted</option>
                <option value='votes'>Likes</option>
            </select>
            <select onChange={({target})=>setOrderInput(target.value)}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            <button>sort</button>
        </form>
    )
}