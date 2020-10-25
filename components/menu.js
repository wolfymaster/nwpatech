import { MenuItem, Menu, MenuList, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

function TopMenu(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Top Projects</MenuItem>
            <MenuItem>Bootcamps</MenuItem>
            <MenuItem>My FastTrack</MenuItem>
            <MenuItem>Blog</MenuItem>
            <Button variant="contained" color="primary" onClick={() => { alert("click") }} >
                Join Now
            </Button>
        </div>
    )
}

export default TopMenu;