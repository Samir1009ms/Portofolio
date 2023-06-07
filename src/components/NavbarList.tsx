import React from 'react'
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { ROUTES } from '../routes/routes';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarList({ mobile = false }: { mobile?: boolean }) {
  const location = useLocation()
  return (
    <List sx={{ display: { md: "flex", xs: mobile ? "block" : "none" }, justifyContent: "space-between", gap: '10px', padding: 0 }}>
      {
        ROUTES.map((route, index) => (
          <ListItem key={index}>
            <ListItemButton component={Link} to={route.path}>
              <Box sx={{ color: route.path === location.pathname ? "#FF8303" : "#fff", textTransform: "capitalize", fontSize: mobile ? '30px' : '16px' }} component='span'>{route.title}</Box>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}
