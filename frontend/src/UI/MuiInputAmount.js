import MuiInput from "./MuiInput";
import Counter from "./Counter";

const MuiInputAmount = (props) => {
    return <div style = {{display: "flex", flexDirection: "row", gap: "15px", width: "100%"}}>
        <MuiInput accentColor = {props.color} label = {props.label} handler = {props.handler} type = {props.type}/>
        <Counter onChange={props.amountHandler} value = {1}/>
    </div>
}

export default MuiInputAmount