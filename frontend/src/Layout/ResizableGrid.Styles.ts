// styles.js

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    resizable: {
        position: "relative",
        border: "1px solid #ddd",
        background: "#f0f0f0",
        overflow: "hidden",
    },
    handle: {
        position: "absolute",
        width: "10px",
        height: "10px",
        background: "#ddd",
        cursor: "pointer",
    },
});

export default useStyles;
