import React from 'react'
import PageHeaders from '../components/PageHeaders'
import { Box, Grid } from '@mui/material'
import { experiences } from '../data/ProjectData'
import Experience from '../components/Experience'
export default function Expericenses() {
    return (
        <Box content='section'>
            <PageHeaders title='Experience' symbol='/' />
            <Grid container>
                {experiences.map((data) => (
                    <Grid key={data.time} item xs={12} md={6}>
                        <Experience data={data} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
