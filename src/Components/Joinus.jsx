import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  Grid,
  Card,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import React from "react";
// import image1 from "../Images/JoinUs/image1.jpg";
// import image2 from "../Images/JoinUs/image2.jpg";
// import image3 from "../Images/JoinUs/image3.jpg";
import { deepOrange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  justifyContent: { md: "center", xs: "left" },

  "&:hover": {
    backgroundColor: deepOrange[700],
  },
}));

const Joinus = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#FFF4F2",
          marginTop: { xs: "5%", sm: "6%" },
          padding: "80px",
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                fontFamily: "RobotoSlab-Black",
                fontSize: { xs: "35px", sm: "45px" },
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Join Us
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, marginTop: "60px" }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Card sx={{ borderRadius: "15px" }}>
                  <CardMedia
                    image="/Images/JoinUs/image1.jpg"
                    sx={{ height: 200, borderRadius: "15px" }}
                  />
                </Card>
              </Grid>
              <Grid item xs={9} container spacing={1} direction="column">
                <Grid item xs={3}>
                  <Typography
                    variant="h4"
                    fontFamily="times new roman, san serif"
                    fontWeight="600"
                  >
                    Sales Consultens
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda ratione eaque iure repellendus nostrum saepe, itaque
                  nihil sint, molestias accusantium minima reiciendis ipsa
                  architecto recusandae obcaecati optio impedit laborum
                  deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Quasi odio, excepturi necessitatibus voluptatum
                  consequatur tempora, porro quidem iusto, neque dolorum ex
                  fugit delectus modi eius? Repellendus nihil facere quibusdam
                  laboriosam. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Atque dolore ipsum consectetur qui quasi
                  deserunt rerum ea quam, voluptatibus consequatur repellendus
                  quis
                </Grid>
                <Grid item xs={3} container>
                  <Grid item md={3} marginTop="10px">
                    <ColorButton fullWidth>Read more</ColorButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Card sx={{ borderRadius: "15px" }}>
                  <CardMedia
                    image="/Images/JoinUs/image2.jpg"
                    sx={{ height: 200, borderRadius: "15px" }}
                  />
                </Card>
              </Grid>
              <Grid item xs={9} container spacing={1} direction="column">
                <Grid item xs={3}>
                  <Typography
                    variant="h4"
                    fontFamily="times new roman, san serif"
                    fontWeight="600"
                  >
                    Account Executive
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda ratione eaque iure repellendus nostrum saepe, itaque
                  nihil sint, molestias accusantium minima reiciendis ipsa
                  architecto recusandae obcaecati optio impedit laborum
                  deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Quasi odio, excepturi necessitatibus voluptatum
                  consequatur tempora, porro quidem iusto, neque dolorum ex
                  fugit delectus modi eius? Repellendus nihil facere quibusdam
                  laboriosam. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Atque dolore ipsum consectetur qui quasi
                  deserunt rerum ea quam, voluptatibus consequatur repellendus
                  quis
                </Grid>
                <Grid item xs={3} container>
                  <Grid item md={3} marginTop="10px">
                    <ColorButton fullWidth>Read more</ColorButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Card sx={{ borderRadius: "15px" }}>
                  <CardMedia
                    image="/Images/JoinUs/image3.jpg"
                    sx={{ height: 200, borderRadius: "15px" }}
                  />
                </Card>
              </Grid>
              <Grid item xs={9} container spacing={1} direction="column">
                <Grid item xs={3}>
                  <Typography
                    variant="h4"
                    fontFamily="times new roman, san serif"
                    fontWeight="600"
                  >
                    Sales Representative
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda ratione eaque iure repellendus nostrum saepe, itaque
                  nihil sint, molestias accusantium minima reiciendis ipsa
                  architecto recusandae obcaecati optio impedit laborum
                  deserunt? Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Quasi odio, excepturi necessitatibus voluptatum
                  consequatur tempora, porro quidem iusto, neque dolorum ex
                  fugit delectus modi eius? Repellendus nihil facere quibusdam
                  laboriosam. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Atque dolore ipsum consectetur qui quasi
                  deserunt rerum ea quam, voluptatibus consequatur repellendus
                  quis
                </Grid>
                <Grid item xs={3} container>
                  <Grid item md={3} marginTop="10px">
                    <ColorButton fullWidth>Read More</ColorButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Joinus;
