import {getUserbyUsername} from '../utils/API'
import {UserContext} from '../context/user'
import {useContext, useState, useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom'

export const Login = () => {
    const {user:{username}, setUser} = useContext(UserContext)
    const [exists, setExists] = useState(true)
    const [usernameInput, setUsernameInput] = useState('')
    
    const submit = (e) =>{
        e.preventDefault()
        getUserbyUsername(usernameInput).then(user=> {
            setUser(user)
            setExists(true)}).catch(()=> setExists(false))
        setUsernameInput('')
    }
    let navigate = useNavigate();
    
    useEffect(() => {
        if (username){
        return navigate("/");
        }
    },[username]);

    return (
        <div>
            {!exists?<p> Username does not exist. Try again or create a new user profile</p>:null}
            <form onSubmit = {submit}>
            <label htmlFor="username">Username:</label>
            <input value={usernameInput} onChange={(e)=>setUsernameInput(e.target.value)} name="username" required/>
            <button>Log in</button>
            </form>
            {!exists?<Link to="/create_username">Sign up</Link>:<p>Not already signed up? <Link to='/create_username'>Create</Link></p>}
        </div>
         
    )
}