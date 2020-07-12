import { MenuItem, MenuList, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menu: {
        display: 'flex',
    },
    button: {

    }
}));

function Menu(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuList className={classes.menu}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Top Projects</MenuItem>
                <MenuItem>Bootcamps</MenuItem>
                <MenuItem>My FastTrack</MenuItem>
                <MenuItem>Blog</MenuItem>
            </MenuList>
            <Button variant="contained" color="primary" onClick={() => { alert("click") }} className={classes.button} >
                Join Now
            </Button>
        </div>
    )
}

export default Menu;