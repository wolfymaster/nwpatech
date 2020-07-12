import Layout from "../../components/layout";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

/*
function sum(a,b) {
   return a+b;
}

function times(a,b) {
  return a*b;
}

obj = {
 sum: (a,b) => { },
 times: (a,b) => { }
}

obj.sum(1,3) // 4
obj.times(1,3) // 3
*/

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
    },
    description: {
        backgroundColor: 'lightblue',
        padding: '15px'
    },
    workspace: {
        backgroundColor: 'lightgreen',
        minHeight: '600px',
        padding: '15px'
    },
    output: {
        backgroundColor: 'pink',
    },
    textarea: {
        width: '80%',
        height: '80%',
        background: 'transparent'
    }
}));

export default function Playground() {

    const classes = useStyles();


    const runTests = (rawCode) => {
        fetch('http://localhost:3000/api/parse', {
            method: 'POST',
            body: JSON.stringify({
                payload: rawCode
            })
        })
            .then( (res) => res.json())
            .then( json => {
               console.log(json);
               document.querySelector('#output').innerHTML = "<div>Test One: "+ json.TestOne + "</div>"+"<div>Test Two: "+ json.TestTwo + "</div>";
            });

    };

    return (
        <div>
            <Layout>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={4} className={classes.description} id="description">
                            <div>
                                Description of Challenge
                            </div>
                            <div>
                                Write a program called <pre>Sum</pre> that adds two numbers together and returns the result
                            </div>
                        </Grid>
                        <Grid item xs={8} className={classes.workspace} id="workspace">
                            <div>
                                Coding workspace
                            </div>
                            <textarea className={classes.textarea}></textarea>
                            <button onClick={() => { runTests(document.querySelector('#workspace textarea').value); }}>Run!</button>
                        </Grid>

                        <Grid item xs={12} className={classes.output} id="output">
                            <div>
                                Test / Console Output
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </div>
    )
}