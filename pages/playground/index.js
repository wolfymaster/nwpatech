import React, {useEffect} from 'react';
import Layout from '../../components/layout';
import Header from "../../components/header";
import Footer from '../../components/footer';
import {Grid, Container, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSession, signout, signin} from "next-auth/client";

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
    join : {
        color: '#454851',
        fontSize: '2.3rem',
        fontWeight: 'bold'
    },
    elite: {
        color: '#454851',
        fontSize: '3.0rem',
        fontWeight: 'bold',
        lineHeight: '80%',
        marginBottom: '300px',
    },
    center: {
        textAlign: 'center',
    },
    box: {
        padding: '50px',
        background: 'lightblue',
        fontSize: '2.0rem',
        height: '250px',
    }
}));

const index = (props) => {

    const classes = useStyles();
    const [ session, loading ] = useSession();

    return <>
        <Layout>
            <Header/>
            <div className={classes.root}>
                <Container fixed>
                    <Grid container>
                        <Grid item xs={5} className={`${classes.grid} ${classes.center}`}>
                            <div className={classes.join}>Join a community of</div>
                            <div className={classes.elite}>Elite Programmers</div>
                        </Grid>
                        <Grid item xs={5} className={`${classes.grid} ${classes.center}`}>
                            <div>
                                { !session && <Button variant="contained" color="secondary" onClick={() => { signin('discord') }} >
                                    Login
                                </Button> }
                                { session && <div>
                                    Logged in as {session.user.email}
                                    <Button variant="contained" color="secondary" onClick={() => { signout() }} >
                                        Logout
                                    </Button>
                                </div>}
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} className={`${classes.box}`}>
                            <Grid item xs={5}>
                                <div>
                                    Level up your skills with hands-on real-world projects
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
        <Footer />
    </>


    // return <p>
    //     {!session && <>
    //         Not signed in <br/>
    //         <a href="/api/auth/signin">Sign in</a>
    //     </>}
    //     {session && <>
    //         Signed in as {session.user.email} <br/>
    //         <a href="/api/auth/signout">Sign out</a>
    //     </>}
    // </p>
};

export default index;