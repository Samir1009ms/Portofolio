import React from 'react'
import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import NavbarList from './NavbarList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { githubLink, linkedinLink } from '../constants/urls';
export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])
    return (
        <>
            <IconButton sx={{ display: { sx: "flex", md: 'none', } }} onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon sx={{ color: "white" }}></MenuIcon>
            </IconButton>
            <Box sx={{ width: '100%', height: isOpen ? "100vh" : '0', position: 'absolute', background: 'radial-gradient(100% 100% at 50% 100%, #1F1E1B 21.52%, #1B1A17 100%)', top: "100%", left: "0", zIndex: 2, transition: "0.35s ease-in-out", overflow: 'hidden', display: 'flex', flexDirection: 'column', rowGap: '25px' }}>
                <Box>
                    <NavbarList mobile={true} />
                </Box>
                <Box component='div' sx={{ width: '100%', textAlign: 'center' }}>
                    <IconButton component={Link} to={githubLink} target='_blank'><GitHubIcon sx={{ fontSize: "50px", color: '#fff' }} /></IconButton>
                    <IconButton component={Link} to={linkedinLink} target='_blank'><LinkedInIcon sx={{ fontSize: "50px", color: 'rgb(25, 118, 210)' }} /></IconButton>
                </Box>
            </Box>
        </>
    )
}
