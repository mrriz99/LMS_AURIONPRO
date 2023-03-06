
import { useState } from "react"
import Container from "../templates/Container"
import AdminLogin from "./AdminLogin"
import './login.css'
import UserLogin from "./UserLogin"

const Login=()=>{
    const [showForm,setShowForm] = useState(false);
    const [showFormm, setShowFormm]=useState(false);
    const [Button,setButton]=useState(true);
    const [FormButton, setFormButton]=useState(true);

    const onClickHandler=()=>{
        setShowForm(true)
        setButton(false)
        setFormButton(false)
        console.log("showform",showForm)
    }
    const onClickHandler_ii=()=>{
        setShowFormm(true)
        setButton(false)
        setFormButton(false)
    }
    return(
        <Container>
            <form className="form_login">
             <h2>Sign in to ALMS</h2>
            {showForm && <AdminLogin /> }
            {showFormm && <UserLogin />}
            {Button && <button className="butt1" type="button" onClick={onClickHandler}>Login as Admin</button>}
            {FormButton && <button type="button" className="butt2" onClick={onClickHandler_ii}>Login as User</button>}
            </form>   
            
        </Container>
        // <img className='image_aurion'  alt='Logo'   />
        // 
    )
}
export default Login