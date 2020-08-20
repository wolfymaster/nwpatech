import React, {useEffect} from "react";
import {useSession, getSession} from "next-auth/client";
import Router from 'next/router';

const withAuth = (Component) => {
    return () => {
        const [ session, loading ] = useSession();

        useEffect(() => {
            if(!loading && !session) {
                Router.push('/api/auth/signin/discord')
            }
        }, [session, loading]);

        return session ? <Component session={session}/> : null;
  }
};


/*
TODO: I DON'T THINK THE BELOW IS WORKING FOR SSR.
 */

withAuth.getInitialProps = async ({res}) => {
    getSession.then( (session) => {
        console.log(session);

        if (res?.writeHead) {
            res.writeHead(301, { Location: '/api/auth/signin/discord' });
            res.end()
        }
        return {}
    });
};

export default withAuth;