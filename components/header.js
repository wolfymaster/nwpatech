import { Container, Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TopMenu from '../components/menu';

const useStyles = makeStyles(() => ({
    root: {
        background: '#FFF',
        borderBottom: '1px solid #d4e1f4',
        padding: '10px 0',
    }
}));

function Header(props) {

    const classes = useStyles();

    return (
        <Container component='div' maxWidth={false} disableGutters={true} className={classes.root}>
            <Container lg={12} component='div'>
                <Grid container component='div'>
                    <Grid item lg={5} component='div'>
                        <div>NWPA Tech</div>
                    </Grid>
                    <Grid item lg={7} component='div'>
                        <TopMenu />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Header