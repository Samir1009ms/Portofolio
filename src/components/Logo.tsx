import React from 'react'
import Box from '@mui/material/Box';
import logo from '../assets/images/indir.png'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Logo() {
    return (
        <Box component="span" sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', columnGap: '5px', cursor: 'pointer' }}>
            <Button
                key={'/'}
                to={'/'}
                component={Link}
                variant='text'
                sx={{ color: '#fff', fontSize: '18px' }}
            >
                <img style={{ width: '55px', height: '50px' }} src={logo} alt="" />Samir
            </Button>
        </Box>
    )
}
