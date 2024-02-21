
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    resizable: {
        position: "absolute",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
        resize: "both",
        cursor: "nwse-resize",
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