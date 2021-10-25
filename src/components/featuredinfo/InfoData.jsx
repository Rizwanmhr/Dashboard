import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const InfoData = [
    {
        text:'Revanue',
        icon:<ArrowDownwardIcon />,
        price:'$24,15',
        cal:'-11.4',
        content:'Compared to last month'
    },
    {
        text:'Sales',
        icon:<PlayForWorkIcon />,
        price:'$44,15',
        cal:'-1.4',
        content:'Compared to last month'
    },
    {
        text:'Cost',
        icons:<ArrowUpwardIcon />,
        price:'$22,25',
        cal:'+2.4',
        content:'Compared to last month'
    },
];
export default InfoData;