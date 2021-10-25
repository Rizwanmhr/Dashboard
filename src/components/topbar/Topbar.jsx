import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import {Badge,IconButton,Grid,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    root:{
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'darkblue',
        cursor: 'pointer',
    },
    billimage:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        cursor:'pointer'
    }
}))
const Topbar = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <nav style={{backgroundColor:'white',position:'sticky',top:'0',zIndex:'999'}}>
    <Grid container justify='space-between'>
    <Grid item lg={3}>
    <Typography className={classes.root}>Reactjs Dashboard</Typography>
    </Grid>
    <Grid item lg={2}>
    <IconButton>
        <Badge badgeContent={4} color='primary'>
        <NotificationsNoneIcon />
        </Badge>
    </IconButton>
    <IconButton>
        <Badge badgeContent={4} color='primary'>
        <LanguageIcon />
        </Badge>
    </IconButton>
    <IconButton>
        <Badge badgeContent={4} color='primary'>
        <NotificationsNoneIcon />
        </Badge>
    </IconButton>
    <img src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg" alt="bill" className={classes.billimage} />
    </Grid>
    </Grid>
    </nav>
        </React.Fragment>
    )
}

export default Topbar
