import { useState } from "react";
import '../styles/Sort.css'

export const Sort = ({setSortBy,setOrder}) =>{
    const [sortInput, setSortInput] = useState('')
    const [orderInput, setOrderInput] = useState('asc')
    const [sortModal, setSortModal] = useState('hideSort')
    const [orderModal, setOrderModal] = useState('hideOrder')

    const submitHandler = (e) =>{
        e.preventDefault()
        setSortBy(()=> sortInput)
        setOrder(()=>orderInput)
        setSortModal('hideSort')
        setOrderModal('hideOrder')
    }

    return (
        <div id='sortContainer'>
        <button id='sortButton' onClick={()=>setSortModal('sortModal')} >Sort +</button>
        <div id="sortModal" className={sortModal}>
            <div className="modal-content">
                <span onClick={()=>setSortModal('hideSort')} className='close'>&times;</span>
                    <form onSubmit={submitHandler}>
                    <p>Sort by:</p>
                    <div  className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio" name="optionsRadio" id="optionsRadio1" value={undefined}/>
                            None
                        </label>
                     </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio2" value="article_id"/>
                        Article Id
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio3" value="title"/>
                        Title
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio4" value="author"/>
                        Author
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio5" value="created_at"/>
                        Date Posted
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio6" value="votes"/>
                        Likes
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setSortInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio7" value="topic"/>
                        Topic
                        </label>
                    </div>
                    <button>Add</button>
                    </form>
            </div>
        </div>
        <button id='orderButton' onClick={()=>setOrderModal('orderModal')}>Order +</button>
        <div id="Modal" className={orderModal}>
            <div className="modal-content">
                <span onClick={()=>setOrderModal('hideOrder')} className='close'>&times;</span>
                    <form onSubmit={submitHandler}>
                    <p>Order:</p>
                    <div  className="radio">
                        <label>
                        <input onClick={({target})=>{setOrderInput(target.value)}} type="radio" name="optionsRadio" id="optionsRadio1" value='asc'/>
                            Ascending
                        </label>
                     </div>
                    <div className="radio">
                        <label>
                        <input onClick={({target})=>{setOrderInput(target.value)}} type="radio"  name="optionsRadio" id="optionsRadio2" value="desc"/>
                        Descending
                        </label>
                    </div>
                    <button>Add</button>
                    </form>

            </div>
        </div> 
        </div>
    )
}