import { Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'
import { IProject } from '../interface/Types'
import { Link } from 'react-router-dom'

export default function ProjectItem({ project }: { project: IProject }) {
    return (
        <Box data-aos="zoom-in-right" component='div' sx={{ cursor: "pointer", margin: 0 }}>
            {
                project.image &&
                <Box sx={{ border: '1px solid #ff8303' }}>
                    <img src={project?.image} alt={project.title} style={{ width: '100%' }} />
                </Box>
            }
            <Box sx={{ border: "1px solid #ff8303", padding: "6px 10px", color: "#F0E3CA" }}> {project.header}</Box>
            <Box sx={{ border: "1px solid #ff8303", padding: "16px" }}>
                <Typography variant='h5' gutterBottom color='#F0E3CA'>
                    {project.title}
                    {project.status && <Chip label={project.status} sx={{ background: "#ff8303", marginLeft: '8px' }} color='success'></Chip>}
                </Typography>
                <Typography gutterBottom variant='subtitle2' color="#F0E3CA">{project.contents}</Typography>
                <Box sx={{ display: "flex", gap: "10px", marginBottom: "5px", flexWrap: "wrap" }}>
                    {project.buttons.map((e) => (
                        <Button
                            key={e.link}
                            disabled={e.disabled}
                            to={e.link}
                            component={Link}
                            target='_blank'
                            variant='text'
                            sx={{ border: `1px solid ${e.status ? "#ff8303" : "grey"} `, color: "white", padding: "6px 16px" }}
                        >
                            {e.name}
                        </Button>
                    ))}
                </Box>
            </Box>

        </Box>
    )
}
