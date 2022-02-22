import React from 'react'
import { Stack, Button, Box, Typography, Container } from '@mui/material'
import { Grid } from "@mui/material";
import selectionIcon from '../assets/img/selection.svg'

function  Home() {
    return (
        <Grid container>
            <Grid item xs={7}>
              <Box height="100vh" display="flex" flexDirection="column">
                <Box flex={1} overflow="auto">
                  <Container>
                    <Stack height="100%" py={4} justifyContent='center' direction='column' >
                      <Stack direction='row' alignItems='center' justifyContent='center'>
                          <img src={selectionIcon} alt="selectionIcon" height="380" width="380" />
                      </Stack>
                      <Typography textAlign={'center'} mt={-2} color={"#575757"} fontSize={20} fontWeight='500' >Select an API endpoint to try</Typography>
                    </Stack>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box height="100vh" display="flex" flexDirection="column" color="white">
                  <Box flex={1} /* overflow="auto" */>
                      <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                          <Stack justifyContent='left'  direction='row'>
                              <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                          </Stack>
                      </Stack>
                      <Stack sx={{backgroundColor:"#f8fcff", height:'100vh' }}>
                          <Stack p={3} color="#20336d">
                              <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                              <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                              Select an API endpoint to try
                              </Typography>
                          </Stack>
                      </Stack>
                  </Box>
              </Box>
            </Grid>
        </Grid>
    )
}

export default Home