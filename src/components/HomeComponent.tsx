import React, { useState } from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import Typewriter from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../constants/paths'
import code from '../assets/images/Illustrations.png'
export default function HomeComponent() {
    const [cursor, setCursor] = useState("")
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

    return (
        <Grid container component='section' rowGap='15px'>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', fontSize: '30px', justifyContent: 'center' }}>
                <Box component='div' color="#FF8303" fontWeight='900' sx={{ fontSize: { md: '45px', xs: '35px' } }} lineHeight='67px'>

                    <Typewriter
                        options={{
                            cursor: cursor
                        }}
                        onInit={(type) => {
                            type.typeString("I'm Samir Yusifov")
                                .start()
                                .callFunction(() => {
                                    setActive(true)
                                })
                        }}
                    />


                </Box>
                <Box component='div' color='#F0E3CA' fontWeight='700' sx={{ marginBottom: '15px' }} lineHeight='40px'>
                    {active && <Typewriter

                        onInit={(type) => {
                            type.typeString("Front End Developer")
                                .start()
                                .callFunction(() => {
                                    setCursor('')
                                })
                        }}

                    />}

                </Box>
                <Typography variant='subtitle2' gutterBottom color='#F0E3CA' sx={{ marginBottom: '20px' }}>
                    Frontend developer looking for ideas and projects for himself and others
                </Typography>
                <Box>
                    <Button onClick={() => navigate(PATH.about)} variant='text' sx={{ border: '1px solid #bd6812', color: 'white', padding: '12px 20px' }}>
                        About Me
                    </Button>
                </Box>

            </Grid>
            <Grid xs={12} md={6} item>
                <img src={code} width='100%' alt="logo" />
            </Grid>
        </Grid>
    )
}
