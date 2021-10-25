import React from 'react'
import {Badge,Paper,Grid,Typography} from '@material-ui/core'
import InfoData from './InfoData'
import { makeStyles, mergeClasses } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    allContent:{
   display:'flex',
   justifyContent:'spaceAround',
   alignItems:'center',
   paddingLeft:'2px'
},
generator:{
    boxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)',
    // webkitBoxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)',
    mozBoxShadow:' 10px 4px 5px -5px rgba(0,0,0,0.24)'
}
}))
const FeaturedInfo = () => {
    const classes =useStyles();
    return (
        <>
      <Grid container justify='flex-start'>
            {
                InfoData.map((currVal) => {
                    const {text,icon,price,cal,content,icons} = currVal
             return(
            <>
        <Grid item lg={3} className={classes.generator}>
        <Typography>{text}</Typography>
        <Typography className={classes.allContent}>
        <Typography style={{fontWeight:'bold',fontSize:'20px'}}>{price}</Typography>
        <Typography>{cal}</Typography>
         <span style={{color:'red'}}>{icon}</span>
         <span style={{color:'green'}}>{icons}</span>
         </Typography>
         <Typography style={{color:'grey'}}>{content}</Typography>

        </Grid>
            </>
             )
                })
            }
             </Grid>
        </>
    )
}

export default FeaturedInfo
