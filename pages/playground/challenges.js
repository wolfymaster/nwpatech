import withAuth from "../../components/withAuth";
import Layout from '../../components/layout';
import Header from "../../components/header";
import SubHeader from "../../components/subheader";
import React from "react";
import {Grid, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root : {
        flexGrow : 1,
        marginTop: '20px',
    },
    card : {
        height: 140,
        width : '100%',
    },
    grid : {
        padding: '16px',
    },
    center: {
        textAlign: 'center',
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    challenge: {
        padding: "30px 25px",
        borderBottom: "1px solid #ddd",
        // boxShadow: "2px 2px 10px #AAA",
        '&:last-child': {
            borderBottom: 'none',
        },
    },
    challengeTitle: {
        fontWeight: 'bold',
        fontSize: '2.0rem',
    },
    challengeDescription: {

    },
    challengeButton: {
        display: 'flex',
        alignSelf: "flex-end",
        justifyContent: 'center',
    },
}));

const Challenges = ({session, ...props}) => {

    const classes = useStyles();

    return <>
       <Layout>
           <Header />
           <SubHeader bgColor="#454851">Challenges</SubHeader>
           <div className={classes.root}>
               <Grid container>
                   <Grid item xs={2} className={`${classes.grid} ${classes.center}`}>
                        <ul className={classes.list}>
                            <li>Challenges</li>
                            <li>Something Else</li>
                            <li>Something Elses</li>
                        </ul>
                   </Grid>
                   <Grid item xs={9} className={`${classes.grid}`}>
                        <Grid container>
                            <Grid item xs={12}>
                                <img src="https://www.placehold.it/1000x400" width="100%" height="400px" />
                            </Grid>
                            <Grid item xs={12} className={`${classes.grid}`}>
                                <Grid container className={classes.challenge}>
                                    <Grid item xs={8}>
                                        <div className={classes.challengeTitle}>Challenge Title</div>
                                        <div className={classes.challengeDescription}>Challenge Description</div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.challengeButton}>
                                        <Button size="large" variant="contained" color="secondary">Solve Challlenge</Button>
                                    </Grid>
                                </Grid>

                                <Grid container className={classes.challenge}>
                                    <Grid item xs={8}>
                                        <div className={classes.challengeTitle}>Challenge Title 1</div>
                                        <div className={classes.challengeDescription}>Challenge Description</div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.challengeButton}>
                                        <Button size="large" variant="contained" color="secondary">Solve Challlenge</Button>
                                    </Grid>
                                </Grid>

                                <Grid container className={classes.challenge}>
                                    <Grid item xs={8}>
                                        <div className={classes.challengeTitle}>Challenge Title 2</div>
                                        <div className={classes.challengeDescription}>Challenge Description</div>
                                    </Grid>
                                    <Grid item xs={4} className={classes.challengeButton}>
                                        <Button size="large" variant="contained" color="secondary">Solve Challlenge</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                   </Grid>
               </Grid>
           </div>
       </Layout>
    </>
};

export default withAuth(Challenges);