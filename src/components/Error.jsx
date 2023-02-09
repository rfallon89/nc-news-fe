import apple from '../icons/apple.png'
import '../styles/Error.css'
export const Error = () =>{
    return(
        <div id='error'>
        <img src={apple} alt='NC News logo'/>
        <p>404 - Page Not Found</p>
        </div>
    )
}