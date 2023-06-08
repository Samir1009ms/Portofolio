import { Box, Grid } from '@mui/material'
import React from 'react'
import { IProject } from '../interface/Types'
import ProjectItem from '../components/ProjectItem'

export default function Project({ project }: { project: IProject[] }) {
    return (
        <Box >
            <Grid container spacing={2} >
                {
                    project.map((e) => (
                        <Grid key={e.title} item xs={12} sm={6} md={4}>
                            <ProjectItem project={e} />
                        </Grid>

                    ))
                }
            </Grid>

        </Box >
    )
}
