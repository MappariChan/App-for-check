import { Button } from "@mui/material";

const MuiButton = (props) => {
  return (
    <Button
      variant="outlined"
      type={props.type}
      onClick={props.onClick}
      sx={{
        color: "black",
        borderColor: "black",
        borderRadius: 0,
        fontFamily: "sans-serif",
        textTransform: "capitalize",
        fontSize: 16,
        "&:hover": {
          color: `${props.accentColor}`,
          borderColor: `${props.accentColor}`,
        },
        "&:focus": {
          color: `${props.accentColor}`,
          borderColor: `${props.accentColor}`,
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default MuiButton;
