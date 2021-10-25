import React,{useState} from 'react'
import {Badge,IconButton,Grid,Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import sidebarData from './SidebarData'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    allLinks:{
        textDecoration:'none',
        display:'flex',
        padding:'5px',
        borderRadius:'10px',
        color:'#000',
        '&:hover':{
            color: 'grey',
            }
    },
    allIcons:{
        marginRight:'5px',
         fontSize:'20px !important',
    }
}))
const Sidebar = ({children}) => {
    const classes = useStyles()
    return (
        <>
       
          <Grid container justify='flex-start'>
          <Typography style={{backgroundColor:'white', flex:'1'}}>
          <Grid item lg={5}>
            <Typography style={{marginTop:'1rem',color:'#555'}}>  
          <Typography variant='h5' style={{color:'grey'}}>Dashboard</Typography>
          {
              sidebarData.map((currValue) => {
                  const {icon,path,title,content} = currValue
                  return(
<ul>
    <li style={{listStyle:'none',textDecoration:'none'}} active>
        
    <span variant='h5' style={{color:'white',backgroundColor:'grey',width:'100%'}}>{content}</span>
        <Link to={path} className={classes.allLinks}>
            <span className={classes.allIcons}>{icon}</span>
            <span>{title}</span>
        </Link>
    </li>
</ul>
                  )
              })
          }
          </Typography>
          </Grid>
          </Typography>
          <Grid item lg={9}>
          {children}
          </Grid>
          </Grid>
        </>
    )
}

export default Sidebar
