import { Box } from '@mui/material'
// import React, { useEffect } from 'react'
import PageHeaders from '../components/PageHeaders'
import { projects } from '../data/ProjectData'
import Project from '../container/Project'
// import axios from 'axios'

export default function Projects() {
    // useEffect(() => {
    //     const token = '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';
    //     const headers = {
    //         Authorization: `Bearer ${token}`
    //     };
    //     axios.get('https://api.github.com/user/repos', { headers })
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);
    return (
        <Box component='section' sx={{ display: 'flex', flexDirection: "column", rowGap: "30px", padding: "20px 5px" }}>
            <PageHeaders title='Project' symbol='/' text='List of my projects' />
            <Project project={projects} />
        </Box>
    )
}
