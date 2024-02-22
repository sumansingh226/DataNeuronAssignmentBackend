
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: 5,
        width: '100vw',
        height: '100vh',
        position: 'relative',
    },
    resizeable: {
        position: 'absolute',
        border: '2px solid #533535',
        width: 100,
        height: 100,
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 15,
        minHeight: 15,
    },
    resizer: {
        position: 'absolute',
        background: 'black',
    },
    resizerR: {
        cursor: 'col-resize',
        height: '100%',
        right: 0,
        top: 0,
        width: 5,
    },
    resizerT: {
        cursor: 'row-resize',
        height: 5,
        left: 0,
        top: 0,
        width: '100%',
    },
    resizerB: {
        cursor: 'row-resize',
        height: 5,
        left: 0,
        bottom: 0,
        width: '100%',
    },
    resizerL: {
        cursor: 'col-resize',
        height: '100%',
        left: 0,
        top: 0,
        width: 5,
    },

}));

export default useStyles;