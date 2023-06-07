import React from 'react'
import Box from '@mui/material/Box';
import Logo from './Logo';
import NavbarList from './NavbarList';
import MobileNav from './MobileNav';
export default function Navbar() {
    return (
        <Box component='nav' sx={{ display: 'flex', justifyContent: 'space-between', padding: "10px", background: 'radial-gradient(100% 100% at 50% 100%, #1F1E1B 21.52%, #1B1A17 100%);', position: "relative" }}>
            <Logo />
            <NavbarList />
            <MobileNav />
        </Box>
    )
}
