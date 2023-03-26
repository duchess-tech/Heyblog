
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Login() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const OnLogin = async () => {
        const data = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        const res = await axios.post("http://localhost:9090/blog/login", data)
    }
    return (
        <>
            <div className='login-section'>
                <h1 style={{ textAlign: "center", marginTop: "2em" }}>LOGIN HERE!</h1>
                <form className="loginform-container" >
                    <input className="forminput-login" ref={username} placeholder="Username" />
                    <input className="forminput-login" ref={email} placeholder="Email"></input>
                    <input className="forminput-login" ref={password} placeholder="Password"></input>
                    <div className='btn-case'>
                        <button className='signup-btn'>  <Link to="/signup" className='btn'>Signup</Link></button>
                        <button className='login-btn' onClick={OnLogin}>  <Link to="/login" className='btn'>Login</Link></button>
                    </div>
                    <h3 className='connect-text'>Connect with us on</h3>
                    <button className='twitter-btn'>Twitter</button>
                    <button className='instagram-btn'>Instagram</button>

                </form>
                <div className='hm' style={{display:"flex",justifyContent:"flex-end",marginRight:"2em"}}>
               <Link to="/" style={{textDecoration:"none"}}>
               {/* <button style={{background:"0",border:"0"}}>Home</button> */}
               <FontAwesomeIcon size='2x' icon={faHome}></FontAwesomeIcon>
               <p>Home</p>

               </Link>
                </div>
            </div>
        </>
    )
}
export default Login