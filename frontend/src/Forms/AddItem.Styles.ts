import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "430px",
        marginTop: "2rem",
        marginLeft: "1rem",
        padding: "2rem",
        marginBottom: 1,
    },
    itemList: {
        border: "1px solid gray",
        padding: "1rem",
    },
    listItem: {
        cursor: "pointer",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "column",
    },
});

export default useStyles;