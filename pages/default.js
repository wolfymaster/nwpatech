import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import Layout from "../components/layout";
import Header from "../components/header";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
    },
    card: {
        height: 140,
        width: '100%',
    },
    grid: {
        padding: '16px',
    }
}));

export default function Default() {

    const classes = useStyles();

    return (
        <div>
            <Layout>
                <Header />
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12} className={classes.grid}>
                            <Grid container justify="center" spacing={4} className={classes.grid}>
                                <Grid key={1} item xs={2}>
                                    <Card className={classes.card} variant="outlined">
                                        <CardContent>
                                            Popular tags
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid key={2} item xs={4}>
                                    <Card className={classes.card} variant="outlined">
                                        <CardContent>
                                            News
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid key={3} item xs={2}>
                                    <Card className={classes.card} variant="outlined">
                                        <CardContent>
                                            Popular discussions
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </div>
    )
}