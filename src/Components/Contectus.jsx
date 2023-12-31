import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  useMediaQuery,
  Button,
  styled,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { deepOrange } from "@mui/material/colors";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
  justifyContent: { md: "center", xs: "left" },

  "&:hover": {
    backgroundColor: deepOrange[700],
  },
}));

const Contectus = () => {
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
              Contact Us
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

          <Box sx={{ marginTop: "80px" }}>
            <Grid container spacing={2}>
              <Grid item container md={4} spacing={2} direction="column">
                <Grid container spacing={3}>
                  <Grid
                    item
                    container
                    md={2}
                    sx={{ justifyContent: "space-around", marginLeft:"5px" }}
                  >
                    <Box
                      sx={{
                        border: "2px solid",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                        height: "fit-content",
                      }}
                    >
                      <PhoneInTalkIcon fontSize="large" color="#FFA500" />
                    </Box>
                  </Grid>

                  <Grid item md={8} xs={12} sx={{textAlign:{xs:"center", sm:"left"}}}>
                    <Typography component="div">Phone Number</Typography>
                    <Typography variant="h6">077 4588 728</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} marginTop="2px">
                  <Grid
                    item
                    container
                    md={2}
                    sx={{ justifyContent: "space-around" }}
                  >
                    <Box
                      sx={{
                        border: "2px solid",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                        height: "fit-content",
                      }}
                    >
                      <EmailIcon fontSize="large" color="#FFA500" />
                    </Box>
                  </Grid>

                  <Grid item md={8} xs={12} sx={{textAlign:{xs:"center", sm:"left"}}}>
                    <Typography component="div">Email Address</Typography>
                    <Typography variant="h6">
                      contect@fashioninsta.com
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} marginTop="2px">
                  <Grid
                    item
                    container
                    md={2}
                    sx={{ justifyContent: "space-around" }}
                  >
                    <Box
                      sx={{
                        border: "2px solid",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                        height: "fit-content",
                      }}
                    >
                      <LocationOnIcon fontSize="large" color="#FFA500" />
                    </Box>
                  </Grid>

                  <Grid item md={8} xs={12} sx={{textAlign:{xs:"center", sm:"left"}}}>
                    <Typography component="div">Location</Typography>
                    <Typography variant="h6">Londan, United Kingdom</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container md={8} spacing={2}>
                             
                <Grid item md={6} xs={12} sx={{ objectFit: "cover" }}>
                  <TextField
                    label="First Name"
                    placeholder="Enter Your First Name"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Email address"
                    placeholder="Enter Your Email address"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Phone Number"
                    placeholder="Enter Your Phone Number"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Cuntry"
                    placeholder="Enter Your Cuntry Name"
                    fullWidth
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                 
                  <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                 
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    label="Massage"
                    placeholder="Tell Us about your spcial requirment"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <ColorButton type="submit" fullWidth>
                    Submit
                  </ColorButton>
                </Grid>
              
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Contectus;
