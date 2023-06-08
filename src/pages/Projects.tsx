import { Box } from '@mui/material'
import React from 'react'
import PageHeaders from '../components/PageHeaders'
import { projects } from '../data/ProjectData'
import Project from '../container/Project'

export default function Projects() {
    return (
        <Box component='section' sx={{ display: 'flex', flexDirection: "column", rowGap: "30px", padding: "20px 5px" }}>
            <PageHeaders title='Project' symbol='/' text='List of my projects' />
            <Project project={projects} />
        </Box>
    )
}
