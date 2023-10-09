import { Box, Container, Grid, Typography } from "@mui/material";
//import TextField from "@mui/material/TextField";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#320001",
        marginTop:"80px"
      
      }}
    >
      <Container sx={{}}>
        <Box sx={{ width: "100%", padding:"80px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={4} container>
              <Typography variant="h6" sx={{color:"white"}}>Have Something to talk about with our professionals?</Typography>
            </Grid>
            <Grid xs={2}>
              {" "}
            </Grid>
            
            <Grid xs={6} container>
              <Grid xs={4}>
                <Typography variant="h6" sx={{color:"white"}}>Manu</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="h6" sx={{color:"white"}}>Get Help</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography variant="h6" sx={{color:"white"}}>Support</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
