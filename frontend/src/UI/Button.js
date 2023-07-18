const Button = (props) => {
    return <button onClick={props.onClick} type={props.type}>
        {props.buttonText}
    </button>
}

export default Button