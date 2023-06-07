import { Box, Grid, Typography, Chip } from '@mui/material'
import { IExperience } from '../interface/Types'


export default function Education({ data }: { data: IExperience }) {
    return (
        <Grid container spacing={3} data-aos='flip-left'>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography color="#F0E3CA">  {data.time}  </Typography>
            </Grid>
            <Grid item xs={8} color="#F0E3CA">
                <Typography variant='h5' color="#FFF" >{data.header}</Typography>
                <Typography gutterBottom variant='subtitle2'>
                    {data.contents}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }} color='#fff'>
                    {data.skils && data.skils?.map((e) => (
                        <Chip sx={{ backgroundColor: "#ff8303" }} key={e} label={e} color='default'  ></Chip>

                    ))}
                </Box>
            </Grid>
        </Grid>
    )
}
