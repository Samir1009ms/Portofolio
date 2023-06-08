import { Box, Grid } from '@mui/material'
import React from 'react'
import SkillsItem from '../components/SkillsItem'
import { skills } from '../data/ProjectData'

export default function SkillsContainer() {
    return (
        <Box component='section'>
            <Grid sx={{ marginBottom: "30px" }} container spacing={2}>
                {skills.map((data) => (
                    <SkillsItem data={data}></SkillsItem>
                ))}
            </Grid>
        </Box>
    )
}
