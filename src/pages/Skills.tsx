import { Box } from '@mui/material'
import React from 'react'
import PageHeaders from '../components/PageHeaders'
import SkillsContainer from '../container/SkillsContainer'

export default function Skills() {
    return (
        <Box component='section' sx={{ padding: '1px' }}>
            <PageHeaders symbol='/' title='Skills' />
            <SkillsContainer />
        </Box>
    )
}
