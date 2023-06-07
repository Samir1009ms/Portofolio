import { Box, Grid } from '@mui/material'
import React from 'react'
import PageHeaders from '../components/PageHeaders'
import Experience from '../components/Experience'
import { educations } from '../data/ProjectData'

export default function Education() {
    return (
        <Box content='section'>
            <PageHeaders title='Educations' symbol='/' />
            <Grid container spacing={4} flexDirection='column'>
                {educations.map((data) => (
                    <Grid key={data.time} item xs={12} md={6}>
                        <Experience data={data} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
