import TextField from "@mui/material/TextField";
import {useState} from "react";
import {makeStyles} from "@mui/material";

const MuiInput = (props) => {

    return <TextField
                      type={props.type} fullWidth label={props.label}
                      onChange={props.handler} variant='standard'
        sx = {{
            '& .MuiInputLabel-root': {
                color: 'initial',
            },
            '&:focus-within .MuiInputLabel-root': {
                color: `${props.accentColor}`,
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: `${props.accentColor}`,
        }
        }}
    />
}

export default MuiInput