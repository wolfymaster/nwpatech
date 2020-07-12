import { Container, Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Menu from '../components/menu';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
    }
}));

function Header(props) {

    const classes = useStyles();

    return (
        <div style={{background: 'white', borderBottom: '1px solid #d4e1f4', padding:'10px'}}>
            <Container>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item lg={5}>
                        <div>NWPA Tech</div>
                    </Grid>
                    <Grid item lg={7}>
                        <Menu/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header