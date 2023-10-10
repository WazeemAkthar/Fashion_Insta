import React from "react";
import { Box, Container, Typography, useMediaQuery, Grid } from "@mui/material";
import { Card, CardCover, CardContent, CardActions } from "@mui/joy";
// import { deepOrange } from "@mui/material/colors";

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(deepOrange[500]),
//   backgroundColor: deepOrange[500],
//   justifyContent: { md: "center", xs: "left" },

//   "&:hover": {
//     backgroundColor: deepOrange[700],
//   },
// }));

const Explore = () => {
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
        <Container sx={{ marginTop: "5%" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "RobotoSlab-Black",
                fontSize: { xs: "25px", sm: "35px" },
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Explore Our Blog
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

          
          <Grid container spacing={2} marginTop={5}>
            <Grid item sm={9}>
              <Box display="flex" flexDirection="row" marginBottom={2}>
                <Grid item sm={5} marginRight={2}>
                  <Card
                    sx={{
                      borderRadius: "0px",
                      height: "200px",

                      objectFit: "cover",
                    }}
                  >
                    <CardCover sx={{ filter: "brightness(0.65)" }}>
                      <img
                        src="/Images/explor/clothing.jpg"
                        srcSet="/Images/explor/clothing.jpg"
                        alt=""
                      />
                    </CardCover>
                    <CardContent
                      sx={{ justifyContent: "end", alignItems: "center" }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "white",
                          fontFamily: "times new roman, sen serif",
                        }}
                      >
                        Clothing
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "right" }}>
                      <Box
                        sx={{
                          fontFamily: "Roboto Serif",
                          marginTop: { xs: "3%", sm: "5%" },
                          paddingX: "5%",
                          color: "white",
                          backgroundColor: "#000000",
                          paddingY: "5px",

                          borderRadius: "2px",
                          "&:hover": {
                            backgroundColor: "#d87309",
                            cursor: "pointer",
                          },
                        }}
                      >
                        Shop now
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item sm={7}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    height: "200px",

                    objectFit: "cover",
                  }}
                >
                  <CardCover sx={{ filter: "brightness(0.65)" }}>
                    <img
                      src="/Images/explor/fashiondesign.jpg"
                      srcSet="/Images/explor/fashiondesign.jpg"
                      alt=""
                    />
                  </CardCover>
                  <CardContent
                    sx={{ justifyContent: "end", alignItems: "center" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontFamily: "times new roman, sen serif",
                      }}
                    >
                      Fashion Design
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Box
                      sx={{
                        fontFamily: "Roboto Serif",
                        marginTop: { xs: "3%", sm: "5%" },
                        paddingX: "5%",
                        color: "white",
                        backgroundColor: "#000000",
                        paddingY: "5px",

                        borderRadius: "2px",
                        "&:hover": {
                          backgroundColor: "#d87309",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Shop now
                    </Box>
                  </CardActions>
                </Card>
                </Grid>
              </Box>

              <Box display="flex" flexDirection="row">
                <Grid item sm={7} marginRight={2}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    height: "200px",

                    objectFit: "cover",
                  }}
                >
                  <CardCover sx={{ filter: "brightness(0.65)" }}>
                    <img
                      src="/Images/explor/fachionaccessories.jpg"
                      srcSet="/Images/explor/fachionaccessories.jpg"
                      alt=""
                    />
                  </CardCover>
                  <CardContent
                    sx={{ justifyContent: "end", alignItems: "center" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontFamily: "times new roman, sen serif",
                      }}
                    >
                      Fachion Accessories
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Box
                      sx={{
                        fontFamily: "Roboto Serif",
                        marginTop: { xs: "3%", sm: "5%" },
                        paddingX: "5%",
                        color: "white",
                        backgroundColor: "#000000",
                        paddingY: "5px",

                        borderRadius: "2px",
                        "&:hover": {
                          backgroundColor: "#d87309",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Shop now
                    </Box>
                  </CardActions>
                </Card>
                </Grid>
                <Grid item sm={5}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    height: "200px",

                    objectFit: "cover",
                  }}
                >
                  <CardCover sx={{ filter: "brightness(0.65)" }}>
                    <img
                      src="/Images/explor/cosmetics.jpg"
                      srcSet="/Images/explor/cosmetics.jpg"
                      alt=""
                    />
                  </CardCover>
                  <CardContent
                    sx={{ justifyContent: "end", alignItems: "center" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontFamily: "times new roman, sen serif",
                      }}
                    >
                      Cosmetics
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Box
                      sx={{
                        fontFamily: "Roboto Serif",
                        marginTop: { xs: "3%", sm: "5%" },
                        paddingX: "5%",
                        color: "white",
                        backgroundColor: "#000000",
                        paddingY: "5px",

                        borderRadius: "2px",
                        "&:hover": {
                          backgroundColor: "#d87309",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Shop now
                    </Box>
                  </CardActions>
                </Card>
                </Grid>
              </Box>
            </Grid>
            <Grid item sm={3}>
            <Card
                  sx={{
                    borderRadius: "0px",
                    height:"450px",
                    objectFit: "cover",
                    
                  }}
                >
                  <CardCover sx={{ filter: "brightness(0.65)" }}>
                    <img
                      src="/Images/explor/modeling.jpg"
                      srcSet="/Images/explor/modeling.jpg"
                      alt=""
                    />
                  </CardCover>
                  <CardContent
                    sx={{ justifyContent: "center", alignItems: "center", marginTop:"58px" }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontFamily: "times new roman, sen serif",
                      }}
                    >
                      Modeling
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Box
                      sx={{
                        fontFamily: "Roboto Serif",
                        marginTop: { xs: "3%", sm: "5%" },
                        paddingX: "5%",
                        color: "white",
                        backgroundColor: "#000000",
                        paddingY: "5px",

                        borderRadius: "2px",
                        "&:hover": {
                          backgroundColor: "#d87309",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Shop now
                    </Box>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Explore;
