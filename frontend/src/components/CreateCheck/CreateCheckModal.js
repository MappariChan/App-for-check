import classes from '../RegistrationModals/AuthentificationModals.module.css'
import MuiInput from "../../UI/MuiInput";
import NewCheckItem from "../../UI/NewCheckItem";
import {useState} from "react";

const CreateCheckModal = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(1)
    const titleInputHandler = (event) => {
        setTitle(event.target.value)
    }

    return <form className={classes["submit-form"]}>
        <h2>New Check</h2>
        <h3>Check title</h3>
        <MuiInput label="Check Title" accentColor="#6638dd" type="text" handler={titleInputHandler}/>
        <h3>Check Options</h3>
        <NewCheckItem color="#6638dd"/>
    </form>
}

export default CreateCheckModal