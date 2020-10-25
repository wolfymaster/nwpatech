import Header from "../../components/header";
import SubHeader from "../../components/subheader";
import {Container} from "@material-ui/core";
import Layout from "../../components/layout";
import React from "react";


const Workshop = ({session, ...props}) => {
    return <>
        <Layout>
            <Header />
            <SubHeader bgColor="#454851">Dashboard</SubHeader>
            <Container fixed>
                Browse and register for workshops
            </Container>
        </Layout>
    </>
};

export default Workshop;