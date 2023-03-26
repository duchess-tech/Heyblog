import { Link } from 'react-router-dom'
import { useRef } from 'react'
import http2 from '../api/http2'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'



function Signup() {
    const firstname = useRef(null)
    const lastname = useRef(null)
    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmpassword = useRef(null)


    const onsignup = async (e) => {
        e.preventDefault()
        let data = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            username: lastname.current.value,
            email: email.current.value,
            password: password.current.value,
            // confirmpassword: confirmpassword.current.value
        }
        try {
            const response = await axios.post("http://localhost:9090/blog/adduser", data)
            const info = await response.data
            console.log(info)
            console.log(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (

        <div className='signup-section'>
            <h1 style={{ textAlign: "center", paddingTop: "1em" }}>SIGNUP HERE!</h1>
            <form className="signupform">
                <input className="forminput-signup" ref={firstname} placeholder="FirstName" />
                <input className="forminput-signup" ref={lastname} placeholder="LastName"></input>
                <input className="forminput-signup" ref={username} placeholder="userName"></input>
                <input className="forminput-signup" ref={email} placeholder="Email"></input>
                <input className="forminput-signup" ref={password} placeholder="Password"></input>
                <input className="forminput-signup" ref={confirmpassword} placeholder="confirm password"></input>
                <div className='btn-case2'>
                    <button className='signupbtn' > <Link to="/login" className='links'>Login  </Link></button>
                    <button className='signupbtn' onClick={onsignup}> <Link className='links'>Sign up</Link></button>
                </div>
            </form>
            <div className='hm' style={{display:"flex",justifyContent:"flex-end",marginRight:"2em"}}>
               <Link to="/" style={{textDecoration:"none"}}>
               <FontAwesomeIcon size='2x' icon={faHome}></FontAwesomeIcon>
               <p>Home</p>

               </Link>
                </div>
        </div>

    )
}
export default Signup