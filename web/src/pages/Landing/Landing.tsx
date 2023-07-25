import React from 'react';
import { Title, Subtitle } from '../../components/index';
import { Grid, Box } from '@mui/material';

function Landing() {

  return (
    <Box p={2}>
      <Grid container flexDirection={'column'} justifyContent="center" alignItems="center" spacing={2}>
        {/* <Grid item flexDirection={''} xs={12}>

        </Grid> */}
        <Grid item flexDirection={'row'} xs={12}>
          <Title >SEARCH BOX</Title>
        </Grid>
        <Grid item xs={12} direction={'column'}>
          <Title>Don't know what to search?</Title>
          <Subtitle>Here's an offer you can't refuse</Subtitle>
        </Grid>
      </Grid>
    </Box>
  )

}

export default Landing;