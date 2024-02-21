
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    resizableBox: {
        resize: "both",
        overflow: "auto",
        border: "1px solid #ccc",
        padding: "8px",
        margin: "8px",
        minWidth: "100px",
        minHeight: "100px",
        maxWidth: "400px",
        maxHeight: "400px",
    },
    handle: {
        position: "absolute",
        width: 10,
        height: 10,
        backgroundColor: "#ccc",
    },
    topLeft: {
        top: -5,
        left: -5,
        cursor: "nwse-resize",
    },
    topRight: {
        top: -5,
        right: -5,
        cursor: "nesw-resize",
    },
    bottomLeft: {
        bottom: -5,
        left: -5,
        cursor: "nesw-resize",
    },
    bottomRight: {
        bottom: -5,
        right: -5,
        cursor: "nwse-resize",
    },
}));

export default useStyles