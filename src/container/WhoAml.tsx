import React from 'react'
import { Box, Typography } from '@mui/material'
import PageHeaders from '../components/PageHeaders'
export default function WhoAml() {
    return (
        <Box component='section' color='#F0E3CA'>
            <PageHeaders title='About Me' text='Who am i? ' symbol='/'></PageHeaders>
            <Typography gutterBottom variant='subtitle2'>
                i'm Samir Yusifov. I have completed Front-end Bootcamp in the Coders Azerbaijan . I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </Typography>
        </Box>
    )
}
