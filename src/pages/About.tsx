import { Box } from '@mui/material'
import WhoAml from '../container/WhoAml'
import Expericenses from '../container/Expericenses'
import Education from '../container/Education'


export default function About() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "30px", padding: "40px 0 40px 0" }}>
            <WhoAml />
            <Expericenses />
            <Education />
        </ Box>
    )
}
