import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postUser } from "../utils/API";
import { useNavigate,Link } from "react-router-dom";
import {Header} from './Header'
import '../styles/SignUp.css'

export const SignUp = () =>{
    const {setUser} = useContext(UserContext)
    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const createUser = (e) =>{
        e.preventDefault()
        let newUser = {};
        newUser.username = e.target[0].value
        newUser.name = e.target[1].value
        newUser.avatar_url = e.target[2].value
        
        postUser(newUser).then((userProfile)=> {
            setUser(userProfile)
            setCreated(true)
            setError(false)
        }).catch(({response:{status}})=>{
           if(status === 400){
               setError(true)
            }
        })
    }
    return (
        <>
        <Header/>
        <div id='layoutContainer'>
        <div id='signUpContainer'>
        {error?<p>Username taken. <Link to="/login">Already a member?</Link> </p>:null}
        {created? navigate("/")
    : <form onSubmit={createUser}>
        <label id='usernameSign' htmlFor="username"> <b>Username:</b><input required name='username'/></label>
        
        <label id='nameSign' htmlFor="name"> <b>Name:</b><input required name='name'/></label>
        
        <label id='url' htmlFor="avatar_url"><b>Avatar Image :</b><input name="avatar" type='url'/></label>
        
        <button id='createButton'>Create User</button>
    </form>
        }
    </div>
    </div>
    </>
    )
}