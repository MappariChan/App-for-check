import MuiInput from "./MuiInput";
import Counter from "./Counter";
import {useState} from "react";
import classes from './NewCheckItem.module.css'
import {RxCross1} from "react-icons/rx";

const NewCheckItem = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)

    return <>
        {!isDeleted && (<div className={classes["container"]}>
            <MuiInput accentColor={props.color} label="Product title" handler={props.handler} type="text"/>
            <MuiInput accentColor={props.color} label="Price" handler={props.priceHandler} type="number"/>
            <Counter onChange={props.amountHandler}/>
            <div className={classes["circle"]}>
                <RxCross1 color={props.color}
                         onClick={() => {
                             setIsDeleted(true)
                         }}/>
            </div>
        </div>)
        }
    </>
}

export default NewCheckItem