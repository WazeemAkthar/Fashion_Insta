import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Container, Grid, Link, Box, useMediaQuery } from "@mui/material";

export default function MediaCard() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          justifyContent: "center",
          marginX: { xs: "5%", sm: "5%" },
          marginTop: { xs: "5%", sm: "10%" },
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                fontFamily: "RobotoSlab-Black",
                fontSize: { xs: "35px", sm: "45px" },
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Top Values For You
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
          <Box>
            <Grid
              container
              sx={{ justifyContent: "space-between", marginTop: "8px" }}
            >
              <Grid item>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: { sm: 400 },
                    textAlign: "center",
                    backgroundColor: "#FEF6F3",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <CardMedia
                      sx={{ height: 200, borderRadius: "10px" }}
                      image="/Images/Topvalue/image1.jpg"
                    />

                    <Typography variant="h5"  gutterBottom sx={{marginTop:'15px', fontFamily:'Times new roman', fontWeight:'30px'}}>
                      Fashion Event Management
                    </Typography>
                    <Box sx={{ textAlign: "center", display: "block" }}>
                      <Typography variant="body2" sx={{fontFamily:'times new roman'}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. deserunt, rem Nec...
                      </Typography>
                    </Box>
                    <CardActions sx={{marginTop:"35px", alignItems:'center', justifyContent:'center' }}>
                      <Link
                        underline="hover"
                        sx={{
                          color: "#d87309",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        Learn more
                      </Link>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: { sm: 400 },
                    textAlign: "center",
                    backgroundColor: "#FEF6F3",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <CardMedia
                      sx={{ height: 200, borderRadius: "10px" }}
                      image="/Images/Topvalue/image2.jpg"
                    />

                    <Typography variant="h5"  gutterBottom sx={{marginTop:'15px', fontFamily:'Times new roman', fontWeight:'30px'}}>
                      Pertional Styling
                    </Typography>
                    <Box sx={{ textAlign: "center", display: "block" }}>
                      <Typography variant="body2" sx={{fontFamily:'times new roman'}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. deserunt, rem Nec...
                      </Typography>
                    </Box>
                    <CardActions sx={{marginTop:"35px", alignItems:'center', justifyContent:'center' }}>
                      <Link
                        underline="hover"
                        sx={{
                          color: "#d87309",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        Learn more
                      </Link>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: { sm: 400 },
                    textAlign: "center",
                    backgroundColor: "#FEF6F3",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <CardMedia
                      sx={{ height: 200, borderRadius: "10px" }}
                      image="/Images/Topvalue/image3.jpg"
                    />

                    <Typography variant="h5"  gutterBottom sx={{marginTop:'15px', fontFamily:'Times new roman', fontWeight:'30px'}}>
                      Fashion Subscription Boxes
                    </Typography>
                    <Box sx={{ textAlign: "center", display: "block" }}>
                      <Typography variant="body2" sx={{fontFamily:'times new roman'}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. deserunt, rem Nec...
                      </Typography>
                    </Box>
                    <CardActions sx={{marginTop:"35px", alignItems:'center', justifyContent:'center' }}>
                      <Link
                        underline="hover"
                        sx={{
                          color: "#d87309",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        Learn more
                      </Link>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
