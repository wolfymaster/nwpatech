import { Container, Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#08415c',
        padding: '50px',
        color: '#FFF',
    }
}));

function Footer(props) {

    const classes = useStyles();

    return (
        <Container component='div' maxWidth={false} disableGutters={true}>
            <Grid className={classes.root} spacing={2} component='div'>
                <Grid item lg={5} component='div'>
                    <div>About</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>For educators</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer