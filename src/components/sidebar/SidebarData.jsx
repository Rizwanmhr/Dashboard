import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const sidebarData = [
    { 
        title:"Home",
        path:'/',
        icon:<HomeIcon />,
        cName:'/nav-text'
    },
    {
        title:'Analytics',
        path:'/analytics',
        icon:<ShowChartIcon />,
        cName:'/nav-text'
    },
    
    {
        title:'Sales',
        path:'/sales',
        icon:<TrendingDownIcon />,
        cName:'/nav-text'
    },
    {
        content:'Quick Menus',
        title:'Uers',
        path:'/users',
        icon:<PeopleOutlineIcon />,
        cName:'/nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<AssignmentIndIcon />,
        cName:'/nav-text'
    },
    {
        title:'Transactions',
        path:'/transactions',
        icon:<AccountBalanceWalletIcon />,
        cName:'/nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<AssessmentIcon />,
        cName:'/nav-text'
    },
    {
        content:'Notifications',
        title:'Mail',
        path:'/mail',
        icon:<MailIcon />,
        cName:'/nav-text'
    },
    {
        title:'Feedback',
        path:'/feedback',
        icon:<FeedbackIcon />,
        cName:'/nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<MessageIcon />,
        cName:'/nav-text'
    },
    {
        content:'Staff',
        title:'Manage',
        path:'/manage',
        icon:<EmojiPeopleIcon />,
        cName:'/nav-text'
    },
    {
        title:'Analytics',
        path:'/analytics',
        icon:<ShowChartIcon />,
        cName:'/nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<AssessmentIcon />,
        cName:'/nav-text'
    },
];
export default sidebarData