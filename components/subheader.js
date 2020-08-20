import {makeStyles} from "@material-ui/core/styles";
import {Box, Container} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    subHeader: {
        background: (props) => props.bgColor || '#454851',
        color: '#FFF',
        padding: '20px 10px',
        marginBottom: '50px',
    }
}));

function SubHeader(props) {

    const classes = useStyles(props);

    return (
        <Box className={classes.subHeader}>
            <Container fixed>
                <div>{props.children}</div>
            </Container>
        </Box>
    );
}

export default SubHeader;