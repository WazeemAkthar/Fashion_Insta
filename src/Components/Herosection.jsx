import {
  Grid,
  Box,
  Container,
  Typography,
  ListItem,
  Link,
  List,
} from "@mui/material";
import React from "react";
import HeroImageslider from "./Imageslider";
import sliderimages  from "./Imagesliderdata";


const Herosection = () => {
  return (
    <React.Fragment>
      <Container sx={{ marginTop: "10px", justifyContent: "space-between" }}>
        <Box sx={{ width: "100%", backgroundColor: "black", height: "2px" }} />

        <Grid
          container
          marginTop={"23px"}
          sx={{
            display: { sm: "flex", xs: "flex" },
            justifyContent: { sm: "space-between" },
            alignItems: { sm: "flex-start" },
            flexWrap: { sm: "nowrap" },
          }}
        >
          <Grid item md={4} sm={4} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Typography>
              Fashion is a form of self exprestion. It's a way to show the world
              who you are and whst you stand for
            </Typography>
          </Grid>

          <Grid
            item
            md={4}
            xs={9}
            sm={5}
            sx={{
              textAlign: "center",
              paddingLeft: { lg: "40px", md: "80px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "RobotoSlab-Black",
                fontSize: { xs: "28px", sm: "27px" },
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              CHOOSE YOUR FASHION STYLE
            </Typography>
          </Grid>

          {/* 1 */}
          <Grid item md={4} sm={2}>
            <List sx={{ padding: "0" }}>
              <ListItem
                sx={{
                  justifyContent: "end",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Link>Instagram</Link>
              </ListItem>
            </List>

            {/* 2 */}
            <List sx={{ padding: "0px" }}>
              <ListItem
                sx={{
                  justifyContent: "end",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Link>Facebook</Link>
              </ListItem>
            </List>

            {/* 3 */}
            <List sx={{ padding: "0px" }}>
              <ListItem
                sx={{
                  justifyContent: "end",
                  paddingRight: "0px",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Link>Twitter</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box>
        <HeroImageslider slides={sliderimages} />
       
      </Box>
    </React.Fragment>
  );
};

export default Herosection;
