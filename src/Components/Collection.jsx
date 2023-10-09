import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  useMediaQuery,
  Card,
  CardMedia,

} from "@mui/material";




const Collection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <React.Fragment>
      <Container sx={{ marginTop: "20px" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "RobotoSlab-Black",
              fontSize: { xs: "25px", sm: "35px" },
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Fashion Collection That You Will Love
          </Typography>

          <Typography
            variant={isSmallScreen ? "body1" : "h5"}
            sx={{
              marginTop: { xs: "0%", sm: "2%" },
              fontFamily: "Roboto Serif",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              marginX: { md: "15%", sm: "10%", xs: "0%" },
            }}
          >
            The Fashion Service offers inovative and unique styles that go
            beyond convational fashion trends
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
          <Grid container spacing={2} sx={{marginLeft:"25px"}}>
            <Grid item xs={6} md={1.5}>
              <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 380, borderRadius: "10px", objectFit:'cover' }}
                image="/Images/Collection/image1.jpg"
                />
                </Card>
            </Grid>
            <Grid
              xs={6}
              md={2}
              container
              direction="column"
              spacing={2}
              marginLeft="2px"
            >
              <Grid item md={6}>
              <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 200, borderRadius: "10px",objectFit:'cover' }}
                image="/Images/Collection/image2.jpg"
                />

                
                </Card>
              </Grid>
              <Grid item md={6}>
              <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 200, borderRadius: "10px" ,objectFit:'cover' }}
                image="/Images/Collection/image3.jpg"
                />

                
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={6} md={4}>
            <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 380, borderRadius: "10px", objectFit:'cover' }}
                image="/Images/Collection/image4.jpg"
                />

                
                </Card>
            </Grid>
            <Grid
              xs={6}
              md={2}
              container
              direction="column"
              spacing={2}
              marginLeft="2px"
            >
              <Grid item md={6}>
              <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 200, borderRadius: "10px", objectFit:'cover' }}
                image="/Images/Collection/image5.jpg"
                />

                
                </Card>
              </Grid>
              <Grid item md={6}>
              <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 200, borderRadius: "10px", objectFit:'cover' }}
                image="/Images/Collection/image6.jpg"
                />

                
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={6} md={1.5}>
            <Card sx={{borderRadius:"10px"}}>
                <CardMedia
                sx={{ height: 380, borderRadius: "10px", objectFit:'cover' }}
                image="/Images/Collection/image7.jpg"
                />

                
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Collection;
