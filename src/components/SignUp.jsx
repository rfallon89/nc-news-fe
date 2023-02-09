import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postUser } from "../utils/API";
import { useNavigate,Link } from "react-router-dom";

export const SignUp = () =>{
    const {setUser, user} = useContext(UserContext)
    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const createUser = (e) =>{
        e.preventDefault()
        let newUser = {};
        newUser.username = e.target[0].value
        newUser.name = e.target[1].value
        newUser.avatar_url = e.target[2].value
        console.log(newUser)
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
        {error?<p>Username taken. <Link to="/login">Already a member?</Link> </p>:null}
        {created? navigate("/")
    : <form onSubmit={createUser}>
        <label htmlFor="username"> <b>Username:</b></label>
        <input required name='username'/>
        <label htmlFor="name"> <b>Name:</b></label>
        <input required name='name'/>
        <label htmlFor="avatar_url"><b>Avatar Image :</b></label>
        <input name="avatar" type='url'/>
        <button>Create User</button>
    </form>
        }
    </>
    )
}