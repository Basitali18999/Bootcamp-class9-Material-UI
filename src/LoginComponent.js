import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Link, } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        
        height: '600px',
        display: 'flex',
        backgroundColor: '#f0f2f5',
        flexWrap: 'wrap',
        
        

        
    },
    paper: {
        
        height: '430px',
        width: '400px',
        
        marginLeft: '60px',
        borderRadius: '10px',
        fontSize: '20px',
        marginTop: '40px',
        textAlign: 'center',
        letterSpacing: '-1px',
    },
    textInput: {

        width: '350px',
    },
    added: {
        color: 'RGB(66,103,250)',
        paddingTop: '120px',
        paddingRight: '25px',
        fontSize: '70px',
        textAlign: 'center',
        marginTop: '50px',
        lineHeight: '5px',
        letterSpacing: '-4px',

    },
    add: {
        width: '500px',
        paddingLeft: '200px',        
        fontFamily: 'sans-serif',
        fontSize: '27px',
        fontWeight: 'lighter',
        

    },
    button: {

        fontSize: '20px',
        height: '45px',
        width: '350px',
        backgroundColor: 'RGB(66,103,250)',
        color: 'white',
        textTransform: 'inherit',

    },
    button1: {
        textTransform: 'inherit',
        height: '47px',
        fontSize: '17px',
        color: 'white',
        backgroundColor: 'Green',
        '&:hover': {
            backgroundColor: 'darkgreen',
        }
    }

}));

function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h1 className={classes.added} >facebook</h1>
                <h2 className={classes.add}>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <Paper elevation={5} className={classes.paper} >
                <h1>Login</h1>

                <form className={classes.textField} noValidate autoComplete="off">
                    <TextField label="Enter Email" className={classes.textInput} />
                    <br />
                    <br />
                    <TextField label="Enter Password" className={classes.textInput} />
                </form>
                <br />
                <Button variant="contained" color="primary" className={classes.button}>
                    Log In
                </Button>
                <br/>
                <Link
                    classN
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Forgotten Password?
                </Link>
                <br/>
                <br/>
                
                <Button variant="contained"  className={classes.button1}>
                    Create New Account
                </Button>


            </Paper>


        </div>
    );
}

export default SimplePaper;
