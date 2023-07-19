import {useState} from "react";
import {TextField} from "@mui/material";
import Button from "../../UI/Button";
import axios from "axios";
import classes from './AuthentificationModals.module.css'

const SignUpModal = (props) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const signUpUser = async (event) => {
        event.preventDefault()
        await axios.post('http://randomUrl', {
            username: username,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            localStorage.setItem('token', res.data.message)
            props.close()
        }).catch((e) => {
            console.log(e)
        })
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }
    const usernameInputHandler = (event) => {
        setUsername(event.target.value)
    }
    const emailInputHandler = (event) => {
        setEmail(event.target.value)
    }

    return <form onSubmit={signUpUser} className={classes["submit-form"]}>
        <h2>Sign Up</h2>
        <TextField type = "text" fullWidth label= "User name" onChange={usernameInputHandler} variant='standard'/>
        <TextField type = "text" fullWidth label= "Email or Login" onChange={emailInputHandler} variant='standard'/>
        <TextField type = "password" fullWidth label='Password' onChange={passwordInputHandler} variant='standard'/>
        <Button type = 'submit'>Submit</Button>
        <p>Have an account already? Go back <a onClick={props.openSignInModal} style = {{color: "#6638dd"}}>HERE</a></p>
    </form>
}

export default SignUpModal