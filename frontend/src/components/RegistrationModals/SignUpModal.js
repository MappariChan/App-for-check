import {useState} from "react";
import Button from "../../UI/Button";
import axios from "axios";
import classes from './AuthentificationModals.module.css'
import MuiInput from "../../UI/MuiInput";
import MuiButton from "../../UI/MuiButton";

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
        <MuiInput accentColor="#6638dd" type="text" handler={usernameInputHandler} label="Enter username"/>
        <MuiInput accentColor="#6638dd" type="email" handler={emailInputHandler} label="Enter email"/>
        <MuiInput accentColor="#6638dd" type="password" handler={passwordInputHandler} label="Enter password"/>
        <MuiButton type="submit" accentColor="#6638dd"> Submit </MuiButton>
        <p style={{fontSize: '12px'}}>Have an account already? Go back <a onClick={props.openSignInModal} style={{
            color: "#6638dd",
            cursor: "pointer"
        }}>HERE</a></p>
    </form>
}

export default SignUpModal