import {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "../../UI/Button";
import axios from "axios";
import classes from './AuthentificationModals.module.css'
import MuiInput from "../../UI/MuiInput";

const SignInModal = (props) => {
    const [password, setPassword] = useState('')
    const [signInData, setSignInData] = useState('')



    const validateSignInData = async (event) => {
        event.preventDefault()
        await axios.post('http://randomUrl', {
            login: signInData,
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

    const signUpDataInputHandler = (event) => {
        setSignInData(event.target.value)
    }



    return <form onSubmit={validateSignInData} className={classes["submit-form"]}>
        <h2>Welcome Back</h2>
        <MuiInput accentColor = "#6638dd" type = "text" handler = {signUpDataInputHandler} label = "Enter login or username"/>
        <MuiInput accentColor = "#6638dd" type = "password" handler = {passwordInputHandler} label = "Enter password"/>
        <Button type='submit'>Submit</Button>
        <p style = {{fontSize: '12px'}}>No account? You can always create a new one <a onClick={props.openSignUpModal}
                                                          style={{color: "#6638dd", cursor: "pointer"}}>HERE</a></p>
    </form>
}

export default SignInModal