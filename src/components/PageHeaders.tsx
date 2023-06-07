import React from 'react'
import { Box, Typography } from '@mui/material'
export default function PageHeaders({ title, text, symbol }: { title: string, text?: string, symbol: string }) {
    return (
        <Box component='section' data-aos="fade-down-right">
            <Typography gutterBottom variant='h4' color='#ff8303' >
                {symbol}
                <Box component='span' >{title}</Box>
            </Typography>
            <Typography variant='subtitle2' color='#F0E3CA'>
                {text}
            </Typography>
        </Box>
    )
}
