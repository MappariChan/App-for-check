import {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "../../UI/Button";
import axios from "axios";
import classes from './AuthentificationModals.module.css'

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
        <h2>Welcome</h2>
        <TextField type = "text" fullWidth label= "Email or Login" onChange={signUpDataInputHandler} variant='standard'/>
        <TextField type = "password" fullWidth label='Password' onChange={passwordInputHandler} variant='standard'/>
        <Button type = 'submit'>Submit</Button>
    </form>
}

export default SignInModal