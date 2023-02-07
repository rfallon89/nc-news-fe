import { Link } from "react-router-dom";
import '../styles/Nav.css'
import logo from '../icons/apple.png'
import { useState,useEffect } from "react";
import { getTopics } from "../utils/API";

export const NavBar = () =>{
    const [topics,setTopics] = useState([])
    const [isMobile, setIsMobile] = useState(window.innerWidth<=750)
    useEffect(()=>{
        getTopics().then((topics)=>{
            const slugs = []
            topics.forEach(({slug})=> slugs.push(slug))
            setTopics(slugs)
        })
    },[])

    useEffect(()=>{
        window.addEventListener("resize", () =>{
            setIsMobile(window.innerWidth<=750)
        })
    },[])



    return (
        <nav>
            <ul>
            <li><Link to='/'><img src={logo} alt='NC News logo'/></Link></li>
            <li><Link id='login' to='/login'>Log in</Link></li>
            </ul>
            {isMobile
            ?<ul>
                <li className="dropD"><p>Topics</p>
                    <ul>  
                        {topics.map(topic=><li> <Link key={topic} to={`/topic/${topic}`}>{topic.slice(0,1).toUpperCase()+topic.slice(1)}</Link></li>)}
                    </ul>
                </li>
            </ul>  
        :<ul>
            <li className="topic">
            {topics.map(topic=> <Link key={topic} to={`/topic/${topic}`}>{topic.slice(0,1).toUpperCase()+topic.slice(1)}</Link>)}
            </li>
            <li className="dropD"><p>More</p>
                <ul>
                    <li>topic tbc</li>
                    <li>topic tbc</li>
                </ul>
            </li>
            </ul>}
        </nav>
    )
}