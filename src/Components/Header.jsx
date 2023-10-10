import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  styled,
  Button,
  Box,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { deepOrange } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[0],
  justifyContent: { md: "center", xs: "left" },
  "&:hover": {
    backgroundColor: deepOrange[700],
  },
}));

const box = {
  padding: "5px",
  margin: "6px",
};

const Header = () => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  console.log(theme);

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "white", boxShadow: "none", position:"sticky", marginTop:"10px"}}>
        <Container >
          <Toolbar
            sx={{
              
              alignItems: "center",
              display: { xs: "none", md: "flex", xl:"flex" },
              flexDirection: "row",
              paddingLeft:"0px", paddingRight:"0px"
              
            }}
          >
            <Grid container>
              <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "black" }}>FashionInsta</Typography>
              </Grid>
              <Grid item md={8}>
                <Box
                  sx={{
                    background: "#331D2C",
                    borderRadius: "16px",
                    width: "fit-content",
                    display: "flex",
                  }}
                >
                  <Box sx={{ padding: "5px", margin: "6px" }}>
                    <ColorButton>Home</ColorButton>
                  </Box>
                  <Box style={box}>
                    <ColorButton variant="text">MEN</ColorButton>
                  </Box>
                  <Box style={box}>
                    <ColorButton variant="text">WOMEN</ColorButton>
                  </Box>
                  <Box style={box}>
                    <ColorButton variant="text">KIDS</ColorButton>
                  </Box>
                  <Box
                    sx={{
                      padding: "2px",
                      borderRadius: "10px",
                      backgroundColor: "#bf360c",
                      margin: "10px",
                    }}
                  >
                    <ColorButton>LOGIN</ColorButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>

          {/* Header Responsive */}

          <Toolbar
            sx={{ 
              display: { md: "none", xs: "flex" },
              justifyContent: "space-between",
              paddingLeft:"0px", paddingRight:"0px"
            }}
          >
            <Typography sx={{ color: "black", marginRight: "auto" }}>
              FashionInsta
            </Typography>
            <IconButton
              sx={{ color: "black", marginLeft: "auto" }}
              onClick={() => setOpenDrawer(!OpenDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={OpenDrawer}
              anchor="right"
              onClose={() => setOpenDrawer(false)}
            >
              <Box style={box}>
                <ColorButton sx={{ color: "black" }}>Home</ColorButton>
              </Box>
              <Box style={box}>
                <ColorButton variant="text" sx={{ color: "black" }}>
                  MEN
                </ColorButton>
              </Box>
              <Box style={box}>
                <ColorButton variant="text" sx={{ color: "black" }}>
                  WOMEN
                </ColorButton>
              </Box>
              <Box style={box}>
                <ColorButton variant="text" sx={{ color: "black" }}>
                  KIDS
                </ColorButton>
              </Box>
              <Box style={box}>
                <ColorButton sx={{ color: "black" }}>LOGIN</ColorButton>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
