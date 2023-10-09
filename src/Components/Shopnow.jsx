import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

export default function Shop() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      sx={{
        justifyContent: "center",
        marginX: { xs: "5%", sm: "5%" },
        marginTop: { xs: "0%", sm: "2%" },
      }}
    >
      <Container
        sx={
          {
            // marginBottom:"5%",
          }
        }
      >
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
            Shop Now
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
            There are various type of fashion shops that cater to diferent
            styles, budgets, and target markets.
          </Typography>
        </Box>
        
        <Box>
          <Grid
            container
            sx={{ marginTop: { xs: "10px", sm: "30px" } }}
            spacing={{ sm: 4, xs: 1 }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // margin: "10px",
                  backgroundColor: { xs: "tansparent", sm: "#fe5f33" },
                  // width: "150px",
                  height: "100",
                  borderRadius: "10px",
                  transform: "rotate(-8deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/Images/Shopnow/image1.jpg"
                  alt="Departmentstore"
                  sx={{
                    // margin: "10px",
                  
                    objectFit: "cover",
                    width: { xs: "65dvw", sm: "150px", md: "180px" },
                    height: { xs: "200px", sm: "180px", md: "230px" },
                    borderRadius: { xs: "30px", sm: "10px" },
                    transform: "rotate(8deg)",
                    transition: "transform 0.3s, filter 0.3s",
                  
                  }}
                ></Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  marginTop: { xs: "5%", sm: "5%" },
                  fontFamily: "RobotoSlab-Black",
                  fontSize: { xs: "4dvh", sm: "2dvw" },
                }}
              >
                Department Store
              </Typography>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  marginTop: { xs: "3%", sm: "5%" },
                  paddingX: "5%",
                  color: "white",
                  backgroundColor: "#fe5f33",
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

              <Box
                sx={{
                  backgroundColor: "#999999",
                  height: "1px",
                  width: "90%",
                  marginY: "6%",
                  display: { xs: "flex", sm: "none" },
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // margin: "10px",
                  backgroundColor: { xs: "tansparent", sm: "#fe5f33" },
                  // width: "245px",
                  height: { md: "310px", sm: "220px", xs: "none" },
                  borderRadius: "10px",
                  transform: "rotate(-8deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/Images/Shopnow/image2.jpg"
                  alt="Loading...."
                  sx={{
                    // margin: "10px",
                    
                    objectFit: "cover",
                    width: { md: "230px", sm: "150px", xs: "65dvw" },
                    height: { md: "310px", sm: "220px", xs: "200px" },
                    borderRadius: { xs: "30px", sm: "10px" },
                    transform: "rotate(8deg)",
                    transition: "transform 0.3s, filter 0.3s",
                   
                  }}
                ></Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  marginTop: { xs: "2%", sm: "5%" },
                  fontFamily: "RobotoSlab-Black",
                  fontSize: { xs: "4dvh", sm: "2dvw" },
                }}
              >
                Boutique
              </Typography>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  marginTop: { xs: "2%", sm: "5%" },
                  paddingX: "5%",
                  color: "white",
                  backgroundColor: "#fe5f33",
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
              <Box
                sx={{
                  backgroundColor: "#999999",
                  height: "1px",
                  width: "90%",
                  marginY: "6%",
                  display: { xs: "flex", sm: "none" },
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // marginTop:{xs:'5%',sm:"0%"},
              }}
            >
              <Box
                sx={{
                  // margin: "10px",
                  backgroundColor: { xs: "tansparent", sm: "#fe5f33" },
                  // width: "150px",
                  height: "200",
                  borderRadius: "10px",
                  transform: "rotate(-8deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/Images/Shopnow/image3.jpg"
                  alt="Loading...."
                  sx={{
                    // margin: "10px",
                    
                    objectFit: "cover",
                    width: { xs: "65dvw", sm: "150px", md: "180px" },
                    height: { xs: "200px", sm: "180px", md: "230px" },
                    borderRadius: { xs: "30px", sm: "10px" },
                    transform: "rotate(8deg)",
                    transition: "transform 0.3s, filter 0.3s",
                  
                  }}
                ></Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  marginTop: "5%",
                  fontFamily: "RobotoSlab-Black",
                  fontSize: { xs: "4dvh", sm: "2dvw" },
                }}
              >
                Luxary Fashion Store
              </Typography>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  marginTop: { xs: "2%", sm: "5%" },
                  paddingX: "5%",
                  color: "white",
                  backgroundColor: "#fe5f33",
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
              <Box
                sx={{
                  backgroundColor: "#999999",
                  height: "1px",
                  width: "90%",
                  marginY: "4%",
                  display: { xs: "flex", sm: "none" },
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
