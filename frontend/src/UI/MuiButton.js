import {Button} from "@mui/material";

const MuiButton = (props) => {
    return <Button variant="outlined"
                   type={props.type} onClick={props.onClick}
                   sx={{
                       color: 'grey',
                       borderColor: 'initial',
                       '&:hover': {
                           color: `${props.accentColor}`,
                           borderColor: `${props.accentColor}`,
                       },
                       '&:focus': {
                           color: `${props.accentColor}`,
                           borderColor: `${props.accentColor}`,
                       },
                   }}
    >
        {props.children}
    </Button>
}

export default MuiButton