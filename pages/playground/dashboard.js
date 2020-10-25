import withAuth from "../../components/withAuth";
import Layout from '../../components/layout';
import Header from "../../components/header";
import {Grid, Container, Box, Card, CardContent, CardActions, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import SubHeader from "../../components/subheader";

const useStyles = makeStyles(() => ({
    root : {
        flexGrow : 1,
        marginTop: '20px',
    },
    subHeader: {
        background: '#454851',
        color: '#FFF',
        padding: '20px 10px',
        marginBottom: '50px'
    },
    card: {
        padding: '20px 10px',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    }
}));

const Dashboard = ({session, ...props}) => {

    const classes = useStyles();

    return <>
        <Layout>
            <Header />
            <SubHeader bgColor="#454851">Dashboard</SubHeader>
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Problem Solvings (Basic)
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" href="/playground/challenges">Get Certified</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Resource Library
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" href="/playground/library">Browse Resources</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Workshops
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" href="/playground/workshops">Browse Workshops</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Who's Hiring
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined">Browse Jobs</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                FAQ / Support
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined">Browse FAQ</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Manage Account
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined">Get Certified</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent className={classes.title}>
                                Find a mentor
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined">Browse Mentors</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    </>;
};

export default withAuth(Dashboard);