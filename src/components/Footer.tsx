import React from 'react'
import { Box, Stack, IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from "react-router-dom"

import Logo from './Logo'
import { githubLink, linkedinLink } from '../constants/urls';
export default function Footer() {
    return (
        <Box component='footer' sx={{ display: "flex", flexWrap: "wrap", color: '#F0E3CA', justifyContent: "space-between", rowGap: '38px', padding: '40px 0', borderTop: '1px solid #ff8303' }}>
            <Box >
                <Stack direction='row' gap='10px' sx={{ alignItems: "center" }}>
                    <Logo />
                    <Box component='span' >
                        yusifov.dev@gmail.com
                    </Box>
                </Stack>
                <br />
                <Box component='span' >
                    Front End Developer
                </Box>
            </Box>
            <Stack alignContent="start" textAlign='center'>
                <Box component='span' sx={{ fontSize: '20px' }} >Sosial Media</Box>
                <Box component='span' >
                    <IconButton component={Link} to={githubLink} target='_blank'><GitHub sx={{ color: '#fff' }} /></IconButton>
                    <IconButton component={Link} to={linkedinLink} target='_blank'><LinkedInIcon sx={{ color: 'rgb(25, 118, 210)' }} /></IconButton>
                </Box>
            </Stack>
            <Box component='span' sx={{ width: '100%', textAlign: 'center', }} >
                © Copyright {new Date().getFullYear()}. Made by Samir
            </Box>
        </Box>
    )
}
