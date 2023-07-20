import TextField from "@mui/material/TextField";

const MuiInput = (props) => {

    return <TextField fullWidth
                      type={props.type} label={props.label}
                      onChange={props.handler} variant='standard'
        sx = {{
            '& .MuiInputLabel-root': {
                color: 'grey',
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