import React from 'react'
import Box from '@mui/material/Box';
import logo from '../assets/images/indir.png'
export default function Logo() {
    return (
        <Box component="span" sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', columnGap: '5px', cursor: 'pointer', color: '#fff', fontSize: '20px' }}>
            <img style={{ width: '55px', height: '50px' }} src={logo} alt="" />Samir
        </Box>
    )
}
