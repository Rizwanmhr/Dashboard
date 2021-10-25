import React from 'react'
import {Badge,Paper,Grid,Typography} from '@material-ui/core'
import { makeStyles, mergeClasses } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
generator:{
    marginTop:'2rem',
    boxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)',
    // webkitBoxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)',
    mozBoxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)'
}
}))
const Chart = () => {
    const classes=useStyles()
    return (
        <>
            <Grid container justify='flex-start'>
            <Grid item lg={9} className={classes.generator}>
            <h1>This is Chart</h1>
            </Grid>
            </Grid>
        </>
    )
}

export default Chart
