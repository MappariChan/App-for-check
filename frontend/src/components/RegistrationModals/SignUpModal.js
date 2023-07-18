import {useState} from "react";
import {TextField} from "@mui/material";
import Button from "../../UI/Button";
import axios from "axios";

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
    return <form onSubmit={validateSignInData}>
        <h2>Welcome</h2>
        <TextField label='Email or Login' variant='standart' type='text' error='Incorrect username or email'
                   onChange={signUpDataInputHandler}/>
        <TextField label='Password' variant='standart' type='password' error='Incorrect password'
                   onChange={passwordInputHandler}/>
        <Button buttonText='Submit' type = 'submit'/>
    </form>
}

export default SignInModal