import { Grid, Box, Container, Typography } from "@mui/material";
import React from "react";
import HeroImageslider from "./Imageslider";
import { sliderImages } from "./Imagesliderdata";


const Herosection = () => {
  return (
    <React.Fragment>
      <Container sx={{ marginTop: "40px", justifyContent: "space-between" }}>
        <Box sx={{ width: "100%", backgroundColor: "black", height: "2px" }} />

        <Grid container marginTop={"23px"}>
          <Grid item md={3}>
            <p>
              Fashion is a form of self exprestion. It's a way to show the world
              who you are and whst you stand for
            </p>
          </Grid>

          <Grid item md={6} sx={{ textAlign: "center" }}>
            <Typography sx={{
            fontFamily: "RobotoSlab-Black",
            fontSize: {xs:"35px",sm:"27px",},
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
          }}>CHOOSE YOUR FASHION STYLE</Typography>
          </Grid>

          <Grid item md={3} sx={{ textAlign: "right" }}>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </Grid>
        </Grid>

  
    
      </Container>

      
      <HeroImageslider slides={sliderImages}/>
    
       
      
    </React.Fragment>
  );
};

export default Herosection;



