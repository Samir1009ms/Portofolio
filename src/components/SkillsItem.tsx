import { Box, Grid } from '@mui/material'
import React from 'react'
import { ISkills } from '../interface/Types'

export default function SkillsItem({ data }: { data: ISkills }) {
    return (
        <Grid data-aos="fade-right" item xs={6} sm={4} md={3}>
            <Box sx={{ cursor: "pointer" }}>
                <Box sx={{ border: "1px solid white", padding: "16px", color: "#ff8303", wordBreak: 'break-word' }}>{data.header}</Box>
                <Box sx={{ border: "1px solid white", padding: "16px", color: "#F0E3CA", wordBreak: 'break-word' }}>{data.text}</Box>
            </Box>
        </Grid>
    )
}
